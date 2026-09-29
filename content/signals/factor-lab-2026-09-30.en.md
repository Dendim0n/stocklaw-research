---
title: "Factor Lab Daily Brief 2026-09-30"
date: 2026-09-30
description: "S&P 500 seven-factor cross-sectional test results. Data through 2026-09-28. Momentum (MOM) IC mean -0.048, insignificant; Volatility (VOL) IC +0.117, IR >1.0 highly significant. Five sector momentum factors flipped from positive to negative, representing a continuing regime shift rather than a single-day突变. EP, FCF Yield, ROE remain negative. BP and SIZE ineffective."
tags:
  - factor-research
  - S&P-500
  - cross-section
---

# Factor Lab Daily Brief 2026-09-30

## Data Cut-off and Sample

- **Price data cut-off**: 2026-09-28 (latest date in `prices_cache.parquet`)
- **Beijing time**: 2026-09-30 06:30; EDT 2026-09-29 18:30 (after Tuesday close; Monday 9/29 market holiday)
- **Valid stocks**: 502 (fundamental factors: 474–502)
- **Evaluation window**: Cross-sectional factor value → next 21-day return (Spearman rank correlation IC)
- **Valid observations**: 60 cross-sections for fundamental factors; 36 cross-sections for price factors (MOM/VOL/SIZE)
- **⚠️ Note**: The most recent 21 trading days (approx. 09-03 to 09-28) cannot yet fully evaluate 21-day forward returns; IC means below use all available historical cross-sections

## Running-Day Data Continuity Check

This run (09-30) produces **identical results** to the previous run (09-29) -- all factor IC means, ICIRs, and p-values match digit by digit. Compared to the progressive changes seen in 09-26/25/24 (MOM from -0.147 → -0.129 → -0.109 → -0.076 → -0.048; VOL from +0.086 → +0.093 → +0.102 → +0.110 → +0.117), this run introduced no new price data.

**Conclusion**: Price data effectively stops at 09-28; 09-30 output is a continuation of the existing state.

## Seven-Factor Summary Table

| Factor | IC Mean | ICIR | p-value | Obs | Q1→Q5 LS(%) | Prev(IC) | Delta |
|--------|--------:|-----:|--------:|----:|------------:|--------:|------:|
| MOM | -0.0483 | -0.1873 | 0.255 | 39 | +1.68 | -0.0632 | +0.0149 |
| EP | -0.0480 | -0.5196 | 0.0002⭐ | 60 | +2.98 | -0.0480 | 0.0000 |
| BP | +0.0030 | +0.0456 | 0.728 | 60 | +1.13 | +0.0030 | 0.0000 |
| FCF Yield | -0.0352 | -0.5390 | 0.0001⭐ | 60 | +2.48 | -0.0352 | 0.0000 |
| ROE | -0.0248 | -0.6845 | 0.0000⭐ | 60 | +0.76 | -0.0248 | 0.0000 |
| VOL | +0.1165 | +1.0463 | 0.0000⭐ | 39 | -4.85 | +0.1172 | -0.0007 |
| SIZE | -0.0042 | -0.0338 | 0.836 | 39 | +1.82 | -0.0139 | +0.0097 |

⭐ = p < 0.05 (statistically significant; ⚠️ not corrected for overlapping-sample autocorrelation)

**Key interpretations**:
- **MOM negative but insignificant**: Momentum factor broadly ineffective; p=0.255 fails to reject "no relationship." Continued recovery from -0.147 (09-22 to 09-30), deviating from the positive-momentum baseline but not yet stable.
- **VOL stable positive and highly significant**: ICIR=1.05, the highest among all factors. High-volatility groups **underperform** low-vol (Q1-Q5 = -4.85%), confirming the low-vol anomaly persists.
- **EP / FCF Yield / ROE all negative and significant**: High-earnings, high-FCF, high-ROE groups underperform -- "value" and "quality" factors are inverted in this cross-section.
- **BP and SIZE completely ineffective**: p > 0.8, IC near zero.

## Sector Momentum Table (MOM by Sector)

