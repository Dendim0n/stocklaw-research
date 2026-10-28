---
title: "Factor Lab Daily Brief 2026-10-29"
date: 2026-10-29
description: "S&P 500 seven-factor IC test: the price cache advanced to the 2026-10-28 (Wednesday) close, making 2026-09-29 the latest evaluable cross-section. MOM +0.1061 (+0.0012), VOL +0.0117 (-0.0032), SIZE +0.0995 (+0.0032); no factor changed sign. The four fundamental factors remain frozen at the 2026-03-04 to 05-28 cross-sections. All changes come from window roll (2026-08-04 out, 2026-09-29 in); recomputing the prior window on a truncated cache reproduces it bit-for-bit, so there is no historical revision. Full-window means are positive but the last 3 cross-sections read MOM -0.242 and VOL -0.183, and all 4 red sector flags are old-regime markers: zero new sign reversals today."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-29

## 1. Data cutoff, sample and evaluation basis

| Item | Value |
|------|-------|
| Run date | 2026-10-29 (Thursday) 06:43 CST |
| **Price cache cutoff** | **2026-10-28 (Wednesday close)**, 672 rows × 502 columns |
| Trading days added this run | 2026-10-28 (1 day; cache 671 → 672 rows) |
| Valid tickers in the last row | 497 / 502 (5 tickers have no 10-28 print; see section 6) |
| Universe | 502 S&P 500 constituents with price data (503 in the sector map); ROE valid on 474 |
| Price-factor evaluation window | **2026-08-05 → 2026-09-29, 39 valid cross-sections** |
| Fundamental-factor window | **2026-03-04 → 2026-05-28, 60 valid cross-sections (panel frozen)** |
| Holding period | 21-trading-day forward return (script default `--holding 21`, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` in the tables is the **average** over those 39 / 60 historical cross-sections — not today's IC, not a future return, not a probability of decline |

**The data cutoff is not the evaluation date.** A 21-day forward return needs 21 more trading days after each cross-section, so the latest evaluable cross-section is **2026-09-29** (`prices.index[-22]`), whose 21-day window completed exactly at the 10-28 close. None of the 21 trading days from 09-30 through 10-28 has entered any IC reading — **the entire effect of Wednesday's close was to bring that one 2026-09-29 cross-section into the evaluation set.**

At this pace, tomorrow's run (10-30, reading the 10-29 close) adds the 2026-09-30 cross-section.

## 2. What is new vs. what is continuation

**Bottom line: the three price factors genuinely advanced (window rolled one day, all moves within 0.003), the four fundamental factors are continuation of an unchanged state (no new observations), and no factor changed sign. There is no reversal today.**

| Factor | IC (10-28 run) | IC (this run) | Change | ICIR change | Nature |
|------|------:|------:|------:|-----------|------|
| MOM | +0.1049 | **+0.1061** | **+0.0012** | +0.418 → +0.426 | window roll |
| VOL | +0.0149 | **+0.0117** | **-0.0032** | +0.112 → +0.086 | window roll |
| SIZE | +0.0963 | **+0.0995** | **+0.0032** | +0.568 → +0.599 | window roll |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged | no new observations (frozen) |

**Every change comes from window composition, not from a data revision and not from a shift in factor structure today.**

- **Evidence of no revision**: truncating the new cache at 10-27 and recomputing the previous window returns MOM +0.104943, VOL +0.014905, SIZE +0.096320 — **bit-for-bit identical** to the records written on 10-28 (max difference 4.9e-7, floating-point rounding). The incremental download appended one row and rewrote nothing.
- Moved out **2026-08-04**: MOM -0.2636, VOL -0.0188, SIZE -0.1368.
- Added in **2026-09-29**: MOM **-0.2177**, VOL **-0.1442**, SIZE **-0.0112**.

The three directions have different arithmetic causes; spelling them out keeps arithmetic from being read as a trend:

1. **MOM's +0.0012 is "negative out, negative in, but the incoming one is less negative"**: -0.264 leaves, -0.218 enters, so the mean drifts up. Calling that "momentum strengthening" would be wrong — the incoming cross-section is itself a -0.22 print.
2. **VOL's -0.0032 is "near-zero out, negative in"**: 08-04 was only -0.019, while 09-29 is -0.144, which drags the mean down. VOL has been sitting near zero for four days; the absolute level is still "no signal".
3. **SIZE's +0.0032 is "deep negative out, shallow negative in"**: -0.137 leaves, -0.011 enters. SIZE is really a `log(price)` proxy (see the definition check in section 3), so this cannot be read as a size-style call.

**The four fundamental factors remain frozen**: `combined_panel.pkl` has a file time of 2026-08-31 14:20 and financial data ending 2026-05-28, with no scheduled refresh. EP/BP/FCF Yield/ROE have been bit-identical since 2026-08-27 (delta 0.0000 this run). They describe the March–May 2026 cross-sections and are reported as **no new observations**, with no directional reading.

**Did the last five distinct run days reuse the same market data?** Across 10-22, 10-23, 10-24, 10-27 and 10-28 the three price factors differ every day (MOM 0.1154 → 0.1073 → 0.1057 → 0.1054 → 0.1049; VOL 0.0599 → 0.0441 → 0.0329 → 0.0214 → 0.0149; SIZE 0.1022 → 0.0983 → 0.0965 → 0.0958 → 0.0963) — **no two run days shared one market snapshot**. The four fundamentals being identical across those five days is the frozen panel, not a stale cache. The last genuine stale-data repeat was 10-20 → 10-21 (7/7 identical, Yahoo HTTP 429 that day).

## 3. Full seven-factor table (21-day holding period, cross-sectional Rank IC)

| Factor | IC mean | ICIR | Prior IC | Change | Valid obs | Share of positive sections | p-value (unadjusted) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.1061** | +0.4259 | +0.1049 | +0.0012 | 39 | 61.5% | 0.0124 | -2.62% |
| EP (earnings yield) | **-0.0480** | -0.5196 | -0.0480 | 0.0000 | 60 | 28.3% | 0.0002 | +2.98% |
| BP (book-to-price) | **+0.0030** | +0.0456 | +0.0030 | 0.0000 | 60 | 48.3% | 0.7276 | +1.13% |
| FCF Yield | **-0.0352** | -0.5390 | -0.0352 | 0.0000 | 60 | 25.0% | 0.0001 | +2.48% |
| ROE | **-0.0248** | -0.6845 | -0.0248 | 0.0000 | 60 | 26.7% | <0.0001 | +0.76% |
| VOL (volatility) | **+0.0117** | +0.0860 | +0.0149 | -0.0032 | 39 | 59.0% | 0.5993 | -1.98% |
| SIZE (size) | **+0.0995** | +0.5985 | +0.0963 | +0.0032 | 39 | 61.5% | 0.0007 | -1.89% |

**Definition checks (code re-read this run, not taken from old docs):**

- **The long-short leg is Q1 − Q5** (low-factor minus high-factor), key `long_short_Q1_Q5`. With a positive IC that value is negative, which is internally consistent; do not read it as "long Q5". MOM's Q1 -2.94% vs Q5 -0.33% matches its +0.106 IC.
- **SIZE is actually `log(price)`**: `main()` calls `build_size_panel(prices)` without `shares_info`, so the factor is a log-price-level proxy (reproducible bit-for-bit with `np.log(prices)`), **not market cap**. No small-cap/large-cap conclusion can be drawn.
- The long-short figures are group mean return spreads, **before costs and unannualised** — not an implementable strategy return.
- Three price factors have 39 observations and four fundamentals have 60; `n_ic_obs` is the true IC series length, not the nominal 60-section window.

**No sign changes**: MOM/VOL/SIZE stay positive, EP/FCF Yield/ROE stay negative, BP stays at zero (+0.0030, p=0.73, indistinguishable from noise). Across 138 deduplicated run days EP/FCF Yield/ROE have **never** been positive; the last sign change is 2026-10-06 for MOM, 2026-10-01 for SIZE, 2026-08-29 for VOL and 2026-08-27 for BP. **Today is continuation run day 14 / 17 / 46 / 48 of those regimes respectively (counting the change day), not a reversal.**

### Full-window mean vs. the recent cross-sections (the part worth reading this week)

| Factor | 39-section mean | August (19 sections) | September (20 sections) | Last 10 sections | Last 3 (09-25 / 09-28 / 09-29) |
|------|------:|------:|------:|------:|------:|
| MOM | +0.106 | **+0.175** | +0.041 | **-0.203** | **-0.242** (-0.271 / -0.237 / -0.218) |
| VOL | +0.012 | +0.051 | -0.026 | -0.171 | -0.183 (-0.226 / -0.179 / -0.144) |
| SIZE | +0.099 | +0.037 | **+0.159** | +0.033 | -0.040 (-0.052 / -0.058 / -0.011) |

MOM's positive mean comes almost entirely from mid-August to mid-September: those 19 sections (08-19 → 09-15) average **+0.331**, while late September turns sharply negative. **"Full window +0.106" and "last 10 sections -0.203" are both true in the same dataset**; quoting either alone is selective. The newly added 09-29 section is still negative (-0.218) but better than the two before it, which is why the full-window mean barely moved — that is a data point's position, not a directional call.

SIZE runs the other way: its 20 September sections average +0.159 against +0.037 in August, yet the last 3 sections have turned negative. Again descriptive only, and it is a price-level proxy, so it says nothing about style.

## 4. Sector momentum and coverage

![Sector momentum breakdown 2026-10-29](/charts/sector-mom-2026-10-29.png)

*Caption: sector momentum IC means, market data through the 2026-10-28 (Wednesday) close, evaluation window 2026-08-05 → 2026-09-29 (39 cross-sections), 21-day holding period. Covers only the 7 GICS sectors with ≥30 valid constituents.*

| Sector | IC mean | ICIR | Prior IC | Change | Stocks | Share of positive sections | Last 3 sections | Long-short Q1−Q5 |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|-----:|
| Consumer Staples | **+0.2520** | +1.4033 | +0.2525 | -0.0005 | 36 | 84.6% | -0.099 | -3.43% |
| Consumer Discretionary | **+0.2273** | +1.5749 | +0.2238 | +0.0034 | 48 | 92.3% | +0.037 | -3.08% |
| Health Care | **+0.1610** | +0.6934 | +0.1726 | -0.0116 | 59 | 71.8% | **-0.216** | -6.78% |
| Industrials | +0.0836 | +0.2778 | +0.0840 | -0.0004 | 79 | 61.5% | **-0.365** | -2.11% |
| Information Technology | -0.0316 | -0.0652 | -0.0288 | -0.0028 | 73 | 51.3% | **-0.703** | +3.18% |
| Financials | -0.0386 | -0.1222 | -0.0369 | -0.0017 | 76 | 43.6% | **-0.390** | +0.86% |
| Utilities | -0.0731 | -0.6556 | -0.0816 | +0.0086 | 31 | 28.2% | +0.102 | +2.96% |

**Coverage: only 7 of 11 GICS sectors are reported, 402 stocks (80% of the 502-stock universe).** Each omission was verified and is structural, not a one-day filter:

- **Real Estate**: 31 mapped, but AVB and EQR have had no quotes since mid-August, leaving **29 valid constituents** — below the `len(common) >= 30` per-section threshold, so **every section is skipped**; this is not a new filter.
- Materials 26, Communication Services 23 (22 in the cache), Energy 21 — none has ever reached the 30-stock threshold.

Roughly 101 stocks sit outside the sector table. **Energy and Communication Services — two heavily narrative-driven blocks — are entirely absent, so the table cannot stand in for market-wide sector rotation.**

**New sector sign reversals today = 0.** The system raised 8 alerts (4 🔴 sign flips, 3 p-value failures, 1 z>2σ). Checking each against its last genuine sign-change date:

- Information Technology: **2026-10-23** (+0.0052 → -0.0163). Today's -0.0316 is the 4th run day of that flip — continuation.
- Financials: **2026-08-19** (+0.3094 → -0.1262); today -0.0386, still negative.
- Utilities: **2026-08-19** (+0.1993 → -0.0585); today -0.0731, direction unchanged.
- Health Care: turned positive **2026-09-24**, today +0.1610 — still positive but down two days running. The z=+3.03 (vs. historical mean -0.0874 ± 0.0820) is a deviation from a duplicated-sample baseline, not a today's-data jump.
- Consumer Discretionary (positive 2026-09-22), Consumer Staples (2026-09-24) and Industrials (2026-10-07) show no direction change this run.

**The most informative sector reading is not the full-window mean but the recent divergence:** the full-window positives in Consumer Staples (+0.252), Health Care (+0.161) and Industrials (+0.084) have flipped negative in the last 3 sections (-0.099 / -0.216 / -0.365), and Information Technology's last-3 average of -0.703 is the weakest in the table. Only Consumer Discretionary (+0.037) and Utilities (+0.102) remain positive near-term. In other words, **the within-sector "winners keep winning" structure weakened across the board in late September rather than only in tech** — more informative than whether any single sector is flagged red or green.

![Factor IC overview 2026-10-29](/charts/factor-ic-2026-10-29.png)

*Caption: seven-factor IC means, market data through the 2026-10-28 (Wednesday) close; price factors cover 2026-08-05 → 2026-09-29 (39 cross-sections), the four fundamental factors are a frozen 2026-03-04 → 2026-05-28 snapshot (60 cross-sections). Significance markers in the chart use the unadjusted t-test and contradict the overlap-corrected results — do not cite them.*

## 5. Implications for strategy, and what cannot be inferred

**What can be said:**

1. **In-sample momentum is still positive while the recent sections run against it.** Full window +0.106, last 10 sections -0.203, last 3 sections -0.242. Both facts hold; the reading depends on the window, and quoting one alone is selective. The near-term negative run has now lasted **10** consecutive evaluable sections (since 09-16) — not a one-day blip.
2. **Today's move (≤0.003) is smaller than the cross-sectional dispersion of IC itself (MOM single-section σ = 0.25).** Arguing "momentum strengthening or decaying" from it has no statistical content; the only new information is that the 09-29 section is also negative.
3. **Sector dispersion carries more information than the aggregate factor, and today it shows the same "positive full window, negative near-term" pattern.** Consumer and Health Care ICIRs are 0.69–1.57 while Tech/Financials/Utilities sit near zero or below; yet 5 of 7 sectors are negative over the last 3 sections. That looks like a broad in-sample reversal rather than a single-sector story.
4. **VOL reads +0.012 with p=0.60 and NW t=0.25** — it was never significant, and today's -0.0032 is window arithmetic, not new evidence.
5. **The four fundamental factors carry no information today**; their readings are stuck in March–May 2026, so any current judgement built on EP/FCF/ROE lacks data support.

**What cannot be inferred:**

- **A positive MOM ≠ a rising market.** It is a 21-day cross-sectional relative-strength statistic, not index direction; the two are different objects.
- **MOM negative over the last 3 sections ≠ every laggard is worth buying.** It only says the low-momentum bucket outperformed within the late-September sample; it says nothing about those companies' fundamentals and does not distinguish "fell less" from "genuinely strong".
- **VOL's -0.0032 ≠ the factor breaking or recovering.** Neither period is significant; the change is inside the noise band.
- **Positive SIZE ≠ small-cap leadership.** The factor is `log(price)`, unrelated to market cap or float.
- **Negative EP / FCF Yield / ROE ≠ confirmed value rotation.** They describe the March–May 2026 cross-sections (frozen for nearly five months); the negative IC only says the expensive half of that sample did better afterwards.
- **Three negative sectors today ≠ three new reversals.** Different denominators; flag counts are not independent risk events.
- **No October price information has entered any factor reading yet.** This report is not a directional call on the 10-29 open.

## 6. Statistical and data limitations

1. **p-values are unadjusted for overlapping samples and are only a lower bound.** With 21-day forward returns, adjacent cross-sections overlap by 20 trading days and the measured IC AR(1) runs 0.75–0.97. Recomputed locally with Newey-West (lag=20, Bartlett kernel):

   | Factor | Plain t | NW t (adjusted) | Passes 1.96? |
   |------|------:|------:|:---:|
   | MOM | +2.63 | **+1.25** | no |
   | VOL | +0.53 | +0.25 | no |
   | SIZE | +3.69 | **+1.67** | no |
   | EP | -3.99 | **-1.63** | no |
   | BP | +0.35 | +0.14 | no |
   | FCF Yield | -4.14 | **-1.85** | no |
   | ROE | -5.26 | **-2.79** | yes |

   Only ROE survives the adjustment; everything else falls below 1.96. The script's p-values cannot support claims like "highly significant, not random noise". The NW values are a local recomputation, not script output; they differ from the prior report (FCF -1.96, ROE -2.70) by about 0.1, an implementation detail that does not change the conclusion.

2. **ICIR is the IC mean divided by the IC standard deviation** — not a strategy Sharpe ratio, not an annualised return, not a hit rate.

3. **All 8 anomaly alerts are old-regime markers measured against the full historical mean, not independent risk events today.** The comparison is the historical average, not the adjacent observation, which is why there are 4 red flags but 0 new reversals.

4. **The `ic_history` baseline is polluted by duplicated records.** Current state: 138 deduplicated dates, about 253 records per factor. For price factors **91/137** adjacent dates are bit-identical (66.4%); for the four fundamentals **134/137** (97.8%, rewritten daily while frozen). The z-score mean is dominated by one regime and both the standard deviation and effective sample are overstated, so `z=+3.03` should be read as "deviation from a duplicated-sample baseline", not a test result.

5. **The four fundamental factors are frozen.** The panel was generated on 2026-08-31 with financial data ending 2026-05-28 and has no scheduled refresh. Restoring it requires re-running `scripts/fetch_fundamental_panel.py` plus a new scheduled job — neither was done here, and no script was modified.

6. **Five tickers have long-standing price gaps**: WBD (last 10-05), PSKY (10-16), AVB (08-14), EA (only 6 valid points), EQR (08-21). That leaves 497/502 valid in the 10-28 row and is the direct reason Real Estate cannot reach 30 constituents. Valid counts across the evaluation window are 497–499 (median 499), which does not affect the 30-stock threshold but slightly reweights the group means.

7. **Other boundaries**: 21-day holding period, no transaction costs, no limit-up/limit-down or liquidity constraints, and default `--mode ic` with no sector neutralisation; sector decomposition covers only sectors with ≥30 names (4 are absent); long-short bucket means are equal-weighted and the SIZE factor itself is not a market-cap measure.
