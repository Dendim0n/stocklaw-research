---
title: "Factor Lab Daily Brief 2026-11-10"
date: 2026-11-10
description: "Fourth run day on the same price snapshot ending 2026-11-04: three US closes (11-05, 11-06, 11-09) were not retrieved (yfinance 429). All seven factors and seven sector momentum readings are bit-identical to the 11-07 run, differences 0.000000 — existing state continued, zero new observations. Latest evaluable cross-section remains 2026-10-06 (39 cross-sections, 08-12 to 10-06). The fundamentals panel was rebuilt on 11-05, so the four EP/BP/FCF/ROE z-score alarms are a caliber break, not signals. Zero genuinely new factor-level or sector-level sign reversals."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-10

## 1. Data cutoff, sample and evaluation basis

| Item | Value |
|------|-------|
| Run day | 2026-11-10 (Tue) 06:45 CST = 2026-11-09 (Mon) 17:45 EST |
| **Price cache cutoff** | **2026-11-04 (Wednesday close)** — 677 rows × 502 columns (from 2024-02-26) |
| New trading days this run | **0** (11-05 Thu, 11-06 Fri, 11-09 Mon closes not retrieved) |
| Reason | `yf.download` failed on all three test tickers with `YFRateLimitError`; `curl query1.finance.yahoo.com` returned HTTP 429; DNS resolves normally (not an outage) |
| Last run that obtained a new close | 2026-11-05 06:41 (picked up the 11-04 close) |
| Fundamentals panel | Generated 2026-11-05, financials through **2026-11-04**, 500 names (4 days before the run day, i.e. refreshed within the last 7 days) |
| Sample | 502 names with prices; 488 with fundamentals (EP/BP/FCF), 459 (ROE) |
| Evaluation window (all 7 factors) | **2026-08-12 → 2026-10-06, 39 valid cross-sections each** |
| Holding period | 21 trading-day forward return (script default, unchanged this run) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average of those 39 historical cross-sections** — not a same-day IC, not a forward return, not a probability of decline |

**The price cutoff is not the evaluable date.** A 21-day forward return requires 21 trading days after a cross-section, so the latest evaluable cross-section is **2026-10-06** (`prices.index[-22]`). The 21 sessions from 10-07 to 11-04 are in the cache but generate no IC yet; the 11-05, 11-06 and 11-09 sessions were never retrieved.

Scheduling note: this cron runs `40 6 * * 2-6` (Tue–Sat), so there is no Monday run — the absence of an 11-09 run is by design, not a failure.

## 2. New this run / existing state continued

**Conclusion: zero new observations. All seven factors and all seven sector momentum readings are bit-identical to the 2026-11-07 run, difference 0.000000. Factor-level and sector-level genuinely new sign reversals: 0.**

The test is bit-for-bit comparison plus a truncation re-computation: cutting `prices_cache.parquet` at 2026-11-04 and rebuilding the momentum / volatility / size panels yields `+0.062494 / -0.021198 / +0.060134`, identical to this run's JSON — so these readings really do correspond to the 11-04 snapshot, not a coincidence caused by something else.

| Factor | IC (11-07 run) | IC (this run) | Difference | Nature |
|------|------:|------:|------:|------|
| MOM | +0.062494 | **+0.062494** | 0.000000 | No new prices, state continued |
| EP | -0.006821 | **-0.006821** | 0.000000 | Same |
| BP | -0.088770 | **-0.088770** | 0.000000 | Same |
| FCF Yield | -0.002813 | **-0.002813** | 0.000000 | Same |
| ROE | +0.052257 | **+0.052257** | 0.000000 | Same |
| VOL | -0.021198 | **-0.021198** | 0.000000 | Same |
| SIZE | +0.060134 | **+0.060134** | 0.000000 | Same |

**This is the fourth run day on one snapshot.** After 11-05 06:41 picked up the 11-04 close, the 11-06, 11-07 and 11-10 runs all landed on the same cache "through 11-04" with identical readings. (The 11-05 09:00 re-run after the panel rebuild printed +0.071526 because the stock universe changed; it is excluded from this chain.)

**Fundamentals: the data caliber changed on 11-05, historical series are not comparable.** The panel was rebuilt on 2026-11-05, pushing financials from the old "through 2026-05-28" to 2026-11-04, and the evaluation window switched wholesale to the current 39 cross-sections (2026-08-12 → 10-06). Therefore:

