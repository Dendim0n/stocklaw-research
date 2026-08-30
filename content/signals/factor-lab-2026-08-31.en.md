---
title: "Factor Lab Daily Brief 2026-08-31"
date: 2026-08-31
description: |
  Monday-morning routine update; the US market has not opened yet — all indicators in
  this report are identical to the 08-30 report (which incorporated the US Friday 08-28
  close): momentum IC stays at -0.204, ICIR -1.62, IC positive rate just 2.6%,
  long-short spread +6.39% and monotonic. IT sector momentum IC -0.434 (long-short
  +17.89%) remains the most negative sector-wide and at a stage high; Financials (IC
  -0.270) and Industrials (IC -0.228) keep weakening, while Real Estate remains the only
  sector with positive momentum (IC +0.234). Volatility remains insignificant (p 0.948)
  and value factors keep failing. Anomaly detection flags deviations across all 8 covered
  sectors, 6 of which flipped from positive to negative with deviations generally beyond
  3σ. The momentum reversal pattern is unchanged since Friday's close.
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

- **Momentum reversal pattern holds (key)**: momentum IC -0.204, ICIR -1.62, t-stat -10.01, IC positive rate just 2.6% (only one positive cross-section in 39). Low-momentum stocks (Q1) average +6.39%, high-momentum (Q5) roughly +0.10%, for a monotonic long-short spread of +6.39%. The reversal established on Friday carries over unchanged with no new trading data in this run.
- **Value factors keep failing**: EP (ICIR -0.52), FCF Yield (ICIR -0.54) and ROE (ICIR -0.68) remain significantly negative — cheap/high-ROE stocks keep underperforming.
- **BP remains useless**: ICIR just 0.05, p 0.73 — book value still has no discriminating power.
- **Volatility not significant**: Vol IC +0.002, p 0.948 — completely insignificant; the low-vol outperformance signal remains absent.
- **Size factor stays negative**: Size IC -0.046, ICIR -0.57 — small caps keep outperforming.
- **Data note**: This is a Monday-morning routine update; the US market has not opened yet (still Sunday pre-open), so there is no new close data. All indicators are identical to the 08-30 report (which incorporated the US Friday 08-28 close) — a routine confirmation of the pattern, not a data error.

![Factor IC](/charts/factor-ic-2026-08-31.png)

## Sector Momentum Decomposition

| Sector | # Stocks | IC Mean | ICIR | IC Positive % | Long-Short % (Q1-Q5) |
|--------|----------|---------|------|---------------|----------------------|
| **Information Technology** | 73 | **-0.434** | **-1.41** | **15.4%** | **+17.89%** |
| Industrials | 79 | -0.228 | -1.51 | 7.7% | +7.90% |
| Financials | 76 | -0.270 | -1.54 | 2.6% | +5.19% |
| Consumer Staples | 36 | -0.167 | -1.10 | 15.4% | +6.25% |
| Consumer Discretionary | 48 | -0.104 | -0.63 | 33.3% | +2.62% |
| Health Care | 59 | -0.069 | -0.29 | 41.0% | +1.73% |
| Real Estate | 31 | +0.234 | +0.79 | 75.9% | -4.94% |
| Utilities | 31 | -0.021 | -0.11 | 43.6% | -0.07% |

**Sector takeaways:**

- **IT momentum remains the most negative sector-wide (key)**: sector momentum IC -0.434, with high-momentum (Q5) stocks averaging -5.96% and a long-short spread of +17.89% still at a stage high — the dominant driver of the market-wide reversal.
- **Financials and Industrials keep weakening**: Financials IC -0.270 with IC positive rate just 2.6%; Industrials IC -0.228 with long-short +7.90% — momentum leaders in both heavy-weight sectors are broadly retreating.
- **Real Estate remains the only positive-momentum sector**: IC +0.234, ICIR +0.79, 75.9% of periods positive — the sole sector with positive momentum, highlighting defensive/risk-off positioning.
- **Health Care and Utilities momentum broken**: Health Care IC -0.069 (p 0.085) and Utilities IC -0.021 (p 0.496) are both insignificant.

![Sector Momentum](/charts/sector-mom-2026-08-31.png)

## Summary

Today is a Monday-morning routine update with the US market not yet open and no new close data; all indicators are identical to the 08-30 report (which incorporated the US Friday 08-28 close): **the momentum reversal pattern carries over unchanged** — momentum IC -0.204, IT sector IC -0.434, Financials and Industrials keep weakening, volatility and size factors stay negative, and Real Estate remains the only positive-momentum sector. This routine update confirms Friday's pattern with no new change signal.

Risk signals to watch (unchanged from Friday's close, not resolved):
1. Momentum (ICIR -1.62, t=-10.01) and IT sector (IC -0.434) are in extreme territory; anomaly detection keeps flagging multi-sector deviations beyond 2-3σ with sign-flip alerts — the concentrated markdown of previously strong stocks has not stopped
2. The reversal has deepened for multiple consecutive days and is highly statistically significant — more likely a genuine market regime than a data artifact; chasing recently strong stocks is high risk in the near term
3. Real Estate (IC +0.234) remains the only positive-momentum sector for a sustained stretch — defensive style may persist; watch rates and REIT fund flows
4. Volatility is insignificant (p 0.948) with the low-vol outperformance signal absent — breadth of the style shift still awaits Monday's US close data for confirmation

Strategy takeaway: the momentum reversal pattern is unchanged since Friday's close, so chasing recently strong stocks remains high risk. Value factors still fail and defensive (Real Estate) style is relatively favored. Maintain low-momentum exposure and wait for Monday's US close data to confirm whether the reversal is stabilizing before repositioning.
