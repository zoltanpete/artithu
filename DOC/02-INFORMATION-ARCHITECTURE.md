# ARTIT.hu — Information Architecture

## IA principle

The site should guide the visitor through:

> recognition → understanding → solution → evidence → trust → contact

## Accepted sitemap

```text
/
├── egyedi-fejlesztes/
│   ├── uzleti-alkalmazasok/
│   └── rendszerintegracio/
├── munkaink/
│   └── [case-study]/
├── tardify/
├── rolunk/
└── kapcsolat/

Later:
└── tudastar/
```

**Bilingual route map (Task 018)**: the tree above is the canonical HU shape; every real route in it now has a live English counterpart under `/en/` with a natural-English slug (not the Hungarian slug reused behind a prefix) — see `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`'s "Task 018 — Bilingual route map" for the full HU↔EN table. The IA/journey structure itself (recognition → understanding → solution → evidence → trust → contact) is identical in both locales; only the URL words differ.

## Key IA decision

There is no dedicated `/folyamatdigitalizalas/` page in v1.

Process digitalization is a horizontal competency that appears throughout:

- homepage;
- custom development pillar page;
- business applications page;
- case studies;
- future knowledge content.

Reopen only if later search/content research supports a genuinely independent intent.

## Page roles

### `/`

Role: positioning + qualification.

Visitor question:

> Can ARTIT solve the kind of business software problem we have?

Primary goal:

Make ARTIT's relevance clear within seconds.

Primary CTA:

> Beszéljünk a projektről

Secondary CTA:

> Munkáink megtekintése

### `/egyedi-fejlesztes/`

Role: pillar page.

Visitor question:

> When is custom software justified?

Primary goal:

Explain when custom development makes sense and when it does not.

Primary CTA:

> Beszéljük át a problémát

### `/egyedi-fejlesztes/uzleti-alkalmazasok/`

Visitor question:

> We need a system that matches our own operation. Can ARTIT build it?

Primary goal:

Show how special business processes are translated into business applications.

Primary proof:

Case Study 01.

### `/egyedi-fejlesztes/rendszerintegracio/`

Visitor question:

> Our systems already exist, but they do not work well together.

Primary goal:

Show that replacement is not always necessary and explain integration/automation.

Primary proof:

Case Study 02.

### `/munkaink/`

Visitor question:

> Have they actually done this?

Primary goal:

Prove ARTIT's claims through real work.

E-E-A-T role:

Primary Experience hub.

### `/munkaink/[case-study]/`

Primary goal:

Provide deep first-hand evidence.

Narrative:

problem → context → decision → system → result → long-term evolution.

**Implementation status (Task 016)**: implemented as `/munkaink/uzemi-rendszer/` (Case Study 01) and `/munkaink/erp-integracio/` (Case Study 02) — two static routes, not a dynamic `[case-study]` route (the bracket notation above described the *shape*, not literally a dynamic-route filename; see `03-SITEMAP-AND-PAGE-ARCHITECTURE.md`'s "Case-study canonical route architecture" for the reasoning). See `06-CASE-STUDY-ARCHITECTURE.md` for the full content and evidence basis.

### `/tardify/`

Visitor question:

> What is Tardify and what is its relationship to ARTIT?

Primary goal:

Clarify product relationship and demonstrate product-development expertise.

Do not recreate tardify.hu.

### `/rolunk/`

Visitor question:

> Who is behind ARTIT and can I trust them with an important system?

Primary goal:

Trust.

Focus:

- who;
- senior collaboration;
- software philosophy;
- long-term thinking;
- Tardify relationship;
- working model.

### `/kapcsolat/`

Visitor question:

> I want to discuss the project.

Primary goal:

Convert a qualified visitor into a conversation.

Friction-reducing principle:

No finished specification is required.

### `/tudastar/` — later

Do not launch an empty blog.

Only create when genuine first-hand expert content is available.
