---
title: "Factor Lab Daily Brief 2026-10-07"
date: "2026-10-07"
description: "S&P 500 seven-factor cross-sectional test results. Data through 2026-10-06. MOM factor IC flipped slightly positive (+0.0304) for the first time since the late-Sept regime shift; fundamental factor ICs unchanged (no new earnings in evaluation window); VOL remains strongly positive (IC=+0.119, ICIR=+1.07); sector-level Health Care MOM accelerating positive, IT/Utilities maintaining negative momentum."
---

# Factor Lab Daily Brief 2026-10-07

## Data Overview

- **Price data as-of**: 2026-10-06 (latest date in prices_cache.parquet)
- **Universe**: 502 S&P 500 constituents (474 for ROE)
- **Evaluation**: 21-day forward returns (MOM/VOL/SIZE use 39 cross-sectional observations; fundamental factors use 60)
- **ic_mean**: Mean of historical cross-sectional Spearman rank correlations — not a single-day IC, not forward returns, not a downside probability
- **Holding period**: Default 21 trading days; the most recent 21 days (back to 10/06) are incomplete for full evaluation
- **p-value**: Uncorrected for overlapping-sample autocorrelation. Stars (⭐) indicate p<0.05 uncorrected only — **does not prove "highly significant, not random"**
- **ICIR**: IC mean / IC std, not a strategy Sharpe or annualized return

## Current vs Prior and Last 5 Distinct Running Days

| Factor | IC 09-26 | IC 09-29 | IC 10-01 | IC 10-02 | IC 10-03 | IC 10-06 | IC 10-07 | Change (10-07 vs 10-06) |
|:-------|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|:-----------------------:|
| EP     | -0.0480  | -0.0480  | -0.0480  | -0.0480  | -0.0480  | -0.0480  | -0.0480  | 0.0000 |
| BP     | +0.0030  | +0.0030  | +0.0030  | +0.0030  | +0.0030  | +0.0030  | +0.0030  | 0.0000 |
| FCF Yield | -0.0352 | -0.0352 | -0.0352 | -0.0352 | -0.0352 | -0.0352 | -0.0352 | 0.0000 |
| ROE    | -0.0248  | -0.0248  | -0.0248  | -0.0248  | -0.0248  | -0.0248  | -0.0248  | 0.0000 |
| MOM    | -0.0758  | -0.0632  | -0.0349  | -0.0193  | -0.0012  | +0.0158  | **+0.0304** | **+0.0146** |
| VOL    | +0.1173  | +0.1172  | +0.1148  | +0.1172  | +0.1191  | +0.1203  | +0.1192  | -0.0011 |
| SIZE   | -0.0222  | -0.0139  | +0.0032  | +0.0118  | +0.0211  | +0.0298  | +0.0376  | +0.0078 |

**Note**: Fundamental factor ICs (EP/BP/FCF Yield/ROE) have been identical since 09-26 because no new earnings landed in the evaluation window, freezing TTM data. Price factors (MOM/VOL/SIZE) update daily with prices.

## Complete 7-Factor Table

| Factor | IC | ICIR | p-value | Long-Short (Q1-Q5)% | Observations | Status |
|:-------|:--:|:----:|:-------:|:-------------------:|:------------:|:------:|
| EP     | -0.0480 | -0.5196 | 0.000184 | +2.98 | 60 | ⭐ Significant (negative) |
| BP     | +0.0030 | +0.0456 | 0.7276   | +1.13 | 60 | Ineffective |
| FCF Yield | -0.0352 | -0.5390 | 0.000112 | +2.48 | 60 | ⭐ Significant (negative) |
| ROE    | -0.0248 | -0.6845 | 0.000002 | +0.76 | 60 | ⭐ Significant (negative) |
| MOM    | +0.0304 | +0.1042 | 0.5245   | -0.69 | 39 | Not significant |
| VOL    | +0.1192 | +1.0742 | <0.000001| -5.47 | 39 | ⭐ Highly significant |
| SIZE   | +0.0376 | +0.2462 | 0.1374   | +0.38 | 39 | Not significant |

## Sector Momentum (MOM by Sector)

| Sector | IC | ICIR | Long-Short (Q1-Q5)% |
|:-------|:--:|:----:|:-------------------:|
| Consumer Discretionary | +0.0869 | +0.3316 | -0.49 |
| Consumer Staples | +0.1225 | +0.4209 | +0.48 |
| Financials | -0.0298 | -0.0932 | +0.70 |
| **Health Care** | **+0.1419** | **+0.5164** ⭐ | **-6.77** |
| Industrials | +0.0108 | +0.0356 | +1.08 |
| Information Technology | -0.0875 | -0.1852 | +2.90 |
| Utilities | -0.0903 | -0.7452 ⭐ | +3.08 |

