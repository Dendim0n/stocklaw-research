---
title: "Factor Lab Daily Report 2026-08-24"
date: 2026-08-24
description: |
  Routine pre-market update (Beijing 06:45 = ET Sunday 18:45, before the US Monday
  session opens): no new close data yet, so every metric is identical to Friday 08-21
  close — momentum IC -0.180, ICIR -1.37, IC positive ratio 7.7%, long-short spread
  +5.77%; IT sector momentum IC -0.328 (L/S +13.08%) stays the most negative,
  Financials (IC -0.205) and Industrials (IC -0.206) keep weakening, Real Estate
  remains the only positive-momentum sector (IC +0.206). Anomaly detection flags
  momentum IC deviating significantly from historical means in most sectors, with
  multiple sectors flipping from positive to negative — the reversal regime is
  persisting rather than repairing.
---

## Full-Factor IC Test (21-day holding)

| Factor | IC Mean | ICIR | t-stat | p-value | IC Positive % | L/S Ret % (Q1-Q5) |
|--------|---------|------|--------|---------|---------------|--------------------|
| EP | -0.049 | -0.56 | -4.27 | 0.000 | 28.3% | +3.00% |
| BP | +0.006 | +0.10 | +0.77 | 0.446 | 50.0% | -0.15% |
| FCF Yield | -0.036 | -0.57 | -4.35 | 0.000 | 23.3% | +2.53% |
| ROE | -0.027 | -0.70 | -5.41 | 0.000 | 28.3% | +1.34% |
| **Mom** | **-0.180** | **-1.37** | **-8.46** | **0.000** | **7.7%** | **+5.77%** |
| Vol | -0.057 | -0.31 | -1.89 | 0.067 | 38.5% | +1.80% |
| Size | -0.047 | -0.59 | -3.64 | 0.001 | 25.6% | +2.78% |

**Key Observations:**

- **Momentum reversal picture holds (key point)**: Momentum IC -0.180, ICIR -1.37, t-stat -8.46, IC positive ratio only 7.7% (just 3 of 39 cross-sections positive). Low-momentum stocks (Q1) average +5.43% while high-momentum (Q5) sit at -0.33%; the long-short spread is +5.77%. This run still carries no new trading data, so the reversal carries through unchanged.
- **Value factors remain ineffective**: EP (ICIR -0.56), FCF Yield (ICIR -0.57) and ROE (ICIR -0.70) all maintain significantly negative IC; low-valuation/high-ROE stocks keep underperforming.
- **BP still useless**: ICIR only 0.10, p=0.45; book value provides no discriminating power.
- **Volatility factor non-significant**: Vol IC -0.057, p=0.067, statistically non-significant; low-volatility outperformance persists but with weak edge.
- **Size factor stays negative**: Size IC -0.047, ICIR -0.59; small-cap relative outperformance continues.
- **Data note**: This run executes before the US Monday session opens (Beijing 06:45 = ET Sunday 18:45), so there is no new close data. All metrics are identical to Friday 08-21 close — a routine pre-market update confirming the picture, not a data error.

![Factor IC](/charts/factor-ic-2026-08-24.png)

## Sector Momentum Breakdown

| Sector | Stocks | IC Mean | ICIR | IC Positive % | L/S Ret % (Q1-Q5) |
|--------|--------|---------|------|---------------|--------------------|
| **Information Technology** | 73 | **-0.328** | **-0.87** | **23.1%** | **+13.08%** |
| Industrials | 79 | -0.206 | -1.27 | 12.8% | +6.99% |
| Financials | 76 | -0.205 | -0.90 | 12.8% | +4.27% |
| Consumer Staples | 36 | -0.186 | -1.03 | 15.4% | +5.55% |
| Consumer Discretionary | 48 | -0.101 | -0.64 | 30.8% | +2.24% |
| Utilities | 31 | -0.053 | -0.25 | 35.9% | +0.46% |
| Health Care | 59 | -0.034 | -0.13 | 48.7% | +1.63% |
| **Real Estate** | 31 | **+0.206** | **+0.73** | **77.1%** | **-4.87%** |

**Sector Notes:**

- **IT shows the sharpest momentum reversal**: IC -0.328, the most negative of any sector; Q5 (high momentum) averages -6.19%, driving a +13.08% long-short spread — the main source of the market-wide reversal.
- **Industrials & Financials keep weakening**: IC around -0.205 each; Industrials L/S +6.99%, Financials +4.27%, a stable reversal signal.
- **Real Estate is the only positive-momentum sector**: IC +0.206, IC positive ratio 77.1%, opposite in direction to every other sector (L/S -4.87%, i.e. low-momentum group underperforms) — a structurally independent pocket.

![Sector Momentum](/charts/sector-mom-2026-08-24.png)

## Anomaly Detection (Momentum · Sector IC)

This run fires a dense set of alarms: momentum IC deviates significantly from historical means in most sectors, broadly flipping from positive to negative.

| Sector | Current IC | Hist Mean±σ | z | Status |
|--------|------------|-------------|---|--------|
| **Information Technology** | -0.328 | +0.490±0.164 | -5.00 | 🔴 flipped +→−, significantly low |
| **Financials** | -0.205 | +0.289±0.096 | -5.16 | 🔴 flipped +→−, significantly low |
| **Industrials** | -0.206 | +0.247±0.092 | -4.93 | 🔴 flipped +→−, significantly low |
| **Consumer Staples** | -0.186 | +0.192±0.079 | -4.77 | 🔴 flipped +→−, significantly low |
| **Consumer Discretionary** | -0.101 | +0.238±0.070 | -4.83 | 🔴 flipped +→−, significantly low |
| **Utilities** | -0.053 | +0.189±0.052 | -4.68 | 🔴 flipped +→−, significantly low |
| Real Estate | +0.206 | +0.128±0.016 | +4.98 | ⚠️ high (positive momentum strengthening) |
| Health Care | -0.034 | -0.123±0.022 | +4.04 | ⚠️ high, but significance gone (p 0.029→0.434) |

**Interpretation:** Momentum IC has flipped from positive to negative in 7 of 8 sectors, with deviations mostly beyond 4σ. This is not single-sector noise but a systematic, market-wide style shift — the unwinding of crowded momentum trades is still in progress. Real Estate's positive momentum and Health Care's loss of significance are structural exceptions. Since the data still corresponds to Friday's close, these alarms reflect the historical baseline; no fresh market confirmation yet.

## Summary

- **Momentum reversal is the most certain style signal right now**: market-wide IC -0.180, 7/8 sectors flipped negative, with IT (L/S +13.08%), Industrials (+6.99%) and Consumer Staples (+5.55%) leading in strength. Reversal, not trend, is the prevailing regime.
- **Value and quality factors remain ineffective; BP has no power** — low-valuation/high-ROE baskets offer little protection in this reversal.
- **Real Estate is the sole positive-momentum sector**, moving opposite to everything else — a candidate for style hedging.
- **Data note**: This is a routine pre-market run; metrics correspond to Friday 08-21 close with no new trading data. Genuinely new information arrives only after the US Monday session closes, in the next cycle.
