---
title: "Factor Lab Daily Brief 2026-09-09"
date: 2026-09-09
description: "S&P 500 seven-factor cross-sectional test. Data through 09-08. Momentum, FCF Yield, EP, ROE, SIZE maintain negative IC; VOL still insignificant. Multiple sector momentum 'flip' alerts are continuation of established regime, not today's突变."
---

# Factor Lab Daily Brief 2026-09-09

## Data Cutoff and Sample

- **Run date**: 2026-09-09 (06:30 CST)
- **Price data as-of**: 2026-09-08 (Friday; Mon 09-07 was US Labor Day holiday)
- **Price cache**: `prices_cache.parquet`, latest date 2026-09-08
- **Fundamental panel**: `combined_panel.pkl`, daily TTM roll-forward, 502 valid stocks
- **Evaluation window**: Fundamental factors — 60 cross-sectional observations; Price factors (MOM/VOL/SIZE) — 39 observations
- **MOM holding period**: Price[t-21]/Price[t-273] − 1 (~21-day return vs. 252-day超前 return)
- **Note**: Runs from 09-04 through 09-08 all used identical cached data (IC values exactly identical). This 09-09 run is the first to incorporate 09-08 prices.

## Factor Summary Table

| Factor | IC Mean | ICIR | Previous IC | Diff | Valid Obs | p-value | Long-Short (Q1-Q5) |
|:-----|--------:|-----:|------------:|-----:|----------:|:-------:|-------------------:|
| EP   | -0.0480 | -0.52 | -0.0480 | 0.0000 | 60 | 0.0002 | +2.98% |
| BP   | +0.0030 | +0.05 | +0.0030 | 0.0000 | 60 | 0.7276 | +1.13% |
| FCF Yield | -0.0352 | -0.54 | -0.0352 | 0.0000 | 60 | 0.0001 | +2.48% |
| ROE  | -0.0248 | -0.68 | -0.0248 | 0.0000 | 60 | 0.0000 | +0.76% |
| MOM  | -0.2201 | -1.87 | -0.2226 | +0.0025 | 39 | 0.0000 | +6.69% |
| VOL  | +0.0379 | +0.21 | +0.0339 | +0.0041 | 39 | 0.2094 | -1.35% |
| SIZE | -0.0706 | -0.98 | -0.0660 | -0.0046 | 39 | 0.0000 | +4.13% |

**Notes**:
- IC mean is the average Spearman rank correlation across historical cross-sections, not a daily IC.
- p-values from ordinary t-test, **not corrected for overlapping samples** (MOM/VOL/SIZE use 21-day overlapping returns); cannot support "highly significant, not random" claims.
- ICIR = IC mean / IC std, not strategy Sharpe or annualized return.
- Long-short return = Q1 avg return − Q5 avg return, before transaction costs.

## Status: Continuation

Compared to the previous run, fundamentals are unchanged (TTM earnings quarterly, no new filings in window). Price factors show only minor drift:

- **MOM** IC micro-improved from −0.2226 to −0.2201, still deeply negative. Winners within the sample significantly underperform losers; momentum reversal regime persists.
- **VOL** IC from +0.0339 to +0.0379, still insignificant (p=0.21). Volatility factor has no predictive power.
- **SIZE** IC from −0.0660 to −0.0706. Small-cap (relative to large-cap within S&P 500) continues to outperform.
- **EP, FCF Yield, ROE** all maintain negative IC. Value and profitability factors show "low-value outperforms" pattern in this sample.

**No new flip signals**. All 7 factor directions are identical to those from 09-04 onward.

## Sector Momentum Table (MOM Decomposition)

| Sector | IC Mean | ICIR | p-value | Long-Short (Q1-Q5) |
|:-----|--------:|-----:|:-------:|-------------------:|
| Information Technology | -0.5156 | -2.24 | 0.0000 | +20.69% |
| Financials | -0.2990 | -1.87 | 0.0000 | +5.65% |
| Industrials | -0.2465 | -1.66 | 0.0000 | +8.76% |
| Consumer Staples | -0.1291 | -0.79 | 0.0000 | +5.49% |
| Consumer Discretionary | -0.0814 | -0.52 | 0.0028 | +2.66% |
| Health Care | -0.0746 | -0.32 | 0.0593 | +0.92% |
| Utilities | -0.0429 | -0.25 | 0.1347 | +0.41% |
| Real Estate | +0.1849 | +0.59 | 0.0117 | -3.24% |

