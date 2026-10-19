---
title: "Factor Lab Daily Brief 2026-10-20"
date: 2026-10-20
description: "S&P 500 seven-factor IC test: no new market data this run (prices end 2026-10-16; 10-19 missing), so all seven factor readings are bit-identical to 2026-10-17 and represent continuation of existing regimes, not new reversals. MOM +0.1063 (ICIR 0.42), VOL +0.0907 (ICIR 0.81, decaying since 10-09), SIZE +0.0934 (log-price proxy); EP/BP/FCF Yield/ROE have been frozen for 42 run days because the fundamental panel ends 2026-05-28. Sector momentum: Consumer Staples +0.218, Health Care +0.201, Consumer Discretionary +0.164 positive; Utilities -0.075, Financials -0.022."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-20

## Data cut-off, sample and evaluation basis

| Item | Value |
|------|-------|
| Run date | 2026-10-20 (Tuesday) 06:30 CST |
| **Price (cache) cut-off** | **2026-10-16 (Friday close)** |
| Missing trading day | 2026-10-19 (Monday, a normal session) — **1 day** |
| Universe | 502 S&P 500 constituents (503 in the fundamental panel; 474 with valid ROE) |
| Price-factor evaluation window | 2026-07-24 → 2026-09-17, **39 valid cross-sections** |
| Fundamental-factor evaluation window | 2026-03-04 → 2026-05-28, **60 valid cross-sections** |
| Holding period | 21 trading-day forward return |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the average over those 39/60 historical cross-sections |

**No new market data was obtained.** On this run, DNS resolution and outbound HTTPS were entirely unavailable on this host (no Yahoo record resolution, HTTP 000), and yfinance retried 503 tickers without finishing the download stage within 600 seconds. The test was therefore recomputed from the local cache (ending 2026-10-16) using the same functions, **without modifying the script and without appending a record to `ic_history`**. The price cut-off now lags the latest session by one trading day (10-19 close missing).

**Cut-off date and last evaluable date differ**: a 21-day forward return requires 21 trading days after the cross-section date, so the latest evaluable factor date is **2026-09-17**; the following 21 sessions (09-18 through 10-16) cannot yet be evaluated.

**The four fundamental factors remain frozen**: the panel `combined_panel.pkl` ends 2026-05-28 and no scheduled job refreshes it. EP/BP/FCF Yield/ROE readings have been bit-identical for 41 consecutive run days since **2026-08-27**; today is the 42nd identical reading.

## What is new vs. what continues

**New: nothing.** This run and the 2026-10-17 run use the same price data (both ending 2026-10-16). All seven factors are **bit-identical** in `ic_mean`, `icir`, p-value, valid observation count and stock count, and all seven sector ICs differ by 0.0000. This is a second read of the same data, not evidence that momentum is strengthening further or that the volatility factor is still decaying.

