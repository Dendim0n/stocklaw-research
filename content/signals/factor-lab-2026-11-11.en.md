---
title: "Factor Lab Daily Brief 2026-11-11"
date: 2026-11-11
description: "Fifth run day on the same price snapshot ending 2026-11-04: the 11-05, 11-06, 11-09 and 11-10 US closes were all unavailable (yfinance 429), so all seven factor readings and all seven sector momentum readings are bit-identical to the 11-10 run, difference 0.000000. Over that gap the S&P 500 fell 2.18% from its 11-04 close, including a -4.36% single session on 11-05 - none of which has entered any IC reading yet. The latest evaluable cross-section remains 2026-10-06. The fundamental panel was rebuilt on 11-05, so the four EP/BP/FCF/ROE z-alerts are caliber breaks; new factor-level and sector-level sign reversals this run: zero."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-11

## 1. Data cutoff, sample and evaluation conventions

| Item | Value |
|------|-----|
| Run date | 2026-11-11 (Wed) 06:44 CST = 2026-11-10 (Tue) 17:44 EST |
| **Price cache cutoff** | **2026-11-04 (Wed close)** - 677 rows x 502 columns (from 2024-02-26) |
| New trading days this run | **0** (11-05 Thu, 11-06 Fri, 11-09 Mon, 11-10 Tue all unavailable) |
| Reason | `yf.download` returned `YFRateLimitError` on all sample tickers; `curl query1.finance.yahoo.com` -> **HTTP 429**, `curl_cffi` browser-fingerprint path -> **403**; DNS resolves normally (198.18.1.138, proxied) - **not a network outage** |
| Last run that obtained a new close | 2026-11-05 06:41 |
| Fundamental panel | Built 2026-11-05 08:49, financials through **2026-11-04**, 500 names (5 days old - **refreshed within the last 7 days**) |
| Share-count cache | `shares_cache.json` rebuilt 2026-11-05 08:56; SIZE is `log(price x total shares)` from 11-06 onward |
| Sample | Prices 502 names; fundamentals valid 488 (EP/BP/FCF), 459 (ROE) |
| Evaluation window (all seven factors) | **2026-08-12 -> 2026-10-06, 39 valid cross-sections each** |
| Holding period | 21 trading days forward return (script default, unchanged this run) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average** over those 39 historical cross-sections - not today's IC, not a forward return, not a probability of decline |

**Price cutoff is not the same as the last evaluable date.** A 21-day forward return requires 21 trading days after a cross-section, so the latest evaluable cross-section is **2026-10-06** (`prices.index[-22]`). The 21 sessions from 10-07 to 11-04 are already in the cache but only suffice to settle the 10-06 cross-section; nothing after 11-05 has been fetched at all.

## 2. New information vs. continuation of an existing state

**Conclusion: zero new observations.** Every reading for the seven factors and seven sector momentum series is bit-identical to the 2026-11-10 run, difference 0.000000; new genuine sign reversals are 0 at factor level and 0 at sector level.

| Factor | IC (11-10 run) | IC (this run) | Diff | Nature |
|------|------:|------:|------:|------|
| MOM | +0.062494 | **+0.062494** | 0.000000 | No new prices, existing state continues |
| EP | -0.006821 | **-0.006821** | 0.000000 | Same |
| BP | -0.088770 | **-0.088770** | 0.000000 | Same |
| FCF Yield | -0.002813 | **-0.002813** | 0.000000 | Same |
| ROE | +0.052257 | **+0.052257** | 0.000000 | Same |
| VOL | -0.021198 | **-0.021198** | 0.000000 | Same |
| SIZE | +0.060134 | **+0.060134** | 0.000000 | Same |

**This is the fifth run day on one snapshot ending 2026-11-04.** After 11-05 06:41 pulled in the 11-04 close, the 11-06, 11-07, 11-10 and 11-11 runs all landed on the same cache. MOM and VOL have been unchanged since 11-05; SIZE changed once on 11-06 because the share-count cache was rebuilt at 11-05 08:56 (caliber switch from log price to true market cap), not because prices moved.

### What actually happened during that gap

The cache stops at 11-04, and 11-05 turned out to be the largest single-day drop of the stretch. Three independent sources (Tencent `usfqkline`, Longbridge `.SPX.US` daily, Sina `gb_$inx` snapshot) agree on the closes:

| Date | SPX close | Day | NDX close | Day |
|------|------:|------:|------:|------:|
| 2026-11-04 | 7,688.62 | +1.58% | 28,437.17 | +0.91% |
| 2026-11-05 | 7,353.73 | **-4.36%** | 26,629.81 | **-6.36%** |
| 2026-11-06 | 7,376.86 | +0.31% | 26,989.99 | +1.35% |
| 2026-11-09 | 7,549.94 | +2.35% | 27,907.63 | +3.40% |
| 2026-11-10 | 7,520.93 | -0.38% | 27,740.80 | -0.60% |

Cumulative since the 11-04 close: SPX **-2.18%**, NDX **-2.45%**.