**Coverage**: 7 GICS sectors (Real Estate had no valid cross-section this run, excluded from sector decomposition).

## Anomaly Detection & Regime Continuity Analysis

### Overall MOM Factor

- Overall MOM IC moved from +0.0158 on 10/06 to **+0.0304** on 10/07 — the **first positive IC** since the late-September regime shift.
- However, this is only Day 1 positive after a streak of negatives dating back to 9/25 (−0.0758). **One day of positive IC is insufficient to declare a regime reversal.**
- The 241-entry ic_history shows MOM sustained negative values from late August onward, oscillating around −0.1 to +0.0.

### Sector-Level Alert Interpretation

| Alert | Substance | Continuation / New |
|:------|:--------- |:------------------:|
| 🔴 Financials: flipped positive to negative | Financials MOM has persisted −0.03 to −0.08 since late August; not a today event | **Continuation** |
| 🔴 IT: flipped positive to negative | IT MOM sustained negative since mid-September (−0.15 to −0.21), narrowed to −0.09 post 10/03 | **Continuation** |
| 🔴 Utilities: flipped positive to negative | Utilities turned negative on 10/01 (−0.11), drifting to −0.09; not today's event | **Continuation** |
| 🔴 Health Care: flipped negative to positive | Health Care MOM flipped positive on 10/01 (+0.10), accelerating to +0.14 today | **Continuation** |
| ⚠️ Utilities: IC偏离历史均值 | Current −0.09 below historical mean +0.14, z=−2.01 | **Continuation** |

**Key limitation**: All "🔴 flipped positive to negative" alerts use an ic_history baseline that includes the May–June positive-momentum era (mean +0.1 to +0.4). After momentum turned negative in late August, these alerts fire for weeks — **they are persistent markers of an existing regime, not same-day突变 signals**.

## Strategic Implications

1. **VOL factor remains robustly strong** (ICIR=+1.07): Low-volatility groups significantly outperform high-volatility groups. This signal has been stable through Sept–Oct, consistent with elevated market volatility environments where the "low-volatility anomaly" holds.
2. **MOM slightly positive but not actionable**: IC=+0.03, p=0.52 — trivially close to zero, statistically insignificant. Insufficient evidence that the momentum factor has re-established effectiveness.
3. **Fundamental factors uniformly negative IC**: EP, FCF Yield, ROE all significantly negative — high valuation / low FCF / high ROE groups underperform relatively. This reflects cross-sectional ranking, not an absolute "value is expensive" call; and IC has been frozen for 8 days due to TTM data stasis, so we cannot distinguish whether this is price-driven or earnings-driven.
4. **Health Care internal momentum strongest** (IC=+0.14): Within-sector winners keep winning in Health Care, contrasting with weak/negative momentum in IT (IC=−0.09).

## Conclusions That Cannot Be Drawn

- ❌ MOM turning positive ≠ momentum strategy is ready to go long today. IC=+0.03, p=0.52, statistically insignificant.
- ❌ Fundamental factor negative IC ≠ value factor失效 confirmed. Evaluation window financial data frozen; IC unchanged for 8 consecutive days — cannot verify.
- ❌ Sector "flip negative" alerts ≠ same-day regime switching. Most are continuations of trends established in Aug–Sept.
- ❌ VOL significant ≠ shorting high-volatility stocks is profitable. IC is a cross-sectional rank correlation, not strategy returns; transaction costs not deducted.
- ❌ Historical memory of negative MOM ≠ winners underperformed losers in the sample. Current MOM IC has turned positive.

## Statistical & Data Limitations

- Ordinary t-tests are uncorrected for overlapping-sample autocorrelation; p-values marked "uncorrected."
- MOM holding period is 21 days; the most recent 21 trading days (through 10/06) are incomplete for full forward evaluation.
- ic_mean represents the mean of historical cross-sectional rank correlations, not a single-day IC, future returns, or downside probability.
- Quantile portfolio long-short direction follows actual code Q1-Q5 ordering; costs not deducted — not claimable as implementable strategy returns.
- SIZE negative value indicates relative size within the sample only; no inference about broad-market small-cap direction.
- ROE covers 474 stocks (vs 502); missing sectors should be noted.
