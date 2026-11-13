---
title: "Factor Lab Daily Brief 2026-11-14"
date: 2026-11-14
description: "The price cache still ends at 2026-11-04: all seven US closes from 11-05 through 11-13 are missing (yfinance HTTP 429), and all seven factor readings plus the seven sector-momentum readings are bit-identical to the previous run for a seventh consecutive day, a difference of 0.000000. This is an unchanged state, not a new observation. The evaluation window remains 39 cross-sections from 2026-08-12 to 2026-10-06, whose 21-day forward returns completed at the 11-04 close. Inside the window the direction flips between 09-17 and 09-23: EP/FCF turn positive while MOM/VOL/SIZE turn negative, and the full-window mean is flattened by the August block. The four z-score alarms (+/-2.7 to 2.8 sigma) stem from the 2026-11-05 panel rebuild; 53 of the 60 unique baseline dates still come from the old panel definition."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-14

## 1. Data cutoff, sample and evaluation conventions

| Item | Value |
|------|-------|
| Run date | 2026-11-14 (Saturday) 06:40–06:54 CST = 2026-11-13 (Friday) 17:40 EST, after that session's close |
| **Price data cutoff (cache)** | **2026-11-04 (Wednesday close)**, 677 trading days × 502 names |
| New trading days this run | **0** (11-05, 11-06, 11-09, 11-10, 11-11, 11-12 and 11-13 all missing) |
| Reason for the gap | `yf.download` on three probe tickers (AAPL/MSFT/NVDA) raised `YFRateLimitError`; bare `curl` to `query1.finance.yahoo.com` returned **HTTP 429**; DNS resolves normally (198.18.1.138, via proxy) — **rate limiting, not a network outage and not a script failure**. The script falls back to cache by design and exits 0 |
| Last run that obtained a new close | 2026-11-05 06:41, which added the 11-04 close |
| Run days supported by this one snapshot | **8th** (11-05, 06, 07, 10, 11, 12, 13, 14) |
| Consecutive run days with identical readings | **7th** (11-06 / 07 / 10 / 11 / 12 / 13 / 14) |
| Evaluation window | **2026-08-12 → 2026-10-06**, **39 valid cross-sections** per factor |
| Latest evaluable cross-section | **2026-10-06** (= `prices.index[-22]`); its 21-day forward return completed exactly at the 2026-11-04 close |
| Holding period | 21 trading days forward return (script default, configuration unchanged) |
| Sample | 502 names on price; 488 for EP / BP / FCF Yield, 459 for ROE |
| Size convention | `log(price × total shares)`, share cache covers 499 names |
| Fundamental panel | Generated 2026-11-05 08:49, financial data through 2026-11-04, 500 names. STEP 4 reports "fresh, 8 days old" |
| IC definition | Cross-sectional Spearman rank correlation. `ic_mean` is the **average of those 39 historical cross-sections** — not today's IC, not a forward return, not a probability of decline |

**The data cutoff is not the evaluation date.** A 21-day forward return requires 21 trading days after the cross-section, so the latest evaluable cross-section is stuck at 2026-10-06. The cached prices from 10-07 to 11-04 only "settle" that 10-06 cross-section; they create no new one. Not a single close after 11-05 has entered the cache.

## 2. New this run vs. unchanged state

**Conclusion: zero new observations; everything is a continuation of an existing state.** Every field for all seven factors and all seven sector-momentum series differs from the 2026-11-13 run by 0.000000, and `prices_cache.parquet` is byte-identical in size before and after the run (3,091,640 bytes, 677 rows) — the downloads all failed and the cache was rewritten unchanged.

This snapshot has now supported eight consecutive runs. For the past seven run days, not a single digit in the daily brief has moved. The only thing that changes is the z-score, and not because a factor value moved, but because the z baseline window slides one day (see section 6, item 4).

## 3. Full seven-factor table

| Factor | IC | ICIR | p (overlap uncorrected) | Effective CS | Prior IC (11-13) | Diff | NW t (local recompute) | Last 3 CS | Last 10 CS | Long-short Q1−Q5 |
|------|------:|------:|------:|------:|------:|------:|------:|------:|------:|------:|
| MOM | **+0.0625** | +0.2145 | 0.1940 (ns) | 39 | +0.0625 | 0.000000 | +0.46 | -0.4280 | -0.3167 | -0.7948% |
| EP | -0.0068 | -0.0385 | 0.8137 (ns) | 39 | -0.0068 | 0.000000 | -0.09 | +0.2391 | +0.2269 | -0.4172% |
| BP | -0.0888 | -0.6087 | 0.0006 (***) | 39 | -0.0888 | 0.000000 | -1.69 | +0.0774 | +0.0518 | +1.1281% |
| FCF Yield | -0.0028 | -0.0150 | 0.9268 (ns) | 39 | -0.0028 | 0.000000 | -0.04 | +0.2433 | +0.1984 | -0.3107% |
| ROE | +0.0523 | +0.7915 | 0.00002 (***) | 39 | +0.0523 | 0.000000 | +2.06 | +0.0214 | +0.0348 | -0.0272% |
| VOL | -0.0212 | -0.1323 | 0.4198 (ns) | 39 | -0.0212 | 0.000000 | -0.29 | -0.2561 | -0.2256 | -0.1647% |
| SIZE | +0.0601 | +0.3464 | 0.0393 (*) | 39 | +0.0601 | 0.000000 | +0.75 | -0.2598 | -0.1940 | -0.5902% |

