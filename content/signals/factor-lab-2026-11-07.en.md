---
title: "Factor Lab Daily Brief 2026-11-07"
date: 2026-11-07
description: "Third consecutive run on the same price snapshot: the price cache still ends at the 2026-11-04 (Wednesday) close, and both the 11-05 and 11-06 sessions are missing (yfinance 429). IC, ICIR, p-values and quantile spreads for all seven factors and all seven sector-momentum builds are bit-identical to the 11-06 run (differences 0.000000), i.e. continuation of an existing state with zero new observations. The latest evaluable cross-section is still 2026-10-06 (39 cross-sections, 08-12 to 10-06). The fundamental panel was rebuilt on 11-05 (financials through 11-04), so the EP/BP/FCF/ROE z-scores (+5.78 / -5.24 / +5.85 / +5.35) reflect a data-basis break; the BP and ROE sign changes occurred on the basis-switch date and must not be read as factor flips. Genuine new factor-level and sector-level sign reversals: zero."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-07

## 1. Data cutoff, sample and evaluation basis

| Item | Value |
|------|-------|
| Run time | 2026-11-07 (Saturday) 06:41 CST = 2026-11-06 (Friday) 17:41 EST |
| **Price data cutoff** | **2026-11-04 (Wednesday close)** — 677 rows × 502 columns (from 2024-02-26); file mtime still 2026-11-05 06:41 |
| New sessions added this run | **0** (neither the 11-05 Thursday nor the 11-06 Friday close was obtained) |
| Reason | `yf.download` returned `YFRateLimitError` for all test tickers; independent check `curl query1.finance.yahoo.com` → HTTP 429, DNS resolves normally (not a network outage) |
| Fundamental panel | Built 2026-11-05, financials through **2026-11-04**, 500 tickers (1 day old — **inside the 7-day window for a basis break**) |
| Sample | 502 tickers with prices; fundamentals valid for 488 (EP/BP/FCF) and 459 (ROE) |
| Evaluation window (all seven factors) | **2026-08-12 → 2026-10-06, 39 valid cross-sections each** |
| Holding period | 21 trading days forward return (`--holding 21`, script default, unchanged this run) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average over those 39 historical cross-sections** — not today's IC, not a future return, not a probability of decline |

**Price cutoff is not the same as the latest evaluable date.** A 21-day forward return needs 21 more trading days after a cross-section, so the latest evaluable cross-section is **2026-10-06** (`prices.index[-22]`). Prices for 10-07 through 11-04 are in the cache but have not yet produced any IC reading; prices for 11-05 and 11-06 were never obtained.

## 2. What is new this run vs. what continues

**Conclusion: zero new observations. All readings for the seven factors and the seven sector-momentum builds are bit-identical to the 2026-11-06 run, differences 0.000000; genuine new factor-level and sector-level sign reversals are both zero. This is continuation of an existing state.**

The test is bit-for-bit comparison, not "the numbers look close": this run and the 11-06 06:40 run read the same price cache (502 columns, same mtime). MOM's `ic_mean` is `+0.062494` in both, VOL's is `-0.021198` in both, and the seven sector values differ by `max abs = 0.0`.

| Factor | IC (11-06 run) | IC (this run) | Difference | Nature |
|------|------:|------:|------:|------|
| MOM | +0.062494 | **+0.062494** | 0.000000 | No new prices; state continues |
| EP | -0.006821 | **-0.006821** | 0.000000 | Same |
| BP | -0.088770 | **-0.088770** | 0.000000 | Same |
| FCF Yield | -0.002813 | **-0.002813** | 0.000000 | Same |
| ROE | +0.052257 | **+0.052257** | 0.000000 | Same |
| VOL | -0.021198 | **-0.021198** | 0.000000 | Same |
| SIZE | +0.060134 | **+0.060134** | 0.000000 | Same |

**Three consecutive run days have shared a single price snapshot.** Across 10-31, 11-03, 11-04 and 11-05 each run had a fresh close (MOM 0.1013 → 0.0896 → 0.0770 → 0.0625). After 11-05 06:41, yfinance has been rate-limiting for three days straight, so the runs at 11-05 06:41, 11-06 06:40 and 11-07 06:42 all see the same cache ending 11-04. The 0.000000s above mean the data pipeline is frozen, not that the market stood still.

**Fundamental factors: the data basis changed on 11-05; the historical series is not comparable.** The panel was rebuilt on 2026-11-05, pushing financials from an old snapshot ending 2026-05-28 to 2026-11-04, and the evaluation window moved from 60 frozen cross-sections (2026-03 to 05) to the current 39 (2026-08-12 to 10-06). Therefore:

