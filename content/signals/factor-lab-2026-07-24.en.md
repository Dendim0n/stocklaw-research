---
title: "Factor Lab Daily Report 2026-07-24"
date: "2026-07-24"
description: |
  Full factor IC test + sector momentum decomposition. Momentum factor continues to dominate (ICIR 2.70), IT sector momentum leads by a wide margin (IC 0.524). Value factors collectively fail, EP/FCF/ROE all negative. Fear & Greed 39.6 (fear, worsening from yesterday), market breadth extreme fear (15.0, new low), S&P 500 fell to 7408. Long-short structure: chase momentum + avoid value.
---

## 1. Factor IC Overview

| Factor | IC Mean | ICIR | p-value | IC Pos% | L/S Return | Signal |
|--------|---------|------|---------|---------|------------|--------|
| mom (Momentum) | +0.224 | 2.70 | 0.000 | 100.0% | -8.07% | ⭐⭐⭐ Strongest |
| vol (Volatility) | +0.132 | 1.05 | 0.000 | 79.5% | -7.61% | ⭐⭐ Positive |
| size (Mkt Cap) | +0.048 | 1.25 | 0.000 | 87.2% | -2.06% | ⭐ Large-cap premium |
| bp (Book/Price) | +0.006 | 0.08 | 0.635 | 46.2% | +0.82% | ❌ Not significant |
| ep (Earnings Yield) | -0.062 | -0.74 | 0.000 | 17.9% | +3.87% | ⚠️ Negative |
| fcf_yield (FCF Yield) | -0.059 | -1.43 | 0.000 | 7.7% | +3.04% | ⚠️ Strongly negative |
| roe (ROE) | -0.041 | -1.23 | 0.000 | 12.8% | +1.11% | ⚠️ Negative |

> **Key Takeaway:** The momentum factor (mom) continues to reign supreme with ICIR 2.70 and 100% positive IC ratio. Q5 (high momentum) averages 7.95% monthly vs Q1 (low momentum) -0.12%, a spread of 8.07%. Value factors (EP/BP/FCF/ROE) are comprehensively failing — cheap stocks not only don't rise, they consistently underperform. This is not a mean-reverting market; it's a trend-accelerating market.

## 2. Quantile Return Structure

Momentum factor quantile returns (monthly average):

```
Q1 (Lowest mom):  -0.12%  ▏
Q2:              +1.12%  ████
Q3:              +1.24%  █████
Q4:              +3.36%  █████████████
Q5 (Highest mom): +7.95%  ████████████████████████████████
```

Perfect monotonicity — strictly increasing from Q1 to Q5. The size factor also shows a large-cap premium, with Q5 large-caps averaging 4.51% vs Q1 small-caps 2.45%. The volatility factor shows an anomalous high-volatility high-return pattern (Q5 averages 8.15%), contradicting the traditional low-volatility premium theory.

Value factor return distributions are chaotic: EP and FCF's Q1 (cheapest) actually has the highest returns, suggesting "cheap" in the current environment signals troubled companies, not undervalued opportunities.

![Factor IC](/charts/factor-ic-2026-07-24.png)

## 3. Sector Momentum Decomposition

Momentum factor decomposed by sector — not all sector momentum is effective:

| Sector | IC Mean | ICIR | IC Pos% | Q5 Avg | L/S Return | Signal |
|--------|---------|------|---------|--------|------------|--------|
| Information Technology | +0.524 | 2.58 | 100.0% | +27.19% | -28.54% | ⭐⭐⭐ |
| Financials | +0.309 | 2.63 | 100.0% | +7.80% | -7.19% | ⭐⭐⭐ |
| Industrials | +0.266 | 2.88 | 100.0% | +5.51% | -7.14% | ⭐⭐⭐ |
| Consumer Discretionary | +0.252 | 2.11 | 100.0% | +2.15% | -6.21% | ⭐⭐ |
| Consumer Staples | +0.209 | 1.34 | 87.2% | +0.02% | -4.67% | ⭐ |
| Utilities | +0.199 | 1.01 | 76.9% | -1.66% | -0.63% | ⭐ |
| Real Estate | +0.124 | 0.84 | 74.4% | +4.95% | -3.83% | Weak |
| Health Care | **-0.128** | -1.21 | 15.4% | -2.66% | **+7.51%** | ⚠️ Reversal |

