---
title: "Factor Lab Daily Brief 2026-08-28"
date: 2026-08-28
description: |
  Friday routine update: as of 06:46 Beijing time (Thu 16:46 ET), incorporating the
  complete US Thursday (08-27) close — the fourth trading day this week with fresh data.
  Momentum reversal confirmed for a fourth consecutive day, but market-wide intensity
  shows the first signs of stabilization: momentum IC -0.203 (basically flat vs Wed
  -0.205, marginally weaker), ICIR -1.61, IC positive rate recovering from 0.0% to 2.6%
  (one of 39 cross-sections now positive), long-short spread +6.38% still monotonic.
  IT sector momentum IC -0.421 (widened from Wed -0.409) remains the most negative with
  a fresh record long-short spread of +17.54%; Financials (IC -0.261) keep weakening,
  while Industrials (IC -0.224) and Consumer Staples (IC -0.175) ease at the margin.
  Anomaly detection flags deviations in all 8 covered sectors, 6 of which flipped from
  positive to negative. The only exception remains Real Estate — momentum IC +0.235
  (z +4.76), the only sector where momentum stays positive. Utilities flipped negative
  but lost significance entirely (p 0.369); Health Care stays insignificant (p 0.112).
  Sector coverage continues across 8 GICS industries.
---

## Full-Factor IC Test (21-Day Holding)

| Factor | IC Mean | ICIR | t-Stat | p-value | IC Positive % | Long-Short % (Q1-Q5) |
|--------|---------|------|--------|---------|---------------|----------------------|
| EP | -0.048 | -0.52 | -3.99 | 0.000 | 28.3% | +2.98% |
| BP | +0.003 | +0.05 | +0.35 | 0.728 | 48.3% | +1.13% |
| FCF Yield | -0.035 | -0.54 | -4.14 | 0.000 | 25.0% | +2.48% |
| ROE | -0.025 | -0.68 | -5.26 | 0.000 | 26.7% | +0.76% |
| **Mom** | **-0.203** | **-1.61** | **-9.95** | **0.000** | **2.6%** | **+6.38%** |
| Vol | -0.011 | -0.06 | -0.35 | 0.731 | 48.7% | +0.22% |
| Size | -0.047 | -0.59 | -3.62 | 0.001 | 28.2% | +3.11% |

**Key observations:**

- **Momentum reversal confirmed for a fourth consecutive trading day, with market-wide intensity stabilizing for the first time (fresh Thursday close data)**: momentum IC -0.203 (basically flat vs Wed -0.205, marginally weaker), ICIR -1.61, t-stat -9.95, and the IC positive rate recovered from 0.0% to 2.6% — the first positive cross-section among the 39 periods. Low-momentum stocks (Q1) average +6.38%, high-momentum (Q5) roughly +0.00% (turning from negative to flat), for a monotonic long-short spread of +6.38%. Across four days (-0.192 → -0.199 → -0.205 → -0.203) the reversal persists but is no longer deepening at the margin — a stabilization signal at elevated levels, not the end of the reversal.
- **Value and quality factors keep failing**: EP (ICIR -0.52), FCF Yield (ICIR -0.54) and ROE (ICIR -0.68) remain significantly negative; ROE long-short stays compressed at +0.76%, so cheap/high-ROE baskets still offer no protection in this reversal.
- **BP remains useless**: IC +0.003, p 0.728 — book value still has no discriminating power.
- **Volatility factor not significant**: Vol IC -0.011, p 0.731 — completely insignificant; the low-vol outperformance signal remains weak.
- **Size factor stays negative**: Size IC -0.047, ICIR -0.59 — small caps keep outperforming.

![Factor IC](/charts/factor-ic-2026-08-28.png)

## Sector Momentum Decomposition

| Sector | # Stocks | IC Mean | ICIR | IC Positive % | Long-Short % (Q1-Q5) |
|--------|----------|---------|------|---------------|----------------------|
| **Information Technology** | 73 | **-0.421** | **-1.34** | **15.4%** | **+17.54%** |
| Industrials | 79 | -0.224 | -1.50 | 7.7% | +7.73% |
| Consumer Staples | 36 | -0.175 | -1.10 | 15.4% | +6.33% |
| Financials | 76 | -0.261 | -1.43 | 5.1% | +5.08% |
| Consumer Discretionary | 48 | -0.103 | -0.63 | 33.3% | +2.47% |
| Health Care | 59 | -0.064 | -0.26 | 41.0% | +1.64% |
| Real Estate | 31 | +0.235 | +0.80 | 76.7% | -5.15% |
| Utilities | 31 | -0.029 | -0.15 | 41.0% | +0.05% |

**Sector takeaways:**

