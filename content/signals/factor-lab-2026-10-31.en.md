---
title: "Factor Lab Daily Brief 2026-10-31"
date: 2026-10-31
description: "S&P 500 seven-factor IC test: price cache advanced to the 2026-10-30 (Friday) close, latest evaluable cross-section 2026-10-01. MOM +0.1013 (-0.0044), VOL -0.0033 (-0.0091, nominal zero crossing but within noise), SIZE +0.1037 (+0.0013); the four fundamental factors remain frozen at the 2026-03-04 to 05-28 snapshot. The 38 overlapping cross-sections are bit-identical, so every change comes from the rolling window (exit 08-06, entry 10-01); last 10 cross-sections: MOM -0.241, VOL -0.200, SIZE -0.016. All 8 sector alarms are historical-mean baseline artifacts; actual new sign reversals: 0."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-10-31

## 1. Data cut-off, sample and evaluation basis

| Item | Value |
|------|-------|
| Run date | 2026-10-31 (Saturday) 06:42 CST, not a US trading day |
| **Market data (price cache) through** | **2026-10-30 (Friday close)**, 674 rows × 502 columns |
| New trading day in this run | 2026-10-30 (1 session, cache 673 → 674 rows) |
| Valid tickers on last row | 497 / 502 (WBD, PSKY, AVB, EA, EQR have no 10-30 quote — same set as last run) |
| Universe | 502 S&P 500 constituents with price data (503 in the sector map); ROE valid for 474 |
| Price-factor evaluation window | **2026-08-07 → 2026-10-01, 39 valid cross-sections** |
| Fundamental-factor window | **2026-03-04 → 2026-05-28, 60 valid cross-sections (frozen panel)** |
| Names per cross-section | 496–498 (median 496) |
| Holding period | 21 trading-day forward return (`--holding 21`, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average** over the 39 / 60 historical cross-sections — not today's IC, not a forward return, not a probability of decline |

**Data cut-off ≠ evaluable date.** A 21-day forward return requires 21 more trading sessions after each cross-section, so the latest evaluable date is **2026-10-01** (`prices.index[-22]`), whose 21-day window closed exactly at the 10-30 close. The 20 sessions from 10-02 to 10-30 have not entered any IC reading yet — **Friday's close did exactly one thing: it brought the 1 October cross-section into the sample.**

## 2. What is new vs. what continues

**Bottom line: the three price factors moved only by rolling the window forward one day; among the seven factors only VOL crossed zero, and it remains economically zero; the four fundamental factors are an unchanged state (no new observations). Sector-level genuine new sign reversals: 0.**

| Factor | IC (10-30 run) | IC (this run) | Delta | ICIR change | Nature |
|------|------:|------:|------:|-----------|------|
| MOM | +0.1057 | **+0.1013** | **-0.0044** | +0.423 → +0.397 | window roll |
| VOL | +0.0057 | **-0.0033** | **-0.0091** | +0.041 → -0.023 | window roll (zero crossing) |
| SIZE | +0.1023 | **+0.1037** | **+0.0013** | +0.628 → +0.643 | window roll |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged | no new observations (frozen) |

**The change comes from the rolling window, not from data revisions.** Three pieces of evidence:

- Overlapping cells between the old and new `prices_cache.parquet` show `maxabs = 0.0`; the incremental download only appended the 10-30 row and rewrote no history.
- The 38 overlapping cross-sections have **bit-identical** ICs (`maxdiff = 0.00e+00`).
- Identity check: (previous mean × 39 − exiting cross-section IC + entering cross-section IC) / 39 reproduces all three new means to the fourth decimal.

Attribution, so arithmetic is not read as trend:

1. **MOM's -0.0044 is "mildly negative out, more negative in"**: the exiting 2026-08-06 cross-section had IC **-0.1091**, the entering 2026-10-01 cross-section **-0.2795**. The mean falls because the incoming section is weaker — that is "worse near the present", not "momentum recovering".
2. **VOL's -0.0091 is "positive out, deeply negative in"**: exiting +0.0982, entering **-0.2560**. The full-window mean moves from +0.0057 to -0.0033, a nominal zero crossing. **But 0.0033 is only about 6% of its Newey-West standard error of the mean (~0.055)**, and the prior reading was equally near zero — this is not a direction change for the volatility factor.
3. **SIZE's +0.0013 is "deeply negative out, mildly negative in"**: exiting -0.1563, entering -0.1046; a small upward shift, sign unchanged.

**The four fundamental factors remain frozen**: `combined_panel.pkl` has `generated_at` 2026-05-29 with financial data ending 2026-05-28, and no scheduled job refreshes it. EP/BP/FCF Yield/ROE have been bit-identical since 2026-08-27 (delta 0.0000 today). They describe March–May 2026 cross-sections and should be labelled **no new observations**, not interpreted as moves.

**Did the last five distinct run days share one price snapshot?** 10-27, 10-28, 10-29, 10-30 and 10-31 each produced different price-factor readings (MOM 0.1054 → 0.1049 → 0.1061 → 0.1057 → 0.1013; VOL 0.0214 → 0.0149 → 0.0117 → 0.0057 → -0.0033; SIZE 0.0958 → 0.0963 → 0.0995 → 0.1023 → 0.1037). **No two run days reused the same market snapshot.** The four fundamental factors were identical across all five days, but that is a frozen panel, not a stale cache.

## 3. Full seven-factor table (21-day holding, cross-sectional rank IC)

| Factor | IC mean | ICIR | Prior IC | Delta | Valid obs | Share of positive cross-sections | p-value (unadjusted) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.1013** | +0.3973 | +0.1057 | -0.0044 | 39 | 61.5% | 0.0190 | -2.30% |
| EP (earnings yield) | **-0.0480** | -0.5196 | -0.0480 | 0.0000 | 60 | 28.3% | 0.0002 | +2.98% |
| BP (book-to-price) | **+0.0030** | +0.0456 | +0.0030 | 0.0000 | 60 | 48.3% | 0.7276 | +1.13% |
| FCF Yield | **-0.0352** | -0.5390 | -0.0352 | 0.0000 | 60 | 25.0% | 0.0001 | +2.48% |
| ROE | **-0.0248** | -0.6845 | -0.0248 | 0.0000 | 60 | 26.7% | <0.0001 | +0.76% |
| VOL (volatility) | **-0.0033** | -0.0230 | +0.0057 | -0.0091 | 39 | 53.8% | 0.8879 | -1.34% |
| SIZE (size proxy) | **+0.1037** | +0.6433 | +0.1023 | +0.0013 | 39 | 61.5% | 0.0003 | -1.92% |

**Basis checks (re-read from source this run, not from old docs):**

- **Long-short is Q1 − Q5** (low-factor quintile minus high-factor quintile), lines 316–333 of the source. With a positive IC this value is negative, and the two are internally consistent. Do not read it as "long Q5". MOM's Q1 -2.71% / Q5 -0.41% matches IC +0.101.
- **SIZE is actually `log(price)`**: `main()` calls `build_size_panel(prices)` without `shares_info`, so the factor value is a log-price-level proxy, **not market capitalisation**. Any "small caps beat large caps" inference is invalid.
- Long-short figures are differences of group average returns, **gross of costs and not annualised** — not implementable strategy returns.
- `n_ic_obs` is the true IC series length: 39 for price factors and 60 for fundamental factors, not the nominal 60-day window.

**Sign state**: MOM and SIZE positive; EP, FCF Yield and ROE negative; BP near zero (+0.0030, p=0.73, i.e. noise); VOL nominally negative but |IC| < 0.01. Across 140 distinct run days, EP / FCF Yield / ROE have **never** turned positive (EP range -0.0624 to -0.0480); MOM's last sign change was 2026-10-06, SIZE 2026-10-01, BP 2026-08-27. **Today is the 15th / 18th / 49th distinct run day of those regimes — not a reversal day.**

### Full-window mean alongside near-term cross-sections (the part that matters)

| Factor | 39-section mean | Aug (17 sections) | Sep (21 sections) | 10-01 entry | Last 10 | Last 3 (09-29 / 09-30 / 10-01) |
|------|------:|------:|------:|------:|------:|------:|
| MOM | +0.101 | **+0.216** | +0.026 | **-0.2795** | **-0.241** | **-0.251** (-0.218 / -0.256 / -0.279) |
| VOL | -0.003 | +0.050 | -0.034 | -0.2560 | **-0.200** | -0.203 (-0.144 / -0.208 / -0.256) |
| SIZE | +0.104 | +0.060 | **+0.149** | -0.1046 | -0.016 | -0.051 (-0.011 / -0.038 / -0.105) |

MOM's positive full-window mean rests almost entirely on August (+0.216); the 21 September sections average +0.026, and the **last 12 sections are all negative**. "Full window +0.101" and "last 10 sections -0.241" are both true in the same dataset — reporting only one is selective. Today's entering 10-01 section at -0.2795 is among the three most negative near-term readings and gives no improvement signal.

VOL's full-window -0.003 carries no information: it is the average of August +0.050 and September -0.034, p=0.89, NW t=-0.06.

SIZE is the only clearly positive full-window combination; September averages +0.149 versus August's +0.060, but the last 3 sections are negative (-0.051) and the entering section (-0.105) is the weakest of the last six. Again: description only, no style inference.

## 4. Sector momentum table and coverage

![Sector momentum decomposition 2026-10-31](/charts/sector-mom-2026-10-31.png)

*Caption: sector-level momentum IC means; market data through the 2026-10-30 (Friday) close; evaluation window 2026-08-07 → 2026-10-01 (39 cross-sections), 21-day holding period. Covers only the 7 GICS sectors with ≥30 effective constituents.*

| Sector | IC mean | ICIR | Prior IC | Delta | Names | Share positive | Last 3 sections | Long-short Q1−Q5 |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|-----:|
| Consumer Staples | **+0.2462** | +1.3229 | +0.2498 | -0.0036 | 36 | 79.5% | -0.022 | -2.93% |
| Consumer Discretionary | **+0.2278** | +1.5921 | +0.2291 | -0.0014 | 48 | 92.3% | -0.041 | -3.09% |
| Health Care | **+0.1479** | +0.6367 | +0.1535 | -0.0055 | 59 | 69.2% | -0.031 | -6.07% |
| Industrials | +0.0756 | +0.2431 | +0.0815 | -0.0060 | 79 | 61.5% | **-0.352** | -1.92% |
| Information Technology | -0.0427 | -0.0858 | -0.0338 | -0.0089 | 73 | 51.3% | **-0.734** | +4.06% |
| Financials | -0.0478 | -0.1472 | -0.0410 | -0.0069 | 76 | 43.6% | **-0.434** | +1.07% |
| Utilities | -0.0618 | -0.5340 | -0.0674 | +0.0056 | 31 | 33.3% | +0.094 | +2.66% |

**Coverage: 7 of 11 GICS sectors, 402 names (80.1% of the 502-name pool).** The exclusions are structural:

- **Real Estate**: 31 mapped names, but AVB and EQR have had no quotes since mid-August, so effective constituents stay below the 30-name threshold. Its last record in `ic_history` is **2026-09-26** (IC -0.1108); it is no longer computed.
- Materials 26, Communication Services 22, Energy 21 — never reach the 30-name threshold.

About 100 names are outside the sector table. **Energy and Communication Services — two sectors carrying heavy narrative weight — are entirely absent, so the table does not represent market-wide sector rotation.**

**Sector-level genuine new sign reversals today = 0.** The system raised 8 alarms (4 🔴 sign flips, 3 p-value no-longer-significant, 1 z>2σ). Checking each against its actual sign-change date:

- Information Technology: **2026-10-23** (+0.0052 → -0.0163); today is the 6th run day of that flip, and -0.0338 → -0.0427 merely continues lower.
- Financials: **2026-08-19** (+0.3094 → -0.1262), negative since.
- Utilities: **2026-08-19** (+0.1993 → -0.0585), direction unchanged.
- Health Care: turned positive **2026-09-24**; still positive but deteriorating for six consecutive run days (0.2008 → 0.1479). The z=+2.75 alarm (versus historical mean -0.0852 ± 0.0848) measures deviation from a duplicated-sample baseline, not a today's break.
- Consumer Discretionary (2026-09-22), Consumer Staples (2026-09-24) and Industrials (2026-10-07) all turned positive earlier and remain unchanged.

**What carries information at the sector level is the near-term dispersion, not the full-window colours:** 6 of 7 sectors have negative last-3-section means — Information Technology -0.734, Financials -0.434, Industrials -0.352 — and only Utilities is positive (+0.094). So **the "winners keep winning" structure of sector momentum broke down across late September and early October as a whole, not in tech alone.** Meanwhile two sectors still show ICIR of 1.32–1.59 (Consumer Staples, Consumer Discretionary), but that depends on August sections remaining inside the window.

One easy-to-misread detail: **Financials' full-window IC is only -0.048 while its last 3 sections average -0.434, yet its Q1−Q5 spread is +1.07%** — negative IC with positive Q1−Q5 is self-consistent and does not mean "low-momentum names make money"; only 43.6% of its cross-sections are positive. Utilities is the mirror case: full window -0.062 but last 3 sections +0.094 and Q1−Q5 +2.66%, with just 33.3% of sections positive (most run the other way). Neither spread is a tradable conclusion.

![Factor IC overview 2026-10-31](/charts/factor-ic-2026-10-31.png)

*Caption: seven-factor IC means; market data through the 2026-10-30 (Friday) close; price factors evaluated 2026-08-07 → 2026-10-01 (39 cross-sections); the four fundamental factors are the frozen 2026-03-04 → 2026-05-28 snapshot (60 cross-sections). Significance markers in the chart use the unadjusted t-test and disagree with the overlap-corrected result — do not quote them directly.*

## 5. Implications for strategy, and what cannot be inferred

**What can be said:**

1. **There is still no new information today, only a shift in window position.** All three price factors moved by less than 0.01, while MOM's single-section standard deviation is 0.255 — arguing "momentum strengthening/weakening" from this is statistically meaningless.
2. **MOM's positive full window and negative near-term readings coexist, and the near term is deteriorating, not repairing.** Full window +0.101, last 10 sections -0.241, last 3 -0.251, last 12 all negative; today's entering 10-01 section (-0.280) deepens that direction.
3. **VOL's "turn negative" is not a signal.** Full window -0.003, p=0.89, NW t=-0.06; the readings on both sides of the zero crossing sit near zero. Calling it "volatility factor failed/reversed" is over-reading.
4. **The sector layering (consumer strong; tech/financials/industrials weak) is unchanged today, but 6 of 7 sectors are negative near-term**, which looks more like broad in-sample momentum decay than a clean rotation story. The two high-ICIR sectors owe their numbers to August sections still being in the window.
5. **The four fundamental factors carry no new information today** — readings stop at March–May 2026, so any current judgement built on EP/FCF/ROE lacks data support.

**What cannot be inferred:**

- **Positive MOM ≠ the index must rise.** It is a 21-day cross-sectional relative-strength measure, a different statistical object from index direction.
- **Negative near-term MOM ≠ every laggard is worth buying.** It only says low-momentum names outperformed within late-September/early-October samples; it does not separate "fell less" from "genuinely strong", nor say anything about company fundamentals.
- **VOL turning negative ≠ the volatility factor failed.** At 0.0033 the magnitude is far below noise and neither period was significant.
- **Positive SIZE ≠ a small-cap regime.** The factor is `log(price)`, unrelated to market cap or float.
- **Negative EP / FCF Yield / ROE ≠ value rotation confirmed.** They describe March–May 2026 cross-sections frozen for five months; a negative IC only says high-valuation names did better in that sample.
- **The number of currently negative sectors (3) ≠ the number of new reversals today (0).** Different bases; the red-light count is not a count of independent risk events.
- **No October price information has entered any factor reading.** Nothing here is a directional call on the next session.

## 6. Statistical and data limitations

1. **p-values are unadjusted for overlapping samples and are only a lower bound.** The 21-day forward return makes adjacent cross-sections overlap by 20 sessions; measured IC AR(1) is 0.75–0.96. Local Newey-West recomputation (lag=20, Bartlett kernel):

   | Factor | Plain t | NW t (corrected) | Above 1.96? |
   |------|------:|------:|:---:|
   | MOM | +2.45 | **+0.98** | No |
   | VOL | -0.14 | -0.06 | No |
   | SIZE | +3.97 | **+1.92** | No |
   | EP | -3.99 | **-1.60** | No |
   | BP | +0.35 | +0.14 | No |
   | FCF Yield | -4.14 | **-1.90** | No |
   | ROE | -5.26 | **-2.86** | Yes |

   Only ROE survives — and that series comes from a frozen March–May sample. Everything else falls below 1.96, so the script's p-values cannot support "highly significant, not random noise". NW figures are local recomputation, not script output.

2. **ICIR is IC mean divided by IC standard deviation** — not strategy Sharpe, not annualised return, not a hit rate.

3. **All 8 alarms are old-regime markers under the historical-mean convention.** The comparison object is the full-sample historical mean, not adjacent observations, which is why 🔴 count (4) differs from new reversals (0). Note also that the daily wrapper picks `sorted(glob)[-1]`, which is the per-sector JSON, so **factor-level alarms were not evaluated this run**; a manual check shows VOL would raise two (z=-2.04 versus historical mean +0.1060, and p no longer significant) — the same baseline artifact, since the history contains VOL's long positive regime.

4. **The `ic_history` baseline is polluted by duplicate records.** Current state: 140 distinct dates, about 255 records per factor (256 for EP). Price factors have **91/139** adjacent dates bit-identical (65.5%); the four fundamental factors **136/139** (97.8%, rewritten daily during the freeze). The z-score mean is dominated by one regime and both its standard deviation and effective sample are overstated, so `z=+2.75` reads as "deviation from a duplicated baseline", not a test statistic.

5. **The four fundamental factors are frozen.** The panel was built 2026-05-29 with data through 2026-05-28 and no cron refresh. Restoring validity requires re-running `scripts/fetch_fundamental_panel.py` plus a scheduled job — not done this run, and no script was modified.

6. **Five tickers are chronically missing prices**: WBD (last 10-05), PSKY (10-16), AVB (08-14), EA (08-10), EQR (08-21). The 10-30 row has 497/502 valid; cross-sections in the window carry 496–498 names. This does not breach the 30-name threshold but slightly reweights group means and is the direct reason Real Estate cannot qualify.

7. **Other boundaries**: 21-day holding, no transaction costs, no limit-up/down or liquidity constraints, default `--mode ic` with no sector neutralisation; sector decomposition only for sectors with ≥30 names (4 sectors absent, about 100 names outside the table); long-short group means are not cap-weighted, and SIZE itself is not a market-cap measure.
