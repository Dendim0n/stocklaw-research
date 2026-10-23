---
title: "Factor Lab Daily Brief 2026-10-24"
date: 2026-10-24
description: "S&P 500 seven-factor IC test. Price cache now runs to the 2026-10-23 (Friday) close, but with 21-day forward returns the latest evaluable cross-section is 2026-09-24. MOM +0.1057 (-0.0016 vs prior run), VOL +0.0329 (-0.0112; p moved from 0.035 to 0.121), SIZE +0.0965 (-0.0019); EP/BP/FCF Yield/ROE remain frozen on the 60 cross-sections from 2026-03-04 to 05-28. All price-factor changes come from the rolling window (07-30 dropped, 09-24 added) - the 38 overlapping cross-sections are bit-identical, so no historical revision occurred. The incoming 09-24 cross-section is negative for all three price factors, and the last three evaluable cross-sections average MOM -0.264. All seven sector alarms are stale regime markers measured against the historical mean; there was no new sign flip today."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-24

## 1. Data cutoff, sample, and evaluation convention

| Item | Value |
|------|-----|
| Run date | 2026-10-24 (Saturday), 06:41–06:42 CST |
| **Market data (price cache) cutoff** | **2026-10-23 (Friday close)**, 669 rows × 502 columns |
| Trading days added this run | 2026-10-23 (1 full session; cache 668 → 669 rows) |
| Universe | 502 S&P 500 constituents with complete prices (503 in the fundamental panel); ROE valid for 474 |
| Price-factor evaluation window | **2026-07-31 → 2026-09-24, 39 valid cross-sections** |
| Fundamental-factor evaluation window | **2026-03-04 → 2026-05-28, 60 valid cross-sections (frozen panel)** |
| Holding period | 21 trading days of forward return (script default `--holding 21`, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` in the tables is the **average over those 39 / 60 historical cross-sections**, not today's IC, not a forward return, not a probability of decline |

**Data cutoff ≠ evaluable date.** A 21-day forward return needs 21 trading days after each cross-section, so the latest evaluable cross-section is **2026-09-24** (`prices.index[-22]`); its 21-day window closed exactly on the 10-23 close. The 21 cross-sections from 09-25 through 10-23 cannot be evaluated yet — meaning Friday's close only "delivered" the September 24 cross-section, and **no October market action has entered any IC reading yet**. The run date is a Saturday with no US session: the newest market-price information ends at the 10-23 close, and the newest factor-evaluation information ends at the 09-24 cross-section.

## 2. What is new vs. what continues

**Bottom line: the three price factors genuinely advanced (window rolled one day); the four fundamental factors are unchanged with no new observations. No factor changed sign today.**

| Factor | IC (10-23 run) | IC (this run) | Change | ICIR change | Nature |
|------|------:|------:|------:|-----------|------|
| MOM | +0.1073 | **+0.1057** | **-0.0016** | +0.434 → +0.423 | Window roll |
| VOL | +0.0441 | **+0.0329** | **-0.0112** | +0.355 → +0.258 | Window roll |
| SIZE | +0.0983 | **+0.0965** | **-0.0019** | +0.585 → +0.569 | Window roll |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged | No new observations (frozen) |

**All of the movement comes from the rolling window's exits and entries — not from data revisions, and not from a change in factor structure today.**

- The 38 overlapping cross-sections are **bit-identical** to the prior run (`maxdiff = 0.0`): the incremental download only appended rows and rewrote no historical value.
- Dropped **2026-07-30**: MOM -0.2564, VOL +0.2183, SIZE +0.0014.
- Added **2026-09-24**: MOM **-0.3166**, VOL **-0.2254**, SIZE **-0.0758**.

Three points worth spelling out, because they are easy to read backwards:

1. **MOM's small decline is not "a positive rolling out"** — the outgoing 07-30 value was itself negative (-0.256) and the incoming 09-24 value is more negative (-0.317); the mean fell because the new observation is worse.
2. **VOL has now swapped a positive for a negative two runs in a row**: yesterday it dropped 07-29 (+0.361) and added 09-23 (-0.257); today it dropped 07-30 (+0.218) and added 09-24 (-0.225). This is the mechanical result of the window moving forward, not a sudden collapse in the volatility factor.
3. **The two newest cross-sections (09-23 and 09-24) are negative for all three price factors.** That matters more than the 1–2 thousandths of a point move in the mean; see "Full-window mean vs. recent cross-sections" below.

**The four fundamental factors remain frozen**: `combined_panel.pkl` is dated 2026-08-31, its financial data ends 2026-05-28, and no scheduled job refreshes it. EP/BP/FCF Yield/ROE have been bit-identical since 2026-08-27 (0.0000 change this run) and describe March–May 2026 cross-sections. Per the reporting convention, this is recorded as **no new observations**, not as a directional "factor state continues" reading.

## 3. Full seven-factor table (21-day holding, cross-sectional rank IC)

| Factor | IC mean | ICIR | Prior IC | Change | Valid obs | Share of positive IC | p-value (uncorrected) | Long-short Q1−Q5 (group mean) |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.1057** | +0.423 | +0.1073 | -0.0016 | 39 | 61.5% | 0.0129 | -2.82% |
| EP (earnings yield) | **-0.0480** | -0.520 | -0.0480 | 0.0000 | 60 | 28.3% | 0.0002 | +2.98% |
| BP (book-to-price) | **+0.0030** | +0.046 | +0.0030 | 0.0000 | 60 | 48.3% | 0.7276 | +1.13% |
| FCF Yield | **-0.0352** | -0.539 | -0.0352 | 0.0000 | 60 | 25.0% | 0.0001 | +2.48% |
| ROE | **-0.0248** | -0.684 | -0.0248 | 0.0000 | 60 | 26.7% | <0.0001 | +0.76% |
| VOL (volatility) | **+0.0329** | +0.258 | +0.0441 | -0.0112 | 39 | 64.1% | 0.1205 | -2.79% |
| SIZE (size) | **+0.0965** | +0.569 | +0.0983 | -0.0019 | 39 | 61.5% | 0.0012 | -1.80% |

**Convention checks (verified against the code, not against old documentation):**

- **The long-short direction is Q1 − Q5** (low-factor quintile minus high-factor quintile), stored under `long_short_Q1_Q5`. With a positive IC this value is negative, which is internally consistent; do not read it as "long Q5".
- **SIZE is actually `log(price)`**: `main()` calls `build_size_panel(prices)` without `shares_info`, so the factor is a log-price-level proxy, **not market cap**. No small-cap/large-cap conclusion can be drawn from it.
- The long-short figures are differences in group mean returns, **gross of costs and not annualised** — not an implementable strategy return.
- The three price factors have 39 observations and the four fundamental factors 60; `n_ic_obs` is the actual length of the IC series, not the nominal window of 60.

**VOL's p-value crossed 0.05 today (0.0350 → 0.1205)**, with the plain t-statistic falling from 2.19 to 1.59. This is the only "statistical state change" in today's readings, and it has the same cause: after swapping +0.218 out and -0.225 in, the 39-cross-section mean fell from +0.044 to +0.033 while the standard deviation held, so t falls mechanically. It is neither proof that the factor stopped working nor a new risk event — see the limitations section; the plain t-test already understates the standard error.

**No factor changed sign**: MOM/VOL/SIZE remain positive, EP/FCF Yield/ROE remain negative, and BP is still indistinguishable from zero (+0.0030, p=0.73). Across 135 deduplicated run days, EP/FCF Yield/ROE have never turned positive, and BP last changed sign on 2026-08-27.

### Full-window mean vs. recent cross-sections

| Factor | 39-cross-section mean | Last 10 cross-sections | Last 3 cross-sections (09-22 / 09-23 / 09-24) |
|------|------:|------:|------:|
| MOM | +0.106 | -0.078 | **-0.264** (-0.168 / -0.306 / -0.317) |
| VOL | +0.033 | -0.100 | **-0.224** (-0.197 / -0.250 / -0.225) |
| SIZE | +0.096 | +0.125 | -0.017 (+0.080 / -0.054 / -0.076) |

The positive means for MOM and VOL come mainly from July–August cross-sections; all three late-September evaluable cross-sections are negative, and the 09-24 cross-section added today is the most negative of the three. **This is not a reversal that started today — the series has been negative since 09-22 — but it is the only marginal piece of information in this run: the cross-section that just became evaluable sits on the negative side.**

## 4. Sector momentum table and coverage

![Sector momentum breakdown 2026-10-24](/charts/sector-mom-2026-10-24.png)

*Caption: mean sector momentum IC, market data through the 2026-10-23 (Friday) close, evaluation window 2026-07-31 → 2026-09-24 (39 cross-sections), 21-day holding period. Covers only the 7 GICS sectors with ≥30 constituents in the sample.*

| Sector | IC mean | ICIR | Prior IC | Change | p-value (uncorrected) | Long-short Q1−Q5 | Stocks |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|
| Consumer Staples | **+0.2559** | +1.483 | +0.2555 | +0.0004 | <0.0001 | -3.40% | 36 |
| Consumer Discretionary | **+0.2115** | +1.213 | +0.2040 | +0.0075 | <0.0001 | -2.89% | 48 |
| Health Care | **+0.1924** | +0.935 | +0.2008 | -0.0084 | <0.0001 | -8.02% | 59 |
| Industrials | +0.0864 | +0.291 | +0.0895 | -0.0030 | 0.0803 | -1.97% | 79 |
| Information Technology | **-0.0223** | -0.047 | -0.0163 | -0.0060 | 0.7734 | +2.19% | 73 |
| Financials | **-0.0334** | -0.107 | -0.0296 | -0.0037 | 0.5118 | +0.75% | 76 |
| Utilities | **-0.0865** | -0.840 | -0.0859 | -0.0006 | <0.0001 | +3.33% | 31 |

**Coverage: only 7 of the 11 GICS sectors are reported, totalling 402 names (80% of the 502-name sample).** Not covered: Real Estate (31 names, last reading 2026-09-26, filtered out by the 30-stock threshold and still absent), Materials (26), Communication Services (23), and Energy (21) — the latter three have never entered the sector breakdown because they hold fewer than 30 constituents. **The sector table therefore does not represent market-wide sector rotation**, and Energy and Communication Services, both heavily weighted in current narratives, are entirely missing.

**Zero new sector sign flips today.** Checking each sector's last true sign change:

- Information Technology: **2026-10-23** (+0.0052 → -0.0163). Today's -0.0223 is the second day of that flip, i.e. continuation rather than a new reversal.
- Financials: **2026-08-19** (+0.309 → -0.126), negative ever since; -0.0334 today.
- Utilities: **2026-08-19** (+0.199 → -0.059); -0.0865 today, essentially unchanged.
- Health Care: turned positive on **2026-09-24**; +0.1924 today, still positive but slightly lower.
- Consumer Discretionary turned positive on 2026-09-22, Consumer Staples and Industrials on 09-24 and 10-07 respectively; directions unchanged.

**Structurally it is still one sentence: Consumer (Staples +0.256, Discretionary +0.212) and Health Care (+0.192) are the only three sectors with ICIR near or above 1, while Technology, Financials and Utilities sit near zero or below.** Information Technology has decayed from +0.524 on 2026-08-19 to -0.022, the clearest sector-structure change of this cycle, and has now been negative for two consecutive runs.

![Factor IC overview 2026-10-24](/charts/factor-ic-2026-10-24.png)

*Caption: seven-factor mean IC, market data through the 2026-10-23 (Friday) close; price factors over 2026-07-31 → 2026-09-24 (39 cross-sections), fundamental factors over the frozen 2026-03-04 → 2026-05-28 snapshot (60 cross-sections). Significance markers in the chart are based on the uncorrected plain t-test and disagree with the overlap-corrected results; do not cite them directly.*

## 5. What this implies for strategy, and what it cannot imply

**What can be said:**

1. **In-sample momentum is still positive, but the recent cross-sections are not.** Full window +0.106, last 10 cross-sections -0.078, last 3 cross-sections -0.264. Both facts hold at once, and the reading depends on the convention; reporting only one number is a selective claim.
2. **The only marginal information this run is in the newly evaluable cross-section: 09-24 shows MOM -0.317 and VOL -0.225.** If late-September and early-October cross-sections keep printing negative as they become evaluable, the full-window mean will be dragged down; if they turn positive, late September was a brief stretch. Which one it is cannot be determined now, because no October cross-section is evaluable yet.
3. **Sector dispersion carries far more information than the aggregate factor.** Consumer and Health Care show ICIR of 0.9–1.5 while Technology, Financials and Utilities sit near zero or negative; "US momentum works" is not a usable allocation input.
4. **Information Technology is the decay line worth tracking**: from +0.52 (08-19) to -0.022 now, it no longer qualifies as a strong-momentum sector. This is only indirect evidence for "AI trade crowding" arguments, not a conclusion.

**What cannot be inferred:**

- **A positive MOM ≠ the index must rise.** It is a 21-day cross-sectional relative-strength measure, not index direction; the two are not the same statistical object.
- **Negative MOM over the last 3 cross-sections ≠ every laggard is worth buying.** It only says the low-momentum bucket outperformed in the late-September sample, and says nothing about those companies' fundamentals.
- **VOL's p-value crossing 0.05 ≠ the volatility factor stopped working.** It is a t-statistic decline caused by window composition, and the value was never significant once overlapping autocorrelation is corrected (NW t = 0.93).
- **A positive SIZE ≠ a small-cap regime.** The factor is `log(price)`, a price-level proxy with no link to market cap or float.
- **Negative EP / FCF Yield / ROE ≠ a confirmed value rotation.** They describe March–May 2026 cross-sections (frozen for nearly four months), and a negative IC only says the expensive bucket did better within that sample.
- **Three sectors with negative IC ≠ three new reversals (today's count is 0).**
- **The run date is a Saturday with no US trading.** The report contains no price information for 10-24 and is not a directional call on next week's open.

## 6. Statistical and data limitations

1. **p-values are uncorrected for overlapping samples and are only a lower bound.** A 21-day forward return makes adjacent cross-sections overlap by 20 trading days; measured AR(1) of the IC series is MOM 0.94, VOL 0.83, SIZE 0.96, EP 0.87, BP 0.90, FCF 0.75, ROE 0.80. Local Newey-West recomputation (lag=20, Bartlett kernel):

   | Factor | Plain t | NW t (corrected) |
   |------|------:|------:|
   | MOM | +2.61 | **+1.20** |
   | VOL | +1.59 | **+0.93** |
   | SIZE | +3.51 | **+1.30** |
   | EP | -3.99 | **-1.63** |
   | BP | +0.35 | +0.14 |
   | FCF Yield | -4.14 | **-1.96** |
   | ROE | -5.26 | **-2.70** |

   After correction only ROE (-2.70) and FCF Yield (-1.96, right at the threshold) hold up; everything else is below 1.96. The script's p-values cannot support claims of "highly significant, not random noise". The NW figures are local recomputations, not script output.

2. **ICIR is the mean IC divided by its standard deviation** — not a strategy Sharpe ratio, not an annualised return, not a hit rate.

3. **All seven anomaly alarms are stale regime markers measured against the historical mean, not today's independent risk events.** Today's output is 4 🔴 plus 3 ⚠️: Financials "positive to negative" (alarm baseline +0.1701; actually negative since 08-19), Health Care "negative to positive" with z=+3.72 (alarm baseline -0.091±0.076; deduplicated run-day mean -0.069 with only 15% positive observations, actually positive since 09-24), Information Technology "positive to negative" (alarm baseline +0.2845; actually only flipped on 10-23), and Utilities "positive to negative" (negative since 08-19). **The 🔴 count is 4; the count of new reversals is 0.**

4. **The `ic_history` baseline is polluted by duplicate records.** Current state: price factors hold 250 records across 135 distinct dates, with **91/134** adjacent dates bit-identical (68%); the four fundamental factors hold 251 records across 135 distinct dates with **131/134** bit-identical (98%, rewritten daily during the frozen period). The z-score mean is dominated by a single regime and both the standard deviation and effective sample size are overstated, so `z=+3.72` should be read as "deviation from a duplicated historical sample", not as a statistical test.

5. **The four fundamental factors are frozen.** `combined_panel.pkl` was generated on 2026-08-31 14:20 with financial data ending 2026-05-28 and no scheduled refresh. Restoring their usefulness requires re-running `scripts/fetch_fundamental_panel.py` (slow) plus a new scheduled job — not done here, and the script was not modified.

6. **Other boundaries**: 21-day holding period, no transaction costs, no limit-up/limit-down or liquidity constraints, no sector neutralisation (default `--mode ic`); the sector breakdown only includes sectors with ≥30 in-sample names; long-short group means are not cap-weighted; the latest price-cache row is missing values for 5 of 502 tickers, which does not affect the ≥30-name cross-section threshold.
