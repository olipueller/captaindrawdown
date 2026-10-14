---
title: "I checked ~650 CDR companies. 14 will sell you a tonne."
date: 2026-10-14T10:50:17.782281+02:00
slug: "cdr-shops-sweep"
tags: ["cdr-market", "analysis", "cdr-shops"]
content_type: "type5_handwritten"
hand_written: "true"
cover:
  image: "/images/posts/cdr-shops-sweep.png"
  alt: "I checked ~650 CDR companies. 14 will sell you a tonne."
  hidden: false
---

Exactly 14 of the roughly 650 carbon removal companies I checked this week will sell an individual a tonne of durable CDR online, with a credit card, right now. That is 2 in 100. I went looking the way a buyer would, and this is the accounting.

## The sweep covered three registries and 566 company websites

A year ago [Dirk Paessler built cdr-shops.com](https://www.carbon-drawdown.de/blog/2025-8-21-everybody-agrees-we-need-more-cdr-buyers-but-did-you-ever-try-to-buy-certificates-yourself) after trying to buy 200 tonnes of CDR for the Carbon Drawdown Initiative and ending up in sales calls. This month the Initiative rebuilt the directory, and I did the crawling: all 60 suppliers on [Isometric](https://registry.isometric.com) (78 projects), all 70 suppliers on [Puro.earth](https://registry.puro.earth) (119 projects), all 51 durable-CDR suppliers on [Rainbow](https://registry.rainbowstandard.io) (137 projects; the French registry formerly known as Riverse), plus the 566 reachable supplier websites in [the company database I maintain]( (1,814 CDR companies tracked). I looked for checkout pages, embedded payment widgets, Shopify and WooCommerce storefronts, and buy links buried three clicks deep.

Of the 566 websites, 210 showed shop signals. 32 survived a closer look. **After manual verification of every candidate, 14 real checkouts remained.**

## At 98 of 100 CDR companies, a retail buyer lands at a sales team

The near-misses are instructive. One storefront exists but requires an access code before it shows a buy button; two suppliers run on that same gated platform. One genuine Shopify checkout was sold out, a limited release of 50 CORCs at 2,900 SEK each. One WooCommerce product page sits at "out of stock". One shop still has lorem ipsum in its product descriptions. Puro closed its own consumer marketplace in 2022, and Rainbow sells only to KYC-verified business accounts. Everything else is a contact form, a quote request, or a Calendly link.

**The most consumer-grade buying experience in carbon removal today is run by a one-person reseller.** [Remove Carbon Today](https://www.removecarbontoday.com/), founder-funded, buys certified Puro CORCs and retires them in the buyer's name in the public registry within a month, at €198 per tonne. Selling one tonne to one person is a job the suppliers themselves have left to a volunteer-scale middleman.

## The directory lost 3 of its 14 shops within one year

Three of last year's 14 shops stopped selling online within twelve months: one purchase page vanished, one vendor switched to contact-only, one webshop was shut down. Three new entries replaced them, two of them suppliers using Isometric's embedded Stripe checkout, plus the reseller. Prices across the 14 working checkouts run from €142 to US$1,000 per tonne of CO₂, a 7x spread nobody can arbitrage because nobody can comparison-shop. The top-rated shop cut its price from €400 to €300 per tonne this year, a 25% drop, and as far as I can tell nobody noticed. There was no shop window to notice it in.

## Demand shows up when someone pays to fetch it

The Initiative tested the demand side with money: [€8,700 of Facebook and Instagram ads](https://www.carbon-drawdown.de/blog/2026-2-4-can-you-profitably-sell-cdr-certificates-using-online-marketing) bought 11,300 visitors at €0.76 each over about two months, and the directory passed 276 of them (2.4%) straight to a shop. The other months tell the organic story: 22 to 109 visitors per month, 84 visitors from Google search in a full year, and 23 referrals from ChatGPT. That last number is the one I watch. AI assistants have started citing the directory when people ask where to buy carbon removal, and vendors now write in for exactly that reason. **A CDR company without a checkout is invisible to the next generation of buying advice.**

## The fix already exists as a widget

Isometric ships an embeddable Stripe checkout; three of the 14 shops are that widget on a page. If Isometric, Puro and Rainbow offered every validated supplier a hosted "sell one tonne" page, the number of real CDR shops could grow tenfold without any supplier building commerce infrastructure. Dirk Paessler makes the longer argument on the Initiative's blog: [One year later, and buying CDR certificates is still hard](https://www.carbon-drawdown.de/blog/2026-10-14-one-year-later-and-buying-cdr-certificates-is-still-hard).

My part is upkeep. On the 5th of every month I now re-check all 14 shop links, read the live checkout prices, probe the sold-out and half-built near-misses, and diff both open registry APIs for new suppliers; corrections land on [cdr-shops.com](https://www.cdr-shops.com) the same day. If you run a CDR company with a working card checkout I missed, one email to info@carbon-drawdown.de gets you listed, free. If you run one without a checkout: that is the first thing worth building.