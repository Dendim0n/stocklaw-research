#!/usr/bin/env python3
"""Validate Hugo content frontmatter before commit.
Checks every content/**/*.md parses as valid TOML (+++) or YAML (---).
Exit 1 if any file is malformed. Designed to run as a git pre-commit hook."""
import sys
import re
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
CONTENT = REPO / "content"

def parse_toml(text):
    import tomllib
    return tomllib.loads(text)

def parse_yaml(text):
    import yaml
    return yaml.safe_load(text)

def check_file(p):
    text = p.read_text(encoding="utf-8")
    if not text.lstrip().startswith(("+++", "---")):
        return None  # not a content file with frontmatter
    # find the first frontmatter block
    m = re.match(r"^\s*(\+\+\+|---)\n", text)
    if not m:
        return f"no frontmatter opener: {p}"
    delim = m.group(1)
    # find closing delimiter
    body = text[m.end():]
    cm = re.match(r"(.*?)^%s\s*$" % re.escape(delim), body, re.M | re.S)
    if not cm:
        return f"unclosed frontmatter ({delim}): {p}"
    fm_text = cm.group(1)
    try:
        if delim == "+++":
            parse_toml(fm_text)
        else:
            parse_yaml(fm_text)
    except Exception as e:
        return f"frontmatter parse error in {p}: {e}"
    return None

errors = []
for p in sorted(CONTENT.rglob("*.md")):
    err = check_file(p)
    if err:
        errors.append(err)

if errors:
    print("❌ Frontmatter validation FAILED:")
    for e in errors:
        print("  " + e)
    sys.exit(1)
else:
    print("✅ All content frontmatter valid")
    sys.exit(0)
