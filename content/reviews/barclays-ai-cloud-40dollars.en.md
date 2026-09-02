---
title: "Zhihu Review: For Every $100 AI Companies Earn, ~$40 Flows to Cloud Giants"
date: 2026-09-01
description: "Verifying Zhihu @旷野's analysis of the Barclays AI Unit Economics report: depreciation lag, revenue recognition, 2028 impairment risk, and the probability of the revenue curve"
tags: ["AI", "Barclays", "Cloud", "Depreciation", "Unit Economics", "Zhihu"]
category: "article-review"
source: "https://www.zhihu.com/question/2078089685260137735/answer/2078195887956927751"
author: "Zhihu @旷野"
score: 7.0
---

# Zhihu Review: For Every $100 AI Companies Earn, ~$40 Flows to Cloud Giants

## Background

Zhihu @旷野 answered the question "How should we view the phenomenon that for every $100 AI companies earn, nearly $40 flows to cloud giants Amazon, Microsoft, and Google?" His core thesis: the 40% headline number is the least important sentence in the whole report. What actually matters is: ①of the $35-40, about $35 is genuine inference compute cost; the rest is legacy equity/channel arrangements (the OpenAI-Microsoft 20% revenue share, which goes to zero after 2028); ②the clouds' 35-45% operating margin is on the income statement, not the cash flow statement — depreciation lags capex by 5-6 years and lands in a concentrated wave around 2028; ③Nvidia is the only link in the chain that gets paid before delivering; ④gross vs. net revenue recognition on indirect API will distort any OpenAI/Anthropic revenue comparison; ⑤the core risk is the denominator — AI lab revenue from $7B in 2024 to $690B in 2028, a 5x in two years. If that curve fails, all margin discussion becomes impairment discussion.

---

## Verdict

Bottom line first: **the author is one of the few people who actually read the Barclays report carefully — the 40% headline is indeed the least important sentence, and his digging into depreciation, revenue recognition, and the denominator is directionally right. Most of the data checks out, but the "40% is good news" framing is itself a bit of a sleight of hand, and he missed several harder counter-signals from the same week. Score 7.0/10.**

## 📊 Data Verification (as of 2026-09-01)

| Article claims | Actual data | Verdict |
|---|---|---|
| Barclays: per $100 AI revenue → $35-40 to big-three clouds, clouds keep $10-20 operating profit (35-45% margin) | Barclays "A Primer on AI Lab & AI Hyperscaler Unit Economics" (2026-08-27/28) confirms: Lab A (API-heavy) 35/11.8/34%, Lab B (80% sub + 20% rev share) 41/19.1/47% | ✅ Accurate |
| Stripping out revenue share, per-token profit is basically uniform | Core sentence of the Barclays report | ✅ Accurate |
| Cloud AI revenue / AI lab revenue: 2024 153% → 2026 90% → 2028 73% | Matches Barclays projections | ✅ Accurate |
| Training as % of lab revenue: 2024 96% → 2026 48% → 2027 35% → 2028 30% | Matches Barclays projections | ✅ Accurate |
| Big-four cloud capex $433.9B vs ~$149B depreciation (~1/3) | Trailing 4Q through Mar 2026: $433.9B capex vs ~$149B D&A (Silicon Analysts); 2026 guidance sums to ~$700B | ✅ Accurate |
| Amazon cut server life 6→5 years in Jan 2025 + accelerated depreciation | 10-K confirms: D&A +$1.4B, net income -$1.0B, reason "increased pace of technology development, particularly AI/ML"; had extended 5→6 in Jan 2024 (+$2.5B net income). Four changes in six years: 3→4→5→6→5 | ✅ Accurate |
| Debt: Meta $30B + $27B SPV, Alphabet ~$56B, Amazon ~$40B | Meta Oct 2025 $30B + Blue Owl SPV ~$27B; Alphabet Nov 2025 $25B + Feb 2026 ~$31B; Amazon Nov 2025 $15B + Jul 2026 $24.9B | ✅ Accurate |
| 2026 AI lab revenue $137B → 2028 $690B (ARR $200B end-2026 / $782B end-2028) | Matches Barclays. Reality: OpenAI ARR $40B (Aug), Anthropic ARR $65B (end-Jul), combined $105B | ✅ Forecast vs reality diverges, see below |

**Verdict: virtually all key data in the article checks out — a rare quality in Zhihu's finance section.**

---

## 🔍 Logic Deconstruction

### Three points that hold up:

1. **Depreciation lagging capex is the most valuable angle in the whole piece** — Big-four capex $433.9B vs depreciation $149B leaves roughly $285B/year of cash already spent but not yet on the income statement. The 35-45% cloud margin is front-loaded and diluted. Amazon already cut servers from 6 to 5 years in 2025, demonstrating on its own statements what this looks like — just early and small.
2. **Nvidia is the only link in the chain that gets paid before delivering** — 75% data-center gross margin, cash collected upfront, clean receivables. A sharp observation.
3. **Gross vs. net on indirect API** — before comparing OpenAI/Anthropic revenue, you must ask about accounting treatment. The Uber/Lyft analogy is apt.

