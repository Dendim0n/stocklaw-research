---
title: "Factor Lab Daily Brief 2026-10-09"
date: 2026-10-09
description: "S&P 500 7-factor IC test: Momentum微弱正（IC=+0.055, p=0.248）；Volatility negative relation strongest signal (ICIR=1.07, p<0.0001); EP/FCF Yield/ROE persist negative. Sector-level: Health Care momentum reversed to +0.166 (z=4.7), IT momentum turned negative, Utilities momentum turned negative. Fundamental factors frozen since 10/3 due to unchanged TTM earnings panel."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-09

## Data Cutoff & Sample

| Item | Value |
|------|-------|
| Price data as of | 2026-10-08 (Wednesday) |
| Fundamental panel as of | Consistent with prior run (TTM earnings unchanged) |
| S&P 500 constituents | 502 stocks (474 for ROE) |
| Evaluation window | EP/BP/FCF Yield/ROE: 60 cross-sectional observations; MOM/VOL/SIZE: 39 observations |
| Holding period | MOM/VOL/SIZE: default 21-day forward returns |

**Note**: October 5 (Columbus Day) market closure meant fewer trading days than normal. Price cache updated to 10/08, but fundamental factors (EP/BP/FCF Yield/ROE) have been identical since 10/03—the TTM financial panel has not changed, so these 4 factors have no daily variation in this window.

## Cross-Run Data Repetition

| Run Date | Prices Updated | EP/BP/FCF/ROE IC | MOM IC |
|----------|---------------|-------------------|--------|
| 2026-10-03 | ✓ | -0.0480 / +0.0030 / -0.0352 / -0.0248 | -0.0012 |
| 2026-10-06 | ✓ (1 day only) | Same | +0.0158 |
| 2026-10-07 | ✓ | Same | +0.0304 |
| 2026-10-08 | ✓ | Same | +0.0433 |
| **2026-10-09** | ✓ | Same | **+0.0549** |

The 4 fundamental factors are identical across 5 consecutive runs—not factor failure, but TTM earnings unchanged.

## Seven-Factor Summary

| Factor | IC Mean | ICIR | p-value | Prior IC | Delta | Observations | Signal |
|--------|---------|------|---------|----------|-------|--------------|--------|
| **MOM** | +0.0549 | +0.1905 | 0.248 | +0.0433 | +0.0116 | 39 | ⚪ Weak positive, insignificant |
| **EP** | -0.0480 | -0.5196 | 0.0002 | -0.0480 | 0.0000 | 60 | 🔴 Persistently significant negative |
| **BP** | +0.0030 | +0.0456 | 0.728 | +0.0030 | 0.0000 | 60 | ⚪ Ineffective |
| **FCF Yield** | -0.0352 | -0.5390 | 0.0001 | -0.0352 | 0.0000 | 60 | 🔴 Persistently significant negative |
| **ROE** | -0.0248 | -0.6845 | 0.000002 | -0.0248 | 0.0000 | 60 | 🔴 Persistently significant negative |
| **VOL** | +0.1183 | +1.0698 | <0.0001 | +0.1191 | -0.0008 | 39 | ⭐ Persistently strong positive (low-vol premium) |
| **SIZE** | +0.0531 | +0.3272 | 0.051 | +0.0457 | +0.0074 | 39 | ⚪ Borderline significant positive |

**Notes**：
- IC = Spearman rank correlation, averaged across all valid cross-sectional observations. Positive IC = higher factor value associates with higher subsequent returns.
- p-values from ordinary t-test, **not corrected for overlapping returns**. MOM/VOL/SIZE use 21-day forward returns with 20-day overlap; actual p-values should exceed reported values.
- ICIR = IC mean / IC std, reflects factor stability, not strategy Sharpe or annualized return.
- SIZE p=0.051 sits at conventional 0.05 edge; without overlap correction, cannot claim "significant."

## Sector Momentum Table (MOM Decomposition)

| Sector | IC Mean | ICIR | p-value | Stocks | Prior IC | Delta | Signal |
|--------|---------|------|---------|--------|----------|-------|--------|
| Consumer Discretionary | +0.1074 | +0.4049 | 0.017 | 48 | — | — | ⭐ Significant positive |
| Consumer Staples | +0.1476 | +0.5272 | 0.002 | 36 | — | — | ⭐ Significant positive |
| Financials | -0.0177 | -0.0569 | 0.728 | 76 | — | — | ⚪ Insignificant |
| Health Care | **+0.1657** | **+0.6716** | **0.0002** | 59 | -0.1005 | **+0.2662** | 🔴 Reversal (elevated) |
| Industrials | +0.0382 | +0.1238 | 0.450 | 79 | — | — | ⚪ Insignificant |
| Information Technology | **-0.0508** | -0.1087 | 0.507 | 73 | +0.2939 | **-0.3447** | 🔴 Reversal (no longer significant) |
| Utilities | **-0.0866** | -0.7358 | 0.0001 | 31 | +0.1337 | **-0.2203** | 🔴 Reversal (significant negative) |

