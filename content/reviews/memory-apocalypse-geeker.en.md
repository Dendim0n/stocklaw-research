---
title: "Zhihu Analysis: Memory Apocalypse & Geeker's AI Survival Guide"
date: 2026-06-08
description: "From geeker's perspective on AI supply chain: HBM capacity crowding out consumer memory, edge inference is the endgame"
tags: ["Memory", "HBM", "DDR4", "DDR5", "Micron", "Edge-Inference", "Geeker"]
category: "article-review"
source: "https://www.zhihu.com/question/48270828/answer/2035151033299646186"
author: "Zhihu @施耐泽"
score: 7.0
---

## Original Core Argument

AI data centers crowding out HBM capacity causes consumer memory prices to surge (DDR5 +300%, DDR4 +172%). Geeker's old devices are not on current supply chain, becoming "anti-inflation assets." Three recommended items: M1 headless MacBook (<1000 RMB), 2080Ti modded 22G (1800 RMB), Angle Cloud/Wanke Cloud (40-200 RMB). Judgment: LLM has no moat, edge inference is the endgame, bubble will burst.

## Fact-Checking

| Claim | Verification | Source |
|-------|--------------|--------|
| DDR4 spot price surged 172% | ✅ Confirmed: Jan 2026 vs Dec 2025 | Cailian Press |
| DDR5 price up 300%+ | ✅ Confirmed: Since Sep 2025 | 21 Jingji |
| Micron stock up 600% in one year | ⚠️ Underestimated: ~$93 a year ago, ~$864 now, ~830% gain | Yahoo Finance |
| Memory shortage until 2027 | ✅ Confirmed: Morgan Stanley says 2-3 years | Investopedia |
| HBM crowding out consumer memory | ✅ Confirmed: HBM4 unit price $560, DDR4/LPDDR4 wafer production declining | EE Times China |
| 256G DDR5 server memory >40K RMB | ✅ Confirmed | JW View, Zhihu |

## Logic Analysis

### What the Article Gets Right

1. **Memory price chain is correct**
   - HBM demand → capacity shift → DDR5 up → DDR4 follows up
   - Transmission logic is clear and data-supported

2. **"Geeker anti-inflation" angle is interesting and real**
   - Old devices not on current supply chain, unaffected by price surge
   - DDR4 from 155 RMB to 897 RMB, ~6x increase
   - This is a real "alternative asset"

3. **Edge inference as endgame judgment makes sense**
   - Open-source models getting stronger (Qwen, Llama, etc.)
   - Quantization, distillation, MoE lower local deployment barriers
   - Privacy, latency, cost triple drivers

### Where the Article Falls Short

1. **"LLM has no moat" is too absolute**
   - Model capabilities can catch up, but data flywheel, ecosystem, user stickiness can't
   - OpenAI's moat isn't GPT-4 itself, but user habits and API ecosystem

2. **"Bubble will burst" is too optimistic**
   - No timeframe given
   - Doesn't consider AI may create new demand (not just replace old)
   - Historical "bubble burst" predictions are often too early

3. **Geeker item values are overstated**
   - 2080Ti modded 22G can run 7B models, but not larger ones
   - M1 MacBook 8GB struggles with local models
   - These are "usable," not "good"

## Conclusion

This is an interesting "non-mainstream" perspective article with solid factual foundation (memory price data accurate) and coherent logic. Its greatest value is explaining AI supply chain cost transmission clearly — from HBM to consumer memory, from data centers to geeker's second-hand market.

The "edge inference is endgame" judgment deserves serious consideration, but "LLM has no moat" and "bubble will burst" are too absolute.

**One-line summary**: Memory price chain logic is clear; edge inference judgment has value; but "bubble burst" is too optimistic.
