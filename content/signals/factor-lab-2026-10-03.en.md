---
title: "Factor Lab Daily Brief 2026-10-03"
date: 2026-10-03
description: "S&P 500 factor test: prices as of 10-02 (Fri). Value factors (EP/FCF Yield/ROE) persist negative; momentum broadly negative but not significant; low-vol anomaly (negative alpha) strongest signal. 5 of 7 sector momentum sign flips are regime continuation, not today's突变."
---

# Factor Lab Daily Brief 2026-10-03

## Data Cut-off

**2026-10-02 (Friday)** — latest date in prices cache. Beijing time 10-03 is Saturday; US markets closed. This run reused the same post-close data from the 10-02 run.

## Sample and Evaluation Methodology

- **Universe**: S&P 500 constituents, 502 stocks (ROE: 474 due to negative equity firms)
- **Fundamental factors** (EP/BP/FCF Yield/ROE): daily TTM financial panel, 60 valid IC observations (~3 months of cross-sections)
- **Price factors** (MOM/VOL/SIZE): 39 valid IC observations (MOM uses 21-day forward return; the most recent 21 trading days cannot yet be fully evaluated)
- **IC meaning**: Spearman rank correlation between factor value and next-period return. Positive = higher factor, higher return; negative = lower factor (or opposite) leads
- **ICIR**: IC mean / IC std, not strategy Sharpe
- **p-value**: Ordinary t-test, **not corrected for overlapping samples** (MOM/VOL use 21-day forward returns which overlap). Cannot claim "highly significant, not random" based on these p-values alone
- **Long-Short**: Q1 (lowest factor) long minus Q5 (highest factor) short. Negative = high-factor group outperforms

## Seven-Factor Summary

| Factor | IC Mean | ICIR | p-value | Previous IC | Delta | Valid Obs | LS Q1-Q5 |
|:-------|--------:|-----:|--------:|------------:|------:|----------:|---------:|
| EP     | -0.0480 | -0.52 | 0.0002 | -0.0480 | 0.0000 | 60 | +2.98% |
| BP     | +0.0030 | +0.05 | 0.7276 | +0.0030 | 0.0000 | 60 | +1.13% |
| FCF Yield | -0.0352 | -0.54 | 0.0001 | -0.0352 | 0.0000 | 60 | +2.48% |
| ROE    | -0.0248 | -0.68 | 0.0000 | -0.0248 | 0.0000 | 60 | +0.76% |
| MOM    | -0.0012 | -0.00 | 0.9791 | -0.0193 | +0.0181 | 39 | +0.31% |
| VOL    | +0.1191 | +1.07 | 0.0000 | +0.1172 | +0.0019 | 39 | -5.25% |
| SIZE   | +0.0211 | +0.15 | 0.3632 | +0.0118 | +0.0093 | 39 | +0.97% |

**Comparison with previous run (10-02):**
- EP/BP/FCF Yield/ROE **unchanged** — TTM panel data not updated
- MOM IC micro-improved from -0.019 to -0.001, p=0.98 still completely insignificant → **momentum approximately zero in-sample, no directional signal**
- VOL stable positive, ICIR=1.07 → **low-vol anomaly persists**
- SIZE slightly up but still insignificant

## Sector Momentum Map (MOM by Sector)

| Sector | IC Mean | ICIR | p-value | Direction |
|:-------|--------:|-----:|--------:|:----------|
| Consumer Staples | +0.0960 | +0.33 | 0.17 | Momentum valid |
| Health Care | +0.1199 | +0.41 | 0.04 | Momentum valid ⚠️ Deviates from history |
| Consumer Discretionary | +0.0683 | +0.27 | 0.11 | Weak |
| Financials | -0.0500 | -0.16 | 0.34 | Negative (insignificant) |
| Industrials | -0.0256 | -0.09 | 0.59 | Negative (insignificant) |
| Information Technology | -0.1467 | -0.32 | 0.06 | Negative (marginally significant) |
| Utilities | -0.0988 | -0.83 | 0.00 | Negative ⭐ Monotonic |

