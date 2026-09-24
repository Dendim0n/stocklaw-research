---
title: "Factor Lab Daily Brief 2026-09-25"
date: 2026-09-25
description: "S&P 500 seven-factor cross-sectional test. Data through 2026-09-24 (same as prior run). Momentum IC=-0.09, volatility IC=+0.11 persistent and strengthening; valuation factors EP/FCF Yield remain negative IC. No new market data, existing regime continues."
---

# Factor Lab Daily Brief 2026-09-25

## Data Cutoff and Sample Design

- **Market data as-of**: 2026-09-24 (US Eastern), 2026-09-25 early morning (Beijing)
- **Price cache**: `prices_cache.parquet` last row is 2026-09-24
- **Run date**: 2026-09-25 06:31 CST
- **Prior run**: 2026-09-24 06:32 CST
- **Current and prior runs use identical market data** (price cache frozen at 09/24, TTM fundamentals unchanged)
- **Universe**: S&P 500 constituents, 502 stocks (474 valid for ROE)
- **Evaluation**: ic_mean is the mean of rolling cross-sectional Spearman rank correlations across dates, not a single-day IC; holding period is default 21-day forward return (most recent 21 trading days are incomplete)
- **Valid observations**: Fundamental factors (EP/BP/FCF Yield/ROE) n=60 cross-sections; Price factors (MOM/VOL/SIZE) n=39 cross-sections

## Seven-Factor Summary

| Factor | IC (Mean) | ICIR | p-value | Prior IC | Diff | Obs | LS(Q1-Q5) % |
|--------|----------:|-----:|--------:|--------:|-----:|----:|------------:|
| MOM    | -0.0902   | -0.40| 0.017 ⭐ | -0.0902 | 0.0000 | 39 | +2.82 |
| EP     | -0.0480   | -0.52| 0.0002 ⭐ | -0.0480 | 0.0000 | 60 | +2.98 |
| BP     | +0.0030   | +0.05| 0.728    | +0.0030 | 0.0000 | 60 | +1.13 |
| FCF Yield | -0.0352 | -0.54| 0.0001 ⭐ | -0.0352 | 0.0000 | 60 | +2.48 |
| ROE    | -0.0248   | -0.68| 0.000002 ⭐ | -0.0248 | 0.0000 | 60 | +0.76 |
| VOL    | +0.1097   | +0.94| <0.000001 ⭐ | +0.1019 | +0.0078 | 39 | -4.43 |
| SIZE   | -0.0320   | -0.30| 0.072    | -0.0430 | +0.0110 | 39 | +2.67 |

> ⭐ p < 0.05 (statistically significant). **p-values uncorrected for overlapping samples** (21-day forward returns overlap); cannot claim "highly significant, not random."
> LS = mean return of Q1 minus Q5 (sorted by factor value ascending: Q1=lowest factor, Q5=highest).

### Current vs. Prior

- **MOM**: IC unchanged at -0.0902 (same price cache). However, across 5 earlier runs, MOM IC recovered from -0.1855 (09/16) toward zero at -0.0902 — negative momentum regime weakening.
- **VOL**: IC strengthened from +0.1019 to +0.1097, ICIR=0.94, persistently positive.
- **SIZE**: IC improved from -0.0430 to -0.0320, p=0.072 approaching insignificance.
- **EP / BP / FCF Yield / ROE**: All unchanged (fundamental panel frozen).

## Sector Momentum (MOM by Sector)

| Sector | IC | ICIR | p-value | Q1-Q5 % | Status |
|--------|------:|-----:|--------:|--------:|--------|
| Consumer Discretionary | +0.025 | +0.11 | 0.497 | +1.03 | Insignificant |
| Consumer Staples | +0.016 | +0.06 | 0.725 | +2.66 | Insignificant |
| Financials | -0.131 | -0.47 | 0.006 ⭐ | +2.40 | Significant neg |
| Health Care | +0.030 | +0.10 | 0.550 | -3.30 | Insignificant |
| Industrials | -0.112 | -0.49 | 0.004 ⭐ | +4.80 | Significant neg |
| Information Technology | -0.317 | -0.92 | <0.000001 ⭐ | +11.16 | Strong neg |
| Real Estate | -0.053 | -0.18 | 0.583 | +1.21 | Insignificant |
| Utilities | -0.109 | -1.02 | <0.000001 ⭐ | +2.87 | Strong neg, monotonic |