- Subtracting this run's readings from anything before 11-05 is meaningless (window, sample and financial snapshot all changed).
- BP turning negative (-0.0928) and ROE turning positive (+0.0530) both happened on **2026-11-05, the basis-switch date**. That is a basis break, not a factor flip, and is not interpreted as a signal here.
- Since 11-05, SIZE is `log(price × shares outstanding)` (`shares_cache.json`, 499 tickers), i.e. true market cap; `ic_history` entries before 11-05 are log(price). The two segments cannot be compared directly.

## 3. Full seven-factor table (21-day holding period, cross-sectional rank IC)

| Factor | IC mean | ICIR | Prior IC | Difference | Valid obs | Share of positive IC | p-value (unadjusted) | NW t (adjusted) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.0625** | +0.2145 | +0.0625 | 0.0000 | 39 | 53.8% | 0.1940 | +0.46 | -0.79% |
| EP (earnings yield) | **-0.0068** | -0.0385 | -0.0068 | 0.0000 | 39 | 48.7% | 0.8137 | -0.09 | -0.42% |
| BP (book-to-price) | **-0.0888** | -0.6087 | -0.0888 | 0.0000 | 39 | 38.5% | 0.0006 | -1.69 | +1.13% |
| FCF Yield | **-0.0028** | -0.0150 | -0.0028 | 0.0000 | 39 | 51.3% | 0.9268 | -0.04 | -0.31% |
| ROE | **+0.0523** | +0.7915 | +0.0523 | 0.0000 | 39 | 79.5% | <0.0001 | +2.06 | -0.03% |
| VOL (volatility) | **-0.0212** | -0.1323 | -0.0212 | 0.0000 | 39 | 51.3% | 0.4198 | -0.29 | -0.16% |
| SIZE (market cap) | **+0.0601** | +0.3464 | +0.0601 | 0.0000 | 39 | 66.7% | 0.0393 | +0.75 | -0.59% |

**Basis checks (code re-read this run, not taken from old docs):**

- **The long-short column is Q1 − Q5** (low-factor group minus high-factor group), per `quantile_returns` lines 346–347; with a positive IC this value is negative, which is self-consistent. There is no "long Q5" reading. The figures are gross, not annualised, and not an implementable strategy return.
- `n_ic_obs = 39` is the true IC series length: the nominal window takes the last 60 dates, and the final 21 have no forward return yet and are skipped. The four fundamental factors also show 39 cross-sections this run (constrained by forward-return availability, not a frozen sample).
- SIZE uses true market cap (fixed on 11-05) and is comparable only after 11-05.

**Sign status (last genuine sign change per factor after de-duplicating `ic_history` by date):** MOM 2026-10-06 (+0.0158), VOL 2026-10-31 (-0.0033), SIZE 2026-10-01 (+0.0032); the BP and ROE "changes" both occurred at the 11-05 basis switch; EP and FCF Yield have **never** turned positive across 145 de-duplicated run days. There is no factor-level sign flip this run.

### Full-window mean alongside recent cross-sections (window geometry, not new data)

| Factor | 39-section mean | Aug (14) | Sep (21) | Oct (4) | Last 10 | Last 3 | Consecutive same-sign sections |
|------|------:|------:|------:|------:|------:|------:|------:|
| MOM | +0.062 | **+0.246** | +0.026 | **-0.391** | **-0.317** | **-0.428** | 15 negative |
| EP | -0.007 | -0.044 | -0.028 | **+0.235** | +0.227 | +0.239 | — |
| BP | -0.089 | -0.041 | -0.153 | +0.079 | +0.052 | +0.077 | — |
| FCF Yield | -0.003 | -0.013 | -0.040 | **+0.231** | +0.198 | +0.243 | — |
| ROE | +0.052 | -0.006 | +0.098 | +0.014 | +0.035 | +0.021 | — |
| VOL | -0.021 | +0.065 | -0.034 | -0.256 | -0.226 | -0.256 | 14 negative |
| SIZE | +0.060 | +0.161 | +0.051 | **-0.243** | -0.194 | -0.260 | 12 negative |

Two points must be read separately:

1. **The positive MOM full-window mean is still entirely carried by August.** August's 14 cross-sections average +0.246, September's 21 average +0.026, October's 4 average -0.391; the last 15 evaluable cross-sections are all negative and the last 3 average -0.428. The +0.062 full-window figure and the negative recent run are two facts about one dataset, not two conclusions.
2. **The four fundamental factors are all positive in October's 4 cross-sections (EP +0.235, FCF +0.231, BP +0.079, ROE +0.014), but those are 4 adjacent cross-sections overlapping 20 trading days each** — less than one independent observation — so they cannot support a "value rotation is back" claim; the full-window means for EP and FCF remain near zero (p=0.81, 0.93).

