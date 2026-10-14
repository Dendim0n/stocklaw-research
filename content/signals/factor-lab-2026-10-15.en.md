---
title: "Factor Lab Daily Brief 2026-10-15"
date: 2026-10-15
description: "S&P 500 7-factor IC test (prices through 2026-10-14): aggregate momentum IC rose to +0.088 (p=0.060, uncorrected for overlapping returns); volatility remains the most stable factor (IC=+0.104, ICIR=1.00); EP/BP/FCF Yield/ROE are byte-identical for the 35th consecutive run because the fundamental panel ends 2026-05-28; sector momentum: Consumer Staples +0.189, Health Care +0.191, Utilities -0.075 - all three sign alarms are inherited August-September regimes."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-15

## Data Cutoff and Evaluation Basis

| Item | Value |
|------|-------|
| Price (cache) as of | 2026-10-14 (Wednesday) |
| Previous successful run | 2026-10-09 (prices through 2026-10-08) |
| Trading days added this run | 2026-10-09, 10-12, 10-13, 10-14 (four sessions) |
| Price-factor evaluation window | 2026-07-22 → 2026-09-15, 39 valid cross-sections (~498-502 names each) |
| Fundamental-factor evaluation window | 2026-03-04 → 2026-05-28, 60 valid cross-sections (502 names; 474 for ROE) |
| Holding period | 21 trading days of forward return |
| IC definition | Cross-sectional Spearman rank correlation; ic_mean is the average over the 39/60 historical cross-sections |

**The price cutoff and the latest evaluable factor date differ.** Prices run through 2026-10-14, but a 21-day forward return requires 21 trading days after the cross-section date, so the latest evaluable factor date is **2026-09-15**. The 21 sessions from 09-16 to 10-14 cannot be evaluated yet.

**Fundamental factors are frozen.** The financial panel `combined_panel.pkl` was generated on 2026-08-31 with data ending 2026-05-28, and no scheduled job refreshes it. The four factors EP / BP / FCF Yield / ROE have been **bit-identical for 35 consecutive runs** since 2026-08-27; their IC describes March-May 2026 cross-sections, not today's market.

**Run gap.** No successful run is recorded for 10-10, 10-13 or 10-14 (two catch-up attempts on 10-14 failed with a model-service HTTP 403). This is the first successful run in six days and it absorbs four sessions at once.

## Cross-Run Comparison (last 7 distinct run dates)

| Run date | EP | BP | FCF Yield | ROE | MOM | VOL | SIZE |
|----------|-----|-----|-----------|-----|------|------|------|
| 2026-10-02 | -0.0480 | +0.0030 | -0.0352 | -0.0248 | -0.0193 | +0.1172 | +0.0118 |
| 2026-10-03 | -0.0480 | +0.0030 | -0.0352 | -0.0248 | -0.0012 | +0.1191 | +0.0211 |
| 2026-10-06 | -0.0480 | +0.0030 | -0.0352 | -0.0248 | +0.0158 | +0.1203 | +0.0298 |
| 2026-10-07 | -0.0480 | +0.0030 | -0.0352 | -0.0248 | +0.0304 | +0.1192 | +0.0376 |
| 2026-10-08 | -0.0480 | +0.0030 | -0.0352 | -0.0248 | +0.0433 | +0.1191 | +0.0457 |
| 2026-10-09 | -0.0480 | +0.0030 | -0.0352 | -0.0248 | +0.0549 | +0.1183 | +0.0531 |
| **2026-10-15** | **-0.0480** | **+0.0030** | **-0.0352** | **-0.0248** | **+0.0876** | **+0.1040** | **+0.0791** |

Price factors move a little each run because the 60-cross-section rolling window replaces one cross-section at a time. The four fundamental factors differ by exactly 0.0000, which is **an absence of new observations**, not a continuation signal.

## New This Run vs. Inherited State

**New (supported by comparable adjacent observations)**

