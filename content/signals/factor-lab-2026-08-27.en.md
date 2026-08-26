---
title: "Factor Lab Daily Brief 2026-08-27"
date: 2026-08-27
description: |
  Thursday routine update: as of 06:48 Beijing time (Wed 16:48 ET), incorporating the
  complete US Wednesday (08-26) close — the third trading day this week with fresh data.
  Momentum reversal confirmed for a third consecutive day and still deepening: market-wide
  momentum IC -0.205 (further down from Tue -0.199), ICIR -1.64, IC positive rate down to
  0.0% (none of 39 cross-sections positive), long-short spread +6.49% and monotonic.
  IT sector momentum IC -0.409 (from Tue -0.385) remains the most negative with a fresh
  record long-short spread of +17.22%; Industrials (IC -0.227) and Financials (IC -0.246)
  keep weakening, while Consumer Staples long-short widened to +6.39%. Anomaly detection
  flags deviations in all 8 covered sectors, 6 of which flipped from positive to negative
  with deviations generally beyond 3.5σ. The only exception is Real Estate — momentum IC
  +0.231 notably high (z +4.86), the only sector where momentum stays positive. Health
  Care keeps losing significance (p 0.219). Sector coverage expanded to 8 GICS industries
  (Real Estate and Utilities newly added).
---

## Full-Factor IC Test (21-Day Holding)

| Factor | IC Mean | ICIR | t-Stat | p-value | IC Positive % | Long-Short % (Q1-Q5) |
|--------|---------|------|--------|---------|---------------|----------------------|
| EP | -0.048 | -0.52 | -3.99 | 0.000 | 28.3% | +2.98% |
| BP | +0.003 | +0.05 | +0.35 | 0.728 | 48.3% | +1.13% |
| FCF Yield | -0.035 | -0.54 | -4.14 | 0.000 | 25.0% | +2.48% |
| ROE | -0.025 | -0.68 | -5.26 | 0.000 | 26.7% | +0.76% |
| **Mom** | **-0.205** | **-1.64** | **-10.13** | **0.000** | **0.0%** | **+6.49%** |
| Vol | -0.043 | -0.22 | -1.37 | 0.180 | 43.6% | +1.24% |
| Size | -0.051 | -0.68 | -4.17 | 0.000 | 23.1% | +3.06% |

**Key observations:**

- **Momentum reversal confirmed for a third consecutive trading day and still deepening (fresh Wednesday close data)**: momentum IC -0.205 (further down from Tue -0.199), ICIR -1.64, t-stat -10.13, and the IC positive rate has dropped to 0.0% — not a single one of the 39 cross-sections is positive. Low-momentum stocks (Q1) average +6.12%, high-momentum (Q5) -0.36%, for a monotonic long-short spread of +6.49%. Three straight days (-0.192 → -0.199 → -0.205) show steady deepening — a systemic style shift, not one-day noise.
- **Value and quality factors keep failing**: EP (ICIR -0.52), FCF Yield (ICIR -0.54) and ROE (ICIR -0.68) remain significantly negative; ROE long-short has compressed to +0.76%, so cheap/high-ROE baskets still offer no protection in this reversal.
- **BP remains useless**: IC +0.003, p 0.728 — book value still has no discriminating power.
- **Volatility factor not significant**: Vol IC -0.043, p 0.180 — low-vol outperformance remains weak.
- **Size factor stays negative**: Size IC -0.051, ICIR -0.68 — small caps keep outperforming.

![Factor IC](/charts/factor-ic-2026-08-27.png)

## Sector Momentum Decomposition

| Sector | # Stocks | IC Mean | ICIR | IC Positive % | Long-Short % (Q1-Q5) |
|--------|----------|---------|------|---------------|----------------------|
| **Information Technology** | 73 | **-0.409** | **-1.20** | **17.9%** | **+17.22%** |
| Industrials | 79 | -0.227 | -1.52 | 7.7% | +7.66% |
| Consumer Staples | 36 | -0.186 | -1.07 | 15.4% | +6.39% |
| Financials | 76 | -0.246 | -1.23 | 7.7% | +4.98% |
| Consumer Discretionary | 48 | -0.106 | -0.64 | 33.3% | +2.41% |
| Health Care | 59 | -0.052 | -0.20 | 43.6% | +1.48% |
| Real Estate | 31 | +0.231 | +0.81 | 78.1% | -5.41% |
| Utilities | 31 | -0.041 | -0.20 | 38.5% | +0.24% |

**Sector takeaways:**

