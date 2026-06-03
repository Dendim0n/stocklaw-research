---
title: "Article Review: Buffett's Selling and Valuation Decomposition"
date: 2026-06-03
description: "Verification of @环中星鉴's analysis on Magnificent 7 'future value' concentration"
tags: ["valuation", "PE", "tech-stocks", "Buffett"]
category: "article-review"
source: "https://www.zhihu.com/question/2034453660378382744/answer/2036869408417698909"
author: "Zhihu @环中星鉴"
score: 8.5
valuation: "overvalued"
---

## Core Framework

The author decomposes stock price into two parts:
- **Current Value** = EPS × 10 (fair PE assuming zero growth forever)
- **Future Value** = Market Price - Current Value (premium the market pays for growth)

The higher the "future value" ratio, the more the valuation depends on future growth, and the greater the uncertainty.

## Data Verification

Magnificent 7 future value ratios (article ~5/8 data vs current test):

| Company | Article FV% | Current FV% | Change | Reason |
|---------|------------|-------------|--------|--------|
| TSLA | 95.5% | 94.1% | -1.4% | EPS slightly up, FV% barely moved |
| NVDA | 66.7% | **43.3%** | **-23.4%** | Forward EPS surged from $7.20→$12.63 |
| AMZN | 71.4% | 61.5% | -9.9% | EPS $7.80→$9.86 |
| AAPL | 69.7% | 69.5% | -0.2% | Basically flat |
| MSFT | 50.6% | 56.2% | +5.6% | Price up but EPS barely changed |
| META | 43.0% | 39.5% | -3.5% | EPS $35→$36.16 |
| GOOG | 71.0% | 59.6% | -11.4% | EPS $11.50→$14.50 |

**Key finding:** Within less than a month of the article's publication, NVDA and GOOG's "future value ratio" dropped大幅 because **analysts revised earnings estimates upward.** This恰恰说明 the article's "66.8% average" is a static snapshot, and the dynamic is actually improving.

## Scenario Analysis Matrix

Article baseline: S&P 500 = 7150 (4/30), consensus EPS $325

**Current reality: S&P 500 = 7610, up +6.4% from article's baseline**

| Scenario | Article Says | Verification |
|----------|-------------|--------------|
| 22x PE + consensus EPS = 7150 → no upside | 22×325=7150 ✓ math correct | **But market already at 7610, article underestimated momentum** |
| EPS -10% + 22x = 6446 → -10% | 22×293=6446 ✓ | Math correct, but from 7610 it's a bigger drop |
| EPS -10% + 20x = 5850 → -18.2% | 20×293=5860 ≈ 5850 ✓ | Basically correct |
| Recession + 14x = 4102 → -42.6% | 14×293=4102 ✓ | Math perfectly correct |

**All math verified correct. But there's an important偏差:** The article said "no upside at 22x PE," yet the market has already risen 6.4% to 7610. The reason: Forward EPS estimates were revised from $325 to ~$369 (yfinance data), and improving earnings expectations supported the rally.

## Article Analysis

### Strengths

1. **The "future value" decomposition framework has originality.** Splitting valuation into "current value" (EPS×10) and "future value" (market price minus current value) is intuitive and pedagogically powerful. More convincing than simply saying "PE is too high."

2. **The scenario analysis matrix is a real risk management tool.** The EPS×PE combination matrix lets readers judge risk-reward for themselves. More professional than口号 "it's going to crash."

3. **Three headwinds (oil, healthcare costs, AI Capex) all have data backing**, not empty narrative.

4. **The ending attitude is pragmatic:** "I won't say extreme things like liquidate, but reducing positions is absolutely necessary" — has a sense of proportion.

### Weaknesses

1. **Static analysis limitations.** The article uses May 8 EPS snapshots, but less than a month later NVDA's Forward EPS jumped from $7.20 to $12.63 (+75%), GOOG from $11.50 to $14.50 (+26%). The "future value ratio" is高度 dependent on analyst estimates, which are动态. The article treats it as a stable danger signal, which isn't rigorous enough.

2. **"10x PE = zero-growth fair value" is oversimplified.** Different industries have very different合理的 zero-growth PEs — utilities might be 8-12x, but consumer brands might be 15-18x. Using a uniform 10x makes "future value" incomparable across companies. META's FV% is only 43% while TSLA is 95%, mainly reflecting business model differences, not purely risk differences.

3. **Underestimates momentum and liquidity.** From the article's publication to now, S&P has risen 6.4% to 7610. The "no upside at 22x" judgment was proven wrong by the market. Reasons: (a) earnings estimates being revised up; (b) US-Iran talks signal reducing risk premium; (c) capital flow driven. The article's framework is "fundamentals determine everything," but short-term the market is a voting machine, not a weighing machine.

## Score: 8.5/10

This is a higher-quality retail analysis piece. The author's analytical framework and data skills are明显 above the previous article. **The core judgment — valuations lack margin for error, reducing positions shows discipline — is logically sound.** But the "future value ratio" metric needs dynamic tracking, not treated as a static conclusion. If NVDA continues beating expectations next quarter, its FV% will drop further and the article's "danger signal" will be falsified.

**Complementary with the previous article (US-Iran war + bond yields):** That one covers macro risk (rates + geopolitics), this one covers micro valuation (earnings + PE). Together: **market at highs, little margin for error, high macro uncertainty, but momentum still strong — don't rush to short, reducing positions is the right call.**
