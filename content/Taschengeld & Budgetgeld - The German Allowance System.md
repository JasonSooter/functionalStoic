---
publish: true
title: Taschengeld & Budgetgeld - The German Allowance System
description: What the German Taschengeldtabelle is, where it came from, whether the evidence supports it, and how we implemented Taschengeld and Budgetgeld for three kids.
created: 2026-08-31
modified: 2026-10-01
published: 2026-10-01T07:55:17.882Z
tags:
  - concepts/parenting
  - german-life
  - personal-finance
updated: 2026-10-01
---

# Taschengeld & Budgetgeld — The German Allowance System

German culture treats children's allowance as a _pedagogical instrument_ with a published, research-backed reference table — not a family-by-family improvisation. The table is the **Taschengeldtabelle**, and when we moved to Freiburg it was the first piece of German parenting infrastructure that genuinely surprised me.

What follows is what the system is, where it came from, whether the evidence supports it, and how we actually implemented it for three kids.

---

## Origins & history

Two lineages:

- **Pre-2014:** the reference was the _Taschengeldtabelle der bundesdeutschen Jugendämter_ from **2001**, circulated by the Bundesfamilienministerium. The institutional practice is roughly 25 years old; the underlying Jugendamt guidance culture is older still.
- **2014:** the **Deutsches Jugendinstitut (DJI)** published the expertise _Taschengeld und Gelderziehung_ (Alexandra Langmeyer & Ursula Winklhofer). It became the basis for the Familienministerium's official recommendation and displaced the 2001 table.
- **September 2025:** the latest revision, by Langmeyer & Sophia Chabursky, data basis DJI-Survey 2023.

One detail worth knowing: the current revision was funded by the **Deutscher Sparkassen- und Giroverband**. The savings-bank association bankrolls the research behind the norm — which is also why every Sparkasse pushes free youth accounts so hard. That doesn't make the findings wrong, but it's a conflict of interest that rarely gets mentioned. It's also, as I'll argue below, the reason the system actually works in practice.

## Is it inflation-adjusted?

Yes in intent, sporadically in practice. The table is periodically re-benchmarked against cumulative inflation rather than indexed annually, so real-terms value decays between revisions.

Nominally revised every four years. In practice: 2014 → 2020 → 2024 → Sept 2025. Between 2020 and 2024 the numbers sat flat straight through the inflation spike — a six-year-old's recommendation was identical before and after. The catch-up adjustments were widely criticized as too small.

Practical implication: pick a number and re-review it yourself each January rather than waiting for the DJI.

## The table (DJI, Stand 17. September 2025)

| Alter | Empfehlung | Rhythmus |
|---|---|---|
| 5–6 | 1–2 € | wöchentlich |
| 7–9 | 2–4 € | wöchentlich |
| 10–11 | 15–25 € | monatlich |
| 12–13 | 20–30 € | monatlich |
| 14–15 | 25–45 € | monatlich |
| 16–17 | 40–60 € | monatlich |
| 18+ (Schüler, im Elternhaus) | 55–75 € | monatlich |

**Caveat:** many German sites still publish the older Jugendamt Nürnberg numbers — e.g. 14–15 at 25–30 € rather than 25–45 €. The DJI figures above are the current ones. They're ranges, not points, chosen by household income and Stadt-vs-Land.

## The weekly→monthly switch

Under about age 10 the payout is weekly, because a month exceeds a child's planning horizon; a week is the longest unit they can hold.

The **switch to monthly at 10 is itself the lesson.** The child must suddenly ration across four weeks. This is the first designed failure point in the system, and running out in week two is the intended experience, not a malfunction.

## What the money is expected to cover

Taschengeld is **frei verfügbar** — for wants, not needs.

| Kid pays | Parents keep paying |
|---|---|
| Sweets, comics, stickers, trading cards | Food and meals |
| Small toys | Clothing and shoes |
| Extras on outings (ice cream, souvenirs) | School supplies and books |
| Saving toward a wished-for thing | Vereinsbeiträge, transit tickets, phone contract |

The parent does **not** veto the purchase. Buying junk and regretting it is the mechanism.

## § 110 BGB — der Taschengeldparagraf

Applies from the completed 7th year. A minor's contract is valid if paid **in full and immediately** with means handed to them for that purpose.

**Not** covered — these still need parental consent:

- Subscriptions and recurring payments
- Installment purchases (Ratenkauf)
- Mobile phone contracts
- In-app recurring charges
- Anything exceeding the allowance budget

So: trading cards at the Kiosk, binding. A mobile-game subscription, void. This is the legal reason the allowance genuinely belongs to the child — you can't unwind a purchase you disapprove of.

## The bank account is load-bearing

This is the part I'd underline hardest, and the part that's easy to miss if you only read the table.

