---
title: "Weekly NVIDIA Circular Financing Risk Monitor 2026-06-15"
date: 2026-06-15
description: "Key risks this week: OpenAI margin deterioration, CoreWeave 738% leverage, deepening circular financing chain"
tags: ["NVIDIA", "circular financing", "risk monitor", "AI", "OpenAI"]
category: "signals"
---

# Weekly NVIDIA Circular Financing Risk Monitor | 2026-06-15

## 📋 Weekly Summary

No major structural changes this week, but several signals warrant close attention: **NVIDIA Q1 FY2026 record $81.6B revenue** confirms demand remains strong, but **OpenAI Q1 2026 Non-GAAP operating margin of -122%** leaked data intensifies circular financing concerns; **CoreWeave debt-to-equity at 738%** (MRQ) with first Vera Rubin systems online; **Microsoft Maia 200** claims performance superiority over TPU/Trainium, escalating the custom silicon arms race.

---

## 1️⃣ NVIDIA Related-Party Transactions

| Metric | This Week's Data | Trend |
|--------|-----------------|-------|
| Q1 FY2026 Revenue | $81.6B (+69% YoY) | ⬆️ Record |
| Capex Guidance (CY2026) | $190B (analysts expect $200B) | ⚠️ Elevated |
| 2026 Annual Review | "No material related-party transactions" (as of Fiscal 2026 start) | ➡️ No new |

**Key Points:**
- NVIDIA's 2026 Annual Report (published May 12) explicitly discloses: "Except as discussed below, there were no transactions with related persons since the beginning of Fiscal 2026 or currently proposed transactions." At face value, NVIDIA's related-party disclosure appears clean.
- However, NVIDIA's role as a **financial player** continues to expand: direct investment in CoreWeave ($2B, January 2026), investment in Nebius ($2B), and ongoing vendor financing structures — these fall outside the narrow definition of "related-party transactions" but are critical links in the circular financing chain.
- Bloomberg's January feature "A Guide to the Circular Deals Underpinning the AI Boom" documented NVIDIA's transformation from chip supplier to financial linchpin in 2024-2025.

**Risk Rating: 🟡 Moderate-High** — Disclosure compliant, but structural role unchanged.

---

## 2️⃣ OpenAI Financial Health

| Metric | This Week's Data | Trend |
|--------|-----------------|-------|
| Q1 2026 Revenue | $5.7B | ⬆️ |
| Non-GAAP Operating Margin | **-122%** | ⚠️ Severely deteriorating |
| Q1 Estimated Loss | ~$6.95B (Non-GAAP) | 🔴 |
| 2026 Full-Year Revenue Target | $30B ("on track") | ➡️ |
| Projected 2026 Full-Year Loss | ~$36.6B (at current margins) | 🔴 |
| ChatGPT Weekly Active Users | 905M (Q1 average) | ⚠️ Growth stalled |
| Paying Users | 55M (conversion ~6%) | ⬆️ But still low |
| March 2026 Fundraising | $122B | ➡️ Completed |

**Key Points:**
- **The Information (May 22)** leaked OpenAI Q1 financials: $5.7B revenue, Non-GAAP operating margin of -122% — meaning the company lost $1.22 for every $1 earned. This excludes stock-based compensation (SBC), so actual GAAP losses are likely larger.
- **Growth stall signal**: ChatGPT WAU dropped from 920M in February to a Q1 average of 905M, suggesting declines in January or March. OpenAI had projected breaking 1B WAU in 2025 — still unmet.
- **Burn rate is staggering**: Sacra projects ~$27B cash burn in 2026 and ~$63B in 2027. Even with $122B raised, the runway is limited at current loss rates.
- **Conversion rate**: 55M paying users / 905M WAU ≈ 6%, improved from 2.6% last year, but heavily diluted by cheap Go subscriptions ($5-8/month) and free annual Go cards given to Indian subscribers.
- OpenAI is one of CoreWeave's two largest customers — its financial health directly impacts GPU cloud demand sustainability.

