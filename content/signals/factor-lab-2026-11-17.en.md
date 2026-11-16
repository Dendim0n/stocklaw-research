---
title: "Factor Lab Daily Brief 2026-11-17"
date: 2026-11-17
description: "The price cache still ends 2026-11-04: all eight US sessions from 11-05 through 11-16 are missing (yfinance rate limiting), so all seven factors and seven sector momentum readings are bit-identical to the prior run for the 8th consecutive session — an extension of existing state, not new observations. The evaluation window remains 39 cross-sections from 2026-08-12 to 2026-10-06, whose 21-day forward returns finished at the 11-04 close. Inside the window a regime flip occurred between 09-17 and 09-23: EP/FCF turned positive while MOM/VOL/SIZE turned negative; August momentum averaged +0.246 versus -0.391 in early October. The four fundamental-factor z alarms (+/-2.5 to 2.6 sigma) stem from the 11-05 panel rebuild; 52 of the 60 baseline dates still use the old caliber."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-17

## 1. Data cutoff, sample and evaluation caliber

| Item | Value |
|------|-------|
| Run time | 2026-11-17 (Tue) 06:44–06:48 CST, i.e. 2026-11-16 (Mon) 17:44 EST — the session had already closed |
| **Price cache cutoff** | **2026-11-04 (Wed close)**, 677 trading days x 502 tickers |
| New sessions this run | **0** (11-05, 11-06, 11-09, 11-10, 11-11, 11-12, 11-13, 11-16 all missing) |
| Why | `yf.download` on three probe tickers (AAPL/MSFT/NVDA) returned `YFRateLimitError`; a bare requests call to the `query1.finance.yahoo.com` chart endpoint returned **HTTP 403**; DNS resolves normally — **rate limiting, not a network outage and not a script failure**; the script falls back to cache and exits 0 by design |
| Last run that captured a new close | 2026-11-05 06:41 run (added the 11-04 close) |
| Runs supported by this one price snapshot | **9** (11-05 through 11-17) |
| Consecutive runs with identical readings | **8th** (11-06 / 07 / 10 / 11 / 12 / 13 / 14 / 17) |
| Evaluation window | **2026-08-12 → 2026-10-06**, **39 valid cross-sections** per factor |
| Latest evaluable cross-section | **2026-10-06** (= `prices.index[-22]`); its 21-day forward return completed exactly at the 2026-11-04 close |
| Holding period | 21 trading-day forward return (script default, no config change) |
| Universe | 502 tickers with prices; 488 with valid fundamentals (EP / BP / FCF Yield), 459 (ROE) |
| Size definition | `log(price x total shares)`, share cache covers 499 tickers |
| Fundamental panel | Generated 2026-11-05 08:49, financial data through 2026-11-04, 500 tickers; STEP 4 flags it "fresh, 11 days old" |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average across those 39 historical cross-sections** — not today's IC, not a future return, not a probability of decline |

**The price cutoff is not the evaluation date.** A 21-day forward return needs 21 trading days after the cross-section, so the latest evaluable cross-section remains 2026-10-06. Prices from 10-07 to 11-04 in the cache only "settle" that 10-06 cross-section; no new cross-section has been produced, and not a single close after 11-05 has entered the cache.

## 2. What is new versus what is carried over

**Conclusion: zero new observations — everything is an extension of existing state.** Every field for the seven factors and the seven sector momentum series differs from the 2026-11-14 run by 0.000000, and `prices_cache.parquet` is byte-identical before and after the run (3,091,640 bytes, 677 rows), which confirms that every download failed and the cache was rewritten unchanged.

This is the 8th consecutive run with not one digit changed, and the 9th run supported by the same price snapshot (through 11-04). The only thing that moved is the z-score — not because factor values changed, but because the z baseline window rolled forward one slot (see section 6, item 4).

## 3. Full seven-factor table

