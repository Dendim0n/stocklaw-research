---
title: "Factor Lab Daily Brief 2026-11-13"
date: 2026-11-13
description: "The price cache is still pinned at 2026-11-04: all six US closes from 11-05 through 11-12 were unavailable (yfinance 429), so the seven factor readings and seven sector-momentum readings are bit-identical to the previous three runs (difference 0.000000). This is continuation of an existing state, not a new signal. The evaluation window remains the 39 cross-sections from 2026-08-12 to 2026-10-06. The fundamental panel was rebuilt on 2026-11-05, so the four EP/BP/FCF/ROE z-score alarms are a caliber break. After Newey-West (lag=20) correction only ROE clears 1.96; BP, SIZE and MOM do not."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-13

## 1. Data cut-off, sample and evaluation conventions

| Item | Value |
|------|-------|
| Run date | 2026-11-13 (Fri) 06:45–06:52 CST = 2026-11-12 (Thu) 17:45 EST, after that session's close |
| **Price cache cut-off** | **2026-11-04 (Wed close)**, 677 trading days x 502 tickers |
| New trading days this run | **0** (the 11-05, 11-06, 11-09, 11-10, 11-11 and 11-12 closes are all missing) |
| Why unavailable | `yf.download` returned `YFRateLimitError` for all three probe tickers; bare `curl` to `query1/query2.finance.yahoo.com` returned **HTTP 429 / 429**; DNS resolves normally (198.18.1.138, via proxy) — **this is rate limiting, not a network outage and not a script bug**. The script fell back to cache and exited 0 by design |
| Last run that obtained a new close | the 2026-11-05 06:41 run |
| Which run day on this snapshot | **7th** (11-05, 11-06, 11-07, 11-10, 11-11, 11-12, 11-13) |
| Consecutive runs with identical readings | the 6th since 11-06 (11-06 / 07 / 10 / 11 / 12 / 13) |
| Evaluation window | **2026-08-12 → 2026-10-06**, **39 valid cross-sections** per factor |
| Latest evaluable cross-section | **2026-10-06** (= `prices.index[-22]`) |
| Holding period | 21-trading-day forward return (script default, configuration untouched) |
| Sample | 502 tickers on price; 488 valid on fundamentals (EP / BP / FCF Yield), 459 on ROE |
| Size definition | `log(price × total shares)`, share cache covers 499 names; the 3 missing names fall back to `log(price)` inside `build_size_panel` and sit in the same cross-section |
| Fundamental panel | Generated 2026-11-05 08:49, financial data through 2026-11-04, 500 names; STEP 4 reports "✅ fresh, 7 days ago" |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average of the 39 historical cross-sections** above — not today's IC, not a future return, not a probability of decline |

**The price cut-off is not the evaluable date.** A 21-day forward return requires 21 trading days after the cross-section, so the latest evaluable cross-section is 2026-10-06. The 10-07 to 11-04 bars already in the cache only served to settle that 10-06 cross-section; they produced no new evaluation point, and not a single close after 11-05 entered the cache.

## 2. New this run / continuation of existing state

**Conclusion: zero new observations, everything is continuation of an existing state.** Every field of the seven factors and the seven sector-momentum readings is bit-identical to the 2026-11-12 run (difference 0.000000), and the price cache file has the same md5 before and after the run (`08d08ff8…`), proving the download appended nothing and the old cache was simply rewritten.

The same market snapshot has now supported six consecutive runs. In other words, the factor readings have not moved a single digit over the past six trading days — whatever changed happened in rates, oil and single-name news, none of which enters this model.

## 3. Full seven-factor table

| Factor | IC | ICIR | p-value (overlap unadjusted) | Cross-sections | Prior IC (11-12) | Diff | NW t (local recompute) | Last 3 | Last 10 | Long-short Q1−Q5 |
|------|------:|------:|------:|------:|------:|------:|------:|------:|------:|------:|
| MOM | **+0.0625** | +0.2145 | 0.1940 (ns) | 39 | +0.0625 | 0.000000 | **+0.46** | -0.4280 | -0.3167 | -0.7948% |
| EP | -0.0068 | -0.0385 | 0.8137 (ns) | 39 | -0.0068 | 0.000000 | -0.09 | +0.2391 | +0.2269 | -0.4172% |
| BP | -0.0888 | -0.6087 | 0.0006 (***) | 39 | -0.0888 | 0.000000 | **-1.69** | +0.0774 | +0.0518 | +1.1281% |
| FCF Yield | -0.0028 | -0.0150 | 0.9268 (ns) | 39 | -0.0028 | 0.000000 | -0.04 | +0.2433 | +0.1984 | -0.3107% |
| ROE | +0.0523 | +0.7915 | 0.00002 (***) | 39 | +0.0523 | 0.000000 | **+2.06** | +0.0214 | +0.0348 | -0.0272% |
| VOL | -0.0212 | -0.1323 | 0.4198 (ns) | 39 | -0.0212 | 0.000000 | -0.29 | -0.2561 | -0.2256 | -0.1647% |
| SIZE | +0.0601 | +0.3464 | 0.0393 (*) | 39 | +0.0601 | 0.000000 | **+0.75** | -0.2598 | -0.1940 | -0.5902% |