**Sector coverage**: 7 GICS sub-sectors, 402 stocks combined (~98 S&P 500 constituents excluded due to insufficient MOM data).

**Anomaly alert interpretation**：
- **Health Care MOM reversed from negative to positive**: historical mean -0.1005, current +0.1657, z=+4.70. Flagged as "reversal," but ic_history shows Health Care MOM fluctuated in negative territory for extended period; this positive deviation is a regime shift, not a daily shock.
- **IT MOM reversed from positive to negative**: historical mean +0.2939, current -0.0508. But p=0.507 insignificant, and IT momentum has been low recently—this is continuation of existing weakness.
- **Utilities MOM reversed from positive to negative**: p=0.000056 significant, ICIR=-0.74 highest absolute value across all sectors. Low-momentum reversal most robust in utilities.
- **Financials / Industrials**: p-values turned insignificant, but IC absolute values always small (<0.04), not new signals.

## Quantile Portfolio Returns (Q1=lowest factor group, Q5=highest)

| Factor | Q1 | Q2 | Q3 | Q4 | Q5 | Q1-Q5 | Direction |
|--------|-----|-----|-----|-----|-----|-------|-----------|
| MOM | -0.63% | -2.30% | -1.82% | -2.26% | +0.80% | -1.43% | Q5 > Q1 |
| EP | +5.40% | +2.86% | +1.87% | +1.04% | +2.41% | +2.98% | Q1 > Q5 |
| FCF Yield | +4.94% | +3.33% | +0.80% | +2.04% | +2.46% | +2.48% | Q1 > Q5 |
| ROE | +4.65% | +1.72% | +1.84% | +1.63% | +3.89% | +0.76% | Weak monotonicity |
| VOL | -3.34% | -2.12% | -1.31% | -1.61% | +2.17% | -5.50% | Q1 < Q5 |
| SIZE | -1.23% | -2.21% | -0.71% | -0.97% | -1.10% | -0.14% | No monotonicity |

**Note**: Sample-inside average cross-sectional long-short returns, **not net of transaction costs**. Not directly implementable strategy returns.

## Implications for Strategy

1. **Volatility factor (Low Vol) remains the strongest signal**: ICIR=1.07, p<0.0001, 82.1% of cross-sectional observations show positive IC. Low-vol stocks consistently outperform high-vol. This is the most stable signal currently.

2. **Momentum weak overall but structurally divergent**: Aggregate MOM IC=+0.055 positive and rising day-by-day (-0.001→+0.055), but not yet significant. Key divergence by sector: Consumer Discretionary/Staples and Health Care momentum effective; IT momentum turned slightly negative and insignificant; Utilities shows significant negative momentum (reverse momentum effective).

3. **Fundamental quality factors persistently ineffective**: EP, FCF Yield, ROE all negative and statistically significant. This does not mean "value rotation" is confirmed—it indicates high-earnings/high-FCF/high-ROE stocks underperformed their low-counterparts over the trailing 21 days. This may reflect recent price adjustment (high-valuation growth correction), not permanent factor失效.

4. **BP (book value) remains ineffective**: IC=+0.003, p=0.728, no informational content.

5. **SIZE near threshold**: p=0.051 at edge, IC rising daily from +0.021 to +0.053. Large over small shows微弱 advantage, but interpret cautiously (overlap correction may push p>0.05).

## Conclusions Not Supported

- ❌ MOM positive ≠ market must rise tomorrow. IC is cross-sectional rank association, not directional prediction.
- ❌ EP/FCF/ROE negative ≠ value stocks about to bounce. This is a statistical result over the past 60 (or 39) cross-sections.
- ❌ 3 sector momentum alerts ≠ independent risk event. These are continuations of existing regime (ic_history shows IT momentum has been low since late August).
- ❌ SIZE p=0.051 ≠ "significant large-cap advantage." Not overlap-corrected.
- ❌ Quantile Q1-Q5 returns ≠ tradeable strategy returns. Costs not deducted, no turnover assumption.

## Statistical & Data Limitations

| Limitation | Description |
|------------|-------------|
| Overlapping returns | MOM/VOL/SIZE use 21-day rolling forward returns with 20-day overlap. Ordinary t-test underestimates standard error; reported p-values are lower-bound estimates. |
| Incomplete evaluation window | Latest 21 trading days (through 10/08) forward returns not yet fully realized; latest cross-sectional IC evaluation incomplete. |
| Fundamental freeze | EP/BP/FCF/ROE unchanged since 10/03 due to unchanged TTM panel. These 4 factors' ic_mean based on 60 observations, but recent observations have identical factor values. |
| Incomplete sector coverage | MOM sector decomposition covers 7 sub-sectors, 402 stocks. ~98 S&P 500 constituents excluded due to insufficient MOM data. |
| IC definition | ic_mean is historical cross-sectional average rank correlation, not daily IC, not future return forecast, not down probability. |
| ICIR | IC mean / IC std, reflects factor stability, not Sharpe ratio. |
