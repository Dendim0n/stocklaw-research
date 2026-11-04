---
title: "Factor Lab Daily Brief 2026-11-05"
date: 2026-11-05
description: "S&P 500 seven-factor IC test: the price cache advanced to the 2026-11-04 (Wednesday) close, one new trading day. The latest evaluable cross-section is 2026-10-06 (MOM IC -0.4448, the most negative in the window). MOM +0.0625 (-0.0145; raw p 0.194, Newey-West t only 0.46), VOL -0.0212 (-0.0041), SIZE +0.1026 (-0.0006); the four fundamental factors remain frozen at 2026-03-04 to 05-28 with a zero delta. Every change among price factors comes from the rolling window (2026-08-11 out, 2026-10-06 in), and the overlap check on the old and new cache gives maxabs=0, ruling out data revisions. MOM has now printed 15 consecutive negative evaluable sections, its positive full-window mean still rests on August sections, and it has declined on five straight run days. All eight sector alerts are historical-mean baseline artifacts; zero genuinely new sign reversals today."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-05

## 1. Data cutoff, sample, and evaluation conventions

| Item | Value |
|------|-------|
| Run date | 2026-11-05 (Thursday) 06:41 CST, i.e. 2026-11-04 (Wednesday) 17:41 EST, after the 11-04 close |
| **Market data (price cache) cutoff** | **2026-11-04 (Wednesday close)**, 677 rows × 502 columns |
| New trading day added | 2026-11-04 (one day; cache 676 → 677 rows) |
| Usable names on the last row | 496 / 502 (WBD, KVUE, PSKY, AVB, EA, EQR still missing prices, same as last run) |
| Universe | 502 S&P 500 constituents with price data (503 in the sector map); 474 valid for ROE |
| Price-factor evaluation window | **2026-08-12 → 2026-10-06, 39 valid cross-sections** |
| Fundamental-factor evaluation window | **2026-03-04 → 2026-05-28, 60 valid cross-sections (frozen panel)** |
| Names per cross-section | 495–501 |
| Holding period | 21 trading days of forward returns (script default `--holding 21`, unchanged) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average across the 39 / 60 historical cross-sections above**, not today's IC, not a future return, not a probability of decline |

**The data cutoff is not the evaluable date.** A 21-day forward return needs 21 more trading days after each cross-section, so the latest evaluable cross-section is **2026-10-06** (`prices.index[-22]`) — exactly 21 trading days before 11-04, so its window only completed today. The 21 closes from 10-07 through 11-04 have **not entered any IC reading**. The entire effect of the 11-04 close is to bring the single 2026-10-06 cross-section into the sample.

## 2. What is new versus what continues

**Conclusion: one new evaluable cross-section (2026-10-06) drives all of the change in the three price factors; the four fundamental factors show no new observations; there were zero genuinely new sign reversals at either factor or sector level.**

| Factor | IC (11-04 run) | IC (this run) | Delta | ICIR change | Nature |
|------|------:|------:|------:|-----------|------|
| MOM | +0.0770 | **+0.0625** | **-0.0145** | +0.275 → +0.215 | Window roll |
| VOL | -0.0171 | **-0.0212** | **-0.0041** | -0.109 → -0.132 | Window roll |
| SIZE | +0.1032 | **+0.1026** | **-0.0006** | +0.638 → +0.631 | Window roll |
| EP / BP / FCF Yield / ROE | unchanged | unchanged | 0.0000 | unchanged | No new observations (frozen) |

**Rule out data revisions before discussing change.** Three pieces of evidence:

- The old and new `prices_cache.parquet` overlap on 676 rows with a maximum absolute cell difference of `maxabs = 0.0`; the incremental download only appended the 2026-11-04 row and rewrote no history.
- Rebuilding the momentum / volatility / size panels from the current cache and recomputing the 39 cross-sections gives MOM +0.062494, VOL -0.021198, SIZE +0.102638, within 3e-07 of the result JSON.
- The identity (previous mean × 39 − removed section + added section) / 39 reproduces this run's means exactly: MOM 0.06249, VOL -0.02120, SIZE 0.10264.

Attribution, item by item:

1. **MOM's -0.0145 is "positive out, deeply negative in"**: 2026-08-11 leaves with an IC of **+0.1207**, 2026-10-06 enters with **-0.4448**, the most negative of the 39 sections. That is why the mean falls.
2. **VOL's -0.0041 is "mildly negative out, more negative in"**: -0.0672 out, -0.2255 in. The full-window magnitude of 0.021 is still far below its Newey-West standard error (about 0.07), so it sits near zero.
3. **SIZE's -0.0006 is "negative out, negative in, similar magnitude"**: -0.1430 out, -0.1652 in, so the mean barely moves. **This is not evidence of a stable size effect; it only means the two sections happen to be close.**