**Not one of those four candles has entered any factor reading.** When prices resume, the window will roll in four cross-sections at once and every price-based factor will jump visibly - that is backfill, not a regime break, and should be written up as the "first new snapshot" rather than a factor turn.

## 3. Full seven-factor table (21-day holding, cross-sectional rank IC)

| Factor | IC mean | ICIR | Prior IC | Diff | Valid obs | Share of positive IC | p (unadjusted) | NW t (recomputed) | Long-short Q1-Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|-----:|
| MOM (12-1 month momentum) | **+0.0625** | +0.2145 | +0.0625 | 0.0000 | 39 | 53.8% | 0.1940 | +0.42 | -0.79% |
| EP (earnings yield) | **-0.0068** | -0.0385 | -0.0068 | 0.0000 | 39 | 48.7% | 0.8137 | -0.10 | -0.42% |
| BP (book-to-price) | **-0.0888** | -0.6087 | -0.0888 | 0.0000 | 39 | 38.5% | 0.0006 | -2.05 | +1.13% |
| FCF Yield | **-0.0028** | -0.0150 | -0.0028 | 0.0000 | 39 | 51.3% | 0.9268 | -0.04 | -0.31% |
| ROE | **+0.0523** | +0.7915 | +0.0523 | 0.0000 | 39 | 79.5% | <0.0001 | +2.20 | -0.03% |
| VOL (60-day annualised vol) | **-0.0212** | -0.1323 | -0.0212 | 0.0000 | 39 | 51.3% | 0.4198 | -0.27 | -0.16% |
| SIZE (market cap) | **+0.0601** | +0.3464 | +0.0601 | 0.0000 | 39 | 66.7% | 0.0393 | +0.68 | -0.59% |

**Convention check (re-read the code this run, not old docs):**

- **Long-short is Q1 minus Q5** (low-factor bucket minus high-factor bucket), per `quantile_returns` in `factor_lab.py`; with a positive IC the value is negative, which is internally consistent. There is no "long Q5" reading. Figures are gross of costs and not annualised - **not an implementable strategy return**.
- `n_ic_obs = 39` is the actual IC series length: the nominal window takes the last 60 dates, and the final 21 are skipped for lack of forward returns.
- ICIR is mean IC divided by standard deviation of IC - not a strategy Sharpe, not annualised return. Any claim of an "annualised IR" from MOM's 0.21 ICIR has no basis.
- **p-values are not corrected for overlapping samples**: 21-day forward returns make adjacent cross-sections share 20 days, and the realised AR(1) of the IC series is 0.906-0.964, so plain t-tests understate the standard error. The NW t column is my local recomputation using a Bartlett kernel (lag=20, weights 1-l/21), not a script output; it differs slightly from the same column in earlier posts because of implementation differences, not new data. Apart from BP (a borderline -2.05) and ROE (+2.20), everything is far from the 1.96 threshold after correction.
- Valid stock counts: MOM/VOL/SIZE 502, EP/BP/FCF 488, ROE 459.

### Full-window mean alongside the recent cross-sections

`ic_mean` is a rolling-window average: each day the window drops the oldest cross-section and adds the newest. Without splitting it out, window geometry gets mistaken for a change in the factor:

| Factor | 39-section mean | Last 10 sections | Last 3 sections |
|------|------:|------:|------:|
| MOM | +0.062 | **-0.317** | **-0.428** |
| EP | -0.007 | +0.227 | +0.239 |
| BP | -0.089 | +0.052 | +0.077 |
| FCF Yield | -0.003 | +0.198 | +0.243 |
| ROE | +0.052 | +0.035 | +0.021 |
| VOL | -0.021 | -0.226 | -0.256 |
| SIZE | +0.060 | -0.194 | -0.260 |

The last three cross-sections are 2026-10-02 / 10-05 / 10-06, whose 21-day forward windows only completed at the 11-04 close. **For all seven factors the recent readings differ sharply from the full-window mean** - MOM's positive mean is essentially carried by August cross-sections, with high-momentum names underperforming across the cross-section since late September; EP and FCF Yield go the other way, near zero over the full window but positive in the last three. That split is not caused by new data (nothing moved); it is the difference between a 39-day average and the current state.

## 4. Sector momentum (12-1 month momentum by GICS sector)

| Sector | Names | IC | ICIR | Prior IC | Diff |
|------|-----:|------:|-----:|------:|-----:|
| Consumer Staples | 36 | **+0.2132** | +0.9720 | +0.2132 | 0.0000 |
| Consumer Discretionary | 48 | **+0.2059** | +1.1447 | +0.2059 | 0.0000 |
| Health Care | 59 | +0.1023 | +0.4366 | +0.1023 | 0.0000 |
| Industrials | 79 | +0.0335 | +0.0963 | +0.0335 | 0.0000 |
| Utilities | 31 | -0.0408 | -0.3134 | -0.0408 | 0.0000 |
| Financials | 76 | -0.0985 | -0.2858 | -0.0985 | 0.0000 |
| Information Technology | 73 | -0.0993 | -0.1861 | -0.0993 | 0.0000 |

