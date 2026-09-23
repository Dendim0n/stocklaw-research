---
title: "Factor Lab Daily Brief 2026-09-24"
date: 2026-09-24
description: "S&P 500 7-factor cross-sectional test results. Data through 2026-09-23. Momentum remains negative but narrowing; volatility factor ICIR rises to 0.83; value factors sustain negative IC."
---

# Factor Lab Daily Brief 2026-09-24

## Data Cutoff

Price cache as of **2026-09-23** (Monday), the last obtainable daily bar for this factor computation cycle. Fundamental data uses daily TTM rolling windows.

## Sample and Evaluation Methodology

- Stock coverage: 502 S&P 500 constituents (474 for ROE)
- Fundamental factors (EP/BP/FCF Yield/ROE): 60 cross-sectional IC observations
- Price factors (MOM/VOL/SIZE): 39 cross-sectional IC observations
- MOM definition: Price[t-21] / Price[t-273] − 1, i.e., price change ~252 trading days ago to 21 trading days ago
- IC = Spearman rank correlation (factor value vs. next-period return)
- Quintile portfolio returns are average holding-period returns, **not net of transaction costs**
- p-values are not corrected for overlapping-sample autocorrelation; labeled as "uncorrected for overlapping samples"

## 7-Factor Summary Table

| Factor | IC Mean | ICIR | p-value | Previous IC (9/23) | Delta | Valid Obs | Long-Short Q1-Q5 |
|--------|---------|------|---------|---------------------|-------|-----------|------------------|
| EP | -0.0480 | -0.520 | 0.0002 | -0.0480 | 0.0000 | 60 | +2.98% |
| BP | +0.0030 | +0.046 | 0.728 | +0.0030 | 0.0000 | 60 | +1.13% |
| FCF Yield | -0.0352 | -0.539 | 0.0001 | -0.0352 | 0.0000 | 60 | +2.48% |
| ROE | -0.0248 | -0.685 | 0.000002 | -0.0248 | 0.0000 | 60 | +0.76% |
| MOM | -0.1086 | -0.512 | 0.003 | -0.1290 | +0.020 | 39 | +3.38% |
| VOL | +0.1019 | +0.829 | 0.000009 | +0.0928 | +0.009 | 39 | -4.11% |
| SIZE | -0.0430 | -0.432 | 0.011 | -0.0527 | +0.010 | 39 | +3.03% |

**Previous period comparison:** EP/BP/FCF Yield/ROE are identical to 9/23 because no new price data was added (price cache remains at 9/23), so fundamental cross-sections are unchanged. MOM/VOL/SIZE show minor adjustments reflecting rolling-window progression.

## New vs. Established Signals

- **Established continuation:** All 7 factors maintain the same direction as last week. EP, FCF Yield, ROE remain negative — low valuation / low FCF / low ROE groups outperform high-valuation/high-profit groups. This is not a "today reversal"; it is an established regime since late August.
- **Momentum negativity narrowing:** From −0.176 on 9/18 → −0.129 on 9/23 → −0.109 on 9/24. The momentum reversal signal persists but its intensity is weakening. This is not a reversal back to positive; the negative regime continues with mild recovery.
- **VOL strength persisting:** ICIR rose from 0.49 → 0.57 → 0.65 → 0.72 → 0.83 across the last 5 run dates. Low-volatility factor is the most stable signal in the current environment.

## Sector Momentum Table (MOM by Sector)

| Sector | IC Mean | ICIR | p-value | Long-Short Q1-Q5 |
|--------|---------|------|---------|------------------|
| Information Technology | −0.349 | −1.058 | 0.000 | +12.65% |
| Industrials | −0.131 | −0.600 | 0.001 | +5.41% |
| Utilities | −0.105 | −0.979 | 0.000001 | +2.68% |
| Financials | −0.151 | −0.552 | 0.002 | +2.79% |
| Real Estate | −0.027 | −0.092 | 0.765 | +0.91% |
| Consumer Discretionary | +0.021 | +0.093 | 0.569 | +1.10% |
| Consumer Staples | +0.008 | +0.030 | 0.853 | +2.79% |
| Health Care | +0.013 | +0.043 | 0.792 | −2.92% |

**Coverage:** 8 GICS secondary sectors. Real Estate has only 12 IC observations (31 stocks), reducing signal reliability.

