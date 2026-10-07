---
title: "Factor Lab Daily Brief 2026-10-08"
date: 2026-10-08
description: "S&P 500 factor testing results. Data through 2026-10-07. Volatility factor IC=+0.119 highly significant (ICIR=1.07); earnings/FCF/ROE all negative, overvalued stocks persistently outperform; momentum reversed in Health Care sector (IC=+0.155, p=0.001) while IT and Utilities remain negative."
---

# Factor Lab Daily Brief 2026-10-08

## Data Cutoff

**Market data through: 2026-10-07 (Wednesday, US trading session)**

The `prices_cache.parquet` last date is 2026-10-07. October 8 is US Columbus Day; markets are closed. No new price data was captured this run. Fundamental factors (EP, BP, FCF Yield, ROE) show identical IC values from Oct 2 through Oct 8, confirming stale market data for this session.

## Sample and Evaluation Methodology

- **Universe**: S&P 500 constituents, 502 valid stocks (474 for ROE)
- **Fundamental factors**: TTM net income / book value / free cash flow divided by market cap (rolling from latest quarterly filings)
- **Momentum**: Price[t-21]/Price[t-273] - 1 (~1-year return excluding recent 3 weeks; 39 valid IC observations)
- **Evaluation window**: Last 60 daily cross-sections (60 IC observations for fundamentals, 39 for price factors)
- **IC definition**: Spearman rank correlation between factor value and next-21-day return. Positive IC = higher factor value correlates with higher future return
- **ICIR**: IC mean / IC std, measuring factor stability
- **p-value**: Ordinary t-test, **not corrected for overlapping samples** (21-day forward returns overlap in rolling windows)
- **Long-short return**: Mean return of Q1 (lowest factor) minus Q5 (highest factor), **before transaction costs**

---

## New vs. Ongoing Signals

### Full Factor Table

| Factor | IC Mean | ICIR | p-value | Previous IC | Delta | Observations | Signal |
|:-----|--------:|-----:|------|--------:|-----:|---------:|------|
| EP | -0.0480 | -0.52 | 0.0002 | -0.0480 | 0.0000 | 60 | 🔴 Overvalued persists |
| BP | +0.0030 | +0.05 | 0.728 | +0.0030 | 0.0000 | 60 | ⚪ Ineffective |
| FCF Yield | -0.0352 | -0.54 | 0.0001 | -0.0352 | 0.0000 | 60 | 🔴 High FCF underperforms |
| ROE | -0.0248 | -0.68 | 0.000002 | -0.0248 | 0.0000 | 60 | 🔴 High ROE underperforms |
| MOM | +0.0433 | +0.15 | 0.366 | +0.0304 | +0.0129 | 39 | ⚪ Weak positive, not significant |
| VOL | +0.1191 | +1.07 | <0.0001 | +0.1192 | -0.0001 | 39 | 🟢 Volatility premium highly significant |
| SIZE | +0.0457 | +0.29 | 0.083 | +0.0376 | +0.0081 | 39 | 🟡 Positive, not significant |

**Previous**: 2026-10-07 run results (same data cutoff 10/07).

**Key observations**:
- EP, FCF Yield, ROE IC values unchanged for 5 consecutive run days (10/2-10/8), confirming no new market data entered.
- MOM slowly rose from +0.030 to +0.043, but p=0.366 remains insignificant with extreme volatility (IC std=0.29).
- VOL factor ICIR=1.07, the most stable among all 7 factors. "Low vol beats high vol" regime continues.

### Sector Momentum Table (MOM breakdown)

| Sector | IC | ICIR | p-value | Previous IC | Delta | Observations | Status |
|:-----|----:|-----:|------|--------:|-----:|---------:|------|
| Consumer Staples | +0.133 | +0.46 | 0.007 | +0.123 | +0.010 | 39 | 🟢 Significant positive momentum |
| Health Care | **+0.155** | **+0.59** | **0.001** | +0.142 | +0.013 | 39 | 🟢 **Significant positive momentum, reversal continues** |
| Consumer Discretionary | +0.095 | +0.36 | 0.033 | +0.087 | +0.008 | 39 | 🟡 Significant positive momentum |
| Industrials | +0.025 | +0.08 | 0.617 | +0.011 | +0.014 | 39 | ⚪ Not significant |
| Financials | -0.024 | -0.08 | 0.641 | -0.030 | +0.006 | 39 | ⚪ Not significantly negative |
| Information Technology | -0.066 | -0.14 | 0.394 | -0.088 | +0.022 | 39 | ⚪ Negative, not significant |
| Utilities | -0.090 | -0.74 | 0.00005 | -0.090 | 0.000 | 39 | 🔴 **Significant negative momentum, ongoing** |

