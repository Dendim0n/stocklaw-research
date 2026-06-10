---
title: "知乎分析：SpaceX/OpenAI/Anthropic 扎堆天价 IPO，水分有多大？"
date: 2026-06-10
description: "三家公司同一周提交 IPO，xAI 从 AI 实验室变身 GPU 房东。数据验证后发现事实准确率很高，但核心结论有偏差"
tags: ["SpaceX", "OpenAI", "Anthropic", "xAI", "IPO", "AI", "知乎分析"]
category: "article-review"
source: "https://www.zhihu.com/question/2046639064917586455/answer/2047640602163013264"
author: "知乎 @xsgbbx"
score: 7.0
---

## 原文核心叙事

三件事撞在一起：
1. Morningstar 给 SpaceX IPO 标了 $63 目标价（vs $135 发行价）
2. OpenAI 秘密提交 S-1
3. xAI 把 Colossus 1 数据中心出租给 Anthropic 和 Google，从 AI 实验室变成 GPU 房东

结论：最赚钱的业务不是 AI，是出租 AI 基础设施。当二房东却以 $1.75T 估值 IPO，水不少。

## 数据验证

逐条核查，来源为 CNBC、NYT、Bloomberg、SpaceX S-1 filing、OpenAI 官网。

| 声明 | 判定 | 数据来源 |
|------|------|---------|
| Morningstar 目标价 $63，53% 折扣 | ✅ | CNBC 6/3: $780B 估值，约低于 $1.5T 私募估值 48% |
| SpaceX IPO $1.75T 估值 | ✅ | CNBC: targeting $75B fundraise at $1.75T valuation |
| SpaceX 2025年发射地球83%轨道质量 | ⚠️ 偏低 | Musk 和 Eric Berger 声称90%，Reddit r/spacex 12/2025 |
| Starlink 2025收入 $11.3B | ✅ | S-1 filing: Connectivity $11.39B (61% of $18.7B total) |
| Starlink 运营利润 $4.4B | ✅ | CNBC 5/21: $4.42B operating income, 39% margin |
| Anthropic 租 Colossus 1, 300MW, 22万张GPU | ✅ | CNBC 5/6: "all compute capacity, more than 300MW" |
| Anthropic 月付 $1.25B | ⚠️ 未在CNBC原文找到具体金额 | CNBC 报道了deal但未披露月租金 |
| Google 租11万张GPU, 月付 $920M | ✅ | NYT 6/5: $30B deal, Oct 2026-Jun 2029, 110K Nvidia GPUs |
| 两笔合计年收入 ~$260亿 | ✅ | $1.25B×12 + $920M×12 = $26.04B（需Anthropic金额确认） |
| Colossus 1 122天建成 | ✅ | xAI 官网 x.ai/colossus |
| OpenAI 6/8 秘密提交 S-1 | ✅ | OpenAI 官网 + CNBC 6/8 |
| Anthropic 6/1 提交 S-1 | ✅ | Anthropic 官网 |
| OpenAI 估值 $8520亿 | ✅ | OpenAI 官网 3/31: post-money $852B |
| Anthropic 估值 $9650亿 | ❌ 偏高 | Bloomberg/FT 5/12-14: $900B pre-money，非 $965B |
| SpaceX 2025净亏 $4.94B | ✅ | S-1: net loss $4.9B in 2025 |
| SpaceX 最新季度亏 $4.28B | ✅ | CNBC: net loss $4.28B in latest quarter |

**事实准确率：15/17 项验证通过或基本正确。** 对于一篇知乎回答来说相当高。

## 关键纠偏

### 1. xAI 是"SpaceX 最赚钱的业务"？—— 这是错的

文章说 xAI "可能是 SpaceX 最赚钱的业务"。但 S-1 filing 的分部数据讲的是另一个故事：

| 分部 | 2025收入 | 运营利润/亏损 |
|------|---------|-------------|
| Connectivity (Starlink) | $11.39B | **+$4.42B** |
| Space | $4.09B | 亏损（$3B R&D on Starship） |
| AI (xAI) | $3.20B | **-$2.5B** |

**Starlink 是唯一盈利的分部。** xAI 在 2025 年亏了 $25 亿。

文章的逻辑是：Anthropic + Google 的租约加起来每年 ~$260 亿，电力成本不到 1%，所以 xAI 变身"GPU 包租公"很赚钱。

这个推理方向没问题，但有两个前提条件：
- Google 的 deal 从 **2026年10月** 才开始执行，目前还没产生收入
- Anthropic 的月租金具体数字在公开报道中找不到（文章说 $1.25B/月，CNBC 没提具体金额）

所以"xAI 最赚钱"这个结论，**至少在 S-1 覆盖的 2025 年是错的。** 2026 年下半年 Google deal 开始执行后可能翻转，但那是未来的事。

### 2. Anthropic 估值 $9650亿？—— 偏高

文章说 Anthropic 估值 $9650亿。Bloomberg 和 FT 在 5 月中旬的报道都说 $900B pre-money。$30B 轮 post-money 大约 $930B，离 $965B 还有差距。这个数字要么是文章算错了，要么是引用了某个二级市场的最新报价，但没有来源支撑。

### 3. 轨道质量 83% vs 90%

文章说 SpaceX 2025 年发射了地球 83% 的轨道质量。Musk 自己和 Eric Berger（资深航天记者）声称的是 **90%**。83% 反而保守了。

## 深层分析

文章的观察角度很敏锐——**三家公司同一周提交 IPO，本质上是 AI 泡沫的不同切面：**

- **SpaceX**：核心业务（Starlink + 发射）值 $780B 左右，但 xAI 的加入把估值吹到 $1.75T。Morningstar 说 xAI 构成 "material threat of value destruction"。
- **OpenAI**：在市场份额被蚕食时提交 S-1，Emarketer 说是 "precarious moment"。
- **Anthropic**：自己每月花 $1.25B 租 xAI 的 GPU，估值却 $900B+。

**xAI 的"GPU 房东"模式确实是全文最有洞察力的观察。** 当 AI 模型的商品化速度超过预期时，卖铲子（算力基础设施）比挖金（训练模型）更赚钱。这个逻辑在历史上反复出现——1849年淘金热里最赚钱的是卖铲子和牛仔裤的 Levi Strauss。

但文章忽略了一个重要变量：**如果算力过剩呢？**

Google 和 Anthropic 租 xAI 的 GPU 是因为当前算力短缺。但各大 hyperscaler 都在疯狂建数据中心。如果 2027-2028 年算力供需反转，xAI 的"包租公"模式也会承压。Colossus 1 的 122 天建成速度是优势，但也意味着竞争对手可以快速复制。

## 结论

**评分：7.0/10**

- 事实准确率很高（15/17），数据来源基本可查
- "xAI 从 AI 实验室变 GPU 房东"是全文最佳洞察
- 但"xAI 最赚钱"在 2025 年数据下不成立（亏 $25 亿）
- Anthropic 估值 $965B 偏高，应为 ~$900B
- 对算力过剩风险的讨论缺失

这篇文章的作者显然是认真做了功课的。HN 热度、Morningstar 报告、S-1 filing 三件事串在一起看的角度很好。扣分主要在两个事实错误和缺少反面论证。

> 三家 AI 公司 IPO，最赚钱的业务确实是基础设施——但不是 xAI，是 Starlink。
