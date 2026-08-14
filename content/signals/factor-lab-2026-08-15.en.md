+++
title = "Factor Lab Daily Report 2026-08-15"
date = 2026-08-15
description = |
  August 15, 2026 Factor Lab daily factor test report. Momentum factor ICIR 2.70 continues to dominate the broad market; Information Technology sector momentum ICIR 2.58 with Q5 monthly return +27.19% showing extreme dispersion; FCF Yield factor ICIR -1.43 is the strongest value signal, EP factor ICIR -0.74 with continued reversal; BP factor ineffective at ICIR 0.08; Health Care sector momentum reversal ICIR -1.21. Factor data unchanged from previous session, TTM financial panel in mid-quarter quiet period, price cache not updated.
+++

## Factor IC Test

This issue conducts a 7-factor IC test on S&P 500 constituents with a 21-trading-day holding period and 39 cross-sectional observations.

| Factor | IC Mean | ICIR | t-stat | p-value | IC Positive % | Long-Short (Monthly) |
|--------|---------|------|--------|---------|---------------|---------------------|
| EP (Earnings Yield) | -0.0624 | -0.74 ⭐ | -4.57 ⭐ | 0.00005 ⭐ | 17.9% | +3.87% |
| BP (Book-to-Price) | +0.0056 | +0.08 | +0.48 | 0.6355 | 46.2% | +0.82% |
| FCF Yield (Free Cash Flow Yield) | -0.0589 | -1.43 ⭐ | -8.79 ⭐ | 0.00000 ⭐ | 7.7% | +3.04% |
| ROE (Return on Equity) | -0.0414 | -1.23 ⭐ | -7.58 ⭐ | 0.00000 ⭐ | 12.8% | +1.11% |
| Mom (12-1 Month Momentum) | +0.2241 | +2.70 ⭐ | +16.62 ⭐ | 0.00000 ⭐ | 100.0% | -8.07% |
| Vol (60-Day Volatility) | +0.1320 | +1.05 ⭐ | +6.48 ⭐ | 0.00000 ⭐ | 79.5% | -7.61% |
| Size (Market Cap) | +0.0479 | +1.25 ⭐ | +7.70 ⭐ | 0.00000 ⭐ | 87.2% | -2.06% |

**Key Takeaways:**

- **Momentum factor continues to dominate**: ICIR 2.70, IC positive rate 100%, positive contribution across all cross-sectional periods. Q5 (high momentum) monthly return +7.95%, Q1 (low momentum) -0.12%, long-short spread -8.07% (negative means high momentum outperforms low). Momentum effect is extremely significant in the current market environment; trend-following strategies remain effective.
- **EP factor reversal persists**: ICIR -0.74, negative IC indicates high earnings yield stocks have been outperforming recently, consistent with growth stock pullback and value rotation. Q1 monthly return +6.41% far exceeds Q4's +0.61%.
- **FCF Yield is the strongest value signal**: ICIR -1.43, t-stat -8.79, extremely significant. High FCF yield stocks systematically outperform, Q1 monthly +5.64% vs Q3's +0.19%. IC positive rate only 7.7%, meaning nearly every cross-section points in the same direction.
- **BP factor completely ineffective**: ICIR only 0.08, p-value 0.64, cannot reject null hypothesis. Book-to-price has no predictive power for returns; rising intangible asset share makes traditional book value metrics less relevant.
- **Volatility factor**: ICIR +1.05, positive IC means high volatility stocks have higher returns, possibly reflecting risk premium. Q5 monthly +8.15% vs Q1's +0.54%.
- **Size factor**: ICIR +1.25, IC positive rate 87.2%, large-cap stocks slightly outperforming but effect is modest.
- **Quality factor (ROE) reversal**: ICIR -1.23, low ROE stocks outperforming high ROE stocks recently, possibly reflecting speculative flows into lower-quality names.

![Factor IC](/charts/factor-ic-2026-08-15.png)

## Sector Momentum Decomposition

Momentum factor decomposed by GICS sector to examine differential momentum effects within each industry. Communication Services, Energy, and Materials excluded due to sample size below 30.