- This run's sample window is 2026-07-22 → 2026-09-15; the prior run's was 2026-07-16 → 2026-09-09. The two overlap on 35 cross-sections, and IC on the overlapping window is **bit-identical (maximum absolute difference 0.0)**. Existing data was therefore not restated; the entire change comes from window composition (four July cross-sections dropped, four September cross-sections added).
- MOM: +0.0549 → +0.0876. The four added cross-sections (09-10, 09-11, 09-14, 09-15) average **+0.177**; the four dropped July cross-sections average **-0.141**. The rise is arithmetic: a strongly negative July block left the window as a positive mid-September block entered.
- VOL: +0.1183 → +0.1040. Added cross-sections average +0.091 versus +0.230 for those dropped.
- SIZE: +0.0531 → +0.0791 (p fell from 0.051 to 0.008). Added cross-sections average +0.279.

**Inherited regime (not new today)**

- Health Care sector momentum: the aggregate reading has actually been positive since **2026-09-24**, about three weeks; this run +0.1657 → +0.1906. The alarm text compares against the historical mean (-0.0993), not against adjacent observations.
- Financials and Utilities sector momentum: the actual sign flips both occurred on **2026-08-19**; this run they moved -0.0177 → -0.0311 and -0.0866 → -0.0753, i.e. continuation inside an existing negative regime.
- **No new, adjacent-observation-supported sign reversal occurred at sector level this run.** IT went from -0.0508 to +0.0011 (p=0.988), indistinguishable from zero, which is not a "turned positive" signal.
- The count of negative sectors (2: Financials, Utilities) is not the count of new reversals (0).

## Seven-Factor Summary (MOM / EP / BP / FCF Yield / ROE / VOL / SIZE)

| Factor | IC Mean | ICIR | p-value | Prior IC | Delta | Observations | Signal |
|--------|---------|------|---------|----------|-------|--------------|--------|
| **MOM** | +0.0876 | +0.3145 | 0.0600 | +0.0549 | **+0.0327** | 39 xs | ⚪ Positive but insignificant (overlap uncorrected) |
| **EP** | -0.0480 | -0.5196 | 0.0002 | -0.0480 | 0.0000 | 60 xs | ⏸ Frozen (sample ends 05-28) |
| **BP** | +0.0030 | +0.0456 | 0.7276 | +0.0030 | 0.0000 | 60 xs | ⏸ Frozen |
| **FCF Yield** | -0.0352 | -0.5390 | 0.0001 | -0.0352 | 0.0000 | 60 xs | ⏸ Frozen |
| **ROE** | -0.0248 | -0.6845 | 0.000002 | -0.0248 | 0.0000 | 60 xs | ⏸ Frozen |
| **VOL** | +0.1040 | +1.0027 | <0.0001 | +0.1183 | -0.0143 | 39 xs | ⭐ Most stable positive relation |
| **SIZE** | +0.0791 | +0.4533 | 0.0081 | +0.0531 | **+0.0260** | 39 xs | ⚠ Proxy definition, see note |

**Notes**

- ic_mean is the average rank correlation across historical cross-sections. It is **not today's IC, not a forward return and not a probability of decline**. A positive IC means higher factor values ranked higher in subsequent 21-day cross-sectional returns.
- p-values come from a plain t-test and are **not corrected for the autocorrelation of overlapping returns**. MOM/VOL/SIZE use 21-day forward returns with 20 days of overlap between adjacent cross-sections; the IC series has AR(1) of 0.94 (MOM) and 0.78 (VOL), so the number of effectively independent observations is far below 39 and the true p-value is materially higher than reported. MOM's p=0.060 should not be called "borderline significant", and VOL's p<0.0001 should not be called "highly significant, not random noise".
- ICIR = mean IC / standard deviation of IC. It measures the stability of the factor reading, **not a strategy Sharpe ratio and not annualised return**.
- **SIZE definition**: this run built SIZE via `build_size_panel(prices)` without share counts, so the factor value is **log(price)**. Recomputing with the same algorithm reproduces IC=+0.0791, bit-identical to the result file. It is therefore a price-level proxy rather than true market capitalisation, and it is mechanically related to momentum; it cannot be read as a small-cap or large-cap signal.