- The p-values come from a plain one-sample t-test and are **not adjusted for overlapping samples**: a 21-day forward return makes adjacent cross-sections share 20 days, and the IC series has AR(1) of 0.78–0.94. The plain t thus understates the standard error, so these p-values are only a **lower bound** on the true p — they cannot be used to claim "highly significant, not random noise".
- `NW t` is a **local Newey-West recompute (lag=20, Bartlett kernel), not script output**. After correction only ROE (+2.06) clears 1.96; BP (-1.69), SIZE (+0.75), MOM (+0.46) and VOL (-0.29) are all insignificant.
- ICIR = mean IC ÷ standard deviation of IC. It measures stability of the rank correlation — **not a strategy Sharpe, not an annualized return**.
- The long-short column is **Q1 − Q5 (low-factor minus high-factor)**; the code in `quantile_returns` was checked. Its opposite sign to IC is self-consistent (a positive IC produces a negative value here), and it is **gross of trading costs — not an implementable strategy return**.
- "Last 3" and "Last 10" expose the divergence between the full-window average and recent direction: MOM full window +0.0625 vs last 10 -0.3167 vs last 3 -0.4280; SIZE +0.0601 / -0.1940 / -0.2598; VOL -0.0212 / -0.2256 / -0.2561.

![Factor IC Overview](/charts/factor-ic-2026-11-13.png)

> Figure 1: 21-day-holding IC means for the seven factors. The filename carries the run date 2026-11-13; the underlying market data actually end **2026-11-04**, and the evaluation window is **2026-08-12 → 2026-10-06**. The asterisks are likewise unadjusted for overlapping samples.

## 4. Sector momentum and coverage

| Sector | Valid stocks | IC | ICIR | p-value | Long-short Q1−Q5 |
|------|------:|------:|------:|------:|------:|
| Consumer Staples | 36 | **+0.2132** | +0.9720 | <1e-6 | -1.8856% |
| Consumer Discretionary | 48 | **+0.2059** | +1.1447 | <1e-6 | -2.9767% |
| Health Care | 59 | +0.1023 | +0.4366 | 0.0105 | -4.5631% |
| Industrials | 79 | +0.0335 | +0.0963 | 0.5561 | -0.4162% |
| Utilities | 31 | -0.0408 | -0.3134 | 0.0608 | +1.7728% |
| Financials | 76 | -0.0985 | -0.2858 | 0.0862 | +2.2587% |
| Information Technology | 73 | -0.0993 | -0.1861 | 0.2586 | **+7.4083%** |

**Coverage: 7 of 11 GICS sectors, 402 stocks in total** (the sector map holds 503 names). Energy (21), Materials (26), Communication Services (23) and Real Estate (31) are not covered: `calc_ic` requires at least 30 stocks per cross-section, and these four sectors do not have enough valid names in the momentum panel. Their absence is a sample-size limitation, not evidence that the factor fails there.

Two things to note when reading the table:

1. **Information Technology is the only "strong negative IC plus large long-short" combination**: IC -0.0993 (insignificant) with Q1−Q5 at +7.41% per 21 days, meaning that across the 39 cross-sections from 08-12 to 10-06 the low-momentum bucket inside IT clearly beat the high-momentum bucket. That is the exact opposite of the 2026-05 finding (IT momentum +0.52, ICIR 2.58). The same factor flips sign within the same sector when the regime changes — precisely why it cannot be treated as stable alpha.
2. **Consumer Staples and Consumer Discretionary both sit near +0.21 IC with ICIR around 1**, the most stable positive momentum readings across sectors; but the samples are only 36 / 48 names and the window is frozen, so they are not tradable signals.

![Sector Momentum](/charts/sector-mom-2026-11-13.png)

> Figure 2: momentum factor decomposed by GICS sector. The filename carries the run date 2026-11-13; market data end **2026-11-04** and the conventions are identical. Energy / Materials / Communication Services / Real Estate are absent from the chart.

## 5. Implications for strategy, and what cannot be inferred

**Three things that can be said:**

