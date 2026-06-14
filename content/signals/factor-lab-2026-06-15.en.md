---
title: "Factor Lab Daily Brief 2026-06-15"
description: "Momentum factor leads (ICIR +2.70), EP/FCF reversal signals prominent, market sentiment shifts to fear zone"
date: 2026-06-15
---

## Factor Lab Daily Brief — 2026-06-15

### Full Factor IC Test

| Factor | IC Mean | ICIR | p-value | Long-Short Return | Signal |
|--------|---------|------|---------|-------------------|--------|
| **mom** (Momentum) | +0.2241 | **+2.70** ⭐ | 0.000 | -8.07% | ⭐ Monotonic |
| **vol** (Volatility) | +0.1320 | **+1.05** ⭐ | 0.000 | -7.61% | ⚠️ |
| **size** (Market Cap) | +0.0479 | **+1.25** ⭐ | 0.000 | -2.06% | ⚠️ |
| **ep** (Earnings Yield) | -0.0624 | **-0.74** ⭐ | 0.000 | +3.87% | ⭐ Reversal |
| **fcf_yield** (Free Cash Flow) | -0.0589 | **-1.43** ⭐ | 0.000 | +3.04% | ⭐ Reversal |
| **roe** (Return on Equity) | -0.0414 | **-1.23** ⭐ | 0.000 | +1.11% | ⭐ Reversal |
| **bp** (Book-to-Price) | +0.0056 | +0.08 | 0.635 | +0.82% | Ineffective |

**Key Findings:**
- **Momentum factor dominant**: ICIR +2.70, IC mean +0.224, with monotonic L/S return -8.07% — trend following remains effective
- **Value factors reversing**: EP (ICIR -0.74), FCF (ICIR -1.43), ROE (ICIR -1.23) all show negative IC with positive L/S returns — market penalizing high valuations, rewarding low valuations
- **bp factor ineffective**: p-value 0.635, statistically insignificant

### Factor IC Test

![Factor IC](/charts/factor-ic-2026-06-15.png)

### Sector Momentum Decomposition

| Sector | IC Mean | ICIR | L/S Return | Signal |
|--------|---------|------|------------|--------|
| Information Technology | +0.524 | **+2.58** ⭐ | -28.54% | ⭐ Monotonic |
| Industrials | +0.266 | **+2.88** ⭐ | -7.14% | ⭐ Monotonic |
| Consumer Discretionary | +0.252 | **+2.11** ⭐ | -6.21% | ⭐ Monotonic |
| Financials | +0.309 | **+2.63** ⭐ | -7.19% | ⚠️ |
| Health Care | -0.128 | **-1.21** ⭐ | +7.51% | ⭐ Reversal |
| Consumer Staples | +0.209 | +1.34 | -4.67% | ⚠️ |
| Real Estate | +0.124 | +0.84 | -3.83% | ⚠️ |
| Utilities | +0.199 | +1.01 | -0.63% | ⚠️ |

**Sector Insights:**
- **Tech momentum overwhelming**: IC mean +0.524, ICIR +2.58, monotonic L/S -28.54% — extremely strong trend
- **Healthcare reversal signal**: Negative IC (-0.128) with positive L/S — defensive sector seeing capital inflow
- **Industrials steady trend**: Highest ICIR at +2.88, but non-monotonic L/S — monitor sustainability

![Sector Momentum](/charts/sector-mom-2026-06-15.png)

### Anomaly Detection

✅ All factors within normal fluctuation range, no anomaly signals.

### Summary

Market is in a **trend-driven** phase: momentum factor remains effective while value factors show universal reversal. Tech sector momentum is extreme (ICIR +2.58), but watch for crowding risk. Healthcare shows defensive reversal signals — potential early sign of style rotation. bp factor is statistically dead (p=0.635).
