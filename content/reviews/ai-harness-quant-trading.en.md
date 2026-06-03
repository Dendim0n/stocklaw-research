---
title: "Zhihu Review: When AI Starts Mining Factors Autonomously — The Harness Era of Quantitative Trading"
date: 2026-06-03
description: "Analysis of Zhenjiansenseng's article on Harness Engineering for AI-driven quantitative trading"
tags: ["AI", "quantitative trading", "harness engineering", "factor mining", "risk management"]
category: "article-review"
source: "https://zhuanlan.zhihu.com/p/2040551098306520949"
author: "Zhihu @真剑圣 (Zhenjiansenseng)"
score: 7.5
---

## Core Arguments

The author divides quantitative investment research into three eras: Factor Engineering → Data & Backtesting Engineering → Harness Engineering (the current stage). The central thesis: **the more capable AI becomes, the more it needs external constraint systems to ensure its outputs are usable.**

The article proposes a six-layer Harness architecture: Instruction Layer, Context Layer, Tool Layer, Boundary Layer, Feedback Layer, and Governance Layer. Three case studies (factor mining, portfolio optimization, multi-agent systems) demonstrate Harness applications in quantitative scenarios.

## Assessment

### What the Article Gets Right

**1. "300 papers yield 20 factors, 18 are problematic" — this is accurate.**

The biggest risk in AI-driven factor mining isn't finding nothing; it's finding a pile of things that look effective but don't withstand scrutiny. Overfitting, data leakage, regime dependence — these old problems are amplified tenfold by AI's execution speed. A traditional researcher mines 5 factors a week, 3 might be problematic. AI mines 20 overnight, 18 are problematic. The ratio hasn't changed, but the absolute volume has exploded.

**2. The Feedback Layer design — reusing existing quantitative metrics.**

Using IC, ICIR, stratified returns, turnover, and other metrics that quantitative researchers have used for over a decade as AI feedback signals is a pragmatic approach. The quantitative field doesn't need to invent a new evaluation system for AI — it can directly reuse what exists. This is why the author says "quantitative finance may be one of the domains where AI agents can produce results fastest" — the infrastructure is already there.

**3. Boundary Layer > Instruction Layer — constraints matter more than directions.**

Telling AI what it cannot do (no future data, no full-sample parameter selection) is more critical than telling it what to do. AI is highly efficient at finding factors, but equally efficient at finding "fake factors." Every red line in the system is a lesson paid for in real money.

### Where the Article Falls Short

**1. The article underestimates the severity of the regime problem.**

The author mentions regime but treats it as merely an input to the "Context Layer." In reality, regime switching is the most lethal blind spot for quantitative AI. Factors mined by AI in a single regime may collapse simultaneously when the regime changes. This isn't something Harness can solve — it's the inherent non-stationarity of markets.

The February 2024 microcap crisis is a textbook example: numerous strategies based on low-volatility factors failed simultaneously. If AI had mined a batch of "low-volatility anomaly" factors in late 2023, no amount of Harness refinement could have foreseen this structural collapse.

**2. The "minimal four-piece kit" has high maintenance costs in practice.**

AGENTS.md, init_backtest.sh, factor_calendar.json, research_log.md — sounds elegant, but the real challenge is maintaining these files accurately and promptly. Humans can't even be bothered to write their own trading logs; how do we expect AI to maintain research_log? A more realistic approach: let AI auto-generate logs first, have humans review periodically, and gradually increase automation as trust builds.

**3. Multi-agent "permission separation" suffers significant information loss in practice.**

Three AI agents collaborating — factor mining, portfolio optimization, risk control — sounds beautiful in theory, but information inevitably degrades during transmission. Subtle logic discovered by the factor AI may not be understood by the portfolio AI, let alone the risk control AI. Currently, a single-agent + strong-constraint approach is more reliable than multi-agent coordination.

### On the Harness Debate

The article references the debate between Boris Cherny and Addy Osmani on whether Harness will disappear as model capabilities increase. The author concludes that in quantitative finance, Harness's core value isn't eliminating "comprehension debt" but moving it from one person's head into a structured system.

This judgment is largely correct. But I'd add: **Harness itself can become a form of technical debt.** When market conditions change, previously set constraints may become shackles. For example, if an AI model suddenly becomes adept at reading implicit information in financial statement footnotes, but your Harness restricts it to daily price-volume data only — that constraint transforms from "protection" to "limitation."

## Conclusion

This is a well-structured, pragmatically-minded article. The six-layer architecture is a useful framework, and the three case studies have practical applicability. Deductions are mainly for: insufficient depth on the regime problem, and some recommendations being overly idealistic.

**Score: 7.5/10**

The core value isn't the six-layer architecture itself, but the underlying理念 it conveys: **In the AI era of quantitative research, the competitive moat shifts from "who has smarter factors" to "who has better system design."** Factors can be quickly replicated by AI, but a Harness system that has accumulated extensive red lines and feedback through long-term iteration is difficult to replicate.

## Practical Takeaways

1. **Add a "red line check" module to factor analysis pipelines** — verify whether factors use future data or select optimal parameters across the full sample. Low cost, high reward.

2. **Factor lifecycle tracking** — record each factor's journey: hypothesis → development → backtest → validation → live → decay. Structured storage, not scattered across Excel files and notebooks.

3. **Regime tagging** — automatically tag the current market regime (high/low volatility, trending/ranging) during each analysis, enabling quick assessment of a conclusion's applicable scope when reviewing later.

4. **The prompt tells the AI where to go; the Harness keeps it on track for the full journey.** But tracks themselves become outdated. Markets change, and Harness must evolve with them. There is no set-and-forget system — only continuous iterative discipline.
