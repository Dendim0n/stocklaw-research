---
title: "Factor Lab Daily Brief 2026-09-01"
date: 2026-09-01
description: |
  The US Monday (08-31) close is now incorporated: the momentum reversal pattern
  continues and deepens — momentum IC -0.205, ICIR -1.62, IC positive rate just 2.6%,
  long-short spread +6.36% and monotonic. IT sector momentum IC deepens further to
  -0.442 (long-short +18.25%); Financials (IC -0.277) and Industrials (IC -0.230) keep
  weakening, while Real Estate remains the only positive-momentum sector (IC +0.231,
  positive 75% of periods). Volatility IC turns positive (+0.017) but stays insignificant
  (p 0.587); value factors keep failing. Anomaly detection: 6 of the 8 covered sectors
  trigger momentum sign-flip alerts (positive to negative), with deviations beyond 2-3σ
  across IT/Financials/Industrials/Utilities/Staples/Discretionary.
---
## Full-Factor IC Test (21-Day Holding)

| Factor | IC Mean | ICIR | t-Stat | p-value | IC Positive % | Long-Short % (Q1-Q5) |
|--------|---------|------|--------|---------|---------------|----------------------|
| EP | -0.048 | -0.52 | -3.99 | 0.000 | 28.3% | +2.98% |
| BP | +0.003 | +0.05 | +0.35 | 0.728 | 48.3% | +1.13% |
| FCF Yield | -0.035 | -0.54 | -4.14 | 0.000 | 25.0% | +2.48% |
| ROE | -0.025 | -0.68 | -5.26 | 0.000 | 26.7% | +0.76% |
| **Mom** | **-0.205** | **-1.62** | **-10.02** | **0.000** | **2.6%** | **+6.36%** |
| Vol | +0.017 | +0.09 | +0.55 | 0.587 | 53.8% | -0.67% |
| Size | -0.045 | -0.56 | -3.45 | 0.001 | 30.8% | +3.23% |

**Key observations:**

- **Momentum reversal pattern continues and deepens (key)**: momentum IC -0.205, ICIR -1.62, t-stat -10.02, IC positive rate just 2.6% (only one positive cross-section in 39). Low-momentum stocks (Q1) average +6.59%, high-momentum (Q5) only +0.24%, for a monotonic long-short spread of +6.36%. The reversal established last week carries over unchanged after incorporating the US Monday (08-31) close.
- **IT sector momentum deepens further (key)**: sector IC -0.442, down from -0.434 on Friday, with high-momentum (Q5) stocks averaging -5.61% and a long-short spread of +18.25% — the markdown of previously strong tech stocks is still accelerating.
- **Financials and Industrials keep weakening**: Financials IC -0.277 with IC positive rate just 2.6% and t-stat -9.89; Industrials IC -0.230 with long-short +8.01% — momentum leaders in both heavy-weight sectors continue to retreat.
- **Real Estate remains the only positive-momentum sector**: IC +0.231, ICIR +0.76, positive 75% of periods (21 of 28 cross-sections) — defensive/risk-off positioning persists.
- **Value factors keep failing**: EP (ICIR -0.52), FCF Yield (ICIR -0.54) and ROE (ICIR -0.68) remain significantly negative.
- **Volatility turns positive but insignificant**: Vol IC +0.017 (vs +0.002 Friday), p 0.587 — the low-vol outperformance signal remains absent.
- **Data note**: This update incorporates the US Monday (08-31) close and is genuine new data; 3 names (e.g. AVB) were excluded due to delisting/no data.

![Factor IC](/charts/factor-ic-2026-09-01.png)

## Sector Momentum Decomposition

