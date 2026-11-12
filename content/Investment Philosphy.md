---
publish: true
title: Investment Philosophy
created: 2026-04-10T14:16:58-06:00
modified: 2026-11-12T15:16:23.266Z
published: 2026-11-12T15:16:23.266Z
date created: 2026-04-10T14:16:58-06:00
date modified: 2026-11-12T16:20:00+01:00
tags:
  - source/ai/claude
  - finance
  - investing
---

# Investment Philosophy

> [!summary] The short version
> Stay globally diversified and boring, but stop letting market-cap weighting pile ever more of the portfolio into the most expensive market on earth. **VT remains the core.** Around it, the portfolio now tilts **away from US stocks and toward cheap international value**, phased in gradually so that being early (again) is survivable.

## Changelog

- **2026-11-12: international / value tilt.** Prompted by [[#The Grantham thesis|Jeremy Grantham's "Don't own US stocks"]] (Diary of a CEO, June 2026) and GMO's 7-year forecasts. The 401k moves from 100% VT to 50 VT / 35 VXUS / 7.5 VDV / 7.5 AVDV in three steps; taxable new money goes to VXUS. Step 1 executed Nov 12.
	- Dropped the earlier plan of an 80/20 VT/VBR (US small-cap value) split in the taxable account; VBR was never bought. GMO's forecasts favour _international_ value over US value, and the value tilt now lives in the 401k, where it costs nothing in tax.
- **2026-02: VTSAX → VT.** Migrated from the total US market to the total world market. I think this was the post that originally prompted it: [JL goes international and to ETFs, oh my!](https://jlcollinsnh.com/2026/02/08/jl-goes-international-and-to-etfs-oh-my/)

## Core Position

```mermaid
flowchart TD
    A[Global equities<br/>100% stocks, no bonds] --> B[Cash buffer<br/>replaces bonds' role]
    A --> C[Taxable account]
    A --> D[401k<br/>Traditional + Roth]
    C --> C1[VT: existing stake, held]
    C --> C2[New contributions → VXUS]
    D --> D1[50% VT · global core]
    D --> D2[35% VXUS · ex-US broad]
    D --> D3[7.5% VDV · ex-US value]
    D --> D4[7.5% AVDV · ex-US small-cap value]
```

### 401k (Traditional and Roth, same mix in each)

| Fund | What it is | Target | Expense ratio |
|---|---|---|---|
| **VT** | Vanguard Total World: the global core, ~60% US | 50% | ~0.06% |
| **VXUS** | Vanguard Total International: the world minus the US | 35% | 0.05% |
| **VDV** | Vanguard Developed Markets ex-US Value (launched Apr 2026) | 7.5% | 0.08% |
| **AVDV** | Avantis International Small Cap Value | 7.5% | 0.36% |

```mermaid
pie showData
    title 401k target allocation (%)
    "VT" : 50
    "VXUS" : 35
    "VDV" : 7.5
    "AVDV" : 7.5
```

**Why put the tilt in the 401k:** trades inside it are tax-free in the US and, under the US–Germany treaty, German tax is deferred until withdrawal. That makes it the cheapest place to rebalance. Each account (Traditional and Roth) holds the same mix and is rebalanced on its own.

### Taxable account

- **VT:** existing stake, held. Selling would trigger German capital-gains tax (Abgeltungsteuer), so I don't.
- **New contributions → VXUS** (from Nov 2026). This shifts the mix without selling anything.
- **Two funds, deliberately.** Every extra ETF here is another line on two tax returns, so the value tilt stays in the 401k instead.

## How exposure shifts

The 401k transition is phased: one third now, one third in a month, one third with the January rebalance. If the call is early (Grantham's usual failure mode), I'll have regretted moving everything on one day less.

```mermaid
timeline
    title 401k transition: 100% VT → 50/35/7.5/7.5
    Nov 12 2026 : Step 1 done : US share ~62% → ~52%
    Dec 14 2026 : Step 2 : US share → ~41%
    Jan 4 2027 : Step 3 + annual rebalance : US share → ~31%
```

```mermaid
xychart-beta
    title "Approx. US share of the 401k (%)"
    x-axis ["Before", "After step 1", "After step 2", "After step 3"]
    y-axis "US stocks %" 0 --> 70
    bar [62, 52, 41, 31]
```

_US share assumes VT is ~62% US (approximate)._

## The Grantham thesis

Jeremy Grantham (GMO co-founder) told The Diary of a CEO in June 2026 to own no US stocks, calling the AI boom the largest bubble in US history with room for a ~70% fall. His alternative is broad world-ex-US or emerging-market index funds ([IBTimes](https://www.ibtimes.co.uk/jeremy-grantham-us-stock-market-bubble-warning-1805599)). His own family money is mostly in international developed-market value, plus emerging markets ([Barron's](https://www.itiger.com/hans/news/2595725599)).

The engine is GMO's **7-year asset-class forecasts**, which assume valuations and profit margins drift back toward normal. As of Sep 30, 2026, after inflation per year ([GMO](https://www.gmo.com/globalassets/articles/gmo-7-year-asset-class-forecast/2026/gmo-7-year-asset-class-forecastsep26.pdf)):

```mermaid
xychart-beta
    title "GMO 7-yr real return forecast, base case (%/yr)"
    x-axis ["US Large", "US Small", "Intl Large", "Intl Small", "Emerging", "Intl Deep Value", "EM Value", "Japan Sm Value"]
    y-axis "Real return %/yr" -8 --> 6
    bar [-7.3, -5.1, -0.9, 1.3, 0.2, 4.0, 4.2, 5.4]
```

_I matched the labels to the chart's order myself, so treat this as my reading, not GMO's table._

**Two things that shaped the allocation:**

1. **"International" isn't the whole thesis; "cheap international" is.** In GMO's numbers, broad international (what VXUS holds) is roughly flat after inflation. The +4–5% is in _value_. VXUS gives the "not US" half; VDV and AVDV supply the "cheap" half.
2. **Grantham is reliably early.** He was right about 2000 but two years early, and clients left. He was right in 2009. His own view is that his best timing calls were mostly luck. So the thesis is a _tilt with VT kept as the core_, not a zero-US bet.

## Looking back: the last 5 years

$100 invested Nov 2021, dividends reinvested, rebalanced each January (weekly price data; EFV stands in for VDV, which only launched in 2026):

```mermaid
xychart-beta
    title "Growth of $100 (Nov 2021 → Nov 2026)"
    x-axis ["Nov 21", "End 22", "End 23", "End 24", "End 25", "Nov 26"]
    y-axis "Value ($)" 70 --> 170
    line [100, 82.0, 100.1, 117.5, 143.7, 159.9]
    line [100, 83.3, 96.5, 101.8, 136.2, 149.5]
    line [100, 82.6, 98.3, 109.6, 140.3, 155.1]
    line [100, 84.0, 100.2, 111.8, 145.3, 161.6]
```

| Lines (top chart order) | End value | Per year | Volatility | Worst drop |
|---|---|---|---|---|
| 1 · 100% VT | $159.9 | 9.9% | 15.6% | −25.7% |
| 2 · 100% VXUS | $149.5 | 8.4% | 15.8% | −27.7% |
| 3 · 50/50 VT/VXUS | $155.1 | 9.2% | 15.4% | −26.7% |
| 4 · **New 401k mix** (50/35/7.5/7.5) | **$161.6** | **10.1%** | **15.3%** | −25.9% |

**Each fund on its own** (5-year return per year): VDV stand-in 14.3% · AVDV 14.1% · VT 9.9% · VXUS 8.4%.

| Calendar year | VT | VXUS | VDV (EFV) | AVDV |
|---|---|---|---|---|
| 2022 | −18.0% | −16.1% | −5.1% | −11.5% |
| 2023 | +22.0% | +15.9% | +18.8% | +16.9% |
| 2024 | +17.5% | +5.5% | +3.8% | +9.2% |
| 2025 | +22.3% | +33.8% | +43.5% | +50.0% |

### Why the mix works

- **The value funds outperformed.** Both returned about 14% a year against VT's 9.9%, and AVDV gained 50% in 2025. Only 15% of the portfolio in value was enough to more than make up for VXUS lagging VT.
- **Value cushioned the 2022 drop.** The VDV stand-in fell only 5% and AVDV 11.5%, while VT fell 18%. Value behaves differently from VT, whereas VXUS mostly moves with it (92% correlation).
- **2024 was the cost of being early.** US mega-caps ran and VXUS lagged VT by 12 points that year. VXUS alone isn't a hedge; its case is cheaper starting prices, not a softer fall.
- **It's the only mix that doesn't lose either way.** In the backtest it beat 100% VT, 100% VXUS and 50/50, with the lowest volatility. In the [[#Looking forward the next 5 years|forward scenarios]] it comes out ahead in all three: about 15% above 100% VT if GMO is right, level with VT if the last 5 years repeat. That's what a hedge should do.

## Looking forward: the next 5 years

Per $100 today, three scenarios. GMO's after-inflation forecasts are converted to dollar returns with an assumed 2.5% inflation; "last 5 years repeat" replays each fund's own history.

```mermaid
xychart-beta
    title "Projected value of $100 in 5 years"
    x-axis ["GMO base", "GMO low-rate", "Last 5 yrs repeat"]
    y-axis "Value ($)" 0 --> 170
    bar [90.4, 103.5, 160.1]
    bar [100.7, 113.5, 155.0]
    bar [103.5, 116.0, 161.7]
```

| Bars (left → right in each group) | GMO base | GMO low-rate | Last 5 yrs repeat |
|---|---|---|---|
| 100% VT | $90 | $104 | $160 |
| 50/50 VT/VXUS | $101 | $114 | $155 |
| **New 401k mix** | **$104** | **$116** | **$162** |

**Why this allocation and not something bolder:** it's the only option that **doesn't lose in any scenario**. If GMO is right, it beats 100% VT by about 15%. If the last 5 years repeat, it matches VT. A 50/50 VT/VXUS split does better than VT only if GMO is right. Going to zero US would gain more if GMO is right and lose more if not.

_Caveat:_ GMO's US forecasts have been too bearish for most of the last 15 years. These are projections from assumptions, not predictions.

## Principles

1. **Don't panic sell.** Cash reserves exist to weather storms. Equities don't get touched during drawdowns.
2. **Minimize holdings count where it costs something.** Every ETF in the _taxable_ account is another line on the US and German tax returns. Inside the 401k, holdings are free of that cost, which is why the multi-fund tilt lives there.
3. **Shift with new money, not sales, in taxable accounts.** Changing the mix by directing contributions avoids realizing gains (and the German tax that comes with them).
4. **Factor tilts over stock picking.** Value and small-cap value are evidence-based bets on compensated risk, not speculation on companies.
5. **Phase in big changes.** Three steps over two months, not one day. It limits regret if the timing is wrong.
6. **Rebalance once a year, with bands.** Every January; skip any fund within ±2 points of target.
7. **Simplicity is a feature.** Complexity is the enemy of follow-through. Every fund has to earn its place.

## Tax Considerations (US Expat in Germany)

The dual-tax situation creates a fundamental tension:

| | US Tax | German Tax |
|---|---|---|
| **US-domiciled ETFs (VT, VXUS)** | Clean | Punitive (opaque fund treatment under InvStG 2018) |
| **UCITS ETFs (e.g., VWCE)** | Punitive (PFIC reporting) | Favorable (30% Teilfreistellung on equity ETFs) |

Current approach: hold US-domiciled ETFs in the taxable account, using MiFID II professional client status to access them from the EU. Accept the German opaque-fund treatment as the lesser evil compared to PFIC reporting on the US side.

**401k:** treaty-deferred in Germany until withdrawal, so trading inside it creates no German taxable event. **Open question for the Steuerberater:** does Germany honour the Roth's tax-free withdrawals? If yes, consider _asset location_: put the highest-expected-return value funds in the Roth, with VT and VXUS in the Traditional account.

This should be revisited with a qualified cross-border tax advisor now that German tax residency is established.

## What This Portfolio Is Not

- **Not a bond portfolio.** 100% equities, by design. The cash buffer serves the volatility-dampening role.
- **Not a stock-picking portfolio.** No individual equities. Factor exposure through index funds only.
- **Not a market-timing bet.** The tilt is a valuation-based allocation held for years and phased in, not a call on when the drop comes.
- **Not optimized for either tax jurisdiction.** It's optimized for the intersection of both, which means accepting suboptimal treatment somewhere.
- **Not static.** Revisit if valuations normalize (e.g., GMO's US forecasts turn positive) or the tax picture changes.

## "Don't just do something, stand there"

_Added by Claude, 2026-09-25 (`source/ai/claude`), from a Readwise task on JL Collins._

> [!quote] JL Collins, ["The One Thing That Will Determine Whether the Market Makes You Wealthy or Leaves You Bleeding on the Side of the Road"](https://jlcollinsnh.com/2025/05/12/the-one-thing-that-will-determine-whether-the-market-makes-you-wealthy-or-leaves-you-bleeding-on-the-side-of-the-road/) (12 May 2025)
> As Jack Bogle once famously said: "Don't just do something, stand there."

**Bogle's own words** (AARP interview, 2017): _"You've heard the phrase 'Don't just stand there, do something'? For investors, by far the better advice is 'Don't do something, just stand there.'"_ ([AARP](https://www.aarp.org/money/retirement/financial-advice-jack-bogle/)). **The inversion is older than Bogle:** Quote Investigator traces it to a 1945 Leonard Lyons column crediting the actor-producer Martin Gabel, and it's the White Rabbit's line in Disney's _Alice in Wonderland_ (1951) ([Quote Investigator](https://quoteinvestigator.com/2014/03/22/stand-there/)). So: Bogle's use, not Bogle's coinage.

Collins's point around it: corrections and crashes are normal; **your behaviour during the drop, not the drop, decides the outcome**; nobody times the market (he quotes Bogle again: _"I don't even know anybody who knows anybody who has done it successfully and consistently"_). It's Principle 1 above ("Don't panic sell") in six words.

**Beyond investing, in your words:** _"It also applies to the general stance I take on many personal decisions. For example, whether to purchase a new house."_

**And it's the tension in this update:** a tilt _is_ doing something. The guardrails (VT stays the core, phase in, annual bands, no taxable selling) are what keep it a considered allocation change and not market timing in disguise.

---

_Not financial advice. Data: exchange price history, Vanguard and GMO publications. Updated with Claude, 2026-11-12 ([session](https://claude.ai/code/session_01RCTYJ7LqMpax1P8WRfcqjB))._