> Covers 8 GICS sectors. Technology, Industrials, Utilities, Financials show significant negative momentum IC; Consumer and Health Care are insignificant.

## Anomaly Detection

| Signal | Detail | Nature |
|--------|--------|--------|
| 🔴 mom / Financials | IC flipped from +0.1888 to -0.1312 | Continuing: negative since 09/22 (-0.177→-0.151→-0.131) |
| 🔴 mom / Health Care | IC flipped from -0.1103 to +0.0300 | New: improving 3 sessions (-0.002→+0.013→+0.030) |
| 🔴 mom / Industrials | IC flipped from +0.1609 to -0.1123 | Continuing: negative since 09/22 |
| 🔴 mom / Information Technology | IC flipped from +0.3179 to -0.3170 | Continuing: strongly negative since 09/17, magnitude shrinking (-0.38→-0.35→-0.32) |
| 🔴 mom / Real Estate | IC flipped from +0.1354 to -0.0525 | Continuing: negative since 09/14 |
| 🔴 mom / Utilities | IC flipped from +0.1455 to -0.1092 | Continuing: negative since 09/16 |
| ⚠️ CDis / CSta MOM p-value insignificant | Was significant, now not | Continuing |
| ⚠️ Health Care IC deviation z=+3.94 | Above mean | New deviation |
| ⚠️ Real Estate IC deviation z=-5.27 | Below mean | Continuing |
| ⚠️ Utilities IC deviation z=-2.46 | Below mean | Continuing |

> Most 🔴 "flip" alerts are **continuing regime markers**, not new events. IT momentum turned negative mid-September and has persisted, though magnitude narrowed from -0.38 to -0.32.

## Strategic Implications

### Conclusions warranted

1. **Volatility factor is strongly effective**: IC=+0.11, ICIR=0.94, p<0.000001. Low-vol portfolios significantly outperformed high-vol in the sample. This is the most stable signal over recent weeks.
2. **Momentum remains negative but is recovering**: MOM IC=-0.09 (21-day holding), significant (p=0.017), but recovering from -0.186 on 09/16 toward zero at -0.090 — roughly halved. IT sector negative momentum also narrowing.
3. **Valuation factors (EP/FCF Yield) persistently negative**: High-value/high-FCF-Yield stocks underperform in current cross-section. However, fundamentals are stale — these ICs reflect older financial data + recent price moves, **not evidence that valuation premium has disappeared in the new quarter**.
4. **BP (book-to-price) is无效**: IC≈0, p=0.73, consistent with history.

### Conclusions NOT warranted

- ❌ Negative MOM ≠ market must fall. It only means 21-273 day winners underperformed losers in the sample.
- ❌ Negative SIZE ≠ small-cap rally incoming. Only weak negative correlation between market cap and forward returns.
- ❌ Negative EP/FCF Yield ≠ "value rotation confirmed". Financial data is stale (TTM panel unchanged).
- ❌ "Significant" p-values do not equal tradeable strategy returns — uncorrected for overlap, no transaction costs, no sector concentration risk.
- ❌ Count of negative sector momentum ICs (4) ≠ "new reversals today"; most are continuing signals.

## Statistical and Data Limitations

1. **No data update**: Current and prior runs use identical price cache (09/24) and TTM panel. Fundamental factors have identical ic_mean across all recorded runs.
2. **Overlapping return autocorrelation**: 21-day forward returns overlap横截面-wise. Reported p-values are **not HAC/Newey-West corrected**.
3. **IC definition**: ic_mean is mean rolling cross-sectional rank correlation, not single-day IC, not a forward return forecast, not a downside probability.
4. **ICIR is not Sharpe**: ICIR = ic_mean / ic_std measures factor stability, not strategy Sharpe ratio or annualized return.
5. **Quantile direction**: LS = mean(Q1) - mean(Q5), where Q1=lowest factor value, Q5=highest. Interpret directionally with factor sign.
6. **Sector coverage**: 8 GICS sectors; Real Estate and Utilities have fewer constituents, lower IC estimation precision.

---

*Data: yfinance prices + TTM fundamental panel, S&P 500 constituents. Factor Lab v2.0.*
*Charts: [/charts/factor-ic-2026-09-25.png](/charts/factor-ic-2026-09-25.png) | [/charts/sector-mom-2026-09-25.png](/charts/sector-mom-2026-09-25.png)*
