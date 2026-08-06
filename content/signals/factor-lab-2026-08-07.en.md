---
title: "Factor Lab Daily Report 2026-08-07"
date: 2026-08-07
description: |
  Momentum factor remains dominant with IC=0.224, ICIR=2.70, 100% positive hit rate.
  Value factors (EP/FCF Yield) show significant negative IC, indicating growth-tilted market regime.
  Tech sector momentum IC reaches 0.524 with -28.5% long-short spread, most concentrated momentum effect.
---

## Factor IC Test

This round covers 503 S&P 500 constituents, 21-day holding period, 39 IC observations.

| Factor | IC Mean | ICIR | t-stat | p-value | Positive % | L/S Return |
|--------|---------|------|--------|---------|------------|------------|
| **Momentum (mom)** | **0.224** | **2.70** | 16.62 | 0.000 | 100.0% | -8.07% |
| Volatility (vol) | 0.132 | 1.05 | 6.48 | 0.000 | 79.5% | -7.61% |
| Size | 0.048 | 1.25 | 7.70 | 0.000 | 87.2% | -2.06% |
| Book-to-Price (bp) | 0.006 | 0.08 | 0.48 | 0.635 | 46.2% | +0.82% |
| ROE | -0.041 | -1.23 | -7.58 | 0.000 | 12.8% | +1.11% |
| FCF Yield | -0.059 | -1.43 | -8.79 | 0.000 | 7.7% | +3.04% |
| Earnings Yield (ep) | -0.062 | -0.74 | -4.57 | 0.000 | 17.9% | +3.87% |

**Key Findings:**

- **Momentum factor absolute dominance** — IC=0.224, ICIR=2.70, 100% positive across 39 observations. Q5 (strongest momentum) average return 7.95%, Q1 (weakest) -0.12%, long-short spread -8.07%. Momentum strategy performs exceptionally well in the current market environment
- **Value factors collectively failing** — EP (IC=-0.062) and FCF Yield (IC=-0.059) both show significant negative IC, meaning high-valuation stocks are outperforming low-valuation ones. Market style is clearly growth-tilted
- **Volatility factor positive but warrants caution** — vol IC=0.132, high-volatility stocks beating low-volatility, indicating elevated risk appetite
- **Size factor mildly positive** — size IC=0.048, large-caps slightly favored but effect is weak
- **BP factor completely ineffective** — IC=0.006, p=0.635, zero predictive power

![Factor IC](/charts/factor-ic-2026-08-07.png)

## Sector Momentum Decomposition

Momentum factor IC by GICS sector (21-day holding period):

| Sector | # Stocks | IC Mean | ICIR | Positive % | Q5 Return | L/S Return |
|--------|----------|---------|------|------------|-----------|------------|
| **Information Tech** | **73** | **0.524** | **2.58** | **100%** | **27.19%** | **-28.54%** |
| Financials | 76 | 0.309 | 2.63 | 100% | 7.80% | -7.19% |
| Industrials | 79 | 0.266 | 2.88 | 100% | 5.51% | -7.14% |
| Consumer Disc. | 48 | 0.252 | 2.11 | 100% | 2.15% | -6.21% |
| Consumer Staples | 36 | 0.209 | 1.34 | 87.2% | 0.02% | -4.67% |
| Utilities | 31 | 0.199 | 1.01 | 76.9% | -1.66% | -0.63% |
| Real Estate | 31 | 0.124 | 0.84 | 74.4% | 4.95% | -3.83% |
| **Health Care** | **59** | **-0.128** | **-1.21** | **15.4%** | **-2.66%** | **+7.51%** |

**Sector Highlights:**

- **Tech momentum extremely strong** — IC=0.524, ICIR=2.58, the most concentrated momentum effect across all sectors. Q5 (strongest momentum) average return 27.19%, long-short spread -28.54%. The "winner-takes-all" dynamic within tech is highly pronounced
- **Financials and Industrials follow** — IC at 0.309 and 0.266 respectively, 100% positive rate, momentum strategies highly effective in these sectors
- **Health Care is the only reversed sector** — IC=-0.128, momentum factor completely fails and inverts here. Low-momentum stocks outperform high-momentum, possibly reflecting sector rotation or defensive fund inflows
- **Utilities momentum weak** — IC=0.124, ICIR only 1.01, Q5 return negative, momentum effect negligible

![Sector Momentum](/charts/sector-mom-2026-08-07.png)

## Summary

The market is exhibiting a classic **momentum-driven regime**:

1. **Momentum factor fully dominant** — Market-wide IC=0.224, 100% positive hit rate. Tech sector IC reaches 0.524. Trend-following strategies are in their comfort zone
2. **Value factors continue to fail** — EP, FCF Yield, and BP all show no positive predictive power. Market style is clearly growth-tilted, capital willing to pay up for high valuations
3. **Elevated risk appetite** — Volatility factor positive (IC=0.132), high-vol assets outperforming low-vol, signaling risk-on mode
4. **Anomaly detection** — All factors within normal fluctuation range, no anomalies triggered

**Strategy Implications:** This is a momentum strategy's comfort zone, but beware of momentum reversal risk. The extreme tech momentum (Q5 return 27%) suggests crowding may be building. Health Care's negative signal is worth monitoring as a potential early sector rotation indicator.