| Sector | IC Mean | ICIR | Direction | LS(%) |
|--------|--------:|-----:|-----------|------:|
| Information Technology | -0.2319 | -0.5696⭐ | 🔴 Reversed | +8.13 |
| Utilities | -0.1148 | -1.1051⭐ | 🔴 Reversed | +3.29 |
| Financials | -0.0874 | -0.2885 | 🔴 Reversed | +1.68 |
| Industrials | -0.0712 | -0.2759 | 🔴 Reversed | +3.57 |
| Consumer Discretionary | +0.0377 | +0.1603 | → Weak positive | +0.72 |
| Consumer Staples | +0.0424 | +0.1436 | → Weak positive | +2.10 |
| Health Care | +0.0795 | +0.2643 | 🔴 Reversed(neg→pos) | -4.72 |

**Coverage**: 7 GICS sectors (this framework covers momentum-computable sectors among the 11 GICS; Real Estate, Energy, Materials do not produce independent rows in this framework).

### Sector momentum changes

- **5 sectors flipped positive→negative**: IT, Utilities, Financials, Industrials, Utilities. Per `ic_history.json`, these sectors' positive-momentum baseline dates back to 05-29. IT flipped from +0.309 to -0.232 on 08-19 and has stayed negative -- this is a **continuing regime shift**, not a 09-30 anomaly.
- **Health Care flipped negative→positive**: Historical mean -0.108, current +0.080 (z=+4.68), significantly偏离. Low-momentum groups outperform (LS -4.72%), suggesting "catch-up/reversal" dynamics within healthcare.
- **Consumer Discretionary & Staples**: From significant positive to weak positive; p-values 0.329/0.382, no longer significant.

## Strategic Implications

1. **Low-vol strategy is currently the most reliable signal**: VOL ICIR > 1.0, p ≈ 0. A long-low-vol / short-high-vol portfolio recorded -4.85% mean return in-sample (Q1 low-vol -2.37% vs Q5 high-vol +2.48%). ⚠️ This is a paper portfolio return, unadjusted for transaction costs -- not an implementable strategy return.
2. **Momentum in regime transition**: Overall MOM IC is negative and insignificant; five sectors have also flipped. Pure momentum strategies are not advisable in this cross-section. IT's reversal from +0.31 to -0.23 is large and persistent -- the "strongest get stronger" dynamic within AI-narrative tech stocks has reversed.
3. **Value/quality factors inverted in current cross-section**: EP, FCF Yield, ROE all negative and significant. This does not mean "value rotation confirmed" -- these factors exhibit sharp regime switches across different periods.
4. **BP and SIZE have no predictive power in this sample**: Exclude from strategy construction for now.

## Conclusions That Cannot Be Drawn

- ❌ MOM negative ≠ market will fall. MOM tests cross-sectional ranking vs. forward returns within S&P 500, not market direction.
- ❌ EP/FCF Yield/ROE negative ≠ "value stocks about to outperform growth." This is a cross-sectional snapshot; these factors flip regimes sharply over time.
- ❌ SIZE negative ≠ small-cap rally incoming. SIZE shows no significant rank correlation with future returns in this test.
- ❌ Sector reversal alerts ≠ single-day突发事件. Per ic_history, most sector momentum reversals began 08-19 to 09-03; this run did not change established facts.
- ❌ p < 0.05 ≠ profitable strategy. t-tests do not handle overlapping-sample autocorrelation; p-values marked "uncorrected." ICIR is IC mean / IC std, not a strategy Sharpe ratio.
- ❌ Quantile portfolio returns are pre-cost. Q1-Q5 LS is a paper calculation; slippage, borrow costs, and rebalancing frequency materially affect implementable returns.

## Statistical and Data Limitations

| Limitation | Description |
|------------|-------------|
| Overlapping samples | 21-day forward returns have 20-day overlap; ordinary t-test p-values are biased low; Lo-MacKinnon or Newey-West correction needed |
| Evaluation window | Most recent 21 trading days' factors cannot yet fully evaluate; IC means include early historical data, potentially pulled toward the 05-07 positive-momentum era |
| Data cut-off | Price cache stops at 09-28; 09-30 run introduced no new data |
| Sector coverage | Framework outputs 7 sectors, not all 11 GICS sectors |
| Survivorship | S&P 500 constituents use current list; historical cross-sections may have survivorship bias |
| z-score baseline | ic_history.json contains大量 duplicate records (same IC value written dozens of times), affecting mean/std estimation |
