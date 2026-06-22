---
title: "【Weekly Monday】NVIDIA Circular Financing Risk Monitor 2026-06-22"
date: 2026-06-22
description: "This week's core risks: OpenAI $122B funding closes, NVIDIA invests $2B in Nebius, CoreWeave aggressive expansion, TPUv7/Ironwood GA, circular financing structure continues expanding"
tags: ["NVIDIA", "Circular Financing", "Risk Monitor", "AI", "OpenAI"]
category: "signals"
---

# 【Weekly Monday】NVIDIA Circular Financing Risk Monitor | 2026-06-22

## This Week's Key Changes

No sudden major risk events this week, but structural risks continue accumulating. **OpenAI's $122B funding announced in March has officially closed**, valued at $852B, with NVIDIA participating as a strategic investor. Meanwhile, NVIDIA's $2B investments in both CoreWeave and Nebius further deepen its利益绑定 in the neocloud ecosystem. 2026 global AI capex is projected at $650-700B, with the circular financing chain extending further.

---

## 1. NVIDIA Related-Party Transactions

### This Week's Developments

| Event | Details |
|-------|---------|
| NVIDIA Annual Report (2026 AR) | Published May 12, states "regular review of all related party transactions found no conflicts of interest" |
| NVIDIA invests $2B in Nebius | Announced March 11, Nebius stock +16% same day, targeting 5GW+ deployment by 2030 |
| NVIDIA invests $2B in CoreWeave | Completed, CoreWeave first to deploy Vera Rubin NVL72 system in early June |

### Risk Assessment

**⚠️ Medium-High** — NVIDIA's annual report claims no related-party issues, but its investments in Nebius and CoreWeave create a classic **vendor-customer dual relationship**. NVIDIA is simultaneously the GPU supplier, equity investor, and these companies are among its largest customers. This "investment-purchase-revenue recognition" closed loop warrants continued monitoring.

---

## 2. OpenAI Financial Health

### This Week's Developments

| Metric | Data |
|--------|------|
| Latest Funding | $122B at $852B valuation, closed March 31 |
| Revenue Growth | Q1 2026 revenue $5.7B (annualized $22.8B), monthly revenue now $2B |
| Cash Burn | Q1 burned $3.7B, 2025 net loss $39B |
| 2026 Projected Loss | $14B (internal forecast) |
| Weekly Active Users | 900M+, 50M+ paid subscribers |
| API Processing | 1.5B tokens per minute |
| Credit Facility | Expanded to $4.7B revolving credit (undrawn) |

### Risk Assessment

**🔴 High** — OpenAI is one of NVIDIA's largest customers and one of CoreWeave's two biggest clients. Its $122B funding round included direct NVIDIA participation, forming the closed loop of "NVIDIA invests in OpenAI → OpenAI buys GPUs → NVIDIA recognizes revenue." While revenue growth is explosive ($2B/month), losses are equally staggering ($3.7B burned in Q1). **If AI commercialization underperforms, losses will cascade through this chain.**

---

## 3. GPU Cloud Provider Health

### CoreWeave

| Metric | Data |
|--------|------|
| 2026E Revenue | $12.6B |
| Microsoft Contract | $60B+ (including Nebius and others) |
| Meta Contract | $35.2B (recent $21B expansion) |
| Active Power Target | 1.7GW (end of 2026) |
| Financing Model | GPU-backed debt + NVIDIA equity + Hyperscaler contracts |
| Latest | First to deploy NVIDIA Vera Rubin NVL72 in early June |

### Nebius

| Metric | Data |
|--------|------|
| 2026E Revenue | $3.4B |
| NVIDIA Investment | $2B (announced March) |
| Meta Contract | $27B |
| Power Target | 800MW-1GW |
| Active Power | Targeting 5GW+ (by 2030) |

### Lambda Labs

| Metric | Data |
|--------|------|
| TTM Revenue | $520M+ (as of September 2025) |
| YoY Growth | Q3 2025 +80% |
| IPO Plans | Following CoreWeave's IPO timeline, expected 2026 |

### Risk Assessment

**🔴 High** — The neocloud business model is essentially **using NVIDIA's GPUs and credit, borrowing Hyperscalers' money, to build compute capacity that Hyperscalers need but don't want to build themselves.** CoreWeave and Nebius have combined contracts exceeding $120B but current revenues of only ~$16B, representing extremely high leverage. S&P Global explicitly noted that "the circular financing model has stabilized the ecosystem short-term, but long-term risks remain underpriced."

---

## 4. Circular Financing Risk Signals

### Key Data

| Dimension | Data |
|-----------|------|
| 2026E Global AI Capex | $650-700B |
| NVIDIA Vendor Financing | $110B direct investments + $15B+ GPU-backed loans |
| Lucent Comparison (2000 Bubble) | Vendor financing was 24% of revenue; current AI sector similar ratio |
| CoreWeave+Nebius Contracts | $120B+ vs current revenue ~$16B (~8x leverage) |
| OpenAI Funding Scale | $122B (largest private funding in history) |