- **IT reversal strength hits another record**: IC -0.409 (wider than Tue -0.385) remains the most negative sector-wide; high-momentum (Q5) stocks average -7.28% and the long-short spread of +17.22% (vs +17.00% on Tue) is a fresh record — IT remains the dominant driver of the market-wide reversal.
- **Industrials and Financials keep weakening**: Industrials IC -0.227 (Tue -0.223), long-short +7.66%; Financials IC -0.246 (Tue -0.246), monotonic long-short +4.98% — reversal signal stable and deepening.
- **Consumer Staples deteriorating markedly**: IC -0.186 (Tue -0.172) with long-short widening from +4.22% to +6.39% as high-momentum (Q5) returns turn negative (-1.26%) — now deep in reversal territory.
- **Real Estate is the only sector where momentum stays positive**: IC +0.231, ICIR +0.81, 78.1% of periods positive; high-momentum (Q5) averages +3.52% and long-short is -5.41% — defensive/rate-sensitive positioning keeps it out of the crowding unwind.
- **Health Care continues to exit the reversal theme**: IC -0.052 regressing toward zero, p 0.219 (persistently insignificant since Tue 0.509).
- **Coverage expanded**: today's decomposition covers 8 GICS industries, with Real Estate and Utilities newly added (Tue covered only 6).

![Sector Momentum](/charts/sector-mom-2026-08-27.png)

## Anomaly Detection (Momentum · Sector IC)

With Wednesday's close incorporated, momentum sector IC shows deviations in all 8 covered industries, 6 of which are significantly below their historical means and flipped from positive to negative:

| Sector | Current IC | Hist. Mean ± σ | z-score | Status |
|--------|-----------|----------------|---------|--------|
| **Information Technology** | -0.409 | +0.460±0.223 | -3.90 | 🔴 Flipped positive→negative, significantly low |
| **Industrials** | -0.227 | +0.230±0.124 | -3.69 | 🔴 Flipped positive→negative, significantly low |
| **Financials** | -0.246 | +0.271±0.133 | -3.88 | 🔴 Flipped positive→negative, significantly low |
| **Consumer Staples** | -0.186 | +0.179±0.104 | -3.51 | 🔴 Flipped positive→negative, significantly low |
| **Consumer Discretionary** | -0.106 | +0.226±0.093 | -3.55 | 🔴 Flipped positive→negative, significantly low |
| **Utilities** | -0.041 | +0.182±0.065 | -3.44 | 🔴 Flipped positive→negative, significance lost (p 0.009→0.220) |
| Real Estate | +0.231 | +0.130±0.021 | +4.86 | ⚠️ Significantly high (only sector still positive) |
| Health Care | -0.052 | -0.120±0.027 | +2.54 | ⚠️ High (regressing to zero), significance lost (p 0.041→0.219) |

**Interpretation:** Momentum IC flipped positive→negative in 6 of 8 covered sectors, with deviations generally beyond 3.5σ and IT widening further versus Tuesday. This is a systemic, market-wide style shift, not sector noise — the unwind of crowded high-momentum trades is still accelerating. Two structural changes emerge with the expanded sample: **Real Estate is the only sector where momentum remains positive**, with deviation reaching +4.86σ (historical mean already positive +0.130, now +0.231) as defensive positioning outperforms in the style shift; Utilities flipped negative but lost significance simultaneously (p 0.009→0.220), so that signal is less reliable. Health Care regresses toward zero and keeps losing significance (its momentum was historically negative).

## Summary

- **Momentum reversal confirmed for a third consecutive day and deepening**: market-wide IC -0.205, IC positive rate down to 0.0%, monotonic long-short +6.49%; 6/8 sectors flipped positive→negative, with IT (+17.22%), Industrials (+7.66%) and Consumer Staples (+6.39%) leading. Wednesday's close confirms the reversal remains the dominant theme and is still accelerating.
- **Real Estate stands alone**: IC +0.231, z +4.86 — the only sector where momentum is still positive, a structural exception driven by defensive and rate-sensitive positioning.
- **Value and quality factors fail, BP has no power**; cheap/high-ROE baskets offer no protection in this reversal, with ROE long-short compressed to a low level.
- **Health Care keeps exiting the reversal theme** (p 0.219, insignificant); reversal breadth is shrinking while intensity concentrates in the leading sectors.
- **Data note**: Thursday routine update incorporating the complete US Wednesday (08-26) close — the third trading day this week with fresh data; sector coverage expanded to 8 GICS industries (Real Estate and Utilities newly added), differing from Tuesday's 6-industry scope.
