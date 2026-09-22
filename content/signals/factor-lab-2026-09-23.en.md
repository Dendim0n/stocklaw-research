---
title: "Factor Lab Daily Brief 2026-09-23"
date: 2026-09-23
description: "S&P 500 seven-factor cross-sectional test: pricing as of 2026-09-22. Momentum (IC=-0.13), FCF Yield (-0.035), ROE (-0.025)延续 negative; EP=-0.048 turns more negative; BP remains useless; VOL strongest positive (+0.093). 4/8 sector momentum negative, IT drags deepest (-0.38). Regime continuation, not a new-day突变."
tags: [factor-lab, quant, sp500]
---

# Factor Lab Daily Brief 2026-09-23

## Data Overview

| Item | Value |
|------|-------|
| Pricing as-of | 2026-09-22 (Tuesday, US trading day) |
| Price cache coverage | 2024-02-26 ~ 2026-09-22 |
| Universe | 502 stocks (fundamental: 474–502) |
| Evaluation window | 60 cross-sectional observations (fundamental) / 39 (price factors) |
| Holding period | 21-day forward return (MOM/VOL/SIZE: only 39 complete windows) |
| Run timestamp | 2026-09-23 06:31 CST |

## Seven-Factor Summary

IC = Spearman rank correlation (factor value vs. 21-day forward return); ICIR = IC mean / IC std; p-value = ordinary t-test (unadjusted for overlapping-sample autocorrelation); Long-Short = Q1 mean return − Q5 mean return (code computes Q1−Q5; positive means low-factor group outperforms high-factor group).

| Factor | IC | ICIR | p-value | Prev IC (09-22) | Δ | Obs | Signal |
|--------|-----|------|---------|-----------------|-----|-----|--------|
| MOM | -0.1290 | -0.64 | 0.0003 | -0.1468 | +0.018 | 39 | 🔴 Momentum reversal ongoing |
| EP | -0.0480 | -0.52 | 0.0002 | -0.0480 | 0.000 | 60 | 🔴 Profitability premium negative |
| FCF Yield | -0.0352 | -0.54 | 0.0001 | -0.0352 | 0.000 | 60 | 🔴 Cash-flow premium negative |
| ROE | -0.0248 | -0.68 | <0.0001 | -0.0248 | 0.000 | 60 | 🔴 ROE factor negative |
| SIZE | -0.0527 | -0.58 | 0.0010 | -0.0595 | +0.007 | 39 | 🔴 Size factor negative |
| VOL | +0.0928 | +0.72 | <0.0001 | +0.0861 | +0.007 | 39 | 🟢 Low-vol anomaly |
| BP | +0.0030 | +0.05 | 0.728 | +0.0030 | 0.000 | 60 | ⚪ Ineffective |

**Note:** 09-22 and 09-23 results are highly consistent (fundamental factors identical; MOM/VOL/SIZE differ only in second decimal), as both use the same price cache ending 09-22. MOM recovered slightly from −0.1468 to −0.1290 (Δ = +0.018), not a regime switch.

## Continuation of Existing State

- **Momentum persistently negative:** MOM IC = −0.13, holding negative territory across multiple sessions. The IC history baseline includes a positive-momentum era (mean +0.1 to +0.4) in May–June; after flipping negative in late August, the "positive-to-negative" alarm has fired continuously. Current IC = −0.129 is the same order as prior −0.147 — regime continuation.
- **Value factors collectively negative:** EP, FCF Yield, ROE all negative with p < 0.001, meaning high-profit/high-cash-flow/high-ROE groups underperformed low groups in this cross-section. This is not evidence that "value rotation is confirmed" — low-valued, low-cash-flow stocks simply have stronger short-term rebounds in the current截面.
- **SIZE negative:** Small caps outperformed large caps in this sample; cannot extrapolate to a sustained small-cap regime.
- **BP persistently useless:** IC = 0.003, p = 0.728 — book value does not predict future returns.
- **VOL stable positive:** IC = +0.093, ICIR = +0.72, the strongest signal across all factors. High-volatility stocks have higher average short-term returns — contradicts the "low-vol anomaly" literature, but the截面 IC only states correlation direction.