| Factor | IC | ICIR | p (overlap NOT adjusted) | Valid x-sections | Prior IC (11-14) | Diff | NW t (local recompute) | Last 3 x-sections | Last 10 x-sections | Long-short Q1−Q5 |
|--------|------:|------:|------:|------:|------:|------:|------:|------:|------:|------:|
| MOM | **+0.0625** | +0.2145 | 0.1940 (ns) | 39 | +0.0625 | 0.000000 | +0.46 | -0.4280 | -0.3167 | -0.7948% |
| EP | -0.0068 | -0.0385 | 0.8137 (ns) | 39 | -0.0068 | 0.000000 | -0.09 | +0.2391 | +0.2269 | -0.4172% |
| BP | -0.0888 | -0.6087 | 0.0006 (***) | 39 | -0.0888 | 0.000000 | -1.69 | +0.0774 | +0.0518 | +1.1281% |
| FCF Yield | -0.0028 | -0.0150 | 0.9268 (ns) | 39 | -0.0028 | 0.000000 | -0.04 | +0.2433 | +0.1984 | -0.3107% |
| ROE | +0.0523 | +0.7915 | 0.00002 (***) | 39 | +0.0523 | 0.000000 | +2.06 | +0.0214 | +0.0348 | -0.0272% |
| VOL | -0.0212 | -0.1323 | 0.4198 (ns) | 39 | -0.0212 | 0.000000 | -0.29 | -0.2561 | -0.2256 | -0.1647% |
| SIZE | +0.0601 | +0.3464 | 0.0393 (*) | 39 | +0.0601 | 0.000000 | +0.75 | -0.2598 | -0.1940 | -0.5902% |

- The p-values come from a plain one-sample t-test and are **not adjusted for overlapping samples**: 21-day forward returns mean adjacent cross-sections share 20 days, the IC series is highly autocorrelated, and plain t understates the standard error. The p-values here are a **lower bound** on the true p; do not write "highly significant, not random noise" on the basis of them.
- `NW t` is a local Newey-West recompute (lag=20, Bartlett kernel), **not a script output**. After adjustment only ROE (+2.06) barely clears 1.96; BP (-1.69), SIZE (+0.75), MOM (+0.46), VOL (-0.29), EP (-0.09) and FCF Yield (-0.04) are all insignificant. With 39 heavily overlapping cross-sections the effective independent sample is far smaller than 39.
- ICIR = IC mean / IC standard deviation. It measures the stability of the rank correlation, **not a strategy Sharpe and not annualized return**.
- The long-short column is **Q1 − Q5 (low-factor bucket minus high-factor bucket)**, verified against `quantile_returns` in the code. Its opposite sign to IC is self-consistent (a positive IC implies a negative value here). **Costs are not deducted, so it is not an implementable strategy return.**

![Factor IC Overview](/charts/factor-ic-2026-11-17.png)

> Figure 1: 21-day holding-period mean IC across the seven factors. The filename carries the run date 2026-11-17; the underlying prices actually end **2026-11-04** and the evaluation window is **2026-08-12 → 2026-10-06**. Asterisks in the figure likewise reflect unadjusted, overlap-ignoring t-tests. The BP label slightly overlaps the axis text in the figure; use the table in the body for exact values.

## 4. Sector momentum table and coverage

| Sector | Valid tickers | IC | ICIR | p | Long-short Q1−Q5 |
|--------|------:|------:|------:|------:|------:|
| Consumer Staples | 36 | **+0.2132** | +0.9720 | <1e-6 | -1.8856% |
| Consumer Discretionary | 48 | **+0.2059** | +1.1447 | <1e-6 | -2.9767% |
| Health Care | 59 | +0.1023 | +0.4366 | 0.0105 | -4.5631% |
| Industrials | 79 | +0.0335 | +0.0963 | 0.5561 | -0.4162% |
| Utilities | 31 | -0.0408 | -0.3134 | 0.0608 | +1.7728% |
| Financials | 76 | -0.0985 | -0.2858 | 0.0862 | +2.2587% |
| Information Technology | 73 | -0.0993 | -0.1861 | 0.2586 | **+7.4083%** |

