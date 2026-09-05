---
title: "Factor Lab Daily Brief 2026-09-06"
date: 2026-09-06
description: "Sunday run with no new US trading data (last trading day Fri 09-04) — all numbers identical to yesterday's brief: momentum-reversal persists for a 10th consecutive day, market-wide momentum IC -0.2225, ICIR -1.96, t-stat -12.07, only 2.6% positive cross-sections, long-short spread +6.76% monotonic; IT sector momentum IC -0.516 (long-short +20.71%) remains the most negative sector, Financials (IC -0.300) and Industrials (IC -0.252) keep weakening, Real Estate remains the only significant positive-momentum sector (IC +0.197); volatility factor IC +0.034 still insignificant (p=0.266), value factors stay broken. Anomaly detection: same momentum sign-flip alarms as yesterday persist (10th day), no new alert types; IT/Financials z-scores eased from >3σ to ~2.9 band, Real Estate no longer triggers, Utilities p-value lost significance (0.236) alert retained."
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

- **Sunday run with no new US trading data**: last trading day remains US Fri (09-04); all numbers are identical to yesterday's brief — a weekend snapshot, not new market action.
- **Momentum reversal persists for a 10th consecutive day (key)**: Momentum IC -0.2225, ICIR -1.96, t-stat -12.07, only 2.6% of 39 cross-sections positive. Low-momentum quintile (Q1) averaged +6.71%, high-momentum (Q5) -0.04%, long-short spread +6.76% monotonic.
- **IT remains the most negative sector (key)**: Sector IC -0.516, long-short spread +20.71% — the correction in previously strong tech names is intact.
- **Financials and Industrials keep weakening**: Financials IC -0.300, only 2.6% positive cross-sections, long-short +5.65% monotonic; Industrials IC -0.252, spread +8.84%.
- **Real Estate remains the only significant positive-momentum sector**: IC +0.197, ICIR +0.63, 70.8% positive, p=0.006 — defensive/safe-haven tilt persists, though it has drifted down from +0.235 to +0.197 over the past 10 days.
- **Value factors stay broken**: EP (ICIR -0.52), FCF Yield (ICIR -0.54), ROE (ICIR -0.68) all keep significant negative IC.
- **Volatility factor still insignificant**: Vol IC +0.034, p=0.266 — low-vol outperformance signal still missing.

![Factor IC](/charts/factor-ic-2026-09-06.png)

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

- **IT remains the most negative sector**: Sector momentum IC -0.516, long-short spread +20.71% — the main driver of market-wide momentum reversal, with the correction in previously strong tech names intact.
- **Financials and Industrials keep weakening**: Financials IC -0.300, only 2.6% positive cross-sections, long-short +5.65% monotonic; Industrials IC -0.252, spread +8.84%.
- **Real Estate remains the only positive-momentum sector**: IC +0.197, ICIR +0.63, 70.8% positive, p=0.006 — defensive/safe-haven tilt persists, though momentum has eased from +0.235 to +0.197 over the past 10 days.
- **Utilities momentum keeps failing**: Utilities IC -0.035 (p 0.236) insignificant; momentum signal remains absent.

![Sector Momentum](/charts/sector-mom-2026-09-06.png)

## Anomaly Detection (🔴/⚠️)

**Today's alarms mirror yesterday — persistence markers of the momentum-reversal regime (10th day), no new alert types:**

| Sector | Latest IC | Historical Mean | z-score | Alert |
|--------|-----------|-----------------|---------|-------|
| Information Technology | -0.516 | +0.400±0.313 | -2.93 | 🔴 sign-flip + ⚠️ >2σ low |
| Financials | -0.300 | +0.235±0.187 | -2.86 | 🔴 sign-flip + ⚠️ >2σ low |
| Industrials | -0.252 | +0.200±0.166 | -2.72 | 🔴 sign-flip + ⚠️ >2σ low |
| Utilities | -0.035 | +0.168±0.081 | -2.51 | 🔴 sign-flip + ⚠️ >2σ low + p 0.039→0.236 lost significance |
| Consumer Discretionary | -0.087 | +0.204±0.121 | -2.41 | 🔴 sign-flip + ⚠️ >2σ low |
| Consumer Staples | -0.139 | +0.157±0.131 | -2.26 | 🔴 sign-flip + ⚠️ >2σ low |

Note: the alert baseline's historical mean covers the May–June positive-momentum era (+0.1 to +0.4); momentum turned negative in late August and has persisted for over two weeks, so these "positive-to-negative" alerts are persistence markers of an existing regime, not new discontinuities today. vs yesterday: IT/Financials z-scores eased from >3σ to the ~2.9 band (baseline std widened with the new sample), Real Estate (+0.197) no longer triggers the high alarm, everything else unchanged.

## Summary

Sunday run with no new US trading data; **momentum reversal persists for a 10th consecutive day**: momentum IC -0.2225, IT sector IC -0.516 (long-short +20.71%), Financials and Industrials keep weakening, Real Estate remains the only significant positive-momentum sector (though its momentum is easing). The volatility factor is still insignificant and value factors stay broken. Weekend snapshot with zero new information — all yesterday's conclusions stand.

Risk signals to watch:
1. **Momentum reversal persists with no new information**: today's numbers are identical to yesterday (no US trading over the weekend); reversal regime at day 10 with ICIR -1.96, t=-12.07 still statistically extreme
2. **Tech correction not stabilized**: IT sector IC -0.516 near cycle low, long-short +20.71% — chasing recently strong tech names near-term remains risky
3. **Real Estate positive momentum easing**: IC drifted from +0.235 to +0.197; the only positive-momentum sector is losing defensive steam — if it falls back into the historical mean band it would trigger a new low alarm
4. **Volatility factor still insignificant** (p=0.266): low-vol outperformance signal missing; breadth confirmation of any style shift still absent

Strategy takeaway: the momentum-reversal regime is unchanged and the weekend brought no new data — yesterday's conclusions hold. Chasing recently strong stocks remains risky, value factors stay broken, and defensive (Real Estate) is relatively preferred but its momentum is fading and needs watching. Maintain low-momentum exposure and wait for a stabilization signal before rotating back.