A German child can have a real bank account, and for most families that means a **Sparkasse**. Every Sparkasse offers a free **Girokonto für Minderjährige** — no fees, a Girocard from around age 12, and a separate Sparkonto alongside it. Opening one is a routine counter transaction, not a special product you have to negotiate for. Volksbanken offer the equivalent.

Why that matters more than it sounds:

- **It makes "regular and reliable" automatic.** The whole system rests on the money arriving on time, unconditionally, every month. A parent paying by hand will eventually be late, and late is the one failure that genuinely damages the lesson. A **Dauerauftrag** removes the parent from the loop entirely.
- **It makes the two-envelope model trivial.** Taschengeld and Budgetgeld as two separate standing orders, landing as two distinct transactions. Keeping them mentally separate is most of the design, and separate transfers do that work for free.
- **The Girocard makes the money usable.** An account the child can't spend from is a savings box with extra steps. A card turns the balance into something they actually transact with, which is the point.
- **The Sparkonto gives saving somewhere to live.** Savings goals that sit in the same pot as spending money aren't savings goals.
- **It moves the learning onto the rails they'll use as adults.** Checking a balance, watching a standing order arrive, noticing an account go low — this is the actual skill, and it's being practised on a real account rather than simulated.

The trade-off is worth naming: once the money is in their account, you can't see what they bought. You lose the itemised view. That's the intended effect rather than a flaw, but it means periodic balance conversations replace the visibility you used to have by default.

And the circularity is real — the savings-bank association funds the research that recommends the system that runs on savings-bank accounts. I don't think that makes it wrong. The infrastructure genuinely is the reason the thing is practicable here and fiddly elsewhere.

## Does it actually produce adults who are good with money?

This is where I'd push back on the confident German consensus. The evidence is **suggestive but weak**, and a lot of it is produced or funded by the banking sector.

**What holds up reasonably well:**

- Early hands-on experience with money correlates with better financial-literacy scores in adolescence. Germany scores strongly on OECD/PISA financial-literacy measures, and near-universal allowance practice is one plausible contributor.
- **Regularity and unconditionality** appear to matter more than the amount. The proposed mechanism is that predictable income enables planning, and planning is the skill actually being trained.
- Some literature finds _unconditional_ allowance associated with better outcomes than chore-linked allowance — which cuts directly against standard Anglo-American practice.

**What doesn't:**

- Almost none of it is causally identified. Households that run a structured, unconditional allowance differ systematically from those that don't — income, education, the parents' own financial habits. Selection effects plausibly explain much of the correlation.
- The cross-national comparison is badly confounded. German financial conservatism — high savings rates, credit-card aversion, a genuine cultural horror of Schulden — has roots in hyperinflation memory and Schwäbische Sparsamkeit that would produce the same outcome with or without a Taschengeldtabelle.
- Effect sizes, where reported, are small.

**Best reading:** the table's real value is as a **coordination device**. It removes the argument, sets a visible social norm that your kids' classmates are also on, and forces a conversation most parents otherwise avoid. The evidence supports the structure it imposes on _parents_ considerably better than any causal effect on children.

That's not nothing. Most parenting interventions can't claim even that.

## Budgetgeld — the next tier

The genuinely interesting part, and the piece Anglo-American parenting has no equivalent for.

Budgetgeld is **zweckgebunden** — earmarked money for agreed _obligatory_ categories the parents would otherwise buy: clothing, shoes, phone, toiletries, transport, food outside the house. The teenager manages the whole envelope.

- The 2025 DJI revision lowered the starting age from **14 to 12**.
- Paid **separately** from Taschengeld. Two transfers, two mental accounts. Merging them collapses both lessons into one undifferentiated pot.
- Typically monthly, but clothing is lumpy — a quarterly or semi-annual sum forces genuinely long-horizon planning.
- The amount isn't a published figure the way Taschengeld is. You derive it from **what you actually spent on that child in those categories last year.** Pull the real number; don't guess.

The crucial reframe: Budgetgeld is usually **not new money**. It's money you were already spending, with the decision-making handed over. Household outflow doesn't change — only who decides.

### Rollout, step by step

1. **Open the accounts first.** A Girokonto and a Sparkonto per child. Everything below assumes they exist.
2. **Pull the actual spend.** One year of clothing and shoes for that specific child. That's the honest baseline, and it's usually larger than you'd guess.
3. **Start narrow.** Clothing and shoes only. Leave out anything that's already a fixed subscription with nothing to decide — a transit pass has no decisions in it.
4. **Pick the rhythm deliberately.** Monthly is easier to absorb; quarterly teaches more. Quarterly is the reasonable middle for a 12–14-year-old — long enough to require planning, short enough that a blown quarter isn't a year in the same shoes.
5. **Write the contract.** Explicitly: what it covers, what stays on the parents' account, and what happens if it runs out. The answer to the last one is _nothing happens_ — they wear what they have until the next payment. Ambiguity here destroys the lesson.
6. **Set up the Daueraufträge.** Two per child, on a fixed day. Savings goals to the Sparkonto.
7. **Set an annual review date.** Adjust for inflation and for growth — a growing 13-year-old goes through shoes faster than the CPI suggests.
8. **Do not bail them out.** The single most common failure mode. The whole apparatus exists to make a €60 mistake at 13 instead of a €6,000 mistake at 23.