**Coverage is only 7 sectors and 402 names (80.1% of 502).** Energy (21 names), Materials (26), Communication Services (22) and Real Estate (31) are structurally absent - `run_factor_test` has a hard `len(common) < 30: continue` gate, so cross-sections for sectors with fewer than 30 valid names are skipped wholesale. **Those four sectors are not "missing data", they are excluded by the threshold**, and any "all-sector momentum" framing is invalid. Three sectors are negative today, identical to the prior run; zero new reversals this period.

Worth noting: IT and Financials now carry negative sector momentum, the opposite direction from the May conclusion ("Information Technology +0.52, extreme winner-takes-all inside tech"). That rotation already happened over the past months - it is a continuing state, not today's news.

## 5. Implications for strategy, and what cannot be inferred

**What can be said:**

1. **The only information this run carries is that the data did not arrive.** All readings continue the 11-04 snapshot and support no new judgement about factor state. Adjusting positions on this basis is deciding today with last week's photograph.
2. **MOM's "positive IC" no longer describes the current state.** The full-window +0.0625 and the last-three-section -0.4280 differ by 0.49, and the positive mean comes from August. Using "momentum is still positive" as a reason to keep chasing is applying August evidence to November.
3. **BP is the only factor with a meaningful full-window deviation from zero** (-0.0888, NW t -2.05, borderline), in the direction of low book-to-price (growth end) outperforming high BP. It is not sector-neutralised and covers only a single 2026-08 to 10 stretch, so it is not a long-run regularity.
4. **ROE is the steadiest under the new caliber** (+0.0523, ICIR 0.79, positive IC in 79.5% of sections, NW t +2.20), but its history is only five run days and starts at the panel rebuild date. That is too short to support a "quality is back" narrative.
5. **The direction of sector dispersion is usable**: consumer sectors are strongly positive, IT and Financials mildly negative - "pick the strong name inside the sector" still works in consumer and is temporarily inverted in tech. These are 39-section averages, not today's call.

**What cannot be inferred:**

- **Momentum's sign says nothing about index direction.** A negative MOM means past winners subsequently underperformed losers in the sample - a cross-sectional relative statement, not an index call. "MOM at -0.43 over the last three sections" does not mean "the market is about to fall".
- **A negative SIZE cannot be extrapolated to a small-cap rally.** SIZE measures relative size within the S&P 500; there are no small caps in the sample.
- **EP and FCF Yield turning positive over the last three sections is not a confirmed value rotation.** Three cross-sections only, and the negative stretch was concentrated in September; direction can flip again.
- **The four z-alerts are not four independent risk events** (see below).
- This report issues no buy or sell instructions.

## 6. Statistical and data limitations

1. **Four trading days of prices are missing, and the gap includes the largest single-day drop (11-05, SPX -4.36%, NDX -6.36%).** Any statement about "current factor state" here describes the market only up to 11-04. The first run after data resumes will jump visibly and must be read as backfill, not a regime break.
2. **All four z-alerts come from fundamental factors** (EP z=+3.88, BP z=-3.69, FCF z=+3.90, ROE z=+3.73), while `combined_panel.pkl` was rebuilt on 2026-11-05 (5 days ago) and the fundamentals caliber changed wholesale. **These are caliber breaks: the correct statement is "data caliber updated, historical series not comparable", not a factor reversal or a new signal.**
3. **The z baseline is itself polluted by duplicate records**: `ic_history.json` holds 265 records each for MOM/VOL/SIZE but only 147 unique dates, of which 95 are bit-identical to the prior day (64.6%); for the four fundamental factors it is 142/146 (96.6%). Baseline dispersion is systematically overstated, the absolute z is unreliable, and **the number of red flags is not a count of independent risk events**.
4. **Sign status (last genuine change after deduplicating by date)**: MOM 2026-10-06 (-0.0012 -> +0.0158); SIZE 2026-10-01; VOL 2026-10-31; the BP and ROE "changes" occurred on 2026-11-05, the caliber switch date; EP and FCF Yield have never been positive across all 147 unique run dates. **New sign reversals this run: 0 at factor level, 0 at sector level.**
5. **p-values are uncorrected for overlapping-sample autocorrelation** and must not be cited as "highly significant, not random noise". With AR(1) at 0.906-0.964, 39 cross-sections are nowhere near 39 independent observations.
6. **Sector coverage is 7 of 11**, per section 4.
7. **Charts are named by run date, not by data date**: `/charts/factor-ic-2026-11-11.png` and `/charts/sector-mom-2026-11-11.png` were generated at 2026-11-11 06:49 CST but their underlying prices end **2026-11-04** and their IC window is **2026-08-12 -> 2026-10-06**, identical in content to the 11-10 charts.

![Seven-factor IC overview: run date 2026-11-11, prices through 2026-11-04, IC window 2026-08-12 to 2026-10-06](/charts/factor-ic-2026-11-11.png)

![Sector momentum IC: run date 2026-11-11, 7 sectors / 402 names, 80.1% coverage](/charts/sector-mom-2026-11-11.png)