1. **These readings have no allocation value right now — not because the factors are weak, but because the data are stale.** The evaluation window ends 2026-10-06 and prices end 2026-11-04, while the market has already traded through 11-12. Any position change based on this issue is effectively using an early-October cross-section to explain a mid-November market. Judging the present requires fixing the price source first.
2. **The four fundamental factors are not yet calibrated in the new caliber.** Since the panel rebuild on 2026-11-05, EP/BP/FCF Yield/ROE have only six run days on the new caliber, while most of the z-score baseline comes from the old one. The z readings of +3.08 / -2.97 / +3.09 / +2.99 must therefore be read as "data caliber updated, historical series not comparable" — not a factor reversal and not a new signal. Until roughly 20 run days accumulate on the new caliber, both the ICIR and the significance of these four rows are reference only.
3. **Within the price-and-volume trio, the only thing worth watching is the MOM window divergence.** The full window is +0.0625, but last 10 is -0.3167 and last 3 is -0.4280: the positive full-window average is carried by the August cross-sections, while momentum was negative over the last two months (the cross-sections from September to early October). That "mean supported by the far end" structure carries more information than the sign of a single average.

**What explicitly cannot be inferred:**

- ❌ **Not** "the market will rise tomorrow" from a positive MOM. MOM measures the relative return spread between high- and low-momentum names within the sample — it is not index direction, still less a probability of decline.
- ❌ **Not** "small caps will lag the whole market" from a positive SIZE. SIZE ranks relative size inside these 502 large-cap constituents; the small-cap universe is excluded by construction.
- ❌ **Neither** "value rotation unconfirmed" **nor** "value rotation confirmed". The negative EP / BP / FCF Yield readings sit in a caliber transition after the panel rebuild, over only 39 cross-sections; the direction carries no explanatory power.
- ❌ **Not** "three sector reversals" from three negative sector readings. Sector sign states are identical to the prior run; new reversals this run: 0 at factor level, 0 at sector level.
- ❌ **Not** a strategy return from the long-short column. It is the average Q1−Q5 spread across 39 cross-sections, gross of costs, turnover and impact. IT's +7.41% in particular would be substantially eaten by the frictions of 21-day rebalancing in live trading.

## 6. Statistical and data limitations

1. **Zero new market data; every reading is frozen.** The price cache `index[-1]` is 2026-11-04, six trading days before the most recent session (2026-11-12). The check is not the exit code (the script exited 0) but the cache cut-off plus md5: identical before and after, which means the downloads all failed and the cache was rewritten unchanged.
2. **Rate limiting is intermittent; do not treat it as a network outage.** Both `query1` and `query2` return 429 while DNS resolves normally — the classic yfinance rate-limit pattern, and historically the same IP and version recover the next day. The daily discipline is one check only: confirm whether the cache `index[-1]` equals the latest trading day. When data resume, the first day's readings jump visibly because several cross-sections enter at once; that is backfill, not a regime break.
3. **Quantified baseline pollution.** `ic_history.json` holds 267 raw records and 149 unique dates per factor (44% duplication). Adjacent dates with bit-identical values: 143/148 (97%) for EP/BP/FCF/ROE and 96/148 (65%) for MOM/VOL/SIZE. The z-score mean is dominated by one regime and the standard deviation is inflated, so **the number of red flags is not a count of independent risk events**.
4. **The alarms are regime continuation, not same-day shocks.** All four alarms this run come from the fundamental factors, triggered by the 2026-11-05 panel rebuild (new caliber against an old baseline), unrelated to the day's market. Local recomputed z for the price trio: MOM +0.97, VOL -1.29, SIZE +0.86 — all inside 2σ.
5. **Sign states (`ic_history` deduplicated by date, 149 unique dates).** MOM last changed sign on 2026-10-06 (-0.0012 → +0.0158) and has been positive since; SIZE turned positive on 2026-10-01; VOL turned negative on 2026-10-31 (+0.0057 → -0.0033); the BP and ROE "changes" occurred on 2026-11-05, the day the panel caliber switched, so they are caliber breaks; EP and FCF Yield have never been positive across the 149 deduplicated dates.
6. **Neither overlapping samples nor multiple testing are handled.** Beyond IC autocorrelation, seven factors across seven sectors are tested in one window with no multiple-comparison correction. This report therefore makes no claim that any factor is significantly effective.
7. **The fundamental panel does not refresh itself.** STEP 4 shows it was rebuilt 7 days ago with financial data through 2026-11-04 and reports "fresh"; its next validity depends on rerunning `fetch_fundamental_panel.py`. Without a rerun it freezes again.

---

*Sources: local `scripts/factor_data/` (price cache, TTM fundamental panel, share cache, GICS sector map). Every reading can be reproduced with `python3 scripts/factor_lab.py --factor all`. This report is not investment advice and contains no buy or sell instructions for any security.*
