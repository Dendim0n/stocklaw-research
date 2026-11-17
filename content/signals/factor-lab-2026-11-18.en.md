---
title: "Factor Lab Daily Brief 2026-11-18"
date: 2026-11-18
description: "The price cache now carries the 11-16 and 11-17 sessions and ends 2026-11-17 (686 rows x 502 tickers) - the first genuine new market data since the 11-04 freeze. The evaluation window rolled forward by 2 cross-sections to 2026-08-25 through 2026-10-19 (39 observations for price factors); the 21-day forward return of the latest evaluable cross-section closed on 11-17. Versus the prior same-caliber baseline (the 11-17 08:16 rerun after the fundamental panel was re-sourced), MOM moved -0.0256 to -0.0607, VOL -0.0680 to -0.0931 and SIZE -0.0194 to -0.0441, all driven by positive cross-sections rolling out and negative ones rolling in rather than by data revision; EP, BP and FCF Yield rose because the two newly added cross-sections had positive ICs. No factor-level sign flips. EP z=+4.19, FCF z=+3.83 and ROE z=+2.62 are a caliber break from the 11-17 panel re-sourcing: 58 of the 60 unique baseline dates still use the old caliber, so they must not be read as factor reversals."
tags: [factor-lab, sp500, quantitative]
---

# Factor Lab Daily Brief 2026-11-18

## 1. Data cutoff, sample and evaluation caliber

| Item | Value |
|------|-------|
| Run date | 2026-11-18 (Wed) 06:40-06:49 CST = 2026-11-17 (Tue) 17:40-18:49 EST, US session already closed |
| **Price cache cutoff** | **2026-11-17 (Tuesday close)**, 686 trading days x 502 tickers |
| Sessions added this run | **2**: 11-16 and 11-17 (the cache previously ended 11-13 with 684 rows) |
| Price source | yfinance still unavailable, longbridge fallback; calibration lines printed, most tickers x1.000000, a few off (ADBE x1.011121, WEC x1.008168, HUM x1.002104) |
| Evaluation window (price factors) | **2026-08-25 to 2026-10-19**, **39 valid cross-sections** each for MOM / VOL / SIZE |
| Evaluation window (fundamental factors) | **2026-08-21 to 2026-10-19**, **41 valid cross-sections** each for EP / BP / FCF Yield / ROE |
| Latest evaluable cross-section | **2026-10-19** (= `prices.index[-22]`); its 21-day forward return completed at the 2026-11-17 close |
| Holding period | 21 trading days of forward return (script default, configuration unchanged) |
| Sample | 502 tickers for price factors; 479 valid for ROE (502 for the other fundamental factors) |
| Size definition | `log(price x total shares)`; share cache rebuilt from longbridge `static` on 2026-11-17 (502 tickers) |
| Fundamental panel | Generated 2026-11-17 08:13, source=longbridge/lag0, 502 tickers, financial data through 2026-11-13; STEP 4 reports fresh (0 days) |
| IC definition | Cross-sectional Spearman rank correlation; `ic_mean` is the **average** over the 39/41 historical cross-sections listed above, not a single-day IC, not a forward return, not a probability of decline |

**Cache cutoff is not the same as the evaluable date.** Adding the 11-16 and 11-17 closes only settles the forward return of the cross-section dated 21 trading days earlier (10-19) and brings 10-16 into the sample. Market action on 11-17 itself cannot enter an IC before mid-December. All of the new information in this run sits in the 10-16 and 10-19 cross-sections.

## 2. What is new versus what carries over

**Conclusion: this is a genuine update, and the caliber has changed.** Against the prior run on the same footing (2026-11-17 08:16, the rerun after the fundamental panel was re-sourced), all seven factors moved; none is bit-identical to the prior reading. Every change, however, comes from window composition, not data revision.

Two caveats come first:

1. **The published 11-17 brief used the old caliber.** That note was built on a price cache ending 2026-11-04 plus the yfinance fundamental panel, and reported MOM at +0.0625. Later that morning the panel was rebuilt from longbridge and the share cache was re-sourced; the 08:16 rerun produced the new baseline of MOM -0.0256. So today is not "MOM flipped from +0.0625 to -0.0607" but a further decline from -0.0256. The former is a cross-caliber comparison and must not be recorded as a reversal today.
2. **The data-revision check passes.** Truncating the current cache at 2026-11-13 and recomputing reproduces the 11-17 08:16 readings to the last digit (MOM -0.025624 / VOL -0.067996 / SIZE -0.019450 / EP +0.020113 / BP -0.081082 / FCF +0.005208 / ROE +0.065261), which means the incremental download appended rows without rewriting history.