**The four fundamental factors are still frozen.** `combined_panel.pkl` was written 2026-08-31 14:20 with financial data ending 2026-05-28, and no scheduled job refreshes it. All four readings have been bit-identical since 2026-08-27 (delta 0.0000 this run). By convention they are reported as **no new observations**: their IC describes the 2026 March–May cross-sections and cannot explain current market behaviour.

**Did the last five distinct run days (10-30, 10-31, 11-03, 11-04, 11-05) share the same market data?** No — all three price factors differ every day: MOM 0.1057 → 0.1013 → 0.0896 → 0.0770 → 0.0625, VOL 0.0057 → -0.0033 → -0.0103 → -0.0171 → -0.0212, SIZE 0.1023 → 0.1037 → 0.1035 → 0.1032 → 0.1026. The four fundamental factors are bit-identical across those days because the panel is frozen, not because the cache is stale.

One direction worth stating plainly: **MOM has fallen on five consecutive run days, -0.0432 cumulatively.** This is not "momentum weakening today"; it is window geometry. The high-IC August sections are being rolled out of the 39-section window one at a time while October's negative sections roll in. At the current pace the full-window mean will keep converging toward the September–October level even if no new negative section is produced.

## 3. Full seven-factor table (21-day holding period, cross-sectional rank IC)

| Factor | Mean IC | ICIR | Previous IC | Delta | Valid observations | Share of positive IC sections | p-value (overlap-unadjusted) | Long-short Q1−Q5 |
|------|------:|-----:|------:|-----:|-----:|-----:|-----:|-----:|
| MOM (momentum) | **+0.0625** | +0.2145 | +0.0770 | -0.0145 | 39 | 53.8% | 0.1940 | -0.79% |
| SIZE (price-level proxy) | **+0.1026** | +0.6307 | +0.1032 | -0.0006 | 39 | 61.5% | 0.0004 | -1.50% |
| VOL (volatility) | **-0.0212** | -0.1323 | -0.0171 | -0.0041 | 39 | 51.3% | 0.4198 | -0.16% |
| EP (earnings yield) | **-0.0480** | -0.5196 | -0.0480 | 0.0000 | 60 | 28.3% | 0.0002 | +2.98% |
| BP (book-to-price) | **+0.0030** | +0.0456 | +0.0030 | 0.0000 | 60 | 48.3% | 0.7276 | +1.13% |
| FCF Yield | **-0.0352** | -0.5390 | -0.0352 | 0.0000 | 60 | 25.0% | 0.0001 | +2.48% |
| ROE | **-0.0248** | -0.6845 | -0.0248 | 0.0000 | 60 | 26.7% | <0.0001 | +0.76% |

**Convention checks (code re-read this run, not taken from old docs):**

- **The long-short direction is Q1 − Q5** (low-factor group minus high-factor group), see `quantile_returns` lines 316–333; with a positive IC that value is negative, which is internally consistent. Do not read it as "long Q5".
- **SIZE is effectively `log(price)`**: `main()` calls `build_size_panel(prices)` without `shares_info` (lines 285–296, 797), so the factor is a log proxy for price level, **not market cap**. No small-cap / large-cap conclusion follows.
- The long-short figures are differences in group mean returns, **before costs and unannualised**; they are not implementable strategy returns.
- `n_ic_obs` is the true IC series length: 39 for price factors, 60 for fundamentals, not the nominal 60 (`sample_dates` takes the last 60 dates and skips the final 21 that lack forward returns).

**Sign state**: MOM and SIZE positive, EP / FCF Yield / ROE negative, BP near zero (+0.0030, p=0.73, indistinguishable from noise), VOL nominally negative but below 0.03 in magnitude. Across 143 deduplicated run days, EP / FCF Yield / ROE have **never** been positive; MOM's last sign change was 2026-10-06, SIZE's 2026-10-01, VOL's 2026-10-31, BP's 2026-08-27. **No factor flipped sign today**: MOM is on its 19th run day of the positive regime, VOL's negative regime began 10-31 (4th run day), SIZE has been positive since 10-01 (22nd run day).

### Full-window mean alongside the recent sections (the part that matters this run)

