+++
title = "Factor Lab Daily Report 2026-08-10"
date = 2026-08-10
description = """
August 10, 2026 Factor Lab daily factor test report. This period: Momentum factor ICIR 2.70 remains dominant; Information Technology sector momentum ICIR 2.58 leads all sectors; EP factor ICIR -0.74 shows significant reversal effect; FCF Yield factor ICIR -1.43 persistently effective. BP factor ineffective, ICIR only 0.08.
"""
+++

## Factor IC Test

This report presents IC tests on 7 factors across S&P 500 constituents, with a 21-trading-day holding period and 39 cross-sectional observations.

| Factor | IC Mean | ICIR | t-stat | p-value | IC Positive % | Long-Short (Monthly) |
|--------|---------|------|--------|---------|---------------|---------------------|
| EP (Earnings Yield) | -0.0624 | -0.74 ⭐ | -4.57 ⭐ | 0.00005 ⭐ | 17.9% | +3.87% |
| BP (Book-to-Price) | +0.0056 | +0.08 | +0.48 | 0.6355 | 46.2% | +0.82% |
| FCF Yield (Free Cash Flow Yield) | -0.0589 | -1.43 ⭐ | -8.79 ⭐ | 0.00000 ⭐ | 7.7% | +3.04% |
| ROE (Return on Equity) | -0.0414 | -1.23 ⭐ | -7.58 ⭐ | 0.00000 ⭐ | 12.8% | +1.11% |
| Mom (12-1M Momentum) | +0.2241 | +2.70 ⭐ | +16.62 ⭐ | 0.00000 ⭐ | 100.0% | -8.07% |
| Vol (60D Volatility) | +0.1320 | +1.05 ⭐ | +6.48 ⭐ | 0.00000 ⭐ | 79.5% | -7.61% |
| Size (Market Cap) | +0.0479 | +1.25 ⭐ | +7.70 ⭐ | 0.00000 ⭐ | 87.2% | -2.06% |

**Key Takeaways:**

- **Momentum factor dominates**: ICIR 2.70, IC positive rate 100% — every cross-sectional period shows positive contribution. Q5 (high momentum) monthly average return +7.95% vs Q1 (low momentum) -0.12%, long-short spread -8.07% (note: long-short is Q1-Q5, negative means high momentum outperforms low). Momentum effect is extremely significant in the current market environment.
- **EP factor reversal effect significant**: ICIR -0.74, negative IC indicates that high earnings yield stocks are outperforming low earnings yield stocks recently, consistent with a growth-to-value rotation. Q1 monthly average +6.41% far exceeds Q4's +0.61%.
- **FCF Yield is the strongest value signal**: ICIR -1.43, t-stat -8.79, extremely significant. High FCF yield stocks systematically outperform; Q1 monthly average +5.64% vs Q3's +0.19%. The low positive rate (7.7%) means the factor points in the same direction across nearly every cross-section.
- **BP factor completely ineffective**: ICIR only 0.08, p-value 0.64, cannot reject the null hypothesis. Book-to-price has no predictive power for returns, consistent with structural changes in the US market — the increasing share of intangible assets has diminished the relevance of book value metrics.
- **Volatility factor**: ICIR +1.05, positive IC means high volatility stocks delivered higher returns, which may reflect a risk premium. Q5 monthly average +8.15% vs Q1's +0.54%.
- **Size factor**: ICIR +1.25, IC positive rate 87.2%, large-cap stocks slightly outperforming but the effect is not strong.

![Factor IC](/charts/factor-ic-2026-08-10.png)

## Sector Momentum Decomposition

Decomposing the momentum factor by GICS sector to examine differential momentum effects within each industry.

