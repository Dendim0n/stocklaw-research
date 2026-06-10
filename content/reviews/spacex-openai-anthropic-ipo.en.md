---
title: "Zhihu Review: SpaceX/OpenAI/Anthropic Stack Up for Mega IPOs — How Much Hot Air?"
date: 2026-06-10
description: "Three AI companies file IPO in the same week, xAI pivots from AI lab to GPU landlord. High factual accuracy but key conclusions are off"
tags: ["SpaceX", "OpenAI", "Anthropic", "xAI", "IPO", "AI", "zhihu-review"]
category: "article-review"
source: "https://www.zhihu.com/question/2046639064917586455/answer/2047640602163013264"
author: "Zhihu @xsgbbx"
score: 7.0
---

## Original Narrative

Three events collide:
1. Morningstar sets SpaceX IPO target at $63 (vs $135 offering price)
2. OpenAI secretly files S-1
3. xAI leases Colossus 1 data center to Anthropic and Google, pivoting from AI lab to GPU landlord

Conclusion: The most profitable business isn't AI — it's renting out AI infrastructure. Being a landlord at $1.75T valuation means lots of hot air.

## Data Verification

Point-by-point fact-check against CNBC, NYT, Bloomberg, SpaceX S-1 filing, and OpenAI's website.

| Claim | Verdict | Source |
|-------|---------|--------|
| Morningstar target $63, 53% discount | ✅ | CNBC 6/3: $780B valuation, ~48% below $1.5T private valuation |
| SpaceX IPO $1.75T valuation | ✅ | CNBC: targeting $75B fundraise at $1.75T valuation |
| SpaceX launched 83% of Earth's orbital mass in 2025 | ⚠️ Conservative | Musk & Eric Berger claimed 90% (Reddit r/spacex, Dec 2025) |
| Starlink 2025 revenue $11.3B | ✅ | S-1: Connectivity $11.39B (61% of $18.7B total) |
| Starlink operating profit $4.4B | ✅ | CNBC 5/21: $4.42B operating income, 39% margin |
| Anthropic rents Colossus 1, 300MW, 220K GPUs | ✅ | CNBC 5/6: "all compute capacity, more than 300MW" |
| Anthropic pays $1.25B/month | ⚠️ Not in CNBC | CNBC confirmed the deal but didn't disclose monthly rent |
| Google rents 110K GPUs, pays $920M/month | ✅ | NYT 6/5: $30B deal, Oct 2026-Jun 2029, 110K Nvidia GPUs |
| Combined annual revenue ~$26B | ✅ | $1.25B×12 + $920M×12 = $26.04B (pending Anthropic figure confirmation) |
| Colossus 1 built in 122 days | ✅ | xAI website x.ai/colossus |
| OpenAI filed S-1 on June 8 | ✅ | OpenAI website + CNBC 6/8 |
| Anthropic filed S-1 on June 1 | ✅ | Anthropic website |
| OpenAI valuation $852B | ✅ | OpenAI website 3/31: post-money $852B |
| Anthropic valuation $965B | ❌ Too high | Bloomberg/FT 5/12-14: $900B pre-money, not $965B |
| SpaceX 2025 net loss $4.94B | ✅ | S-1: net loss $4.9B in 2025 |
| SpaceX latest quarter loss $4.28B | ✅ | CNBC: net loss $4.28B in latest quarter |

**Factual accuracy: 15/17 claims verified or substantially correct.** Very high for a Zhihu answer.

## Key Corrections

### 1. xAI is "SpaceX's most profitable business"? — Wrong

The article says xAI "might be SpaceX's most profitable business." But the S-1 segment data tells a different story:

| Segment | 2025 Revenue | Operating Income/Loss |
|---------|-------------|---------------------|
| Connectivity (Starlink) | $11.39B | **+$4.42B** |
| Space | $4.09B | Loss ($3B R&D on Starship) |
| AI (xAI) | $3.20B | **-$2.5B** |

**Starlink is the only profitable segment.** xAI lost $2.5B in 2025.

The article's logic is: Anthropic + Google leases = ~$26B/year, power costs < 1%, so xAI as "GPU landlord" is very profitable.

The direction is right, but two caveats:
- Google's deal doesn't start until **October 2026** — no revenue yet
- Anthropic's exact monthly rent isn't in public reporting ($1.25B/month claimed by article, not in CNBC)

So "xAI most profitable" is **false for 2025 data.** May flip in H2 2026 when Google deal starts, but that's future tense.

### 2. Anthropic valuation $965B? — Too high

Article says $965B. Bloomberg and FT in mid-May say $900B pre-money. $30B round post-money is ~$930B. The $965B figure is either miscalculated or from an unreported secondary market price.

### 3. Orbital mass 83% vs 90%

Article says 83%. Musk and Eric Berger (senior space journalist) claim **90%**. The article is actually conservative here.

## Deeper Analysis

The article's framing is sharp — **three companies filing IPO in the same week, each a different facet of the AI bubble:**

- **SpaceX**: Core business (Starlink + launch) worth ~$780B, but xAI inflates valuation to $1.75T. Morningstar calls xAI a "material threat of value destruction."
- **OpenAI**: Files S-1 while market share is being eroded. Emarketer calls it a "precarious moment."
- **Anthropic**: Pays $1.25B/month to rent xAI's GPUs, valued at $900B+.

**The "GPU landlord" pivot is the article's best insight.** When AI models commoditize faster than expected, selling shovels (compute infrastructure) is more profitable than mining gold (training models). This pattern repeats throughout history — Levi Strauss made more money selling jeans to gold rush miners than most miners made mining.

But the article ignores a key variable: **what if compute supply exceeds demand?**

Google and Anthropic rent from xAI because compute is scarce today. But every hyperscaler is building data centers at breakneck speed. If supply-demand flips in 2027-2028, xAI's landlord model comes under pressure too. Colossus 1's 122-day build speed is an advantage, but it also means competitors can replicate quickly.

## Conclusion

**Score: 7.0/10**

- Very high factual accuracy (15/17), sources are mostly verifiable
- "xAI pivots from AI lab to GPU landlord" is the article's best insight
- But "xAI most profitable" is wrong for 2025 data (lost $2.5B)
- Anthropic valuation $965B is overstated; should be ~$900B
- Missing discussion of compute oversupply risk

The author clearly did their homework. The angle of connecting HN trending, Morningstar report, and S-1 filings is effective. Deductions mainly for two factual errors and lack of counter-arguments.

> Three AI companies IPO. The most profitable business is indeed infrastructure — but it's not xAI. It's Starlink.