---

## How we're actually doing it

Three kids, ages 14, 12 and 11. Each has a Sparkasse Girokonto and Sparkonto — we opened all six accounts shortly after arriving in Freiburg, before we'd worked out what we were going to put in them. In hindsight that was the right order.

We then ran the two tiers in the opposite order to the textbook, which turned out to be an accident worth repeating.

### Clothing budget first (September 2026)

We'd already been budgeting €50/month per child for clothing and spending it ourselves. The change was handing it over: the money now lands in their accounts and they make the purchasing decisions. Household outflow unchanged at €150/month; only the decision-maker moved.

This is Budgetgeld in everything but name, run gently — monthly rather than quarterly, flat rather than age-scaled, clothing only.

### Taschengeld second (October 2026)

| Alter | DJI-Spanne | Our amount |
|---|---|---|
| 14 | 25–45 € | **35 €** |
| 12 | 20–30 € | **25 €** |
| 11 | 15–25 € | **20 €** |
| | | **80 €/Monat** |

All monthly — all three are past the weekly/monthly switch, so we skipped the weekly stage entirely. This tier _is_ new money: €960/year added to outflow.

Both tiers run as Daueraufträge from my Girokonto on the 1st. Six standing orders total, and after the initial setup I don't touch them.

**Mid-band, not top-of-band.** Starting high leaves nowhere to go. The January review is the lever, and raising feels like progress while cutting feels like punishment.

**The gaps are deliberate.** 35 / 25 / 20 isn't rounding. The youngest should be able to see that getting older means getting more — that's the implicit promise that makes the oldest getting more tolerable. Don't flatten it in the name of fairness.

### Things we got wrong or nearly got wrong

**Introducing the obligatory envelope before the free-spending one is the easier sequence.** I'd have advised the reverse. In practice the clothing budget was already normal by the time Taschengeld arrived, so only one new concept had to land at a time.

**A flat rate stops self-correcting once it's ring-fenced.** When we spent the clothing money ourselves, €50 each was an average — overspend on the 14-year-old's coat, underspend on the 11-year-old, nets out. Per-child envelopes kill that averaging. The oldest is buying adult sizes and still growing; the youngest isn't. If she runs chronically short while the youngest accumulates a surplus, that's the flat rate failing, not her judgment — and the fix is adjusting the rate at review time, not topping up mid-stream.

**Monthly is harder than quarterly for clothing specifically.** A winter coat doesn't fit in a €50 envelope, so a monthly rhythm implicitly requires saving up across months. That's a more advanced skill than spending a quarterly lump sum. If monthly goes badly, quarterly is the easier version, not the harder one.

**Bank transfer costs you the handover moment.** We set up standing orders from day one, so there was never a cash-in-hand event. Money that exists only as a number in an app is less tangible, and the youngest especially may not register it as real. The substitute is opening the banking app together and looking at the balance — arguably better anyway, since that's the thing they'll be doing every month regardless.

### What we're watching for

- The first month's Taschengeld gone in week one. Expected; don't rescue, don't adjust the amount in response.
- Confusion between the two envelopes while they're still new.
- The first thing that wears out or stops fitting — that's the real test of whether the clothing handover registered. Until then nothing forces engagement with the money at all.
- Social comparison. If classmates report €50–60, that's often a sign those families have folded Budgetgeld into a single payment. Ask what the friends' money is actually expected to cover before renegotiating.

### Review

January, annually. Taschengeld against the then-current DJI table and actual inflation; clothing budget on two open questions — monthly vs. quarterly, and flat vs. age-scaled.

---

## Vocabulary

- **das Taschengeld** — pocket money, allowance
- **das Budgetgeld** — earmarked budget money for agreed categories
- **das Kleidergeld** — clothing allowance; the common informal term for the clothing slice of Budgetgeld
- **die Taschengeldtabelle** — the allowance reference table
- **der Taschengeldparagraf** — § 110 BGB
- **zweckgebunden** — earmarked, tied to a purpose
- **frei verfügbar** — freely available, no strings
- **der Dauerauftrag** — standing order
- **das Girokonto für Minderjährige** — current account for minors
- **die Gelderziehung** — money education, financial upbringing

## Sources

- Deutsches Jugendinstitut — [Taschengeld](https://www.dji.de/themen/jugend/taschengeld.html). Expertise _Taschengeld und Gelderziehung_, Langmeyer & Chabursky, September 2025, data basis DJI-Survey 2023.
- § 110 BGB (Taschengeldparagraf)
- DJI table as of 17.09.2025
