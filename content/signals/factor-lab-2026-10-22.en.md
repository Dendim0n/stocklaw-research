---
title: "Factor Lab Daily Brief 2026-10-22"
date: 2026-10-22
description: "S&P 500 seven-factor IC test: price data is current again through the 2026-10-21 close (this run added 10-19 to 10-21), but the 21-day forward return keeps the latest evaluable cross-section at 2026-09-22. MOM +0.1154 (up 0.0091), VOL +0.0599 (down 0.0308), SIZE +0.1022 (up 0.0088); EP/BP/FCF Yield/ROE are unchanged for a 43rd run day because the fundamental panel ends 2026-05-28. Every change comes from window roll rather than data revision: MOM's gain comes from dropping three extremely negative July cross-sections, while the newest three evaluable cross-sections average -0.18. After a Newey-West correction only VOL and the Staples/Health Care/Discretionary/Utilities sector spreads stay above 1.96."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-22

## Data cut-off, sample and evaluation basis

| Item | Value |
|------|-------|
| Run date | 2026-10-22 (Thu) 06:41–06:42 CST |
| **Price data cut-off** | **2026-10-21 (Wednesday close)** |
| Sessions added this run | 2026-10-19, 10-20, 10-21 (three full trading days) |
| Previous snapshot | 2026-10-16 close, shared by the 10-17, 10-20 and 10-21 runs |
| Universe | 502 S&P 500 constituents (fundamental panel 503 names; ROE effective 474) |
| Price-factor evaluation window | 2026-07-29 → 2026-09-22, **39 valid cross-sections** |
| Fundamental-factor window | 2026-03-04 → 2026-05-28, **60 valid cross-sections** (panel ends 2026-05-28) |
| Holding period | 21 trading days forward return (default config, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the average over those 39 / 60 historical cross-sections |

**The price feed is working again.** The previous run (10-21) fell back to the stale 10-16 cache because Yahoo Finance returned HTTP 429; this time `query1` / `query2` responded normally and the incremental download filled in 10-19, 10-20 and 10-21, taking the cache from 664 to 667 rows. Cell-by-cell comparison afterwards: across the 333,328 overlapping price cells between the old and new cache, `max abs diff = 0.0` — **no historical data was revised**, three rows were simply appended.

**Data cut-off is not the same as the evaluable date.** A 21-day forward return needs 21 trading days after each cross-section, so the latest evaluable cross-section is **2026-09-22**; the 21 sessions from 09-23 to 10-21 are not complete yet. Even with the 10-21 close in hand, today's IC figures contain no information after late September. That lag is structural, not a fault.

## New this run / continuation of existing state

The difference versus 10-21 is a **genuine advance in the readings**, not a repeated read of one snapshot:

| Factor | IC (10-21) | IC (10-22) | Change | ICIR change |
|--------|------------|------------|--------|-------------|
| MOM | +0.1063 | **+0.1154** | **+0.0091** | +0.4195 → +0.4834 |
| VOL | +0.0907 | **+0.0599** | **-0.0308** | +0.8060 → +0.4821 |
| SIZE | +0.0934 | **+0.1022** | **+0.0088** | +0.5474 → +0.6149 |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged |

**All of it comes from rolling the 60-cross-section window, not from price revisions.** The price-factor window moved from 2026-07-24 → 09-17 to 2026-07-29 → 09-22: the 36 overlapping cross-sections have bit-identical ICs (`maxdiff = 0.0`), 07-24 / 07-27 / 07-28 dropped out and 09-18 / 09-21 / 09-22 came in.

| Factor | Dropped cross-sections' IC (07-24 / 07-27 / 07-28) | Added cross-sections' IC (09-18 / 09-21 / 09-22) | Net effect |
|--------|----------------------------------------------------|---------------------------------------------------|------------|
| MOM | -0.423 / -0.319 / -0.135 | -0.162 / -0.199 / -0.169 | Three extreme negatives left → mean pushed up |
| VOL | +0.184 / +0.217 / +0.286 | -0.117 / -0.196 / -0.197 | Positives left, negatives entered → mean falls |
| SIZE | -0.095 / -0.045 / +0.030 | +0.112 / +0.036 / +0.080 | Small net increase |

**This is the point that needs stating plainly: MOM going from +0.1063 to +0.1154 does not mean momentum got stronger.** The gain comes from dropping July's three most negative cross-sections, while all three September cross-sections added this run were negative (-0.162 / -0.199 / -0.169). The last 3 evaluable cross-sections average **-0.176** and the last 10 average +0.021, both below the 39-cross-section mean of +0.1154. VOL moves the other way and more consistently: last 3 at -0.170, last 10 at -0.018, so its decline has real content.

| Factor | 39-section mean | Last 10 | Last 3 | Share positive |
|--------|-----------------|---------|--------|----------------|
| MOM | +0.1154 | +0.0212 | **-0.1764** | 64.1% |
| VOL | +0.0599 | -0.0176 | **-0.1698** | 69.2% |
| SIZE | +0.1022 | **+0.1979** | +0.0762 | 66.7% |

**Continuation of existing states (when each sign last changed; all are regimes weeks to months old):**

| Factor | Current sign | Last actual sign change | Note |
|--------|--------------|-------------------------|------|
| MOM | positive | 2026-10-06 (negative→positive) | Started near zero; today's +0.1154 is the highest of the positive regime |
| SIZE | positive | 2026-10-01 (negative→positive) | Factor value is log(price), not market cap |
| VOL | positive | 2026-08-29 (negative→positive) | Eighth consecutive week positive |
| BP | ≈0 (p=0.73) | 2026-08-27 (+0.0030) | Sits at zero; the sign carries no information |
| EP / FCF Yield / ROE | negative | never positive in 133 run days | Values frozen since 2026-08-27 |

**Anomaly detection raised 4 alarms and 0 new reversals.** The alarm baseline is the mean of all historical records, not the adjacent observation, so old regimes keep firing:

| Alarm | Historical mean it refers to | Last actual sign change | Verdict |
|-------|------------------------------|--------------------------|---------|
| 🔴 Utilities flipped positive→negative | +0.1289 | **2026-08-19** (+0.199 → -0.059) | Old regime, not today |
| 🔴 Health Care flipped negative→positive, z=+4.21 | -0.0938 ± 0.0711 | **2026-09-24** (-0.002 → +0.013) | Old regime, not today |
| ⚠️ Financials p 0.0265 → 0.682 | — | negative IC since 08-19 | Continuation, not a break |
| ⚠️ IT p 0.0221 → 0.943 | — | IC near zero since 10-15 | Continuation, not a break |

## Full seven-factor table

| Factor | IC mean | ICIR | p-value* | Prior IC (10-21) | Change | Valid observations | Current sign |
|--------|---------|------|----------|------------------|--------|--------------------|--------------|
| **MOM** | +0.1154 | +0.4834 | 0.0050 | +0.1063 | **+0.0091** | 39 cross-sections | positive (since 10-06) |
| **EP** | -0.0480 | -0.5196 | 0.00018 | -0.0480 | 0.0000 | 60 cross-sections | negative, frozen |
| **BP** | +0.0030 | +0.0456 | 0.7276 | +0.0030 | 0.0000 | 60 cross-sections | ≈0, frozen |
| **FCF Yield** | -0.0352 | -0.5390 | 0.00011 | -0.0352 | 0.0000 | 60 cross-sections | negative, frozen |
| **ROE** | -0.0248 | -0.6845 | 0.000002 | -0.0248 | 0.0000 | 60 cross-sections (474 names) | negative, frozen |
| **VOL** | +0.0599 | +0.4821 | 0.0051 | +0.0907 | **-0.0308** | 39 cross-sections | positive (since 08-29) |
| **SIZE** | +0.1022 | +0.6149 | 0.00052 | +0.0934 | **+0.0088** | 39 cross-sections | positive; actually log(price) |

\* The p-value comes from a plain one-sample t-test and **does not correct for autocorrelation from overlapping returns**, so it is a lower bound only. Re-estimated with Newey-West (lag=20), computed locally rather than printed by the script:

| Factor | Plain t | NW t | IC AR(1) | z vs historical baseline** |
|--------|---------|------|----------|----------------------------|
| MOM | +2.98 | **+1.30** | +0.93 | +0.14 |
| VOL | +2.97 | **+2.49** | +0.80 | -0.70 |
| SIZE | +3.79 | **+1.31** | +0.97 | +1.73 |
| EP | -3.99 | -1.63 | +0.87 | +1.31 |
| BP | +0.35 | +0.14 | +0.90 | -1.09 |
| FCF Yield | -4.14 | -1.96 | +0.75 | +1.30 |
| ROE | -5.26 | -2.70 | +0.80 | +1.29 |

After correcting for overlapping returns, **only VOL among the price factors still clears 1.96**; MOM (+1.30) and SIZE (+1.31) do not — their IC series have AR(1) of +0.93 and +0.97, close to slow drift, so the effective amount of information is far below 39 nominal observations. ROE's -2.70 describes the frozen 2026 March–May sample and says nothing about today.

\*\* z-scores use all historical records except today as the baseline, but that baseline is full of bit-identical repeats (see limitations); the fundamental factors' historical standard deviation is only 0.007–0.011, so their z-scores have no discriminating power.

**Quantile portfolios (Q1–Q5, 21-day means, %):**

| Factor | Q1 (low) | Q2 | Q3 | Q4 | Q5 (high) | Q1−Q5 |
|--------|----------|----|----|----|-----------|-------|
| MOM | -3.01 | -2.94 | -2.44 | -2.24 | **+0.22** | **-3.23** |
| VOL | -3.17 | -2.65 | -2.33 | -2.81 | +0.55 | -3.71 |
| SIZE | -3.04 | -2.80 | -1.81 | -1.66 | -1.10 | -1.94 |
| EP | +5.40 | +2.86 | +1.87 | +1.04 | +2.41 | +2.98 |
| FCF Yield | +4.94 | +3.33 | +0.80 | +2.04 | +2.46 | +2.48 |
| BP | +4.06 | +3.45 | +1.15 | +2.00 | +2.92 | +1.13 |
| ROE | +4.65 | +1.72 | +1.84 | +1.63 | +3.89 | +0.76 |

Direction checked against the code: `quantile_returns` computes **Q1 − Q5** (low-factor group minus high-factor group), which is consistent with the opposite sign of IC. MOM's IC is positive, so Q1−Q5 is negative — in-sample the high-momentum group beat the low-momentum group by about **3.23 percentage points** over the 21-day windows. **No trading costs and no turnover assumptions: this is not an implementable strategy return.** Also note that MOM / VOL / SIZE have negative mean returns in Q1 through Q4, meaning the median stock's 21-day return was negative in that 2026-07→09 window; these are cross-sectional means, not index levels. The positive quintile returns of the four fundamental factors come from the separate 2026-03→05 sample and are not directly comparable.

## Sector momentum table and coverage

| Sector | IC | ICIR | p-value | NW t | Names | Prior IC | Change | Q1−Q5 (%) |
|--------|-----|------|---------|------|-------|----------|--------|-----------|
| Consumer Staples | **+0.2502** | +1.35 | <1e-6 | +3.85 | 36 | +0.2179 | +0.0324 | -3.14 |
| Health Care | **+0.2055** | +1.10 | <1e-6 | +2.64 | 59 | +0.2007 | +0.0049 | **-8.64** |
| Consumer Discretionary | **+0.1979** | +1.01 | <1e-6 | +2.48 | 48 | +0.1637 | +0.0342 | -2.59 |
| Industrials | +0.1019 | +0.36 | 0.030 | +0.96 | 79 | +0.0969 | +0.0050 | -2.26 |
| Information Technology | +0.0052 | +0.01 | 0.943 | +0.03 | 73 | +0.0202 | -0.0150 | +0.44 |
| Financials | -0.0200 | -0.07 | 0.682 | -0.20 | 76 | -0.0217 | +0.0018 | +0.26 |
| Utilities | -0.0823 | -0.78 | 0.000026 | **-6.20** | 31 | -0.0748 | -0.0074 | +3.40 |

Every sector uses 39 valid cross-sections. The NW t values are computed locally: Staples, Health Care and Discretionary still clear 1.96 after the overlap correction, and the Utilities reversal is robust too (AR(1) only +0.30, NW t -6.20).

**Coverage: only 7 of the 11 GICS sectors make it into the results, covering 402 of 502 stocks.** The four excluded sectors are Energy (21 names), Materials (26) and Communication Services (22) — all below the test's minimum of 30 valid names per cross-section — plus Real Estate, which has 31 names but fewer than 30 usable per cross-section. **The report therefore contains no momentum information on Energy, Materials, Communication Services or Real Estate**, and cannot be used to judge those four sectors.

Relative moves at the sector level: Staples and Discretionary both firmed (+0.032 / +0.034), IT's momentum slid further toward zero (+0.0202 → +0.0052, p=0.94), and Utilities got slightly more negative. Two of the seven sectors are negative — that is a **count of current states, not the number of new reversals this run (0).**

## What this means for strategy

1. **Separate structural lag from data failure.** Price data is now current through 10-21, but the evaluable cross-section stops at 09-22 — a 21-day forward return inherently requires a 21-session wait. The IC you read today describes rank relationships from three weeks ago; using it to explain today's tape is a category error. Last week's problem was plumbing (429 rate limiting); this week's is only mechanics.
2. **Do not read MOM's increase as momentum strengthening.** The mean rose purely because July's three extreme negative cross-sections left the window, while all three September cross-sections added were negative (average -0.176) and the last 10 average +0.021. Adding to strong performers on a "momentum is accelerating" thesis points the wrong way: the most recent in-sample evidence is that momentum's edge is fading.
3. **VOL's weakening is real and directional.** Last 3 cross-sections -0.170, last 10 -0.018 — the opposite of "low volatility wins": in this window the high-volatility group did better (Q5 − Q1 about +3.71pt). At the same time VOL is the only price factor that survives the autocorrelation correction (NW t +2.49). Useful as a style thermometer, too thin as a trading signal.
4. **SIZE is the only factor whose recent readings beat its full-window mean** (last 10 at +0.198 vs +0.102). But its factor value is actually **log(price)**, not market cap. Higher-priced stocks outperforming is not a small-cap or large-cap call.
5. **Within-sector persistence carries more information than market-wide ranking.** Staples, Health Care and Discretionary all print IC above +0.20 and stay significant after correction, and Health Care's Q1−Q5 of -8.64pt is the widest dispersion anywhere: inside health care, separating winners from laggards is worth more than timing the sector. IT's momentum has gone to zero, so the old "tech is strong within itself" conclusion no longer holds in the 2026-07→09 sample.
6. **The four fundamental factors provide no information right now; don't use them to support a value or quality narrative.** EP/BP/FCF Yield/ROE have been bit-identical for 43 run days, with a sample ending 2026-05-28. Restoring them means rebuilding `combined_panel.pkl` and adding a scheduled refresh — an engineering task, not a factor conclusion.

## What cannot be concluded

- ❌ MOM being positive ≠ the market must rise. IC is a cross-sectional rank correlation with no directional meaning, and "past winners later beat losers" does not mean today's laggards are worth buying.
- ❌ MOM rising from +0.1063 to +0.1154 ≠ momentum strengthening. It is the arithmetic of window roll; the last 3 evaluable cross-sections have an IC of -0.176.
- ❌ VOL being positive ≠ a low-vol strategy is executable, and it does not signal a defensive market. In-sample the high-volatility group won (Q1−Q5 = -3.71pt), the opposite of "low vol wins".
- ❌ SIZE being positive ≠ a small-cap or large-cap regime. `build_size_panel(prices)` was called without share counts, so the factor is log(price) — a price-level proxy only.
- ❌ EP / FCF Yield / ROE being negative ≠ value rotation confirmed or refuted. These numbers come from a sample frozen before end-May and are unrelated to current conditions.
- ❌ The number of negative sectors (2) ≠ the number of new reversals today (0); Health Care's z=+4.21 is a regime running since 09-24.
- ❌ p-values are not corrected for overlapping samples, so do not claim "highly significant, not random noise"; ICIR is mean IC divided by its standard deviation — not a strategy Sharpe ratio and not an annualised return.
- ❌ The quantile long-short is not net of costs and has no turnover assumption, so it is not an implementable strategy return; with four sectors missing, it does not represent the whole market.
- ❌ This report issues no specific buy or sell instruction.

## Statistical and data limitations

| Limitation | Detail |
|------------|--------|
| 21-trading-day evaluation lag | Prices run through 2026-10-21; the latest evaluable cross-section is 2026-09-22, so nothing after late September is covered |
| Single data source | Prices come from yfinance (`query1/query2` healthy this run). No per-name cross-check of 502 closes against a second source (Tencent / Sina) |
| Overlapping returns | The 21-day forward return makes adjacent cross-sections overlap by 20 days; IC AR(1): MOM +0.93, VOL +0.80, SIZE +0.97, EP +0.87, BP +0.90, FCF +0.75, ROE +0.80. A plain t-test understates the standard error, the reported p-value is a lower bound, and the NW(lag=20) t values are computed locally |
| Fundamental panel frozen | The financial panel ends 2026-05-28 with no scheduled refresh; EP/BP/FCF/ROE have been bit-identical for **43 run days** since 2026-08-27, and all 60 cross-sections sit in 2026-03→05 |
| Duplicated baseline | `ic_history` now holds 133 distinct run dates (2026-05-29 → 2026-10-22); 91 of 132 adjacent pairs are bit-identical for price factors and 129 of 132 for fundamentals. The z-score mean is dominated by a single regime and the fundamental standard deviation is squeezed to 0.007–0.011, so the number of red flags is not a count of independent risk events |
| What this run wrote | The 10-22 record differs from 10-21 (price factors finally advanced), so no further duplication; the four fundamental entries remain bit-identical to earlier ones |
| Incomplete sector coverage | Only 7 of 11 sectors and 402 of 502 stocks; Energy, Materials, Communication Services and Real Estate are excluded |
| Factor definitions | MOM = price[t−21]/price[t−273]−1 (12-1 month); VOL = 60-day annualised volatility; SIZE = log(price) proxy; EP/BP/FCF Yield/ROE from the TTM fundamental panel |
| Meaning of ic_mean | The average rank correlation across many historical cross-sections — not today's IC, not a forward return forecast, not a probability of decline |

![Factor IC comparison](/charts/factor-ic-2026-10-22.png)

![Sector momentum breakdown](/charts/sector-mom-2026-10-22.png)

*Both charts are based on this run's output (`analyses/factor_lab/factor_test_20261022_0642.json` and `..._per-sector.json`). The 10-22 label is the **run date and file name**, not the market date: the cross-sections actually end **2026-09-22**, the price cache ends 2026-10-21, and the holding period is 21 trading days. Significance markers in the charts follow the plain t-test and are not overlap-corrected.*