- BP turning negative (-0.0928) and ROE turning positive (+0.0530) both occurred on **2026-11-05, the caliber-switch day** — a caliber break, not a factor flip. No signal interpretation this run.
- Since 11-05, SIZE is `log(price × total shares)` (`shares_cache.json`), i.e. true market cap; before that, `ic_history` stored log(price). The two segments are not directly comparable.

## 3. Full seven-factor table (21-day holding, cross-sectional Rank IC)

| Factor | IC mean | ICIR | Prior IC | Difference | Valid obs | Share of positive-IC cross-sections | p-value (uncorrected) | NW t (corrected) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|-----:|
| MOM | **+0.0625** | +0.2145 | +0.0625 | 0.0000 | 39 | 53.8% | 0.1940 | +0.46 | -0.79% |
| EP | **-0.0068** | -0.0385 | -0.0068 | 0.0000 | 39 | 48.7% | 0.8137 | -0.09 | -0.42% |
| BP | **-0.0888** | -0.6087 | -0.0888 | 0.0000 | 39 | 38.5% | 0.0006 | -1.69 | +1.13% |
| FCF Yield | **-0.0028** | -0.0150 | -0.0028 | 0.0000 | 39 | 51.3% | 0.9268 | -0.04 | -0.31% |
| ROE | **+0.0523** | +0.7915 | +0.0523 | 0.0000 | 39 | 79.5% | <0.0001 | +2.06 | -0.03% |
| VOL | **-0.0212** | -0.1323 | -0.0212 | 0.0000 | 39 | 51.3% | 0.4198 | -0.29 | -0.16% |
| SIZE | **+0.0601** | +0.3464 | +0.0601 | 0.0000 | 39 | 66.7% | 0.0393 | +0.75 | -0.59% |

**Caliber check (code re-read this run, not taken from old docs):**

- **The long-short column is Q1 − Q5** (low-factor group minus high-factor group), `factor_lab.py` lines 346–347; with positive IC the value is negative, which is internally consistent. There is no "long Q5" reading. Figures are gross of costs and not annualised — not an implementable strategy return.
- `n_ic_obs = 39` is the actual IC series length: the nominal window takes the last 60 dates, and the final 21 are skipped for lack of forward returns. The four fundamental factors also show 39 this run, constrained by forward-return availability rather than a frozen sample.
- Valid names: MOM/VOL/SIZE 502, EP/BP/FCF 488, ROE 459.

**Sign status (last genuine sign change in `ic_history`, deduplicated by date)**: MOM 2026-10-06 (-0.0012 → +0.0158); SIZE 2026-10-01; VOL 2026-10-31 (+0.0057 → -0.0033, magnitude ≈ 0); BP and ROE "changed" on 2026-11-05 when the caliber switched; EP and FCF Yield have **never** been positive across 146 deduplicated run days. No factor-level sign flip this run.

### Full-window mean alongside recent cross-sections (window geometry, not new data)

| Factor | 39-cross-section mean | Aug (14) | Sep (21) | Oct (4) | Last 10 | Last 3 | Trailing run |
|------|------:|------:|------:|------:|------:|------:|------:|
| MOM | +0.062 | **+0.246** | +0.026 | **-0.391** | **-0.317** | **-0.428** | 15 negative |
| EP | -0.007 | -0.044 | -0.028 | **+0.235** | +0.227 | +0.239 | 14 positive |
| BP | -0.089 | -0.041 | -0.153 | +0.079 | +0.052 | +0.077 | 10 positive |
| FCF Yield | -0.003 | -0.013 | -0.040 | **+0.231** | +0.198 | +0.243 | 14 positive |
| ROE | +0.052 | -0.006 | +0.098 | +0.014 | +0.035 | +0.021 | 3 positive |
| VOL | -0.021 | +0.065 | -0.034 | -0.256 | -0.226 | -0.256 | 14 negative |
| SIZE | +0.060 | +0.161 | +0.051 | **-0.243** | -0.194 | -0.260 | 12 negative |

Two points must be read separately:

1. **MOM's positive full-window mean is entirely carried by August.** August's 14 cross-sections average +0.246, September's 21 average +0.026, October's 4 average -0.391; the last 15 evaluable cross-sections are consecutively negative, the last 3 at -0.428. The full-window +0.062 and the negative recent tail are two facts about one dataset, not two conclusions.
2. **The four fundamental factors are all positive across October's 4 cross-sections** (EP +0.235, FCF +0.231, BP +0.079, ROE +0.014), but those 4 adjacent cross-sections overlap by 20 trading days each — fewer than one independent observation. That cannot support a "value-style comeback" claim; EP and FCF full-window means are still near zero (p=0.81, 0.93).