## Quantile Portfolio Average Returns (cross-sectional average, %)

| Factor | Q1 | Q2 | Q3 | Q4 | Q5 | Long-short Q1−Q5 |
|--------|-----|-----|-----|-----|-----|------------------|
| MOM | -1.744 | -2.805 | -2.274 | -2.518 | +0.639 | -2.383 |
| VOL | -3.567 | -2.545 | -1.976 | -2.198 | +1.581 | -5.148 |
| SIZE | -2.182 | -2.634 | -1.300 | -1.469 | -1.118 | -1.064 |
| EP | +5.395 | +2.858 | +1.873 | +1.039 | +2.413 | +2.982 |
| BP | +4.056 | +3.451 | +1.149 | +1.996 | +2.925 | +1.132 |
| FCF Yield | +4.941 | +3.332 | +0.802 | +2.038 | +2.465 | +2.476 |
| ROE | +4.649 | +1.722 | +1.840 | +1.634 | +3.885 | +0.763 |

- Direction follows the **actual code**: the script computes `Q1 − Q5` (low-factor group minus high-factor group), which is self-consistent with the sign of IC. A negative long-short figure therefore means the high-factor group beat the low-factor group.
- These are in-sample average cross-sectional returns, **before transaction costs and with no turnover assumption**; they are not achievable strategy returns. The MOM/VOL/SIZE bucket structure is not monotonic (the best bucket is clear, the middle buckets are not).

## Sector Momentum (MOM, GICS breakdown)

| Sector | IC Mean | ICIR | p-value | Names | Prior IC | Delta | Sign this run |
|--------|---------|------|---------|-------|----------|-------|---------------|
| Consumer Staples | +0.1892 | +0.7181 | 0.0001 | 36 | +0.1476 | +0.0415 | Positive (continuation) |
| Health Care | +0.1906 | +0.9092 | <0.0001 | 59 | +0.1657 | +0.0249 | Positive (since 09-24) |
| Consumer Discretionary | +0.1381 | +0.5341 | 0.0022 | 48 | +0.1074 | +0.0307 | Positive (continuation) |
| Industrials | +0.0757 | +0.2452 | 0.1389 | 79 | +0.0382 | +0.0374 | Positive (insignificant) |
| Information Technology | +0.0011 | +0.0024 | 0.9881 | 73 | -0.0508 | +0.0519 | ≈0 |
| Financials | -0.0311 | -0.0981 | 0.5491 | 76 | -0.0177 | -0.0134 | Negative (since 08-19) |
| Utilities | -0.0753 | -0.7240 | 0.0001 | 31 | -0.0866 | +0.0113 | Negative (since 08-19) |

39 cross-sectional observations per sector.

**Coverage**: only 7 GICS sectors covering 402 names enter the breakdown (~81% of the 499-name sample pool). Real Estate (30 names with data), Materials (26), Communication Services (22) and Energy (21) are excluded because they fall below the code's 30-valid-names-per-cross-section floor; Real Estate last appeared on 2026-09-26. Sector conclusions therefore apply to these seven sectors only and cannot be extrapolated to market-wide rotation.

**Reiterated**: the three sign alarms (Health Care negative-to-positive, Financials and Utilities positive-to-negative) compare against a historical-mean baseline and describe regimes in place since August-September, not new reversals today. Health Care's z-score is high (z=+3.9 on a de-duplicated baseline, +4.9 including duplicates), but 61 of its baseline date records carry the same frozen value (logged repeatedly while the data was stale), so the baseline is not a stable historical benchmark.

## Implications for Strategy

