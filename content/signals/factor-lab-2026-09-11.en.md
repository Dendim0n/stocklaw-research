---
title: "Factor Lab Daily Brief 2026-09-11"
date: 2026-09-11
description: "S&P 500 seven-factor cross-sectional test. Data through 2026-09-10. Momentum, FCF Yield, EP, ROE, SIZE continue negative IC regime; momentum sector reversal persistent since late Aug, not a today novelty. Fundamental factors unchanged (quarterly panel lag)."
---

# Factor Lab Daily Brief 2026-09-11

## Data Cutoff

**2026-09-10** (US market close). prices_cache: 499/502 stocks have data through 09-10; remaining 3 at 08-10 to 08-21 (incremental fetch anomaly, to be investigated). Cron ran at 06:30 CST (18:30 ET 09-10), capturing 09-10 close prices only, **not including 09-11 (Friday) data**.

## Sample and Evaluation Methodology

- **Universe**: S&P 500 constituents, 502 valid stocks (474 for ROE)
- **Fundamental factors** (EP / BP / FCF Yield / ROE): based on `combined_panel.pkl` daily TTM earnings panel, n_ic_obs = 60 cross-sections
- **Price factors** (MOM / VOL / SIZE): n_ic_obs = 39 cross-sections
- **MOM**: Price[t-21]/Price[t-273] - 1, 21-day forward return
- **IC**: Spearman rank correlation, factor value vs next-period return (average across cross-sections)
- **Long-Short**: Q1 long − Q5 short (code sorts Q1 = lowest factor value group), **before transaction costs**
- **p-value**: Ordinary t-test, **not corrected for overlapping return autocorrelation**
- **ICIR**: IC mean / IC std, not strategy Sharpe
- **Long-short direction**: Must verify actual Q1-Q5 vs Q5-Q1 ordering in code; uncosted returns ≠ implementable strategy returns

## Current vs Previous and 5 Recent Runs Comparison

| Factor | 09-05 | 09-08 | 09-09 | 09-10 | 09-11 (Current) | Change (Current−Previous) |
|--------|-------|-------|-------|-------|-----------------|--------------------------|
| EP | −0.0480 | −0.0480 | −0.0480 | −0.0480 | **−0.0480** | 0.0000 |
| BP | +0.0030 | +0.0030 | +0.0030 | +0.0030 | **+0.0030** | 0.0000 |
| FCF Yield | −0.0352 | −0.0352 | −0.0352 | −0.0352 | **−0.0352** | 0.0000 |
| ROE | −0.0248 | −0.0248 | −0.0248 | −0.0248 | **−0.0248** | 0.0000 |
| MOM | −0.2225 | −0.2226 | −0.2201 | −0.2141 | **−0.2037** | +0.0104 |
| VOL | +0.0340 | +0.0339 | +0.0379 | +0.0415 | **+0.0476** | +0.0061 |
| SIZE | −0.0659 | −0.0660 | −0.0706 | −0.0747 | **−0.0760** | −0.0013 |

**Note**: EP/BP/FCF Yield/ROE are identical across 09-07 to 09-11 (to 4 decimal places), indicating no new price data propagated to fundamental factor computation since 09-07. This is inherent to quarterly financial panel lag, not a bug. The 09-11 run added only one new trading day (09-10) for price factors; small changes in MOM/VOL/SIZE reflect single-day price movement impact on rolling statistics.

**Status quo persists. No new data-driven regime change.**

## Complete 7-Factor Table

| Factor | IC | ICIR | p-value | Long-Short (Q1−Q5) | Valid Obs | IC>0% |
|--------|-----|------|---------|-------------------|-----------|-------|
| EP | −0.0480 | −0.5196 ⭐ | 0.000184 ⭐ | +2.98% | 60 | 28.3 |
| BP | +0.0030 | +0.0456 | 0.7276 | +1.13% | 60 | 48.3 |
| FCF Yield | −0.0352 | −0.5390 ⭐ | 0.000112 ⭐ | +2.48% | 60 | 25.0 |
| ROE | −0.0248 | −0.6845 ⭐ | 0.000002 ⭐ | +0.76% | 60 | 26.7 |
| MOM | −0.2037 | −1.4879 ⭐ | <0.000001 ⭐ | +6.18% ⭐ | 39 | 10.3 |
| VOL | +0.0476 | +0.2756 | 0.0975 | −1.77% | 39 | 64.1 |
| SIZE | −0.0760 | −1.0589 ⭐ | <0.000001 ⭐ | +4.21% | 39 | 15.4 |

⭐ = |IC|/σ > 0.5 or p < 0.05

**Key Interpretations**:
- **MOM −0.20**: Negative momentum regime persistent since late August; stable between −0.020 and −0.22 from 09-05 to 09-11, with mild convergence (ICIR from −1.96 → −1.49), but sign unchanged.
- **SIZE −0.08**: Small cap underpressure continues, ICIR −1.06, highly significant (p uncorrected for overlap).
- **EP/FCF Yield/ROE all negative**: Value/profitability factors inversely correlated in this sample window. Does not equal "value rotation confirmed"—these are time-averaged cross-sectional IC, not any strategy's absolute return.
- **BP ineffective**: IC ≈ 0, p = 0.73, no predictive power.
- **VOL +0.05**: Low-volatility anomaly direction (high VOL group underperforms), but p = 0.10, not at 0.05 threshold.

