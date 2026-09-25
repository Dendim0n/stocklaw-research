---
title: "Factor Lab Daily Brief 2026-09-26"
date: 2026-09-26
description: "S&P 500 seven-factor cross-sectional test: momentum, EP, FCF Yield, and ROE remain negative; volatility positive and significant. Market data as of 2026-09-25 (Thursday). No new price update this session."
---

# Factor Lab Daily Brief 2026-09-26

## Data Cut-off and Sample Definition

- **Price data cut-off**: 2026-09-25 (Thursday). `prices_cache.parquet` last row is 2026-09-25; today (9/26) is Saturday, no new market data.
- **Fundamental panel**: `combined_panel.pkl`, 502 S&P 500 constituents, TTM rolling financials.
- **Evaluation window**: 60 cross-sectional observations (~3 months); MOM/VOL/SIZE have only 39 observations due to 273-day lookback lag.
- **Factor definitions**: MOM=21-day momentum (lagged 249 days); EP=TTM earnings / market cap; BP=book-to-price; FCF Yield=TTM free cash flow / market cap; ROE=TTM net income / shareholders' equity; VOL=60-day annualized volatility; SIZE=log(market cap).
- **IC**: Spearman rank correlation between factor value and next-period return (default 21-day forward). ic_mean is the cross-sectional average, **not a single-day IC, not a forward return, not a drawdown probability**.
- **Significance**: Ordinary t-test, **not corrected for overlapping returns autocorrelation**. ICIR = ic_mean / ic_std, **not a strategy Sharpe ratio**.

## Comparison with Previous and Recent Runs

| Factor | Current IC | Previous (9/25) IC | Delta | Consecutive Identical Days |
|:-------|-----------:|-------------------:|------:|:---------------------------|
| EP     |    -0.0480 |            -0.0480 |  0.0000 | ≥5 days |
| BP     |     +0.0030 |            +0.0030 |  0.0000 | ≥5 days |
| FCF Yield |  -0.0352 |            -0.0352 |  0.0000 | ≥5 days |
| ROE    |    -0.0248 |            -0.0248 |  0.0000 | ≥5 days |
| MOM    |    -0.0758 |            -0.0902 | +0.0145 | Changed |
| VOL    |    +0.1173 |            +0.1097 | +0.0076 | Changed |
| SIZE   |    -0.0222 |            -0.0320 | +0.0098 | Changed |

EP, BP, FCF Yield, and ROE ic_mean values have been **identical for 5 consecutive trading days since 9/22**, confirming no price update this session — a continuation of the existing state. MOM, VOL, and SIZE show minor fluctuations (the price series includes the 9/25 single-day move), but the magnitudes are small.

## Seven-Factor Summary

| Factor | IC | ICIR | p-value | Long-Short (Q1-Q5) | Significant (α=0.05) | Observations |
|:-------|---:|-----:|--------:|-------------------:|---------------------:|:------------:|
| EP     | -0.0480 | -0.5196 ⭐ | 0.000184 |         +2.98% | ✅ | 60 |
| BP     | +0.0030 | +0.0456  | 0.727567 |         +1.13% | ❌ | 60 |
| FCF Yield | -0.0352 | -0.5390 ⭐ | 0.000112 |         +2.48% | ✅ | 60 |
| ROE    | -0.0248 | -0.6845 ⭐ | 0.000002 |         +0.76% | ✅ | 60 |
| MOM    | -0.0758 | -0.3243  | 0.052816 |         +2.42% | ❌ (marginal) | 39 |
| VOL    | +0.1173 | +1.0570 ⭐ | ≈0.000 |         -4.69% | ✅ | 39 |
| SIZE   | -0.0222 | -0.1956  | 0.235257 |         +2.36% | ❌ | 39 |

⭐ = p < 0.05

### Key Observations

