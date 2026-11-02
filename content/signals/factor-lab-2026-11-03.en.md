---
title: "Factor Lab Daily Brief 2026-11-03"
date: 2026-11-03
description: "S&P 500 seven-factor IC test: price cache now runs through the 2026-11-02 (Monday) close, one trading day added; the newest evaluable cross-section is 2026-10-02 with a MOM IC of -0.4334, the most negative in the 39-section window. MOM +0.0896 (-0.0117), VOL -0.0103 (-0.0069, 12th consecutive negative section), SIZE +0.1035 (-0.0002); the four fundamental factors remain frozen on 2026-03-04 to 05-28 data. Every change is attributable to window roll (2026-08-07 out, 2026-10-02 in), with a maxabs of 0.0 on overlapping cache cells ruling out data revisions. MOM's last 13 sections are all negative; the full-window positive mean is still carried by August sections. Industry alarms are baseline-relative; genuinely new sign reversals: 0."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-03

## 1. Data cut-off, sample and evaluation basis

| Item | Value |
|------|-----|
| Run date | 2026-11-03 (Tuesday) 06:42 CST; US market not yet open |
| **Price cache cut-off** | **2026-11-02 (Monday close)**, 675 rows × 502 columns |
| New trading days this run | 2026-11-02 (one day; cache 674 → 675 rows) |
| Valid tickers in last row | 496 / 502 (WBD, PSKY, AVB, EA, EQR have long-standing gaps, same set as prior runs) |
| Universe | 502 S&P 500 constituents with prices (503 in the sector map); ROE valid on 474 |
| Price-factor evaluation window | **2026-08-10 → 2026-10-02, 39 effective cross-sections** |
| Fundamental-factor window | **2026-03-04 → 2026-05-28, 60 cross-sections (frozen panel)** |
| Valid names per cross-section | 499–501 |
| Holding period | 21 trading days forward return (script default `--holding 21`, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average across the 39 / 60 historical sections**, not today's IC, not a forward return, not a probability of decline |

**Cache cut-off is not the evaluation date.** A 21-day forward return needs 21 more trading days after each section, so the newest evaluable section is **2026-10-02** (`prices.index[-22]`), whose 21-day window closed exactly on 11-02. None of the closes from 10-05 through 11-02 has entered any IC reading yet. **The entire effect of Monday's close was to bring the 2 October section into the sample.**

## 2. What is new vs. what simply continues

**Summary: one new evaluable section, and all three price-factor changes are attributable to it; the four fundamental factors show no new observations; genuinely new industry-level sign reversals: 0.**

| Factor | IC (10-31 run) | IC (this run) | Change | ICIR change | Nature |
|------|------:|------:|------:|-----------|------|
| MOM | +0.1013 | **+0.0896** | **-0.0117** | +0.397 → +0.334 | Window roll |
| VOL | -0.0033 | **-0.0103** | **-0.0069** | -0.023 → -0.068 | Window roll |
| SIZE | +0.1037 | **+0.1035** | **-0.0002** | +0.643 → +0.641 | Window roll |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged | No new observations (frozen) |

**Rule out data revision before interpreting change.** Three pieces of evidence:

- The old and new `prices_cache.parquet` overlap on 674 rows with a cell-level `maxabs = 0.0`; the incremental download appended only the 2026-11-02 row and rewrote no historical prices.
- Re-running the previous run's window against the old cache (ending 10-30) reproduces MOM +0.10131, VOL -0.003349, SIZE +0.10366 — bit-identical to what was written to `ic_history` on 10-31. 38 of today's 39 sections overlap with that run and their IC values are unchanged.
- The identity (prior mean × 39 − section out + section in) / 39 reproduces today's means exactly: MOM 0.089618, VOL -0.010254, SIZE 0.103486, within 1e-6 of the result JSON.

Section by section:

1. **MOM's -0.0117 is "shallow positive out, deeply negative in"**: 2026-08-07 with IC **+0.0226** left; 2026-10-02 with IC **-0.4334** entered — the most negative of the 39 sections currently in the window.
2. **VOL's -0.0069 is likewise "positive out, negative in"**: +0.0165 out, -0.2528 in. But the full-window magnitude of 0.0103 is only ~25% of its Newey-West standard error (0.042), so it stays indistinguishable from zero.
3. **SIZE's -0.0002 is "negative out, negative in, similar size"**: -0.1408 out, -0.1476 in, so the mean barely moves. **SIZE is the only one of the three not pushed by the new section, and that is arithmetic coincidence, not evidence of a stable size effect.**

**The four fundamental factors remain frozen**: `combined_panel.pkl` was generated on 2026-08-31 with financial data ending 2026-05-28, and no scheduled job refreshes it; their readings have been bit-identical since 2026-08-27 (change 0.0000 this run). They describe the March–May 2026 cross-sections and cannot explain current price action.

**Did the last five run days (10-27, 10-28, 10-29, 10-30, 10-31) share one market snapshot?** No — the price factors differ on every one of those days (MOM 0.1054 → 0.1049 → 0.1061 → 0.1057 → 0.1013; VOL 0.0214 → 0.0149 → 0.0117 → 0.0057 → -0.0033; SIZE 0.0958 → 0.0963 → 0.0995 → 0.1023 → 0.1037). The four fundamental factors are identical across those days because their panel is frozen, not because the cache is stale.

## 3. Full seven-factor table (21-day holding, cross-sectional rank IC)

| Factor | IC mean | ICIR | Prior IC | Change | Effective N | % sections with IC>0 | p-value (no overlap adjustment) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.0896** | +0.3339 | +0.1013 | -0.0117 | 39 | 59.0% | 0.0465 | -1.81% |
| SIZE (size proxy) | **+0.1035** | +0.6411 | +0.1037 | -0.0002 | 39 | 61.5% | 0.0003 | -1.80% |
| VOL (volatility) | **-0.0103** | -0.0681 | -0.0033 | -0.0069 | 39 | 51.3% | 0.6771 | -0.94% |
| EP (earnings yield) | **-0.0480** | -0.5196 | -0.0480 | 0.0000 | 60 | 28.3% | 0.0002 | +2.98% |
| BP (book-to-price) | **+0.0030** | +0.0456 | +0.0030 | 0.0000 | 60 | 48.3% | 0.7276 | +1.13% |
| FCF Yield | **-0.0352** | -0.5390 | -0.0352 | 0.0000 | 60 | 25.0% | 0.0001 | +2.48% |
| ROE | **-0.0248** | -0.6845 | -0.0248 | 0.0000 | 60 | 26.7% | <0.0001 | +0.76% |

**Convention checks (code re-read this run, not taken from old docs):**

- **The long-short figure is Q1 − Q5** (low-factor bucket minus high-factor bucket), `quantile_returns` lines 316–333; with a positive IC the value is negative, which is internally consistent. Do not read it as "long Q5".
- **SIZE is actually `log(price)`**: `main()` calls `build_size_panel(prices)` without `shares_info`, so the factor is a log price-level proxy, **not market cap**. No "small caps beat large caps" inference is valid.
- The long-short numbers are average bucket return spreads, **before costs, not annualised** — not implementable strategy returns.
- `n_ic_obs` is the real IC series length: 39 for price factors and 60 for fundamentals, not the nominal 60-section window.

**Sign state**: MOM and SIZE positive; EP, FCF Yield and ROE negative; BP at zero (+0.0030, p=0.73, i.e. noise); VOL nominally negative but below 0.011 in magnitude. Across 141 distinct run days EP, FCF Yield and ROE have **never** been positive; the most recent sign changes were 2026-10-06 for MOM, 2026-10-01 for SIZE, 2026-10-31 (prior run) for VOL, 2026-08-27 for BP. **No factor-level sign flip occurred today; all readings extend existing regimes (run day 16 for MOM, 19 for SIZE, 2 for VOL).**

### Full-window mean alongside recent sections (the part that matters this run)

| Factor | 39-section mean | August | September | October (2 sections) | Last 10 sections | Last 3 sections | Consecutive negative sections |
|------|------:|------:|------:|------:|------:|------:|------:|
| MOM | +0.090 | **+0.228** | +0.026 | **-0.357** | **-0.268** | **-0.323** | **13** |
| VOL | -0.010 | +0.052 | -0.034 | -0.254 | **-0.213** | -0.239 | 12 |
| SIZE | +0.103 | +0.072 | **+0.149** | -0.126 | -0.042 | -0.097 | 8 |

MOM's full-window positive value is carried almost entirely by August's 17 sections (+0.228); September's 21 sections average only +0.026, the last 13 evaluable sections are **all negative**, and the newly added 10-02 section (-0.433) is the most negative among them. **"Full window +0.090" and "last 13 sections all negative" are two facts from the same data** — quoting one alone is selective reporting.

It is worth being precise about what that new section contains: it covers **the 21 trading days from the 2026-10-02 close to the 2026-11-02 close**. So while it is not a same-day IC, it does cover the October that just ended: within that cross-section, in-sample past winners underperformed past losers markedly. This is the only part of today's report carrying fresh market information.

VOL's full-window -0.010 carries no information: it is the average of August +0.052 and September -0.034, with p=0.68 and NW t=-0.16.

SIZE is the only clearly positive full-window combination, but it is weakening at the recent end too: August +0.072 → September +0.149 → October's two sections -0.126, with the last 8 sections negative. **The "positive full window, negative recent end" pattern is the same shape as MOM**; the only difference is that SIZE's window mean was not dragged down this run because the outgoing and incoming sections were of similar magnitude.

## 4. Industry momentum and coverage

![Sector momentum breakdown 2026-11-03](/charts/sector-mom-2026-11-03.png)

*Caption: industry momentum IC means; price data through the 2026-11-02 (Monday) close; evaluation window 2026-08-10 → 2026-10-02 (39 sections), 21-day holding. Covers only the 7 GICS sectors with ≥30 valid constituents, 402 names in total.*

| Sector | IC mean | ICIR | Prior IC | Change | Names | % sections with IC>0 | Last 3 sections | Long-short Q1−Q5 |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|-----:|
| Consumer Staples | **+0.2387** | +1.2225 | +0.2462 | -0.0075 | 36 | 76.9% | -0.054 | -2.65% |
| Consumer Discretionary | **+0.2208** | +1.3973 | +0.2278 | -0.0070 | 48 | 89.7% | -0.117 | -3.05% |
| Health Care | **+0.1357** | +0.5779 | +0.1479 | -0.0122 | 59 | 66.7% | -0.022 | -5.62% |
| Industrials | +0.0607 | +0.1864 | +0.0756 | -0.0149 | 79 | 59.0% | **-0.432** | -1.44% |
| Utilities | -0.0569 | -0.4860 | -0.0618 | +0.0049 | 31 | 35.9% | **+0.080** | +2.46% |
| Information Technology | -0.0605 | -0.1184 | -0.0427 | -0.0178 | 73 | 51.3% | **-0.745** | +5.21% |
| Financials | -0.0608 | -0.1814 | -0.0478 | -0.0130 | 76 | 43.6% | **-0.498** | +1.47% |

**Coverage: only 7 of 11 GICS sectors are reported — 402 names, 80.1% of the 502-name universe.** The gaps are structural:

- **Real Estate**: 31 mapped names, but AVB and EQR have had no quotes since mid-August, so the effective count sits below the 30-name threshold; its last record in `ic_history` is **2026-09-26** (IC -0.1108) and nothing has been computed since.
- Materials (26), Communication Services (22) and Energy (21) have never reached the threshold.

About 100 names are therefore outside the table — **Energy and Communication Services, two sectors carrying a lot of the current narrative, are entirely absent, so this table cannot stand in for market-wide sector rotation.**

**Genuinely new industry-level sign reversals today: 0.** The system raised 8 alarms (4 🔴 sign flips, 3 p-value no longer significant, 1 z>2σ). Checking each against its actual sign-change date:

- Information Technology: flipped **2026-10-23** (+0.0052 → -0.0163), today is run day 7 of that regime; -0.0427 → -0.0605 is simply further drift.
- Financials: **2026-08-19** (+0.3094 → -0.1262), negative ever since.
- Utilities: **2026-08-19** (+0.1993 → -0.0585), direction unchanged.
- Health Care: turned positive **2026-09-24** and remains positive; the z=+2.56 (versus a history mean of -0.0842 ± 0.0861) is a deviation from a duplicate-heavy baseline, not a same-day break.
- Consumer Discretionary turned positive 2026-09-22, Consumer Staples 2026-09-24, Industrials 2026-10-07; none changed direction.

All 7 sectors moved by a similar small amount today (0.005–0.018, Utilities the exception at +0.005), for one shared reason: **the incoming 10-02 section was negative in nearly every sector** (Information Technology -0.776, Financials -0.572, Industrials -0.542, Consumer Discretionary -0.235, Health Care -0.145, Consumer Staples -0.136), with only Utilities positive (+0.067). That is **one window event mapped onto 7 sectors, not 7 independent sector signals**.

**What carries information is the recent-end structure, not the full-window red/green:** 6 of 7 sectors have negative last-3-section means, deepest in Information Technology (-0.745), Financials (-0.498) and Industrials (-0.432); only Utilities is positive (+0.080). Two sectors still show full-window ICIR of 1.22–1.40 (Consumer Staples, Consumer Discretionary) — but that depends on August sections staying in the window, and their last-3-section means are already negative.

One easily misread detail: **Financials' full-window IC is only -0.061 yet its last-3-section mean is -0.498, while its long-short Q1−Q5 is +1.47%** — a negative IC with a positive Q1−Q5 is self-consistent and does not mean "the low-momentum bucket made money"; its share of positive-IC sections is just 43.6%. Utilities is the mirror image: full-window -0.057, recent end +0.080, long-short +2.46%. Neither long-short number supports a trading conclusion.

![Factor IC overview 2026-11-03](/charts/factor-ic-2026-11-03.png)

*Caption: seven-factor IC means; price data through the 2026-11-02 (Monday) close; price-factor window 2026-08-10 → 2026-10-02 (39 sections); the four fundamental factors are a frozen 2026-03-04 → 2026-05-28 snapshot (60 sections). Significance markers in the chart come from unadjusted t-tests and disagree with the overlap-corrected results — do not quote them as-is.*

## 5. What this implies for strategy, and what it does not

**What can be said:**

1. **Today's change is a window-position effect, but the section it added carries real information.** MOM's -0.0117 comes entirely from the 10-02 section (-0.433) replacing the 08-07 section (+0.023); that new section covers 10-02 → 11-02, the only fresh market information here: **in-sample past winners markedly underperformed past losers over those three weeks.**
2. **MOM's recent end has now been negative for 13 consecutive evaluable sections with no sign of convergence.** Full window +0.090, last 10 sections -0.268, last 3 -0.323, newest single section -0.433. The positive mean survives only because August is still inside the window; on the current trajectory it keeps falling as those sections roll out.
3. **SIZE's "strongest full-window factor" label needs a discount.** Full window +0.103, NW t +2.13 (barely above 1.96, versus 1.92 last run), but the last 8 sections are negative and October's two sections average -0.126. And the factor is `log(price)`, **not market cap** — a positive IC only says higher-priced names subsequently outperformed lower-priced names within the sample.
4. **VOL is noise and should not be given a story.** Full window -0.010, p=0.68, NW t=-0.16; the "12 consecutive negative sections" sounds dramatic, but each is near zero and the mean is not significant.
5. **The industry layering (consumer strong, tech/financials/industrials weak) did not change qualitatively today** — all sectors drifted down together. Six of seven being negative at the recent end looks more like broad in-sample momentum failure than a clean rotation story.
6. **The four fundamental factors carry no new information today**; they stop in March–May 2026, so any current judgement built on EP / FCF Yield / ROE lacks data support.

**What cannot be inferred:**

- **A positive MOM IC ≠ the index will rise.** It is a 21-day cross-sectional relative-strength statistic, not index direction.
- **MOM at -0.433 in the 10-02 section ≠ all laggards are worth buying.** It says the low-momentum bucket outperformed in that sample; it does not distinguish "fell less" from "genuinely strong", and carries no company-level judgement.
- **A nominally negative VOL ≠ volatility factor is broken.** The magnitude (0.010) is below noise level and neither run is significant.
- **A positive SIZE ≠ a small-cap regime.** The factor is a log price proxy, unrelated to market cap.
- **SIZE's NW t above 1.96 ≠ a robust size premium.** It is a single local recomputation, the last 8 sections are negative, and it is highly sensitive to window composition.
- **Negative EP / FCF Yield / ROE ≠ value rotation confirmed.** They describe March–May 2026 cross-sections (frozen for nearly six months); a negative IC only says expensive names subsequently did better in that sample.
- **Three sectors with a negative current IC ≠ three new reversals.** Different definitions; the number of red alarms is not a count of independent risk events.
- **No readings here incorporate the 11-02 close or the 20 trading days before it.** This report is not a call on the next trading day.

## 6. Statistical and data limitations

1. **p-values are unadjusted for overlapping samples and are lower bounds only.** With a 21-day forward return, adjacent sections overlap by 20 trading days, and MOM's IC series has a measured **AR(1) of 0.956**. Local Newey-West recomputation (lag=20, Bartlett kernel):

   | Factor | Plain t | NW t (adjusted) | Passes 1.96? |
   |------|------:|------:|:---:|
   | MOM | +2.06 | **+0.73** | No |
   | VOL | -0.42 | -0.16 | No |
   | SIZE | +3.95 | **+2.13** | Yes (marginal) |
   | EP | -3.99 | **-1.63** | No |
   | BP | +0.35 | +0.14 | No |
   | FCF Yield | -4.14 | **-1.85** | No |
   | ROE | -5.26 | **-2.79** | Yes (frozen sample) |

   The script's `p=0.0465` for MOM cannot support a claim of significance or of "not random noise"; the adjusted t is 0.73. The NW values are local recomputations, not script output.

2. **ICIR is IC mean / IC standard deviation** — not a strategy Sharpe ratio, not an annualised return, not a hit rate.

3. **All anomaly alarms are legacy regime markers measured against a historical-mean baseline.** They compare against the whole-history mean, not adjacent observations, which is why there are 4 🔴 alarms and 0 new reversals. Separately: the daily wrapper takes its result file via `sorted(glob)[-1]`, which resolves to the per-sector JSON, so **factor-level alarms were not evaluated this run**; a local recheck finds only VOL (z=-2.15 versus a history mean of +0.1056 ± 0.0540), the same kind of baseline artefact driven by VOL's long positive regime.

4. **The `ic_history` baseline is polluted by duplicate records.** Current state: 141 distinct dates, roughly 256 records per factor; price factors show **91/140** adjacent dates with bit-identical values (65%), fundamentals **137/140** (97.9%, rewritten daily while frozen). The z-score mean is dominated by one regime and its standard deviation and effective sample are overstated, so `z=+2.56` should be read as "deviation from a duplicate-heavy baseline", not as a test statistic.

5. **The four fundamental factors are frozen.** The panel was generated on 2026-08-31 with financial data ending 2026-05-28 and no scheduled refresh. Restoring validity requires re-running `scripts/fetch_fundamental_panel.py` plus a new schedule — not done here, and no script was modified.

6. **Five tickers have long-standing price gaps**: WBD (last 10-05), PSKY (10-16), AVB (08-14), EA (08-10), EQR (08-21). The 11-02 row has 496/502 valid names and sections in the window have 499–501, which does not breach the 30-name threshold but does slightly reweight bucket means — and it is the direct reason Real Estate can never produce a reading.

7. **Other boundaries**: 21-day holding, no transaction costs, no limit-up/limit-down or liquidity constraints, default `--mode ic` with no sector neutralisation; the sector breakdown first forms panels at ≥10 names, but each cross-section still needs ≥30 valid names to compute IC, which is why Real Estate (31 mapped names) never produces a reading — 4 sectors and roughly 100 names are outside the table; long-short bucket means are equal-weighted, and the SIZE factor is not a market-cap measure to begin with.