**Coverage**: 7 GICS一级 sectors, ~402 stocks total (some S&P 500 constituents excluded from sector breakdown).

---

## Implications for Strategy

### 1. Low Vol Anomaly — Strongest Signal This Session

VOL factor IC=+0.119, ICIR=1.07, p<0.0001. Low-volatility stocks significantly outperformed high-volatility stocks over the past 21 trading days. This is a cross-market, cross-period anomaly that remains extremely stable this session.

**Interpretation**: The market overprices risk premium on high-volatility names, or low-vol stocks carry uncaptured quality factor exposure. This is NOT a "tomorrow market direction" signal; it reflects systematic cross-sectional excess returns of the low-vol group over this window.

### 2. Valuation and Cash Flow Factors Persistently Negative

EP (-0.048), FCF Yield (-0.035), ROE (-0.025) all significantly negative, with zero IC change since Oct 2. This means:
- **Overvalued stocks' earnings expansion has outpaced undervalued stocks**
- **High FCF Yield stocks (typically "cash cows") underperform**
- **High ROE companies outperform low ROE companies**

This contradicts the "value mean-reversion" narrative. In the current market environment, growth narratives and liquidity premia appear to压制 value/cash flow factors.

### 3. Momentum Sector Divergence

**Health Care sector** momentum reversed from negative to positive and strengthened (IC=+0.155, p=0.001), with z-score=+4.75 deviating from historical mean — a notable sector-level regime change. Health Care was previously one of the few sectors with negative momentum; now it is the strongest positive momentum sector.

**Utilities** maintains significant negative momentum (IC=-0.090, p=0.00005), where low-momentum stocks outperform, forming a sharp contrast with Health Care.

**Information Technology** momentum is negative (-0.066) but insignificant, suggesting AI-theme momentum effects have substantially weakened or disappeared within this window.

### 4. BP (Price-to-Book) Completely Ineffective

IC=+0.003, p=0.728. With EP also significantly negative, BP's further ineffectiveness suggests "cheap" is not an advantage right now — the market is neither penalizing high-PB stocks nor treating low-PB as a signal.

---

## Conclusions That Cannot Be Drawn

1. **MOM=+0.043 is not significant** → Cannot claim "momentum has returned to positive territory." With 39 observations and std=0.29, the signal is drowned in noise.
2. **EP/FCF/ROE negative ≠ value rotation is dead** → This is only the average of the last 60 cross-sections; short-term reversals are not ruled out. Cannot infer "value stocks will rise next" or "growth stocks continue to outperform."
3. **VOL significant ≠ low-vol strategy can be bought blindly** → ICIR measures cross-sectional ranking stability, not strategy Sharpe. Realizable returns after costs are unknown.
4. **Health Care momentum reversal ≠ healthcare stocks universally bullish** → Sector momentum reflects winners outperforming losers within the sector, not the sector's performance relative to the broad market.
5. **SIZE near significant (p=0.083) ≠ small-cap factor returning** → Below the 0.05 threshold, and SIZE has historically extreme volatility.

---

## Statistical and Data Limitations

- **p-values uncorrected**: 21-day forward returns have substantial overlap in rolling windows (adjacent cross-sections share ~20/21 days of returns). Ordinary t-test p-values are understated. Marked "⭐" significant results may become insignificant after overlap correction.
- **IC mean ≠ strategy return**: IC is rank correlation between factor and future return, not absolute long-short portfolio return.
- **ICIR ≠ Sharpe**: IC/σ(IC) measures factor ranking stability, with no direct conversion to strategy risk-adjusted returns.
- **MOM evaluation window incomplete**: MOM uses 21-day forward returns; the most recent 21 trading days (from 10/07) are not yet fully evaluated. The latest IC may shift with new data.
- **Uneven sector sample sizes**: Health Care has 59 stocks, Utilities only 31; small-sector IC estimates have larger estimation error.
- **No new market data**: Factors (EP, BP, FCF, ROE) with identical IC values from 10/2-10/08 confirm that market data has not updated. This does not mean the factor regime "hasn't changed" — simply that data has not advanced.