**Continuation of existing regimes (all weeks to months old, not today's changes)**

| Factor | Current sign | Actual sign-change date | Age |
|--------|--------------|-------------------------|-----|
| MOM | positive | 2026-10-06 (negative → positive) | 2 weeks |
| SIZE | positive | 2026-10-01 (negative → positive) | ~3 weeks |
| VOL | positive | 2026-08-29 (negative → positive) | ~7 weeks |
| BP | ≈0, marginally positive | 2026-08-27 | — |
| EP / FCF Yield / ROE | negative | never turned positive in 131 run days | — |

The anomaly check raised **no alarms** on the seven plain factors — because today's readings are identical to the last baseline record (10-17), giving z = 0. No alarm does not mean "the factors are healthy"; it means the readings did not move. **No sector-level reversals were newly recorded today**; two negative-sector readings (Financials, Utilities) are not two new reversal events.

## Full seven-factor table

| Factor | IC mean | ICIR | p-value | Prior IC (10-17) | Change | Valid obs | Status |
|--------|---------|------|---------|------------------|--------|-----------|--------|
| **MOM** | +0.1063 | +0.4195 | 0.0137 | +0.1063 | 0.0000 | 39 sections | Positive (since 10-06) |
| **EP** | -0.0480 | -0.5196 | 0.0002 | -0.0480 | 0.0000 | 60 sections | ⏸ frozen values |
| **BP** | +0.0030 | +0.0456 | 0.7276 | +0.0030 | 0.0000 | 60 sections | ⏸ frozen, indistinguishable from zero |
| **FCF Yield** | -0.0352 | -0.5390 | 0.0001 | -0.0352 | 0.0000 | 60 sections | ⏸ frozen values |
| **ROE** | -0.0248 | -0.6845 | 0.000002 | -0.0248 | 0.0000 | 60 sections | ⏸ frozen values |
| **VOL** | +0.0907 | +0.8060 | 0.000015 | +0.0907 | 0.0000 | 39 sections | Positive (since 08-29) |
| **SIZE** | +0.0934 | +0.5474 | 0.0017 | +0.0934 | 0.0000 | 39 sections | ⚠ log(price) proxy |

IC path over the last five run days (the stall is visible):

| Run date | MOM | VOL | SIZE | EP | BP | FCF Yield | ROE |
|----------|-----|-----|------|-----|-----|-----------|-----|
| 2026-10-09 | +0.0549 | +0.1183 | +0.0531 | -0.0480 | +0.0030 | -0.0352 | -0.0248 |
| 2026-10-15 | +0.0876 | +0.1040 | +0.0791 | -0.0480 | +0.0030 | -0.0352 | -0.0248 |
| 2026-10-16 | +0.0980 | +0.1008 | +0.0866 | -0.0480 | +0.0030 | -0.0352 | -0.0248 |
| 2026-10-17 | +0.1063 | +0.0907 | +0.0934 | -0.0480 | +0.0030 | -0.0352 | -0.0248 |
| **2026-10-20** | **+0.1063** | **+0.0907** | **+0.0934** | -0.0480 | +0.0030 | -0.0352 | -0.0248 |

Average quantile-portfolio returns (in-sample cross-sectional average, %, **before costs**; the direction is the code's actual `Q1 − Q5`, i.e. low-factor bucket minus high-factor bucket):

| Factor | Q1 | Q2 | Q3 | Q4 | Q5 | Q1−Q5 |
|--------|-----|-----|-----|-----|-----|-------|
| MOM | -2.437 | -2.920 | -2.412 | -2.465 | +0.609 | -3.046 |
| VOL | -3.462 | -2.646 | -2.224 | -2.517 | +1.220 | -4.682 |
| SIZE | -2.615 | -2.778 | -1.562 | -1.611 | -1.055 | -1.560 |
| EP | +5.395 | +2.858 | +1.873 | +1.039 | +2.413 | +2.982 |
| BP | +4.056 | +3.451 | +1.149 | +1.996 | +2.925 | +1.132 |
| FCF Yield | +4.941 | +3.332 | +0.802 | +2.038 | +2.465 | +2.476 |
| ROE | +4.649 | +1.722 | +1.840 | +1.634 | +3.885 | +0.763 |

## Sector momentum (MOM by GICS)

| Sector | IC mean | ICIR | p-value | Prior IC | Change | Stocks | Sign since |
|--------|---------|------|---------|----------|--------|--------|------------|
| Consumer Staples | +0.2179 | +0.9115 | 0.000002 | +0.2179 | 0.0000 | 36 | positive (since 09-24) |
| Health Care | +0.2007 | +1.0418 | ≈0 (<1e-6) | +0.2007 | 0.0000 | 59 | positive (since 09-24) |
| Consumer Discretionary | +0.1637 | +0.6874 | 0.0001 | +0.1637 | 0.0000 | 48 | positive (since 09-22) |
| Industrials | +0.0969 | +0.3373 | 0.0444 | +0.0969 | 0.0000 | 79 | positive (since 10-07) |
| Information Technology | +0.0202 | +0.0460 | 0.7783 | +0.0202 | 0.0000 | 73 | ≈0 (marginally positive since 10-15) |
| Financials | -0.0217 | -0.0719 | 0.6601 | -0.0217 | 0.0000 | 76 | negative (since 08-19) |
| Utilities | -0.0748 | -0.7094 | 0.0001 | -0.0748 | 0.0000 | 31 | negative (since 08-19) |

Each sector has 39 cross-sections. **Coverage**: 7 GICS sectors, 402 stocks in total (80% of the 502-stock universe). Not included: Communication Services (22), Energy (21) and Materials (26) fall below the code's 30-stock per-section floor; Real Estate produced zero IC observations this run (its last successful decomposition was 2026-09-26). Sector conclusions apply only to these 7 sectors and cannot be extrapolated to market-wide rotation.

## Implications for strategy

1. **This report carries no new factor information.** MOM +0.1063, VOL +0.0907 and SIZE +0.0934 are a second read of the same 10-16 prices. Using "momentum is now positive" as a reason to add exposure requires waiting for 10-19 and later data to enter the cache so the window actually advances.

2. **The momentum recovery is still an artefact of the rolling window, not a confirmed market structure.** The current 39 cross-sections span 2026-07-24 → 2026-09-17; the rise from +0.0549 (10-09) to +0.1063 came mainly from late-July negative-IC sections rolling out of the window. The IC series has AR(1) = 0.92, so overlap is severe and p = 0.0137 is only a lower bound — it cannot be called "highly significant".

3. **VOL still has the highest ICIR (0.81) of the seven, but its strength is decaying**: +0.1183 (10-09) → +0.0907 (today), a ~23% drop over 30 run days. The in-sample relation remains "high-volatility bucket subsequently outperforms, low-volatility bucket lags" (Q5 +1.22% vs Q1 −3.46%), the opposite of the common "low volatility is safer" intuition; that is a property of this particular window, not a risk-control principle.

4. **The four fundamental factors currently provide no information about the present.** EP −0.048 / FCF Yield −0.035 / ROE −0.025 describe cross-sections from 2026-03 to 2026-05 and have been frozen for nearly five months; they cannot explain today's market and are not evidence that value has been abandoned. Restoring their usefulness requires rebuilding the fundamental panel (`fetch_fundamental_panel.py`, currently unscheduled).

5. **The usable sector dispersion remains "Consumer Staples / Health Care / Consumer Discretionary strongly positive, Utilities negative".** The first three have ICIR of 0.69–1.04; Utilities has ICIR −0.71 (low-momentum names outperform, i.e. a laggard-bounce structure inside the sector); Financials and IT sector momentum is close to zero and offers no discrimination. These readings are identical to 10-17 and are not new information.

6. **SIZE cannot be used as a market-cap factor**: `build_size_panel(prices)` receives no share counts, so the factor value is log(price), mechanically correlated with momentum.

## What cannot be concluded

- ❌ Positive MOM ≠ the index must rise, and it does not imply recent laggards are undervalued. IC is a cross-sectional rank association with no directional forecast.
- ❌ "Readings unchanged" ≠ factors are stable; it only means the price data did not advance.
- ❌ Positive SIZE ≠ a small-cap or large-cap regime; the factor is a price-level proxy in this run.
- ❌ Negative EP / FCF Yield / ROE ≠ value rotation confirmed or refuted; those numbers come from a static sample ending in late May.
- ❌ No anomaly alarm ≠ the seven factors are healthy; z = 0 today because readings match the last baseline record exactly.
- ❌ p-values are uncorrected for overlapping-sample autocorrelation (AR(1) 0.77–0.97); "highly significant, not random noise" is not a valid claim. ICIR ≠ strategy Sharpe and ≠ annualised return.
- ❌ Quantile long-short returns are before costs and assume no turnover; they are not realisable strategy returns.
- ❌ This report issues no buy or sell instructions.

## Statistical and data limitations

| Limitation | Detail |
|------------|--------|
| Prices not updated | Prices end 2026-10-16; 2026-10-19 is missing. The outage (DNS + HTTPS both unavailable) prevented retrieval and no alternative source was used for cross-validation |
| Overlapping returns | 21-day forward returns overlap by 20 days between adjacent sections; IC AR(1): MOM +0.92 / VOL +0.77 / SIZE +0.97. A plain t-test understates the standard error, so reported p-values are lower bounds |
| Window mismatch | Price cut-off is 2026-10-16 but the latest evaluable section is 2026-09-17; the following 21 sessions cannot be evaluated |
| Fundamental freeze | Panel ends 2026-05-28; the four factors have been bit-identical for 41 run days since 2026-08-27 |
| Baseline duplicates | `ic_history` holds 131 distinct dates but 246 records; for fundamental factors 127 of 130 adjacent date pairs are identical, versus 90 of 130 for price factors. The z-score baseline is dominated by a single regime and its effective sample is overstated |
| No baseline write today | To avoid appending an observation identical to 10-17, this run added no `ic_history` record; the anomaly baseline still ends at 10-17 |
| Partial sector coverage | Only 7 sectors and 402 stocks; Communication Services / Energy / Materials fall below the sample floor and Real Estate had no valid section this run |
| Factor definitions | MOM is 12-1 month momentum (price[t-21]/price[t-273]−1); VOL is 60-day annualised volatility; SIZE is effectively log(price) |
| Meaning of ic_mean | Average rank correlation across historical cross-sections — not today's IC, not a forward-return forecast, not a probability of decline |

![Factor IC comparison](/charts/factor-ic-2026-10-20.png)

![Sector momentum decomposition](/charts/sector-mom-2026-10-20.png)

*Charts are built from this run's results (`analyses/factor_lab/factor_test_20261020_0630.json`, `..._per-sector.json`); price data ends 2026-10-16.*