- The p-values come from an ordinary one-sample t-test and are **not corrected for overlapping samples**: a 21-day forward return makes adjacent cross-sections share 20 days, so the IC series is highly autocorrelated and the ordinary t understates the standard error. These p-values are only a **lower bound** on the true p; never read them as "highly significant, not random noise".
- `NW t` is a local Newey-West recompute (lag=20, Bartlett kernel), **not script output**. After the correction only ROE (+2.06) marginally clears 1.96; BP (-1.69), SIZE (+0.75), MOM (+0.46) and VOL (-0.29) are all insignificant.
- ICIR = mean IC ÷ standard deviation of IC. It measures stability of the rank correlation, **not a strategy Sharpe ratio and not an annualized return**.
- The long-short column is **Q1 − Q5 (low-factor minus high-factor)**, verified against `quantile_returns` (lines 345–347). Its opposite sign to IC is self-consistent (a positive IC implies a negative value here). **No transaction costs are deducted; this is not an implementable strategy return.**
- The gap between the full-window mean and the last 10 cross-sections is the most informative feature this run: MOM +0.0625 full window vs. -0.3167 last 10; SIZE +0.0601 vs. -0.1940; VOL -0.0212 vs. -0.2256. Going the other way: EP -0.0068 vs. +0.2269; FCF Yield -0.0028 vs. +0.1984.

![Factor IC Overview](/charts/factor-ic-2026-11-14.png)

> Figure 1: 21-day holding-period IC means for the seven factors. The filename follows the run date (2026-11-14); the underlying data end at the **2026-11-04** close, with an evaluation window of **2026-08-12 → 2026-10-06**. Asterisks in the chart likewise come from the uncorrected ordinary t-test.

## 4. Sector momentum and coverage

| Sector | Valid names | IC | ICIR | p | Long-short Q1−Q5 |
|------|------:|------:|------:|------:|------:|
| Consumer Staples | 36 | **+0.2132** | +0.9720 | <1e-6 | -1.8856% |
| Consumer Discretionary | 48 | **+0.2059** | +1.1447 | <1e-6 | -2.9767% |
| Health Care | 59 | +0.1023 | +0.4366 | 0.0105 | -4.5631% |
| Industrials | 79 | +0.0335 | +0.0963 | 0.5561 | -0.4162% |
| Utilities | 31 | -0.0408 | -0.3134 | 0.0608 | +1.7728% |
| Financials | 76 | -0.0985 | -0.2858 | 0.0862 | +2.2587% |
| Information Technology | 73 | -0.0993 | -0.1861 | 0.2586 | **+7.4083%** |

Identical to 11-13 digit for digit; sector sign states are unchanged. **New sector-level reversals: 0.**

**Coverage: 7 of 11 GICS sectors, 402 names (the sector map holds 503).** Missing: Energy (21), Materials (26), Communication Services (23) and Real Estate (31). Each cross-section needs at least 30 names to enter the IC calculation, and these four sectors fall short in the momentum panel — they are skipped, not "broken factors". Bear in mind roughly half the GICS sectors are absent, including Energy and Communication Services, two sectors tightly linked to the current AI narrative.

![Sector Momentum](/charts/sector-mom-2026-11-14.png)

> Figure 2: momentum factor decomposed by GICS sector. Filename date is the run date (2026-11-14); data end at the **2026-11-04** close under the same conventions. Energy / Materials / Communication Services / Real Estate are not included.

## 5. What this implies for strategy — and what it does not

**Three things that can be said:**

1. **These readings carry no allocation value right now, and the reason is a data gap rather than weak factors.** The evaluation window ends 2026-10-06 and the price data end 2026-11-04, while the market has already traded through 11-13. Any position change based on today's IC is effectively using an early-October cross-section to explain mid-November markets. To judge the present, fix the price feed rather than keep reading this table.
2. **The direction flip inside the window is worth remembering, but it is not a signal about today.** Across the 39 cross-sections, momentum and large caps dominated through 09-16 while value was negative; from 09-17 EP/FCF turned positive and MOM/VOL/SIZE turned negative, with the divergence widening from 09-23 (MOM negative in all of the last 10 cross-sections, EP positive in all of the last 10). Those cross-sections' forward windows actually fall between mid-October and 11-04, i.e. they describe an already-realized stretch in which growth and momentum lagged while cheap and high-cash-flow names led. That supports "rotation happened" but **cannot** be used to predict direction after 11-13.
3. **The full-window mean is dominated by the distant end, so reading only the sign misleads.** MOM is +0.0625 over the full window but -0.3167 over the last 10 and -0.4280 over the last 3; EP is -0.0068 over the full window but +0.2269 over the last 10 and +0.2391 over the last 3. When the mean and the recent end diverge this far, calling momentum "still effective" or value "ineffective" is treating August data as the current state.