Window attribution (price-factor windows rolled forward two cross-sections, two out and two in):

| Factor | Out 08-21 | Out 08-24 | In 10-16 | In 10-19 | Current IC |
|---|---:|---:|---:|---:|---:|
| MOM | +0.3639 | +0.3901 | -0.3244 | -0.2894 | -0.0607 |
| VOL | +0.1404 | +0.2024 | -0.2875 | -0.3488 | -0.0931 |
| SIZE | +0.2125 | +0.2383 | -0.2526 | -0.2582 | -0.0441 |

All three price factors show positive readings rolling out and negative ones rolling in. **The mean fell because the incoming cross-sections are themselves worse, not merely because positive numbers left.**

The four fundamental factors had no cross-section roll out this run (their window still starts 08-21); only 10-16 and 10-19 were added, both with positive ICs: EP +0.118/+0.128, BP +0.077/+0.114, FCF Yield +0.181/+0.211, ROE -0.020/-0.046. That accounts for the rise in EP/BP/FCF Yield and the small decline in ROE.

## 3. Full seven-factor table

| Factor | IC | ICIR | p-value (overlap uncorrected) | Valid cross-sections | Prior IC (11-17, same caliber) | Change | NW t (locally recomputed) | Last 3 cross-sections | Last 10 cross-sections | Long-short Q1-Q5 |
|------|------:|------:|------:|------:|------:|------:|------:|------:|------:|------:|
| MOM | **-0.0607** | -0.1866 | 0.2572 (ns) | 39 | -0.0256 | -0.0351 | -0.36 | -0.3107 | -0.3839 | +3.5514% |
| EP | +0.0251 | +0.1491 | 0.3512 (ns) | 41 | +0.0201 | +0.0050 | +0.30 | +0.1278 | +0.1508 | -2.4546% |
| BP | -0.0725 | -0.4729 | 0.0047 (**) | 41 | -0.0811 | +0.0086 | -0.97 | +0.0985 | +0.0884 | +0.3721% |
| FCF Yield | +0.0145 | +0.0621 | 0.6965 (ns) | 41 | +0.0052 | +0.0093 | +0.12 | +0.1923 | +0.2073 | -2.1130% |
| ROE | **+0.0605** | +0.9273 | <1e-6 (***) | 41 | +0.0653 | -0.0048 | +2.11 | -0.0311 | -0.0163 | -0.3899% |
| VOL | **-0.0931** | -0.5196 | 0.0028 (**) | 39 | -0.0680 | -0.0251 | -1.03 | -0.3162 | -0.2692 | +3.7982% |
| SIZE | -0.0441 | -0.2102 | 0.2029 (ns) | 39 | -0.0194 | -0.0247 | -0.40 | -0.2510 | -0.2810 | +3.2212% |

- p-values come from a plain one-sample t-test and are **not corrected for overlapping samples**. A 21-day forward return makes adjacent cross-sections share 20 days, so the IC series is highly autocorrelated and the plain t-statistic understates the standard error. The p-values in the table are a **lower bound** on the true p and must not be quoted as proof of "highly significant, not random noise".
- `NW t` is locally recomputed with Newey-West (lag=20, Bartlett kernel) and **is not a script output**. After correction only ROE (+2.11) clears 1.96; BP (-0.97), VOL (-1.03), MOM (-0.36), SIZE (-0.40), EP (+0.30) and FCF Yield (+0.12) are all insignificant. The 39-41 cross-sections are themselves heavily overlapping, so the number of independent observations is far smaller.
- ICIR is the mean IC divided by its standard deviation - a stability measure for the rank correlation, **not a strategy Sharpe ratio and not an annualised return**.
- The long-short column is **Q1 minus Q5 (low-factor group minus high-factor group)**; this was checked against the `quantile_returns` code. Its opposite sign to IC is self-consistent (positive IC implies a negative value here). It is **gross of costs and not an implementable strategy return**.
- **Full-window means diverge from the recent end.** MOM: full window -0.0607, last 10 -0.3839, last 3 -0.3107. VOL: -0.0931 / -0.2692. SIZE: -0.0441 / -0.2810. EP: +0.0251 / +0.1508. FCF Yield: +0.0145 / +0.2073. The full window is dragged toward zero by the August momentum regime; the recent end (October) is the current state.

