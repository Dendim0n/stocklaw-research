---
title: "Factor Lab Daily Brief 2026-10-06"
date: 2026-10-06
description: "S&P 500 seven-factor cross-sectional test results. Data through 2026-10-02. MOM slightly positive but insignificant; VOL remains strongly significant; EP/FCF Yield/ROE show persistent negative exposure; Health Care momentum flips from negative to positive."
---

# Factor Lab Daily Brief 2026-10-06

## Data Cutoff and Sample Specification

- **Price data as-of**: 2026-10-02 (latest date in `prices_cache.parquet`)
- **Fundamental data**: Daily TTM earnings panel (`combined_panel.pkl`), 502 stocks
- **Evaluation window**: 60 cross-sectional observations (fundamental factors) / 39 cross-sectional observations (price factors)
- **MOM holding period**: 21-day forward return (t-21 to t-273); the most recent 21 trading days cannot yet be fully evaluated
- **Run timestamp**: 2026-10-06 06:31 CST

> **Note**: Price cache has not updated since 10-02; both the 10-03 and 10-06 runs use identical price data. Fundamental factors (EP/BP/FCF Yield/ROE) are identical across runs because the TTM panel has not changed.

## Seven-Factor Summary

| Factor | IC (Mean) | ICIR | p-value | Previous IC (10-03) | Delta | Observations | Status |
|--------|-----------|------|---------|---------------------|-------|-------------|--------|
| MOM | +0.0158 | +0.05 | 0.739 | -0.0012 | +0.0170 | 39 | ⚪ Insignificant |
| EP | -0.0480 | -0.52 | 0.0002 | -0.0480 | 0.0000 | 60 | 🔴 Significant negative |
| BP | +0.0030 | +0.05 | 0.728 | +0.0030 | 0.0000 | 60 | ⚪ Ineffective |
| FCF Yield | -0.0352 | -0.54 | 0.0001 | -0.0352 | 0.0000 | 60 | 🔴 Significant negative |
| ROE | -0.0248 | -0.68 | 0.000002 | -0.0248 | 0.0000 | 60 | 🔴 Significant negative |
| VOL | +0.1204 | +1.08 | 0.0000 | +0.1191 | +0.0013 | 39 | ⭐ Strongly significant |
| SIZE | +0.0298 | +0.20 | 0.219 | +0.0211 | +0.0087 | 39 | ⚪ Insignificant |

**Key interpretation**:
- IC is the Spearman rank correlation between factor value and next-period return. Positive = higher factor value earns more; negative = lower factor value earns more.
- IC is the average rank correlation across multiple historical cross-sections, **not a daily IC, not a forward return forecast, not a probability of decline**.
- Standard t-tests do not correct for autocorrelation in overlapping returns; p-values are labeled "unadjusted for overlapping samples."
- ICIR = IC mean / IC std, reflecting factor stability, not strategy Sharpe or annualized return.
- MOM turned marginally positive (+0.0158) this period, but has been climbing gradually since 9/29 (-0.0632). The move is tiny and highly insignificant (p=0.74); no momentum factor reversal can be claimed.
- VOL remains the strongest signal (ICIR=1.08). Low-volatility stocks outperform high-volatility ones—the most stable signal this period.

## Sector Momentum Map (MOM by Sector)

| Sector | IC | ICIR | p-value | Previous IC (10-03) | Delta | Stocks | Status |
|--------|-----|------|---------|---------------------|-------|--------|--------|
| Consumer Discretionary | +0.080 | +0.31 | 0.064 | +0.068 | +0.012 | 48 | ⚪ Marginally insignificant |
| Consumer Staples | +0.109 | +0.37 | 0.028 | +0.096 | +0.013 | 36 | ✅ Significant |
| Financials | -0.038 | -0.12 | 0.465 | -0.050 | +0.012 | 76 | ⚪ Insignificant |
| Health Care | **+0.129** | +0.46 | 0.008 | +0.120 | +0.009 | 59 | ✅ Significant |
| Industrials | -0.006 | -0.02 | 0.895 | -0.026 | +0.020 | 79 | ⚪ Insignificant |
| Information Technology | -0.113 | -0.24 | 0.145 | -0.147 | +0.034 | 73 | ⚪ Insignificant |
| Utilities | -0.093 | -0.77 | 0.00003 | -0.099 | +0.006 | 31 | 🔴 Significant negative |

### Anomaly Alert Verification

The anomaly detection system flagged multiple alerts. Cross-referencing with `ic_history.json` confirms:

1. **🔴 Information Technology: IC flipped from positive to negative** — Already -0.147 (p=0.056) on 10-03, now -0.113 (p=0.145). The flip occurred in an earlier period; current state is continuation, not a today mutation.
2. **🔴 Utilities: IC flipped from positive to negative** — Already -0.099 (p=0.000009) on 10-03, now -0.093 (p=0.00003). Same continuation.
3. **🔴 Financials: IC flipped from positive to negative** — Already -0.050 (p=0.338) on 10-03, now -0.038 (p=0.465). Continued state.
4. **🔴 Health Care: IC flipped from negative to positive (+0.129)** — 10-03 was +0.120, now +0.129. z-score = +4.76, exceeding 2σ from historical mean (-0.104). **This is a genuine new anomaly** — Health Care sector momentum has flipped from persistent negative exposure to significantly positive. Low-momentum underperformance has reversed.
5. **⚠️ Consumer Discretionary / Industrials: p-values no longer significant** — Continuing the not-significant state, not a mutation.

## Implications for Strategy

1. **Volatility factor continues to dominate**: VOL ICIR=1.08 is the strongest of all seven factors. Low vol outperforms high vol, consistent with the recent high-volatility market environment. However, IC is not strategy return — backtest results without cost deduction cannot serve as executable strategy signals.

2. **Fundamental factors uniformly negative**: EP, FCF Yield, and ROE are all negative and significant. This means within the S&P 500, low-valuation/low-ROE groups outperformed high-valuation/high-ROE groups. **This does not mean "value rotation confirmed"** — in-sample findings cannot be extrapolated, and fundamental data is stale (through 10-02).

3. **Health Care momentum flip warrants attention**: Health Care is the only sector with a new positive-significant momentum IC (IC=+0.129, p=0.008). Historically, this sector's momentum was mostly negative (low-momentum outperformed); the current flip may reflect intra-sector relative strength shifts. Sample size is limited at n=59.

4. **MOM overall still unusable**: Despite marginal positive IC (+0.016), p=0.74 indicates no difference from zero. The slow climb from 9/29 to 10/6 (-0.063 → +0.016) is too small to signal momentum factor revival.

5. **SIZE slightly up but insignificant**: From +0.021 to +0.030, still cannot reject the null. In-sample SIZE only reflects relative size relationships; cannot extrapolate to broad-cap vs. small-cap dynamics.

## Conclusions That Cannot Be Drawn

- MOM marginally positive ≠ momentum factor reversal
- Fundamental factors negative ≠ value stocks will outperform
- Number of negative sectors ≠ today's new reversals
- High ICIR ≠ high Sharpe of an executable strategy
- Negative SIZE/FCF Yield cannot be interpreted as confirmed style rotation

## Statistical and Data Limitations

- Price data cutoff at 2026-10-02; price movements from 10-02 to 10-06 are not included
- Fundamental factors are identical across run dates (TTM panel not updated)
- p-values unadjusted for autocorrelation in overlapping returns (21-day forward returns overlap)
- Quantile portfolio direction is Q1 (low factor) to Q5 (high factor), not cost-adjusted
- Sector coverage: 7 GICS一级 sectors; Real Estate has no independent classification in S&P 500 (absorbed into others)
