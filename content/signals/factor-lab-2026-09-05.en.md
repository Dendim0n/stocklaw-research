---
title: "Factor Lab Daily Brief 2026-09-05"
date: 2026-09-05
description: "US close Fri (09-04) incorporated: momentum-reversal persists for a 9th consecutive day with IT sector IC at a new low — market-wide momentum IC -0.2225, ICIR -1.96, t-stat -12.07, only 2.6% positive cross-sections, long-short spread +6.76% monotonic; IT sector momentum IC deepened to -0.516 (long-short +20.71%), Financials (IC -0.300) and Industrials (IC -0.252) keep weakening, Real Estate remains the only significant positive-momentum sector (IC +0.197); volatility factor IC +0.034 still insignificant (p=0.266), value factors stay broken. Anomaly detection: same momentum sign-flip alarms as yesterday persist (9th day) — IT/Financials beyond 3σ, Industrials/Consumer Discretionary/Staples/Utilities beyond 2σ positive-to-negative, Real Estate +2σ high, Utilities p-value lost significance (0.236). No new alert types; Utilities is the only alert upgraded today."
---
## Full-Factor IC Test (21-day holding)

| Factor | IC Mean | ICIR | t-stat | p-value | % Positive IC | L/S Return%(Q1-Q5) |
|--------|---------|------|--------|---------|---------------|---------------------|
| EP | -0.048 | -0.52 | -3.99 | 0.000 | 28.3% | +2.98% |
| BP | +0.003 | +0.05 | +0.35 | 0.728 | 48.3% | +1.13% |
| FCF Yield | -0.035 | -0.54 | -4.14 | 0.000 | 25.0% | +2.48% |
| ROE | -0.025 | -0.68 | -5.26 | 0.000 | 26.7% | +0.76% |
| **Mom** | **-0.2225** | **-1.96** | **-12.07** | **0.000** | **2.6%** | **+6.76%** |
| Vol | +0.034 | +0.18 | +1.13 | 0.266 | 61.5% | -1.23% |
| Size | -0.066 | -0.90 | -5.55 | 0.000 | 20.5% | +3.99% |

**Key observations:**

- **Momentum reversal persists for a 9th consecutive day (key)**: Momentum IC -0.2225 (yesterday -0.2213), ICIR -1.96, t-stat -12.07, only 2.6% of 39 cross-sections positive. Low-momentum quintile (Q1) averaged +6.71%, high-momentum (Q5) -0.04%, long-short spread +6.76% monotonic. Reversal regime intact after incorporating the Fri (09-04) US close.
- **IT sector momentum hits a new low (key)**: Sector IC -0.516, down from -0.506 yesterday; long-short spread +20.71% is a fresh cycle high — the correction in previously strong tech names is still accelerating with no stabilization in sight.
- **Financials and Industrials keep weakening**: Financials IC -0.300, only 2.6% positive cross-sections, long-short +5.65% monotonic; Industrials IC -0.252, spread +8.84%.
- **Real Estate remains the only significant positive-momentum sector**: IC +0.197, ICIR +0.63, 70.8% positive, p=0.006 — defensive/safe-haven tilt persists.
- **Value factors stay broken**: EP (ICIR -0.52), FCF Yield (ICIR -0.54), ROE (ICIR -0.68) all keep significant negative IC.
- **Volatility factor still insignificant**: Vol IC +0.034 (yesterday +0.030), p=0.266 — low-vol outperformance signal still missing.
- **Data note**: This update incorporates the US Fri (09-04) close — genuinely new data.

![Factor IC](/charts/factor-ic-2026-09-05.png)

## Sector Momentum Breakdown

| Sector | Stocks | IC Mean | ICIR | % Positive IC | L/S Return%(Q1-Q5) |
|--------|--------|---------|------|---------------|---------------------|
| **Information Technology** | 73 | **-0.516** | **-2.26** | **5.1%** | **+20.71%** |
| Financials | 76 | -0.300 | -1.88 | 2.6% | +5.65% |
| Industrials | 79 | -0.252 | -1.78 | 7.7% | +8.84% |
| Consumer Staples | 36 | -0.139 | -0.88 | 20.5% | +5.71% |
| Consumer Discretionary | 48 | -0.087 | -0.55 | 33.3% | +2.65% |
| Health Care | 59 | -0.078 | -0.34 | 41.0% | +1.18% |
| Utilities | 31 | -0.035 | -0.20 | 41.0% | +0.27% |
| Real Estate | 31 | +0.197 | +0.63 | 70.8% | -3.54% |