**Conclusions that explicitly cannot be drawn:**

- ❌ **Do not** read a positive MOM as "the index rises tomorrow". MOM measures the return spread of high-momentum names over low-momentum names within the sample — not index direction, and certainly not a probability of decline. A negative MOM over the last 10 cross-sections only says past winners underperformed past losers over the following 21 days; it does not mean every laggard is worth buying.
- ❌ **Do not** extrapolate a positive SIZE to "small caps will underperform the whole market". SIZE ranks relative size within 502 large-cap constituents; the small-cap universe is simply not in the sample.
- ❌ **Do not** claim "value rotation is confirmed". EP / BP / FCF Yield are all still negative over the full window; the positive values appear only in the last 10 cross-sections, and those 10 share heavily overlapping forward windows, so their independent information content is far below 10.
- ❌ **Do not** treat "3 sectors with negative IC" as "3 new reversals". Sector sign states are identical to the previous run; new reversals this run: 0 at factor level, 0 at sector level.
- ❌ **Do not** treat the long-short column as strategy return. It is an average of Q1−Q5 across 39 cross-sections, before costs and before turnover or market impact; IT's +7.41% in particular would be eaten into substantially by 21-day rebalancing frictions in live trading.

## 6. Statistical and data limitations

1. **Zero new market data; every reading is frozen.** The cache's `index[-1]` is 2026-11-04, seven trading days short of the most recent session (2026-11-13). The check is not the exit code (the script exited 0 normally) but the cache cutoff and file size: 3,091,640 bytes / 677 rows both before and after the run, meaning every download failed and the cache was rewritten unchanged. An exit code of 0 does not mean prices were updated.
2. **Rate limiting is intermittent; do not treat it as a network fault.** `query1` returned 429, `yf.download` raised `YFRateLimitError`, and DNS resolved normally (198.18.1.138) — a textbook yfinance throttle. Historically the same IP and version recover the next day. Per discipline, the daily routine is a single check: does `index[-1]` equal the latest trading day? When the feed recovers, the first day's readings will jump noticeably; that is several cross-sections being added at once, not a regime break.
3. **Quantified baseline contamination.** `ic_history.json` holds 268 raw records per factor across **150 unique dates**. The share of adjacent dates with bit-identical values is 144/149 (97%) for EP/BP/FCF Yield/ROE and 97/149 (65%) for MOM/VOL/SIZE. The z mean is dominated by a single regime and the standard deviation is overstated, so **the number of red flags is not a count of independent risk events**.
4. **Z-scores are not comparable across days.** This run's four alarms are EP z=+2.81, BP z=-2.73, FCF Yield z=+2.82 and ROE z=+2.75; on 11-13 the same convention gave +3.08 / -2.97 / +3.09 / +2.99, while `ic_mean` is bit-identical. The entire difference comes from the 60-unique-date baseline window sliding one slot, and **constitutes no signal**.
5. **The four fundamental alarms are a definitional break, not a factor reversal.** On 2026-11-05, the day the panel was rebuilt, EP jumped from -0.0480 to -0.0128, BP from +0.0030 to -0.0928, FCF Yield from -0.0352 to -0.0088 and ROE from -0.0248 to +0.0530; the step coincides with `combined_panel.pkl`'s `generated_at` (2026-11-05 08:49). **53 of the 60 unique baseline dates still come from the pre-11-05 definition**, only 7 from the new one — that is why all four land at ±2.7 to ±2.8 sigma simultaneously. Treat this as "data definition updated, historical series not comparable". The panel has not been refreshed for 8 days, past the script's 7-day threshold, so STEP 4 reports only "fresh" without the caveat; the reader has to remember it.
6. **Sign states (`ic_history` de-duplicated by date, 150 unique dates).** MOM's last sign change was 2026-10-06 (-0.0012 → +0.0158) and it has been positive since; VOL turned negative on 2026-10-31 (+0.0057 → -0.0033); SIZE turned positive on 2026-10-01 (-0.0042 → +0.0032); BP and ROE changed sign exactly on the 2026-11-05 definition switch (BP +0.0030 → -0.0928, ROE -0.0248 → +0.0530) and are treated as a break; EP and FCF Yield have never been positive across the 150 de-duplicated dates. This run contains no sign changes.
7. **Neither overlapping samples nor multiple testing is handled.** Beyond the IC autocorrelation, seven factors × seven sectors are tested simultaneously in the same window with no multiple-comparison correction. This brief therefore draws no conclusion of the form "factor X is significantly effective".
8. **The fundamental panel does not refresh itself.** Financial data end 2026-11-04; whether the next round is meaningful depends on re-running `fetch_fundamental_panel.py` (about 13 minutes). Without it, the panel freezes again.

---

*Sources: local `scripts/factor_data/` (price cache, TTM fundamental panel, share cache, GICS sector map). Every reading is reproducible with `python3 scripts/factor_lab.py --factor all`. This report is not investment advice and contains no individual buy or sell instructions.*
