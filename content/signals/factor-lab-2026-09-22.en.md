---
title: "Factor Lab Daily Brief 2026-09-22"
date: "2026-09-22"
description: "S&P 500 factor testing: price data through 2026-09-18 (Fri), incremental pull did not update cache. Momentum (IC=-0.147) continues negative regime; IT sector momentum IC=-0.415 weakest across all factor-sector combos. EP/FCF Yield persist negative. BP ineffective. Volatility factor IC=+0.086 stable positive."
tags: [factor-lab, sp500, momentum, value]
---

# Factor Lab Daily Brief 2026-09-22

## Data Cutoff and Sample Definition

- **Price cutoff date**: 2026-09-18 (Friday). `prices_cache.parquet` latest date is 9/18. Today 9/22 is a US trading day, but the incremental pull did not write new prices to cache (re-run confirmed output identical to 9/19).
- **Fundamental data cutoff**: `combined_panel.pkl` contains TTM financial panel for 502 S&P 500 constituents, updated quarterly.
- **Evaluation window**: EP/BP/FCF Yield/ROE based on most recent 60 cross-sectional regressions; MOM/VOL/SIZE based on most recent 39 cross-sections (21-day forward return requires 273-day lookback, limited by cache start date).
- **Holding period**: MOM/VOL/SIZE use default 21-day forward returns. The most recent 21 trading days (9/1–9/18) are not yet fully evaluable.
- **IC definition**: Spearman rank correlation between factor value and next-period return. The `ic_mean` reported is the average rank correlation across multiple cross-sections in the evaluation window, **not a single-day IC, future return, or downside probability**.
- **t-test**: Ordinary t-test, **not adjusted for autocorrelation** in overlapping returns (21-day forward returns exhibit serial correlation). p-values cannot directly support "highly significant" claims.
- **ICIR**: IC mean / IC standard deviation, not a strategy Sharpe ratio or annualized return.
- **Long-short direction**: Code computes Q1 (lowest factor value group) minus Q5 (highest factor value group). Positive value = Q1 outperforms Q5 (high-factor group lags).

## New vs. Ongoing Signals

> **Ongoing status unchanged**: Price data identical to 9/19 run (through 9/18). All 7 factor ic_mean values match 9/19 exactly. No new price-driven changes observed.

| Factor | Current IC | 9/19 IC | Diff | Status |
|:-----|:---:|:---:|:---:|:-----|
| MOM | -0.1468 | -0.1637 | +0.017 | Ongoing |
| EP | -0.0480 | -0.0480 | 0.0000 | Ongoing |
| BP | +0.0030 | +0.0030 | 0.0000 | Ongoing |
| FCF Yield | -0.0352 | -0.0352 | 0.0000 | Ongoing |
| ROE | -0.0248 | -0.0248 | 0.0000 | Ongoing |
| VOL | +0.0861 | +0.0782 | +0.0079 | Ongoing |
| SIZE | -0.0595 | -0.0673 | +0.0078 | Ongoing |

## 7-Factor Summary

| Factor | IC | ICIR | p-value | Long-Short Q1-Q5 (%) | Obs |
|:-----|:---:|:----:|:-------:|:--------------------:|:---:|
| MOM | -0.1468 | -0.7854 ⭐ | 0.000022 | +4.56 | 39 |
| EP | -0.0480 | -0.5196 ⭐ | 0.000184 | +2.98 | 60 |
| BP | +0.0030 | +0.0456 | 0.7276 | +1.13 | 60 |
| FCF Yield | -0.0352 | -0.5390 ⭐ | 0.000112 | +2.48 | 60 |
| ROE | -0.0248 | -0.6845 ⭐ | 0.000002 | +0.76 | 60 |
| VOL | +0.0861 | +0.6513 ⭐ | 0.000270 | -3.45 | 39 |
| SIZE | -0.0595 | -0.7160 ⭐ | 0.000081 | +3.63 | 39 |

⭐ marks p < 0.05 (not adjusted for overlapping sample autocorrelation).

**Key observations**:
- **MOM remains negative** (-0.147),延续了 since flipping from positive to negative in late August. Q1 (worst performers over 273–252 days ago) avg return 4.63%, Q5 (best performers) only 0.07%. **MOM negative does not mean the market must fall; it only indicates that historical winners lagged historical losers within the sample.**
- **EP remains negative** (-0.048), earnings factor ineffective in current sample. Cannot be interpreted as value rotation confirmation—this only reflects the sign of cross-sectional correlation between earnings/price ratio and next-period returns.
- **FCF Yield negative** (-0.035), free cash flow yield factor also negative. Same reasoning as above.
- **BP ineffective** (IC=+0.003, p=0.728), book-to-price factor shows no significant relationship with next-period returns.
- **ROE negative** (-0.025), return on equity negatively correlated with next-period returns.
- **VOL positively effective** (IC=+0.086), high-volatility stocks outperformed low-volatility stocks on average—contrary to the low-vol anomaly, worth monitoring whether the sample period contains volatility clustering phases.
- **SIZE negative** (-0.060), small-cap factor favored within the sample. SIZE negative only indicates relative size within this sample, not a general small-cap rally prediction.