**Risk Rating: 🔴 High** — Revenue growth consumed by loss velocity, deepening circular financing dependency.

---

## 3️⃣ GPU Cloud Provider Health

| Metric | CoreWeave (CRWV) | Nebius |
|--------|-----------------|--------|
| FY2026 Projected Revenue | $12.6B | $3.4B |
| Total Debt | $14.2B+ (multi-source reports $18.4B) | Not disclosed |
| Debt/Equity Ratio | **738.54%** (MRQ) | N/A |
| Interest Rate | ~11% (~$2B/year interest) | N/A |
| NVIDIA Investment | $2B (Jan 2026, $87.20/share) | $2B |
| Meta Contract | $35.2B (incl. $21B expansion) | $27B |
| Microsoft Contract | ~$60B total commitments (incl. Nebius, Nscale) | Included |
| Active Power Target (YE2026) | 1.7 GW | 800 MW - 1 GW |
| Vera Rubin Deployment | ✅ First online (early June) | In progress |

**Key Points:**
- **CoreWeave's debt risk is this week's brightest red flag**: Morningstar (June 3) assigned "No Economic Moat, Very High Uncertainty" rating with fair value estimate of $106 (near current price). Debt/equity at 738%, annual interest ~$2B.
- **Microsoft + Meta's $122B+ commitments** equal ~90% of AWS's TTM revenue — but these are long-term contracts. Core risk: if AI demand slows, can hyperscalers execute as promised?
- **Hyperscaler motivation analysis** (IO Fund, June 11 deep dive): The core purpose of hyperscaler-neocloud partnerships is **moving AI capex off the balance sheet to opex** — not inherently problematic, but if neoclouds can't profit, the chain becomes "offloading risk to weaker players."
- **NVIDIA as "lender of last resort"**: $2B into CoreWeave + $2B into Nebius, plus GPU-backed debt structures — NVIDIA is essentially financing its own customers to buy its own products.
- Lambda Labs: No major financing/operational news this week.

**Risk Rating: 🔴 High** — Extreme leverage, profitability distant, dependent on NVIDIA financial support.

---

## 4️⃣ Circular Financing Risk Signals

| Signal | Status | Details |
|--------|--------|---------|
| NVIDIA → CoreWeave Investment | 🟡 Known | $2B equity, $87.20/share |
| NVIDIA → Nebius Investment | 🟡 Known | $2B equity |
| CoreWeave GPU-backed Debt | 🔴 Ongoing | $14-18B debt, GPU-collateralized |
| OpenAI → CoreWeave Payments | 🟡 Known | Major customer relationship |
| NVIDIA → OpenAI Investment | 🟡 Known | Participated in $122B round |
| Hyperscaler → Neocloud Contracts | 🟡 Amplifying | $122B+ total commitments |
| Circular Structure Essence | ⚠️ Deepening | NVIDIA finances → Clients buy NVIDIA GPUs → NVIDIA recognizes revenue → Reinvests |

