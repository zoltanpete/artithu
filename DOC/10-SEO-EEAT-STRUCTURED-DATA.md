# ARTIT.hu — SEO, E-E-A-T and Structured Data

## Principle

SEO is part of information and content architecture, not a layer added after implementation.

Do not optimize pages by creating thin content solely for keywords.

## Foundations

Every indexable page should have:

- unique title;
- meaningful meta description;
- canonical;
- Open Graph metadata;
- semantic heading hierarchy;
- crawlable HTML;
- meaningful internal links.

Site-level:

- XML sitemap;
- robots configuration;
- stable URLs;
- production 404 behavior.

## E-E-A-T

Treat E-E-A-T as a content quality/trust framework, not a single ranking factor.

### Experience

Show:

- real software;
- real screenshots;
- 10–20+ year project histories;
- real business processes;
- long-term evolution.

### Expertise

Demonstrate:

- business-process reasoning;
- custom-vs-standard decision logic;
- integration experience;
- first-hand lessons from case studies.

### Authoritativeness

Build through:

- detailed case studies;
- consistent expertise;
- own product;
- later, genuine knowledge content.

### Trust

Use:

- real people;
- verified claims;
- clear organization information;
- clear ARTIT ↔ Tardify relationship;
- transparent contact information;
- no invented metrics, quotes or testimonials.

## Entity clarity

ARTIT should be represented consistently as an organization.

Tardify relationship:

> A Tardify az ARTIT saját fejlesztésű üzleti szoftvere.

The relationship should be reflected consistently in visible content and structured data where semantically valid.

## Structured data

Use JSON-LD.

### Organization

Implement with verified organization information.

Potential properties:

- name;
- legalName;
- url;
- logo;
- email;
- telephone;
- address;
- sameAs.

Do not invent or publish incomplete guesses.

### BreadcrumbList

Use on hierarchical internal pages.

### WebSite / WebPage

Use only where semantically useful.

### Article / BlogPosting

Future knowledge content only.

### Case studies / services

Do not force a schema type merely because schema.org contains one.

Before using a type verify:

1. semantic correctness;
2. search engine relevance/support;
3. visible content matches markup.

## AI search

Do not implement unsupported "AI SEO" hacks automatically.

Priority:

- crawlable HTML;
- explicit entities;
- clear claims;
- first-hand evidence;
- high information density;
- strong context;
- valid structured data.

Do not automatically add:

- mass FAQ content;
- artificial GEO pages;
- `llms.txt`;
- hidden AI-targeted copy.

These require separate decisions.

## Internal linking

Link by meaning, not SEO pattern.

Primary graph:

- homepage → service pages;
- service pages → relevant case studies;
- case studies → relevant services;
- ARTIT → Tardify;
- trust/about → contact.

## Content validation

All longevity, customer and integration claims must be verified before publication.

See `13-CONTENT-GAPS-AND-VALIDATION.md`.