| Factor | 39-section mean | Aug (14) | Sep (21) | Oct (4) | Last 10 sections | Last 3 sections | Consecutive negative sections |
|------|------:|------:|------:|------:|------:|------:|------:|
| MOM | +0.062 | **+0.246** | +0.026 | **-0.391** | **-0.317** | **-0.428** | **15** |
| VOL | -0.021 | +0.065 | -0.034 | -0.256 | **-0.226** | -0.256 | 14 |
| SIZE | +0.103 | +0.102 | **+0.149** | -0.141 | -0.085 | -0.153 | 10 |

Nearly all of MOM's positive full-window mean comes from the 14 August sections (+0.246); the 21 September sections average only +0.026 and the 4 October sections -0.391, with **15 consecutive negative evaluable sections**. The last six sections read 09-29 -0.218, 09-30 -0.256, 10-01 -0.279, 10-02 -0.433, 10-05 -0.406, 10-06 -0.445 — **still deteriorating, with no sign of convergence**. "Full-window +0.062" and "15 straight negative sections" are two facts about the same data; reporting only one is selective.

The new section (10-06) covers the forward window from the **2026-10-06 close to the 2026-11-04 close, 21 trading days**. It is not today's IC, but it does span the whole of October just past: within that cross-section, in-sample historical winners markedly underperformed historical losers. **This is the only genuinely new market information in this run**, and it is a single observation overlapping its neighbours by 20 days.

VOL's full-window -0.021 carries no information: it is the average of +0.065 in August and -0.256 in October, with p=0.42 and Newey-West t=-0.29.

SIZE is the only clearly positive full-window combination, and it weakens at the near end too: +0.102 in August, +0.149 in September, -0.141 across the four October sections, with 10 consecutive negative sections. **Positive full-window, negative near end is the same shape as MOM**; the only difference is that SIZE's window mean was not pulled down by today's replacement.

## 4. Sector momentum table and coverage

![Sector momentum breakdown 2026-11-05](/charts/sector-mom-2026-11-05.png)

*Caption: mean sector momentum IC, market data through the 2026-11-04 (Wednesday) close, evaluation window 2026-08-12 → 2026-10-06 (39 sections), 21-day holding period. Covers only the 7 GICS sectors with at least 30 valid constituents, 402 names in total.*

| Sector | Mean IC | ICIR | Previous IC | Delta | Names | Share of positive IC sections | Last 3 sections | Latest section 10-06 | Long-short Q1−Q5 | Sign since |
|------|------:|-----:|--------:|-----:|-----:|-----:|-----:|-----:|-----:|---|
| Consumer Staples | **+0.2132** | +0.972 | +0.2281 | -0.0150 | 36 | 71.8% | -0.191 | -0.265 | -1.89% | Positive, 2026-09-24 |
| Consumer Discretionary | **+0.2059** | +1.145 | +0.2133 | -0.0075 | 48 | 84.6% | -0.198 | -0.133 | -2.98% | Positive, 2026-09-22 |
| Health Care | **+0.1023** | +0.437 | +0.1233 | -0.0210 | 59 | 61.5% | -0.178 | -0.312 | -4.56% | Positive, 2026-09-24 |
| Industrials | +0.0335 | +0.096 | +0.0469 | -0.0134 | 79 | 53.8% | **-0.509** | -0.519 | -0.42% | Positive, 2026-10-07 |
| Utilities | -0.0408 | -0.313 | -0.0490 | +0.0082 | 31 | 41.0% | **+0.161** | +0.257 | +1.77% | Negative, 2026-08-19 |
| Financials | -0.0985 | -0.286 | -0.0779 | -0.0206 | 76 | 38.5% | **-0.549** | -0.499 | +2.26% | Negative, 2026-08-19 |
| Information Technology | -0.0993 | -0.186 | -0.0818 | -0.0175 | 73 | 48.7% | **-0.774** | -0.774 | +7.41% | Negative, 2026-10-23 |

**Coverage: only 7 of the 11 GICS sectors are reported, 402 names, or 80.1% of the 502-name universe.** The gap is structural:

- **Real Estate**: 31 mapped names, but AVB (ends 08-14) and EQR (ends 08-21) have no quotes, so valid constituents stay below the 30-name threshold; the sector's last record in `ic_history` is **2026-09-26** (IC -0.1108) and nothing has printed since.
- Materials (26 names), Energy (21) and Communication Services (23 mapped, 22 valid) have never reached the 30-name threshold.

About 101 names are outside the table. **Energy and Communication Services, two sectors that carry heavy narrative weight, are entirely absent, so the sector table cannot stand in for market-wide sector rotation.**

