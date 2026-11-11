---
title: "Factor Lab Daily Brief 2026-11-12"
date: 2026-11-12
description: "Zero new observations: the price cache is still pinned at 2026-11-04. The 11-05, 11-06, 11-09, 11-10 and 11-11 US closes were all unavailable (yfinance 429), so all seven factor readings and all seven sector-momentum readings are bit-identical to the 11-11 run (difference 0.000000). The latest evaluable cross-section remains 2026-10-06; the IC window is 2026-08-12 to 2026-10-06 with 39 cross-sections. The fundamental panel was rebuilt on 11-05 (6 days ago), so the four EP/BP/FCF/ROE z-score alarms reflect a caliber break, not factor reversals. New sign reversals this run: zero at factor level, zero at sector level."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-12

## 1. Data cut-off, sample and evaluation conventions

| Item | Value |
|------|-------|
| Run date | 2026-11-12 (Thu) 06:44 CST = 2026-11-11 (Wed) 17:44 EST, after that session's close |
| **Price cache cut-off** | **2026-11-04 (Wed close)**, 677 trading days x 502 tickers |
| New trading days this run | **0** (11-05, 11-06, 11-09, 11-10 and 11-11 closes all missing) |
| Why unavailable | `yf.download` returned `YFRateLimitError` for all three probe tickers; bare `curl` to `query1/query2.finance.yahoo.com` returned HTTP 429; DNS resolves normally (198.18.1.138, via proxy) — **this is rate limiting, not a network outage and not a script bug**. The script fell back to cache and exited 0 by design |
| Last run that obtained a new close | 2026-11-05 06:41 |
| Which run day on this snapshot | **6th** (11-05, 11-06, 11-07, 11-10, 11-11, 11-12) |
| Evaluation window | **2026-08-12 to 2026-10-06**, 39 valid cross-sections for each factor |
| Latest evaluable cross-section | **2026-10-06** (= `prices.index[-22]`) |
| Holding period | 21 trading days of forward return (script default, unchanged) |
| Sample | 502 tickers priced; 488 with valid fundamentals (EP/BP/FCF Yield), 459 (ROE) |
| Fundamental panel | Generated 2026-11-05 08:49, financial data through 2026-11-04, 500 tickers (**6 days before this run, still inside the 7-day window**) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average of the 39 historical cross-sections**, not today's IC, not a forward return, not a probability of decline |

**Price cut-off is not the same as the evaluable date.** A 21-day forward return requires 21 trading days after the cross-section, so the latest evaluable cross-section is 2026-10-06. Prices from 10-07 to 11-04 are in the cache but only suffice to settle that one cross-section; nothing after 11-05 was retrieved at all.

## 2. New this run vs. continuation of an existing state

**Conclusion: zero new observations, everything is a continuation.** Every field of the seven factors and the seven sector-momentum series is **bit-identical** to the 2026-11-11 run (field-by-field subtraction via `verify_1112.py`, maximum difference 0.000000).

| Factor | IC (11-11) | IC (this run) | Difference | Nature |
|------|------:|------:|------:|------|
| MOM | +0.062494 | **+0.062494** | 0.000000 | No new prices; continuation |
| EP | -0.006821 | **-0.006821** | 0.000000 | Same |
| BP | -0.088770 | **-0.088770** | 0.000000 | Same |
| FCF Yield | -0.002813 | **-0.002813** | 0.000000 | Same |
| ROE | +0.052257 | **+0.052257** | 0.000000 | Same |
| VOL | -0.021198 | **-0.021198** | 0.000000 | Same |
| SIZE | +0.060134 | **+0.060134** | 0.000000 | Same |

Five consecutive run days with identical readings means the data gap is **systematic and persistent** (rate limiting, not one-off jitter), not a single day's network failure.

### What actually happened in those five sessions (none of it entered the factor readings)