### Three flaws:

1. **⚠️ "153%→90% is good news" is a sleight of hand** — The 2024 ratio of 153% was never a steady-state economic ratio: that was OpenAI burning Azure commitments while its own recognized revenue was only $7B — a denominator too small to mean anything. The falling ratio is partly mechanical denominator catch-up, not evidence that unit-economics improvement is all real. The author's own closing line — "what matters is the denominator, not the split" — quietly undermines his own "good news" thesis.
2. **⚠️ Inference margins jumping from teens to 55-65% in a year, direct API >80%, is Barclays' model output, not disclosed data** — An industry that was subsidizing inference a year ago doesn't become Datadog-grade in one year; discount that number. There's also an internal contradiction: if inference margin were truly 80%, after paying 35% to the cloud you'd still have 45%+, and the "40% to cloud" wouldn't be a story at all — the real burden would have to be training, which is exactly the 48% he identifies. That judgment is right, but don't treat 80% as realized fact.
3. **⚠️ The China section's 134% figure is fragile** — the model assumes 100% GPU utilization and 90% cache hit rate, which even the authors admit are theoretical upper bounds (industry actual ~70%). Drop utilization to 70% and the result goes from -65K/month to -10~20K/month. Direction unchanged, magnitude entirely assumption-driven. Reference it, don't cite it as fact. The structural point — big Chinese tech treats API as a cloud-ecosystem funnel, independent vendors have no cloud to fall back on and can only raise prices — is genuine.

### What the author missed — things happening in 2026 right now:

1. **Alphabet did a $84.75B equity raise in June 2026 — the largest ever by a listed company.** Bond issuance can be called "pre-funding"; dilution on this scale says management itself isn't confident in the FCF payback timeline. The article talks about bonds throughout and never mentions the equity.
2. **Oracle was downgraded to BBB- by S&P in July** — reason: surging capex, negative FCF, customer concentration. The credit story is already biting.
3. Barclays' own models give **Meta negative FCF in 2027/2028**.
4. **Meta was reported to be preparing a cloud business** (Zuckerberg: "definitely on the table") — a signal that internal AI demand can't absorb capacity, i.e. another player about to dump capacity into the market. Meta +17% in the first half of July as the market rewards a second monetization path; I'd rather read it as an early oversupply signal.

### A counterpoint on depreciation:

The author frames 5-6 year depreciation as an accounting trick, but FactSet offers a counter: H100/A100 secondhand prices and contracted GPU lease rates remain firm, meaning the chips still have economic life in the market — 5-6 years isn't pure fantasy. The real risk isn't "fraudulent depreciation," it's "depreciation betting that scarcity lasts to 2028" — and scarcity is a cyclical phenomenon. The "prepaid receipt" metaphor is right, but the collateral on that receipt is today's scarcity, and scarcity dissipates.

---

## 📌 My Independent Assessment

### What "the $700B turning into concrete" actually means

The clouds' income statement today is a prepaid receipt — every dollar of profit recorded today is borrowed from 2028. Big-four capex $433.9B vs depreciation $149B leaves ~$285B/year of "cash spent, cost unrecognized." Depreciation over 5-6 years bets the GPUs last 5-6 years; their real economic life is ~3 years (Nvidia ships a new architecture every year; two generations back, there's no secondhand market). If technology or demand disappoints in 2027-2028, equipment retires early and the excess of book value over recoverable value must be impaired — not slowly, but in one quarter, tens of billions at once. "Concentrated" because all four clouds bought in the same 2024-2026 window, and 2028 is simultaneously the depreciation peak, the retirement point, and — per Barclays' own forecast — when self-built capacity comes online and clouds lose share. Weak demand plus expiring assets, squeezed from both ends.

### Impact on the AI industry

1. **Accounting lag buys overinvestment a 5-6 year grace period — at the cost of a more concentrated pop.** This directly explains why clouds can borrow $700B and Alphabet can do the largest equity raise in history without stopping: management has done the math — grab territory first, trouble is five years out. The difference from the dot-com bubble: in 2000, the burn showed up on income statements the same year and popped fast; this cycle's flaw is deferred 5-6 years by accrual accounting, but the misallocation accumulates larger. The bubble isn't prevented, it's postponed — with interest.
2. **The three players in the capital chain get hurt completely differently** — Clouds go from cash printers to debt carriers (~$285B/year unrecognized cost + debt + dilution + impairments); Nvidia goes from "the only one paid upfront" to "the next one worrying about orders" (demand entirely riding on cloud capex); AI labs go from "the ones being drained" to "beneficiaries of a buyer's market" (self-built compute comes online, compute supply releases, prices fall, training-cost share declines faster — not because AI companies got stronger, but because compute shifted from a seller's market to a buyer's market).
3. **The denominator decides everything** — AI lab revenue $137B (2026) → $690B (2028), 5x in two years. If it delivers, the depreciation wall is just "an affordable expansion cost"; if it delivers half, all margin discussion becomes impairment discussion and the first to bleed are the companies that already signed $700B of debt. What drives that curve is not GPU shipments and not cloud margins — it's end-user paid demand.