**Coverage**: 8 GICS secondary sectors, 433 stocks total. Real Estate (31) and Utilities (31) have small samples. Health Care p=0.059 is marginal.

**Key observations**:
- IT sector MOM IC = −0.52, by far the largest absolute value across sectors. Strong momentum reversal within technology: low-momentum tech stocks significantly outperformed high-momentum ones.
- Financials and Industrials also show deeply negative IC, with strong consistency (ICIR=−1.66 for Industrials).
- **Real Estate is the only sector with positive MOM IC** (IC=+0.18), but with only 23 cross-sectional observations and ICIR=0.59, it barely meets the "effective" threshold.

## Anomaly Alert Interpretation

System flagged the following alerts:

| Alert | Detail | Nature |
|:-----|------|--------|
| 🔴 MOM / IT flip | History mean +0.38 → current −0.52, z=−2.66 | **Continuation** — persistent since regime shift in late August |
| 🔴 MOM / Financials flip | +0.22 → −0.30, z=−2.60 | **Continuation** |
| 🔴 MOM / Industrials flip | +0.19 → −0.25, z=−2.47 | **Continuation** |
| 🔴 MOM / Consumer Staples flip | +0.15 → −0.13, z=−2.05 | **Continuation** |
| 🔴 MOM / Consumer Discretionary flip | +0.20 → −0.08, z=−2.21 | **Continuation** |
| 🔴 MOM / Utilities flip | +0.16 → −0.04, z=−2.43 | **Continuation** |
| ⚠️ MOM / Health Care insignificance | p from 0.043 → 0.059 | Marginal change |

**Baseline note**: `ic_history.json` contains pre-August positive-momentum records (means +0.1~+0.4). After momentum turned negative across the board in late August, "flip" alerts fire continuously — this marks an **established regime, not a today-specific event**.

## Strategic Implications

1. **Momentum reversal regime is firmly established**. MOM IC at −0.22 level across multiple consecutive runs, negative in 7 of 8 sectors. Not short-term noise.
2. **Value factors consistently underperform in their expected direction**. EP, FCF Yield, ROE all negative IC — low-value/low-profitability groups outperform. This does not necessarily confirm a "value rotation" — could be a byproduct of liquidity tightening or risk-off sentiment.
3. **Negative SIZE IC persists**. Small-cap (relative to large-cap within S&P 500) outperforms, but this cannot be extrapolated to the broad small-cap market.
4. **BP remains无效**. IC=+0.003, p=0.73. Book-to-price factor has no predictive power in this sample.

## Conclusions Not Supported

- ❌ Negative MOM ≠ market must decline. It only means that S&P 500 stocks with the largest past-1-year returns underperform the biggest losers over the subsequent 21 days.
- ❌ Negative sector momentum ≠ all laggards are buy candidates. Structure varies within sectors.
- ❌ Negative EP/FCF Yield ≠ value factor reversal confirmed. Must evaluate alongside macro environment and factor collinearity.
- ❌ IC p-values are uncorrected for overlapping samples; cannot support strong "not random" claims.

## Statistical and Data Limitations

1. **Overlapping return autocorrelation**: MOM uses 21-day rolling forward returns with high cross-section overlap. Ordinary t-test p-values are downward-biased; Newey-West correction may render them insignificant.
2. **Evaluation window**: 21-day forward returns mean the most recent 21 trading days (08-18 to 09-08) cannot be fully evaluated — factor values for these dates have not yet realized their returns.
3. **Cache lag**: Four runs from 09-04 to 09-08 produced identical data (price cache not incrementally updated). This 09-09 run is the first with updated prices (as of 09-08).
4. **Sample coverage**: Communication Services and Energy sectors are absent from sector decomposition (likely filtered due to insufficient MOM observations < 23).

---

*This report is auto-generated by Factor Lab v2.0 for research purposes only and does not constitute investment advice.*