**Key Points:**
- **IO Fund (June 11)** — this week — published deep analysis "Nvidia, CoreWeave, and Nebius: Inside the Circular Financing of the GPU Boom" — the most important new analysis this week.
- Core circular chain: NVIDIA invests in CoreWeave/Nebius → These companies borrow GPU-backed debt to buy NVIDIA GPUs → Provide compute to hyperscalers → Hyperscalers pay → NVIDIA recognizes revenue → NVIDIA reinvests.
- **Key question**: If AI demand slows (OpenAI's growth stall is an early warning), can neocloud long-term contracts cover their massive debt interest? CoreWeave's $2B annual interest vs. projected $12.6B revenue leaves thin coverage.
- **Telecom bubble comparison**: LinkedIn's Tomasz Tunguz (October 2025) compared NVIDIA's $110B vendor financing to the telecom bubble — "NVIDIA's vendor financing strategy totals $110 billion in direct investments plus another $15 billion in financial backstops."
- **UBS view**: NVIDIA accounts for ~60-70% of total AI capex; its investment behavior effectively creates its own demand.

**Risk Rating: 🔴 High** — Circular structure shows no signs of abating; this week's IO Fund deep dive further confirms risk.

---

## 5️⃣ Competitor Custom Silicon Progress

| Chip | Vendor | Latest Progress | Threat to NVIDIA |
|------|--------|----------------|-----------------|
| **Maia 200** | Microsoft | Launched Jan 26, 2026; claims 3x TPU/Trainium FP4 performance | ⚠️ High |
| **TPU v6e (Trillium)** | Google | Mass production, competitive inference cost | ⚠️ Medium-High |
| **Trainium 3** | Amazon | 3rd gen, claimed inferior to Maia 200 | ⚠️ Medium |
| **AMD MI450** | AMD | Meta signed 6GW partnership | ⚠️ Medium |

**Key Points:**
- **Microsoft Maia 200** (launched January 26) is this week's most notable competitive development — Microsoft claims "the most performant first-party silicon from any hyperscaler," with FP4 performance 3x Amazon Trainium 3 and FP8 performance exceeding Google TPU. This directly challenges NVIDIA's dominance in inference.
- **Google TPU v6e Trillium** is in full production; Spheron's April analysis shows competitive inference cost/BFLOP, but the CUDA ecosystem moat remains NVIDIA's greatest advantage.
- **Amazon Trainium 3** is claimed by Microsoft to lag 3x on FP4 — if accurate, AWS's custom silicon strategy faces pressure.
- **Meta + AMD**: Meta signed a 6GW AMD partnership, signaling hyperscalers' unwillingness to be fully locked into NVIDIA.
- **Key judgment**: Custom silicon won't displace NVIDIA short-term (ecosystem barriers too deep), but will progressively compress pricing power, especially in inference.

**Risk Rating: 🟡 Medium** — Competition intensifying but no immediate threat.

---

## 🎯 Overall Risk Assessment

| Dimension | Risk Level | Trend |
|-----------|-----------|-------|
| Related-Party Transactions | 🟡 Moderate-High | ➡️ Flat |
| OpenAI Financials | 🔴 High | ⬆️ Deteriorating |
| GPU Cloud Provider Health | 🔴 High | ➡️ Flat (already elevated) |
| Circular Financing Risk | 🔴 High | ⬆️ Deepening |
| Competitor Custom Silicon | 🟡 Medium | ⬆️ Intensifying |
| **Overall Risk** | **🔴 High** | **⬆️ Deteriorating** |

---

## 💡 Core Conclusions

1. **OpenAI is the weakest link in the circular chain**: -122% operating margin + growth stall = this company is entirely sustained by fundraising. $122B raised has limited runway at ~$27B/year burn. If OpenAI growth slows or fundraising difficulties arise, the entire NVIDIA → Neocloud → Hyperscaler chain will face pressure.

2. **CoreWeave's debt structure is alarming**: 738% debt/equity, $2B/year interest, near-zero operating cash flow — this is a company using GPU-collateralized loans to buy more GPUs. First Vera Rubin systems online is good news, but profitability remains far away.

3. **NVIDIA's dual role as "supplier + banker" amplifies systemic risk**: Invest in customers → Customers buy products → Recognize revenue → Reinvest — this cycle runs perfectly in an upswing, but once AI capex growth slows, NVIDIA will face simultaneous revenue decline and investment write-downs.

4. **Microsoft Maia 200 is the biggest long-term threat**: Not because it can replace NVIDIA now, but because it represents hyperscalers' **serious intent** to develop custom silicon. Meta + AMD's 6GW contract points in the same direction.

5. **No "black swan" events this week**, but risk is cumulative — each additional round of circular financing increases the system's fragility.

---

*Data as of 2026-06-15 | Next Monitor: 2026-06-22*
