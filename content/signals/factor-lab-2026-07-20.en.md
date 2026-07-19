---
title: "Factor Lab Daily Brief 2026-07-20"
date: 2026-07-20
description: |
  Momentum factor dominates with IC +0.224 and ICIR +2.70. IT sector momentum spread hits -28.5%.
  Value factors are systematically failing — classic growth/momentum regime.
  Health Care is the sole momentum reversal sector (IC -0.128), signaling style rotation.
---

## I. Full Factor IC Test

Based on S&P 500 constituents, 21-day holding period, 39-week IC series.

| Factor | IC Mean | ICIR | IC>0 % | p-value | L/S Spread (Q1-Q5) | Signal |
|:---|---:|---:|---:|---:|---:|:---:|
| ep (Earnings Yield) | -0.062 | -0.74 | 17.9% | 0.000 | +3.87% | ⚠️ Significant Reversal |
| bp (Book-to-Price) | +0.006 | +0.08 | 46.2% | 0.635 | +0.82% | ❌ Ineffective |
| fcf_yield (FCF Yield) | -0.059 | -1.43 | 7.7% | 0.000 | +3.04% | ⚠️ Significant Reversal |
| roe (Return on Equity) | -0.041 | -1.23 | 12.8% | 0.000 | +1.11% | ⚠️ Significant Reversal |
| **mom (Momentum)** | **+0.224** | **+2.70** | **100.0%** | **0.000** | **-8.07%** | ✅ Monotonic |
| vol (Volatility) | +0.132 | +1.05 | 79.5% | 0.000 | -7.61% | ✅ Effective |
| size (Market Cap) | +0.048 | +1.25 | 87.2% | 0.000 | -2.06% | ✅ Effective |

## II. Key Findings

### Momentum Dominates

Momentum factor recorded an IC mean of +0.224 with ICIR +2.70 and a perfect 100% positive IC hit rate. Over the past 39 weeks, momentum has *never* posted a negative IC observation. The long-short spread of -8.07% is monotonic — Q1 weakest (-0.12%), Q5 strongest (+7.95%) — textbook factor performance.

### Value Factors Collapse

All three value factors (EP, FCF_Yield, ROE) show significantly negative ICs. FCF_Yield positive IC rate is just 7.7%, ROE at 12.8%, EP at 17.9% — this is not occasional underperformance but systematic failure. The market is in a classic **growth/momentum-led regime**: cheap gets cheaper, expensive gets more expensive.

### Volatility and Size Factors Stable

Low-vol strategies are failing (high-vol stocks outperform), with a -7.61% L/S spread. Large caps continue to outperform small caps (size IC +0.048), consistent with the classic large-cap growth leadership pattern in momentum bull markets.

![Factor IC](/charts/factor-ic-2026-07-20.png)

## III. Momentum by Sector

| Sector | IC Mean | ICIR | IC>0 % | L/S Spread | Signal |
|:---|---:|---:|---:|---:|:---:|
| Consumer Discretionary | +0.252 | +2.11 | 100.0% | -6.21% | ✅ Monotonic |
| Consumer Staples | +0.209 | +1.34 | 87.2% | -4.67% | ✅ |
| **Financials** | **+0.309** | **+2.63** | **100.0%** | **-7.19%** | ✅ |
| ⚠️ **Health Care** | **-0.128** | **-1.21** | **15.4%** | **+7.51%** | 🔄 Reversal |
| Industrials | +0.266 | +2.88 | 100.0% | -7.14% | ✅ Monotonic |
| 🔥 **Information Technology** | **+0.524** | **+2.58** | **100.0%** | **-28.54%** | ✅ Monotonic |
| Real Estate | +0.124 | +0.84 | 74.4% | -3.83% | ✅ |
| Utilities | +0.199 | +1.01 | 76.9% | -0.63% | ✅ |

### IT Sector: Extreme Momentum

IT sector momentum IC reaches +0.524 with a staggering -28.54% long-short spread. Q5 (strongest momentum) averaged +27.2% over 21 days, Q4 +15.9%, Q3 +13.6% — winner-takes-all. IT momentum is experiencing extreme positive clustering, making long IT winners the clearest alpha source available.

### Health Care: The Sole Reversal Signal

Health Care is the only sector where momentum fails, with IC -0.128 and only 15.4% positive IC rate. Q1 (weakest momentum) averaged +4.84% while Q5 returned -2.66%, producing a +7.51% reversal spread. This suggests significant style rotation underway — previously beaten-down names are bouncing hard while former leaders are under pressure.

### Financials and Industrials: Steady Contributors

Financials (IC +0.309) and Industrials (IC +0.266) show stable, well-behaved momentum effects with good monotonicity — the most attractive momentum exposures after IT.

![Sector Momentum](/charts/sector-mom-2026-07-20.png)

## IV. Anomaly Detection

✅ All factors within normal fluctuation range. No anomalies detected.

## V. Strategy Implications

1. **Overweight momentum in IT and Financials**: Both show 100% positive IC hit rates with large, monotonic spreads.
2. **Avoid value factors for now**: EP, FCF_Yield, and ROE are all systematically negative — value strategies are bleeding.
3. **Consider contrarian plays in Health Care**: Clear momentum reversal signal; beaten-down names offer bounce potential.
4. **Large-cap growth regime persists**: Size and vol factors both point to large-cap, high-vol growth dominance.
5. **Watch IT momentum crowding**: Q5 return of +27% is extreme — monitor for momentum crash risk.
