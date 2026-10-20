---
title: "Factor Lab Daily Brief 2026-10-21"
date: 2026-10-21
description: "S&P 500 seven-factor IC test: still no new market data (price cache ends 2026-10-16; 10-19 and 10-20 missing), so all seven factor readings are bit-identical to the 10-17 and 10-20 runs and represent continuation of existing regimes, not new reversals. MOM +0.1063 (ICIR 0.42), VOL +0.0907 (ICIR 0.81), SIZE +0.0934 (log-price proxy); EP/BP/FCF Yield/ROE have been frozen for 42 run days because the fundamental panel ends 2026-05-28. After Newey-West correction for overlapping returns only VOL and ROE stay above 1.96. Sector momentum: Consumer Staples +0.218, Health Care +0.201, Consumer Discretionary +0.164 positive; Utilities -0.075, Financials -0.022."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-21

## Data cut-off, sample and evaluation basis

| Item | Value |
|------|-------|
| Run date | 2026-10-21 (Wed) 06:43–06:50 CST |
| **Price data cut-off** | **2026-10-16 (Friday close)** |
| Missing sessions | 2026-10-19 (Mon) and 2026-10-20 (Tue), **2 full trading days** |
| Run days sharing this one snapshot | 2026-10-17, 2026-10-20, 2026-10-21 (three consecutive) |
| Universe | 502 S&P 500 constituents (fundamental panel 503 names; ROE effective 474) |
| Price-factor evaluation window | 2026-07-24 → 2026-09-17, **39 valid cross-sections** |
| Fundamental-factor window | 2026-03-04 → 2026-05-28, **60 valid cross-sections** (panel ends 2026-05-28) |
| Holding period | 21 trading days forward return (default config, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the average over those 39 / 60 historical cross-sections |

**The run itself succeeded (exit code 0), but the market data did not advance.** During the incremental download stage `factor_lab_daily.py` was rate-limited by Yahoo Finance: both `query1` and `query2` returned **HTTP 429 (Too Many Requests)**, yfinance raised `YFRateLimitError`, and every batch of the 503 tickers failed. The script followed its existing logic and fell back to the local cache (ending 2026-10-16) to complete the whole computation. DNS resolved normally this time (`query1` → 69.147.80.15); the failure was rate limiting, not a network outage. Neither the script nor the configuration was modified.

**Data cut-off is not the same as the evaluable date.** A 21-day forward return requires 21 trading days after each cross-section, so the latest evaluable cross-section is **2026-09-17**; the 21 sessions from 09-18 to 10-16 cannot be evaluated yet. In other words, even if 10-19 and 10-20 closes had been collected, today's IC figures would still contain no information after mid-September.

## New this run / continuation of existing state

**New: none.**

Versus the 2026-10-20 run (also on the 10-16 close), all seven factors show a **0.0000 difference** in `ic_mean`, `icir`, p-value, valid observations and stock counts, and all seven sector momentum ICs differ by 0.0000 as well. This is the third read of the same snapshot; it cannot be read as "momentum strengthening further" or "the volatility factor continuing to decay".

**Trajectory over the last five run days (flat after 10-17):**

| Run day | MOM | VOL | SIZE | EP | FCF Yield |
|---------|-----|-----|------|----|-----------|
| 10-09 | +0.0549 | +0.1183 | +0.0531 | -0.0480 | -0.0352 |
| 10-15 | +0.0876 | +0.1040 | +0.0791 | -0.0480 | -0.0352 |
| 10-16 | +0.0980 | +0.1008 | +0.0866 | -0.0480 | -0.0352 |
| 10-17 | +0.1063 | +0.0907 | +0.0934 | -0.0480 | -0.0352 |
| 10-20 | +0.1063 | +0.0907 | +0.0934 | -0.0480 | -0.0352 |
| **10-21** | **+0.1063** | **+0.0907** | **+0.0934** | **-0.0480** | **-0.0352** |

Snapshot attribution was verified by recomputation on the cache: **the 10-17, 10-20 and 10-21 runs all correspond to the same snapshot (2026-10-16 close)**, with bit-identical values across 7 factors and 7 sectors; the 10-15 run reproduces exactly a cache ending 2026-10-14 (+0.087613). Snapshot dates for older runs cannot be reconstructed exactly (the cache has been overwritten and recomputed values differ in the fourth decimal), so those rows show values only.

**Continuation of existing regimes (weeks to months old, not today's change):**

| Factor | Current sign | Date the sign actually changed | Age |
|--------|--------------|-------------------------------|-----|
| MOM | positive | 2026-10-06 (negative → positive) | ~2 weeks |
| SIZE | positive | 2026-10-01 (negative → positive) | ~3 weeks |
| VOL | positive | 2026-08-29 (negative → positive) | ~7 weeks |
| BP | ≈0 (faintly positive, p=0.73) | 2026-08-27 | — |
| EP / FCF Yield / ROE | negative | never positive in 132 run days | — |

**No new sector-level reversal today.** Anomaly detection flagged four sign reversals (Financials, Health Care, Utilities), but every one restates an old regime rather than today's event:

| Alarm | Historical mean it compares against | Actual last sign change | Verdict |
|-------|-------------------------------------|-------------------------|---------|
| 🔴 Financials positive → negative | mean of 216 records, +0.1728 | **2026-08-19** (+0.309 → -0.126) | old regime |
| 🔴 Utilities positive → negative | +0.1298 | **2026-08-19** (+0.199 → -0.059) | old regime |
| 🔴 Health Care negative → positive | -0.0952 | **2026-09-24** (-0.002 → +0.013) | old regime |
| ⚠️ Health Care z=+4.33 | -0.0952±0.0684 | same, positive since 09-24 | continuation |
| ⚠️ Financials p 0.0235 → 0.660 | — | insignificant since 10-09 | continuation |
| ⚠️ IT p 0.0186 → 0.778 | — | insignificant since 10-16 | continuation |

The seven plain factors raised no alarm only because their readings equal the last baseline entry, giving z=0. **No alarm does not mean the factors are healthy; it means the data did not move.**

## Full seven-factor table

| Factor | IC mean | ICIR | p* | Prior IC (10-20) | Difference | Valid obs | Current sign |
|--------|---------|------|----|------------------|------------|-----------|--------------|
| **MOM** | +0.1063 | +0.4195 | 0.0137 | +0.1063 | 0.0000 | 39 cross-sections | positive (since 10-06) |
| **EP** | -0.0480 | -0.5196 | 0.0002 | -0.0480 | 0.0000 | 60 cross-sections | negative, frozen |
| **BP** | +0.0030 | +0.0456 | 0.7276 | +0.0030 | 0.0000 | 60 cross-sections | ≈0, frozen |
| **FCF Yield** | -0.0352 | -0.5390 | 0.0001 | -0.0352 | 0.0000 | 60 cross-sections | negative, frozen |
| **ROE** | -0.0248 | -0.6845 | 0.000002 | -0.0248 | 0.0000 | 60 cross-sections (474 names) | negative, frozen |
| **VOL** | +0.0907 | +0.8060 | 0.000015 | +0.0907 | 0.0000 | 39 cross-sections | positive (since 08-29) |
| **SIZE** | +0.0934 | +0.5474 | 0.0017 | +0.0934 | 0.0000 | 39 cross-sections | positive; actually log(price) |

\* p-values come from a plain one-sample t-test and are **not corrected for autocorrelation from overlapping returns**; treat them as lower bounds. Re-estimated with Newey-West (lag=20) in this run:

| Factor | Plain t | NW t | z vs history** |
|--------|---------|------|----------------|
| MOM | +2.59 | **+0.96** | -0.17 |
| VOL | +4.97 | **+4.68** | -0.34 |
| SIZE | +3.37 | **+1.11** | +1.58 |
| EP | -3.99 | -1.63 | +1.83 |
| BP | +0.35 | +0.14 | -1.67 |
| FCF Yield | -4.14 | -1.96 | +1.82 |
| ROE | -5.26 | **-2.70** | +1.82 |

After correcting for overlapping returns, **only VOL and ROE remain beyond ±1.96**; MOM and SIZE collapse to roughly t≈1 (their IC series have AR(1) of +0.92 and +0.97, i.e. slow drift). ROE's apparent significance describes the frozen 2026-03→05 sample, not the present.

\*\* z uses all historical records except the current one as its baseline, but that baseline is full of duplicated readings (see limitations); the fundamental factors' historical standard deviations are only 0.006–0.010, so those z values carry no discriminating power.

**Quantile portfolios (Q1–Q5, 21-day mean, %):**

| Factor | Q1 (low) | Q2 | Q3 | Q4 | Q5 (high) | Q1−Q5 |
|--------|----------|----|----|----|-----------|-------|
| MOM | -2.44 | -2.92 | -2.41 | -2.47 | **+0.61** | **-3.05** |
| VOL | -3.46 | -2.65 | -2.22 | -2.52 | +1.22 | -4.68 |
| SIZE | -2.61 | -2.78 | -1.56 | -1.61 | -1.06 | -1.56 |
| EP | +5.40 | +2.86 | +1.87 | +1.04 | +2.41 | +2.98 |
| FCF Yield | +4.94 | +3.33 | +0.80 | +2.04 | +2.46 | +2.48 |
| BP | +4.06 | +3.45 | +1.15 | +2.00 | +2.92 | +1.13 |
| ROE | +4.65 | +1.72 | +1.84 | +1.63 | +3.89 | +0.76 |

Direction was checked in code: `quantile_returns` computes **Q1 − Q5** (low-factor bucket minus high-factor bucket), which is consistent with the opposite sign to IC. MOM's positive IC therefore shows up as a negative Q1−Q5 — in-sample, the high-momentum bucket beat the low-momentum bucket by about 3.05 percentage points over the 21-day window. **No trading costs or turnover assumptions are applied; this is not an implementable strategy return.** Note also that the bottom three buckets for MOM / VOL / SIZE are all negative, meaning the median stock's 21-day forward return in that window was negative (cross-sectional average, not an index level).

## Sector momentum and coverage

| Sector | IC | ICIR | p | Names | Prior IC | Difference | Q1−Q5 (%) |
|--------|-----|------|---|-------|----------|------------|-----------|
| Consumer Staples | **+0.2179** | +0.91 | 0.0002 | 36 | +0.2179 | 0.0000 | -2.18 |
| Health Care | **+0.2007** | +1.04 | 0.0000 | 59 | +0.2007 | 0.0000 | **-8.99** |
| Consumer Discretionary | +0.1637 | +0.69 | 0.00002 | 48 | +0.1637 | 0.0000 | -1.94 |
| Industrials | +0.0969 | +0.34 | 0.036 | 79 | +0.0969 | 0.0000 | -1.65 |
| Information Technology | +0.0202 | +0.05 | 0.778 | 73 | +0.0202 | 0.0000 | -0.46 |
| Financials | -0.0217 | -0.07 | 0.660 | 76 | -0.0217 | 0.0000 | +0.23 |
| Utilities | -0.0748 | -0.71 | 0.0001 | 31 | -0.0748 | 0.0000 | +3.36 |

Every sector has 39 valid cross-sections.

**Coverage: only 7 of 11 GICS sectors appear, covering 402 of 502 names.** The four omitted sectors are Real Estate (31 names), Materials (26), Communication Services (22) and Energy (21): the per-sector test needs at least 30 valid stocks in each cross-section, and these sectors fall below that threshold after missing values are dropped. The results therefore contain **no momentum information for Energy, Materials, Communication Services or Real Estate**. Two of the seven sectors are negative, but that is a state count, not the number of new reversals.

## What this implies for strategy

1. **Today's report carries close to zero information.** Three consecutive run days share the 10-16 close; any narrative of "momentum strengthening" or "volatility factor fading" is treating the same data read repeatedly as a time series. The thing that needs fixing is the data pipeline, not the interpretation.
2. **Only relative ordering inside the window is usable.** Across the 39 cross-sections from 2026-07-24 to 09-17, the relative advantage of high momentum and low volatility was stable (VOL positive in 77% of cross-sections, ICIR 0.81; MOM positive in 64%), with the widest internal dispersion in Health Care and Consumer Staples (Health Care Q1−Q5 at -8.99 pts).
3. **Discount the significance.** Once overlapping autocorrelation is corrected, MOM and SIZE no longer hold up; VOL is the only price-based factor combining high IC, high ICIR and a high NW t-statistic. Using that to justify "the momentum factor works" as a position-sizing argument is over-reading.
4. **The four fundamental factors carry no current information.** They describe the 2026-03→05 sample and have been bit-identical for 42 run days. Restoring them is an engineering task — rebuild `combined_panel.pkl` and schedule a refresh — not a factor conclusion.

## What this does not imply

- ❌ Positive MOM ≠ the market must rise. IC is a cross-sectional rank correlation with no directional content; in-sample "past winners subsequently beat losers" does not mean today's laggards are worth buying.
- ❌ Identical readings ≠ factor stability; they mean the market data did not advance.
- ❌ Positive SIZE ≠ a small-cap or large-cap regime. `build_size_panel(prices)` is called without share counts, so the factor value is actually **log(price)** (reproducible bit-for-bit with `np.log(prices)`); it is a price-level proxy and cannot be extrapolated to market-cap style.
- ❌ Negative EP / FCF Yield / ROE ≠ value rotation confirmed or refuted. Those numbers come from a sample frozen before end-May.
- ❌ Two negative sectors ≠ two new reversal events (today's count is zero); Health Care's z=+4.33 is a continuation of a regime that began 09-24.
- ❌ p-values are uncorrected for overlapping samples, so "highly significant, not random noise" is not supportable; ICIR is IC mean divided by IC standard deviation — it is neither a strategy Sharpe nor an annualised return.
- ❌ Quantile long/short spreads exclude costs and are not implementable strategy returns; with four sectors missing, they do not represent the whole market.
- ❌ This report issues no specific trading instruction.

## Statistical and data limitations

| Limitation | Detail |
|------------|--------|
| Market data not updated (3rd time) | Price cache ends 2026-10-16; 10-19 and 10-20 are missing in full. A successful run is not an updated market. Cause: Yahoo `query1` / `query2` both returned HTTP 429; every yfinance batch failed and the script fell back to the cache |
| No cross-validation from a second source | No alternative feed (Tencent / Sina) was used to rebuild the 502-name price panel, so the 10-19 / 10-20 closes are simply unavailable on this machine and are reported as missing |
| Window misalignment | Latest evaluable cross-section is 2026-09-17; the following 21 sessions are unevaluable. Even with data filled in, the report can only advance to a new evaluable date |
| Overlapping returns | 21-day forward returns make adjacent cross-sections overlap by 20 days. IC AR(1): MOM +0.92, VOL +0.77, SIZE +0.97, EP +0.87, BP +0.90, FCF +0.75, ROE +0.80. Plain t-tests understate standard errors; the reported p-values are lower bounds, and the NW(lag=20) t values are recomputed locally for this brief |
| Fundamental panel frozen | Financial panel ends 2026-05-28 with no scheduled refresh; EP/BP/FCF/ROE are bit-identical across **42 run days** since 2026-08-27, and all 60 cross-sections fall in 2026-03→05 |
| Baseline full of duplicates | `ic_history` now holds 132 distinct run days (2026-05-29 → 2026-10-21); 91 of 131 adjacent date pairs are bit-identical for price factors and 128 for fundamentals. The z-score mean is dominated by one regime and its standard deviation is inflated (price factors) or squeezed near zero (fundamentals, 0.006–0.010); the number of red flags is not the number of independent risk events |
| This run added another duplicate | Following the script's normal logic, an entry for 10-21 was appended to `ic_history`, bit-identical to 10-17 (+0.1063 etc.), deepening the duplication described above |
| Incomplete sector coverage | Only 7 of 11 sectors and 402 of 502 names; Energy, Materials, Communication Services and Real Estate fall below 30 valid stocks per cross-section |
| Factor definitions | MOM = price[t−21]/price[t−273]−1 (12-1 month); VOL = 60-day annualised volatility; SIZE = log(price) proxy; EP/BP/FCF Yield/ROE from the TTM fundamental panel |
| Meaning of ic_mean | Average rank correlation across many historical cross-sections — not today's IC, not a forward-return forecast, not a probability of decline |

![Factor IC overview](/charts/factor-ic-2026-10-21.png)

![Sector momentum breakdown](/charts/sector-mom-2026-10-21.png)

*Both charts are built from this run's output (`analyses/factor_lab/factor_test_20261021_0647.json` and `..._per-sector.json`). The cross-sectional data actually ends **2026-09-17**; the price cache ends 2026-10-16. The 10-21 label is the run date, not a market date.*
