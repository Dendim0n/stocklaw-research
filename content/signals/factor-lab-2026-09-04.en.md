---
title: "Factor Lab Daily Brief 2026-09-04"
date: 2026-09-04
description: "US close Thu (09-03) incorporated: momentum-reversal persists for an 8th consecutive day with new lows on both fronts — momentum IC -0.221, ICIR -1.92, t-stat -11.84, only 2.6% positive cross-sections, long-short spread +6.75% monotonic; IT sector momentum IC deepened to -0.506 (long-short +20.38%), Financials (IC -0.298) and Industrials (IC -0.248) keep weakening, Real Estate remains the only significant positive-momentum sector (IC +0.209); volatility factor IC +0.030 still insignificant (p=0.325), value factors stay broken. Anomaly detection: same momentum sign-flip alarms as yesterday persist — IT/Financials beyond 3σ, Industrials/Consumer Discretionary/Staples beyond 2σ positive-to-negative, Real Estate +2σ high, Utilities p-value lost significance (0.416). No new alert types."
---
## Full-Factor IC Test (21-day holding)

| Factor | IC Mean | ICIR | t-stat | p-value | % Positive IC | L/S Return%(Q1-Q5) |
|--------|---------|------|--------|---------|---------------|---------------------|
| EP | -0.048 | -0.52 | -3.99 | 0.000 | 28.3% | +2.98% |
| BP | +0.003 | +0.05 | +0.35 | 0.728 | 48.3% | +1.13% |
| FCF Yield | -0.035 | -0.54 | -4.14 | 0.000 | 25.0% | +2.48% |
| ROE | -0.025 | -0.68 | -5.26 | 0.000 | 26.7% | +0.76% |
| **Mom** | **-0.221** | **-1.92** | **-11.84** | **0.000** | **2.6%** | **+6.75%** |
| Vol | +0.030 | +0.16 | +1.00 | 0.325 | 59.0% | -1.07% |
| Size | -0.060 | -0.80 | -4.91 | 0.000 | 23.1% | +3.82% |

**Key observations:**

- **Momentum reversal persists for an 8th consecutive day and hits new lows (key)**: Momentum IC -0.2213 (yesterday -0.2152, lower for the 14th consecutive historical record), ICIR -1.92, t-stat -11.84, only 2.6% of 39 cross-sections positive. Low-momentum quintile (Q1) averaged +6.75%, high-momentum (Q5) -0.00%, long-short spread +6.75% monotonic. Reversal regime intact after incorporating the Thu (09-03) US close.
- **IT sector momentum hits a new low (key)**: Sector IC -0.506, down from -0.484 yesterday; long-short spread +20.38% is a new cycle high — the correction in previously strong tech names is still accelerating with no stabilization in sight.
- **Financials and Industrials keep weakening**: Financials IC -0.298, only 2.6% positive cross-sections, long-short +5.62% monotonic; Industrials IC -0.248, spread +8.70%.
- **Real Estate remains the only significant positive-momentum sector**: IC +0.209, ICIR +0.67, 72.0% positive, p=0.003 — defensive/safe-haven tilt persists.
- **Value factors stay broken**: EP (ICIR -0.52), FCF Yield (ICIR -0.54), ROE (ICIR -0.68) all keep significant negative IC.
- **Volatility factor still insignificant**: Vol IC +0.030 (yesterday +0.026), p=0.325 — low-vol outperformance signal still missing.
- **Data note**: This update incorporates the US Thu (09-03) close — genuinely new data.

![Factor IC](/charts/factor-ic-2026-09-04.png)

## Sector Momentum Breakdown

| Sector | Stocks | IC Mean | ICIR | % Positive IC | L/S Return%(Q1-Q5) |
|--------|--------|---------|------|---------------|---------------------|
| **Information Technology** | 73 | **-0.506** | **-2.09** | **7.7%** | **+20.38%** |
| Financials | 76 | -0.298 | -1.85 | 2.6% | +5.62% |
| Industrials | 79 | -0.248 | -1.71 | 7.7% | +8.70% |
| Consumer Staples | 36 | -0.147 | -0.96 | 17.9% | +6.04% |
| Consumer Discretionary | 48 | -0.092 | -0.58 | 33.3% | +2.70% |
| Health Care | 59 | -0.081 | -0.36 | 41.0% | +1.44% |
| Utilities | 31 | -0.024 | -0.13 | 43.6% | +0.11% |
| Real Estate | 31 | +0.209 | +0.67 | 72.0% | -3.86% |

