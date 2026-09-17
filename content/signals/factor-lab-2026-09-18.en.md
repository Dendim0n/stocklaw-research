---
title: "Factor Lab Daily Brief 2026-09-18"
date: 2026-09-18
description: "S&P 500 7-factor test: data as of 2026-09-17. Fundamental factor ICs unchanged (TTM not refreshed). Momentum continues negative regime with slight contraction. IT sector MOM IC=-0.47, Financials=-0.24, Industrials=-0.21. BP remains ineffective."
---

# Factor Lab Daily Brief 2026-09-18

## Data Cutoff: 2026-09-17 (Thursday, prev close)

Universe: S&P 500 constituents, 502 stocks (ROE 474 stocks). Evaluation: 60-trading-day rolling cross-sectional rank correlation (EP/BP/FCF Yield/ROE); 39 trading days (MOM/VOL/SIZE). MOM holding period: Price[t-21]/Price[t-273] - 1, i.e. ~10-month lookback, 21-day forward return.

## Data Status

`prices_cache.parquet` last date **2026-09-17**, 643 rows (~2.5 years of daily data). Fundamental panel `combined_panel.pkl` not updated — TTM financials still from last quarter, so EP/BP/FCF Yield/ROE ICs are identical to last run.

## 7-Factor Summary

| Factor | IC Mean | ICIR | Prev IC | Delta | p-value | Observations | Direction |
|:-------|--------:|-----:|--------:|------:|:--------|:------------:|:----------|
| MOM | -0.1761 | -1.15 | -0.1817 | +0.006 | <0.0001 | 39 | Negative, continuing |
| EP | -0.0480 | -0.52 | -0.0480 | 0.0000 | 0.0002 | 60 | Negative, no change |
| FCF Yield | -0.0352 | -0.54 | -0.0352 | 0.0000 | 0.0001 | 60 | Negative, no change |
| SIZE | -0.0722 | -1.05 | -0.0722 | ~0.0000 | <0.0001 | 39 | Negative, no change |
| ROE | -0.0248 | -0.68 | -0.0248 | 0.0000 | <0.0001 | 60 | Negative, no change |
| VOL | +0.0712 | +0.49 | +0.0654 | +0.006 | 0.004 | 39 | Positive, continuing |
| BP | +0.0030 | +0.05 | +0.0030 | 0.0000 | 0.728 | 60 | Ineffective |

**Notes:**
- Fundamental factors (EP/BP/FCF/ROE) ICs identical to prior run — TTM financial window not refreshed. Cannot claim "no change today" as a signal; this is data lag.
- MOM negativity continuing but contracting daily: -0.1973(9/14) → -0.1901(9/15) → -0.1855(9/16) → -0.1817(9/17) → -0.1761(9/18). Still in negative territory.
- VOL positive IC strengthening: +0.0543 → +0.0575 → +0.0609 → +0.0654 → +0.0712, ICIR approaching 0.5 threshold.
- SIZE persistently strong negative IC (ICIR -1.05), large caps outperforming small caps within sample.
- p-values marked **not corrected for overlapping sample autocorrelation** (21-day overlapping returns), cannot claim "statistically significant, not random."
- ICIR = IC mean / IC std, not strategy Sharpe or annualized return.

## Sector Momentum Map (MOM by Sector)

| Sector | IC | ICIR | Status |
|:-------|:--:|:----:|:-------|
| Information Technology | -0.4658 | -1.83 | 🔴 Strong negative |
| Financials | -0.2447 | -1.11 | 🔴 Negative |
| Industrials | -0.2055 | -1.27 | 🔴 Negative |
| Utilities | -0.0875 | -0.75 | Weak negative |
| Consumer Staples | -0.0351 | -0.15 | Near zero |
| Health Care | -0.0263 | -0.09 | Near zero |
| Consumer Discretionary | -0.0142 | -0.08 | Near zero |
| Real Estate | +0.1031 | +0.30 | Weak positive |

**Coverage:** All 8 GICS sectors decomposed. Real Estate is the only sector with positive momentum, but ICIR=0.30 is not significant.

**Anomaly Alert Interpretation:** System flags multiple sectors "positive-to-negative flip" (Consumer Discretionary, Consumer Staples, Financials, Industrials, IT, Utilities). Cross-referencing ic_history — these alerts have been firing continuously since momentum turned negative in late August. This is an **ongoing regime continuation**, not a new flip today. IT sector IC=-0.47 exceeds 2σ below its historical mean of +0.34, representing an amplitude intensification.

## Quantile Long-Short Direction

Code uses Q1 (low factor) vs Q5 (high factor), long_short = Q1_mean_ret - Q5_mean_ret. Therefore:
- MOM long-short Q1-Q5 = +5.35% → Q1 (past 10-month losers) outperforms Q5 (winners) → momentum reversal
- VOL long-short Q1-Q5 = -2.89% → Q1 (low vol) underperforms Q5 (high vol) → high-vol group earns more
- SIZE long-short Q1-Q5 = +4.06% → Q1 (small) outperforms Q5 (large) → but negative IC means Q1 has higher avg return

Quantile portfolio returns **do not deduct transaction costs**; do not characterize as implementable strategy returns.

## Implications for Strategy

1. **Momentum reversal regime persists.** IT sector stands out (IC=-0.47), where last year's tech winners are now losers. This does not constitute a "buy losers" signal — IC measures cross-sectional predictive power, not directional call.
2. **Value factors (EP/FCF Yield) remain negative**, but this reflects stale data. TTM refresh needed before re-evaluating. Cannot infer "value rotation confirmed" from current readings.
3. **Low-volatility premium (VOL positive IC) strengthening**, ICIR rising from 0.33 to 0.49, nearing the 0.5 stability threshold. A signal worth watching but not yet confirmed.
4. **SIZE factor** large-cap dominance aligns with risk-off environment.

## Conclusions Not Supported

- ❌ Negative MOM ≠ market must decline
- ❌ Negative EP/FCF ≠ value factor失效 or value rotation starting (data stale)
- ❌ p<0.05 ≠ significant after overlapping sample correction
- ❌ Count of negative sector momentum ≠ today's new flips (regime continuation)
- ❌ ICIR ≠ strategy Sharpe
- ❌ Quantile long-short returns ≠ implementable returns (no cost deduction)

## Statistical & Data Limitations

- Cross-sectional t-tests do not account for 21-day overlapping return autocorrelation; p-values understate true uncertainty
- Evaluation window: 60 days (fundamental factors) / 39 days (price factors). MOM has only 39 evaluable cross-sections due to 273-day lookback
- ic_history baseline includes May-June positive momentum era; z-scores may be distorted during regime transitions
- Data cutoff 2026-09-17; latest factor cross-section (9/18)'s 21-day forward return extends to mid-October, not yet evaluable
