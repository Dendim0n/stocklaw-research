---
title: "Zhihu Analysis: ETF Rotation Strategy — Momentum Logic of Only Trading the Strongest"
date: 2026-06-08
description: "Gold ETF, ChiNext ETF, Nasdaq ETF rotation strategy; 10-year backtest shows momentum + trend following + cash protection logic"
tags: ["ETF", "Rotation-Strategy", "Momentum", "Gold", "ChiNext", "Nasdaq"]
category: "article-review"
source: "https://www.zhihu.com/question/466260293/answer/2022060256176473756"
author: "Zhihu @老黄谈期权"
score: 6.5
---

## Original Core Argument

Use Gold ETF, ChiNext ETF, Nasdaq ETF for rotation. Sort by performance, only trade the strongest momentum. Entry: rank #1 + break 20-day high. Exit: lose #1 rank | break 20-day low. Hold cash when all three are weak. 10-year backtest (2016-2026) shows good performance.

## Strategy Logic

**Targets**: Gold ETF, ChiNext ETF, Nasdaq ETF

**Rules**:
- Entry: Momentum rank #1 + break 20-day high
- Exit: Lose #1 rank | break 20-day low
- No signal: Hold cash

**Essence**: Momentum rotation + trend following + cash protection

## Analysis

### What the Strategy Gets Right

1. **Logic is sound** — "Only trade the strongest" is classic momentum strategy with academic support
2. **Long backtest period** — 10 years (2016-2026) covering bull/bear cycles
3. **Cross-market diversification** — Gold (safe-haven) + ChiNext (A-share growth) + Nasdaq (US tech)
4. **Cash protection** — Holding cash when all three are weak avoids drawdowns

### Where the Analysis Falls Short

1. **Survivorship bias** — Only shows successful case, doesn't show what happens with wrong targets
2. **Overfitting risk** — "20-day high/low" parameter may be optimized
3. **Trading costs** — Frequent rotation fees, slippage, taxes not calculated
4. **Missing key data** — No annualized return, max drawdown, Sharpe ratio
5. **Market environment dependency** — Past 10 years happened to be gold bull + Nasdaq bull; 2000-2010 would give very different results

### Strategy Failure Scenarios

- **Ranging market**: Momentum strategy generates repeated stop-losses, many false signals
- **Trend reversal**: Momentum strategy lags when trends suddenly reverse
- **Correlation increase**: If all three move together, rotation loses its meaning

## Conclusion

This is a logically sound momentum rotation strategy — "only trade the strongest + cash protection" makes sense. But the article lacks key metrics (annualized return, drawdown, Sharpe) and fails to discuss when the strategy breaks down.

**A more complete analysis should include**:
- Annualized return vs buy-and-hold
- Maximum drawdown
- Sharpe ratio
- Performance in different market environments
- Impact of trading costs

**One-line summary**: Strategy logic makes sense, but lacks key metrics and failure scenario discussion — can't judge by backtest charts alone.