| Sector | Sample Size | IC Mean | ICIR | IC Positive % | Q5 Monthly Return | Q1 Monthly Return | Long-Short (Monthly) |
|--------|-------------|---------|------|---------------|-------------------|-------------------|---------------------|
| Consumer Discretionary | 48 | +0.2522 | +2.11 | 100% | +2.15% | -4.05% | -6.21% |
| Consumer Staples | 36 | +0.2088 | +1.34 | 87.2% | +0.02% | -4.65% | -4.67% |
| Financials | 76 | +0.3094 | +2.63 | 100% | +7.80% | +0.61% | -7.19% |
| Health Care | 59 | -0.1280 | -1.21 | 15.4% | -2.66% | +4.84% | +7.51% |
| Industrials | 79 | +0.2659 | +2.88 | 100% | +5.51% | -1.63% | -7.14% |
| Information Technology | 73 | +0.5240 | +2.58 | 100% | +27.19% | -1.35% | -28.54% |
| Real Estate | 31 | +0.1242 | +0.84 | 74.4% | +4.95% | +1.12% | -3.83% |
| Utilities | 31 | +0.1993 | +1.01 | 76.9% | -1.66% | -2.29% | -0.63% |

**Sector Momentum Highlights:**

- **Information Technology momentum extremely strong**: ICIR 2.58, IC mean 0.524, the highest across all sectors. Q5 (high momentum) monthly average return reaches +27.19%, Q1 (low momentum) only -1.35%, long-short spread -28.54%. The momentum effect within the tech sector is extremely pronounced — a classic "winner takes all" pattern.
- **Financials momentum robust**: ICIR 2.63, the highest IC positive rate at 100%. Q5 monthly average +7.80%, momentum strategy performance is strong in the financial sector.
- **Industrials momentum strongest**: ICIR 2.88, the highest across all sectors. IC positive rate 100%, Q5 monthly average +5.51% vs Q1's -1.63%, momentum effect is uniform and persistent.
- **Health Care momentum reversal**: ICIR -1.21, negative IC — the only sector showing momentum reversal. Q1 (low momentum) monthly average +4.84% outperforms Q5 (high momentum) at -2.66%. This indicates significant mean reversion in previously sold-off healthcare stocks.
- **Consumer Discretionary momentum effective**: ICIR 2.11, IC positive rate 100%, Q5 outperforms Q1 by approximately 6.21%.
- **Consumer Staples momentum weakened**: ICIR 1.34, but Q5 monthly average only +0.02%, insufficient differentiation within the sector.
- **Utilities momentum weak**: ICIR 1.01, long-short spread only -0.63%, high stock homogeneity within the sector limits momentum effectiveness.
- **Real Estate momentum moderate**: ICIR 0.84, IC positive rate 74.4%, momentum has some effect but not strong.

![Sector Momentum](/charts/sector-mom-2026-08-10.png)

## Summary

This period's factor test results show the market is in a strong **momentum-driven** regime:

1. **Momentum factor universally effective**: ICIR 2.70, IC positive rate 100%, the strongest factor currently.
2. **Value factors diverge**: EP (ICIR -0.74) and FCF Yield (ICIR -1.43) show significant reversal effects, indicating recent correction pressure on high-valuation stocks; BP is ineffective as the intangible-asset-driven economy erodes the relevance of traditional book value metrics.
3. **Tech sector extremely polarized**: Information Technology ICIR 2.58, Q5 monthly average return +27.19%, a clear winner-takes-all pattern within the sector.
4. **Health Care contrarian signal**: The only sector with momentum reversal (ICIR -1.21), previously weak stocks are rebounding — watch for sector rotation signals.
5. **Quality factor (ROE) reversal**: ICIR -1.23, low ROE stocks recently outperforming high ROE stocks, possibly reflecting speculative capital flowing into lower-quality names.

Overall assessment: The market is currently in a momentum-dominated strong trend phase. Among value factors, FCF Yield and EP continue to provide effective contrarian signals, while BP has lost relevance. At the sector level, pay close attention to the extreme momentum in tech and the reversal signal in healthcare.