**New sector-level sign reversals today = 0.** The system raised eight alerts (4 🔴 sign flips, 3 p-value losses, 1 z beyond 2σ); each was checked against the deduplicated `ic_history` to find the true sign-change date:

- Information Technology: flipped **2026-10-23** (negative from -0.0163); today is the 8th run day. -0.0818 → -0.0993 is simply further drift.
- Financials: turned negative **2026-08-19**, direction unchanged.
- Utilities: turned negative **2026-08-19**, direction unchanged.
- Health Care: turned positive **2026-09-24** and remains positive; z=+2.10 against a duplicated-sample historical mean of -0.082 ± 0.088 is a departure from a polluted baseline, not a move today.
- Consumer Discretionary (2026-09-22), Consumer Staples (2026-09-24) and Industrials (2026-10-07) all turned positive earlier; none changed direction.

Six of the seven sectors moved down by 0.008–0.021 today (Utilities being the exception at +0.008), all for the same reason: **the incoming 2026-10-06 section is negative nearly everywhere** (Information Technology -0.774, Industrials -0.519, Financials -0.499, Health Care -0.312, Consumer Staples -0.265, Consumer Discretionary -0.133), with only Utilities positive (+0.257). That is one window event mapped onto seven sectors, **not six independent sector signals**; and the last three sections overlap by 20 days, so they are not three independent observations either.

**The informative part is the near-end structure, not the full-window red/green.** Six of seven sectors have negative last-3-section means, deepest in Information Technology (-0.774), Financials (-0.549) and Industrials (-0.509); only Utilities is positive near the end (+0.161). Three sectors still show full-window ICIRs of 0.44–1.15 (Consumer Discretionary, Consumer Staples, Health Care) — but those readings exist only because the August sections remain in the window, and all three have negative last-3-section means.

Two details that are easy to read backwards: **Financials shows a full-window IC of just -0.099 and a near-end -0.549, yet a long-short Q1−Q5 of +2.26%** — negative IC and positive Q1−Q5 are consistent (Q1 is the low-momentum bucket) and do not mean the low-momentum bucket made money, since only 38.5% of sections are positive. **Information Technology's IC is -0.099 with a long-short of +7.41%**; that number is only the group mean spread (Q5 -3.47% versus Q1 +3.94%), before costs and without cap weighting, and is not a tradeable conclusion.

![Factor IC overview 2026-11-05](/charts/factor-ic-2026-11-05.png)

*Caption: mean IC for the seven factors, market data through the 2026-11-04 (Wednesday) close; price factors over 2026-08-12 → 2026-10-06 (39 sections), the four fundamental factors over the frozen 2026-03-04 → 2026-05-28 snapshot (60 sections). The `***` marks in the chart come from unadjusted t-tests and contradict the overlap-corrected results; do not cite them directly.*

## 5. What this implies for strategy, and what it does not

**What can be said:**

1. **There is no new signal today, only a window move — but the section that moved in does carry information.** MOM's -0.0145 comes entirely from the 10-06 section (-0.445) replacing the 08-11 section (+0.121); the new section spans the 21 trading days from 10-06 to 11-04 and is the only new market information here: **in-sample historical winners markedly underperformed historical losers over that month.**
2. **MOM's near end has now printed 15 consecutive negative sections and keeps deteriorating.** Full window +0.062, last 10 -0.317, last 3 -0.428, latest single section -0.445, with the last six sections widening monotonically from -0.218 to -0.445. The positive mean survives only because August is still inside the window; as those sections roll out, the mean will keep falling.
3. **MOM's positive full-window mean was never significant, and it is weaker today.** Raw t=1.32 (p=0.194, previously 0.098), Newey-West t=0.46. The correct statement is that this window mean has no statistical resolving power — not that momentum "failed today", and not that it "worked before".
4. **SIZE's "strongest in the full window" needs a discount.** Full window +0.103, Newey-West t=1.64 (short of 1.96), 10 consecutive negative sections, -0.141 across the four October sections. The factor is also `log(price)`, **not market cap**; its positive IC says only that in-sample high-priced stocks subsequently outperformed low-priced ones, with no bearing on size, liquidity or style rotation.
5. **VOL's numbers sit near zero; do not build a story on them.** Full window -0.021, p=0.42, Newey-West t=-0.29; 14 consecutive negative sections sound dramatic, but each is close to zero and the ICIR is only -0.13.
6. **The sector split of "consumer/health care strong, tech/financials/industrials weak" did not change qualitatively today**, only drifting down together; six of seven sectors negative near the end looks more like broad in-sample momentum failure than a clear "out of tech, into consumer" narrative.
7. **The four fundamental factors carry no new information today**, stuck on March–May 2026 data; any current judgment resting on EP / FCF Yield / ROE currently lacks data support.