## 4. Sector momentum table and coverage

![Sector momentum decomposition 2026-11-07](/charts/sector-mom-2026-11-07.png)

*Caption: sector momentum IC means. Prices through the 2026-11-04 (Wednesday) close (not updated this run); evaluation window 2026-08-12 → 2026-10-06 (39 cross-sections); 21-day holding period. Covers only the 7 GICS sectors with ≥30 valid constituents, 402 stocks in total. Values are bit-identical to the 11-06 version (all differences 0.0).*

| Sector | IC mean | ICIR | Prior IC | Difference | Stocks | Last 10 | Last 3 | Latest cross-section 10-06 | Long-short Q1−Q5 | Sign since |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|-----:|-----:|---|
| Consumer Staples | **+0.2132** | +0.972 | +0.2132 | 0.0 | 36 | -0.109 | -0.190 | -0.265 | -1.89% | positive, 2026-09-24 |
| Consumer Discretionary | **+0.2059** | +1.145 | +0.2059 | 0.0 | 48 | -0.053 | -0.198 | -0.133 | -2.98% | positive, 2026-09-22 |
| Health Care | **+0.1023** | +0.437 | +0.1023 | 0.0 | 59 | -0.148 | -0.178 | -0.311 | -4.56% | positive, 2026-09-24 |
| Industrials | +0.0335 | +0.096 | +0.0335 | 0.0 | 79 | -0.426 | -0.509 | -0.518 | -0.42% | positive, 2026-10-07 |
| Utilities | -0.0408 | -0.313 | -0.0408 | 0.0 | 31 | **+0.089** | **+0.161** | +0.257 | +1.77% | negative, 2026-08-19 |
| Financials | -0.0985 | -0.286 | -0.0985 | 0.0 | 76 | -0.466 | -0.549 | -0.499 | +2.26% | negative, 2026-08-19 |
| Information Technology | -0.0993 | -0.186 | -0.0993 | 0.0 | 73 | **-0.734** | **-0.774** | -0.774 | +7.41% | negative, 2026-10-23 |

