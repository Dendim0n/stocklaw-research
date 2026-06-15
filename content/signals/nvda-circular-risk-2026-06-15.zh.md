---
title: "【每周一】NVIDIA 循环融资风险监控 2026-06-15"
date: 2026-06-15
description: "本周核心风险: OpenAI亏损恶化、CoreWeave杠杆率738%、循环融资链条加深"
tags: ["NVIDIA", "循环融资", "风险监控", "AI", "OpenAI"]
category: "signals"
---

# 【每周一】NVIDIA 循环融资风险监控 | 2026-06-15

## 📋 本周摘要

本周无重大结构性变化，但多个信号值得高度关注：**NVIDIA Q1 FY2026财报创纪录 $81.6B 营收**确认需求端仍然强劲，但 **OpenAI Q1 2026 Non-GAAP 运营利润率 -122%** 的泄露数据加剧了循环融资质疑；**CoreWeave 债务杠杆率高达 738%**（MRQ），Vera Rubin 首批系统上线；**Microsoft Maia 200** 官宣性能碾压 TPU/Trainium，自研芯片军备竞赛升温。

---

## 1️⃣ NVIDIA 关联方交易

| 维度 | 本周数据 | 变化趋势 |
|------|---------|---------|
| Q1 FY2026 营收 | $81.6B（YoY +69%） | ⬆️ 创纪录 |
| 资本开支指引（CY2026） | $190B（分析师预期 $200B） | ⚠️ 持续高位 |
| 2026 Annual Review | "无重大关联交易"（截至 Fiscal 2026 开始） | ➡️ 无新增 |

**要点：**
- NVIDIA 2026 年度报告（5月12日发布）明确披露："除下述情况外，自 Fiscal 2026 年初以来无关联交易或拟议交易"。这意味着截至报告日，NVIDIA 在关联方交易披露层面相对干净。
- 但 NVIDIA 作为**资本玩家**的角色仍在扩大：直接投资 CoreWeave $2B（2026年1月）、投资 Nebius $2B、以及持续的 vendor financing 结构——这些虽不在"关联方交易"狭义定义下，却是循环融资链的关键一环。
- Bloomberg 1月专题报道《A Guide to the Circular Deals Underpinning the AI Boom》详细记录了 NVIDIA 如何在 2024-2025 年从芯片供应商升级为金融核心玩家。

**风险评级：🟡 中性偏高** — 披露层面合规，但结构性角色未变。

---

## 2️⃣ OpenAI 财务状况

| 维度 | 本周数据 | 变化趋势 |
|------|---------|---------|
| Q1 2026 营收 | $5.7B | ⬆️ |
| Non-GAAP 运营利润率 | **-122%** | ⚠️ 极度恶化 |
| Q1 估算亏损 | ~$6.95B（Non-GAAP） | 🔴 |
| 2026 全年营收目标 | $30B（"on track"） | ➡️ |
| 预计 2026 全年亏损 | ~$36.6B（维持当前利润率） | 🔴 |
| ChatGPT 周活跃用户 | 905M（Q1 均值） | ⚠️ 增长停滞 |
| 付费用户 | 55M（转化率 ~6%） | ⬆️ 但仍低 |
| 2026.03 融资 | $122B | ➡️ 已完成 |

**要点：**
- **The Information 5月22日**泄露 OpenAI Q1 财务数据：$5.7B 营收，Non-GAAP 运营利润率 -122%——意味着每赚 $1 就亏 $1.22。这还不含股票薪酬（SBC），实际 GAAP 亏损可能更大。
- **增长停滞信号**：ChatGPT 周活从2月的 920M 降至 Q1 均值 905M，暗示1月或3月有下滑。OpenAI 曾预期 2025 年破 1B 周活，至今未达。
- **烧钱速度惊人**：Sacra 预测 2026 年现金消耗 ~$27B、2027 年 ~$63B。即便完成 $122B 融资，在当前亏损率下资金跑道有限。
- **转化率**：55M 付费用户 / 905M 周活 ≈ 6%，较去年的 2.6% 有改善，但大量低价 Go 订阅（$5-8/月）和印度免费年卡稀释 ARPU。
- OpenAI 是 CoreWeave 两大客户之一，其财务健康直接关系 GPU 云需求持续性。