### Key Findings

- **IT sector momentum is extreme:** IC 0.524, Q5 monthly return 27.19% — nearly self-reinforcing. The AI/semiconductor chain's self-amplification mechanism continues. Q1 (low momentum IT) averages -1.35%, long-short spread reaches 28.54%.
- **Healthcare reverse momentum:** IC -0.128, the only sector with significantly negative IC. Q1 (low momentum) returns 4.84% vs Q5 (high momentum) -2.66%. This sector is mean-reverting — previously strong healthcare stocks are pulling back, oversold names are bouncing.
- **Financials and Industrials:** Momentum is robust and effective, IC 0.27-0.31, ICIR exceeds 2.5, Q5 returns 5-8%, good monotonicity.
- **Consumer Discretionary momentum divergence:** IC is positive (0.252) but Q5 returns only 2.15%, momentum effect exists but intensity is significantly diminished.
- **Utilities and Real Estate:** Momentum effect is weak, long-short spread under 4%.

![Sector Momentum](/charts/sector-mom-2026-07-24.png)

## 4. Market Environment Cross-Validation

- **Fear & Greed Index: 39.6 (Fear)** — Down from 42.8 yesterday, fear deepening
- **Market Breadth: 15.0 (Extreme Fear)** — ⚠️ Worsened from 18.8 yesterday, new low. Advancing stocks extremely scarce
- **S&P 500: 7408** — Down 91 points (-1.2%) from 7499 yesterday, pullback accelerating from highs
- **S&P 500 Momentum: 29.4 (Fear)** — Index deviating from 125-day moving average, momentum weakening
- **Stock Price Strength: 36.6 (Fear)** — Only 36.6% of stocks near 52-week highs
- **VIX: 50.0 (Neutral)** — Volatility not yet flashing warning
- **Put/Call Ratio: 30.0 (Fear)** — Options market defensive
- **Safe Haven Demand: 63.2 (Greed)** — Capital chasing safe-haven assets, contradictory signal

### Factor vs. Market Environment

The current environment perfectly explains factor performance:
1. **Market breadth at extreme fear (15.0)** → Capital extremely concentrated in a few large-caps → size factor premium + momentum concentrated at the top → mom factor extremely effective
2. **Persistently elevated risk aversion** → Defensive sectors (Healthcare, Utilities) show reverse momentum → capital rotating within defensive sectors
3. **Value factors comprehensively failing** → Low valuation = troubled companies → market rewards strength, not cheapness
4. **S&P 500 dropped from 7499 to 7408** → Breadth deterioration + index decline, signals that large-caps alone can't hold the line are emerging

## 5. Summary & Strategy Implications

### One-Line Summary

**This is a momentum-driven, extremely polarized market. Chasing winners works, buying dips is dangerous. Large-caps crush small-caps, IT sector self-reinforcement accelerates. But watch out — market breadth hits new low (15.0), S&P 500 has begun pulling back from highs, risk is accumulating.**

### Strategy Direction

- **Momentum strategy (mom):** Currently the most effective single factor, ICIR 2.70, Q5 monthly 7.95%. Long high-momentum + short low-momentum delivers theoretical 8.07% monthly. But note: momentum strategy is ineffective (reversed) in Healthcare — exclude or invert.
- **Value strategy (EP/BP/FCF/ROE):** Avoid entirely. In the current environment, "buying cheap" equals "buying garbage." Wait for breadth recovery and F&G returning to greed territory before considering value mean-reversion.
- **Sector allocation:** Overweight high-momentum stocks in IT, Financials, Industrials → Underweight or avoid high-momentum Healthcare → Neutral on Consumer Discretionary and Utilities
- **Risk warning (UPGRADED):** Market breadth at 15.0 is extreme fear territory, and it's worsening from 18.8 yesterday. S&P 500 dropped 91 points in a single day to 7408 — index highs + breadth deterioration + beginning decline = three factors converging. If large-caps pull back further, small/mid-caps have no support capability, and the decline could be severe. Increase vigilance, monitor VIX — if VIX jumps from 50 to 65+, decisive position reduction is warranted.

---

*Data Source: Factor Lab v2.0 (S&P 500 Constituent Panel Data) | Generated: 2026-07-24 06:47 CST*