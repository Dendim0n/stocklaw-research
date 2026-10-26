---
title: "Factor Lab Daily Brief 2026-10-27"
date: 2026-10-27
description: "S&P 500 seven-factor IC test: the price cache now runs to the 2026-10-26 (Monday) close, and with a 21-day forward return the newest evaluable cross-section is 2026-09-25. MOM +0.1054 (-0.0003 vs prior run), VOL +0.0214 (-0.0115, p from 0.121 to 0.317), SIZE +0.0958 (-0.0007); EP/BP/FCF Yield/ROE remain frozen on the 60 cross-sections from 2026-03-04 to 2026-05-28. All price-factor movement comes from window roll-off (07-31 out, 09-25 in); the 38 overlapping cross-sections are bitwise identical, so there is no historical revision. All three price factors are negative on the incoming 09-25 cross-section; the last three evaluable cross-sections average MOM -0.298 and VOL -0.234. All seven sector alarms are legacy regime flags measured against the full-history mean, and the number of new sign reversals today is zero."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-27

## 1. Data cutoff, sample and evaluation convention

| Item | Value |
|------|-------|
| Run date | 2026-10-27 (Tuesday) 06:42 CST |
| **Market data (price cache) cutoff** | **2026-10-26 (Monday close)**, 670 rows × 502 columns |
| Trading days added this run | 2026-10-26 (1 full session, cache 669 → 670 rows) |
| Universe | 502 S&P 500 constituents with complete price history (503 in the fundamentals panel); 474 valid for ROE |
| Price-factor evaluation window | **2026-08-03 → 2026-09-25, 39 valid cross-sections** |
| Fundamental-factor evaluation window | **2026-03-04 → 2026-05-28, 60 valid cross-sections (panel frozen)** |
| Holding period | 21-trading-day forward return (script default `--holding 21`, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` in the tables is the **average over the 39 / 60 historical cross-sections** — not today's IC, not a future return, not a probability of decline |

**Market-data cutoff is not the same as the evaluable date.** A 21-day forward return requires 21 more trading days after each cross-section, so the newest evaluable cross-section is **2026-09-25** (`prices.index[-22]`), whose 21-day window closed exactly at the 10-26 close. The 20 cross-sections from 09-28 through 10-26 cannot be evaluated yet — **Monday's close only makes the 9/25 cross-section "arrive"; not one October data point has entered any IC reading**.

The prior run was 10-24 (Saturday), which already captured the 10-23 Friday close. This run is the first session after the weekend, so there is no gap.

## 2. New this run vs. continuation of existing state

**Bottom line: the three price factors genuinely advanced (one-day window roll), the four fundamental factors continue an existing state with no new observations, and none of the seven factors changed sign.**

| Factor | IC (10-24 run) | IC (this run) | Change | ICIR change | Nature |
|------|------:|------:|------:|-----------|------|
| MOM | +0.1057 | **+0.1054** | **-0.0003** | +0.423 → +0.421 | Window roll |
| VOL | +0.0329 | **+0.0214** | **-0.0115** | +0.258 → +0.164 | Window roll |
| SIZE | +0.0965 | **+0.0958** | **-0.0007** | +0.569 → +0.563 | Window roll |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged | No new observations (frozen) |

**Every change is determined by which cross-sections rolled in and out — not a data revision, not a change in factor structure today.**

- The 38 overlapping cross-sections are **bitwise identical** to the prior run (`maxdiff = 0.0`): the incremental download only appended rows and did not rewrite any old value.
- Rolled out **2026-07-31**: MOM -0.2600, VOL +0.2224, SIZE -0.0250.
- Rolled in **2026-09-25**: MOM **-0.2712**, VOL **-0.2256**, SIZE **-0.0519**.

Three points that are easy to read backwards:

1. **MOM's -0.0003 is essentially no change, because both the outgoing and incoming cross-sections are negative and similar in size** (-0.260 vs -0.271) — negative out, negative in, so the mean simply shifts. Do not write this up as "momentum weakening".
2. **VOL's -0.0115 is the only visible move this run**: the outgoing 07-31 was +0.2224 (positive), the incoming 09-25 is -0.2256 (negative) — positive out, negative in. This is still just the arithmetic of the window rolling forward.
3. **The incoming 09-25 cross-section is negative on all three price factors.** That matters more than a one-thousandth move in the mean; see the side-by-side table below.

**The four fundamental factors remain frozen**: `combined_panel.pkl` is timestamped 2026-08-31 14:20, its financial data ends 2026-05-28, and no scheduled job refreshes it. EP/BP/FCF Yield/ROE have been bitwise unchanged since 2026-08-27 (change this run 0.0000); they describe the March–May 2026 cross-sections. Per convention this is recorded as **no new observations**, not as a directional read.

**Did recent run days reuse the same market data?** Checking the last five distinct run days: 10-21→10-22, 10-22→10-23, 10-23→10-24 and 10-24→10-27 all show 4/7 bitwise identical (the four frozen fundamental factors), with all three price factors changing every time — **no stale-cache day**. The last clear case of duplicated old data was 10-20→10-21 (7/7 identical, a Yahoo 429 day).

## 3. Full seven-factor table (21-day holding period, cross-sectional rank IC)

| Factor | Mean IC | ICIR | Prior IC | Change | Valid obs | Share of positive IC | p-value (unadjusted) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.1054** | +0.4215 | +0.1057 | -0.0003 | 39 | 61.5% | 0.0133 | -2.71% |
| EP (earnings yield) | **-0.0480** | -0.5196 | -0.0480 | 0.0000 | 60 | 28.3% | 0.0002 | +2.98% |
| BP (book-to-price) | **+0.0030** | +0.0456 | +0.0030 | 0.0000 | 60 | 48.3% | 0.7276 | +1.13% |
| FCF Yield | **-0.0352** | -0.5390 | -0.0352 | 0.0000 | 60 | 25.0% | 0.0001 | +2.48% |
| ROE | **-0.0248** | -0.6845 | -0.0248 | 0.0000 | 60 | 26.7% | <0.0001 | +0.76% |
| VOL (volatility) | **+0.0214** | +0.1644 | +0.0329 | -0.0115 | 39 | 61.5% | 0.3173 | -2.39% |
| SIZE (size) | **+0.0958** | +0.5631 | +0.0965 | -0.0007 | 39 | 61.5% | 0.0013 | -1.78% |

**Convention checks (verified against the code, not taken from old docs):**

- **The long-short direction is Q1 − Q5** (low-factor quintile minus high-factor quintile), key `long_short_Q1_Q5`. With a positive IC this value is negative, which is internally consistent; do not read it as "long Q5".
- **SIZE is actually `log(price)`**: `main()` calls `build_size_panel(prices)` without `shares_info`, so the factor value is a log-price-level proxy (recomputing with `np.log(prices)` reproduces the result JSON bitwise) — **it is not market cap**. Any "small caps are winning / large caps dominate" conclusion is invalid.
- The long-short figures are quintile mean return spreads, **before costs and not annualised** — not an implementable strategy return.
- The three price factors have 39 observations and the four fundamental factors 60; `n_ic_obs` is the actual IC series length, not the nominal 60-cross-section window.

**Sign states are unchanged**: MOM/VOL/SIZE remain positive, EP/FCF Yield/ROE remain negative, and BP remains near zero (+0.0030, p=0.73, i.e. noise). Across 136 distinct run days EP/FCF Yield/ROE have **never** turned positive; MOM's last sign change was 2026-10-06, SIZE 2026-10-01, VOL 2026-08-29.

### Full-window mean alongside recent cross-sections

| Factor | 39-cross-section mean | Last 10 cross-sections | Last 3 (09-23 / 09-24 / 09-25) |
|------|------:|------:|------:|
| MOM | +0.105 | -0.118 | **-0.298** (-0.306 / -0.317 / -0.271) |
| VOL | +0.021 | -0.130 | **-0.234** (-0.250 / -0.225 / -0.226) |
| SIZE | +0.096 | +0.093 | -0.061 (-0.054 / -0.076 / -0.052) |

MOM's and VOL's positive means come mainly from the July–August cross-sections; the evaluable late-September cross-sections are consecutively negative. **This is not a reversal that began today** — the last five evaluable cross-sections (from 09-19) are all negative. The only marginal information this run is that the incoming 09-25 cross-section still sits on the negative side (MOM -0.271, VOL -0.226): it neither dragged the mean down further nor showed any sign of turning back up.

## 4. Sector momentum table and coverage

![Sector momentum breakdown 2026-10-27](/charts/sector-mom-2026-10-27.png)

*Caption: sector momentum mean IC, market data through the 2026-10-26 (Monday) close, evaluation window 2026-08-03 → 2026-09-25 (39 cross-sections), 21-day holding period. Covers only the 7 GICS sectors with ≥30 valid constituents.*

| Sector | Mean IC | ICIR | Prior IC | Change | Stocks | Share of positive IC | Long-short Q1−Q5 |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|
| Consumer Staples | **+0.2552** | +1.4662 | +0.2559 | -0.0007 | 36 | 84.6% | -3.36% |
| Consumer Discretionary | **+0.2210** | +1.4206 | +0.2115 | +0.0095 | 48 | 89.7% | -3.08% |
| Health Care | **+0.1826** | +0.8250 | +0.1924 | -0.0098 | 59 | 76.9% | -7.66% |
| Industrials | +0.0848 | +0.2834 | +0.0864 | -0.0016 | 79 | 61.5% | -1.94% |
| Information Technology | -0.0265 | -0.0554 | -0.0223 | -0.0042 | 73 | 51.3% | +2.64% |
| Financials | -0.0350 | -0.1121 | -0.0334 | -0.0016 | 76 | 43.6% | +0.81% |
| Utilities | -0.0857 | -0.8253 | -0.0865 | +0.0008 | 31 | 25.6% | +3.19% |

**Coverage: only 7 of the 11 GICS sectors are reported, 402 of 502 stocks (80% of the universe).** Not covered: Real Estate (31 stocks, filtered out this run because valid constituents fell below 30), Materials (26), Communication Services (23) and Energy (21); the last three have never reached the 30-stock threshold. About 101 stocks sit outside the sector table — **Energy and Communication Services, two sectors with heavy narrative weight, are entirely absent, so the sector table cannot stand in for market-wide sector rotation.**

**New sector-level sign reversals today: zero.** Checking the last genuine sign-change date for each:

- Information Technology: **2026-10-23** (+0.0052 → -0.0163). Today's -0.0265 is the third day of that flip — continuation, not a new reversal.
- Financials: **2026-08-19** (+0.3094 → -0.1262); today -0.0350, still negative.
- Utilities: **2026-08-19** (+0.1993 → -0.0585); today -0.0857, essentially flat.
- Health Care: turned positive on **2026-09-24**; today +0.1826, still positive but slightly lower.
- Consumer Discretionary turned positive on 2026-09-22 (today +0.2210, actually strengthening), Consumer Staples on 2026-09-24 and Industrials on 2026-10-07 — all directions unchanged.

**Structurally it is still one sentence: consumer (Staples +0.255, Discretionary +0.221) and health care (+0.183) are the only three sectors with ICIR above 0.8, while tech, financials and utilities sit near zero or below.** Information Technology has decayed from +0.52 on 2026-08-19 to -0.027, the clearest sector-structure change of this cycle, and has now been negative for three consecutive run days.

![Factor IC overview 2026-10-27](/charts/factor-ic-2026-10-27.png)

*Caption: seven-factor mean IC, market data through the 2026-10-26 (Monday) close; price factors use the 2026-08-03 → 2026-09-25 window (39 cross-sections), the four fundamental factors are the frozen 2026-03-04 → 2026-05-28 snapshot (60 cross-sections). Significance markers in the chart are based on the unadjusted ordinary t-test and disagree with the overlap-corrected results — do not quote them directly.*

## 5. What this implies for strategy, and what it does not

**What can be said:**

1. **In-sample momentum is still positive, but recent cross-sections are reversed.** Full window +0.105, last 10 cross-sections -0.118, last 3 -0.298. Both facts hold simultaneously; the sign of the read depends on the window, and quoting only one is selective.
2. **The recent signal has been negative for five consecutive cross-sections — not one day of noise.** If the October cross-sections that roll in going forward keep printing negative, the full-window mean will be dragged down step by step; if they turn positive, late September was just a short stretch. Which one it is cannot be determined now, because no October cross-section has reached its evaluation date.
3. **The information content of sector dispersion is far greater than that of the aggregate factors.** Consumer and health care ICIRs run 0.8–1.5 while tech, financials and utilities sit near zero or below. "US momentum works overall" carries no information as a basis for sector allocation.
4. **VOL's mean is now only +0.021**, with the last three cross-sections at -0.234 and an overlap-corrected NW t of 0.52 — it was never significant. Today's -0.0115 is window arithmetic, not new evidence.

**What cannot be inferred:**

- **A positive MOM does not mean the market must rise.** This is 21-day cross-sectional relative strength, not index direction; it is not the same statistical object as index returns.
- **Negative MOM over the last three cross-sections does not mean every laggard is worth buying.** It only says the low-momentum quintile outperformed within the late-September sample, and implies nothing about those companies' fundamentals.
- **VOL's p-value moving from 0.121 to 0.317 does not mean the volatility factor broke (or recovered).** It is a t-statistic decline caused by window composition, and under overlap correction (NW t = 0.52) neither period is significant.
- **A positive SIZE does not mean a small-cap regime.** The factor is `log(price)`, reflecting price level only, unrelated to market cap or float, and cannot be extrapolated to market-wide size style.
- **Negative EP / FCF Yield / ROE does not confirm a value rotation.** They describe the March–May 2026 cross-sections (frozen for nearly five months); a negative IC only says expensive names subsequently did better in that sample.
- **The number of currently negative sectors (3) is not the number of new reversals this run (0).**
- **No October price information has entered any factor reading.** This report is not a directional call on the 10-27 open.

## 6. Statistical and data limitations

1. **The p-values are unadjusted for overlapping samples and are only a lower bound.** A 21-day forward return makes adjacent cross-sections overlap by 20 trading days; measured IC-series AR(1): MOM 0.94, VOL 0.86, SIZE 0.97, EP 0.87, BP 0.90, FCF 0.75, ROE 0.80. Recomputed locally with Newey-West (lag=20, Bartlett kernel):

   | Factor | Ordinary t | NW t (corrected) | Passes 1.96? |
   |------|------:|------:|:---:|
   | MOM | +2.63 | **+1.19** | No |
   | VOL | +1.03 | +0.52 | No |
   | SIZE | +3.52 | **+1.33** | No |
   | EP | -4.03 | **-1.63** | No |
   | BP | +0.35 | +0.14 | No |
   | FCF Yield | -4.18 | **-1.96** | Borderline |
   | ROE | -5.30 | **-2.70** | Yes |

   After correction only ROE holds up and FCF Yield sits exactly on the threshold; everything else is below 1.96. The script's p-values cannot support claims like "highly significant, not random noise". The NW figures are local recomputations, not script output.

2. **ICIR is mean IC divided by IC standard deviation** — not strategy Sharpe, not annualised return, not a win rate.

3. **All seven anomaly alarms are legacy regime flags measured against the full-history mean, not independent risk events today.** Today's alarms are 4 🔴 plus 1 z>2σ plus 3 p-value notices: Financials "positive to negative" (actually negative since 08-19), Health Care "negative to positive" with z=+3.48 (actually positive since 09-24), Information Technology "positive to negative" (only turned negative on 10-23), Utilities "positive to negative" (negative since 08-19), plus p-value "no longer significant" for Financials, Industrials and Information Technology. **Four 🔴 alarms, zero new reversals.** The comparison object is the full-history mean, not adjacent observations.

4. **The `ic_history` baseline is polluted by duplicate records.** Current state: price factors 251 records over 136 distinct dates, with **91/135** adjacent dates bitwise identical (67%); the four fundamental factors 251–252 records over 136 distinct dates, **132/135** bitwise identical (98%, rewritten daily during the freeze); sector momentum 91–93/135 (67–69%). The z-score mean is dominated by a single regime while the standard deviation and effective sample are overstated, so `z=+3.48` should be read as "a deviation relative to a history of repeated samples", not as a statistical test.

5. **The four fundamental factors are frozen.** The panel was built on 2026-08-31 with financial data through 2026-05-28 and no cron refresh. Restoring validity requires re-running `scripts/fetch_fundamental_panel.py` and adding a scheduled job — not done here, and the script was not modified.

6. **Other boundaries**: 21-day holding period, no transaction costs, no limit-up/limit-down or liquidity constraints, no sector neutralisation (default `--mode ic`); the sector breakdown only includes sectors with ≥30 stocks in-sample (four sectors absent); long-short quintile means are not cap-weighted; a handful of tickers are missing values on the latest cached row, which does not affect the ≥30-stock cross-section threshold.