1. **EP, FCF Yield, and ROE are all negative and significant**. This means low-valuation / low-earnings / low-ROE stocks outperformed their high-valuation counterparts within this sample window. This is **not** a confirmation of "value rotation" — it is simply the cross-sectional correlation direction for this evaluation period. One cannot extrapolate this to "buying value stocks now will profit."
2. **MOM remains negative (-0.076)**. Historical winners underperformed historical losers within the sample. This does **not** imply the broader market must fall, nor does it constitute a signal to buy lagging stocks.
3. **VOL is positive and significant (+0.117, ICIR=1.06)**. High-volatility stocks outperformed low-volatility stocks in this evaluation period. This is the reverse of the typical "low-volatility anomaly" — reflective of a special market environment.
4. **BP and SIZE have no explanatory power in this window**. BP's IC is near zero (p=0.73); SIZE is not significant (p=0.24).

## Sector Momentum (MOM by Sector)

| Sector | IC | ICIR | Significant |
|:-------|---:|-----:|:-----------:|
| Information Technology | -0.2893 | -0.8038 ⭐ | ✅ |
| Utilities | -0.1127 | -1.0437 ⭐ | ✅ |
| Real Estate | -0.1108 | -0.4656 | ❌ |
| Industrials | -0.0971 | -0.4118 | ❌ |
| Financials | -0.1146 | -0.3994 | ✅ |
| Health Care | +0.0465 | +0.1527 | ❌ |
| Consumer Staples | +0.0214 | +0.0753 | ❌ |
| Consumer Discretionary | +0.0251 | +0.1114 | ❌ |

**Coverage**: 8 GICS sectors, 502 constituents total. Some sectors (e.g., Health Care) have small sample sizes, reducing IC reliability.

### Anomaly Alerts (from daily script)

- 🔴 **IT momentum flipped from positive (+0.31) to negative (-0.29)** — but this flip has persisted for ~5 weeks since 8/19; a continuation of the existing regime
- 🔴 **Utilities flipped from positive to negative** — also a continuation signal
- 🔴 **Financials, Industrials, Real Estate** — all flipped from positive to negative — continuations
- ⚠️ **Health Care IC=+0.047 deviates from historical mean (-0.11) at z=+4.24** — elevated, but small sample warrants caution
- ⚠️ **CDS/CDSap momentum p-value no longer significant** — declining statistical power

## Strategic Implications

1. **Momentum factor is inactive in the current evaluation window**. IT sector is especially pronounced (IC=-0.29). This is not a sudden event — the flip since 8/19 has persisted for nearly a month. Strategic takeaway: do not chase tech stocks on momentum signals.
2. **Valuation factors (EP/FCF) are significantly negative**. Low-valuation stocks relativeled outperformed. But ic_mean is a 60-day rolling average; it cannot infer tomorrow's or next week's direction.
3. **Volatility anomaly reversed**. Typically "low vol outperforms high vol," but in this evaluation period high vol led — reflecting a special market environment (e.g., risk-on rebound).
4. **BP and SIZE have no explanatory power in this window**.

## Conclusions That Cannot Be Drawn

- ❌ One cannot infer next-day market direction from IC
- ❌ One cannot claim "all lagging stocks are buyable" from negative MOM
- ❌ One cannot confirm "value rotation has begun" from negative EP/FCF
- ❌ The count of negative sector values ≠ count of new reversals this period — most are continuation flips from ic_history's positive baseline
- ❌ p < 0.05 does not mean a strategy is profitable (no transaction costs deducted, no portfolio backtest performed)
- ❌ ICIR is not an annualized Sharpe ratio

## Statistical and Data Limitations

- Significance tests are ordinary t-tests, **not corrected for Newey-West or overlapping-sample autocorrelation**; p-values may be artificially low
- ic_mean is a multi-cross-section average rank correlation, **not a single-day IC**. The most recent 21 trading days cannot be fully evaluated for MOM due to the 273-day lag window
- ICIR = ic_mean / ic_std, **not a strategy Sharpe or annualized return**
- Sector momentum Q1-Q5 direction follows actual code (Q1 = lowest factor-value group); long-short returns are not net of transaction costs
- `ic_history.json` contains many duplicate-date entries (multiple rows per run day), which may distort baseline z-scores