**What cannot be concluded:**

- **A positive MOM ≠ the market must rise.** This is 21-day cross-sectional relative strength, not index direction, and it is a different statistical object from index returns.
- **MOM at -0.445 on the 10-06 section ≠ every laggard is worth buying.** It says only that the low-momentum bucket outperformed in that sample; it does not separate "fell less" from "genuinely strong", and it is not a stock-level or fundamental judgment.
- **MOM falling on five consecutive run days ≠ momentum deteriorating day by day.** Each run day moves exactly one section, the 39 sections overlap heavily (AR(1)=0.96), so those five days are different slices of largely the same data, not five independent observations.
- **MOM's p-value of 0.194 ≠ the momentum factor is broken.** A significance shift in one window reading, with independent information far below 39 observations.
- **A nominally negative VOL ≠ the volatility factor is broken.** A magnitude of 0.021 is below noise, and neither run is significant.
- **A positive SIZE ≠ a small-cap regime.** The factor is a log price-level proxy unrelated to market cap and cannot be extrapolated to market-wide small caps.
- **Negative EP / FCF Yield / ROE ≠ a confirmed value rotation.** They describe the 2026 March–May cross-sections (frozen for nearly six months); the negative IC only says in-sample expensive stocks subsequently did better.
- **Three sectors currently negative ≠ three new reversals (there were 0).** Different definitions; the number of red alerts is not a count of independent risk events.
- **This run contains no factor readings from 10-07 through 11-04.** The report is not a direction call for the next session and contains no specific trade instructions.

## 6. Statistical and data limitations

1. **p-values are unadjusted for overlapping samples and are only a lower bound.** With 21-day forward returns, adjacent sections share 20 trading days; MOM's IC series has a measured AR(1) of **0.963**. Local Newey-West recomputation (lag=20, Bartlett kernel): MOM t=+1.32 → **+0.46**, VOL -0.82 → **-0.29**, SIZE +3.89 → **+1.64**; for the frozen fundamental factors (identical IC series, hence identical to the previous run): EP -3.99 → -1.63, BP +0.35 → +0.14, FCF Yield -4.14 → -1.96, ROE -5.26 → -2.70. **These are recomputed values, not script output**; after correction no price factor clears 1.96, so **"highly significant, not random" cannot be asserted**.
2. **ICIR is mean IC divided by the standard deviation of IC**, a stability measure inside the window. It is **not a strategy Sharpe ratio, not an annualised return**, and it ignores trading costs and turnover.
3. **The anomaly-detection baseline is polluted by duplicate records.** Of 143 deduplicated run days in `ic_history`, the share bit-identical to the previous date is 91/142 for MOM / VOL / SIZE, 139/142 for EP / BP / FCF / ROE, and 92/142 for sectors. `check_factor_anomalies` compares against a historical mean that includes those duplicates (e.g. Financials +0.1625 versus a deduplicated +0.1074; VOL +0.1047), so both mean and standard deviation are dominated by one regime. **The number of red alerts is not a count of independent risk events.**
4. **The script's anomaly step reads the wrong file.** `factor_lab_daily.py` lines 54–58 take `sorted(glob("factor_test_*.json"))[-1]`, which in practice is the `*_per-sector.json`, so factor-level alerts are never evaluated. Factor-level status here comes from a local re-run of `check_factor_anomalies` (MOM's p moved from 0.0185 to 0.194; VOL shows z=-2.30 low, but its true sign start is 10-31, not today). The script was not modified.
5. **The four fundamental factors are not market readings; they are a 2026-03~05 snapshot.** The panel's `generated_at` is 2026-05-29 (file written 2026-08-31) with no cron refresh; restoring validity requires re-running `scripts/fetch_fundamental_panel.py`. They also rest on 60 sections rather than 39, so their evaluation window differs from the price factors and **absolute magnitudes cannot be compared across the two groups**.
6. **The cross-section is not the whole market.** 502 S&P 500 constituents, 495–501 valid per section, 402 in the sector table, with Energy, Communication Services, Materials and Real Estate absent. Any "market-wide" claim exceeds the sample.
7. **The single-day breadth on 11-04 (median +2.64%, 76.2% advancing, 496 names) is background only**; it does not enter any IC calculation (that date has no forward return yet) and supports none of the conclusions above.
