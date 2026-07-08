---
title: "Factor Lab Daily 2026-07-09"
description: "Momentum dominates with ICIR 2.70; Tech sector long-short spread reaches -28.5%; Value factors universally negative; Healthcare shows momentum reversal"
date: "2026-07-09"
---

## Factor IC Test (21-Day Holding)

| Factor | Mean IC | ICIR | p-value | Long-Short | Direction |
|--------|---------|------|---------|------------|-----------|
| ep (Earnings Yield) | -0.0624 | -0.7418 ⭐ | 0.0001 | +3.87% | Value works |
| bp (Book-to-Price) | +0.0056 | +0.0775 | 0.6355 | +0.82% | ❌ Not significant |
| fcf_yield | -0.0589 | -1.4256 ⭐ | 0.0000 | +3.04% | Value works |
| roe | -0.0414 | -1.2298 ⭐ | 0.0000 | +1.11% | Quality weak |
| **mom (Momentum)** | **+0.2241** | **+2.6966** ⭐ | 0.0000 | **-8.07%** ⭐Monotonic | **King factor** |
| vol (Volatility) | +0.1320 | +1.0508 ⭐ | 0.0000 | -7.61% | Low-vol works |
| size (Market Cap) | +0.0479 | +1.2497 ⭐ | 0.0000 | -2.06% | Small-cap works |

**Key Findings:**

- **Momentum reigns supreme**: ICIR 2.70 is the strongest across the board, long-short -8.07% with confirmed monotonicity — past winners keep winning, classic trend-following regime
- **All value factors show negative IC**: ep/fcf_yield/roe all negative, meaning high-valuation stocks outperform. This is textbook "growth/momentum-driven market" — value investors continue to get steamrolled
- **BP factor completely dead**: ICIR only 0.08, p=0.64 — book value has zero pricing power in current market
- **Low-vol strategy effective**: vol factor ICIR 1.05, low-volatility stocks outperform, suggesting a "slow grind up" rather than broad-based rally

![Factor IC](/charts/factor-ic-2026-07-09.png)

## Momentum by Sector

| Sector | Mean IC | ICIR | Long-Short | Characteristic |
|--------|---------|------|------------|----------------|
| **Info Tech** | **+0.5240** | **+2.5836** ⭐ | **-28.54%** ⭐Monotonic | 🔥 Strongest momentum |
| Financials | +0.3094 | +2.6260 ⭐ | -7.19% | Strong momentum |
| Industrials | +0.2659 | +2.8780 ⭐ | -7.14% ⭐Monotonic | Strong + monotonic |
| Consumer Discretionary | +0.2522 | +2.1104 ⭐ | -6.21% ⭐Monotonic | Strong + monotonic |
| Consumer Staples | +0.2088 | +1.3410 ⭐ | -4.67% | Moderate momentum |
| Utilities | +0.1993 | +1.0065 ⭐ | -0.63% | Weak momentum |
| Real Estate | +0.1242 | +0.8397 ⭐ | -3.83% | Weak momentum |
| **Health Care** | **-0.1280** | **-1.2058** ⭐ | **+7.51%** | ⚠️ Momentum reversal! |

**Sector Momentum Highlights:**

- **Tech momentum crushes all**: IC 0.52, long-short -28.5% — winner basket destroys loser basket by nearly 30 percentage points with confirmed monotonicity. Textbook "AI narrative + capital concentration"
- **Healthcare the sole reversal**: IC -0.13, long-short +7.51%. Past losers bouncing, past winners fading. Capital rotating out of defensive healthcare into offense? Or sector-specific mean reversion
- **Financials/Industrials solid momentum**: ICIR >2.6 for both, clear trends but much smaller spreads than tech, moderate beta
- **Defensive sectors show weak momentum**: Utilities and Real Estate have weak ICIR and spreads — money is "chasing" not "defending"

![Sector Momentum](/charts/sector-mom-2026-07-09.png)

## Anomaly Detection

✅ All factors within normal fluctuation range. No anomaly alerts.

## Strategy Implications

1. **Trend-following is the optimal strategy**: Momentum factor is strong across the board — don't fight the trend
2. **Value strategy remains dormant**: ep/fcf_yield both negative IC, too early to bottom-fish value
3. **Tech is the momentum battleground**: But -28.5% long-short spread signals extreme crowding, drawdown risk accumulating
4. **Healthcare momentum reversal worth monitoring**: Potential early signal of sector rotation, needs follow-up confirmation
5. **Small-cap + low-vol combo**: Both size and vol factors effective, consider SMID low-vol strategy as satellite allocation