![Factor IC Overview](/charts/factor-ic-2026-11-18.png)

> Figure 1: 21-day holding-period IC means for the seven factors. The filename carries the run date 2026-11-18; the underlying market data end **2026-11-17**, and the evaluation window is **2026-08-25 to 2026-10-19** (fundamental factors from 08-21). Asterisks reflect plain t-tests that do not correct for overlapping samples.

## 4. Sector momentum and coverage

| Sector | Valid stocks | IC | ICIR | p-value | Long-short Q1-Q5 | Prior IC (11-17, same caliber) |
|------|------:|------:|------:|------:|------:|------:|
| Consumer Discretionary | 48 | **+0.0948** | +0.4345 | 0.0109 | -0.9094% | +0.1236 |
| Consumer Staples | 36 | +0.0470 | +0.1637 | 0.3192 | +1.4819% | +0.0883 |
| Utilities | 31 | +0.0403 | +0.2156 | 0.1918 | -1.6211% | +0.0227 |
| Health Care | 59 | -0.0008 | -0.0041 | 0.9798 | -0.8427% | +0.0128 |
| Industrials | 79 | -0.0922 | -0.2391 | 0.1487 | +3.6687% | -0.0548 |
| Financials | 76 | **-0.2165** | -0.7298 | <1e-4 | +4.2043% | -0.1849 |
| Information Technology | 73 | **-0.2389** | -0.4299 | 0.0117 | **+15.1891%** | -0.1867 |

All seven sector ICs declined versus the prior run, consistent with the factor-level MOM direction. This too comes from the same two positive-out, negative-in cross-sections rather than from anything sector-specific.

**What this supports is a ranking, not a signal.** Within the sample, low-momentum technology stocks out-earned high-momentum technology stocks by **15.19 percentage points** on average over the next 21 days (Q1-Q5), but the IT IC standard deviation is about 0.556 (the highest in the table, = 0.2389/0.4299), so dispersion across cross-sections is extreme and the figure would be largely consumed by 21-day rebalancing frictions in live trading. Financials (-0.2165, ICIR -0.73) and IT are the two deepest negative blocks, and they are precisely where momentum was most concentrated over the past two years.

**Coverage: 7 of 11 GICS sectors, 402 stocks (the sector map holds 503).** Missing are Real Estate (31 mapped, the panel has too few names to clear the 30-stock-per-cross-section floor), Materials (26), Communication Services (23) and Energy (21). Nearly half of GICS is absent, and Energy and Communication Services - both tightly linked to the AI narrative - are exactly the ones missing.

![Sector Momentum](/charts/sector-mom-2026-11-18.png)

> Figure 2: momentum decomposed by GICS sector. The filename date is the run date 2026-11-18; market data end **2026-11-17**. Energy, Materials, Communication Services and Real Estate are not included.

## 5. Strategy implications, and what cannot be concluded

**Three things this run does support:**

1. **The data outage is over, but what entered the IC is still the mid-October cross-section.** This is the first genuine addition of new market data since the 11-04 freeze (11-04 to 11-13 to 11-17), and it rolled in two cross-sections at once. Any allocation decision taken from these readings still rests on the cross-sectional structure formed before 10-19; only the forward returns have been updated to 11-17.
2. **The decline in the price factors has an explicit, reproducible source.** The changes of -0.0351 for MOM, -0.0251 for VOL and -0.0247 for SIZE come entirely from dropping late-August cross-sections with positive ICs and adding mid-October cross-sections with negative ICs, and the truncated-cache recomputation matches the prior run to the last digit. This is not "the momentum factor deteriorated today"; the window simply rotated into a stretch of momentum reversal (returns realised from 10-20 through 11-17).
3. **The rise in the fundamental factors also comes only from two new cross-sections, and it is small.** EP +0.0050, BP +0.0086 and FCF +0.0093 are all below 0.06 of the respective IC standard deviations (about 0.168, 0.153 and 0.234). That is not enough to claim value is back, and these four factors' values are still determined by a financial panel that ends 11-13; this run only obtained more recent forward returns.

**What cannot be concluded:**