### Can the revenue curve deliver? Reality vs. Barclays

| | End-2025 | Mid-2026 | Growth |
|---|---|---|---|
| OpenAI ARR | $20B | $40B (Aug) | 2x, breakout in July after 5-month plateau |
| Anthropic ARR | $9B | $65B (end-Jul) | 7x |
| **Combined** | **$29B** | **$105B** | — |

- **End-2026 ARR $200B: likely achievable (60-70%).** The two labs alone are at $105B; add xAI, Google/Meta external API and others, and $200B by year-end is realistic. Critically, growth is accelerating — Anthropic Q2 revenue $11.5B, +143% QoQ, first quarter of positive adjusted operating income. Enterprises pay for output, not tokens; incremental unit economics are genuinely repairing.
- **2028 revenue $690B / ARR $782B: roughly 30% probability.** Three reasons: ①the math demands 7.4x in two years, ~170% annualized off a $100B+ base — no precedent; ②the hardest contradiction: Anthropic's own 2028 guidance is $19-20B (Reuters; its IPO valuation rests on it) — just 3% of Barclays' $690B pie — meaning the bulk of that denominator isn't OpenAI/Anthropic at all, either Big Tech's own reported "AI revenue" or a much wider definition that can't be independently verified; ③cross-check fails: Nvidia data-center revenue alone is $89B/quarter, ~$360B annualized, while AI lab revenue is $137B — the Barclays model implicitly requires compute-efficiency leap + large price cuts + demand explosion all at once.
- **Incremental economics are repairing; the stock is far from it** — OpenAI gross margin is only 33%; 2026 inference costs est. $14.1B; cash burn ~$27B in 2026, doubling to ~$63B in 2027. Don't be fooled by the "80% inference margin": that's the best-case incremental scenario; on the stock, training plus total inference cost still pins overall gross margin to the floor.

### Which names not to touch — risk tiers

**The standard for "don't touch" is not whether it's expensive; it's whose statement blows up first when the denominator fails.**

🔴 **Tier 1 (first to blow when the denominator fails — don't touch):**
- **ORCL** — negative FCF, capex at 174% of operating cash flow, already downgraded to BBB-, 15-19 year lease commitments. Highest leverage and weakest cash flow in the chain, building capacity for OpenAI while carrying its own depreciation wall. The 12.9 forward P/E is a trap — it's earnings projected on the assumption the depreciation wall doesn't exist.
- **PLTR** — 70x P/S, 159x trailing P/E. The purest pricing of the AI narrative. No capex, no depreciation — but 70x P/S means perfection is fully priced in; the moment the curve slows, the de-rating is the most violent.
- **SNOW** — loss-making, 22x P/S, EV/EBITDA -98. Doesn't build its own compute, pays clouds for compute — the "pure cost side" of the chain, hit from both ends.
- **AMD / MRVL** — 30/31x forward P/E, 77/65 EV/EBITDA. Second sources and component makers. When clouds cut capex in 2027, second sources get cut first. NVDA eats meat while they drink soup; when NVDA gets hit, they die first.

🟡 **Tier 2 (not untouchable, but bad odds — wait for signals):**
- **META** — 13.6 EV/EBITDA, 16.5 forward P/E, looks cheap; but Barclays models negative FCF for 2027-28, and the reported plan to sell cloud capacity means internal demand can't absorb it. Cheap for a reason.
- **AMZN** — 20.9 P/E, but forward P/E of 24.5 is *higher* than trailing — an anomalous signal that the market expects earnings to fall. Capex at 102% of operating cash flow; FCF already negative.
- **GOOGL** — 17 P/E looks like the cheapest of the clouds, but just did the largest equity raise in history ($84.75B) — management voted with real money that cash isn't enough. Its profits get eaten by the depreciation wall.
- **NVDA** — best cash quality, 75% gross margin, 14x forward P/E, the only "paid-before-delivery" player — but that certainty is already priced in. The risk isn't the statement; it's the valuation on the day growth drops from 117%.

🟢 **Most resilient (not saying buy — relatively):** **MSFT** — 28 P/E / 21 forward, moves capex off the balance sheet via finance leases, FCF down only 28%, Azure backstopped by the OpenAI revenue share. The depreciation wall hits it least among the four — but it's also the most expensive.

---

## Score

**7.0/10.** Solid data, the two key holes (depreciation and revenue recognition) dug out precisely, independent judgment (self-build is not free). Deductions: the "good news" framing is a sleight of hand, the 80% inference margin is model output treated as fact, the China 134% figure is fragile, and it missed the same-week counter-signals of equity dilution and credit downgrades.

*Sources: Barclays (2026-08-27/28), SEC 10-K/10-Q, Silicon Analysts, FactSet, Bloomberg, Reuters, CNBC, yfinance (2026-09-01)*