**风险评级：🔴 高** — 收入增长被亏损速度吞噬，循环融资依赖加深。

---

## 3️⃣ GPU 云厂商健康度

| 维度 | CoreWeave (CRWV) | Nebius |
|------|-----------------|--------|
| FY2026 预期营收 | $12.6B | $3.4B |
| 总债务 | $14.2B+（多来源报告 $18.4B） | 未披露具体数字 |
| 债务/权益比 | **738.54%**（MRQ） | N/A |
| 利率 | ~11%（约 $2B/年利息） | N/A |
| NVIDIA 投资 | $2B（2026年1月，$87.20/股） | $2B |
| Meta 合同 | $35.2B（含 $21B 扩展） | $27B |
| 微软合同 | ~$60B 总承诺（含 Nebius、Nscale） | 含在内 |
| 活跃电力目标（2026年底） | 1.7 GW | 800 MW - 1 GW |
| Vera Rubin 部署 | ✅ 首家上线（6月初） | 进行中 |

**要点：**
- **CoreWeave 债务风险是本周最亮的红灯**：Morningstar 6月3日给予"无经济护城河、极高不确定性"评级，公允价值估算 $106（接近当前股价）。总债务/权益比 738%，年利息支出约 $2B。
- **微软+Meta 的 $122B+ 承诺**相当于 AWS 90% 的 TTM 营收——但这些是长期合同，核心风险在于：如果 AI 需求放缓，超大规模厂商能否按约执行？
- **hyperscaler 动机分析**（IO Fund 6月11日深度）：超大规模厂商将 AI capex 转移到 neoclouds 的核心目的是**将资本开支从资产负债表转移到运营费用**——这本身不是问题，但如果 neocloud 无法盈利，整个链条就变成"把风险外包给更弱的玩家"。
- **NVIDIA 作为"最后贷款人"角色**：$2B 投资 CoreWeave + $2B 投资 Nebius，加上 GPU-backed debt 结构——NVIDIA 实际上在为自己的客户融资来购买自己的产品。
- Lambda Labs 本周无重大融资/运营新闻。

**风险评级：🔴 高** — 杠杆率极端，盈利遥远，依赖 NVIDIA 金融支撑。

---

## 4️⃣ 循环融资风险信号

| 信号 | 状态 | 详情 |
|------|------|------|
| NVIDIA → CoreWeave 投资 | 🟡 已知 | $2B equity，$87.20/股 |
| NVIDIA → Nebius 投资 | 🟡 已知 | $2B equity |
| CoreWeave GPU-backed debt | 🔴 进行中 | $14-18B 债务，以 GPU 为抵押 |
| OpenAI → CoreWeave 支付 | 🟡 已知 | 大客户关系 |
| NVIDIA → OpenAI 投资 | 🟡 已知 | 参与 $122B 融资轮 |
| Hyperscaler → Neocloud 合同 | 🟡 放大效应 | $122B+ 总承诺 |
| 循环结构本质 | ⚠️ 加深 | NVIDIA 融资 → 客户购买 NVIDIA GPU → NVIDIA 确认收入 → 再投资 |

**要点：**
- **IO Fund 6月11日**（本周）发布深度分析《Nvidia, CoreWeave, and Nebius: Inside the Circular Financing of the GPU Boom》——这是本周最重要的新分析。
- 核心循环链条：NVIDIA 投资 CoreWeave/Nebius → 这些公司借 GPU-backed debt 买 NVIDIA GPU → 为超大规模厂商提供算力 → 超大规模厂商支付 → NVIDIA 确认收入 → NVIDIA 再投资。
- **关键质疑**：如果 AI 需求放缓（OpenAI 增长停滞是前兆），neocloud 的长期合同能否覆盖其巨额债务利息？CoreWeave 年利息 $2B vs 估计营收 $12.6B，利息覆盖倍数勉强。
- **对比电信泡沫**：LinkedIn Tomasz Tunguz（2025年10月）将 NVIDIA $110B vendor financing 与电信泡沫类比——"NVIDIA's vendor financing strategy totals $110 billion in direct investments plus another $15 billion in financial backstops"。
- **UBS 观点**：NVIDIA 占 AI capex 的 60-70%，其投资行为实质上是在创造自己的需求。