Cross-checked across three channels (Tencent `usfqkline` daily bars, `qt.gtimg.cn` snapshot, consistent with yesterday's Longbridge figures):

| Date | SPX close | Day change | NDX close | Day change |
|------|------:|------:|------:|------:|
| 2026-11-04 | 7,688.62 | — | 28,437.17 | — |
| 2026-11-05 | 7,353.73 | **-4.36%** | 26,629.81 | **-6.36%** |
| 2026-11-06 | 7,376.86 | +0.31% | 26,989.99 | +1.35% |
| 2026-11-09 | 7,549.94 | +2.35% | 27,907.63 | +3.40% |
| 2026-11-10 | 7,520.93 | -0.38% | 27,740.80 | -0.60% |
| 2026-11-11 | 7,619.38 | **+1.31%** | 28,374.25 | **+2.28%** |

Cumulative since the 11-04 close: SPX **-0.90%**, NDX **-0.22%**, IXIC -1.05%. The worst single day of the stretch (11-05, SPX -4.36%) and the subsequent four-day repair are both absent from every IC reading.

**When prices resume, the window will roll in 5 cross-sections at once.** Price-based factors will jump visibly; that is backfilled data, not a regime shift, and should be written up as the "first new snapshot" rather than a factor turn.

## 3. Full seven-factor table (21-day holding period, cross-sectional rank IC)

| Factor | IC mean | ICIR | Prior IC | Diff | Effective obs | Share of positive-IC cross-sections | p-value (uncorrected) | NW t (local recompute) | Long-short Q1-Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|-----:|
| MOM (12-1 month momentum) | **+0.0625** | +0.2145 | +0.0625 | 0.0000 | 39 | 53.8% | 0.1940 | +0.46 | -0.79% |
| EP (earnings yield) | **-0.0068** | -0.0385 | -0.0068 | 0.0000 | 39 | 48.7% | 0.8137 | -0.09 | -0.42% |
| BP (book-to-price) | **-0.0888** | -0.6087 | -0.0888 | 0.0000 | 39 | 38.5% | 0.0006 | -1.69 | +1.13% |
| FCF Yield | **-0.0028** | -0.0150 | -0.0028 | 0.0000 | 39 | 51.3% | 0.9268 | -0.04 | -0.31% |
| ROE | **+0.0523** | +0.7915 | +0.0523 | 0.0000 | 39 | 79.5% | 0.00002 | +2.06 | -0.03% |
| VOL (60-day annualised vol) | **-0.0212** | -0.1323 | -0.0212 | 0.0000 | 39 | 51.3% | 0.4198 | -0.29 | -0.16% |
| SIZE (market cap) | **+0.0601** | +0.3464 | +0.0601 | 0.0000 | 39 | 66.7% | 0.0393 | +0.75 | -0.59% |

**Convention check (code re-read this run, not taken from old docs):**

- **Long-short is Q1 minus Q5** (low-factor bucket minus high-factor bucket), per `quantile_returns`: after `qcut`, label 0 is Q1 and `long_short_Q1_Q5 = Q1 - Q5`. With a positive IC this value is negative; the two are self-consistent. There is no "long Q5" reading. Figures are gross of costs and not annualised — **not an implementable strategy return**.
- `n_ic_obs = 39` is the true IC series length: the nominal window takes the last 60 dates, of which the final 21 cross-sections have no complete forward return and are skipped.
- ICIR is "mean IC divided by IC standard deviation" — **not a strategy Sharpe ratio, not an annualised return**.
- **The p-values are uncorrected for overlapping samples.** A 21-day forward return makes adjacent cross-sections share 20 days; measured AR(1) of the IC series is 0.906-0.964, so a plain t-test understates the standard error and the p-value is only a lower bound. The NW t column is my local recompute with a Bartlett kernel (lag 20, weights 1-l/21), not script output. After correction only ROE (+2.06) remains outside 1.96; BP falls from -3.75 to -1.69.

### Full-window means alongside recent cross-sections

| Factor | 39-section mean | Last 10 | Last 3 |
|------|------:|------:|------:|
| MOM | +0.062 | **-0.317** | **-0.428** |
| EP | -0.007 | +0.227 | +0.239 |
| BP | -0.089 | +0.052 | +0.077 |
| FCF Yield | -0.003 | +0.198 | +0.243 |
| ROE | +0.052 | +0.035 | +0.021 |
| VOL | -0.021 | -0.226 | -0.256 |
| SIZE | +0.060 | -0.194 | -0.260 |

The last three cross-sections are 2026-10-02 / 10-05 / 10-06, whose 21-day forward windows only just completed at the 11-04 close. **Full-window means and recent readings diverge sharply**: MOM's positive mean is carried by August cross-sections, while high-momentum names have persistently underperformed the cross-section since late September. EP and FCF Yield are the mirror image — near zero over the full window, positive in the last three. This is not caused by new data (nothing moved); it is the difference between a "39-day average" and "the current state".

## 4. Sector momentum (12-1 month momentum decomposed by GICS sector)

| Sector | Tickers | IC | ICIR | Prior IC | Diff |
|------|-----:|------:|-----:|------:|-----:|
| Consumer Staples | 36 | **+0.2132** | +0.9720 | +0.2132 | 0.0000 |
| Consumer Discretionary | 48 | **+0.2059** | +1.1447 | +0.2059 | 0.0000 |
| Health Care | 59 | +0.1023 | +0.4366 | +0.1023 | 0.0000 |
| Industrials | 79 | +0.0335 | +0.0963 | +0.0335 | 0.0000 |
| Utilities | 31 | -0.0408 | -0.3134 | -0.0408 | 0.0000 |
| Financials | 76 | -0.0985 | -0.2858 | -0.0985 | 0.0000 |
| Information Technology | 73 | -0.0993 | -0.1861 | -0.0993 | 0.0000 |

**Coverage is only 7 sectors and 402 tickers (80.1% of 502).** Energy (21 tickers), Materials (26), Communication Services (23) and Real Estate (31) are structurally absent — `run_factor_test` has a hard `len(common) < 30: continue` gate that skips any cross-section with fewer than 30 valid names. **These four sectors are excluded by the threshold, not missing data**, so any claim of a "whole-market sector momentum chart" is unfounded. Three sectors are currently negative, unchanged from the prior run; new reversals this run: zero.

IT and Financials now show negative sector momentum, the opposite of the May episode ("Information Technology +0.52, strong within-sector winner-takes-all"). That switch happened months ago; it is a continuation, not today's news.

## 5. Strategy implications, and what cannot be inferred

**What can be said:**

1. **The only information this run carries is that the data still has not arrived.** This is the fifth consecutive run day with zero new observations; rebalancing off these readings means deciding today with a photo from a week and a half ago.
2. **The length of the gap now limits usefulness.** By this run, five trading sessions — including a -4.36% single-day drop and a week of repair — have not entered any reading. Until the feed recovers, these readings are fit for methodology checks, not for ranking the current cross-section.
3. **MOM's positive IC does not describe the current state.** The full-window +0.0625 differs from the last-three-section -0.4280 by 0.49, with the positive mean contributed by August. Using "momentum is still positive" to justify chasing strength applies August evidence to November.
4. **BP is the only factor meaningfully away from zero over the full window** (-0.0888), but its NW-corrected t is only -1.69, it is not sector-neutralised, and it covers a single 2026-08 to 10 stretch — not a long-run regularity.
5. **ROE is the cleanest reading under the new caliber** (+0.0523, ICIR 0.79, 79.5% positive cross-sections, NW t +2.06), but it has only 6 run days of history starting on the day the panel was rebuilt. The sample is too short to support a "quality factor is back" narrative.

**What cannot be inferred:**

- **Momentum sign does not imply index direction.** It measures the relative performance of past winners versus losers within the sample; "MOM last 3 sections -0.43" does not mean "the market is about to fall" — in fact the S&P rose 1.31% on 11-11.
- **A negative SIZE does not imply a small-cap rally.** The sample is S&P 500 constituents only; there are no small caps in it, and SIZE only measures relative size within the index.
- **EP and FCF Yield turning positive in the last three cross-sections is not confirmed value rotation.** Three cross-sections only, and the negative ICs in those segments are concentrated in September; direction can flip again.
- **The four z-score alarms are neither four independent risk events nor factor reversals** (see section 6).
- This report contains no specific trading instructions.

## 6. Statistical and data limitations

1. **Five trading days are missing from prices, including the largest single-day drop of the stretch (11-05, SPX -4.36%, NDX -6.36%).** The first run after recovery will roll in 5 cross-sections at once; attribute the jump to backfilling. Test: if on the recovery day `prices_cache.parquet`'s `index[-1]` jumps past 11-05 and the IC window advances 5 slots at once, it is backfill.
2. **All four z-score alarms come from fundamental factors** (EP z=+3.41, BP z=-3.28, FCF z=+3.43, ROE z=+3.31), while `combined_panel.pkl` was rebuilt on 2026-11-05 (6 days ago) with a new financial caliber overall. The script's STEP 3 itself prints "fundamental panel refreshed within 7 days; this run's z values are not comparable". **These four should only be recorded as "data caliber updated, historical series not comparable" — not as factor flips or new signals.**
3. **z levels are highly sensitive to baseline composition**: factor values are unchanged from yesterday, yet z moved from yesterday's +3.88/-3.69/+3.90/+3.73 to +3.41/-3.28/+3.43/+3.31. **The change in z comes entirely from the baseline, not the factor.** Price-based z values are MOM +1.02, VOL -1.27, SIZE +0.90, all inside 2 sigma.
4. **The baseline is polluted by duplicate records**: `ic_history.json` holds 266-267 EP/BP/FCF/ROE entries across only 148 unique dates, with 142 adjacent pairs bit-identical (96%); MOM/VOL/SIZE hold 266 entries across 148 unique dates with 95 adjacent pairs identical (64%). Baseline standard deviation is systematically overstated, and **the number of red lights must not be read as a count of independent risk events**.
5. **Sign status (last genuine change after deduplicating by date)**: MOM 2026-10-06 (-0.0012 to +0.0158); SIZE 2026-10-01; VOL 2026-10-31 (+0.0057 to -0.0033); the BP and ROE "changes" occurred on 2026-11-05, the day the panel caliber switched; EP and FCF Yield have never turned positive across all 148 unique dates. **New sign reversals this run: zero at factor level, zero at sector level.**
6. **p-values are uncorrected for overlapping-sample autocorrelation** and must not be quoted as "highly significant, not random noise". AR(1) of 0.906-0.964 means 39 cross-sections are nowhere near 39 independent observations.
7. **Sector coverage is 7 of 11**, see section 4.
8. **Charts are named by run date, not by data date**: the two charts were generated at 2026-11-12 06:51 CST, with underlying prices through 2026-11-04 and an IC window of 2026-08-12 to 2026-10-06 — identical in content (and file size) to the 11-10 and 11-11 charts.

![Seven-factor IC overview: run date 2026-11-12, prices through 2026-11-04, IC window 2026-08-12 to 2026-10-06](/charts/factor-ic-2026-11-12.png)

![Sector momentum IC: run date 2026-11-12, 7 sectors / 402 tickers, 80.1% coverage](/charts/sector-mom-2026-11-12.png)