**Sector notes:**

- **IT remains the most negative sector and hits a new low (key)**: Sector momentum IC -0.516, down from -0.506 yesterday; long-short spread +20.71% is a fresh cycle high — the main driver of market-wide momentum reversal, with the correction in previously strong tech names still ongoing.
- **Financials and Industrials keep weakening**: Financials IC -0.300, only 2.6% positive cross-sections, long-short +5.65% monotonic; Industrials IC -0.252, spread +8.84%.
- **Real Estate remains the only positive-momentum sector**: IC +0.197, ICIR +0.63, 70.8% positive, p=0.006 — defensive/safe-haven tilt persists.
- **Utilities momentum keeps failing**: Utilities IC -0.035 (p 0.236) insignificant; momentum signal remains absent.

![Sector Momentum](/charts/sector-mom-2026-09-05.png)

## Anomaly Detection (🔴/⚠️)

**Today's alarms mirror yesterday — persistence markers of the momentum-reversal regime (9th day), no new alert types:**

| Sector | Latest IC | Historical Mean | z-score | Alert |
|--------|-----------|-----------------|---------|-------|
| Information Technology | -0.516 | +0.410±0.300 | -3.09 | 🔴 sign-flip + ⚠️ >3σ low |
| Financials | -0.300 | +0.241±0.180 | -3.01 | 🔴 sign-flip + ⚠️ >3σ low |
| Industrials | -0.252 | +0.205±0.160 | -2.85 | 🔴 sign-flip + ⚠️ >2σ low |
| Consumer Discretionary | -0.087 | +0.207±0.117 | -2.50 | 🔴 sign-flip + ⚠️ >2σ low |
| Consumer Staples | -0.139 | +0.160±0.128 | -2.34 | 🔴 sign-flip + ⚠️ >2σ low |
| Utilities | -0.035 | +0.170±0.078 | -2.61 | 🔴 sign-flip + ⚠️ >2σ low + p 0.037→0.236 lost significance |
| Real Estate | +0.197 | +0.135±0.030 | +2.03 | ⚠️ >2σ high |

Note: the alert baseline's historical mean covers the May–June positive-momentum era (+0.1 to +0.4); momentum turned negative in late August and has persisted for over two weeks, so these "positive-to-negative" alerts are persistence markers of an existing regime, not new discontinuities today. Utilities newly triggers the sign-flip alert today (yesterday only >2σ low) — the only alert upgraded among the nine.

## Summary

After incorporating the US Fri (09-04) close, **momentum reversal persists for a 9th consecutive day with IT sector IC at a new low**: momentum IC -0.2225, IT sector IC -0.516 (long-short +20.71%), Financials and Industrials keep weakening, Real Estate remains the only significant positive-momentum sector. The volatility factor is still insignificant and value factors stay broken.

Risk signals to watch:
1. **Momentum reversal keeps deepening with Tech at a new low**: ICIR -1.96, t=-12.07, IT sector IC -0.516 at a fresh low, long-short spread +20.71% at a fresh cycle high; 6 sectors keep momentum sign-flip alarms beyond 2-3σ (Utilities newly upgraded) — the correction in previously strong tech names has not stopped
2. **Reversal is statistically extreme**: several consecutive days of reversal, long-short spread +6.76% monotonic — more likely a genuine regime than a data artifact; chasing recently strong stocks near-term carries high risk
3. **Real Estate (IC +0.197) remains the only significant positive-momentum sector**: defensive style persists; watch rates and REIT fund flows
4. **Volatility factor still insignificant** (p=0.266): low-vol outperformance signal missing; breadth confirmation of any style shift still absent

Strategy takeaway: the momentum-reversal regime is unchanged with Tech deepening; chasing recently strong stocks remains risky. Value factors stay broken, and defensive (Real Estate) is relatively preferred. Maintain low-momentum exposure and wait for a stabilization signal before rotating back.