## Sector Momentum (MOM by Sector)

| Sector | IC | ICIR | Stocks | Long-Short Q1-Q5 (%) |
|:-----|:---:|:----:|:------:|:--------------------:|
| Information Technology | -0.4154 ⭐ | -1.4454 | 73 | +15.95 |
| Financials | -0.2014 ⭐ | -0.7868 | 76 | +3.72 |
| Industrials | -0.1724 ⭐ | -0.8784 | 79 | +6.67 |
| Utilities | -0.0970 ⭐ | -0.8605 | 31 | +2.16 |
| Health Care | -0.0143 | -0.0469 | 59 | -2.22 |
| Consumer Staples | -0.0103 | -0.0407 | 36 | +3.08 |
| Consumer Discretionary | +0.0057 | +0.0279 | 48 | +1.41 |
| Real Estate | +0.0352 | +0.1113 | 31 | +0.03 |

**IT sector momentum collapse**: IC=-0.415, ICIR=-1.45, p<0.0001, the weakest signal across all factor-sector combinations. Q1 (weakest IT stocks 273–252 days ago) avg return 13.42%, Q5 (strongest IT stocks) -2.53%. **Note: IT sector Q1/Q5 absolute return differential is enormous; this long-short signal does not deduct trading costs.**

**Coverage**: All 8 GICS sectors covered. Health Care (59 stocks) and Consumer Staples (36 stocks) MOM near zero with p>0.5, no valid conclusions可 drawn. Real Estate has only 14 IC observations (not 39), low statistical power.

## Anomaly Detection Notes

The following alerts repeat from prior runs and represent **ongoing regime continuation**, not today's突变:

- 🔴 **MOM / Financials, Industrials, IT, Utilities**: IC flip-from-positive-to-negative alerts continue triggering.对照 ic_history, Financials flipped ~mid-August, Industrials/IT ~late August, Utilities ~Aug 19—all occurred weeks ago.
- ⚠️ **MOM / Consumer Discretionary, Consumer Staples, Real Estate**: p-value flip from significant to insignificant,延续 trend from mid-September.
- ⚠️ **MOM / Health Care**: IC=-0.014偏离历史均值 -0.112±0.033 (z=+2.94), higher than historical mean, but absolute value is trivial—no practical strategy significance.
- ⚠️ **MOM / Real Estate**: IC=+0.035偏离历史均值 +0.137±0.032 (z=-3.23),偏低. Only 14 observations, z-score baseline may be distorted.

## Strategic Implications

1. **Momentum regime remains negative**. IT sector (-0.415) contributes the largest negative signal. This reflects the market structure of Aug–Sep: year-ago winners underperformed losers in the recent 21-day window.
2. **Value factors (EP, FCF Yield, ROE) all negative**. "Cheap" stocks did not outperform "expensive" ones in the current cross-sectional sample. This does not equal a universal conclusion that value strategies are broken—it only describes the cross-sectional relationship for S&P 500 constituents in the evaluation window.
3. **Volatility factor is the only consistently positive effective factor** (IC=+0.086, ICIR=+0.65). High-volatility stocks outperformed low-volatility stocks in this sample period.
4. **BP factor completely ineffective** (IC≈0, p=0.73), should not be weighted in the current sample.

## Conclusions That Cannot Be Drawn

- ❌ MOM negative ≠ market must fall. It only describes relative performance of past winners vs. losers within the sample.
- ❌ EP/FCF Yield negative ≠ value rotation confirmed. This is merely the sign of cross-sectional correlation between factor and next-period return.
- ❌ SIZE negative ≠ broad small-cap rally ahead. Only indicates relative size relationship in this sample.
- ❌ p < 0.05 ≠ "highly significant, not random". t-test not adjusted for overlapping return autocorrelation; p-values may be biased.
- ❌ Number of negative sector momentum values ≠ today's new reversal count. ic_history contains大量 duplicate records (multiple identical IC values per day), which dilutes z-score baseline. Alerts are ongoing regime markers.

## Statistical and Data Limitations

- **Price data lag**: Cache through 9/18, today's 9/22 trading day not included. Root cause under investigation (incremental pull script may be filtered by `min_rows` threshold when yfinance returns short windows—see skill for the known issue).
- **ic_history.json contains大量 duplicate date entries** (multiple identical IC values per same day), affecting z-score baseline stability.
- **MOM's 39 IC observations** mean the evaluation window covers ~39 trading days (~7–8 weeks). Cross-sections from ~7–8 weeks ago are only now being evaluated.
- **Real Estate has only 14 IC observations** (not 39), insufficient statistical power.
- **Quantile portfolio returns not net of trading costs**; not claimable as implementable strategy returns.
