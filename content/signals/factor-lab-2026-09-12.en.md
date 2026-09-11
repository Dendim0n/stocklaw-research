---
title: "Factor Lab Daily Brief 2026-09-12"
date: 2026-09-12
description: "S&P 500 factor analysis as of 2026-09-11: Momentum reversal deepens (IC=-0.20), value factors turned negative, size effect persists. Sector decomposition shows IT momentum IC=-0.48. All reversal alerts are regime continuation, not new events."
---

# Factor Lab Daily Brief 2026-09-12

## Data Cut-off and Sample Definition

- **Price data as-of**: 2026-09-11 (Friday, US market close)
- **Price cache**: 502 stocks, 639 trading days (2024-02-26 to 2026-09-11)
- **Fundamental panel**: combined_panel.pkl (TTM rolling, quarterly filings)
- **Evaluation window**: 60 cross-sectional observations for fundamental factors; 39 for price factors (MOM/VOL/SIZE)
- **MOM holding period**: Price[t-21]/Price[t-273] - 1 (21-day return, 273-day lookback)
- **Key**: ic_mean is the mean of historical cross-sectional rank correlations, **not a daily IC, not forward returns, not a downside probability**. The latest 21 trading days cannot be fully evaluated for the MOM factor given the holding period convention.

## Current vs Previous vs Recent Trend

### Full 7-Factor Table

| Factor | IC Mean | ICIR | p-value | Long-Short (Q1-Q5) | Previous IC | Delta | Valid Obs |
|--------|---------|------|---------|-------------------|-------------|-------|-----------|
| EP | -0.0480 | -0.52 | 0.0002⭐ | +2.98% | -0.0480 | 0.0000 | 60 |
| BP | +0.0030 | +0.05 | 0.7276 | +1.13% | +0.0030 | 0.0000 | 60 |
| FCF Yield | -0.0352 | -0.54 | 0.0001⭐ | +2.48% | -0.0352 | 0.0000 | 60 |
| ROE | -0.0248 | -0.68 | <0.0001⭐ | +0.76% | -0.0248 | 0.0000 | 60 |
| MOM | -0.1973 | -1.38 | <0.0001⭐ | +5.99% | -0.2037 | +0.0064 | 39 |
| VOL | +0.0543 | +0.33 | 0.0500 | -2.03% | +0.0476 | +0.0067 | 39 |
| SIZE | -0.0763 | -1.06 | <0.0001⭐ | +4.20% | -0.0760 | -0.0003 | 39 |

⭐ = p < 0.05, statistically significant (**not corrected for overlapping samples**)

### 6-Run Trend (Price factors only show changes)

| Factor | 09-07 | 09-08 | 09-09 | 09-10 | 09-11 | 09-12 | Trend |
|--------|-------|-------|-------|-------|-------|-------|-------|
| MOM | -0.2225 | -0.2226 | -0.2201 | -0.2141 | -0.2037 | **-0.1973** | Slightly收敛, still strongly negative |
| VOL | +0.0340 | +0.0339 | +0.0379 | +0.0415 | +0.0476 | **+0.0543** | Slowly turning positive, p=0.05 borderline |
| SIZE | -0.0659 | -0.0660 | -0.0706 | -0.0747 | -0.0760 | **-0.0763** | Continues weakening |

Fundamental factors (EP/BP/FCF/ROE) are **identical since 09-07** because the TTM panel does not change with single-day price updates.

## Sector Momentum Table (MOM by Sector)