## Sector Momentum (MOM by Sector)

| Sector | IC | ICIR | p-value | N stocks | Signal |
|--------|-----|------|---------|----------|--------|
| Information Technology | -0.3833 | -1.24 | <0.0001 | 73 | 🔴 Deepest momentum reversal |
| Financials | -0.1766 | -0.65 | 0.0003 | 76 | 🔴 Positive-to-negative continuation |
| Industrials | -0.1529 | -0.74 | 0.0001 | 79 | 🔴 Positive-to-negative continuation |
| Utilities | -0.1020 | -0.95 | 0.0000 | 31 | 🔴 Positive-to-negative continuation |
| Consumer Discretionary | +0.0126 | +0.06 | 0.716 | 48 | ⚪ Not significant |
| Consumer Staples | -0.0027 | -0.01 | 0.950 | 36 | ⚪ Not significant |
| Health Care | -0.0019 | -0.01 | 0.970 | 59 | ⚪ Not significant |
| Real Estate | -0.0050 | -0.02 | 0.953 | 31 | ⚪ Not significant (only 13 obs) |

**Coverage:** All 8 GICS sectors reported; Real Estate has only 13 valid IC observations (low reliability).

**Anomaly alert interpretation:**
- Financials, Industrials, IT, Utilities "positive-to-negative" alarms are regime markers — ic_history shows these sectors were positive in May–June and flipped negative in August, firing continuously since.
- Health Care IC deviates from historical mean (z = +3.24)偏高, but absolute value is only −0.002 and not significant — practically meaningless.
- Real Estate IC deviates from historical mean (z = −4.38)偏低, but only 13 observations — unreliable.
- CD and Consumer Staples p-values went from significant to not significant — statistical power declining.

## Strategic Implications

1. **Momentum unusable currently:** IT sector IC = −0.38 extreme negative, Q1−Q5 = +14.49% (low-momentum groups far outperform high-momentum). Chasing strength is counterproductive in tech; short-momentum strategies are effective in IT currently.
2. **Value factors short-term失效:** EP/FCF Yield/ROE all negative means "buy low valuation" underperforms "buy high valuation" over 21-day holding. This is not long-term evidence of value investing失效 —截面 correlation ≠ long-term holding returns.
3. **VOL the only stable positive factor:** ICIR = 0.72, highest across all factors. The high-vol = high-short-term-return correlation is strongest in this regime.
4. **Significant sector divergence:** IT/Industrials/Financials/Utilities momentum deeply negative; discretionary and staples虽不显著 but slightly positive — defensive consumer sectors may be relatively resilient.

## Conclusions That Cannot Be Drawn

- ❌ MOM negative ≠ market must decline. It only means winners (over the past 1 year) underperformed losers subsequently in this sample.
- ❌ SIZE negative ≠ confirmed broad small-cap rally.
- ❌ EP/FCF Yield/ROE negative ≠ value rotation confirmed — 21-day horizon too short;截面 correlation ≠ long-term alpha.
- ❌ "4 sectors flipped positive-to-negative" ≠ a new-day risk event. This is the continuation of the late-August regime shift, firing continuously in ic_history for many days.
- ❌ p < 0.001 does not mean "highly certain." Ordinary t-test does not adjust for overlapping-return autocorrelation; p-values labeled "unadjusted," actual significance may be lower.
- ❌ ICIR ≠ strategy Sharpe ratio or annualized return.

## Statistical & Data Limitations

- Fundamental factors (EP/BP/FCF Yield/ROE) use 60 cross-sectional observations; price factors (MOM/VOL/SIZE) only 39 complete windows (require 273-day lookback + 21-day forward).
- p-values from ordinary t-test; 21-day forward returns overlap, autocorrelation unadjusted.
- Quantile portfolio returns unadjusted for transaction costs — not callable achievable strategy returns.
- Sector decomposition uses GICS mapping only, not full market sector-neutralization.

---

**Charts:**
- Factor IC distribution: [/charts/factor-ic-2026-09-23.png](/charts/factor-ic-2026-09-23.png)
- Sector momentum: [/charts/sector-mom-2026-09-23.png](/charts/sector-mom-2026-09-23.png)