- **IT reversal strength sets another record**: IC -0.421 (widened from Wed -0.409) remains the most negative sector-wide; high-momentum (Q5) stocks average -6.27% and the long-short spread of +17.54% (vs +17.22% on Wed) is a fresh record — IT remains the dominant driver of the market-wide reversal, and its intensity is still expanding.
- **Financials keep weakening**: IC -0.261 (widened from Wed -0.246) with IC positive rate down to 5.1% and monotonic long-short +5.08% (Q1 +8.24% → Q5 +3.16%) — the signal is stable and deepening, one of the few sectors still deteriorating this week.
- **Industrials and Consumer Staples ease at the margin**: Industrials IC -0.224 (basically flat vs Wed -0.227), long-short +7.73% (vs +7.66%); Consumer Staples IC -0.175 (converging from Wed -0.186), long-short +6.33% (vs +6.39%) — the leading sectors show early signs of cooling.
- **Real Estate remains the only sector where momentum stays positive**: IC +0.235, ICIR +0.80, 76.7% of periods positive; high-momentum (Q5) averages +3.30% and long-short is -5.15% — defensive/rate-sensitive positioning keeps it out of the crowding unwind.
- **Health Care stays insignificant**: IC -0.064 regressing toward zero, p 0.112 (Wed 0.219) — still no statistical discriminating power, though the p-value edges back down.
- **Coverage**: decomposition continues across 8 GICS industries (consistent with Thursday).

![Sector Momentum](/charts/sector-mom-2026-08-28.png)

## Anomaly Detection (Momentum · Sector IC)

With Thursday's close incorporated, momentum sector IC shows deviations in all 8 covered industries, 6 of which are significantly below their historical means and flipped from positive to negative, with deviations generally still beyond 3σ:

| Sector | Current IC | Hist. Mean ± σ | z-score | Status |
|--------|-----------|----------------|---------|--------|
| **Information Technology** | -0.421 | +0.455±0.232 | -3.78 | 🔴 Flipped positive→negative, significantly low |
| **Financials** | -0.261 | +0.268±0.139 | -3.82 | 🔴 Flipped positive→negative, significantly low |
| **Industrials** | -0.224 | +0.228±0.128 | -3.53 | 🔴 Flipped positive→negative, significantly low |
| **Consumer Discretionary** | -0.103 | +0.224±0.096 | -3.39 | 🔴 Flipped positive→negative, significantly low |
| **Consumer Staples** | -0.175 | +0.177±0.107 | -3.28 | 🔴 Flipped positive→negative, significantly low |
| **Utilities** | -0.029 | +0.180±0.067 | -3.13 | 🔴 Flipped positive→negative, significance lost (p 0.010→0.369) |
| Real Estate | +0.235 | +0.131±0.022 | +4.76 | ⚠️ Significantly high (only sector still positive) |
| Health Care | -0.064 | -0.120±0.027 | +2.02 | ⚠️ High (regressing to zero), significance lost (p 0.042→0.112) |

**Interpretation:** Momentum IC flipped positive→negative in 6 of 8 covered sectors, with deviations generally beyond 3σ; Financials and IT widened further versus Wednesday while Industrials, Consumer Staples and Consumer Discretionary converged at the margin. The reversal remains a systemic, market-wide style shift, but the magnitude is diverging: the leaders (IT, Financials) deepen while the middle and back of the pack (Industrials, Staples, Discretionary) start to stabilize. The structural picture is unchanged — **Real Estate is the only sector where momentum remains positive**, with deviation at +4.76σ (historical mean already positive +0.131, now +0.235) as defensive positioning outperforms in the style shift; Utilities flipped negative but lost significance entirely (p 0.010→0.369), so that signal is unreliable; Health Care regresses toward zero and stays insignificant (p 0.112), and its momentum was historically negative.

## Summary

- **Momentum reversal confirmed for a fourth consecutive day, with market-wide intensity stabilizing for the first time**: market-wide IC -0.203 (marginally weaker than Wed -0.205), IC positive rate recovering from 0.0% to 2.6%, monotonic long-short +6.38%; 6/8 sectors flipped positive→negative. Thursday's close is the first to show the reversal consolidating at high levels — intensity no longer deepening, though IT (+17.54%) and Financials (+5.08%) keep deteriorating.
- **Real Estate stands alone**: IC +0.235, z +4.76 — the only sector where momentum is still positive, a structural exception driven by defensive and rate-sensitive positioning.
- **Value and quality factors fail, BP has no power**; cheap/high-ROE baskets offer no protection in this reversal, with ROE long-short still compressed at a low level.
- **Health Care keeps exiting the reversal theme** (p 0.112, insignificant); Utilities flipped negative but lost significance (p 0.369) — mid/back-of-pack reversal signals carry less conviction.
- **Data note**: Friday routine update incorporating the complete US Thursday (08-27) close — the fourth trading day this week with fresh data; sector coverage continues across 8 GICS industries (consistent with Thursday's scope).