Bit-identical to 11-14; the sector sign pattern is unchanged, so **new sector-level reversals: 0**. Five sectors are positive and two negative; the negative ones are IT and Financials — precisely the two blocks where momentum had been concentrated over the past two years. IT's Q1−Q5 of +7.41% means low-momentum tech names outperformed high-momentum tech names by 7.4 percentage points over the following 21 days — a textbook reversal shape — but its IC standard deviation of 0.534 is the highest in the table, so cross-sectional dispersion is extreme.

**Coverage: 7 of 11 GICS sectors, 402 tickers (the sector map has 503).** Not covered: Real Estate (31 mapped, only 29 in the fundamental panel, below the 30-per-cross-section threshold), Materials (26), Communication Services (23, of which 18 have panel data) and Energy (21). Keep in mind when reading the table that nearly half of GICS is absent — Energy and Communication Services, two sectors tightly linked to the current AI narrative, are exactly the ones missing.

![Sector Momentum](/charts/sector-mom-2026-11-17.png)

> Figure 2: momentum factor decomposed by GICS sector. The filename date is the run date 2026-11-17; prices actually end **2026-11-04** on the same caliber as above. Energy / Materials / Communication Services / Real Estate are not shown.

## 5. What this implies for strategy, and what cannot be inferred

**Three things that can be said:**

1. **These readings carry no allocation value right now — not because the factors are weak, but because the data is stale.** The evaluation window ends 2026-10-06, prices end 2026-11-04, while the market has already traded through 11-16. Any position change based on this table amounts to explaining mid-November with early-October cross-sections. The gap is now 8 consecutive sessions; on the first successful refresh several cross-sections will roll in at once and the readings will jump visibly — that is backfilling, not a regime break.
2. **The direction flip inside the window is worth remembering, but it describes realized history.** Across the 39 cross-sections, August was a momentum month (mean MOM +0.246, EP -0.044, FCF -0.013), September was mixed (MOM +0.026, BP -0.153, ROE +0.098), and 1–6 October flipped hard (MOM -0.391, VOL -0.256, SIZE -0.243, EP +0.235, FCF +0.231). The turning point was 09-17: EP went from -0.140 to 0.000, FCF turned positive at +0.033, MOM turned negative at -0.133 and VOL at -0.187; divergence widened from 09-23. Those cross-sections' forward windows actually span late September into the 11-04 close — they describe the already-realized pattern of "growth/momentum underperforming, cheap and high-cash-flow outperforming in October."
3. **Full-window means are dominated by the distant past; reading only the sign can invert the message.** MOM is +0.0625 over the full window but -0.3167 over the last 10 cross-sections and -0.4280 over the last 3. EP is -0.0068 over the full window but +0.2269 over the last 10 and +0.2391 over the last 3; FCF Yield -0.0028 vs +0.1984; SIZE +0.0601 vs -0.1940. When the full mean and the recent end disagree this strongly, saying "momentum still works" or "value doesn't work" is treating August data as the current state.

**What cannot be inferred:**

- ❌ **Do not** read a positive MOM as "the market will rise tomorrow." MOM measures the return spread between high- and low-momentum names inside the sample — not index direction, and certainly not a probability of decline. MOM's negative last-10 reading only says historical winners underperformed losers over the subsequent 21 days within the sample; it does not make every laggard a buy.
- ❌ **Do not** extrapolate a positive SIZE into "small caps will underperform the whole market." SIZE is only a relative ranking within these 502 large-cap constituents — the small-cap universe is not in the sample at all. And full-window +0.0601 versus last-3 -0.2598 points the other way.
- ❌ **Do not** claim "a value rotation is confirmed." EP / BP / FCF Yield are still negative over the full window; the positive readings appear only in the last 10 cross-sections, which share heavily overlapping forward windows, so their independent information is far less than 10.
- ❌ **Do not** treat "two sectors are negative" as "two new reversals." The sector sign pattern is identical to the prior run; new reversals this run: 0 at factor level, 0 at sector level.
- ❌ **Do not** treat the long-short column as strategy returns. It is an average of Q1−Q5 across 39 cross-sections with no costs and no turnover or impact modeling; IT's +7.41% in particular would be largely consumed by 21-day rebalancing friction in practice.

