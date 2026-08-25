---
title: "Factor Lab Daily Brief 2026-08-26"
date: 2026-08-26
description: |
  Wednesday routine update: as of 07:17 Beijing time (Tuesday 19:17 ET), full
  Tuesday (08-25) US close data has been incorporated — the second consecutive
  trading day of confirmation, with the momentum reversal still deepening.
  Market-wide momentum IC -0.199 (vs Monday -0.192), ICIR -1.63, IC positive
  rate only 2.6%, long-short spread +6.19% and monotonic; IT momentum IC -0.385
  (vs Monday -0.353) remains the most negative sector with long-short spread
  +17.00%, a new high; Industrials (IC -0.223) and Financials (IC -0.246)
  continue to weaken. Anomaly detection shows momentum IC flipped positive to
  negative in 5 of 6 sectors with deviations mostly beyond 3.5σ; Health Care
  significance disappeared (p 0.509). Today's sector breakdown covers only 6
  GICS sectors; Utilities and Real Estate are not in the sample.
---

## Full-Factor IC Test (21-day holding period)

| Factor | IC Mean | ICIR | t-stat | p-value | IC Positive % | Long-Short % (Q1-Q5) |
|--------|---------|------|--------|---------|---------------|-----------------------|
| EP | -0.051 | -0.56 | -4.27 | 0.000 | 28.3% | +3.22% |
| BP | -0.006 | -0.09 | -0.69 | 0.492 | 41.7% | +1.49% |
| FCF Yield | -0.041 | -0.63 | -4.86 | 0.000 | 18.3% | +2.61% |
| ROE | -0.019 | -0.55 | -4.23 | 0.000 | 28.3% | -0.12% |
| **Mom** | **-0.199** | **-1.63** | **-10.07** | **0.000** | **2.6%** | **+6.19%** |
| Vol | -0.055 | -0.29 | -1.76 | 0.086 | 43.6% | +1.62% |
| Size | -0.053 | -0.69 | -4.25 | 0.000 | 25.6% | +3.07% |

**Key observations:**

- **Momentum reversal confirms and deepens for a second straight trading day (Tuesday close data added):** momentum IC -0.199, ICIR -1.63, t-stat -10.07, IC positive rate compressed to just 2.6% (only 1 of 39 cross-sections positive). Low-momentum stocks (Q1) averaged +5.87% while high-momentum (Q5) fell to -0.32%; long-short spread +6.19% and monotonic. IC keeps weakening versus Monday (-0.192) — this is not a one-day event; Tuesday's close confirmed it again and the intensity is expanding.
- **Value factors remain ineffective; ROE long-short turned negative:** EP (ICIR -0.56) and FCF Yield (ICIR -0.63) keep significantly negative IC; ROE (IC -0.019) long-short flipped from positive to negative (-0.12%). Low-valuation / high-ROE baskets still offer no protection in this reversal regime.
- **BP remains useless:** ICIR only -0.09, p-value 0.492, book value has no discriminating power.
- **Volatility factor insignificant:** Vol IC -0.055, p-value 0.086 — not statistically significant; low-volatility edge keeps fading.
- **Size factor stays negative:** Size IC -0.053, ICIR -0.69, small caps continue to relatively outperform.

![Factor IC](/charts/factor-ic-2026-08-26.png)

## Sector Momentum Breakdown

| Sector | Stocks | IC Mean | ICIR | IC Positive % | Long-Short % (Q1-Q5) |
|--------|--------|---------|------|---------------|-----------------------|
| **Information Technology** | 69 | **-0.385** | **-1.15** | **17.9%** | **+17.00%** |
| Industrials | 77 | -0.223 | -1.60 | 7.7% | +7.36% |
| Financials | 73 | -0.246 | -1.23 | 7.7% | +4.93% |
| Consumer Staples | 33 | -0.172 | -0.82 | 15.4% | +4.22% |
| Consumer Discretionary | 47 | -0.106 | -0.63 | 33.3% | +2.41% |
| Health Care | 55 | -0.027 | -0.11 | 43.6% | +0.60% |

**Sector highlights:**

- **IT reversal strength hits a new high:** IC -0.385 remains the most negative sector (widening from Monday's -0.353); Q5 (high momentum) averaged -7.15% and the long-short spread reached +17.00% (vs +14.20% Monday) — the absolute main driver of the market-wide reversal, with deviation still expanding.
- **Industrials and Financials keep weakening:** Industrials IC -0.223 (vs -0.217 Monday), long-short +7.36%; Financials IC -0.246 (vs -0.228), long-short +4.93% and monotonic. The reversal signal is stable and deepening.
- **Consumer Staples slightly converging:** IC -0.172 (vs -0.184 Monday), a mild repair but still deep in negative territory.
- **Health Care exits the reversal theme:** IC -0.027 near zero with p-value rising to 0.509 (not significant since Monday's 0.039) — no statistical discrimination left.
- **Coverage change:** today's sector breakdown includes only 6 GICS sectors; Utilities and Real Estate are not in the sample, so no comparable sector momentum data for them.

![Sector Momentum](/charts/sector-mom-2026-08-26.png)

## Anomaly Detection (Momentum Factor · Sector IC)

With Tuesday close data in, momentum sector IC flipped from positive to negative in 5 of the 6 covered sectors, all deviating beyond ~3.5σ from historical means:

| Sector | Current IC | Historical Mean±σ | z-score | Status |
|--------|------------|-------------------|---------|--------|
| **Information Technology** | -0.385 | +0.465±0.214 | -3.98 | 🔴 Flipped positive→negative, significantly low |
| **Industrials** | -0.223 | +0.233±0.119 | -3.83 | 🔴 Flipped positive→negative, significantly low |
| **Financials** | -0.246 | +0.274±0.128 | -4.08 | 🔴 Flipped positive→negative, significantly low |
| **Consumer Staples** | -0.172 | +0.181±0.101 | -3.50 | 🔴 Flipped positive→negative, significantly low |
| **Consumer Discretionary** | -0.106 | +0.227±0.090 | -3.71 | 🔴 Flipped positive→negative, significantly low |
| Health Care | -0.027 | -0.121±0.026 | +3.61 | ⚠️ High (regressing toward zero), significance lost (p 0.039→0.509) |

**Interpretation:** momentum IC has flipped positive to negative in 5 of 6 covered sectors, with deviations mostly beyond 3.5σ and IT's deviation expanding further from Monday. This reversal is not sector-specific noise but a systematic, market-wide style shift — the unwinding of crowded high-momentum trades is accelerating. Health Care's regression toward zero and loss of significance (historically negative momentum) is the only structural exception in this breakdown.

## Summary

- **Momentum reversal confirmed and deepening for a second straight trading day:** market-wide IC -0.199, IC positive rate only 2.6%, long-short +6.19% and monotonic; 5 of 6 sectors flipped positive to negative, led by IT (+17.00%), Industrials (+7.36%) and Financials (+4.93%). Tuesday's close reconfirmed: reversal, not trend, remains the theme, and it is accelerating.
- **Value and quality factors remain ineffective, BP has no discriminating power** — low-valuation / high-ROE baskets offer no protection in this regime; ROE long-short has turned negative.
- **Health Care exits the reversal theme** (significance gone): the reversal's breadth is narrowing while its intensity concentrates in the top sectors.
- **Data note:** this is the Wednesday routine update incorporating full Tuesday (08-25) US close data — the second consecutive trading day with new data. The sector breakdown covers 6 GICS sectors (Utilities, Real Estate not in sample), a slight coverage difference from Monday.
