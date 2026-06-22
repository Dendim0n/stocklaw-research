---
title: "【每周一】NVIDIA 循环融资风险监控 2026-06-22"
date: 2026-06-22
description: "本周核心风险: OpenAI $122B融资落地, NVIDIA投资Nebius $2B, CoreWeave激进扩张, TPUv7/Ironwood GA, 循环融资结构持续扩大"
tags: ["NVIDIA", "循环融资", "风险监控", "AI", "OpenAI"]
category: "signals"
---

# 【每周一】NVIDIA 循环融资风险监控 | 2026-06-22

## 本周核心变化

本周无突发性重大风险事件，但结构性风险持续积累。**OpenAI 3月宣布的$122B融资已正式close**，估值$852B，NVIDIA作为战略投资者参投。与此同时，NVIDIA对CoreWeave和Nebius各$2B的投资进一步加深了其在neocloud生态中的利益绑定。AI capex 2026年预计达$650-700B，循环融资链条进一步拉长。

---

## 一、NVIDIA 关联方交易

### 本周动态

| 事件 | 详情 |
|------|------|
| NVIDIA年度报告 (2026 AR) | 5月12日发布，声明"定期审查所有关联方交易，未发现利益冲突交易" |
| NVIDIA投资Nebius $2B | 3月11日宣布，Nebius股价当日涨16%，目标2030年部署5GW+ |
| NVIDIA投资CoreWeave $2B | 已完成，CoreWeave 6月初率先部署Vera Rubin NVL72系统 |

### 风险评估

**⚠️ 中等偏高** — NVIDIA年报声称无关联方交易问题，但其投资Nebius和CoreWeave构成典型的**供应商-客户双重关系**。NVIDIA既是GPU供应商，又是股权投资者，同时这些公司是其最大客户。这种"投资-采购-回款"的闭环结构值得持续关注。

---

## 二、OpenAI 财务状况

### 本周动态

| 指标 | 数据 |
|------|------|
| 最新融资 | $122B，估值$852B，3月31日close |
| 收入增速 | Q1 2026营收$5.7B（年化$22.8B），月收入已达$2B |
| 现金消耗 | Q1烧掉$3.7B，2025年净亏损$39B |
| 2026年预期亏损 | $14B（内部预测） |
| 周活跃用户 | 9亿+，付费订阅5000万+ |
| API处理量 | 每分钟150亿token |
| 信贷额度 | 扩大至$4.7B循环信贷（未动用） |

### 风险评估

**🔴 高风险** — OpenAI是NVIDIA最大客户之一，也是CoreWeave两大客户之一。其$122B融资中NVIDIA直接参投，形成"NVIDIA投资OpenAI→OpenAI购买GPU→NVIDIA获得收入"的闭环。虽然收入增长迅猛（月$2B），但亏损同样惊人（Q1烧$3.7B）。**如果AI商业化不及预期，这条链路上的损失将层层传导。**

---

## 三、GPU云厂商健康度

### CoreWeave

| 指标 | 数据 |
|------|------|
| 2026E收入 | $12.6B |
| 与Microsoft合约 | $60B+（含Nebius等） |
| 与Meta合约 | $35.2B（最近追加$21B） |
| 活跃电力目标 | 1.7GW（2026年底） |
| 融资模式 | GPU抵押债务 + NVIDIA股权 + Hyperscaler合同 |
| 最新进展 | 6月初率先部署NVIDIA Vera Rubin NVL72 |

### Nebius

| 指标 | 数据 |
|------|------|
| 2026E收入 | $3.4B |
| NVIDIA投资 | $2B（3月宣布） |
| 与Meta合约 | $27B |
| 电力目标 | 800MW-1GW |
| 活跃电力 | 目标5GW+（2030年） |

### Lambda Labs

| 指标 | 数据 |
|------|------|
| TTM收入 | $520M+（截至2025年9月） |
| 同比增速 | Q3 2025 YoY +80% |
| IPO计划 | 跟随CoreWeave IPO进程，预计2026年上市 |

### 风险评估

**🔴 高风险** — neoclouds的商业模式本质是**用NVIDIA的GPU和信用，借Hyperscaler的钱，建Hyperscaler需要但不想自己建的算力**。CoreWeave和Nebius合计合约额超$120B，但当前收入仅$16B量级，杠杆倍数极高。S&P Global明确指出"循环融资模型在短期内稳定了生态，但长期风险未被充分定价"。

---

## 四、循环融资风险信号

### 关键数据

| 维度 | 数据 |
|------|------|
| 2026E全球AI capex | $650-700B |
| NVIDIA vendor financing | $110B直接投资 + $15B+ GPU抵押贷款 |
| Lucent对比（2000年泡沫） | vendor financing占收入24%，当前AI领域类似比例 |
| CoreWeave+Nebius合约 | $120B+ vs 当前收入$16B（~8x杠杆） |
| OpenAI融资规模 | $122B（历史最大私募融资） |