1. **The momentum case moved from "broken" back to "mildly positive", but not enough to justify chasing strength.** Aggregate 12-1 momentum IC turned positive at +0.088, and the high-momentum quintile (Q5) is the only positive bucket (+0.64% versus -1.7% to -2.8% for Q1-Q4). However: (i) the entire rise came from window rolling (four September cross-sections in, four July cross-sections out); (ii) p=0.060 is uncorrected and in reality weaker; (iii) the bucket structure is not monotonic. The actionable reading is "high momentum is no longer a negative", not "momentum chasing works again".

2. **Low volatility remains the most stable cross-sectional relation in this window** (IC=+0.104, ICIR=1.00, 79.5% of cross-sections positive), but the reading is decaying (added cross-sections average +0.091 versus +0.230 dropped): the stability comes from the distribution, not from strength.

3. **The fundamental block currently provides no new information.** EP / BP / FCF Yield / ROE are computed on a static March-May 2026 sample frozen for 4.5 months; "EP negative, FCF Yield negative" describes the market before end-May, cannot explain today and is not confirmation of a value rotation. Making these factors informative again requires rebuilding the financial panel (`fetch_fundamental_panel.py`, currently on no schedule).

4. **Usable sector differences**: Consumer Staples, Health Care and Consumer Discretionary sector momentum are positive in-sample with relatively high ICIR (0.72 / 0.91 / 0.53); Utilities' negative momentum (low-momentum outperformance) is still robust at ICIR -0.72; Financials and IT sector momentum is near zero and carries no discrimination. Note that Health Care's improvement comes mainly from dropping weak July cross-sections -- added cross-sections average -0.048 versus -0.291 dropped -- not from new strength.

5. **SIZE cannot be used as a market-cap factor**; see the definition note above.

## What Cannot Be Concluded

- ❌ MOM positive ≠ the index must rise, and it does not imply recent laggards are undervalued. IC is a cross-sectional rank relation with no directional forecast.
- ❌ SIZE positive ≠ a small-cap or large-cap regime; the factor is a price-level proxy this run.
- ❌ EP / FCF Yield negative ≠ confirmed value rotation, and those numbers come from a static sample ending in May.
- ❌ The three sign alarms ≠ three independent risk events; and ❌ only two negative sectors does not mean "sector momentum is healthy overall".
- ❌ p-values are not corrected for overlapping samples, so "highly significant, not random noise" is not supportable; ICIR ≠ strategy Sharpe.
- ❌ Quantile long-short returns exclude costs and are not achievable strategy returns.
- ❌ This report issues no buy or sell instructions.

## Statistical and Data Limitations

| Limitation | Detail |
|-----------|--------|
| Overlapping returns | 21-day forward returns overlap by 20 days; IC series AR(1)=0.94 (MOM) / 0.78 (VOL); the plain t-test understates standard errors, so reported p-values are lower bounds |
| Window misalignment | Prices run through 2026-10-14 but the latest evaluable cross-section is 2026-09-15; the following 21 sessions cannot be evaluated |
| Frozen fundamentals | The financial panel ends 2026-05-28; the four fundamental factors have been bit-identical since 2026-08-27 (35 consecutive runs) |
| Baseline contains duplicates | About 70% of dates in ic_history are identical to the preceding date (repeated writes while the cache was stale), which inflates the effective sample and leaves the z-score mean dominated by a single regime |
| Incomplete sector coverage | 7 sectors, 402 names; Real Estate / Materials / Communication Services / Energy excluded for insufficient names |
| Run gap | No successful runs on 10-10, 10-13, 10-14 (two catch-up attempts on 10-14 failed with a model-service HTTP 403); first success in six days |
| Factor definitions | MOM is 12-1 month momentum (price[t-21]/price[t-273]-1); VOL is 60-day annualised volatility; SIZE is effectively log(price) |
| Meaning of ic_mean | Average historical cross-sectional rank correlation -- not today's IC and not a forward-return forecast |

![Factor IC Comparison](/charts/factor-ic-2026-10-15.png)

![Sector Momentum Breakdown](/charts/sector-mom-2026-10-15.png)

*Charts are generated from the same run's result JSON (`analyses/factor_lab/factor_test_20261015_0632.json`, `..._per-sector.json`).*