**Sector highlights:**

- **IT momentum is the most negative sector-wide and hits a new low (key)**: Sector IC -0.506, down from -0.484 yesterday; long-short spread +20.38% is a new cycle high — the main driver of the market-wide reversal, with tech leaders still catching down.
- **Financials and Industrials keep weakening**: Financials IC -0.298, only 2.6% positive cross-sections, long-short +5.62% monotonic; Industrials IC -0.248, spread +8.70%.
- **Real Estate keeps the only significant positive momentum**: IC +0.209, ICIR +0.67, 72.0% positive, p=0.003 — defensive tilt intact.
- **Utilities momentum keeps failing**: Utilities IC -0.024 (p 0.416) insignificant, further weakening from near zero yesterday.

![Sector Momentum](/charts/sector-mom-2026-09-04.png)

## Anomaly Detection (🔴/⚠️)

**Today's alerts mirror yesterday — all are continuation signals of the momentum-reversal regime (day 8), no new alert types:**

| Sector | Latest IC | Historical Mean | z-score | Alert |
|--------|-----------|-----------------|---------|-------|
| Information Technology | -0.506 | +0.415±0.293 | -3.15 | 🔴 sign-flip + ⚠️ >3σ low |
| Financials | -0.298 | +0.244±0.176 | -3.09 | 🔴 sign-flip + ⚠️ >3σ low |
| Industrials | -0.248 | +0.207±0.157 | -2.90 | 🔴 sign-flip + ⚠️ >2σ low |
| Consumer Discretionary | -0.092 | +0.209±0.116 | -2.61 | 🔴 sign-flip + ⚠️ >2σ low |
| Consumer Staples | -0.147 | +0.162±0.126 | -2.45 | 🔴 sign-flip + ⚠️ >2σ low |
| Utilities | -0.024 | +0.171±0.077 | -2.53 | ⚠️ >2σ low + p 0.035→0.416 lost significance |
| Real Estate | +0.209 | +0.135±0.030 | +2.47 | ⚠️ >2σ high |

Note: the alert baseline's historical mean covers the May–June positive-momentum era (+0.1 to +0.4); momentum turned negative in late August and has persisted for two weeks, so these "positive-to-negative" alerts are persistence markers of an existing regime, not new discontinuities today.

## Summary

After incorporating the US Thu (09-03) close, **momentum reversal persists for an 8th consecutive day with new lows in both market-wide IC and IT sector IC**: momentum IC -0.221, IT sector IC -0.506 (long-short +20.38%), Financials and Industrials keep weakening, Real Estate remains the only significant positive-momentum sector. The volatility factor is still insignificant and value factors stay broken.

Risk signals to watch:
1. **Momentum reversal keeps deepening to new lows**: ICIR -1.92, t=-11.84, IT sector IC -0.506 at a fresh low; 5 sectors keep momentum sign-flip alarms beyond 2-3σ — the correction in previously strong tech names has not stopped
2. **Reversal is statistically extreme**: several consecutive days of reversal, long-short spread +6.75% monotonic — more likely a genuine regime than a data artifact; chasing recently strong stocks near-term carries high risk
3. **Real Estate (IC +0.209) remains the only significant positive-momentum sector**: defensive style persists; watch rates and REIT fund flows
4. **Volatility factor still insignificant** (p=0.325): low-vol outperformance signal missing; breadth confirmation of any style shift still absent

Strategy takeaway: the momentum-reversal regime is unchanged with Tech deepening; chasing recently strong stocks remains risky. Value factors stay broken, and defensive (Real Estate) is relatively preferred. Maintain low-momentum exposure and wait for a stabilization signal before rotating back.