**Sector highlights:**
- IT sector MOM IC = −0.349 is the largest negative across all sectors and highly significant. Tech stocks that were winners over the past year (252 days ago to 21 days ago) are significantly underperforming losers within the sector. Consistent with full-market negative MOM, but 2-3x the average magnitude.
- Industrials and Financials also negative and significant.
- Consumer Discretionary and Consumer Staples MOM positive but both insignificant (p > 0.5); defensive consumer sectors show no identifiable momentum pattern.
- Health Care MOM slightly positive but insignificant; Q1-Q5 long-short is −2.92% (Q5 high-momentum underperforms Q1 low-momentum), directionally consistent with the full market but not significant.

## Anomaly Detection Signals

| Signal | Detail |
|--------|--------|
| 🔴 Financials MOM flipped positive to negative | From +0.190 to −0.151 |
| 🔴 Industrials MOM flipped positive to negative | From +0.162 to −0.131 |
| 🔴 IT MOM flipped positive to negative | From +0.321 to −0.349 |
| 🔴 Real Estate MOM flipped positive to negative | From +0.136 to −0.027 |
| 🔴 Utilities MOM flipped positive to negative | From +0.147 to −0.105 |
| ⚠️ CDiscretionary MOM p-value no longer significant | 0.023 → 0.569 |
| ⚠️ CStaples MOM p-value no longer significant | 0.016 → 0.853 |
| ⚠️ Real Estate p-value no longer significant | 0.016 → 0.765 |
| ⚠️ Health Care IC deviates from historical mean | z=+3.59, above average |
| ⚠️ Real Estate IC deviates from historical mean | z=−4.82, below average |
| ⚠️ Utilities IC deviates from historical mean | z=−2.45, below average |

**Important note:** All 5 "positive-to-negative flip" alerts have been firing continuously since the momentum regime shift in late August — they mark an existing state, not a new daily event. Cross-referencing ic_history, IT/Industrials/Financials completed their first flip between 8/18-8/19; subsequent daily alerts are substantively identical.

## Strategy Implications

1. **Low-volatility outperformance is the strongest current signal.** VOL factor ICIR = 0.83, steadily climbing over the past 5 run dates. In the current environment, low-volatility stocks' excess return over high-volatility stocks remains discernible.
2. **Momentum reversal confirmed but not new.** MOM has been negative for weeks; current −0.109 has recovered somewhat from peak −0.176. This does not mean the momentum factor is "restoring effectiveness" — still negative and significant.
3. **Value factors (EP/FCF Yield/ROE) sustain negative IC.** Low-valuation, low-FCF-yield, low-ROE stocks outperformed high-valuation/high-profit groups over the past 21 days. This reflects short-term style rotation, not confirmation of long-term value investing logic.
4. **Tech sector momentum reversal is most severe.** IT sector MOM IC = −0.349 indicates that tech stocks which performed strongly from mid-2025 through early September 2026 have significantly pulled back relative to weaker stocks within the sector.

## Conclusions That Cannot Be Drawn

- ❌ MOM negative does NOT imply "the market must fall" or "one should bottom-pick prior strong stocks." MOM measures cross-sectional ranking of winners vs. losers, not directional assessment.
- ❌ Negative VALUE factor IC does NOT imply "value rotation is confirmed." This is a 21-day holding-period cross-sectional relationship, unrelated to long-term value mean reversion.
- ❌ Negative SIZE does NOT imply "small-cap stocks are about to rise." SIZE negative only means small-cap stocks relative outperformed large-cap over the past 21 days in the sample, not a future trend reversal.
- ❌ The current number of red flags is NOT an independent risk event. These alerts are a continuation of the late-August regime shift.
- ❌ The count of sectors with negative MOM (4 sectors) does NOT equal "today's new reversals." Most sectors have been negative since mid-August.
- ❌ p-values are uncorrected for overlapping samples; cannot be used to claim "highly significant, not random fluctuation."
- ❌ ICIR is IC mean / IC std, not a strategy Sharpe ratio or annualized return.

## Statistical and Data Limitations

- **Data cutoff date 2026-09-23** differs from the latest evaluable factor date: MOM uses t-21 as holding-period endpoint, so the most recent 21 trading days (9/2-9/23) returns cannot be fully evaluated. The latest valid MOM IC evaluation ends around mid-August data.
- ic_history.json contains大量 same-day duplicate entries (multiple writes per run date). Comparisons above use deduplicated (date, ic) pairs, taking the latest unique value.
- Historical baseline covers 2026-05 through 2026-09, with positive momentum in May-June and negative momentum after late August. Z-score baselines are affected by this mixed regime, meaning deviation thresholds may be too tight in some regimes and too loose in others.
- Quintile long-short direction follows actual code Q1-Q5 (Q1 low-factor group minus Q5 high-factor group), not net of transaction costs.
