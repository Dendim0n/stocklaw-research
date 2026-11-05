---
title: "Factor Lab Daily Brief 2026-11-06"
date: 2026-11-06
description: "No market update this run: yfinance returned 429, so the price cache still ends 2026-11-04. MOM (+0.062494) and VOL (-0.021198) are bit-identical to the 11-05 06:41 run — status quo, zero new observations. Latest evaluable cross-section remains 2026-10-06 (39 sections, 08-12 to 10-06). The fundamental panel was rebuilt on 11-05 (financials through 11-04), so EP/BP/FCF/ROE baselines are a different vintage: the four z-score alarms (EP +8.9, BP -7.3, FCF +9.2, ROE +7.6) are all caliber breaks, and the BP/ROE sign changes date to the 11-05 rebuild day, not to a factor flip. Genuine new sign reversals at factor and sector level: zero."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-06

## 1. Data cutoff, sample and evaluation conventions

| Item | Value |
|------|-------|
| Run time | 2026-11-06 (Fri) 06:40 CST = 2026-11-05 (Thu) 17:40 EST |
| **Price cache cutoff** | **2026-11-04 (Wed close)** — unchanged from the previous run, 677 rows × 502 columns (from 2024-02-26) |
| New trading days this run | **0** (11-05 close not obtained) |
| Why missing | yfinance raised `YFRateLimitError`; independent check `curl query1.finance.yahoo.com` → HTTP 429, DNS resolving normally (not an outage) |
| Fundamental panel | Generated 2026-11-05 08:49, financial data through **2026-11-04**, 500 names (rebuilt on 11-05, not the old snapshot) |
| Universe | Price cache 502 columns; fundamental factors 488 usable (EP/BP/FCF), 459 (ROE) |
| Evaluation window | **2026-08-12 → 2026-10-06, 39 valid cross-sections for all seven factors** |
| Holding period | 21 trading days forward return (`--holding 21`, script default, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average over those 39 historical cross-sections**, not today's IC, not a future return, not a probability of decline |

**Timing note.** The 11-05 (Thu) US close completed at 05:00 Beijing time on 11-06; this run started 1h40m later, so 11-05 should have been available. Rate limiting removed that day entirely. The cache file mtime is still 2026-11-05 06:41 — no price file was written this run.

**Cutoff date is not the evaluable date.** A 21-day forward return needs 21 trading days after the cross-section, so the latest evaluable cross-section is **2026-10-06** (`prices.index[-22]`). None of the 21 trading days from 10-07 to 11-04 has entered any IC reading yet.

## 2. What is new vs. what continues

**Bottom line: zero new observations. Price factors are status quo; the four fundamental factors are the second reading on the new 11-05 vintage and are not comparable to the historical baseline. Genuine new sign reversals at factor and sector level: zero.**

The test is not "the numbers look similar" but a bit-level comparison against the 11-05 06:41 run (same 502-name universe, same cache): **MOM +0.062494 and VOL -0.021198 are identical to the last digit.**

| Factor | IC (11-05 09:03 run) | IC (this run) | Diff | Driver |
|------|------:|------:|------:|------|
| MOM | +0.0715 | **+0.0625** | -0.0090 | Universe 514→502, no new prices |
| VOL | -0.0130 | **-0.0212** | -0.0082 | Same |
| SIZE | +0.0564 | **+0.0601** | +0.0037 | Same |
| EP | -0.0128 | **-0.0068** | +0.0060 | Same (usable 500→488) |
| BP | -0.0928 | **-0.0888** | +0.0041 | Same |
| FCF Yield | -0.0088 | **-0.0028** | +0.0060 | Same |
| ROE | +0.0530 | **+0.0523** | -0.0007 | Same (usable 470→459) |

**Why the universe dropped from 514 back to 502.** The post-08:57 runs on 11-05 fed 514 names into the IC, but the price cache holds only 502 columns: `combined_panel.pkl` has 500 names, of which 12 (BE, ECHO, FERG, FLEX, HONA, ILMN, MRVL, P, RDDT, SKYD, TWLO, VMRK) are absent from the cache. In the "cache is fresh" branch, `fetch_price_data` downloads those 12 into memory and then **returns without writing them back to the parquet**, so every run must re-fetch them — 11-05 succeeded, today's 429 did not. All seven deltas above are that single change and carry no market information.

**Do the last five run days share one price snapshot?** On 10-30, 10-31, 11-03, 11-04 and 11-05 the price readings differed every day (MOM 0.1057 → 0.1013 → 0.0896 → 0.0770 → 0.0625), i.e. each had a fresh close. **This run (11-06) is the first in that sequence to reuse an existing snapshot** — and it reverted to an older one with the same universe.

**Fundamental factors: the vintage changed, the history is not comparable.** The panel was rebuilt on 2026-11-05 (financials through 11-04), moving the evaluation window from the old frozen 2026-03-04→05-28 (60 sections) to 2026-08-12→10-06 (39 sections). Therefore:

- Do not subtract today's readings from anything before 11-05 06:41 (an "EP -0.0480 → -0.0068" delta is meaningless — the window itself changed).
- BP turning negative (-0.0928) and ROE turning positive (+0.0530) both date to **2026-11-05, the vintage-switch day**. That is a caliber break, not a factor flip, and gets no signal interpretation here.
- SIZE likewise: `build_size_panel` began using `shares_cache.json` (499 names) on 11-05, so the factor is log(price × total shares), i.e. real market cap; everything before 11-05 in `ic_history` is log(price). The two segments are not directly comparable.

## 3. Full seven-factor table (21-day holding period, cross-sectional rank IC)

| Factor | IC mean | ICIR | Prior IC | Diff | Obs | % positive IC | p (uncorrected) | NW t (corrected) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.0625** | +0.2145 | +0.0715 | -0.0090 | 39 | 53.8% | 0.1940 | +0.46 | -0.79% |
| EP (earnings yield) | **-0.0068** | -0.0385 | -0.0128 | +0.0060 | 39 | 48.7% | 0.8137 | -0.09 | -0.42% |
| BP (book-to-price) | **-0.0888** | -0.6087 | -0.0928 | +0.0041 | 39 | 38.5% | 0.0006 | -1.69 | +1.13% |
| FCF Yield | **-0.0028** | -0.0150 | -0.0088 | +0.0060 | 39 | 51.3% | 0.9268 | -0.04 | -0.31% |
| ROE | **+0.0523** | +0.7915 | +0.0530 | -0.0007 | 39 | 79.5% | <0.0001 | +2.06 | -0.03% |
| VOL (volatility) | **-0.0212** | -0.1323 | -0.0130 | -0.0082 | 39 | 51.3% | 0.4198 | -0.29 | -0.16% |
| SIZE (market cap) | **+0.0601** | +0.3464 | +0.0564 | +0.0037 | 39 | 66.7% | 0.0393 | +0.75 | -0.59% |

**Convention checks (code re-read this run, not taken from old docs):**

- **Long-short is Q1 − Q5** (low-factor group minus high-factor group), `quantile_returns` lines 346–347. It is negative when IC is positive — internally consistent. There is no "long Q5" reading. Returns are gross of costs and not annualised; not an implementable strategy return.
- Holding period is 21 trading days; `n_ic_obs = 39` is the true IC series length — the nominal window takes the last 60 dates and drops the final 21 that have no forward return yet.
- SIZE is now **log(price × total shares)**, real market cap (fixed 11-05), comparable only from 11-05 onward.

**Sign status (last genuine sign change after de-duplication):** MOM 2026-10-06 (+0.0158), VOL 2026-10-31 (-0.0033), SIZE 2026-10-01 (+0.0032); the BP and ROE "changes" are both the 2026-11-05 vintage switch; EP and FCF Yield have **never** been positive across 144 de-duplicated run days. This run produced no factor-level sign reversal.

### Full-window mean alongside the recent cross-sections

| Factor | 39-section mean | Aug (14) | Sep (21) | Oct (4) | Last 10 | Last 3 | Consecutive same-sign |
|------|------:|------:|------:|------:|------:|------:|------:|
| MOM | +0.062 | **+0.246** | +0.026 | **-0.391** | **-0.317** | **-0.428** | 15 negative |
| EP | -0.007 | -0.044 | -0.028 | **+0.235** | +0.227 | +0.239 | — |
| BP | -0.089 | -0.041 | -0.153 | +0.079 | +0.052 | +0.077 | — |
| FCF Yield | -0.003 | -0.013 | -0.040 | **+0.231** | +0.198 | +0.243 | — |
| ROE | +0.052 | -0.006 | +0.098 | +0.014 | +0.035 | +0.021 | — |
| VOL | -0.021 | +0.065 | -0.034 | -0.256 | -0.226 | -0.256 | 14 negative |
| SIZE | +0.060 | +0.161 | +0.051 | **-0.243** | -0.194 | -0.260 | 12 negative |

Two points must be read separately:

1. **MOM's positive full-window mean still rests on August.** Aug's 14 sections average +0.246, Sep's 21 average +0.026, Oct's 4 average -0.391; the last 15 evaluable sections are all negative and the last 3 average -0.428. "Full-window +0.062" and "recent sections all negative" are two facts from one dataset.
2. **The four fundamental factors are positive in October's 4 sections (EP +0.235, FCF +0.231, BP +0.079, ROE +0.014), but that is 4 observations with 20 days of overlap between neighbours** — not 4 independent samples, and not enough to support a "value style has returned" conclusion. EP and FCF full-window means remain near zero (p=0.81, 0.93).

## 4. Sector momentum and coverage

![Sector momentum decomposition 2026-11-06](/charts/sector-mom-2026-11-06.png)

*Caption: sector momentum IC means; price cutoff 2026-11-04 (Wed close, not updated this run); window 2026-08-12 → 2026-10-06 (39 sections), 21-day holding. Covers only the 7 GICS sectors with ≥30 valid constituents, 402 names in total. Values are identical to the 11-05 edition.*

| Sector | IC mean | ICIR | Prior IC | Diff | Names | Last 10 | Last 3 | Latest 10-06 | Long-short Q1−Q5 | Sign since |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|-----:|-----:|---|
| Consumer Staples | **+0.2132** | +0.972 | +0.2132 | 0.0000 | 36 | -0.109 | -0.191 | -0.265 | -1.89% | +, 2026-09-24 |
| Consumer Discretionary | **+0.2059** | +1.145 | +0.2059 | 0.0000 | 48 | -0.053 | -0.198 | -0.133 | -2.98% | +, 2026-09-22 |
| Health Care | **+0.1023** | +0.437 | +0.1023 | 0.0000 | 59 | -0.148 | -0.178 | -0.312 | -4.56% | +, 2026-09-24 |
| Industrials | +0.0335 | +0.096 | +0.0335 | 0.0000 | 79 | -0.426 | -0.509 | -0.519 | -0.42% | +, 2026-10-07 |
| Utilities | -0.0408 | -0.313 | -0.0408 | 0.0000 | 31 | **+0.089** | **+0.161** | +0.257 | +1.77% | −, 2026-08-19 |
| Financials | -0.0985 | -0.286 | -0.0985 | 0.0000 | 76 | -0.466 | -0.549 | -0.499 | +2.26% | −, 2026-08-19 |
| Information Technology | -0.0993 | -0.186 | -0.0993 | 0.0000 | 73 | **-0.734** | **-0.774** | -0.774 | +7.41% | −, 2026-10-23 |

**The sector table is bit-identical to the 11-05 09:03 run, and not by coincidence:** the 12 newly fetched names have no `sector_map` entry, so they all fall into `Other`; `Other` has 12 names, below the 30-name floor, and is silently skipped. The 514→502 universe change therefore moved factor-level readings only — the sector table never saw it.

**Coverage: only 7 of the 11 GICS sectors are reported, 402 names (80.1% of 502).** The gap is structural:

- **Real Estate**: 31 mapped names, but the median cross-section holds only 29, persistently below the 30-name floor; its last `ic_history` record is 2026-09-26 and it has produced nothing since.
- Materials 26, Communication Services 22 (median 19), Energy 21 — never reach the floor.

That leaves 100 names outside the table — **Energy and Communication Services, two sectors with heavy narrative weight, are entirely absent; the sector table cannot stand in for market-wide rotation.**

**The recent weakness is one shared move, not seven independent signals.** Six of seven sectors have negative last-3-section means (IT -0.774, Financials -0.549, Industrials -0.509, Consumer Discretionary -0.198, Consumer Staples -0.191, Health Care -0.178); only Utilities is positive (+0.161). They are driven by the same late-September to early-October overlapping sections and should not be counted as seven sector events.

Two easy misreadings: **Financials has IC -0.099 and a recent -0.549, yet long-short Q1−Q5 of +2.26%** — negative IC with positive Q1−Q5 is consistent (Q1 is the low-momentum bucket) and does not mean "the low-momentum bucket makes money"; its share of positive-IC sections is only 38.5%. **IT has IC -0.099 and long-short +7.41%**; that figure is a bucket mean difference, gross of costs and not cap-weighted.

![Factor IC overview 2026-11-06](/charts/factor-ic-2026-11-06.png)

*Caption: seven-factor IC means; price cutoff 2026-11-04 (Wed close); all factors on the same 2026-08-12 → 2026-10-06 window (39 sections). The `***` markers come from uncorrected t-tests and conflict with the overlap-adjusted results — do not quote them.*

## 5. What this implies for strategy, and what it does not

**Can say:**

1. **There is no new signal this run, only a universe rollback.** MOM and VOL are identical to the 11-05 06:41 run, and all seven deltas are explained by the 514→502 sample change. Reporting "momentum fell 0.009 today" would be reading a sample change as a market change.
2. **MOM's recent profile remains the salient fact:** full-window +0.062, last 10 sections -0.317, last 3 -0.428, 15 consecutive negative evaluable sections. As August sections keep rolling out of the window, the full-window mean will keep converging toward the September–October level — that is window geometry, not a forecast.
3. **The only genuinely new item is the fundamental vintage update, not an improvement in fundamental readings.** The panel finally moved from the frozen 2026-03~05 snapshot to 2026-08~10, so those four factors can be evaluated on current financials for the first time. But the new series has only 39 overlapping sections, EP and FCF full-window means sit near zero and are insignificant (p=0.81 / 0.93), and the BP/ROE sign changes land on the vintage-switch day.
4. **Statistically, only ROE survives, and barely:** ordinary t=4.88, overlap-adjusted NW t=+2.06, just over 1.96. Its 79.5% positive-IC share is the highest in the table; but long-short Q1−Q5 is only -0.03%, meaning the spread between buckets is essentially zero — **a stable IC is not the same thing as a profitable factor**.
5. **The sector pattern (Consumer/Health Care positive full-window; Tech/Financials/Industrials negative) is unchanged**, with 6 of 7 sectors negative recently. That looks like broad within-sample momentum failure rather than a clean rotation out of tech into consumer.

**Cannot conclude:**

- **Positive MOM ≠ the index must rise.** This is 21-day cross-sectional relative strength, not index direction — different statistical object.
- **Latest cross-section -0.445 ≠ every laggard is worth buying.** It says the low-momentum bucket outperformed within that sample; it does not separate "fell less" from "genuinely strong".
- **Positive SIZE ≠ a small-cap regime.** Even with the corrected market-cap definition, a positive IC only says large caps outperformed within the sample; it does not extrapolate to market-wide small caps.
- **Negative (or near-zero) EP / FCF Yield ≠ value rotation unconfirmed, and ≠ value rotation confirmed.** Neither holds: the full-window means sit near zero, the last 4 overlapping sections are positive, and the sample is S&P 500 only. The right statement is "this window has no resolving power".
- **BP turning negative and ROE turning positive ≠ factor flips.** Both occur on the 2026-11-05 panel rebuild; they are caliber breaks.
- **The count of negative sectors (4) ≠ the number of new reversals (0).** Different definitions; red-light counts are not independent risk events.
- **This run contains no factor readings for 10-07 through 11-05.** The report is not a direction call on the next session and contains no buy/sell instructions.

## 6. Statistical and data limitations

1. **p-values are uncorrected for overlapping samples and are lower bounds only.** With 21-day forward returns, adjacent cross-sections overlap by 20 trading days; the IC series AR(1) this run is 0.906–0.964. Local Newey-West recomputation (lag=20, Bartlett kernel): MOM +1.32 → **+0.46**, EP -0.24 → **-0.09**, BP -3.75 → **-1.69**, FCF -0.09 → **-0.04**, ROE +4.88 → **+2.06**, VOL -0.82 → **-0.29**, SIZE +2.14 → **+0.75**. **These are recomputed values, not script output**; only ROE clears 1.96, and only just. Do not claim "highly significant, not random noise".
2. **ICIR is IC mean ÷ IC standard deviation** — a within-window stability measure, **not a strategy Sharpe, not an annualised return**, and it ignores trading costs and turnover.
3. **The anomaly-detection baseline is polluted by duplicate records.** Across 144 de-duplicated run days, the share identical to the previous date is 91/143 for MOM/VOL/SIZE, 138/143 for EP/BP/FCF/ROE, and 92–94/143 for sectors. This run's MOM/VOL records again duplicate the 11-05 06:41 snapshot (old values rewritten), adding further duplication. **Red-light counts are not independent risk events.**
4. **All four fundamental z-score alarms this run (EP +8.93, BP -7.29, FCF +9.19, ROE +7.58) are caliber breaks** — the script's own STEP 4 prints that caveat. The MOM alarm ("p moved from a 10-day mean of 0.0390 to 0.1940") is not a change this run: today's p=0.1940 is **identical** to the 11-05 06:41 run, and the alarm comes from the baseline-mean convention. Genuine new sign reversals at factor and sector level: zero.
5. **The missing prices are a data-source issue, not a script issue, and no script was modified this run.** Evidence chain: `curl` 429 plus all three test tickers failing with `YFRateLimitError` plus normal DNS. The unchanged cache mtime proves the price file was not rewritten. When downloading recovers, the first successful run will pull in 11-05 onward at once and price-factor readings will jump — that is backfill, not a regime break.
6. **One data-hygiene issue worth fixing (reported, not patched this run):** the "cache is fresh" branch of `fetch_price_data` appends missing tickers in memory without writing them back to the parquet (lines 124–133), so 12 constituents must be re-fetched every day; under rate limiting the universe silently shrinks 514→502. Separately, the cache carries 14 tickers no longer in the panel (AVB, BLDR, CAG, CPB, CTVA, EA, EPAM, EQR, KVUE, POOL, PSKY, TAP, TTD, WBD), 8 of which still print a price on 11-04 and are counted in the price-factor universe.
7. **The cross-section is not the whole market.** 502 S&P 500 names have prices, 500 have fundamentals, the sector table covers 402; Energy, Communication Services, Materials and Real Estate are absent. Any "market-wide" conclusion exceeds the sample.
