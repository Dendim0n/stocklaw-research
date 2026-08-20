---
title: "Factor Lab Daily Brief 2026-08-21"
date: 2026-08-21
description: |
  Momentum factor keeps deteriorating: IC slides from -0.140 to -0.169, ICIR -1.34,
  positive IC ratio only 7.7%, low-momentum stocks broadly outperform with long-short
  spread widening to +5.39%; IT sector momentum IC drops from -0.246 to -0.304 with
  long-short spread of +12.06% hitting a stage high; volatility and size factors stay
  negative, defensive/mean-reversion style dominates, only Real Estate retains positive momentum.
---

## Full-Factor IC Test (21-Day Holding)

| Factor | IC Mean | ICIR | t-stat | p-value | IC Pos% | Long-Short%(Q1-Q5) |
|--------|---------|------|--------|---------|---------|---------------------|
| EP | -0.049 | -0.56 | -4.27 | 0.0001 | 28.3% | +3.00% |
| BP | +0.006 | +0.10 | +0.77 | 0.446 | 50.0% | -0.15% |
| FCF Yield | -0.036 | -0.57 | -4.35 | 0.0001 | 23.3% | +2.53% |
| ROE | -0.027 | -0.70 | -5.41 | 0.000 | 28.3% | +1.34% |
| **Mom** | **-0.169** | **-1.34** | **-8.26** | **0.000** | **7.7%** | **+5.39%** |
| Vol | -0.065 | -0.36 | -2.22 | 0.033 | 35.9% | +2.14% |
| Size | -0.044 | -0.56 | -3.47 | 0.001 | 25.6% | +2.71% |

**Key Observations:**

- **Momentum reversal deepens (key)**: Momentum IC slides further from -0.140 (08-20) to -0.169, ICIR worsens from -1.08 to -1.34, positive IC ratio drops from 12.8% to just 7.7% (only 3 of 39 cross-sections positive), t-stat -8.26 reaching extreme levels. Low-momentum (Q1) averages +5.08%, high-momentum (Q5) -0.31%, long-short spread widens to +5.39%. The selloff in previously strong stocks continues; "winners keep winning" keeps failing.
- **Value factors stay broken**: EP (ICIR -0.56), FCF Yield (ICIR -0.57), ROE (ICIR -0.70) all maintain significantly negative IC. Cheap/high-ROE stocks keep underperforming.
- **BP remains ineffective**: ICIR only 0.10, p-value 0.45; book value has no discriminating power.
- **Volatility & size both negative**: Vol IC -0.065 (hist mean +0.128, triggers sign-flip alert), Size IC -0.044 (hist mean +0.046, also flipped). Low-volatility and small-cap styles relatively favored; risk appetite stays defensive.
- **Data note**: Results now include the latest two US sessions (Aug 19 & Aug 20) closes (recomputed after morning cache sync), incorporating two fresh trading days versus the previous brief — the deepening momentum reversal is confirmed by actual tape, not a data artifact.

![Factor IC](/charts/factor-ic-2026-08-21.png)

## Sector Momentum Breakdown

| Sector | Stocks | IC Mean | ICIR | IC Pos% | Long-Short%(Q1-Q5) |
|--------|--------|---------|------|---------|---------------------|
| **Information Technology** | 73 | **-0.304** | **-0.79** | **25.6%** | **+12.06%** |
| Industrials | 79 | -0.199 | -1.26 | 12.8% | +6.64% |
| Financials | 76 | -0.182 | -0.77 | 15.4% | +3.77% |
| Consumer Staples | 36 | -0.181 | -1.02 | 15.4% | +5.25% |
| Consumer Discretionary | 48 | -0.100 | -0.64 | 30.8% | +2.20% |
| Utilities | 31 | -0.057 | -0.27 | 35.9% | +0.59% |
| Health Care | 59 | -0.024 | -0.09 | 51.3% | +1.39% |
| **Real Estate** | 36 | **+0.200** | **+0.72** | **75.0%** | **-4.81%** |

**Sector Highlights:**

- **IT momentum worsens again (key)**: Sector momentum IC falls from -0.246 to -0.304, the most negative across all sectors. Q1 (low-momentum) +5.98% vs Q5 (high-momentum) -6.08%, long-short spread +12.06% hits a stage high. The selloff in strong tech names keeps intensifying; "winners keep winning" is thoroughly broken.
- **Industrials & Financials reversal widens**: Industrials IC -0.199 (ICIR -1.26), Financials IC -0.182, both weaker than prior (Industrials -0.172, Financials -0.126) and statistically significant. Former momentum leaders keep pulling back.
- **Real Estate sole positive momentum**: IC +0.200, ICIR +0.72, IC positive 75% — remains the only sector with positive momentum, highlighting defensive/safe-haven attributes.
- **Health Care momentum keeps failing**: IC -0.024, p-value 0.58, no longer significant; IC positive ratio back to 51.3%, momentum has lost discriminating power in healthcare.

![Sector Momentum](/charts/sector-mom-2026-08-21.png)

## Summary

With Aug 19 & Aug 20 closes now included, the previously established **momentum reversal has deepened rather than repaired**: momentum IC slides from -0.140 to -0.169, IT sector IC from -0.246 to -0.304, positive IC ratio only 7.7%, while volatility and size factors stay negative — the market continues its defensive/mean-reversion regime.

Risk signals to watch:
1. Momentum (ICIR -1.34, t=-8.26) and IT sector (IC -0.304) are at extreme levels; anomaly detection shows multiple sectors beyond 2σ with persistent sign-flip alerts, reflecting a concentrated selloff in previously strong names
2. The reversal has deepened for two consecutive trading days with large magnitude and extreme statistical significance — this more likely reflects real tape than data issues; chasing recently strong names carries high risk near-term
3. Real Estate (IC +0.200) remains the only positive-momentum sector; defensive style may persist — watch rates and REIT fund flows
4. Value factors show no improvement; volatility/small-cap relatively favored; the style shift is unlikely to end anytime soon

Strategy takeaway: The momentum theme has deepened its reversal for two straight days; chasing recently strong names is risky near-term. Value remains broken; defensive (low-vol/Real Estate) styles are relatively favored. Recommend keeping low momentum exposure until the reversal shows signs of stabilization before re-engaging.