## 4. Sector momentum table and coverage

![Sector momentum decomposition 2026-11-10](/charts/sector-mom-2026-11-10.png)

*Caption: sector momentum IC means. Price cutoff 2026-11-04 (Wednesday close; not updated this run), evaluation window 2026-08-12 → 2026-10-06 (39 cross-sections), 21-day holding. Covers only the 7 GICS sectors with ≥30 valid constituents, 402 names in total. Values are bit-identical to the 11-07 edition (all differences 0.0).*

| Sector | IC mean | ICIR | Prior IC | Difference | Names | p-value | Last 10 | Last 3 | Latest cross-section 10-06 | Long-short Q1−Q5 |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|
| Consumer Staples | **+0.2132** | +0.972 | +0.2132 | 0.0 | 36 | 0.0000 | -0.109 | -0.190 | -0.265 | -1.89% |
| Consumer Discretionary | **+0.2059** | +1.145 | +0.2059 | 0.0 | 48 | 0.0000 | -0.053 | -0.198 | -0.133 | -2.98% |
| Health Care | **+0.1023** | +0.437 | +0.1023 | 0.0 | 59 | 0.0105 | -0.148 | -0.178 | -0.311 | -4.56% |
| Industrials | +0.0335 | +0.096 | +0.0335 | 0.0 | 79 | 0.5561 | -0.426 | -0.509 | -0.518 | -0.42% |
| Utilities | -0.0408 | -0.313 | -0.0408 | 0.0 | 31 | 0.0608 | **+0.089** | **+0.161** | +0.257 | +1.77% |
| Financials | -0.0985 | -0.286 | -0.0985 | 0.0 | 76 | 0.0862 | -0.466 | -0.549 | -0.499 | +2.26% |
| Information Technology | -0.0993 | -0.186 | -0.0993 | 0.0 | 73 | 0.2586 | **-0.734** | **-0.774** | -0.774 | +7.41% |

(IC means, ICIR and p-values come from the script's JSON; the "Last 10 / Last 3 / Latest cross-section" columns are cross-section series statistics recomputed for this report and are not mixed with ICIR's denominator.)

**Coverage: only 7 of 11 GICS sectors are reported, 402 names (80.1% of 502).** The gap is structural, caused by the script's ≥30 valid constituents per cross-section floor: Real Estate maps 31 names but only 29 are valid after alignment; Materials has 26, Communication Services 22 (20 valid), Energy 21 — never clearing the floor. **Energy and Communication Services, two sectors that carry heavy narrative weight, are entirely absent; the sector table does not represent market-wide sector rotation.**

**The recent tail is one direction, not seven independent signals.** Six of seven sectors have negative last-3 means (IT -0.774, Financials -0.549, Industrials -0.509, Consumer Discretionary -0.198, Consumer Staples -0.190, Health Care -0.178); only Utilities is positive (+0.161). They are driven by the same overlapping late-September-to-early-October cross-sections and must not be counted as "seven sectors".

Two easy misreadings: **Financials IC -0.099 and recent -0.549, yet long-short Q1−Q5 is +2.26%** — negative IC with positive Q1−Q5 is consistent (Q1 is the low-momentum group) and does not mean "the low-momentum group made money"; its share of positive-IC cross-sections is only 38.5%. **IT IC -0.099 with long-short +7.41%** is a group-mean difference, gross of costs and not cap-weighted — not an implementable return.

![Factor IC overview 2026-11-10](/charts/factor-ic-2026-11-10.png)

*Caption: seven-factor IC means. Price cutoff 2026-11-04 (Wednesday close), evaluation window uniformly 2026-08-12 → 2026-10-06 (39 cross-sections). The `***` markers are based on uncorrected ordinary t-tests and disagree with the overlap-corrected conclusion — do not quote them directly.*

## 5. What this implies for strategy, and what cannot be inferred

**What can be said:**

