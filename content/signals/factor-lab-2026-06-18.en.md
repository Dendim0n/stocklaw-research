---
title: "Factor Lab Daily Brief 2026-06-18"
description: "Momentum ICIR 2.70 leads all factors; Health Care shows reversal signal; credit spreads normal but margin debt at record"
date: 2026-06-18
---

## Factor Lab Daily Brief — 2026-06-18

### Factor IC Test

| Factor | IC Mean | ICIR | Long-Short Ret | IC+ % | p-value | Signal |
|--------|---------|------|----------------|-------|---------|--------|
| Momentum (mom) | 0.224 | **2.70** | -8.07% | 100.0% | 0.0000 | 🟢 Excellent |
| Volatility (vol) | 0.132 | 1.05 | -7.61% | 79.5% | 0.0000 | 🟢 Effective |
| Size | 0.048 | **1.25** | -2.06% | 87.2% | 0.0000 | 🟢 Effective |
| FCF Yield | -0.059 | -1.43 | +3.04% | 7.7% | 0.0000 | 🔴 Reversal |
| ROE | -0.041 | -1.23 | +1.11% | 12.8% | 0.0000 | 🔴 Reversal |
| EP | -0.062 | -0.74 | +3.87% | 17.9% | 0.0001 | 🔴 Reversal |
| BP | 0.006 | 0.08 | +0.82% | 46.2% | 0.6355 | ⚪ Ineffective |

**Key Findings:**
- **Momentum ICIR 2.70** with 100% IC positive rate — the only consistently effective factor over the past 39 rebalancing periods.
- **Volatility factor ICIR 1.05** — high-vol stocks outperform, highly correlated with momentum (growth/tech stocks exhibit both).
- **Size factor ICIR 1.25** — small-cap premium stable, but long-short return only -2.06%, indicating tail risk.
- **All value factors失效**: EP, FCF Yield, ROE ICs are all negative — high-valuation/quality stocks underperform. Classic growth-dominated regime.
- **BP factor completely ineffective** — IC near zero, statistically insignificant.

![Factor IC](/charts/factor-ic-2026-06-18.png)

### Sector Momentum Decomposition

| Sector | ICIR | Q5 Return | Long-Short | Trend |
|--------|------|-----------|------------|-------|
| Information Technology | **2.58** | 27.19% | -28.54% | 🔥 Extremely strong |
| Industrials | **2.88** | 5.51% | -7.14% | 🟢 Strong |
| Financials | **2.63** | 7.80% | -7.19% | 🟢 Strong |
| Consumer Discretionary | 2.11 | 2.15% | -6.21% | 🟢 Effective |
| Consumer Staples | 1.34 | 0.02% | -4.67% | 🟡 Moderate |
| Utilities | 1.01 | -1.66% | -0.63% | ⚪ Weak |
| Real Estate | 0.84 | 4.95% | -3.83% | ⚪ Weak |
| Health Care | **-1.21** | -2.66% | +7.51% | 🔴 **Reversal** |

**Key Findings:**
- **Information Technology** momentum ICIR 2.58, Q5 return 27.19% — tech momentum遥遥领先 with near-perfect monotonic Q1→Q5 progression.
- **Health Care is the only reversal sector**: ICIR -1.21, low-momentum stocks outperform high-momentum. Signals possible sector rotation as capital flows from high-valuation to low-valuation names.
- **Industrials and Financials** show stable momentum effects (ICIR > 2.6) with strong Q5 returns.
- **Utilities and Real Estate** momentum weak, ICIR below 1.05.

![Sector Momentum](/charts/sector-mom-2026-06-18.png)

### Strategy Implications

1. **Long**: Continue overweighting high-momentum + high-volatility combos, especially in IT/Industrials/Financials. Momentum's 100% IC positive rate is the most reliable alpha source available.
2. **Hedging**: Watch Health Care reversal signal — if it spreads to other sectors, may signal momentum factor crowding at peak.
3. **Value Trap**: EP/ROE/FCF Yield all失效 — the market's pricing logic for "cheap quality" has断裂. Don't try to bottom-fish "value."
4. **Small-Cap Premium**: Size ICIR 1.25 but long-short only -2.06% — high dispersion within small caps means stock selection is critical.

---

> Data: FRED (TTM financial panels) | Backtest: 39 rebalancing periods | Generated: 2026-06-18 06:31 CST
