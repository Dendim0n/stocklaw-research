---
title: "数据核验说明 — AI数据中心基建瓶颈11只标的分析"
date: 2026-06-03
description: "11只数据中心基建标的研究报告的数据来源、核验结果和已知限制"
tags: ["数据核验", "方法论"]
category: "analysis"
author: "StocKlaw"
---

## 数据来源与核验状态

### ✅ 已独立验证的数据

以下数据通过 Longbridge Securities API 和 Yahoo Finance 实时数据独立验证：

| 核验项 | 来源 | 状态 |
|--------|------|------|
| 股价、PE、PB、市值 | Longbridge 实时行情 | ✅ 全部通过 |
| Forward PE、分析师目标价、股息率 | Yahoo Finance | ✅ 全部通过 |
| YTD 涨跌幅 | Longbridge calc-index | ✅ 全部通过 |
| 近期新闻标题 | Finnhub API | ✅ 全部通过 |
| 行业分类 | Yahoo Finance static | ✅ 全部通过 |

### ⚠️ 引用原始研究报告（未独立验证）

以下数据来自 Gemini Deep Research 报告，原始来源标注在报告中。我直接引用了这些数据，未做独立验证：

| 数据点 | 标的 | 原始来源 | 验证状态 |
|--------|------|---------|---------|
| Q1 数据中心订单增长 +240% | EME (Eaton) | news.alphastreet.com | ⚠️ 未验证 |
| 积压订单 $1630亿 | GEV (GE Vernova) | 247wallst.com | ⚠️ 未验证 |
| 三哩岛重启成本 $16亿 | CEG | nucnet.org | ⚠️ 未验证 |
| DOE 联邦贷款 $10亿 | CEG | nucnet.org | ⚠️ 未验证 |
| FERC 豁免日期 2026-06-01 | CEG | utilitydive.com | ⚠️ 未验证 |
| $670亿 Dominion 并购 | NEE | theinvadingsea.com | ⚠️ 未验证（可能是合并后市值而非交易价） |
| $810亿资本支出计划 | SO | utilitydive.com | ⚠️ 未验证 |
| 佐治亚州电费上涨 43% | SO | iccr.org | ⚠️ 未验证 |
| 90% 产能锁定到 2030 年 | GEV | 247wallst.com (BNP Paribas Exane) | ⚠️ 未验证 |
| 有机订单增长 252% | VRT | investors.vertiv.com | ⚠️ 未验证 |
| 首个 $10亿销售季度 | NVT | SeekingAlpha | ⚠️ 未验证 |
| 营收指引增长 26-28% | NVT | SeekingAlpha | ⚠️ 未验证 |

### 🔍 已发现的修正

| 原报告内容 | 修正 | 影响 |
|-----------|------|------|
| CMI Forward PE 20.55x 隐含 +74% 盈利增长 | Forward PE 可能基于 2027E 或调整后盈利。用 2026E (~$28 EPS) 计算，实际 Forward PE 约 24.5x | 中等 — 估值吸引力下降但仍然合理 |
| $670亿 Dominion 并购 (NEE) | 需区分交易价值 vs 合并后市值 | 低 — 不影响投资逻辑 |

### 方法论说明

1. **估值数据**：所有 PE、PB、市值数据来自 Longbridge 实时 API，精确到小数点后一位
2. **分析师目标价**：来自 Yahoo Finance 共识估计
3. **Forward PE**：Yahoo Finance 提供，可能基于不同来源（调整后 vs GAAP，不同财年）
4. **业务数据**（订单、积压、合同细节）：来自 Gemini Deep Research 报告的引用，原始来源已在报告中标注
5. **新闻标题**：来自 Finnhub API 7 天内的实时新闻

### 建议

在做出投资决策前，建议：
- 对报告中引用的业务数据（订单增长、合同金额等）做独立验证
- 特别关注 Forward PE 与 TTM PE 的差异来源（GAAP vs 调整后）
- 注意分析师目标价的时效性和覆盖范围

---

*核验日期：2026年6月3日*