### 本周新增分析

- **Bloomberg 1月深度报告**：明确将当前AI投资描述为"circular deals"，警告"如果AI未达预期，交叉投资网络将引发级联损失"
- **SSRN学术论文（4月）**：《The AI Circular Economy》将当前AI capex与2000年电信泡沫对比，指出规模是当年的3-5倍
- **IO Fund 6月11日分析**：CoreWeave和Nebius的增长"远未盈利"，在宏观环境恶化背景下依赖激进融资扩张

### 风险评估

**🔴 高风险** — 循环融资结构的核心问题是**风险传染性**。NVIDIA投资neoclouds→neoclouds用这些钱买NVIDIA GPU→NVIDIA确认收入→股价上涨→NVIDIA有更多钱投资neoclouds。一旦终端需求（AI应用收入）无法覆盖成本，整条链将面临反向螺旋。当前尚处正向循环阶段，但杠杆倍数和规模已远超历史可比案例。

---

## 五、竞争对手自研芯片进展

### Google TPU v7 (Ironwood)

| 指标 | 数据 |
|------|------|
| 状态 | 2025年11月GA，Cloud文档持续更新 |
| FP8性能 | 4.61 PFLOPS |
| 规模 | 单Pod 9,216 chips |
| HBM | 192GB HBM3e，带宽7.4 TB/s |
| 竞争定位 | Reddit社区认为性能超过Microsoft Maia 200 |

### Amazon Trainium 3

| 指标 | 数据 |
|------|------|
| 状态 | 2025年12月GA，2026年已出货 |
| 性能提升 | vs Trainium2：4.4x计算性能，4x能效 |
| 价格优势 | 比Trainium2高30-40%性价比 |
| 订阅情况 | 已接近全部售罄 |
| LNC=8支持 | 预计2026年中 |

### Microsoft Maia 200

| 指标 | 数据 |
|------|------|
| 发布日期 | 2026年1月26日 |
| 定位 | 推理加速器，"大幅改善AI token经济学" |
| Microsoft声称 | "超越Google TPU和Amazon Trainium"（有争议） |
| Reddit评价 | "比Trainium3好，但不如Google Ironwood" |

### 风险评估

**🟡 中等风险** — 自研芯片进展迅速，但短期内难以撼动NVIDIA在训练市场的统治地位。三大云厂商的自研芯片主要用于**推理优化**和**降低对NVIDIA的依赖**，而非完全替代。Google Ironwood的4.61 PFLOPS FP8性能值得关注，但训练生态（CUDA）的锁定效应仍在。长期看，自研芯片将压缩NVIDIA在推理市场的溢价空间。

---

## 整体风险评估矩阵

| 维度 | 风险等级 | 本周变化 | 关注度 |
|------|---------|---------|--------|
| 关联方交易 | ⚠️ 中高 | → 持平 | 高 |
| OpenAI财务 | 🔴 高 | ↑ 融资落地加深绑定 | 极高 |
| Neocloud健康度 | 🔴 高 | ↑ CoreWeave激进扩张 | 极高 |
| 循环融资结构 | 🔴 高 | ↑ 杠杆持续扩大 | 极高 |
| 自研芯片竞争 | 🟡 中等 | → 持平 | 中 |

**综合风险等级：🔴 高（较上周↑）**

---

## 核心结论

1. **OpenAI $122B融资close是本周最重要事件** — 这不是风险缓解，而是风险深化。NVIDIA作为战略投资者参投，进一步绑定了"投资→采购→收入确认"的闭环。OpenAI月烧$3.7B的速度意味着它必须持续融资，而NVIDIA在其中扮演了双重角色。

2. **Neoclouds杠杆倍数令人担忧** — CoreWeave+Nebius合计合约$120B+，但当前收入仅$16B量级。这不是增长，这是杠杆。一旦Hyperscaler削减或推迟合约执行，neoclouds将面临流动性危机。

3. **循环融资链条在拉长，不在缩短** — 从NVIDIA到CoreWeave/Nebius到Hyperscaler到OpenAI/Anthropic，每一层都在加杠杆。S&P Global的判断很准确：短期稳定，长期未定价。

4. **自研芯片是长期解药，短期无效** — Google Ironwood和Amazon Trainium3进展不错，但训练生态的CUDA锁定效应仍在。真正的威胁在推理端，需要持续跟踪Maia 200的实际部署情况。

5. **当前阶段判断**：正向循环仍在运转，但已是**高杠杆下的正向循环**。建议保持警惕，关注以下触发点：
   - OpenAI季度亏损超过$5B
   - CoreWeave/Nebius合约执行率低于80%
   - NVIDIA关联方交易出现新的复杂结构
   - 任何一家neocloud出现融资困难
