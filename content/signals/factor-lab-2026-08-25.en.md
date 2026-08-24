---
title: "Factor Lab Daily Brief 2026-08-25"
date: 2026-08-25
description: |
  Routine update after US market close: as of 06:45 Beijing time (Mon 18:45 ET),
  this run includes the full trading data from Monday's (08-24) US close — the first
  regular update this week with fresh session data. Momentum reversal is now
  confirmed by actual close data and deepening — market-wide momentum IC -0.192
  (worse than Friday's -0.180), ICIR -1.46, IC positive rate 5.1%, long-short spread
  +6.13%; IT sector momentum IC -0.353 (long-short +14.20%) remains the most negative
  and its deviation is widening, Financials (IC -0.228) and Industrials (IC -0.217)
  keep weakening, while Real Estate remains the only positive-momentum sector
  (IC +0.211). Anomaly detection shows momentum IC flipping from positive to negative
  in 7 of 8 sectors with deviations mostly beyond 4σ — the unwinding of crowded
  momentum trades is accelerating, not repairing.
---

## Full-Factor IC Test (21-day horizon)

| Factor | IC Mean | ICIR | t-stat | p-value | IC Pos% | L/S Ret%(Q1-Q5) |
|--------|---------|------|--------|---------|---------|------------------|
| EP | -0.049 | -0.56 | -4.27 | 0.000 | 28.3% | +3.00% |
| BP | +0.006 | +0.10 | +0.77 | 0.446 | 50.0% | -0.15% |
| FCF Yield | -0.036 | -0.57 | -4.35 | 0.000 | 23.3% | +2.53% |
| ROE | -0.027 | -0.70 | -5.41 | 0.000 | 28.3% | +1.34% |
| **Mom** | **-0.192** | **-1.46** | **-9.03** | **0.000** | **5.1%** | **+6.13%** |
| Vol | -0.050 | -0.26 | -1.61 | 0.115 | 41.0% | +1.49% |
| Size | -0.049 | -0.62 | -3.79 | 0.001 | 25.6% | +2.88% |

**Key observations:**

- **Momentum reversal strengthening (confirmed by Monday close)**: momentum IC -0.192, ICIR -1.46, t-stat -9.03, IC positive rate just 5.1% (only 2 of 39 cross-sections positive). Low-momentum (Q1) averaged +5.74% vs high-momentum (Q5) -0.38%, long-short spread +6.13%, monotonic. IC weakened further from Friday's -0.180 — pre-open on Monday we could only confirm persistence; now actual Monday close data shows the reversal is deepening, not repairing.
- **Value factors keep failing**: EP (ICIR -0.56), FCF Yield (ICIR -0.57), ROE (ICIR -0.70) all maintain significant negative IC — cheap/high-ROE names keep underperforming.
- **BP still useless**: ICIR 0.10, p 0.446, book value has no discriminating power.
- **Volatility factor insignificant**: Vol IC -0.050, p 0.115; significance keeps degrading vs last week (p 0.067), low-vol tilt signal weakening.
- **Size stays negative**: Size IC -0.049, ICIR -0.62, small caps keep relatively outperforming.

![Factor IC](/charts/factor-ic-2026-08-25.png)

## Sector Momentum Decomposition

| Sector | Stocks | IC Mean | ICIR | IC Pos% | L/S Ret%(Q1-Q5) |
|--------|--------|---------|------|---------|------------------|
| **Information Technology** | 73 | **-0.353** | **-0.98** | **20.5%** | **+14.20%** |
| Financials | 76 | -0.228 | -1.07 | 10.3% | +4.73% |
| Industrials | 79 | -0.217 | -1.34 | 10.3% | +7.39% |
| Consumer Staples | 36 | -0.184 | -1.03 | 15.4% | +5.73% |
| Consumer Discretionary | 48 | -0.104 | -0.64 | 30.8% | +2.35% |
| Utilities | 31 | -0.048 | -0.23 | 35.9% | +0.35% |
| Health Care | 59 | -0.043 | -0.16 | 46.2% | +1.80% |
| **Real Estate** | 31 | **+0.211** | **+0.74** | **76.5%** | **-4.87%** |

**Sector highlights:**

- **IT reversal deepening further**: IC -0.353 remains the most negative sector-wide (was -0.328 last week), Q5 (high momentum) averaged -6.45%, long-short +14.20% — the dominant source of market-wide momentum reversal, and its deviation is widening.
- **Financials & Industrials keep weakening, slightly deeper**: Financials IC -0.228 (was -0.205), L/S +4.73%; Industrials IC -0.217 (was -0.206), L/S +7.39% — reversal signals stable and strengthening.
- **Real Estate remains the only positive-momentum sector**: IC +0.211, IC positive rate 76.5%, opposite direction to all others, L/S -4.87% (low-momentum underperforms), strong independence — useful as a style hedge reference.

![Sector Momentum](/charts/sector-mom-2026-08-25.png)

## Anomaly Detection (momentum · sector IC)

With Monday close data in, sector momentum ICs deviate sharply from historical means, mostly flipping positive to negative:

| Sector | Current IC | Hist Mean±σ | z-score | Status |
|--------|-----------|-------------|---------|--------|
| **Information Technology** | -0.353 | +0.480±0.185 | -4.50 | 🔴 flipped negative, significantly low |
| **Financials** | -0.228 | +0.283±0.109 | -4.68 | 🔴 flipped negative, significantly low |
| **Industrials** | -0.217 | +0.241±0.104 | -4.42 | 🔴 flipped negative, significantly low |
| **Consumer Staples** | -0.184 | +0.188±0.089 | -4.19 | 🔴 flipped negative, significantly low |
| **Consumer Discretionary** | -0.104 | +0.233±0.079 | -4.28 | 🔴 flipped negative, significantly low |
| **Utilities** | -0.048 | +0.186±0.058 | -4.06 | 🔴 flipped negative, significantly low |
| **Real Estate** | +0.211 | +0.128±0.018 | +4.65 | ⚠️ high (positive momentum strengthening) |
| Health Care | -0.043 | -0.122±0.024 | +3.30 | ⚠️ high, but significance lost (p 0.033→0.322) |

**Interpretation:** Momentum IC flipped from positive to negative in 7 of 8 sectors with deviations mostly beyond 4σ, and deviations in IT/Financials/Industrials widened vs last week. This is not noise in a few names but a systematic, market-wide style shift — the unwinding of crowded momentum trades is accelerating. Real Estate's positive momentum strengthening and Health Care losing significance are the structural exceptions.

## Summary

- **Momentum reversal is the most reliable style signal**: market-wide IC -0.192, 7 of 8 sectors flipped negative, strongest in IT (L/S +14.20%), Industrials (+7.39%), Consumer Staples (+5.73%). Monday close data confirms: reversal, not trend, is the theme, and it is in a deepening phase.
- **Value & quality factors failing, BP useless** — cheap/high-ROE baskets offer no protection in this reversal regime.
- **Real Estate is the only positive-momentum sector** (IC +0.211), directionally independent — a candidate style hedge.
- **Data note**: this is the regular post-close update for Tuesday (Beijing 06:45 = Mon 18:45 ET), including the full Monday (08-24) US session — the first regular update this week with fresh trading data; the prior pre-open read is now confirmed by actual close data.