1. **There is no new information this run; it only confirms the fourth run day of a stalled data pipeline.** Any "momentum changed today" statement would be reading missing data as market movement.
2. **When data returns the readings will jump, and the size is predictable.** The first successful run will add the 11-05, 11-06 and 11-09 closes at once, rolling the window forward 3 cross-sections and admitting the 10-07, 10-08 and 10-09 cross-sections. Given the broadly negative recent tail, MOM/VOL/SIZE full-window means will most likely shift lower — **that is data catch-up, not a new regime break**, and must be labelled "first new snapshot".
3. **MOM's recent tail is still the one fact worth tracking**: full-window +0.062, last 10 cross-sections -0.317, last 3 -0.428, 15 consecutive negative evaluable cross-sections. The data outage does not affect this conclusion, because it is already in the cache.
4. **ROE is the only factor that still holds up statistically — barely**: ordinary t=4.88, overlap-corrected NW t=+2.06 just above 1.96, with a 79.5% positive-IC share, the highest in the table; but long-short Q1−Q5 is only -0.03%, so the return spread between groups is essentially zero — **stable IC is not the same as making money**.
5. **The sector picture is unchanged**: Consumer and Health Care positive over the full window, Technology/Financials/Industrials negative, 6 of 7 sectors negative in the recent tail. That looks more like broad in-sample momentum decay than a clean rotation out of tech into consumer.

**What cannot be inferred:**

- **Positive MOM ≠ the index must rise.** This is 21-day cross-sectional relative strength, a different statistical object from index direction.
- **MOM's latest cross-section of -0.445 ≠ every laggard is worth buying.** It only says the low-momentum group outperformed in that sample; it does not distinguish "fell less" from "genuinely strong".
- **Positive SIZE ≠ a small-cap rally.** A positive IC only says large caps outperformed subsequently within the sample; it cannot be extrapolated to small caps market-wide.
- **Negative (or near-zero) EP / FCF Yield ≠ value rotation confirmed, and ≠ refuted.** Full-window means sit near zero and are insignificant; the window has no resolving power in either direction.
- **BP turning negative and ROE turning positive ≠ factor flips.** Both happened on 2026-11-05, the panel rebuild day — a caliber break.
- **The count of currently negative sectors (4) ≠ the number of new reversals this run (0).** Different definitions; red-light counts are not independent risk-event counts.
- **This run contains no factor readings from 10-07 to 11-09.** The report is not a directional call on the next session and contains no specific trading instructions.

## 6. Statistical and data limitations

1. **p-values are uncorrected for overlapping samples and are only a lower bound.** 21-day forward returns make adjacent cross-sections overlap by 20 trading days; this run's IC series AR(1) is 0.91–0.96. Local Newey-West (lag=20, Bartlett kernel) recomputation: MOM +1.32 → **+0.46**, EP -0.24 → **-0.09**, BP -3.75 → **-1.69**, FCF -0.09 → **-0.04**, ROE +4.88 → **+2.06**, VOL -0.82 → **-0.29**, SIZE +2.14 → **+0.75**. **These are recomputed values, not script output**; after correction only ROE barely clears 1.96, so "highly significant, not random noise" is not a defensible claim.
2. **ICIR is IC mean ÷ IC standard deviation**, a measure of within-window IC stability — **not a strategy Sharpe, not an annualised return**, and it ignores transaction costs and turnover.
3. **The anomaly baseline is polluted by duplicate records.** `ic_history` now holds 146 deduplicated run days / 264 records; the proportion bit-identical to the previous unique date is 93/145 for MOM/VOL/SIZE and 140/145 for EP. This run appended another record identical to 11-07, deepening the duplication. Red-light counts cannot be treated as independent risk events.
4. **All four z-score alarms this run (EP +4.57, BP -4.28, FCF +4.61, ROE +4.34) are caliber breaks.** The script's STEP 4 already prints the "panel refreshed within 7 days, historical baseline is old caliber" notice. The same IC readings produced z of +5.78/-5.24/+5.85/+5.35 in the 11-07 report; z moved while IC did not, purely because one more record entered the baseline — **z is not a stable measure and is not a risk magnitude**. Genuinely new factor-level and sector-level sign reversals: 0.
5. **The price gap is a data-source problem, not a script problem.** Evidence chain: `curl` 429 + all three `yf.download` tickers raising `YFRateLimitError` + DNS resolving normally + cache `index[-1]` stuck at 11-04. Rate limiting is intermittent (it recovered on its own on 2026-10-21→22), so this run changed neither source nor thresholds and modified no script.
6. **The cross-section is not the whole market.** 502 S&P 500 constituents have prices, 500 have fundamentals (488/459 after alignment), and the sector table covers 402. Energy, Communication Services, Materials and Real Estate are absent. Any "market-wide" conclusion exceeds the sample boundary.
