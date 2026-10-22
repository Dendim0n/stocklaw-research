---
title: "Factor Lab Daily Brief 2026-10-23"
date: 2026-10-23
description: "S&P 500 seven-factor IC test. Price cache now runs to the 2026-10-22 close, but with 21-day forward returns the latest evaluable cross-section is 2026-09-23. MOM +0.1073 (-0.0081 vs prior run), VOL +0.0441 (-0.0158), SIZE +0.0983 (-0.0038); EP/BP/FCF Yield/ROE remain frozen on the 60 cross-sections from 2026-03-04 to 05-28. The decline in all three price factors comes entirely from the rolling window (07-29 dropped, 09-23 added) - the 38 overlapping cross-sections are bit-identical, so no historical revision occurred. After an overlapping-sample correction no factor clears 1.96, and all seven sector alarms are stale regime markers measured against the historical mean; the only true zero-crossing today is Information Technology (+0.0052 to -0.0163)."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-23

## 1. Data cutoff, sample, and evaluation convention

| Item | Value |
|------|-------|
| Run date | 2026-10-23 (Friday) 06:41–06:42 CST |
| **Quote (price cache) cutoff** | **2026-10-22 (Thursday close)**, 668 rows × 502 columns |
| Trading days added this run | 2026-10-22 (one full session; cache 667 → 668 rows) |
| Universe | 502 S&P 500 constituents with complete price data (fundamental panel: 503); 474 valid for ROE |
| Price-factor evaluation window | **2026-07-30 → 2026-09-23, 39 valid cross-sections** |
| Fundamental-factor evaluation window | **2026-03-04 → 2026-05-28, 60 valid cross-sections (panel frozen)** |
| Holding period | 21 trading days of forward return (script default `--holding 21`, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` in the tables is the **average across those 39 / 60 historical cross-sections**, not a same-day IC |

**Quote cutoff is not the same as the evaluation date.** A 21-day forward return needs 21 trading days after each cross-section, so the latest evaluable cross-section is **2026-09-23** (`prices.index[-22]`); its forward window only completed at the 10-22 close. The 21 cross-sections from 09-24 through 10-22 cannot be evaluated yet. The price cache did move forward by one day this run (it did not fall back to a stale cache), but the newest information inside this IC report is still the 23 September cross-section.

## 2. What is new vs. what is carried over

This is a genuine advance in the readings: each trading day the window drops the oldest cross-section and adds the newest evaluable one.

| Factor | IC (10-22 run) | IC (this run) | Change | ICIR change |
|------|------|------|------|-----------|
| MOM | +0.1154 | **+0.1073** | **-0.0081** | +0.4834 → +0.4338 |
| VOL | +0.0599 | **+0.0441** | **-0.0158** | +0.4821 → +0.3548 |
| SIZE | +0.1022 | **+0.0983** | **-0.0038** | +0.6149 → +0.5850 |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged |

**All three price-factor declines are explained by window composition, not by data revision.**

- The 38 overlapping cross-sections are **bit-identical** to the prior run (`maxdiff = 0.0`); the incremental download only appended a row and did not rewrite old values.
- Dropped **2026-07-29**: MOM +0.0107, VOL +0.3611, SIZE +0.0907 (all positive).
- Added **2026-09-23**: MOM **-0.305**, VOL **-0.257**, SIZE **-0.059** (all negative).

A positive number leaves and a negative one enters, so the mean moves down mechanically. VOL falls the most (-0.0158) and that is almost entirely the "drop +0.36, add -0.26" pair. **Describing this as "the volatility factor weakened" gets the causality backwards** — the within-sample factor structure did not change; the window's composition did.

**The four fundamental factors are still frozen.** `combined_panel.pkl` has a file timestamp of 2026-08-31 with financial data ending 2026-05-28, and nothing refreshes it on a schedule. EP/BP/FCF Yield/ROE have been bit-identical since 2026-08-27 (delta 0.0000 this run). Their ICs describe cross-sections from March–May 2026 and cannot be used to explain current markets.

## 3. Full seven-factor table (21-day holding, cross-sectional rank IC)

| Factor | Mean IC | ICIR | Prior IC | Change | Valid obs | Share of positive IC | Long-short Q1−Q5 (group mean) |
|------|--------:|-----:|--------:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.1073** | +0.434 | +0.1154 | -0.0081 | 39 | 61.5% | -2.93% |
| EP (earnings yield) | **-0.0480** | -0.520 | -0.0480 | 0.0000 | 60 | 28.3% | +2.98% |
| BP (book-to-price) | **+0.0030** | +0.046 | +0.0030 | 0.0000 | 60 | 48.3% | +1.13% |
| FCF Yield | **-0.0352** | -0.539 | -0.0352 | 0.0000 | 60 | 25.0% | +2.48% |
| ROE | **-0.0248** | -0.684 | -0.0248 | 0.0000 | 60 | 26.7% | +0.76% |
| VOL (volatility) | **+0.0441** | +0.355 | +0.0599 | -0.0158 | 39 | 66.7% | -3.17% |
| SIZE (size) | **+0.0983** | +0.585 | +0.1022 | -0.0038 | 39 | 64.1% | -1.84% |

**Convention checks (re-read from the code this run, not from old documentation):**

- **The long-short column is Q1 − Q5** (low-factor group minus high-factor group), function name `long_short_Q1_Q5`. With a positive IC that value is negative; the two are consistent. Do not read it as "long Q5".
- **SIZE is actually `log(price)`**: `main()` calls `build_size_panel(prices)` without `shares_info`, so the factor value is a log price-level proxy, **not market capitalisation**. Any "small caps are winning" inference is invalid.
- The long-short figures are differences in group mean returns, **before costs and not annualised**. They are not achievable strategy returns.
- The four fundamental factors have 60 observations and the three price factors 39; `n_ic_obs` comes from the actual IC series length, not the nominal 60-wide window.

**No factor flipped sign today.** MOM/VOL/SIZE remain positive, EP/FCF Yield/ROE remain negative, and BP sits near zero (+0.0030, p = 0.73, i.e. noise). Historically EP/FCF Yield/ROE have never turned positive across 134 de-duplicated run dates, and BP's last sign change was 2026-08-27 — this is state continuation, not a new event.

### Full-window mean alongside the recent cross-sections

The 39-section mean hides a reversal in the most recent stretch:

| Factor | 39-section mean | Last 10 cross-sections | Last 3 cross-sections |
|------|------:|------:|------:|
| MOM | +0.107 | -0.029 | **-0.224** |
| VOL | +0.044 | -0.058 | **-0.216** |
| SIZE | +0.098 | +0.164 | +0.019 |

MOM's positive mean comes mainly from the July–August cross-sections. The last three evaluable cross-sections (09-21, 09-22, 09-23) printed -0.199, -0.168 and -0.305: **inside the late-September sample, high-momentum names underperformed low-momentum names on 21-day forward returns**. Both statements are true at once; the direction of the reading depends on the window, so a report that quotes only one number is misleading.

## 4. Sector momentum and coverage

![Sector momentum breakdown 2026-10-23](/charts/sector-mom-2026-10-23.png)

*Caption: sector momentum mean IC. Quotes through the 2026-10-22 close; evaluation window 2026-07-30 → 2026-09-23 (39 cross-sections), 21-day holding. Covers only the 7 sectors with at least 30 names.*

| Sector | Mean IC | ICIR | Prior IC | Change | p (uncorrected) | Long-short Q1−Q5 | Names |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|
| Consumer Staples | **+0.2555** | +1.473 | +0.2502 | +0.0053 | <0.0001 | -3.32% | 36 |
| Consumer Discretionary | **+0.2040** | +1.085 | +0.1979 | +0.0061 | <0.0001 | -2.73% | 48 |
| Health Care | **+0.2008** | +1.049 | +0.2055 | -0.0048 | <0.0001 | -8.33% | 59 |
| Industrials | +0.0895 | +0.307 | +0.1019 | -0.0125 | 0.0661 | -2.00% | 79 |
| Information Technology | **-0.0163** | -0.035 | +0.0052 | -0.0215 | 0.8303 | +1.66% | 73 |
| Financials | **-0.0296** | -0.097 | -0.0200 | -0.0097 | 0.5545 | +0.55% | 76 |
| Utilities | **-0.0859** | -0.829 | -0.0823 | -0.0036 | <0.0001 | +3.35% | 31 |

**Coverage: only 7 of the 11 GICS sectors are reported, covering 402 names (80% of the 502-name universe).** Missing: Real Estate (31 names, last reported 2026-09-26, filtered out afterwards by the 30-name threshold), Materials (26), Communication Services (22) and Energy (21) — the last three have never entered the sector breakdown because each is below 30 constituents. **The sector table therefore does not represent market-wide rotation**; Energy and Communication Services, two heavily weighted narrative sectors, are entirely absent.

**The only genuine zero-crossing at the sector level today is Information Technology**: +0.0052 → -0.0163. The magnitude is essentially zero (ICIR -0.035, p = 0.83) and economically meaningless, but the trend is worth recording — IT sector momentum has decayed from **+0.524** on 2026-08-19 to -0.016 today, against a historical mean of +0.194. That is the clearest structural change in this cycle.

Consumer Staples (+0.2555) and Consumer Discretionary (+0.2040) have now risen for a third consecutive run with ICIR above 1; Health Care sits near +0.20.

![Factor IC overview 2026-10-23](/charts/factor-ic-2026-10-23.png)

*Caption: seven-factor mean IC, quotes through the 2026-10-22 close. Price factors cover 2026-07-30 → 2026-09-23 (39 cross-sections); the four fundamental factors are a frozen snapshot from 2026-03-04 → 2026-05-28 (60 cross-sections). Significance markers in the chart come from the uncorrected ordinary t-test.*

## 5. What this implies for strategy — and what it does not

**What can be said:**

1. **Momentum is still positive in-sample, but July–August carries it.** Full window +0.107, last 10 cross-sections -0.029, last 3 -0.224. "Momentum works" and "momentum recently failed" are two faces of the same dataset; any one-sided narrative is a choice of window.
2. **Sector dispersion matters far more than the aggregate factor.** Consumer Staples/Discretionary/Health Care all have ICIR above 1.0, while IT, Financials and Utilities sit near zero or negative. "US momentum works overall" carries no information for sector allocation; what does carry information is the cross-sectional structure of strong within-sector persistence in consumer and health care versus reversal in utilities and financials.
3. **Information Technology is the decay item to track.** Down from +0.52 (2026-08-19) to -0.016, it no longer qualifies as a strong-momentum sector. If it stays at zero or turns negative on subsequent runs, that indicates a change in technology's internal leadership structure rather than a market-wide problem.

**What cannot be concluded:**

- **Positive MOM ≠ the index must rise.** This is a 21-day cross-sectional relative-strength measure, not a direction call on the index; the two are not the same statistical object.
- **Negative MOM over the last 3 cross-sections ≠ every laggard is worth buying.** It only says the low-momentum group outperformed in the late-September sample; it says nothing about whether those businesses are sound.
- **Positive SIZE ≠ a small-cap regime.** The factor is `log(price)` — a price-level proxy with no link to market cap, float, or style.
- **Negative EP / FCF Yield / ROE ≠ confirmed value rotation.** First, they describe cross-sections from March–May 2026 (frozen for roughly four months); second, a negative IC only says the expensive group subsequently did better inside the sample and does not settle the current value-vs-growth question.
- **The number of negative sectors (3) ≠ the number of new reversals (1, at zero magnitude).**

## 6. Statistical and data limitations

1. **The p-values are uncorrected for overlapping samples and are a lower bound.** With 21-day forward returns, adjacent cross-sections overlap by 20 trading days and the IC series is strongly autocorrelated. Local Newey-West recomputation (lag = 20, Bartlett kernel):

   | Factor | Ordinary t | NW t (corrected) |
   |------|------:|------:|
   | MOM | +2.67 | **+1.19** |
   | VOL | +2.19 | **+1.48** |
   | SIZE | +3.61 | **+1.28** |
   | EP | -3.99 | **-1.63** |
   | BP | +0.35 | +0.14 |
   | FCF Yield | -4.14 | **-1.96** |
   | ROE | -5.26 | **-2.70** |

   After correction only ROE (-2.70) and FCF Yield (-1.96, right at the threshold) survive; everything else is below 1.96. The script's p-values cannot support claims like "highly significant, not random noise". The NW figures are local recomputations, not script output.

2. **ICIR is the IC mean divided by the IC standard deviation — not a strategy Sharpe ratio, not annualised return, not a hit rate.**

3. **All seven anomaly alarms are stale regime markers measured against the historical mean, not independent risk events today.**
   - "Financials flipped from positive to negative" compares against a historical mean of +0.1710, yet Financials has been continuously negative (the last eight runs sit between -0.018 and -0.030); its last real sign change was **2026-08-19**.
   - "Utilities flipped from positive to negative" is the same story: historical mean +0.1279, actually negative since 08-19.
   - "Health Care flipped from negative to positive" uses a historical mean of -0.0924, yet it has been positive since **2026-09-24**.
   - Conclusion: **there are 3 red flags today, but they are not 3 new events** — they are the same pre-August regime firing repeatedly. Only Information Technology crossed zero in this run.

4. **The `ic_history` baseline is polluted by duplicate records.** Status: price factors hold 249 records over 134 de-duplicated dates, with **91/133** adjacent dates bit-identical; the four fundamental factors are **130/133** bit-identical (rewritten daily during the freeze). The z-score mean is dominated by a single regime while the standard deviation and effective sample are overstated, so readings like `z = +3.98` should be read as "deviation from a duplicated historical sample", not as a statistical test.

5. **The four fundamental factors are frozen.** `combined_panel.pkl` was generated at 2026-08-31 14:20 with financial data ending 2026-05-28, and no cron refreshes it. Restoring their usefulness requires re-running `scripts/fetch_fundamental_panel.py` (slow) plus a scheduled job — not done here, and the script was not modified. Their "current" and "prior" values are bit-identical: this is **no new observation**, not state continuation.

6. **Other boundaries:** 21-day holding, no transaction costs, no limit-up/down or liquidity constraints, no sector neutralisation (default `--mode ic`); the sector breakdown uses only sectors with at least 30 names in-sample; long-short group means are equal-weighted, not cap-weighted.
