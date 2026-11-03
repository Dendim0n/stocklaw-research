---
title: "Factor Lab Daily Brief 2026-11-04"
date: 2026-11-04
description: "S&P 500 seven-factor IC test: price cache advanced to the 2026-11-03 (Tuesday) close, one new trading day. Latest evaluable cross-section is 2026-10-05 (MOM IC -0.4057). MOM +0.0770 (-0.0126, p rising from 0.0465 to 0.0978), VOL -0.0171 (-0.0069), SIZE +0.1032 (-0.0003); the four fundamental factors remain frozen at 2026-03-04 to 05-28. All changes among price factors come from window roll (2026-08-10 out, 2026-10-05 in); overlapping cache cells show maxabs=0, ruling out data revisions. MOM has printed 14 consecutive negative evaluable sections, the positive full-window mean still rests on August sections, and the overlap-corrected Newey-West t is only 0.61. All eight sector alerts are historical-mean baseline artifacts; zero genuinely new sign reversals today."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-04

## 1. Data cutoff, sample, and evaluation conventions

| Item | Value |
|------|-------|
| Run date | 2026-11-04 (Wednesday) 06:41 CST, before the US session opens |
| **Price data cutoff** | **2026-11-03 (Tuesday close)**, 676 rows × 502 columns |
| New trading day added | 2026-11-03 (1 day, cache 675 → 676 rows) |
| Valid tickers on last row | 496 / 502 (WBD, KVUE, PSKY, AVB, EA, EQR missing) |
| Universe | 502 S&P 500 constituents with price data (503 in the sector map); 474 valid for ROE |
| Price-factor evaluation window | **2026-08-11 → 2026-10-05, 39 valid sections** |
| Fundamental-factor window | **2026-03-04 → 2026-05-28, 60 valid sections (frozen panel)** |
| Valid names per section | 496–501 |
| Holding period | 21 trading-day forward return (script default `--holding 21`, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average** over those 39 / 60 historical sections — not today's IC, not a forward return, not a probability of decline |

**Data cutoff is not the same as the evaluable date.** A 21-day forward return requires 21 trading days after each section, so the latest evaluable section is **2026-10-05** (`prices.index[-22]`) — its 21-day window completed exactly at the 11-03 close. The 21 sessions from 10-06 through 11-03 have **not yet entered any IC reading**. All Tuesday's close did was bring that single 2026-10-05 section into the sample.

## 2. What is new versus what continues

**Bottom line: one new evaluable section (2026-10-05), which accounts for every change among the three price factors; the four fundamental factors show no new observations; genuinely new sector-level sign reversals: 0.**

| Factor | IC (11-03 run) | IC (this run) | Change | ICIR change | Nature |
|------|------:|------:|------:|-----------|------|
| MOM | +0.0896 | **+0.0770** | **-0.0126** | +0.334 → +0.275 | Window roll |
| VOL | -0.0103 | **-0.0171** | **-0.0069** | -0.068 → -0.109 | Window roll |
| SIZE | +0.1035 | **+0.1032** | **-0.0003** | +0.641 → +0.638 | Window roll |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged | No new observations (frozen) |

**Rule out data revisions first, then discuss change.** Three pieces of evidence:

- The old and new `prices_cache.parquet` overlap on 675 rows with a cell-level difference `maxabs = 0.0`; the increment only appended 2026-11-03 and rewrote no historical price.
- 38 of the 39 sections overlap the previous run. Recomputing the previous run's window from the older cache (ending 11-02) gives MOM +0.089618, VOL -0.010254, SIZE +0.103486 — bit-for-bit identical to what the 11-03 run wrote into `ic_history`.
- The identity (prior mean × 39 − outgoing section + incoming section) / 39 reproduces today's means exactly: MOM 0.07698, VOL -0.01718, SIZE 0.10322, within 1e-6 of the result JSON.

Attribution, factor by factor:

1. **MOM's -0.0126 is "mildly positive out, deeply negative in"**: the 2026-08-10 section (IC **+0.0866**) rolled out and 2026-10-05 (**-0.4057**) rolled in — the second-most-negative reading among the current 39 sections. Hence the lower mean.
2. **VOL's -0.0069 is the same pattern**: -0.0216 out, -0.2901 in. But the full-window value of 0.017 is only about a quarter of its Newey-West standard error (~0.068), so it remains indistinguishable from zero.
3. **SIZE's -0.0003 is "negative out, negative in, similar magnitude"**: -0.1347 out, -0.1455 in. **SIZE is the one factor today not pushed by the new section, simply because the two sections are close in value — that is not evidence that the size effect is stable.**

**The four fundamental factors remain frozen**: `combined_panel.pkl` has `generated_at` 2026-05-29 with financial data ending 2026-05-28, and no scheduled job refreshes it (the file was written on 08-31; since then only `ic_history` gets rewritten daily). These four readings have been bit-for-bit unchanged since 2026-08-27 (today's delta 0.0000). Under the rubric this is **no new observation**; their IC describes March–May 2026 cross-sections and cannot explain current market behaviour.

**Do the last six distinct run days (10-28, 10-29, 10-30, 10-31, 11-03, 11-04) reuse the same market data?** No — all three price-factor readings differ every day (MOM 0.1049 → 0.1061 → 0.1057 → 0.1013 → 0.0896 → 0.0770; VOL 0.0149 → 0.0117 → 0.0057 → -0.0033 → -0.0103 → -0.0171; SIZE 0.0963 → 0.0995 → 0.1023 → 0.1037 → 0.1035 → 0.1032). **No two run days shared one snapshot.** The four fundamental factors are identical across those days because the panel is frozen, not because the cache is stale.

One significance change worth naming: **MOM's naive p-value moved from 0.0465 to 0.0978, dropping outside the 5% line.** Both readings rest on an uncorrected t-test over overlapping samples; the local Newey-West (lag = 20) recalculation gives t = **0.61**. The honest statement is "this window mean was never significant", not "momentum stopped working today."

## 3. Full seven-factor table (21-day holding period, cross-sectional Rank IC)

| Factor | IC mean | ICIR | Prior IC | Change | Valid obs | Share of sections with positive IC | p-value (uncorrected) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.0770** | +0.2754 | +0.0896 | -0.0126 | 39 | 56.4% | 0.0978 | -1.36% |
| SIZE (size proxy) | **+0.1032** | +0.6378 | +0.1035 | -0.0003 | 39 | 61.5% | 0.0003 | -1.68% |
| VOL (volatility) | **-0.0171** | -0.1092 | -0.0103 | -0.0069 | 39 | 51.3% | 0.5050 | -0.56% |
| EP (earnings yield) | **-0.0480** | -0.5196 | -0.0480 | 0.0000 | 60 | 28.3% | 0.0002 | +2.98% |
| BP (book-to-price) | **+0.0030** | +0.0456 | +0.0030 | 0.0000 | 60 | 48.3% | 0.7276 | +1.13% |
| FCF Yield | **-0.0352** | -0.5390 | -0.0352 | 0.0000 | 60 | 25.0% | 0.0001 | +2.48% |
| ROE | **-0.0248** | -0.6845 | -0.0248 | 0.0000 | 60 | 26.7% | <0.0001 | +0.76% |

**Convention checks (code re-read this run, not taken from old docs):**

- **The long-short column is Q1 − Q5** (low-factor group minus high-factor group), per `quantile_returns`, lines 316–333. With a positive IC this value is negative; the two are consistent. Do not read it as "long Q5".
- **SIZE is actually `log(price)`**: `main()` calls `build_size_panel(prices)` without `shares_info` (lines 285–296, 797), so the factor is a log-price-level proxy, **not market capitalisation**. Any "small caps beat large caps" inference is invalid.
- Long-short figures are differences in group mean returns, **before costs, not annualised** — not implementable strategy returns.
- `n_ic_obs` is the true IC series length: 39 for price factors, 60 for fundamentals — not the nominal 60-section window (`sample_dates` takes the last 60 dates, but the final 21 have no forward return and are skipped).

**Sign status**: MOM / SIZE positive; EP / FCF Yield / ROE negative; BP essentially zero (+0.0030, p = 0.73, indistinguishable from noise); VOL nominally negative but below 0.02 in magnitude. Across 142 deduplicated run days, EP / FCF Yield / ROE have **never** been positive; the last sign change for MOM is 2026-10-06, for SIZE 2026-10-01, for VOL 2026-10-31, for BP 2026-08-27. **Nothing flipped sign today at the factor level — all of it is regime continuation (MOM's 17th, SIZE's 20th, VOL's 3rd run day).**

### Full-window mean versus recent sections (the part that matters this run)

| Factor | 39-section mean | Aug | Sep | Oct (3 sections) | Last 10 | Last 3 | Consecutive negative sections |
|------|------:|------:|------:|------:|------:|------:|------:|
| MOM | +0.077 | **+0.238** | +0.026 | **-0.373** | **-0.289** | **-0.373** | **14** |
| VOL | -0.017 | +0.057 | -0.034 | -0.266 | **-0.223** | -0.266 | 13 |
| SIZE | +0.103 | +0.086 | **+0.149** | -0.133 | -0.061 | -0.133 | 9 |

MOM's positive full-window mean is almost entirely carried by the 15 August sections (+0.238); the 21 September sections average +0.026 and the three October sections -0.373, with **the last 14 evaluable sections all negative**. **"Full window +0.077" and "last 14 sections negative" are two facts about the same data** — reporting only one is selective.

It is worth stating exactly what the new section covers: **the 21 trading days from the 2026-10-05 close to the 2026-11-03 close**. It is not today's IC, but it does span the whole of October just passed: within that cross-section, in-sample past winners underperformed past losers materially. That is the only piece of new market information in this report.

VOL's full-window -0.017 carries no information: it is the average of +0.057 in August and -0.266 in October, with p = 0.51 and Newey-West t = -0.25.

SIZE is the only strongly positive full-window combination, but it weakens at the near end too: +0.086 in August → +0.149 in September → -0.133 across the three October sections, with the last nine sections negative. **Positive full window with a negative near end mirrors MOM**; the only difference is that SIZE's window mean was not dragged down today because the outgoing and incoming sections are close in value.

## 4. Sector momentum table and coverage

![Sector momentum breakdown 2026-11-04](/charts/sector-mom-2026-11-04.png)

*Caption: sector momentum IC means; price data through the 2026-11-03 (Tuesday) close; evaluation window 2026-08-11 → 2026-10-05 (39 sections), 21-day holding period. Covers only the 7 GICS sectors with at least 30 valid constituents, 402 names in total.*

| Sector | IC mean | ICIR | Prior IC | Change | Names | Share of sections with positive IC | Last 3 sections | Long-short Q1−Q5 |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|-----:|
| Consumer Staples | **+0.2281** | +1.1093 | +0.2387 | -0.0106 | 36 | 74.4% | -0.109 | -2.33% |
| Consumer Discretionary | **+0.2133** | +1.2443 | +0.2208 | -0.0074 | 48 | 87.2% | -0.179 | -3.00% |
| Health Care | **+0.1233** | +0.5292 | +0.1357 | -0.0124 | 59 | 64.1% | -0.020 | -5.22% |
| Industrials | +0.0469 | +0.1395 | +0.0607 | -0.0138 | 79 | 56.4% | **-0.473** | -1.06% |
| Utilities | -0.0490 | -0.4055 | -0.0569 | +0.0079 | 31 | 38.5% | **+0.093** | +2.22% |
| Financials | -0.0779 | -0.2265 | -0.0608 | -0.0171 | 76 | 41.0% | **-0.538** | +1.83% |
| Information Technology | -0.0818 | -0.1566 | -0.0605 | -0.0213 | 73 | 48.7% | **-0.763** | +6.28% |

**Coverage: only 7 of 11 GICS sectors are reported, 402 names (80.1% of the 502-name universe).** The gap is structural:

- **Real Estate**: 31 names mapped, but AVB (last quote 08-14) and EQR (08-21) have no prices, so the valid count stays below the 30-name threshold; the sector's last `ic_history` record is **2026-09-26** (IC -0.1108), with nothing since.
- Materials (26), Energy (21) and Communication Services (23 mapped, 22 valid) never reach the 30-name threshold.

About 101 names are absent — **Energy and Communication Services, two sectors that carry a lot of narrative weight, are missing entirely; the sector table cannot represent market-wide rotation.**

**New sector-level sign reversals today: 0.** The system produced eight alerts (four 🔴 sign flips, three p-values dropping out of significance, one z > 2σ). Checking each against the actual last sign-change date in `ic_history`:

- Information Technology: flipped **2026-10-23**; today is the 8th run day. -0.0605 → -0.0818 is simply further drift in the same direction.
- Financials: turned negative back on **2026-08-19**; still negative.
- Utilities: turned negative on **2026-08-19**; direction unchanged.
- Health Care: turned positive on **2026-09-24**; still positive. The z of +2.37 (versus a historical mean of -0.083 ± 0.087) is a deviation from a duplicated-sample baseline, not a sudden move.
- Consumer Discretionary turned positive 2026-09-22, Consumer Staples 2026-09-24, Industrials 2026-10-07 — none changed direction.

All seven sectors moved down together by 0.007–0.021 today (Utilities the exception, +0.008). There is one cause: **the newly added 2026-10-05 section is negative in most sectors** (Info Tech -0.771, Financials -0.575, Industrials -0.467, Discretionary -0.225, Staples -0.170, Health Care -0.078), with Utilities the only positive one (+0.159). This is one window event mapped onto seven sectors, **not seven independent sector signals** — and the last three sections overlap by 20 days each, so they are not three independent observations either.

**What carries information is the near-end structure, not the full-window red/green:** six of seven sectors have a negative mean over their last three sections, led by Info Tech -0.763, Financials -0.538 and Industrials -0.473; only Utilities is positive (+0.093). Three sectors still show full-window ICIR of 0.53–1.24 (Staples, Discretionary, Health Care) — but those readings depend on the August sections staying inside the window, and all three have already turned negative over their last three sections.

One detail that is easy to read backwards: **Financials has a full-window IC of only -0.078 but -0.538 over the last three sections, with long-short Q1−Q5 at +1.83%** — a negative IC and a positive Q1−Q5 are consistent, and this does not mean "the low-momentum bucket makes money"; only 41.0% of its sections had a positive IC. Same for Info Tech: IC -0.082 with long-short +6.28%; that +6.28% is a raw group-mean difference, before costs and without market-cap weighting, and is not a tradable conclusion.

![Factor IC overview 2026-11-04](/charts/factor-ic-2026-11-04.png)

*Caption: seven-factor IC means; price data through the 2026-11-03 (Tuesday) close; price-factor window 2026-08-11 → 2026-10-05 (39 sections); the four fundamental factors are a frozen snapshot from 2026-03-04 → 2026-05-28 (60 sections). Significance markers in the chart come from an uncorrected t-test and disagree with the overlap-corrected results — do not cite them directly.*

## 5. Implications for strategy, and conclusions that cannot be drawn

**What can be said:**

1. **Today's change is window movement, but the incoming section itself carries information.** MOM's -0.0126 comes entirely from the 2026-10-05 section (-0.406) replacing 2026-08-10 (+0.087); that new section spans 10-05 → 11-03, the only new market information this run: **in-sample past winners underperformed past losers materially over that month.**
2. **MOM has now printed 14 consecutive negative evaluable sections with no sign of convergence.** Full window +0.077, last 10 sections -0.289, last 3 -0.373, newest single section -0.406. The mean is positive only because August is still inside the window; at the current pace the full-window mean keeps falling as August sections roll out.
3. **MOM's positive full-window mean was never significant.** Naive t = 1.70 (p = 0.098); overlap-corrected t = 0.61. Last run's p = 0.047 was a borderline reading; today's 0.098 shows the line has no discriminating power. **Neither "momentum stopped working today" nor "it worked before" follows from this.**
4. **SIZE's "strongest full-window factor" label needs a discount.** Full window +0.103 with Newey-West t = 1.73 (below 1.96), last nine sections negative, October's three sections -0.133. And the factor is `log(price)`, **not market cap**: a positive IC only says high-priced names subsequently outperformed low-priced names in-sample, with no bearing on size, liquidity, or style rotation.
5. **VOL's numbers sit near zero; do not build a story on them.** Full window -0.017, p = 0.51, Newey-West t = -0.25; 13 consecutive negative sections sounds dramatic, but every one of them is close to zero.
6. **The sector hierarchy (consumer/health care strong, tech/financials/industrials weak) did not change qualitatively today**, it just shifted down uniformly. Six of seven sectors being negative at the near end looks more like a broad in-sample momentum failure than a clean "out of tech, into consumer" rotation.
7. **The four fundamental factors carry no new information today**; their readings are stuck in March–May 2026. Any current judgement built on EP / FCF Yield / ROE lacks data support right now.

**What cannot be concluded:**

- **A positive MOM ≠ the market must rise.** It is a 21-day cross-sectional relative-strength statistic, not index direction; the two are different objects.
- **MOM at -0.406 in the 10-05 section ≠ every laggard is worth buying.** It only says the low-momentum bucket outperformed within that sample; it does not separate "fell less" from "genuinely strong", and implies nothing about individual names or fundamentals.
- **MOM's p-value leaving the 5% line ≠ the momentum factor is broken.** It is a single window reading; in-sample AR(1) is 0.96, so independent information is far less than 39.
- **A nominally negative VOL ≠ the volatility factor is dead.** The 0.017 magnitude is below noise, insignificant in both runs.
- **A positive SIZE ≠ a small-cap regime.** The factor is a log-price-level proxy, unrelated to market-cap conventions, and cannot be extrapolated to market-wide small-cap performance.
- **Negative EP / FCF Yield / ROE ≠ confirmation of a value rotation.** They describe March–May 2026 cross-sections (frozen for nearly six months); a negative IC only says the expensive bucket subsequently did better in that sample.
- **The current count of negative sectors (3) ≠ the number of new reversals today (0).** Different conventions; the number of red alerts is not a count of independent risk events.
- **This report contains no factor readings for 11-03 itself or the 20 sessions before it.** Nothing here is a directional call on the next session, and nothing here is a trade instruction.

## 6. Statistical and data limitations

1. **The p-values are uncorrected for overlapping samples and are lower bounds only.** A 21-day forward return makes adjacent sections overlap by 20 trading days; MOM's IC series has a measured **AR(1) of 0.959**. Local Newey-West recalculation (lag = 20, Bartlett kernel):

   | Factor | Naive t | Newey-West t | Passes 1.96? |
   |------|------:|------:|:---:|
   | MOM | +1.70 | **+0.61** | No |
   | VOL | -0.67 | -0.25 | No |
   | SIZE | +3.93 | **+1.73** | No |
   | EP | -3.99 | **-1.63** | No |
   | BP | +0.35 | +0.14 | No |
   | FCF Yield | -4.14 | **-1.96** | Borderline (frozen sample) |
   | ROE | -5.26 | **-2.70** | Yes (frozen sample) |

   The script's `p = 0.0978` for MOM cannot support "approaching significance"; the corrected t is 0.61. Newey-West numbers are local recomputations, not script output. The four fundamental rows describe only the frozen 2026-03~05 sample.

2. **ICIR is the IC mean divided by the IC standard deviation** — not a strategy Sharpe ratio, not an annualised return, not a hit rate.

3. **Every anomaly alert is a legacy regime marker on a historical-mean baseline.** The comparison object is the mean of all historical records, not the adjacent observation, which is why four 🔴 alerts correspond to zero new reversals. Note also that the daily wrapper picks its result file with `sorted(glob)[-1]`, which resolves to the per-sector JSON, so **factor-level alerts were not evaluated this run**; factor-level sign status was checked by hand against `ic_history` (last changes: MOM 10-06, SIZE 10-01, VOL 10-31, BP 08-27), none of which is today.

4. **The `ic_history` baseline is polluted by duplicate records.** Current state: 142 deduplicated dates, roughly 256 records per factor; **91/142** adjacent dates are bit-for-bit identical for price factors (64%), **138/142** for the four fundamental factors (97%), and **92/142** for sectors (65%). The z-score mean is dominated by a single regime while its standard deviation and effective sample are overstated; `z = +2.37` should be read as "deviation from a duplicated baseline", not a test result.

5. **The four fundamental factors are frozen.** The panel's `generated_at` is 2026-05-29 with financial data ending 2026-05-28, and no cron job refreshes it. Restoring validity requires re-running `scripts/fetch_fundamental_panel.py` and adding a schedule — not done here, and no script was modified.

6. **Six names lack prices**: WBD (last 10-05), KVUE (10-30), PSKY (10-16), AVB (08-14), EA (08-10), EQR (08-21). The 11-03 row has 496 of 502 valid, and sections inside the window have 496–501 valid names — above the 30-name threshold, but this slightly alters group weights and is the direct reason Real Estate never qualifies.

7. **Other boundaries**: 21-day holding period, no transaction costs, no liquidity or limit-move constraints, default `--mode ic` without sector neutralisation; sector decomposition builds panels by sector but still requires ≥30 valid names per section, so Real Estate (31 mapped but missing prices) and the three small sectors never report — about 101 names are absent; long-short group means are not cap-weighted, and the SIZE factor is not a market-cap measure to begin with.