| Sector | IC Mean | ICIR | p-value | Long-Short (Q1-Q5) | Status |
|--------|---------|------|---------|-------------------|--------|
| Information Technology | -0.4845 | -1.90 | <0.0001⭐ | +19.21% | 🔴 Strong reversal |
| Industrials | -0.2207 | -1.36 | <0.0001⭐ | +8.13% | 🔴 Strong reversal |
| Financials | -0.2717 | -1.31 | <0.0001⭐ | +5.15% | 🔴 Strong reversal |
| Consumer Staples | -0.0910 | -0.46 | 0.0067⭐ | +4.64% | Significant negative |
| Utilities | -0.0701 | -0.47 | 0.0061⭐ | +0.97% | Significant negative |
| Consumer Discretionary | -0.0500 | -0.32 | 0.0580 | +2.46% | Not significant |
| Health Care | -0.0497 | -0.18 | 0.2654 | -0.21% | Not significant |
| Real Estate | +0.1540 | +0.47 | 0.0538 | -2.56% | Marginally significant |

### Sector Momentum Alert Status (vs ic_history.json baseline)

The following alerts are derived from historical positive-momentum baselines in `ic_history.json`. **All are regime continuation, not new today**:

- 🔴 IT/Industrials/Financials/CDC/C-Staples/Utilities: IC flipped from positive to negative — historical baseline mean +0.16 to +0.52, all currently negative
- ⚠️ Financials/IT: Deviated 2σ+ from historical mean (z-score -2.33 to -2.42)
- ⚠️ Health Care: IC偏高 (z=+2.23), because historical baseline was negative (-0.12), current -0.05 deviates upward
- ⚠️ Real Estate/Utilities/CDC: p-value flipped from significant to not significant

**These alerts have been firing continuously since momentum regime turned negative in late August. They are not new events today.**

## Strategic Implications

1. **Momentum reversal has deepened**. MOM IC = -0.20, negative for 6 consecutive runs, with IT sector IC=-0.48 being the deepest cross-sectionally. This means yesterday's 21-day winners significantly underperform over the next 21 days — reverse momentum is currently the most statistically robust signal. Cannot conclude "market must fall," as this is a cross-sectional ranking relationship, not a directional forecast.

2. **Value factors broadly weak**. EP, FCF Yield, and ROE all significantly negative. Low valuation, low FCF, low ROE stocks outperform relatively. This is not "value rotation confirmed" — the market is pricing fundamental factors in reverse under the current regime.

3. **SIZE continues negative**: Small-cap outperforms large-cap within S&P 500. Consistent with the trend since early September, though the magnitude worsened from -0.066 to -0.076.

4. **VOL is the only marginally improving factor**, IC rising slowly from +0.034 to +0.054, p=0.050 at the significance boundary. Low-volatility stocks continue to slightly outperform.

## Conclusions That Cannot Be Drawn

- ❌ MOM negative ≠ market must drop tomorrow. This is cross-sectional correlation, not a directional prediction.
- ❌ SIZE negative ≠ broad small-cap rally. This is a relative size effect within S&P 500.
- ❌ EP/FCF/ROE negative ≠ value style confirmed. These factors are reversely effective in the current regime; direction needs specific validation.
- ❌ "Significant" p-value does not equal profitable strategy. No overlapping-sample autocorrelation correction applied; ICIR is IC mean/std, not strategy Sharpe.
- ❌ Number of negative sectors ≠ new reversals today. Baseline includes positive-momentum period from May-June; alerts persist for weeks after regime flip.
- ❌ BP not significant (IC=+0.003, p=0.73) = book value has no predictive power in this regime.

## Statistical and Data Limitations

- t-tests are **not corrected for overlapping samples** (the 21-day forward returns for MOM/VOL/SIZE have substantial overlap), p-values may be biased low.
- ICIR = ic_mean / ic_std, measuring factor stability, **not annualized returns or strategy Sharpe**.
- Fundamental factors have 60 observations covering ~3 months of cross-sections; price factors have 39 due to the 273-day lookback requirement for MOM.
- In sector decomposition, Health Care (n=59) and Real Estate (n=31) have small samples; IC estimates are noisier.
- Real Estate MOM has only 20 valid observations; results have limited reliability.
- Long-short direction is Q1 (low factor) minus Q5 (high factor); positive means low-factor group outperformed. Transaction costs not deducted.