### Anomaly Alerts and Interpretation

The system flagged the following "sign flip" alerts:

| Alert | Previous IC | Current IC | Interpretation |
|-------|------------:|-----------:|----------------|
| 🔴 mom / Financials positive→negative | +0.18 | -0.05 | ⚠️ Continuation — ic_history shows flip occurred ~09-22, persistently negative since |
| 🔴 mom / Information Technology positive→negative | +0.30 | -0.15 | ⚠️ Continuation — flipped ~09-23, deteriorated daily since |
| 🔴 mom / Industrials positive→negative | +0.15 | -0.03 | ⚠️ Continuation — flipped ~09-22 |
| 🔴 mom / Utilities positive→negative | +0.14 | -0.10 | ⚠️ Continuation — flipped ~08-19, persistently negative since |
| 🔴 mom / Health Care negative→positive | -0.11 | +0.12 | ✅ New signal — was long negative, now positive with p=0.04 |
| ⚠️ mom / Consumer Discretionary p-value no longer significant | 0.035 | 0.105 | ⚠️ Continuation — IC already dropped to 0.035 on 09-22 |

**Critical:** The five "🔴 positive→negative" alerts are **not today's突变**. Reviewing `ic_history.json`, Financials/IT/Industrials flipped negative around 09-22 to 09-23, Utilities flipped around 08-19. These alerts mark an existing regime, not independent risk events.

## Coverage Scope

- Sector momentum covers 7 GICS一级 sectors: Consumer Discretionary, Consumer Staples, Financials, Health Care, Industrials, Information Technology, Utilities
- Remaining sectors (Energy, Materials, Real Estate, Communication Services) had no per-sector results → likely insufficient stock count or data gaps within sample

## Strategy Implications

1. **Low-volatility remains the only robust signal**: VOL ICIR=1.07, p<0.001, Q1-Q5 long-short -5.25%. Small-cap / low-vol portfolios consistently outperformed high-vol large-caps in-sample. This is the clearest factor alpha this cycle.

2. **Momentum comprehensively失效**: Cross-market MOM IC≈0 (-0.001), p=0.98. Among 7 sectors, IT and Utilities significantly negative; Health Care the sole转正. Traditional momentum strategies currently lack statistical interpretability.

3. **Fundamental factors collectively negative but statistically significant**: EP, FCF Yield, ROE all negative with p<0.01. Q1 (low-valuation/low-profit group) outperformed Q5. This may be the flip side of a quality factor — underperformers in the sample rebounded recently, not "value rotation confirmed." Cannot infer future returns from this.

4. **Health Care momentum reversal worth tracking**: If this转正 persists across ≥2 subsequent runs, it could mark an early industry-level regime shift.

## Conclusions Not Supported

- ❌ MOM negative ≠ market must fall, nor ≡ all laggards are buyable
- ❌ SIZE insignificant ≠ no small-cap rotation across the market
- ❌ EP/FCF Yield/ROE negative ≠ value factor confirmed
- ❌ Count of negative sector values ≠ number of new reversals today (most are continuations)
- ❌ VOL ICIR=1.07 ≠ annualized strategy return; p-values not corrected for overlapping samples
- ❌ Quantile portfolio long-short not cost-adjusted; not claimable as implementable strategy return

## Statistical and Data Limitations

- Current data cut-off (10-02) matches the previous run — **no incremental data update**; result differences stem from minor changes in incremental price fetches
- MOM uses 21-day forward returns; the most recent 21 trading days (back from 10-02) cannot yet be fully evaluated → latest IC may change with subsequent data
- Ordinary t-test does not account for overlapping return autocorrelation → all p-values marked "not corrected for overlapping samples"
- ic_history baseline contains大量 repeated records from the May-June positive-momentum era; z-scores may be diluted by this
- Sector momentum does not cover all 11 GICS一级 sectors
