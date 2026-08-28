---
title: "Factor Lab Daily Brief 2026-08-29"
date: 2026-08-29
description: |
  Friday routine update: as of 06:46 Beijing time (Thu 16:46 ET), incorporating the
  complete US Thursday (08-28) close — the fifth trading day this week with fresh data.
  Momentum reversal confirmed for a fifth consecutive day, with market-wide intensity
  stabilizing at high levels for a second straight day — momentum IC -0.204 (basically
  flat vs Thu -0.203), ICIR -1.62, IC positive rate holding at 2.6%, long-short spread
  +6.39% still monotonic. The five-day sequence (-0.192 → -0.199 → -0.205 → -0.203 →
  -0.204) shows the reversal neither deepening nor fading. IT sector momentum IC -0.434
  (widened from Thu -0.421) remains the most negative with a fresh record long-short
  spread of +17.89%; Financials (IC -0.270) keep weakening; Industrials (IC -0.228)
  edge up; Consumer Staples (IC -0.167) keep converging. Anomaly detection flags
  deviations in all 8 covered sectors, 6 of which flipped from positive to negative.
  The only exception remains Real Estate — momentum IC +0.234 (z +4.40), the only
  sector where momentum stays positive. Utilities flipped negative but lost significance
  entirely (p 0.496); Health Care stays insignificant (p 0.085). Sector coverage
  continues across 8 GICS industries.
---

## Full-Factor IC Test (21-Day Holding)

| Factor | IC Mean | ICIR | t-Stat | p-value | IC Positive % | Long-Short % (Q1-Q5) |
|--------|---------|------|--------|---------|---------------|----------------------|
| EP | -0.048 | -0.52 | -3.99 | 0.000 | 28.3% | +2.98% |
| BP | +0.003 | +0.05 | +0.35 | 0.728 | 48.3% | +1.13% |
| FCF Yield | -0.035 | -0.54 | -4.14 | 0.000 | 25.0% | +2.48% |
| ROE | -0.025 | -0.68 | -5.26 | 0.000 | 26.7% | +0.76% |
| **Mom** | **-0.204** | **-1.62** | **-10.01** | **0.000** | **2.6%** | **+6.39%** |
| Vol | +0.002 | +0.01 | +0.07 | 0.948 | 51.3% | -0.20% |
| Size | -0.046 | -0.57 | -3.52 | 0.001 | 30.8% | +3.17% |

**Key observations:**

- **Momentum reversal confirmed for a fifth consecutive trading day, with market-wide intensity stabilizing at high levels for a second straight day (fresh Thursday close data)**: momentum IC -0.204 (basically flat vs Thu -0.203), ICIR -1.62, t-stat -10.01, IC positive rate holding at 2.6% (still just one positive cross-section among 39). Low-momentum stocks (Q1) average +6.39%, high-momentum (Q5) roughly +0.10%, for a monotonic long-short spread of +6.39%. Across five days (-0.192 → -0.199 → -0.205 → -0.203 → -0.204) the reversal has entered a high-level plateau — neither deepening nor fading — a consolidation signal at elevated levels, not the end of the reversal.
- **Value and quality factors keep failing**: EP (ICIR -0.52), FCF Yield (ICIR -0.54) and ROE (ICIR -0.68) remain significantly negative; ROE long-short stays compressed at +0.76%, so cheap/high-ROE baskets still offer no protection in this reversal.
- **BP remains useless**: IC +0.003, p 0.728 — book value still has no discriminating power.
- **Volatility factor not significant**: Vol IC +0.002, p 0.948 — completely insignificant; the low-vol outperformance signal remains absent.
- **Size factor stays negative**: Size IC -0.046, ICIR -0.57 — small caps keep outperforming.

![Factor IC](/charts/factor-ic-2026-08-29.png)

## Sector Momentum Decomposition

| Sector | # Stocks | IC Mean | ICIR | IC Positive % | Long-Short % (Q1-Q5) |
|--------|----------|---------|------|---------------|----------------------|
| **Information Technology** | 73 | **-0.434** | **-1.41** | **15.4%** | **+17.89%** |
| Industrials | 79 | -0.228 | -1.51 | 7.7% | +7.90% |
| Consumer Staples | 36 | -0.167 | -1.10 | 15.4% | +6.25% |
| Financials | 76 | -0.270 | -1.54 | 2.6% | +5.19% |
| Consumer Discretionary | 48 | -0.104 | -0.63 | 33.3% | +2.62% |
| Health Care | 59 | -0.069 | -0.29 | 41.0% | +1.73% |
| Real Estate | 31 | +0.234 | +0.79 | 75.9% | -4.94% |
| Utilities | 31 | -0.021 | -0.11 | 43.6% | -0.07% |

**Sector takeaways:**