| Sector | # Stocks | IC Mean | ICIR | IC Positive % | Long-Short % (Q1-Q5) |
|--------|----------|---------|------|---------------|----------------------|
| **Information Technology** | 73 | **-0.442** | **-1.44** | **15.4%** | **+18.25%** |
| Financials | 76 | -0.277 | -1.60 | 2.6% | +5.27% |
| Industrials | 79 | -0.230 | -1.51 | 7.7% | +8.01% |
| Consumer Staples | 36 | -0.159 | -1.10 | 15.4% | +6.04% |
| Consumer Discretionary | 48 | -0.103 | -0.63 | 33.3% | +2.69% |
| Health Care | 59 | -0.075 | -0.32 | 41.0% | +1.74% |
| Real Estate | 31 | +0.231 | +0.76 | 75.0% | -4.64% |
| Utilities | 31 | -0.012 | -0.06 | 46.2% | -0.09% |

**Sector takeaways:**

- **IT momentum remains the most negative sector-wide (key)**: sector momentum IC -0.442, with high-momentum (Q5) stocks averaging -5.61% and a long-short spread of +18.25% still at a stage high — the dominant driver of the market-wide reversal.
- **Financials and Industrials keep weakening**: Financials IC -0.277 with IC positive rate just 2.6%; Industrials IC -0.230 with long-short +8.01%.
- **Real Estate remains the only positive-momentum sector**: IC +0.231, ICIR +0.76, 75% of periods positive — the sole sector with positive momentum, highlighting defensive/risk-off positioning.
- **Health Care momentum near break**: Health Care IC -0.075 (p 0.055) is at the significance edge; Utilities IC -0.012 (p 0.695) is insignificant.

![Sector Momentum](/charts/sector-mom-2026-09-01.png)

## Anomaly Detection (🔴/⚠️)

**6 of the 8 covered sectors trigger momentum sign-flip alerts (positive to negative), with deviations generally beyond 2-3σ:**

| Sector | Latest IC | Historical Mean | z-score | Alert |
|--------|-----------|-----------------|---------|-------|
| Information Technology | -0.442 | +0.430±0.272 | -3.21 | 🔴 sign flip + ⚠️ beyond 3σ |
| Financials | -0.277 | +0.253±0.163 | -3.25 | 🔴 sign flip + ⚠️ beyond 3σ |
| Industrials | -0.230 | +0.215±0.147 | -3.03 | 🔴 sign flip + ⚠️ beyond 3σ |
| Consumer Discretionary | -0.103 | +0.214±0.109 | -2.90 | 🔴 sign flip + ⚠️ beyond 2σ |
| Consumer Staples | -0.159 | +0.167±0.120 | -2.71 | 🔴 sign flip + ⚠️ beyond 2σ |
| Utilities | -0.012 | +0.174±0.074 | -2.52 | 🔴 sign flip + ⚠️ beyond 2σ |
| Real Estate | +0.231 | +0.133±0.028 | +3.52 | ⚠️ beyond 3σ (elevated) |
| Health Care | -0.075 | — | — | ⚠️ p-value 0.044→0.055 no longer significant |

## Summary

With the US Monday (08-31) close incorporated, **the momentum reversal pattern continues and deepens**: momentum IC -0.205, IT sector IC -0.442 (deeper than Friday), Financials and Industrials keep weakening, volatility turns positive but stays insignificant, and Real Estate remains the only positive-momentum sector. Value factors keep failing.

Risk signals to watch:
1. **Momentum reversal keeps deepening**: ICIR -1.62, t=-10.02, IT sector IC -0.442 at a stage high; anomaly detection keeps flagging multi-sector deviations beyond 2-3σ with sign-flip alerts — the concentrated markdown of previously strong tech stocks has not stopped
2. **The reversal is highly statistically significant**: multi-day reversal with a monotonic +6.36% long-short spread — more likely a genuine market regime than a data artifact; chasing recently strong stocks is high risk in the near term
3. **Real Estate (IC +0.231) remains the only positive-momentum sector**: defensive style persists; watch rates and REIT fund flows
4. **Volatility turns positive but insignificant** (p 0.587): the low-vol outperformance signal is absent — breadth of the style shift is still unconfirmed

Strategy takeaway: the momentum reversal pattern is unchanged with the IT leg deepening, so chasing recently strong stocks remains high risk. Value factors still fail and defensive (Real Estate) style is relatively favored. Maintain low-momentum exposure and wait for reversal-stabilization signals before repositioning.
