---
title: "Captain Drawdown Data: release 2026-11"
date: 2026-11-04T14:10:15.329897+01:00
slug: "captain-drawdown-data-release-2026-11"
tags: ["data", "announcement"]
content_type: "type17_announcement"
hand_written: "true"
# Withdrawn 2026-11-05 (Dirk): numbers outdated by the relaunch decisions; the
# approved launch post replaces this file at the same URL on 2026-11-10.
draft: true
cover:
  image: "/charts/directory-size-by-pathway.png"
  alt: "Captain Drawdown Data: release 2026-11"
  hidden: false
---

Today I am publishing my data as data: three datasets on carbon dioxide removal, versioned, licensed, citable, with a JSON API and an MCP server. Release 2026-11, data as of 4 November.

**969 published carbon removal companies** out of 1,470 active companies in my directory (buyers and unreviewed entries stay unpublished), with primary pathway, country, liveliness tier, EU SME size class, registries and evidence dates, from 66 countries. 427 of them are based in Europe (EU27 plus the UK, Switzerland, Norway and the other non-EU countries), 291 in the United States. [Data page](/data/companies/), CSV and JSON, licence Creative Commons Attribution-NonCommercial-ShareAlike 4.0.

**95,329 researchers** who published at least one paper on carbon removal since 2021, built from OpenAlex and ORCID, from 182 countries and 15,311 institutions, with a calibrated estimate of 88,179 for the true population. The files are aggregates by country, pathway and sector, plus top-100 lists per pathway worldwide and top-50 lists for Europe, ranked by papers since 2021 with a citation rank beside it. [Data page](/data/researchers/), licence Creative Commons Attribution 4.0.

**14 shops** where a person can buy certified removal with a live checkout, with prices, certifiers and delivery times. [Data page](/data/shops/), licence Creative Commons Attribution 4.0.

## What changed on this site

Headcounts are gone. The directory used to show employee counts and follower numbers per company; those came from a licensed data provider and may not be published, so every company now carries a size class instead (micro, small, medium, large, by EU SME thresholds). Among the 1,470 active companies, 575 are micro, 393 small, 181 medium and 211 large; 110 have no size data.

Researcher profile pages exist only for the roughly 630 people in the top lists. Everyone else in the census is counted in the aggregates and no longer has a page. The [privacy notice](/privacy/) explains the basis and how to have an entry corrected or removed.

## How to use it

- Download: every release is frozen under `/data/v1/2026-11/`, the newest also under `/data/v1/latest/`, with a [manifest](/data/v1/latest/manifest.json) listing checksums.
- API: read-only JSON under [/api/v1/](/api/), for example `/api/v1/companies/climeworks.json` or `/api/v1/researchers/top/dac.json`. Every response carries version, date, licence and citation.
- Assistants: the [MCP server](/api/#mcp-server-for-claude-chatgpt-and-cursor) exposes the same data as ten tools for Claude, ChatGPT and Cursor.
- Cite: "Captain Drawdown / Carbon Drawdown Initiative (2026). CDR Company Directory, version 2026-11. Releases follow monthly around the 15th; corrections go to info@carbon-drawdown.de and appear in the [changelog](/data/changelog/). The daily Log stops with #308; from Friday a weekly summary takes its place, and the data releases are what this page is for from now on.