## Sector Momentum Table (MOM by Sector)

| Sector | Stocks | IC | ICIR | p-value | Long-Short (Q1−Q5) |
|--------|--------|-----|------|---------|-------------------|
| Information Technology | 73 | **−0.4918** ⭐ | −1.94 ⭐ | <0.000001 ⭐ | +19.62% ⭐ |
| Financials | 76 | **−0.2839** ⭐ | −1.50 ⭐ | <0.000001 ⭐ | +5.35% ⭐ |
| Industrials | 79 | **−0.2285** ⭐ | −1.44 ⭐ | <0.000001 ⭐ | +8.32% ⭐ |
| Consumer Staples | 36 | **−0.1016** ⭐ | −0.55 ⭐ | 0.0016 ⭐ | +4.83% ⭐ |
| Consumer Discretionary | 48 | −0.0621 | −0.40 | 0.0175 ⭐ | +2.61% |
| Utilities | 31 | −0.0571 | −0.35 | 0.0390 ⭐ | +0.74% |
| Health Care | 59 | −0.0565 | −0.22 | 0.1910 | +0.13% |
| Real Estate | 31 | **+0.1660** ⭐ | +0.51 ⭐ | 0.0326 ⭐ | −2.82% |

**Coverage**: 8 of 11 GICS一级 sectors. Health Care MOM p = 0.19, not significant; Utilities p = 0.04 but |IC| only −0.06.

**Anomaly Alert Interpretation** (against ic_history last 10 unique run dates):
- 7 sectors with "positive-to-negative" MOM IC alerts (🔴)—Consumer Discretionary, Consumer Staples, Financials, Industrials, Information Technology, Utilities—**all are existing regime markers, not today's novelty**. ic_history shows these sectors' MOM IC was positive from 05-29 to mid-August (mean +0.12 to +0.37), turned negative from late August and has persisted. Reports should flag "continuation" not "new."
- Real Estate is the only sector with positive MOM IC (+0.17); its historical mean in ic_history also hovers near zero, not a reversal.
- Health Care IC = −0.06 is elevated relative to historical mean −0.12 ± 0.03 (z = +2.03), but p-value dropped from 0.044 to 0.191 (no longer significant), possibly reflecting sample noise rather than regime change.

## Strategy Implications

1. **Momentum reversal is the strongest signal but not a new event**: MOM −0.020, IT sector −0.49 is continuation of regime established late August. IT long-short spread 19.6% (Q1 winners − Q5 losers), extreme magnitude but seen at similar levels multiple times within the sample window.
2. **Value factors uniformly ineffective**: EP/FCF Yield/ROE all negative IC, unchanged from 09-07 to 09-11. Do not use "value reversion" as strategy basis before next quarterly panel update.
3. **Small cap pressure persistent**: SIZE IC −0.08 deepening daily, consistent with negative MOM—small cap + low momentum combo weakest in this regime.
4. **Real Estate isolated positive momentum**: Only sector with positive MOM IC (n=31, ic_obs=21), small sample warrants caution.

## Conclusions That Cannot Be Drawn

- ❌ MOM negative ≠ market must fall. MOM measures cross-sectional winner vs loser relative performance, not bound to market direction.
- ❌ SIZE negative ≠ small cap rally imminent. It only means size factor cross-sectional regression was negative in this sample window.
- ❌ EP/FCF Yield/ROE negative ≠ value rotation confirmed. These are time-averaged cross-sectional IC means, not any long-short strategy's actual return.
- ❌ Red light count ≠ independent risk event. 6 of 7 sector "positive-to-negative" alerts are continuation signals per ic_history baseline, not breakouts.
- ❌ p < 0.05 ≠ "not random" (uncorrected for overlapping samples). MOM/VOL/SIZE n_ic_obs = 39 are rolling overlapping windows; standard t-test overstates significance.
- ❌ ICIR is not strategy Sharpe. ICIR = IC_mean / IC_std measures factor stability, not risk-adjusted return.
- ❌ Long-short returns before costs; do not call "implementable strategy returns."

## Statistical and Data Limitations

1. **ic_mean is multi-cross-section rank correlation**, not daily IC, not future return forecast, not drop probability.
2. **MOM uses 21-day forward return by default**; the most recent 21 trading days (08-21 to 09-10) cannot be fully evaluated (t-21 factor computation needs data before 08-21).
3. **p-values not corrected for overlapping return autocorrelation**. 39 observations are non-independent; true significance may be lower than reported.
4. **Four fundamental factors unchanged for 4 runs**: combined_panel.pkl is quarterly TTM earnings; next update requires new earnings season release.
5. **3 stocks prices_cache lagging 20+ days** (EA 08-10, EQR 08-21, one at 08-14); incremental fetch logic may incorrectly short-window data.
6. **Incomplete sector coverage**: Health Care (p=0.19), Utilities (weak signal) momentum unreliable; 8/11 sectors statistically meaningful.

---

*Charts: [/charts/factor-ic-2026-09-11.png](/charts/factor-ic-2026-09-11.png) · [/charts/sector-mom-2026-09-11.png](/charts/sector-mom-2026-09-11.png)*