### New Analysis This Week

- **Bloomberg January deep dive**: Explicitly described current AI investments as "circular deals," warning that "if AI falls short of expectations, the cross-investment network will trigger cascading losses"
- **SSRN Academic Paper (April)**: "The AI Circular Economy" compared current AI capex to the 2000 telecom bubble, noting scale is 3-5x larger in real terms
- **IO Fund June 11 analysis**: CoreWeave and Nebius growth is "far from profitable," relying on aggressive financing expansion amid worsening macro backdrop

### Risk Assessment

**🔴 High** — The core problem with circular financing structures is **risk contagion**. NVIDIA invests in neoclouds → neoclouds use that money to buy NVIDIA GPUs → NVIDIA recognizes revenue → stock price rises → NVIDIA has more money to invest in neoclouds. Once terminal demand (AI application revenue) fails to cover costs, the entire chain faces a reverse spiral. We are currently in the positive cycle phase, but leverage ratios and scale already far exceed historical comparables.

---

## 5. Competitor Custom Chip Progress

### Google TPU v7 (Ironwood)

| Metric | Data |
|--------|------|
| Status | GA since November 2025, Cloud docs continuously updated |
| FP8 Performance | 4.61 PFLOPS |
| Scale | 9,216 chips per Pod |
| HBM | 192GB HBM3e, 7.4 TB/s bandwidth |
| Competitive Position | Reddit community认为性能超过Microsoft Maia 200 |

### Amazon Trainium 3

| Metric | Data |
|--------|------|
| Status | GA December 2025, shipping in 2026 |
| Performance vs Trainium2 | 4.4x compute, 4x energy efficiency |
| Price-Performance | 30-40% improvement over Trainium2 |
| Subscription Status | Nearly fully subscribed |
| LNC=8 Support | Expected mid-2026 |

### Microsoft Maia 200

| Metric | Data |
|--------|------|
| Release Date | January 26, 2026 |
| Positioning | Inference accelerator, "dramatically improving AI token economics" |
| Microsoft Claims | "Outpaces Google TPU and Amazon Trainium" (disputed) |
| Reddit Assessment | "Better than Trainium3, but not better than Google Ironwood" |

### Risk Assessment

**🟡 Medium** — Custom chip progress is rapid, but短期内难以dethrone NVIDIA's dominance in training. The three hyperscalers' custom chips primarily target **inference optimization** and **reducing NVIDIA dependency**, not full replacement. Google Ironwood's 4.61 PFLOPS FP8 performance is noteworthy, but CUDA ecosystem lock-in remains. Long-term, custom chips will compress NVIDIA's inference market pricing power.

---

## Overall Risk Assessment Matrix

| Dimension | Risk Level | This Week's Change | Priority |
|-----------|-----------|-------------------|----------|
| Related-Party Transactions | ⚠️ Medium-High | → Flat | High |
| OpenAI Financials | 🔴 High | ↑ Funding closes deepen binding | Critical |
| Neocloud Health | 🔴 High | ↑ CoreWeave aggressive expansion | Critical |
| Circular Financing Structure | 🔴 High | ↑ Leverage continues expanding | Critical |
| Custom Chip Competition | 🟡 Medium | → Flat | Medium |

**Overall Risk Level: 🔴 High (↑ from last week)**

---

## Core Conclusions

1. **OpenAI's $122B funding close is the week's most significant event** — This is not risk mitigation, it's risk deepening. NVIDIA's participation as strategic investor further binds the "investment→procurement→revenue recognition" closed loop. OpenAI's $3.7B quarterly burn rate means it must continue raising capital, with NVIDIA playing a dual role.

2. **Neocloud leverage ratios are concerning** — CoreWeave+Nebius combined contracts exceed $120B but current revenues are only ~$16B. This is not growth, it's leverage. If Hyperscalers cut or delay contract execution, neoclouds face a liquidity crisis.

3. **The circular financing chain is lengthening, not shortening** — From NVIDIA to CoreWeave/Nebius to Hyperscalers to OpenAI/Anthropic, every layer adds leverage. S&P Global's assessment is accurate: short-term stabilization, long-term underpricing of risk.

4. **Custom chips are a long-term antidote, short-term ineffective** — Google Ironwood and Amazon Trainium3 are making good progress, but CUDA ecosystem lock-in in training remains the real moat. The genuine threat lies in inference; Maia 200's actual deployment needs continued tracking.

5. **Current stage assessment**: The positive cycle is still running, but it's a **high-leverage positive cycle**. Stay vigilant and monitor these triggers:
   - OpenAI quarterly losses exceeding $5B
   - CoreWeave/Nebius contract execution rate below 80%
   - Any new complex structures in NVIDIA related-party transactions
   - Any neocloud experiencing financing difficulties