(IC means and ICIR come from the script's JSON output; the "last 10 / last 3 / latest cross-section" columns are cross-section series statistics recomputed for this report, not mixed with the ICIR denominator basis.)

**Coverage: only 7 of the 11 GICS sectors are reported, 402 stocks (80.1% of 502).** The gap is structural: Real Estate maps 31 names but its median per-cross-section count falls below the 30-name threshold, so it is screened out; Materials (26), Communication Services (22) and Energy (21) never clear the threshold. **Energy and Communication Services — two sectors that matter a lot to current narratives — are entirely absent, so this table cannot stand in for market-wide sector rotation.**

**The recent readings are co-directional, not seven independent signals.** Six of seven sectors have negative last-3 means (IT -0.774, Financials -0.549, Industrials -0.509, Consumer Discretionary -0.198, Consumer Staples -0.190, Health Care -0.178); only Utilities is positive (+0.161). They are driven by the same cluster of overlapping late-September to early-October cross-sections, so they must not be counted as "seven sectors each showing momentum failure".

Two easy misreadings: **Financials has IC -0.099 and a last-3 mean of -0.549, yet long-short Q1−Q5 is +2.26%** — a negative IC and a positive Q1−Q5 are self-consistent (Q1 is the low-momentum group) and do not mean "the low-momentum group makes money"; its share of positive single-period IC is only 38.5%. **IT has IC -0.099 and long-short +7.41%** — that is a group-mean difference, gross of costs and unweighted by market cap, not an achievable return.

![Factor IC overview 2026-11-07](/charts/factor-ic-2026-11-07.png)

*Caption: seven-factor IC means, prices through the 2026-11-04 (Wednesday) close, uniform evaluation window 2026-08-12 → 2026-10-06 (39 cross-sections). The `***` markers are based on unadjusted ordinary t-tests and contradict the overlap-adjusted results; do not quote them directly.*

## 5. Strategy implications, and what cannot be inferred

**What can be said:**

1. **There is no new information this run; it only confirms the third day of a frozen pipeline.** All seven factor and seven sector readings are bit-identical to 11-06, differences 0.000000. Any "momentum changed today" statement in this issue is a data gap read as a market move.
2. **When data returns, readings will jump, and the size of the jump is predictable.** The first successful run will add the 11-05 and 11-06 closes at once, rolling the window forward by 2 cross-sections (adding the 2026-10-07 and 10-08 ICs). Given the broadly negative recent cross-sections, the full-window means for MOM/VOL/SIZE will most likely move lower — **that is data catch-up, not a new regime break**, and must be labelled "first new snapshot".
3. **The recent MOM behaviour remains the one fact worth tracking**: full-window +0.062, last 10 cross-sections -0.317, last 3 -0.428, 15 consecutive negative evaluable cross-sections. This conclusion is unaffected by the data gap because it is already in the cache.
4. **The only statistically defensible factor is ROE, and only barely**: ordinary t=4.88, overlap-adjusted NW t=+2.06, just above 1.96, with the highest share of positive single-period IC (79.5%); but long-short Q1−Q5 is only -0.03%, so the return spread between groups is essentially zero — **stable IC does not mean a profitable factor**.
5. **The sector picture is unchanged**: Consumer Staples/Discretionary and Health Care positive over the full window, IT/Financials/Industrials negative, and 6 of 7 sectors negative recently. This looks more like broad momentum failure within the sample than a clean rotation out of tech into consumer.

**What cannot be inferred:**

- **Positive MOM ≠ the market must rise.** This is 21-day cross-sectional relative strength, a different statistical object from index direction.
- **The latest MOM cross-section of -0.445 ≠ all laggards are worth buying.** It only says the low-momentum group relatively outperformed in that sample; it does not distinguish "fell less" from "genuinely strong".
- **Positive SIZE ≠ a small-cap market.** It only says large caps relatively outperformed within this sample; it cannot be extrapolated to small caps market-wide.
- **Negative or near-zero EP / FCF Yield ≠ value rotation confirmed, and ≠ value rotation disproved.** The full-window means sit near zero and are insignificant; the window has no resolving power, so neither conclusion follows.
- **BP turning negative and ROE turning positive ≠ factor flips.** Both occurred on the 2026-11-05 panel rebuild; that is a basis break.
- **The current count of negative sectors (4) ≠ the count of new reversals (0).** Different definitions; a tally of red lights is not a count of independent risk events.
- **This issue contains no factor readings for 10-07 through 11-06 at all.** The report is not a directional call on the next session and contains no specific trading instruction.

## 6. Statistical and data limitations

1. **p-values are unadjusted for overlapping samples and are only a lower bound.** 21-day forward returns make adjacent cross-sections overlap 20 trading days, and this run's IC series has AR(1) of 0.906–0.964. Locally recomputed Newey-West (lag=20, Bartlett kernel): MOM +1.32 → **+0.46**, EP -0.24 → **-0.09**, BP -3.75 → **-1.69**, FCF -0.09 → **-0.04**, ROE +4.88 → **+2.06**, VOL -0.82 → **-0.29**, SIZE +2.14 → **+0.75**. **These are recomputed values, not script output**; after adjustment only ROE barely clears 1.96, so "highly significant, not random noise" is not a defensible claim.
2. **ICIR is IC mean ÷ IC standard deviation**, a measure of IC stability within the window. It is **not a strategy Sharpe ratio and not an annualised return**, and it is gross of trading costs and turnover.
3. **The anomaly-detection baseline is polluted by duplicate records.** `ic_history` now holds 145 de-duplicated run days across 263 records; the share of dates bit-identical to the previous date is 92/144 for MOM/VOL/SIZE and 139/144 for EP/BP/FCF/ROE (long fundamental freezes amplify duplication). This run appended yet another record bit-identical to 11-06, deepening the duplication. **A count of red lights is not a count of independent risk events.**
4. **This run's four fundamental z-score warnings (EP z=+5.78, BP z=-5.24, FCF z=+5.85, ROE z=+5.35) are all basis breaks**, and STEP 4 of `factor_lab_daily.py` already prints the "panel refreshed within 7 days, historical baseline is the old basis" notice, consistent with this section. Genuine new factor-level and sector-level sign reversals: 0.
5. **The missing prices are a data-source problem, not a script problem; no script was modified this run.** The chain of evidence: `curl` 429, `yf.download` returning `YFRateLimitError` for every test ticker, DNS resolving normally, and the cache mtime unchanged at 2026-11-05 06:41. Rate limiting is intermittent (on 2026-10-21→22 it recovered by itself), so no source switch and no threshold change this run.
6. **The cross-section is not the whole market.** 502 S&P 500 constituents have prices, 500 have fundamentals (488/459 after alignment), and the sector table covers 402 names; Energy, Communication Services, Materials and Real Estate are absent. Any "market-wide" conclusion exceeds the sample boundary.
