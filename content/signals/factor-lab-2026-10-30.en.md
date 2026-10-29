---
title: "Factor Lab Daily Brief 2026-10-30"
date: 2026-10-30
description: "S&P 500 seven-factor IC check: price cache now ends at the 2026-10-29 (Thursday) close, latest evaluable cross-section 2026-09-30. MOM +0.1057 (-0.0004), VOL +0.0057 (-0.0060), SIZE +0.1023 (+0.0028); no sign changes, and the four fundamental factors remain frozen at 2026-03-04 to 05-28. All 38 overlapping cross-sections match bit-for-bit, so the moves come purely from the rolling window (08-05 out, 09-30 in). Full-window means stay positive while the last 10 cross-sections read MOM -0.227 and VOL -0.193, with VOL now indistinguishable from zero; all four sector red flags are historical-mean baselines, so new reversals today: 0."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-30

## 1. Data cutoff, sample and evaluation basis

| Item | Value |
|------|-------|
| Run date | 2026-10-30 (Friday) 06:42 CST |
| **Price cache cutoff** | **2026-10-29 (Thursday close)**, 673 rows × 502 columns |
| Trading days added | 2026-10-29 (1 day; cache 672 → 673 rows) |
| Valid names on last row | 497 / 502 (WBD, PSKY, AVB, EA, EQR have no 10-29 quote — same five as last run) |
| Universe | 502 S&P 500 constituents with price data (503 in the sector map); ROE valid on 474 |
| Price-factor evaluation window | **2026-08-06 → 2026-09-30, 39 valid cross-sections** |
| Fundamental-factor window | **2026-03-04 → 2026-05-28, 60 valid cross-sections (panel frozen)** |
| Holding period | 21 trading days of forward returns (script default `--holding 21`, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average** over those 39 / 60 historical cross-sections — not today's IC, not a forward return, not a probability of decline |

**Cache cutoff ≠ evaluable date.** A 21-day forward return needs 21 trading days after each cross-section, so the latest evaluable cross-section is **2026-09-30** (`prices.index[-22]`), whose 21-day window closed exactly at the 10-29 close. The 20 trading days from 10-01 to 10-29 in the cache have not entered a single IC reading yet — **the whole effect of Thursday's close was to bring the 2026-09-30 cross-section into the window.**

## 2. What is new vs. what continues

**Verdict: the three price factors moved by one day of window roll (all changes ≤0.006, an order of magnitude below the cross-sectional IC standard deviation of 0.14–0.25); the four fundamental factors carry no new observation. No factor changed sign; new reversals today: 0.**

| Factor | IC (10-29 run) | IC (this run) | Delta | ICIR change | Nature |
|------|------:|------:|------:|-----------|------|
| MOM | +0.1061 | **+0.1057** | **-0.0004** | +0.426 → +0.423 | Window roll |
| VOL | +0.0117 | **+0.0057** | **-0.0060** | +0.086 → +0.041 | Window roll |
| SIZE | +0.0995 | **+0.1023** | **+0.0028** | +0.599 → +0.628 | Window roll |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged | No new observation (frozen) |

**The moves come from the rolling window, not from data revisions.** Two pieces of evidence:

- The 38 overlapping cross-sections are **bit-for-bit identical** (`maxdiff = 0.00e+00`): the incremental download only appended the 10-29 row and did not rewrite any historical price.
- Identity check: (previous mean × 39 − IC of the removed cross-section + IC of the added cross-section) / 39 reproduces all three current means to within the fourth decimal.

Attribution, one line per factor, so that arithmetic is not read as a trend:

1. **MOM's -0.0004 is "negative out, more negative in"**: 2026-08-05 leaves with IC **-0.2389**, 2026-09-30 enters with IC **-0.2561**, so the mean drifts slightly lower. The incoming cross-section is itself a clearly negative one.
2. **VOL's -0.0060 is "near-zero out, negative in"**: it drops +0.0244 (essentially zero) and picks up **-0.2079**. VOL's full-window mean fell from +0.0117 to +0.0057, which is **statistically zero** (p=0.80).
3. **SIZE's +0.0028 is "deep negative out, shallow negative in"**: it drops -0.1464 and picks up -0.0375.

**The four fundamental factors are still frozen**: `combined_panel.pkl` has `generated_at` 2026-05-29 and financial data ending 2026-05-28, with no scheduled task refreshing it. EP/BP/FCF Yield/ROE readings have been bit-identical since 2026-08-27 (delta 0.0000 this run) and describe the March–May 2026 cross-sections. Per definition these count as **no new observation**, not as a directional signal.

**Did the last five run dates share one price snapshot?** Across 10-23, 10-24, 10-27, 10-28 and 10-29 all three price factors differ every day (MOM 0.1073 → 0.1057 → 0.1054 → 0.1049 → 0.1061; VOL 0.0441 → 0.0329 → 0.0214 → 0.0149 → 0.0117; SIZE 0.0983 → 0.0965 → 0.0958 → 0.0963 → 0.0995) — **no two run dates reused the same snapshot**. The four fundamental factors being identical across those days is the frozen panel, not a stale cache.

## 3. Full seven-factor table (21-day holding period, cross-sectional Rank IC)

| Factor | IC mean | ICIR | Prior IC | Delta | Effective obs. | Share of positive IC | p-value (unadjusted) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.1057** | +0.4230 | +0.1061 | -0.0004 | 39 | 61.5% | 0.0130 | -2.54% |
| EP (earnings yield) | **-0.0480** | -0.5196 | -0.0480 | 0.0000 | 60 | 28.3% | 0.0002 | +2.98% |
| BP (book-to-price) | **+0.0030** | +0.0456 | +0.0030 | 0.0000 | 60 | 48.3% | 0.7276 | +1.13% |
| FCF Yield | **-0.0352** | -0.5390 | -0.0352 | 0.0000 | 60 | 25.0% | 0.0001 | +2.48% |
| ROE | **-0.0248** | -0.6845 | -0.0248 | 0.0000 | 60 | 26.7% | <0.0001 | +0.76% |
| VOL (volatility) | **+0.0057** | +0.0409 | +0.0117 | -0.0060 | 39 | 56.4% | 0.8025 | -1.75% |
| SIZE (size proxy) | **+0.1023** | +0.6276 | +0.0995 | +0.0028 | 39 | 61.5% | 0.0004 | -1.96% |

**Definition checks (code re-read this run, not carried over from old docs):**

- **The long-short column is Q1 − Q5** (low-factor bucket minus high-factor bucket), key `long_short_Q1_Q5`, source lines 331–333. A positive IC therefore implies a negative value here; do not read it as "long Q5". MOM's Q1 -2.84% vs Q5 -0.30% is consistent with IC +0.106.
- **SIZE is really `log(price)`**: `main()` calls `build_size_panel(prices)` without `shares_info` (lines 795–797), so the factor is a log-price proxy, **not market cap**. Any "small caps beat large caps" inference is invalid.
- The long-short figures are average return spreads between buckets, **before costs, not annualised**, and are not an implementable strategy return.
- `n_ic_obs` is the true IC series length: 39 for price factors, 60 for fundamental factors — not the nominal 60-date window.

**No sign changes**: MOM/VOL/SIZE positive, EP/FCF Yield/ROE negative, BP pinned near zero (+0.0030, p=0.73, i.e. noise). Across 139 de-duplicated run dates, EP/FCF Yield/ROE have **never** been positive; MOM's last sign change was 2026-10-06, SIZE 2026-10-01, VOL 2026-08-29, BP 2026-08-27. **Today is de-duplicated run 15 / 18 / 47 / 49 of those regimes (counting the change day), not a reversal day.**

### Full-window vs. recent cross-sections (the part that matters)

| Factor | 39-section mean | August (18) | September (21) | Last 10 | Last 3 (09-28 / 09-29 / 09-30) |
|------|------:|------:|------:|------:|------:|
| MOM | +0.106 | **+0.198** | +0.026 | **-0.227** | **-0.237** (-0.237 / -0.218 / -0.256) |
| VOL | +0.006 | +0.052 | -0.034 | **-0.193** | -0.177 (-0.179 / -0.144 / -0.208) |
| SIZE | +0.102 | +0.048 | **+0.149** | +0.008 | -0.036 (-0.058 / -0.011 / -0.037) |

MOM's positive full-window mean is almost entirely carried by the August cross-sections (+0.198); the 21 September cross-sections average just +0.026, and 11 of the last 12 are negative. **"Full window +0.106" and "last 10 cross-sections -0.227" are both true on the same data**; reporting only one is selective. Today's incoming cross-section (-0.256) is the most negative of the last three — consistent with the recent regime, with no sign of improvement.

SIZE is the only opposite pattern: its 21 September cross-sections average +0.149 versus +0.048 in August, yet the last 3 have turned negative (-0.036). Again, description only — no style inference.

VOL deserves its own sentence: full-window +0.0057, p=0.80, NW t=0.11 — **its positive sign carries no information**; the mean is just the average of August's positive residue and September's negative values.

## 4. Sector momentum table and coverage

![Sector momentum decomposition 2026-10-30](/charts/sector-mom-2026-10-30.png)

*Caption: sector momentum IC means; prices through the 2026-10-29 (Thursday) close; evaluation window 2026-08-06 → 2026-09-30 (39 cross-sections), 21-day holding period. Only the 7 GICS sectors with ≥30 valid constituents are covered.*

| Sector | IC mean | ICIR | Prior IC | Delta | Stocks | Share of positive IC | Last-3 mean | Long-short Q1−Q5 |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|-----:|
| Consumer Staples | **+0.2498** | +1.3708 | +0.2520 | -0.0022 | 36 | 82.1% | -0.051 | -3.28% |
| Consumer Discretionary | **+0.2291** | +1.6328 | +0.2273 | +0.0019 | 48 | 92.3% | -0.003 | -3.07% |
| Health Care | **+0.1535** | +0.6526 | +0.1610 | -0.0075 | 59 | 69.2% | **-0.130** | -6.42% |
| Industrials | +0.0815 | +0.2686 | +0.0836 | -0.0021 | 79 | 61.5% | **-0.334** | -2.11% |
| Information Technology | -0.0338 | -0.0694 | -0.0316 | -0.0022 | 73 | 51.3% | **-0.715** | +3.41% |
| Financials | -0.0410 | -0.1286 | -0.0386 | -0.0024 | 76 | 43.6% | **-0.405** | +0.90% |
| Utilities | -0.0674 | -0.5844 | -0.0731 | +0.0056 | 31 | 30.8% | +0.129 | +2.86% |

**Coverage: only 7 of 11 GICS sectors, 402 of the 502 names (80%).** The gaps are structural:

- **Real Estate**: 31 mapped names, but AVB and EQR have had no quotes since mid-August, leaving fewer than the 30-name threshold; its last record in `ic_history` is **2026-09-26** (IC -0.1108) and it is no longer computed.
- Materials (26), Communication Services (23) and Energy (21) never reach the 30-name threshold.

About 101 names fall outside the table — **Energy and Communication Services, both heavy in current narratives, are absent entirely, so the sector table cannot stand in for market-wide sector rotation.**

**New sector sign reversals today = 0.** The system raised 8 alarms (4 red sign-flip flags, 3 p-value flags, 1 z>2σ flag). Checked against the actual last sign-change dates:

- Information Technology: **2026-10-23** (+0.0052 → -0.0163); today's -0.0338 is run 6 of that flip — continuation.
- Financials: **2026-08-19** (+0.3094 → -0.1262); still negative.
- Utilities: **2026-08-19** (+0.1993 → -0.0585); direction unchanged.
- Health Care: turned positive **2026-09-24** and is still positive but has slid for six consecutive runs (0.2008 → 0.1535); the z=+2.87 flag (versus a historical mean of -0.0863 ± 0.0835) is a deviation from a duplicated baseline, not a move today.
- Consumer Discretionary flipped positive 2026-09-22, Consumer Staples 2026-09-24, Industrials 2026-10-07 — all unchanged today.

**The informative part is the recent dispersion, not the full-window colours:** 6 of 7 sectors have a negative last-3 mean, led by Information Technology -0.715, Financials -0.405 and Industrials -0.334; only Utilities is positive near-term (+0.129). In other words, **sector momentum's "winners keep winning" structure failed across the board in late September, not just in tech**. The two sectors still showing ICIR of 1.37–1.63 (Staples, Discretionary) owe that reading to the August cross-sections remaining inside the window.

![Factor IC overview 2026-10-30](/charts/factor-ic-2026-10-30.png)

*Caption: seven-factor IC means, prices through the 2026-10-29 (Thursday) close; price-factor window 2026-08-06 → 2026-09-30 (39 cross-sections); the four fundamental factors are a frozen 2026-03-04 → 2026-05-28 snapshot (60 cross-sections). Significance marks in the chart come from an unadjusted t-test and disagree with the overlap-adjusted results — do not cite them.*

## 5. Implications for strategy, and what cannot be concluded

**What can be said:**

1. **There is no new information today, only a one-day change of window position.** All three price-factor changes are within ±0.006 while MOM's single cross-section IC standard deviation is 0.25 — arguing "momentum is strengthening/decaying" on this is statistically meaningless.
2. **MOM's positive full-window mean coexists with negative recent readings, and has for many cross-sections.** Full window +0.106, last 10 -0.227, last 3 -0.237, with 11 of the last 12 negative. Both facts are true; the conclusion depends on the basis, and quoting one only is selective.
3. **VOL's positive sign has effectively vanished** (+0.0057, p=0.80, NW t=0.11). It did not "just weaken" — it was never significant; the full-window mean is the average of August residue and September negatives.
4. **The sector layering (consumer strong; tech/financials/utilities weak) is unchanged today, but 6 of 7 sectors are negative near-term**, which looks more like broad in-sample momentum failure than a rotation story. The two high-ICIR consumer sectors look good only while the August cross-sections remain in the window.
5. **The four fundamental factors carry no new information today**; their readings sit in March–May 2026, so any current call built on EP/FCF/ROE lacks data support.

**What cannot be concluded:**

- **Positive MOM ≠ the index must rise.** This is 21-day cross-sectional relative strength, not index direction; the two are different statistical objects.
- **Negative near-term MOM ≠ every laggard is worth buying.** It only says the low-momentum bucket outperformed within the late-September sample; it does not separate "fell less" from "genuinely strong" and says nothing about fundamentals.
- **VOL's -0.0060 ≠ the volatility factor breaking or recovering.** Neither period is significant; the change is within noise.
- **Positive SIZE ≠ a small-cap regime.** The factor is `log(price)`, unrelated to market cap or float.
- **Negative EP / FCF Yield / ROE ≠ confirmed value rotation.** They describe March–May 2026 cross-sections (frozen for five months); a negative IC only says the expensive bucket did better within that sample.
- **Three negative sectors today ≠ three new reversals.** Different bases; red-flag counts are not independent risk events.
- **No October price information has entered any factor reading yet.** This report is not a directional call on the 10-30 open.

## 6. Statistical and data limitations

1. **p-values are unadjusted for overlapping samples and are only a lower bound.** A 21-day forward return makes adjacent cross-sections overlap by 20 trading days, with measured IC-series AR(1) of 0.75–0.97. Local Newey-West recomputation (lag=20, Bartlett kernel):

   | Factor | Plain t | NW t (adjusted) | Above 1.96? |
   |------|------:|------:|:---:|
   | MOM | +2.61 | **+1.10** | No |
   | VOL | +0.25 | +0.11 | No |
   | SIZE | +3.87 | **+1.91** | No |
   | EP | -3.99 | **-1.63** | No |
   | BP | +0.35 | +0.14 | No |
   | FCF Yield | -4.14 | **-1.85** | No |
   | ROE | -5.26 | **-2.79** | Yes |

   Only ROE survives; everything else falls below 1.96. The script's p-values cannot support claims such as "highly significant, not random noise". NW figures are local recomputation, not script output.

2. **ICIR is IC mean / IC standard deviation** — not a strategy Sharpe, not annualised return, not a hit rate.

3. **All 8 anomaly alarms are historical-mean flags from an existing regime.** The comparison object is the all-history mean, not the adjacent observation, so the number of red flags (4) differs completely from the number of new reversals (0).

4. **The `ic_history` baseline is polluted by duplicated records.** Currently 139 de-duplicated dates and about 254 records per factor. For price factors **91/138** adjacent dates are bit-identical (65.9%); for the four fundamental factors **135/138** (97.8%, rewritten daily during the freeze). The z-score mean is dominated by one regime and its standard deviation and effective sample are overstated, so `z=+2.87` should be read as "deviation from a duplicated baseline", not as a test result.

5. **The four fundamental factors are frozen.** The panel was generated 2026-05-29 with financial data ending 2026-05-28 and no cron refresh. Restoring them requires re-running `scripts/fetch_fundamental_panel.py` plus a scheduled job — not done here, and no script was modified.

6. **Five names have long-standing price gaps**: WBD (ends 10-05), PSKY (10-16), AVB (08-14), EA (only 6 valid points), EQR (08-21). The 10-29 row has 497/502 valid names and the window's cross-sections carry 496–498 (median 498), which does not break the 30-name threshold but slightly shifts bucket weights and is the direct reason Real Estate cannot qualify.

7. **Other boundaries**: 21-day holding period, no transaction costs, no limit-up/down or liquidity constraints, default `--mode ic` with no sector neutralisation; sector decomposition uses only sectors with ≥30 names (4 sectors absent); long-short bucket returns are equal-weighted, and the SIZE factor itself is not a market-cap measure.
