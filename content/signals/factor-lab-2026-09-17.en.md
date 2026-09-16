---
title: "Factor Lab Daily Brief 2026-09-17"
date: 2026-09-17
description: "S&P 500 factor IC report as of 2026-09-16 close. Momentum reversal deepens (IC=-0.18, ICIR=-1.22), IT sector momentum reversal most extreme (IC=-0.47). Value factors all negative. Low-volatility premium strengthening. Size factor: small-cap outperformance persists within the index."
---

# Factor Lab Daily Brief 2026-09-17

## Data As-of: 2026-09-16 (US Trading Day)

Price cache ends 2026-09-16. TTM fundamental panel unchanged. This run and the previous (9/16) share the same market snapshot—the incremental update wrote 9/16 close prices into cache; same-day and next-day runs consume identical data. No new TTM filings between runs, so fundamental factors are byte-identical. Price-based factors moved only marginally due to rolling window drift.

## Sample and Evaluation Methodology

- **Universe**: S&P 500 constituents, 502 stocks (474 for ROE)
- **Evaluation window**: 60 cross-sectional dates for fundamentals, 39 for price-based factors
- **MOM**: Price[t-21] / Price[t-273] − 1 (return over the 252–273 day lookback before the forward window)
- **Forward return**: 21 trading days after the cross-section
- **IC**: Spearman rank correlation between factor value and forward return, averaged over historical cross-sections. **Not a single-day IC, not a forecast, not a probability of decline.**
- **ICIR** = IC mean / IC std
- **p-value**: Ordinary t-test, **uncorrected for overlapping-sample autocorrelation**
- **Long-short**: Q1 short − Q5 long (values shown in `long_short_Q1_Q5_mean_ret_pct`)

## Full 7-Factor Table

| Factor | IC Mean | ICIR | p-value | Valid Obs | Prev IC | Delta | Q1→Q5 LS |
|--------|---------|------|---------|-----------|---------|-------|----------|
| MOM | −0.1817 | −1.222 | <0.0001 | 39 | −0.1855 | +0.0038 | +5.50% |
| EP | −0.0480 | −0.520 | 0.0002 | 60 | −0.0480 | 0.0000 | +2.98% |
| BP | +0.0030 | +0.046 | 0.728 | 60 | +0.0030 | 0.0000 | +1.13% |
| FCF Yield | −0.0352 | −0.539 | 0.0001 | 60 | −0.0352 | 0.0000 | +2.48% |
| ROE | −0.0248 | −0.685 | <0.0001 | 60 | −0.0248 | 0.0000 | +0.76% |
| VOL | +0.0654 | +0.437 | 0.010 | 39 | +0.0609 | +0.0045 | −2.65% |
| SIZE | −0.0722 | −1.045 | <0.0001 | 39 | −0.0741 | +0.0019 | +4.08% |

**Status: Continuation.** All 7 factors maintain the same direction as the previous run. MOM edging from −0.1855 to −0.1817 but remains deeply negative.

## Recent Trend (Last 5 Different Runs)

| Run Date | MOM | VOL | SIZE |
|----------|-----|-----|------|
| 2026-09-11 | −0.2037 | +0.0476 | −0.0760 |
| 2026-09-12 | −0.1973 | +0.0543 | −0.0763 |
| 2026-09-13 | −0.1973 | +0.0543 | −0.0763 |
| 2026-09-14 | −0.1973 | +0.0543 | −0.0763 |
| 2026-09-15 | −0.1901 | +0.0575 | −0.0756 |
| 2026-09-16 | −0.1855 | +0.0609 | −0.0741 |
| 2026-09-17 | −0.1817 | +0.0654 | −0.0722 |

- **MOM**: Gradual recovery from −0.2225 (9/5) to −0.1817. Momentum reversal intensity easing but not reversed.
- **VOL**: Steady climb from +0.0170 (9/1) to +0.0654. Low-vol premium strengthening.
- **SIZE**: Worsening from −0.0450 (9/1) to −0.0722. Small-cap outperformance within the index persists.

## Sector Momentum Table (MOM by Sector)

| Sector | IC | ICIR | Status |
|--------|-----|------|--------|
| Information Technology | −0.4728 | −1.876 | 🔴 Extreme momentum reversal |
| Industrials | −0.2102 | −1.319 | 🔴 Strong momentum reversal |
| Financials | −0.2527 | −1.161 | 🔴 Strong momentum reversal |
| Utilities | −0.0875 | −0.753 | ⚠️ Momentum turned negative |
| Consumer Staples | −0.0455 | −0.205 | Weak negative |
| Health Care | −0.0305 | −0.105 | Weak negative |
| Consumer Discretionary | −0.0233 | −0.132 | Weak negative |
| Real Estate | +0.1156 | +0.341 | Only positive momentum |

