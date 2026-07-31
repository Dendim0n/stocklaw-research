+++
title = "Factor Lab Daily Report 2026-08-01"
date = "2026-08-01"
description = """
August 1, 2026 Factor Lab daily factor testing report. Momentum factor leads with ICIR 2.70,
FCF Yield shows significant reversal with ICIR -1.43, sector momentum reveals extreme
divergence in Information Technology.
"""
+++

## Overview

**Test Date:** 2026-08-01
**Universe:** S&P 500 constituents (503 stocks)
**Sample Period:** 2 years of price data, 39 cross-sectional periods, 21-day holding period
**Data Sources:** yfinance (prices) + pre-computed TTM fundamental panel (as of 2026-05-29)

---

## Full Factor IC Tests

| Factor | IC Mean | ICIR | p-value | IC Positive % | L-S Return | Validity |
|--------|---------|------|---------|---------------|------------|----------|
| **Mom (Momentum)** | **+0.2241** | **+2.6966** | **0.0000** | **100.0%** | **-8.07%** | ⭐⭐⭐ |
| Vol (Volatility) | +0.1320 | +1.0508 | 0.0000 | 79.5% | -7.61% | ⭐ |
| Size | +0.0479 | +1.2497 | 0.0000 | 87.2% | -2.06% | ⭐ |
| EP (Earnings Yield) | -0.0624 | -0.7418 | 0.0001 | 17.9% | +3.87% | ⭐ (inverse) |
| FCF Yield | -0.0589 | -1.4256 | 0.0000 | 7.7% | +3.04% | ⭐ (inverse) |
| ROE | -0.0414 | -1.2298 | 0.0000 | 12.8% | +1.11% | ⭐ (inverse) |
| BP (Book-to-Price) | +0.0056 | +0.0775 | 0.6355 | 46.2% | +0.82% | ✗ |

### Key Findings

- **Momentum factor dominates absolutely**: ICIR 2.70, 100% IC positive rate, perfectly monotonic quantile returns. Q5 (high momentum) returns +7.95% monthly vs Q1 (low momentum) at -0.12%, an 8.07% long-short spread. This is the strongest alpha source in the current market.

- **Value factors collectively fail**: EP, FCF Yield, and ROE all show negative IC means with significant inverse ICIRs. High-valuation stocks are outperforming low-valuation ones—the market continues to reward growth premia. FCF Yield shows the strongest inverse effect (ICIR -1.43).

- **BP factor completely dead**: ICIR of just 0.08, p-value 0.64, zero predictive power. Book value's role in current market pricing is negligible.

- **Volatility factor effective but "counterintuitive"**: ICIR 1.05, high-volatility stocks earn more (Q5: +8.15% vs Q1: +0.54%), L-S -7.61%. This is not the traditional low-volatility anomaly but a risk premium effect.

- **Large caps continue to outperform**: Size factor ICIR 1.25, Q5 (large cap) +4.51% monthly vs Q1 (small cap) +2.45%.

![Factor IC](/charts/factor-ic-2026-08-01.png)

## Sector Momentum Decomposition

Momentum factor decomposed by GICS sectors to observe intra-sector momentum strength:

| Sector | # Stocks | IC Mean | ICIR | Q1 Return | Q5 Return | L-S | Verdict |
|--------|----------|---------|------|-----------|-----------|-----|---------|
| **Information Technology** | 73 | **+0.5240** | **+2.58** | -1.35% | **+27.19%** | **-28.54%** | 🔥 Extreme |
| **Industrials** | 79 | +0.2659 | +2.88 | -1.63% | +5.51% | -7.14% | ⭐ Strong |
| **Financials** | 76 | +0.3094 | +2.63 | +0.61% | +7.80% | -7.19% | ⭐ Strong |
| **Consumer Discretionary** | 48 | +0.2522 | +2.11 | -4.05% | +2.15% | -6.21% | ⭐ Strong |
| **Consumer Staples** | 36 | +0.2088 | +1.34 | -4.65% | +0.02% | -4.67% | ✓ Valid |
| **Utilities** | 31 | +0.1993 | +1.01 | -2.29% | -1.66% | -0.63% | ✗ Weak |
| **Real Estate** | 31 | +0.1242 | +0.84 | +1.12% | +4.95% | -3.83% | ✗ Weak |
| **Health Care** | 59 | -0.1280 | -1.21 | +4.84% | -2.66% | +7.51% | ⚠️ Inverse |

### Sector Highlights

- **Tech momentum is explosive**: IC mean 0.524, ICIR 2.58, Q5 monthly return of +27.19%. The winner-takes-all effect within tech is extremely powerful. The marginal value of a momentum strategy in this sector far exceeds others.

- **Health Care is the sole inverse sector**: IC -0.128, ICIR -1.21. Low-momentum stocks (Q1) return +4.84% monthly while high-momentum (Q5) return -2.66%. Significant momentum reversal—likely reflecting catch-up rallies in laggards or defensive fund inflows.

- **Financials and Industrials show solid momentum**: ICIR of 2.63 and 2.88 respectively, with 7-8% long-short spreads. These sectors offer practical, stable momentum strategy value.

- **Utilities and Real Estate momentum is weak**: ICIR < 1.1, L-S < 1%. Defensive sectors produce noisy momentum signals.

![Sector Momentum](/charts/sector-mom-2026-08-01.png)

## Strategy Implications

1. **Momentum remains the dominant force** in the current market. Until fundamental data is next refreshed (earnings season), momentum strategies carry the highest marginal information value.

2. **Value factors are comprehensively broken**, especially FCF Yield and EP. Pure value strategies face sustained headwinds until the growth premium breaks. Consider combining value with momentum into a "value+momentum" composite factor.

3. **Tech sector momentum is extreme** but signals crowding risk. ICIR 2.58 backed by +27% monthly Q5 returns is an unsustainable trajectory—watch for momentum crash signals (VIX spikes, sector fund outflows).

4. **Health Care's inverse momentum** is worth monitoring. If market regime shifts, healthcare may be among the first safe-haven beneficiaries.

5. **Large-cap style persists**: Size ICIR 1.25. The systemic opportunity for small caps has not yet arrived.

---

*Data based on S&P 500 constituents, 2-year panel data, TTM fundamentals as of 2026-05-29, prices through the latest trading day. IC tests use Spearman rank correlation, 21-day holding period. Past performance does not guarantee future results.*