## 6. Statistical and data limitations

1. **No new prices; every reading is frozen.** The price cache `index[-1]` = 2026-11-04, 8 trading days behind the latest session (2026-11-16). Verification: check the cache's last date and file size independently — both 3,091,640 bytes / 677 rows before and after this run, confirming all downloads failed and the cache was rewritten unchanged. Exit code 0 does not mean prices were updated.
2. **Rate limiting is intermittent — do not treat it as a network fault.** This run `yf.download` raised `YFRateLimitError`, a bare requests call to the chart endpoint returned 403, and DNS resolved normally: classic yfinance throttling. Historically the same IP and version recover the next day (on 10-21 both query endpoints returned 429 while 10-22 worked fine). The daily discipline is one check: does the cache's `index[-1]` equal the latest trading day? The first run after recovery will jump visibly and should be labeled "first new snapshot."
3. **Baseline contamination, quantified.** `ic_history.json` holds 269–270 raw records per factor across **151 unique dates**; the share of adjacent dates with bit-identical values is 145/150 (97%) for EP/BP/FCF Yield/ROE and 98/150 (65%) for MOM/VOL/SIZE. Eight consecutive sessions writing the same numbers deepen this duplication further; z means are dominated by a single regime and the standard deviation is overstated, so **the number of red flags is not the number of independent risk events**.
4. **z levels cannot be compared across days.** This run's four alarms are EP z=+2.60, BP z=-2.53, FCF Yield z=+2.61 and ROE z=+2.55; on 11-14 the same caliber gave +2.81 / -2.73 / +2.82 / +2.75 while `ic_mean` was bit-identical. The entire difference comes from the "last 60 unique dates" baseline rolling forward one slot, and **it is not a signal**.
5. **The four fundamental alarms are a caliber break, not a factor flip.** On the 2026-11-05 panel rebuild, EP jumped from -0.0480 to -0.0128, BP from +0.0030 to -0.0928, FCF Yield from -0.0352 to -0.0088 and ROE from -0.0248 to +0.0530 — the same day as `combined_panel.pkl`'s `generated_at` (2026-11-05 08:49). This run's z baseline still contains **52 of 60 dates from the pre-11-05 caliber** and only 8 from the new one, which is exactly why all four sit at ±2.5–2.6 sigma. Treat it as "data caliber updated, historical series not comparable." The panel is now 11 days old, past the script's 7-day auto-annotation threshold, so STEP 4 reports only "fresh" and does not warn about the caliber break — remember this manually.
6. **Sign status (`ic_history`, deduplicated by date, 151 unique dates).** MOM last changed sign on 2026-10-06 (-0.0012 → +0.0158) and has been positive since; VOL turned negative on 2026-10-31 (+0.0057 → -0.0033); SIZE turned positive on 2026-10-01 (-0.0042 → +0.0032). BP and ROE change points are the 2026-11-05 panel caliber switch (BP +0.0030 → -0.0928, ROE -0.0248 → +0.0530) and are caliber breaks, not factor flips. EP and FCF Yield have never been positive across the 151 deduplicated dates. No sign changed in this run.
7. **Neither overlapping samples nor multiple testing are handled.** Beyond IC autocorrelation, 7 factors x 7 sectors are tested over the same window without multiple-comparison correction. This report therefore makes no claim that any factor is "significantly effective."
8. **The fundamental panel does not refresh itself.** Financial data ends 2026-11-04; the next round of validity depends on rerunning `fetch_fundamental_panel.py` (about 13 minutes). Without a rerun it freezes again.

---

*Data source: local `scripts/factor_data/` (price cache, TTM fundamental panel, share cache, GICS sector map). Every reading is reproducible with `python3 scripts/factor_lab.py --factor all`. This report is not investment advice and contains no individual buy or sell instructions.*