- Do **not** read a negative MOM as "the market will fall". MOM measures the return spread of high- versus low-momentum stocks inside the sample; it is not an index direction and not a probability of decline. A last-10 reading of -0.3839 only says historical winners underperformed losers over the next 21 days; it does not make every laggard a buy.
- Do **not** extrapolate a negative SIZE into "small caps will outperform". SIZE only ranks relative size within 502 large-cap constituents; the small-cap universe is not in the sample, and this run's change comes from just two new cross-sections.
- Do **not** describe a positive EP or FCF Yield as "value rotation confirmed". Both full-window means remain thin (+0.0251 and +0.0145), their NW t-statistics are +0.30 and +0.12, and all four fundamental factors' positive readings are concentrated in the last ten heavily overlapping cross-sections.
- Do **not** treat EP z=+4.19, FCF z=+3.83 or ROE z=+2.62 as factor signals. The fundamental panel was re-sourced on 11-17, and **58 of the 60 unique baseline dates still use the old caliber**. This is an updated data definition with an incomparable history, not a factor reversal.
- Do **not** treat "4 of 7 sectors negative" as "4 new reversals". Against the 11-17 same-caliber baseline only Health Care changes sign nominally (+0.0128 to -0.0008, a magnitude close to zero); the other six keep their sign. Factor-level new reversals: zero.
- Do **not** treat the long-short column as strategy return. It is the average of Q1-Q5 across 39 cross-sections, gross of costs, turnover and market impact.

## 6. Statistical and data limitations

1. **Market data reach 11-17, but evaluable cross-sections only reach 10-19.** The 21-day forward mechanism makes `prices.index[-22]` the last fully evaluable cross-section. This is structural, not missing data; adding new prices only settles older cross-sections.
2. **The last published readings are on a different caliber and cannot be chained directly.** The 11-17 brief (MOM +0.0625 and so on) came from the yfinance panel plus the 11-04 frozen cache. After the 08:13 re-sourcing of the fundamental panel and the share cache, the baseline became MOM -0.0256. Any comparison across 11-17 must state which caliber it uses.
3. **SIZE has a separate break in its history.** The share cache was rebuilt from longbridge `static` on 2026-11-17 (502 tickers). Recomputing SIZE at an 11-04 truncation with current share counts gives +0.0487 versus the +0.0601 recorded then - updating share counts changes the entire SIZE history, so long series must be read in date segments.
4. **Quantified baseline contamination.** `ic_history.json` holds 271-272 raw records per factor across **152 unique dates**. The share of adjacent dates that are bit-identical is 97/151 (64%) for price factors and 144/151 (95%) for fundamental factors. The last 60 unique dates span 2026-08-29 to 2026-11-18. The z-score mean is dominated by a single regime and its standard deviation is overstated, so **the number of red flags is not the number of independent risk events**.
5. **z-scores are not comparable across days.** VOL's z is -2.78 this run. Its ic_mean moved from -0.0680 to -0.0931. The 60 unique baseline dates span 2026-08-29 to 2026-11-18, and **58 of them predate the 11-17 switch of price source and panel** (baseline mean +0.0456, dominated by the positive late-August-to-September stretch). A z-score describes how far the current reading is from an old regime, not what happened today.
6. **Panel freshness and caliber break must be judged separately.** STEP 4 reports only "fresh (0 days)". The script adds its own in-panel caveat for the first seven days but does not decide for you which alarms come from the break. The evidence here: the panel rebuild date (11-17) is the same date EP and FCF changed sign (EP -0.0068 to +0.0201, FCF -0.0028 to +0.0052).
7. **Sign status (`ic_history` deduplicated by date, 152 unique dates).** MOM last changed sign on 2026-11-17 (+0.0625 to -0.0256, the caliber-break date); SIZE the same day (+0.0601 to -0.0194); VOL on 2026-10-31 (+0.0057 to -0.0033); BP and ROE on the 2026-11-05 panel rebuild date; EP and FCF Yield never turned positive before 11-17. **There is no factor-level sign change in this run.**
8. **Neither overlapping samples nor multiple testing are handled.** Beyond IC autocorrelation, seven factors and seven sectors are tested on the same window without multiple-comparison correction. This report therefore makes no claim that any factor is significantly effective.

---

*Sources: local `scripts/factor_data/` (price cache, TTM fundamental panel, share cache, GICS sector map). All readings are reproducible with `python3 scripts/factor_lab.py --factor all`. This report is not investment advice and contains no individual buy or sell instructions.*
