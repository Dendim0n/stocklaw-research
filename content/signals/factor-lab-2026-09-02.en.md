---
title: "Factor Lab Daily Brief 2026-09-02"
date: 2026-09-02
description: "US close Tue (09-01) incorporated: momentum-reversal persists and deepens in Tech — momentum IC -0.209, ICIR -1.70, only 2.6% positive cross-sections, long-short spread +6.48% monotonic; IT sector momentum IC fell further to -0.462 (long-short +18.89%), Financials (IC -0.284) and Industrials (IC -0.237) keep weakening, Real Estate remains the only positive-momentum sector (IC +0.226); volatility factor IC +0.023 still insignificant (p=0.462), value factors stay broken. Anomaly detection: 5 sectors triggered momentum sign-flip alarms (positive-to-negative) — Consumer Discretionary/Staples/Financials/Industrials/IT all beyond 2-3σ, Real Estate +3σ high, Utilities p-value lost significance."
---
## Full-Factor IC Test (21-day holding)

| Factor | IC Mean | ICIR | t-stat | p-value | % Positive IC | L/S Return%(Q1-Q5) |
|--------|---------|------|--------|---------|---------------|---------------------|
| EP | -0.048 | -0.52 | -3.99 | 0.000 | 28.3% | +2.98% |
| BP | +0.003 | +0.05 | +0.35 | 0.728 | 48.3% | +1.13% |
| FCF Yield | -0.035 | -0.54 | -4.14 | 0.000 | 25.0% | +2.48% |
| ROE | -0.025 | -0.68 | -5.26 | 0.000 | 26.7% | +0.76% |
| **Mom** | **-0.209** | **-1.70** | **-10.49** | **0.000** | **2.6%** | **+6.48%** |
| Vol | +0.023 | +0.12 | +0.74 | 0.462 | 56.4% | -0.87% |
| Size | -0.049 | -0.63 | -3.89 | 0.000 | 28.2% | +3.40% |

**Key observations:**

- **Momentum reversal persists and deepens in Tech (key)**: Momentum IC -0.209, ICIR -1.70, t-stat -10.49, only 2.6% of 39 cross-sections positive. Low-momentum quintile (Q1) averaged +6.67%, high-momentum (Q5) just +0.19%, long-short spread +6.48% monotonic. Reversal regime intact after incorporating the Tue (09-01) US close.
- **IT sector momentum keeps falling (key)**: Sector IC -0.462, down from -0.442 yesterday; long-short spread +18.89% remains near cycle highs — the correction in previously strong tech names is still accelerating.
- **Financials and Industrials keep weakening**: Financials IC -0.284, only 2.6% positive cross-sections, t-stat -10.44, long-short +5.40% monotonic; Industrials IC -0.237, spread +8.27%.
- **Real Estate remains the only positive-momentum sector**: IC +0.226, ICIR +0.73, 74.1% positive — defensive/safe-haven tilt persists.
- **Value factors stay broken**: EP (ICIR -0.52), FCF Yield (ICIR -0.54), ROE (ICIR -0.68) all keep significant negative IC.
- **Volatility factor positive but insignificant**: Vol IC +0.023 (yesterday +0.017), p=0.462 — low-vol outperformance signal still missing.
- **Data note**: This update incorporates the US Tue (09-01) close — genuinely new data.

![Factor IC](/charts/factor-ic-2026-09-02.png)

## Sector Momentum Breakdown

| Sector | Stocks | IC Mean | ICIR | % Positive IC | L/S Return%(Q1-Q5) |
|--------|--------|---------|------|---------------|---------------------|
| **Information Technology** | 73 | **-0.462** | **-1.60** | **12.8%** | **+18.89%** |
| Financials | 76 | -0.284 | -1.69 | 2.6% | +5.40% |
| Industrials | 79 | -0.237 | -1.57 | 7.7% | +8.27% |
| Consumer Staples | 36 | -0.155 | -1.05 | 15.4% | +6.13% |
| Consumer Discretionary | 48 | -0.098 | -0.61 | 33.3% | +2.62% |
| Health Care | 59 | -0.078 | -0.34 | 41.0% | +1.65% |
| Real Estate | 31 | +0.226 | +0.73 | 74.1% | -4.39% |
| Utilities | 31 | -0.008 | -0.04 | 48.7% | -0.15% |

**Sector highlights:**

- **IT momentum is the most negative sector-wide (key)**: Sector IC -0.462, down from -0.442 yesterday; long-short spread +18.89% remains near cycle highs — the main driver of the market-wide reversal, with tech leaders still catching down.
- **Financials and Industrials keep weakening**: Financials IC -0.284, only 2.6% positive cross-sections, long-short +5.40% monotonic; Industrials IC -0.237, spread +8.27%.
- **Real Estate keeps the only positive momentum**: IC +0.226, ICIR +0.73, 74.1% positive cross-sections — defensive tilt intact.
- **Health Care at significance edge**: HC IC -0.078 (p 0.046); Utilities IC -0.008 (p 0.796) insignificant.

![Sector Momentum](/charts/sector-mom-2026-09-02.png)

## Anomaly Detection (🔴/⚠️)

**Multiple momentum anomalies triggered today — 5 sectors flipped sign (positive-to-negative), IT/Financials/Industrials beyond 3σ:**

| Sector | Latest IC | Historical Mean | z-score | Alert |
|--------|-----------|-----------------|---------|-------|
| Information Technology | -0.462 | +0.425±0.279 | -3.18 | 🔴 sign-flip + ⚠️ >3σ low |
| Financials | -0.284 | +0.250±0.167 | -3.19 | 🔴 sign-flip + ⚠️ >3σ low |
| Industrials | -0.237 | +0.212±0.150 | -2.99 | 🔴 sign-flip + ⚠️ >2σ low |
| Consumer Discretionary | -0.098 | +0.213±0.112 | -2.78 | 🔴 sign-flip + ⚠️ >2σ low |
| Consumer Staples | -0.155 | +0.165±0.122 | -2.61 | 🔴 sign-flip + ⚠️ >2σ low |
| Real Estate | +0.226 | +0.134±0.029 | +3.21 | ⚠️ >3σ high |
| Utilities | -0.008 | +0.173±0.075 | -2.41 | ⚠️ >2σ low + p 0.027→0.796 lost significance |

## Summary

After incorporating the US Tue (09-01) close, **momentum reversal persists and deepens in Tech**: momentum IC -0.209, IT sector IC -0.462 (down from -0.442 yesterday), Financials and Industrials keep weakening, Real Estate remains the only positive-momentum sector. The volatility factor is positive but insignificant, and value factors stay broken.

Risk signals to watch:
1. **Momentum reversal keeps deepening**: ICIR -1.70, t=-10.49, IT sector IC -0.462 near cycle highs; 5 sectors triggered momentum sign-flip alarms beyond 2-3σ — the correction in previously strong tech names has not stopped
2. **Reversal is statistically extreme**: several consecutive days of reversal, long-short spread +6.48% monotonic — more likely a genuine regime than a data artifact; chasing recently strong stocks near-term carries high risk
3. **Real Estate (IC +0.226) remains the only positive-momentum sector**: defensive style persists; watch rates and REIT fund flows
4. **Volatility factor positive but insignificant** (p=0.462): low-vol outperformance signal missing; breadth confirmation of any style shift still absent

Strategy takeaway: the momentum-reversal regime is unchanged with Tech deepening; chasing recently strong stocks remains risky. Value factors stay broken, and defensive (Real Estate) is relatively preferred. Maintain low-momentum exposure and wait for a stabilization signal before rotating back.
