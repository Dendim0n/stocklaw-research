---
title: "Factor Lab Daily Brief 2026-09-03"
date: 2026-09-03
description: "US close Wed (09-02) incorporated: momentum-reversal persists for a 7th consecutive day and deepens in Tech — momentum IC -0.215, ICIR -1.79, t-stat -11.03, only 2.6% positive cross-sections, long-short spread +6.61% monotonic; IT sector momentum IC fell further to -0.484 (long-short +19.56%), Financials (IC -0.290) and Industrials (IC -0.242) keep weakening, Real Estate remains the only positive-momentum sector (IC +0.217); volatility factor IC +0.026 still insignificant (p=0.389), value factors stay broken. Anomaly detection: 5 sectors keep triggering momentum sign-flip alarms (positive-to-negative) — IT/Financials beyond 3σ, Consumer Discretionary/Staples/Industrials beyond 2σ, Real Estate +2σ high, Utilities p-value lost significance."
---
## Full-Factor IC Test (21-day holding)

| Factor | IC Mean | ICIR | t-stat | p-value | % Positive IC | L/S Return%(Q1-Q5) |
|--------|---------|------|--------|---------|---------------|---------------------|
| EP | -0.048 | -0.52 | -3.99 | 0.000 | 28.3% | +2.98% |
| BP | +0.003 | +0.05 | +0.35 | 0.728 | 48.3% | +1.13% |
| FCF Yield | -0.035 | -0.54 | -4.14 | 0.000 | 25.0% | +2.48% |
| ROE | -0.025 | -0.68 | -5.26 | 0.000 | 26.7% | +0.76% |
| **Mom** | **-0.215** | **-1.79** | **-11.03** | **0.000** | **2.6%** | **+6.61%** |
| Vol | +0.026 | +0.14 | +0.87 | 0.389 | 56.4% | -0.98% |
| Size | -0.054 | -0.71 | -4.37 | 0.000 | 25.6% | +3.60% |

**Key observations:**

- **Momentum reversal persists for a 7th consecutive day and deepens in Tech (key)**: Momentum IC -0.215, ICIR -1.79, t-stat -11.03, only 2.6% of 39 cross-sections positive. Low-momentum quintile (Q1) averaged +6.68%, high-momentum (Q5) just +0.07%, long-short spread +6.61% monotonic. Reversal regime intact after incorporating the Wed (09-02) US close.
- **IT sector momentum keeps falling (key)**: Sector IC -0.484, down from -0.462 yesterday; long-short spread +19.56% remains near cycle highs — the correction in previously strong tech names is still accelerating.
- **Financials and Industrials keep weakening**: Financials IC -0.290, only 2.6% positive cross-sections, long-short +5.47% monotonic; Industrials IC -0.242, spread +8.48%.
- **Real Estate remains the only positive-momentum sector**: IC +0.217, ICIR +0.70, 73.1% positive — defensive/safe-haven tilt persists.
- **Value factors stay broken**: EP (ICIR -0.52), FCF Yield (ICIR -0.54), ROE (ICIR -0.68) all keep significant negative IC.
- **Volatility factor positive but insignificant**: Vol IC +0.026 (yesterday +0.023), p=0.389 — low-vol outperformance signal still missing.
- **Data note**: This update incorporates the US Wed (09-02) close — genuinely new data.

![Factor IC](/charts/factor-ic-2026-09-03.png)

## Sector Momentum Breakdown

| Sector | Stocks | IC Mean | ICIR | % Positive IC | L/S Return%(Q1-Q5) |
|--------|--------|---------|------|---------------|---------------------|
| **Information Technology** | 73 | **-0.484** | **-1.80** | **10.3%** | **+19.56%** |
| Financials | 76 | -0.290 | -1.76 | 2.6% | +5.47% |
| Industrials | 79 | -0.242 | -1.62 | 7.7% | +8.48% |
| Consumer Staples | 36 | -0.152 | -1.03 | 15.4% | +6.10% |
| Consumer Discretionary | 48 | -0.095 | -0.60 | 33.3% | +2.71% |
| Health Care | 59 | -0.078 | -0.34 | 41.0% | +1.56% |
| Real Estate | 31 | +0.217 | +0.70 | 73.1% | -4.06% |
| Utilities | 31 | -0.015 | -0.08 | 46.2% | -0.02% |

**Sector highlights:**

- **IT momentum is the most negative sector-wide (key)**: Sector IC -0.484, down from -0.462 yesterday; long-short spread +19.56% remains near cycle highs — the main driver of the market-wide reversal, with tech leaders still catching down.
- **Financials and Industrials keep weakening**: Financials IC -0.290, only 2.6% positive cross-sections, long-short +5.47% monotonic; Industrials IC -0.242, spread +8.48%.
- **Real Estate keeps the only positive momentum**: IC +0.217, ICIR +0.70, 73.1% positive cross-sections — defensive tilt intact.
- **Health Care at significance edge**: HC IC -0.078 (p 0.043); Utilities IC -0.015 (p 0.614) insignificant.

![Sector Momentum](/charts/sector-mom-2026-09-03.png)

## Anomaly Detection (🔴/⚠️)

**Momentum anomalies persist today — 5 sectors keep the sign-flip regime (positive-to-negative), IT/Financials beyond 3σ:**

| Sector | Latest IC | Historical Mean | z-score | Alert |
|--------|-----------|-----------------|---------|-------|
| Information Technology | -0.484 | +0.420±0.286 | -3.16 | 🔴 sign-flip + ⚠️ >3σ low |
| Financials | -0.290 | +0.247±0.172 | -3.13 | 🔴 sign-flip + ⚠️ >3σ low |
| Industrials | -0.242 | +0.210±0.154 | -2.94 | 🔴 sign-flip + ⚠️ >2σ low |
| Consumer Discretionary | -0.095 | +0.211±0.114 | -2.70 | 🔴 sign-flip + ⚠️ >2σ low |
| Consumer Staples | -0.152 | +0.164±0.124 | -2.54 | 🔴 sign-flip + ⚠️ >2σ low |
| Real Estate | +0.217 | +0.134±0.029 | +2.81 | ⚠️ >2σ high |
| Utilities | -0.015 | +0.172±0.076 | -2.46 | ⚠️ >2σ low + p 0.031→0.614 lost significance |

## Summary

After incorporating the US Wed (09-02) close, **momentum reversal persists for a 7th consecutive day and deepens in Tech**: momentum IC -0.215, IT sector IC -0.484 (down from -0.462 yesterday), Financials and Industrials keep weakening, Real Estate remains the only positive-momentum sector. The volatility factor is positive but insignificant, and value factors stay broken.

Risk signals to watch:
1. **Momentum reversal keeps deepening**: ICIR -1.79, t=-11.03, IT sector IC -0.484 near cycle highs; 5 sectors keep momentum sign-flip alarms beyond 2-3σ — the correction in previously strong tech names has not stopped
2. **Reversal is statistically extreme**: several consecutive days of reversal, long-short spread +6.61% monotonic — more likely a genuine regime than a data artifact; chasing recently strong stocks near-term carries high risk
3. **Real Estate (IC +0.217) remains the only positive-momentum sector**: defensive style persists; watch rates and REIT fund flows
4. **Volatility factor positive but insignificant** (p=0.389): low-vol outperformance signal missing; breadth confirmation of any style shift still absent

Strategy takeaway: the momentum-reversal regime is unchanged with Tech deepening; chasing recently strong stocks remains risky. Value factors stay broken, and defensive (Real Estate) is relatively preferred. Maintain low-momentum exposure and wait for a stabilization signal before rotating back.