| Sector | Sample | IC Mean | ICIR | IC Positive % | Q5 Monthly | Q1 Monthly | Long-Short |
|--------|--------|---------|------|---------------|-----------|-----------|-----------|
| Consumer Discretionary | 48 | +0.2522 | +2.11 | 100% | +2.15% | -4.05% | -6.21% |
| Consumer Staples | 36 | +0.2088 | +1.34 | 87.2% | +0.02% | -4.65% | -4.67% |
| Financials | 76 | +0.3094 | +2.63 | 100% | +7.80% | +0.61% | -7.19% |
| Health Care | 59 | -0.1280 | -1.21 | 15.4% | -2.66% | +4.84% | +7.51% |
| Industrials | 79 | +0.2659 | +2.88 | 100% | +5.51% | -1.63% | -7.14% |
| Information Technology | 73 | +0.5240 | +2.58 | 100% | +27.19% | -1.35% | -28.54% |
| Real Estate | 31 | +0.1242 | +0.84 | 74.4% | +4.95% | +1.12% | -3.83% |
| Utilities | 31 | +0.1993 | +1.01 | 76.9% | -1.66% | -2.29% | -0.63% |

**Sector Momentum Highlights:**

- **Information Technology momentum extremely strong**: ICIR 2.58, IC mean 0.524, highest among all sectors. Q5 (high momentum) monthly return reaches +27.19%, Q1 (low momentum) only -1.35%, long-short spread -28.54%. The winner-takes-all pattern within tech is very pronounced; momentum strategies deliver the most extreme returns in this sector.
- **Industrials momentum strongest**: ICIR 2.88, highest across all sectors. IC positive rate 100%, Q5 monthly +5.51% vs Q1's -1.63%, momentum effect is uniform and persistent.
- **Financials momentum robust**: ICIR 2.63, IC positive rate 100%. Q5 monthly +7.80%, financial sector momentum strategies performing strongly.
- **Health Care momentum reversal**: ICIR -1.21, negative IC, the only sector showing momentum reversal. Q1 (low momentum) monthly +4.84%, outperforming Q5 (high momentum) at -2.66%. Previously sold-off stocks showing significant mean reversion; watch for sector rotation signals.
- **Consumer Discretionary momentum effective**: ICIR 2.11, IC positive rate 100%, Q5 outperforms Q1 by ~6.21%.
- **Consumer Staples momentum weakening**: ICIR 1.34, but Q5 monthly only +0.02%, insufficient differentiation within the sector.
- **Utilities momentum weak**: ICIR 1.01, long-short spread only -0.63%, high homogeneity within sector, momentum effect insignificant.
- **Real Estate momentum moderate**: ICIR 0.84, IC positive rate 74.4%, momentum has some effect but not strong.

![Sector Momentum](/charts/sector-mom-2026-08-15.png)

## Summary

This factor test shows the market continues to exhibit a strong **momentum-driven** character, consistent with the recent pattern:

1. **Momentum factor effective broad market**: ICIR 2.70, IC positive rate 100%, currently the strongest factor; trend strategies remain effective.
2. **Value factors differentiated**: EP (ICIR -0.74) and FCF Yield (ICIR -1.43) show significant reversal effects, high-valuation stocks facing pullback pressure; BP is ineffective, as the intangible-asset-driven economic structure renders traditional book value metrics meaningless.
3. **Tech sector extreme dispersion**: Information Technology ICIR 2.58, Q5 monthly return +27.19%, winner-takes-all pattern within the sector is evident.
4. **Health Care contrarian reversal**: The only sector with momentum reversal (ICIR -1.21), previously weak stocks rebounding; watch for sector rotation signals.
5. **Quality factor (ROE) reversal**: ICIR -1.23, low ROE stocks outperforming high ROE stocks, speculative capital potentially flowing into lower-quality names.

Overall assessment: The market remains in a momentum-dominated strong trend phase. Among value factors, FCF Yield and EP continue to provide effective contrarian signals, while BP has lost relevance. At the sector level, particular attention should be paid to the extreme momentum in tech and the reversal signal in Health Care. All factors are within normal volatility ranges with no anomaly alerts triggered. The TTM financial panel is in a mid-quarter quiet period, and factor data is unchanged from the previous session.