**风险评级：🔴 高** — 循环结构未有缓解迹象，本周 IO Fund 深度进一步确认风险。

---

## 5️⃣ 竞争对手自研芯片进展

| 芯片 | 厂商 | 最新进展 | 对 NVIDIA 威胁度 |
|------|------|---------|----------------|
| **Maia 200** | Microsoft | 2026.01.26 发布，宣称 FP4 性能 3x TPU/Trainium | ⚠️ 高 |
| **TPU v6e (Trillium)** | Google | 已量产，推理成本有竞争力 | ⚠️ 中高 |
| **Trainium 3** | Amazon | 第三代，被 Maia 200 宣称超越 | ⚠️ 中 |
| **AMD MI450** | AMD | Meta 签署 6GW 合作 | ⚠️ 中 |

**要点：**
- **Microsoft Maia 200**（1月26日发布）是本周最值得关注的竞争动态——Microsoft 自称"任何超大规模厂商中最高效的第一方硅片"，FP4 性能 3x Amazon Trainium 3，FP8 性能超 Google TPU。这直接挑战 NVIDIA 在推理市场的统治。
- **Google TPU v6e Trillium** 已全面投产，Spheron 4月分析显示其推理成本/BFLOP 具有竞争力，但生态（CUDA 护城河）仍是 NVIDIA 最大优势。
- **Amazon Trainium 3** 被 Microsoft 宣称在 FP4 上落后 3x——如果属实，AWS 的自研芯片战略面临压力。
- **Meta + AMD**：Meta 签署 6GW AMD 合作，暗示超大规模厂商不愿被 NVIDIA 完全锁定。
- **关键判断**：自研芯片短期内不会颠覆 NVIDIA（生态壁垒深厚），但会逐步压缩溢价空间，尤其在推理市场。

**风险评级：🟡 中** — 竞争加剧但未构成即时威胁。

---

## 🎯 整体风险评估

| 维度 | 风险等级 | 趋势 |
|------|---------|------|
| 关联方交易 | 🟡 中性偏高 | ➡️ 持平 |
| OpenAI 财务 | 🔴 高 | ⬆️ 恶化 |
| GPU 云厂商健康度 | 🔴 高 | ➡️ 持平（已处高位） |
| 循环融资风险 | 🔴 高 | ⬆️ 加深 |
| 竞争对手自研芯片 | 🟡 中 | ⬆️ 加剧 |
| **综合风险** | **🔴 高** | **⬆️ 恶化** |

---

## 💡 核心结论

1. **OpenAI 是循环链中最脆弱的一环**：-122% 运营利润率 + 增长停滞 = 这家公司目前完全靠融资续命。$122B 融资在 $27B/年烧钱速度下跑道有限。如果 OpenAI 增长放缓或融资困难，整个 NVIDIA → Neocloud → Hyperscaler 链条将承压。

2. **CoreWeave 债务结构令人不安**：738% 债务/权益比、$2B/年利息、近乎零运营现金流——这是一家用 GPU 抵押贷款来买更多 GPU 的公司。Vera Rubin 首批上线是好消息，但盈利仍遥遥无期。

3. **NVIDIA "既是供应商又是银行家"的角色加剧系统性风险**：投资客户 → 客户购买产品 → 确认收入 → 再投资——这个循环在上升期完美运转，但一旦 AI capex 增速放缓，NVIDIA 将同时面临收入下降和投资减值的双重打击。

4. **Microsoft Maia 200 是长期最大威胁**：不是因为它现在能替代 NVIDIA，而是因为它代表超大规模厂商**认真的**自研意愿。Meta + AMD 6GW 合同也指向同一方向。

5. **本周无"黑天鹅"事件**，但风险是累积型的——每多一轮循环融资，整个系统的脆弱性就增加一分。

---

*数据截至 2026-06-15 | 下次监控: 2026-06-22*
