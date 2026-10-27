---
title: "Factor Lab Daily Brief 2026-10-28"
date: 2026-10-28
description: "Seven-factor IC scan on the S&P 500: the price cache now runs through the 2026-10-27 (Tuesday) close, and the 21-day forward-return requirement puts the latest evaluable cross-section at 2026-09-28. MOM +0.105 (-0.0005), VOL +0.015 (-0.0065), SIZE +0.096 (+0.0005); the four fundamental factors remain frozen on 2026-03-04 to 05-28. All changes come from the rolling window (08-03 dropped out, 09-28 added in), with the 38 overlapping cross-sections bit-identical and no historical revision. The incoming 09-28 cross-section printed MOM -0.237, VOL -0.179, SIZE -0.058, and the last three evaluable cross-sections average MOM -0.275, VOL -0.210. All six sector-level alerts are stale regime markers; new sign reversals today: zero."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-28

## 1. Data cutoff, sample and evaluation basis

| Item | Value |
|------|-----|
| Run date | 2026-10-28 (Wednesday) 06:43 CST |
| **Price cache cutoff** | **2026-10-27 (Tuesday close)**, 671 rows × 502 columns |
| Trading days added | 2026-10-27 (one full session; cache 670 → 671 rows) |
| Overlap with prior cache | 670 × 502 cells **all bit-identical** (`maxabs = 0.0`); the incremental download only appended rows, rewriting nothing |
| Universe | 502 S&P 500 constituents with complete prices (503 in the fundamental panel); ROE valid on 474 |
| Price-factor evaluation window | **2026-08-04 → 2026-09-28, 39 valid cross-sections** |
| Fundamental-factor evaluation window | **2026-03-04 → 2026-05-28, 60 valid cross-sections (panel frozen)** |
| Holding period | 21 trading days of forward return (script default `--holding 21`, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` in the tables is the **average across those 39 / 60 historical cross-sections** — not today's IC, not a future return, not a probability of decline |

**Data cutoff ≠ evaluable date.** A 21-day forward return requires 21 more trading days after each cross-section, so the latest evaluable cross-section is **2026-09-28** (`prices.index[-22]`), whose window completed exactly at the 10-27 close. The 21 sessions from 09-29 through 10-27 cannot be evaluated yet — **Tuesday's close only brought the 2026-09-28 cross-section into scope; no October price data has entered any IC reading yet.**

The previous run was 10-27 (Tuesday) 06:42, using the 10-26 close; this run advances exactly one trading day, with no gap and no backfill jump.

## 2. What is new versus what is simply carrying forward

**Bottom line: the three price factors genuinely advanced (the window rolled one day); the four fundamental factors carry forward unchanged (no new observations); no factor changed sign.**

| Factor | IC (10-27 run) | IC (this run) | Change | ICIR change | Nature |
|------|------:|------:|------:|-----------|------|
| MOM | +0.1054 | **+0.1049** | **-0.0005** | +0.421 → +0.418 | Window roll |
| VOL | +0.0214 | **+0.0149** | **-0.0065** | +0.164 → +0.112 | Window roll |
| SIZE | +0.0958 | **+0.0963** | **+0.0005** | +0.563 → +0.568 | Window roll |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged | No new observations (frozen) |

**Every change is explained by window entry/exit — not by data revisions, and not by a same-day shift in factor structure.**

- The 38 overlapping cross-sections are **bit-identical** to the previous run: recomputing the prior window on a cache truncated at 10-26 reproduces the MOM mean of +0.1054 exactly as recorded on 10-27 (`maxdiff = 0.0`), confirming the download only appended rows.
- Dropped out **2026-08-03**: MOM -0.2176, VOL +0.0745, SIZE -0.0782.
- Added in **2026-09-28**: MOM **-0.2368**, VOL **-0.1793**, SIZE **-0.0577**.

Three things that are easy to read backwards:

1. **MOM's -0.0005 is essentially no move, because a negative left and a negative entered** (out -0.218, in -0.237, the newcomer marginally worse) — the mean shift is arithmetic, not "momentum visibly weakening".
2. **VOL's -0.0065 is the only visible change this run**: the departing 08-03 cross-section was +0.0745 (positive), the entering 09-28 one is -0.1793 (negative), so a positive left and a negative entered, dragging the mean down. Still purely a window effect.
3. **The incoming 09-28 cross-section is still negative on all three price factors, but less so than the two before it** (MOM -0.237 vs -0.271 on 09-25; VOL -0.179 vs -0.226; SIZE -0.058 vs -0.052). It neither flipped back positive nor deteriorated further — one data point is not a conclusion.

**The four fundamental factors remain frozen**: `combined_panel.pkl` has a file timestamp of 2026-08-31 14:20, the financial data ends 2026-05-28, and no scheduled job refreshes it. EP/BP/FCF Yield/ROE have been bit-identical since 2026-08-27 (change 0.0000 this run), describing the March–May 2026 cross-sections. Per the reporting standard this is **no new observations**, not a directional reading.

**Did recent runs reuse the same market data?** Across the last five distinct run dates (10-21→10-22, 10-22→10-23, 10-23→10-24, 10-24→10-27, 10-27→10-28), 4 of 7 factors were identical each time — precisely the four frozen fundamental factors — while all three price factors moved every time. **No stale-cache day; this is the first snapshot to ingest the 10-27 close.** The last clear repeat of old data was 10-20→10-21 (7/7 identical, Yahoo 429 that day).

## 3. Full seven-factor table (21-day holding, cross-sectional rank IC)

| Factor | IC mean | ICIR | Prior IC | Change | Valid obs | Share of positive-IC periods | p-value (unadjusted) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.1049** | +0.4184 | +0.1054 | -0.0005 | 39 | 61.5% | 0.0139 | -2.65% |
| EP (earnings yield) | **-0.0480** | -0.5196 | -0.0480 | 0.0000 | 60 | 28.3% | 0.0002 | +2.98% |
| BP (book-to-price) | **+0.0030** | +0.0456 | +0.0030 | 0.0000 | 60 | 48.3% | 0.7276 | +1.13% |
| FCF Yield | **-0.0352** | -0.5390 | -0.0352 | 0.0000 | 60 | 25.0% | 0.0001 | +2.48% |
| ROE | **-0.0248** | -0.6845 | -0.0248 | 0.0000 | 60 | 26.7% | <0.0001 | +0.76% |
| VOL (volatility) | **+0.0149** | +0.1115 | +0.0214 | -0.0065 | 39 | 59.0% | 0.4962 | -2.12% |
| SIZE (size) | **+0.0963** | +0.5679 | +0.0958 | +0.0005 | 39 | 61.5% | 0.0012 | -1.81% |

**Basis checks (verified against the code, not old docs):**

- **The long-short column is Q1 − Q5** (low-factor bucket minus high-factor bucket), stored as `long_short_Q1_Q5`. With a positive IC this value is negative; the two are consistent. Do not read it as "long Q5".
- **SIZE is actually `log(price)`**: `main()` calls `build_size_panel(prices)` without `shares_info`, so the factor is a log-price-level proxy (recomputing with `np.log(prices)` reproduces the result JSON bit-for-bit). It is **not** market cap. Any "small caps beat large caps" inference is invalid.
- The long-short figures are bucket mean return spreads, **before costs and not annualised** — not achievable strategy returns.
- The three price factors have 39 observations and the four fundamental factors 60; `n_ic_obs` is the actual IC series length, not the nominal window of 60.

**Sign states are unchanged**: MOM/VOL/SIZE remain positive, EP/FCF Yield/ROE remain negative, BP sits near zero (+0.0030, p=0.73 — indistinguishable from noise). Across 137 deduplicated run dates, EP/FCF Yield/ROE have **never** been positive; MOM's last sign change was 2026-10-06 (-0.0012 → +0.0158), SIZE's was 2026-10-01, VOL's 2026-08-29, BP's 2026-08-27.

### Full-window mean alongside recent cross-sections

| Factor | 39-section mean | Last 10 sections | Last 3 sections (09-24 / 09-25 / 09-28) |
|------|------:|------:|------:|
| MOM | +0.105 | -0.167 | **-0.275** (-0.317 / -0.271 / -0.237) |
| VOL | +0.015 | -0.158 | **-0.210** (-0.225 / -0.226 / -0.179) |
| SIZE | +0.096 | +0.060 | -0.062 (-0.076 / -0.052 / -0.058) |

The positive means for MOM and VOL come mainly from July–August cross-sections; evaluable cross-sections since late September have been consistently negative. **This is not a reversal that began today** — the last five evaluable cross-sections (from 09-22) are all negative, and the most recent sign change occurred on 10-06. The only marginal information this run adds is that the incoming 09-28 cross-section is still on the negative side but smaller in magnitude than the two before it, which is why the mean barely moved.

## 4. Sector momentum table and coverage

![Sector momentum breakdown 2026-10-28](/charts/sector-mom-2026-10-28.png)

*Caption: sector momentum IC means; market data through the 2026-10-27 (Tuesday) close; evaluation window 2026-08-04 → 2026-09-28 (39 cross-sections), 21-day holding period. Covers only the 7 GICS sectors with at least 30 valid constituents.*

| Sector | IC mean | ICIR | Prior IC | Change | Stocks | Share of positive-IC periods | Long-short Q1−Q5 |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|
| Consumer Staples | **+0.2525** | +1.4116 | +0.2552 | -0.0027 | 36 | 84.6% | -3.45% |
| Consumer Discretionary | **+0.2238** | +1.4804 | +0.2210 | +0.0028 | 48 | 92.3% | -3.06% |
| Health Care | **+0.1726** | +0.7620 | +0.1826 | -0.0100 | 59 | 74.4% | -7.20% |
| Industrials | +0.0840 | +0.2797 | +0.0848 | -0.0008 | 79 | 61.5% | -2.02% |
| Information Technology | -0.0288 | -0.0599 | -0.0265 | -0.0023 | 73 | 51.3% | +2.90% |
| Financials | -0.0369 | -0.1173 | -0.0350 | -0.0019 | 76 | 43.6% | +0.83% |
| Utilities | -0.0816 | -0.7423 | -0.0857 | +0.0040 | 31 | 25.6% | +3.14% |

**Coverage: only 7 of 11 GICS sectors are reported, 402 stocks in total (80% of the 502-name universe).** Not covered: Real Estate (31 stocks, filtered this run for falling below the 30-constituent threshold), Materials (26), Communication Services (23) and Energy (21) — the latter three have never reached the 30-name threshold. About 101 names sit outside the sector table — **Energy and Communication Services, two sectors that carry heavy narrative weight, are entirely absent, so this table cannot represent market-wide sector rotation.**

**New sector-level sign reversals today = 0.** The system raised six alerts (four 🔴 "flipped from positive to negative / negative to positive", two p-value signals, one z>2σ), and each maps to an old regime marker:

- Information Technology: **2026-10-23** (+0.0052 → -0.0163). Today's -0.0288 is the third day of that flip — continuation.
- Financials: **2026-08-19** (+0.3094 → -0.1262); today -0.0369, still negative.
- Utilities: **2026-08-19** (+0.1993 → -0.0585); today -0.0816, direction unchanged.
- Health Care: flipped positive on **2026-09-24**; today +0.1726, still positive but easing. The z=+3.25 (versus a historical mean of -0.0886 ± 0.0803) is a deviation from a duplicated-sample baseline, not a same-day shock.
- Consumer Discretionary flipped positive on 2026-09-22, Consumer Staples on 2026-09-24, Industrials on 2026-10-07; none changed direction this run, only magnitude.

**Structurally it is still one sentence: Consumer (Staples +0.253, Discretionary +0.224) and Health Care (+0.173) are the only sectors with ICIR above 0.7, while Tech, Financials and Utilities sit near zero or below.** Information Technology has decayed from +0.52 on 2026-08-19 to -0.029, the clearest sector-level structural change of this cycle, now negative for four consecutive runs.

![Factor IC overview 2026-10-28](/charts/factor-ic-2026-10-28.png)

*Caption: seven-factor IC means; market data through the 2026-10-27 (Tuesday) close; price factors evaluated over 2026-08-04 → 2026-09-28 (39 cross-sections), the four fundamental factors over a frozen 2026-03-04 → 2026-05-28 snapshot (60 cross-sections). Significance markers in the chart come from an unadjusted t-test and contradict the overlap-corrected results — do not cite them directly.*

## 5. What this implies for strategy — and what it does not

**What can be said:**

1. **In-sample momentum is still positive overall while recent cross-sections point the other way.** Full window +0.105, last 10 sections -0.167, last 3 sections -0.275. Both facts hold; the reading depends on the basis chosen, and quoting only one is selective.
2. **The recent negative run spans five consecutive evaluable cross-sections, not one noisy day**, and the incoming 09-28 cross-section is still negative. If the October cross-sections that arrive next also print negative, the full-window mean will be dragged down; if they turn positive, late September was a short stretch. Which one it is cannot be determined now, because no October cross-section has matured.
3. **Sector dispersion carries far more information than the headline factor.** Consumer and Health Care show ICIR of 0.76–1.48, while Tech, Financials and Utilities sit at or below zero. "US momentum works" is an empty statement as a sector-allocation input.
4. **VOL's mean is down to +0.015**, with the last 3 sections at -0.210 and an overlap-corrected NW t of 0.33 — it was never significant, and the -0.0065 move is window arithmetic, not new evidence.

**What cannot be inferred:**

- **A positive MOM ≠ the index must rise.** This is 21-day cross-sectional relative strength, not index direction; they are different statistical objects.
- **A negative MOM over the last 3 sections ≠ every laggard is worth buying.** It only says the low-momentum bucket outperformed within the late-September sample, and says nothing about those companies' fundamentals.
- **VOL's p-value moving from 0.317 to 0.496 ≠ the volatility factor failing (or recovering).** It is a t-statistic decline driven by window composition, and neither period is significant.
- **A positive SIZE ≠ a small-cap regime.** The factor is `log(price)`, a price-level proxy with no relation to market cap or float, and cannot be extrapolated to market-wide size style.
- **Negative EP / FCF Yield / ROE ≠ a confirmed value rotation.** They describe the March–May 2026 cross-sections (frozen for nearly five months); a negative IC only says the pricier names did better in that sample.
- **Three sectors currently negative ≠ three new reversals (the count today is zero).**
- **No October price data entered any factor reading this run.** This report implies no directional view on the 10-28 session.

## 6. Statistical and data limitations

1. **The p-values are unadjusted for overlapping samples and are only a lower bound.** A 21-day forward return makes adjacent cross-sections overlap by 20 sessions; measured AR(1) of the IC series: MOM 0.94, VOL 0.88, SIZE 0.97, EP 0.87, BP 0.90, FCF Yield 0.75, ROE 0.80. Local Newey-West recomputation (lag=20, Bartlett kernel):

   | Factor | Plain t | NW t (adjusted) | Passes 1.96? |
   |------|------:|------:|:---:|
   | MOM | +2.58 | **+1.16** | No |
   | VOL | +0.69 | +0.33 | No |
   | SIZE | +3.50 | **+1.40** | No |
   | EP | -3.99 | **-1.63** | No |
   | BP | +0.35 | +0.14 | No |
   | FCF Yield | -4.14 | **-1.96** | Right at the threshold |
   | ROE | -5.26 | **-2.70** | Yes |

   Only ROE survives adjustment; FCF Yield sits exactly at the threshold and everything else falls below 1.96. The script's p-values cannot support claims like "highly significant, not random noise". The NW figures are a local recomputation, not script output.

2. **ICIR is the IC mean divided by its standard deviation** — not a strategy Sharpe ratio, not an annualised return, not a hit rate.

3. **All seven anomaly alerts are stale regime markers computed against a historical mean, not independent risk events today.** The comparator is the full historical mean rather than adjacent observations, so the number of 🔴 flags (4) differs entirely from the number of new reversals (0).

4. **The `ic_history` baseline is polluted by duplicate records.** Current state (137 deduplicated dates, roughly 252 records): price factors have **91 of 136** adjacent dates bit-identical (67%); the four fundamental factors **133 of 136** (98%, rewritten daily while frozen); sector momentum 91–93 of 136 (67–69%). The z-score mean is dominated by a single regime and both the standard deviation and effective sample are overstated; `z=+3.25` should be read as "deviation from a duplicated-sample baseline", not a test statistic.

5. **The four fundamental factors are frozen.** The panel was generated on 2026-08-31 with financial data ending 2026-05-28, and no cron job refreshes it. Restoring validity requires re-running `scripts/fetch_fundamental_panel.py` plus a scheduled job — not done here, and the script was not modified.

6. **Other boundaries**: 21-day holding, no transaction costs, no limit-up/limit-down or liquidity constraints, no sector neutralisation (default `--mode ic`); sector decomposition only includes sectors with at least 30 in-sample names (4 sectors absent); long-short bucket means are not cap-weighted; a handful of tickers have a missing latest row in the 502-column price cache, which does not affect the 30-name cross-section threshold.