**Coverage**: 8 GICS sectors. Health Care (59 stocks), Consumer Discretionary (48 stocks), Real Estate (31 stocks, only 17 valid IC observations) have small samples—IC estimates are noisy. Real Estate is the sole sector with residual positive momentum, but p=0.19 is not significant.

**Anomaly alert interpretation**: The script flags "positive-to-negative reversal" for CDIS, CST, FIN, IND, IT, UTIL. These are **continuation alerts**—momentum turned negative in late August, and the same alerts have fired weekly for weeks. Compared to the ic_history baseline (positive momentum mean +0.1 to +0.4 during May–June), IT sector MOM IC=−0.47 is not merely a reversal but a deviation exceeding 2σ from baseline (z=−2.16), the most extreme shift in this regime.

## Long-Short Direction Clarification

The code uses standard Q1 (lowest factor value) short, Q5 (highest factor value) long. Therefore:
- **MOM LS +5.50%** = Q1 (past losers) beat Q5 (past winners) → momentum reversal confirmed
- **VOL LS −2.65%** = Q1 (low vol) beat Q5 (high vol) → low-vol premium confirmed
- **SIZE LS +4.08%** = Q1 (smaller) beat Q5 (larger) → size premium within the index
- **EP/FCF/ROE positive LS** = low value/profitability beat high → value factors ineffective or逆向 in current sample

## Implications for Strategy

1. **Momentum reversal is the dominant signal.** IT sector IC=−0.47, ICIR=−1.88—the strongest among all factors. Past winners over the 1-year lookback have substantially underperformed past losers, most extremely within tech. Q1→Q5 LS +5.50% is not a high-win-rate strategy—ic_positive_pct is only 12.8% (5 of 39 cross-sections positive)—but the payoff ratio is high.

2. **Low-vol premium is persistent.** VOL IC climbed steadily from +0.017 to +0.065. ICIR=0.44 hasn't crossed 0.5, but direction is stable and p=0.01 is significant.

3. **All value factors (EP/FCF/ROE) are negative.** This does not mean "value rotation confirmed." It means that in the current sample period, low-EP, low-FCF, and low-ROE stocks outperformed their high-counterparts—a reflection of broad growth stock pullback over the past year. Cannot infer that value stocks will outperform going forward.

4. **SIZE factor is robust.** Smaller stocks within the S&P 500 continue to outperform larger ones (IC=−0.07, ICIR=−1.05). Note: this is back-end vs front-end of the 500, not a cross-market small-cap effect.

5. **BP is dead.** IC=+0.003, p=0.73. Book-to-price carries zero predictive information in this sample.

## What Cannot Be Inferred

- ❌ Negative MOM ≠ market direction call. It is a cross-sectional relative ranking effect, not a directional timing signal.
- ❌ Negative sector momentum ≠ buy all stocks in that sector. It is relative performance between high-momentum and low-momentum stocks within the sector.
- ❌ Significant IC ≠ implementable strategy. Quantile portfolios are not cost-adjusted; p-values are uncorrected for overlap.
- ❌ 8 sector alerts ≠ 8 independent risk events. Most are continuation markers of the same momentum regime shift.
- ❌ Identical fundamental IC between runs ≠ data error. No new TTM filings; price cache had no additional trading day.

## Statistical and Data Limitations

- **Overlapping-sample autocorrelation**: 21-day forward returns overlap by 20 days. Ordinary t-test p-values understate true p-values. All starred significance should be read as "preliminary."
- **MOM cannot be fully evaluated for the most recent 21 days**: Latest factor computation requires Price[t-273] through Price[t-21]; the 21-day forward window for the most recent cross-sections is incomplete as of 9/16 cache.
- **ICIR is not a strategy Sharpe**: ICIR measures factor IC stability (mean/std), not portfolio risk-adjusted return.
- **Sample coverage bias**: Real Estate has only 31 stocks and 17 valid IC observations. Small-sector ICs are noisy—single-period extremes should not be over-interpreted.

---

*Charts:*
- *Factor IC distribution: /charts/factor-ic-2026-09-17.png*
- *Sector momentum breakdown: /charts/sector-mom-2026-09-17.png*