- **IT reversal strength sets another record**: IC -0.434 (widened from Thu -0.421) remains the most negative sector-wide; high-momentum (Q5) stocks average -5.96% and the long-short spread of +17.89% (vs +17.54% on Thu) is a fresh record — IT remains the dominant driver of the market-wide reversal, and its intensity is still expanding.
- **Financials keep weakening**: IC -0.270 (widened from Thu -0.261) with IC positive rate down to 2.6% (just one positive cross-section among 39) and monotonic long-short +5.19% (Q1 +8.11% → Q5 +2.92%) — the signal is stable and deepening, one of the few sectors still deteriorating this week.
- **Industrials edge up, Consumer Staples keep converging**: Industrials IC -0.228 (basically flat vs Thu -0.224), long-short +7.90% (vs +7.73%, a slight rebound); Consumer Staples IC -0.167 (converging from Thu -0.175), long-short +6.25% (vs +6.33%) — mid-pack reversal intensity is cooling with some divergence.
- **Real Estate remains the only sector where momentum stays positive**: IC +0.234, ICIR +0.79, 75.9% of periods positive; high-momentum (Q5) averages +3.19% and long-short is -4.94% — defensive/rate-sensitive positioning keeps it out of the crowding unwind.
- **Health Care stays insignificant**: IC -0.069 regressing toward zero, p 0.085 (Thu 0.112) — still no statistical discriminating power.
- **Coverage**: decomposition continues across 8 GICS industries (consistent with Thursday).

![Sector Momentum](/charts/sector-mom-2026-08-29.png)

## Anomaly Detection (Momentum · Sector IC)

With Thursday's close incorporated, momentum sector IC shows deviations in all 8 covered industries, 6 of which are significantly below their historical means and flipped from positive to negative:

| Sector | Current IC | Hist. Mean ± σ | z-score | Status |
|--------|-----------|----------------|---------|--------|
| **Information Technology** | -0.434 | +0.450±0.240 | -3.67 | 🔴 Flipped positive→negative, significantly low |
| **Financials** | -0.270 | +0.265±0.144 | -3.72 | 🔴 Flipped positive→negative, significantly low |
| **Industrials** | -0.228 | +0.225±0.132 | -3.42 | 🔴 Flipped positive→negative, significantly low |
| **Consumer Discretionary** | -0.104 | +0.222±0.099 | -3.28 | 🔴 Flipped positive→negative, significantly low |
| **Consumer Staples** | -0.167 | +0.175±0.110 | -3.10 | 🔴 Flipped positive→negative, significantly low |
| **Utilities** | -0.021 | +0.179±0.068 | -2.92 | 🔴 Flipped positive→negative, significance lost (p 0.012→0.496) |
| Real Estate | +0.234 | +0.131±0.023 | +4.40 | ⚠️ Significantly high (only sector still positive) |
| Health Care | -0.069 | — | — | ⚠️ Significance lost (p 0.043→0.085), insignificant |

**Interpretation:** Momentum IC flipped positive→negative in 6 of 8 covered sectors, with deviations generally beyond 3σ; Financials and IT widened further versus Thursday while Industrials, Consumer Staples and Consumer Discretionary converged or held flat at the margin. The reversal remains a systemic, market-wide style shift, but the magnitude keeps diverging: the leaders (IT, Financials) deepen while the middle and back of the pack (Industrials, Staples, Discretionary) start to stabilize. The structural picture is unchanged — **Real Estate is the only sector where momentum remains positive**, with deviation at +4.40σ (historical mean already positive +0.131, now +0.234) as defensive positioning outperforms in the style shift; Utilities flipped negative but lost significance entirely (p 0.012→0.496), so that signal is unreliable; Health Care regresses toward zero and stays insignificant (p 0.085), and its momentum was historically negative.

## Summary

- **Momentum reversal confirmed for a fifth consecutive day, with market-wide intensity stabilizing at high levels for a second straight day**: market-wide IC -0.204 (basically flat vs Thu -0.203), IC positive rate holding at 2.6%, monotonic long-short +6.39%; 6/8 sectors flipped positive→negative. The five-day sequence shows the reversal in a high-level plateau — neither deepening nor fading, though IT (+17.89%) and Financials (+5.19%) keep deteriorating.
- **Real Estate stands alone**: IC +0.234, z +4.40 — the only sector where momentum is still positive, a structural exception driven by defensive and rate-sensitive positioning.
- **Value and quality factors fail, BP has no power**; cheap/high-ROE baskets offer no protection in this reversal, with ROE long-short still compressed at a low level.
- **Health Care keeps exiting the reversal theme** (p 0.085, insignificant); Utilities flipped negative but lost significance (p 0.496) — mid/back-of-pack reversal signals carry less conviction.
- **Data note**: Friday routine update incorporating the complete US Thursday (08-28) close — the fifth trading day this week with fresh data; sector coverage continues across 8 GICS industries (consistent with Thursday's scope).
