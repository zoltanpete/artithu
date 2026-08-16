# ARTIT.hu — Content Model

## Principle

Model only content that has a real editorial or reuse need.

Do not create abstractions or fields solely because they might be useful someday.

Separate:

- editorial content;
- site configuration;
- structured data/entity data;
- UI-only component props.

## Proposed entities

### SiteSettings

Potential fields:

```text
siteName
siteUrl
defaultTitle
defaultDescription
defaultOgImage
language
contact
social
organization
```

### Organization

Potential fields:

```text
name
legalName
url
logo
email
telephone
address
sameAs[]
```

Only publish verified values.

### NavigationItem

```text
label
href
children[]
external
```

### Person

For real expert identity only.

Potential fields:

```text
name
role
bio
image
sameAs[]
```

Do not create fictional team members or placeholder biographies.

### CaseStudy

Recommended first-pass model:

```text
title
slug
summary
industry
companySize
status
lifecycle
featured
services[]
heroImage
screenshots[]
timeline[]
relatedServices[]
seo
```

Body content should remain flexible Markdown/MDX where appropriate.

Avoid modeling every paragraph as a structured field.

#### Implemented foundation schema (Task 003)

The Task 003 `case-studies` collection implements only the following subset, defined in `src/content.config.ts`:

```text
title
summary
industry
companySize
status
lifecycle
featured
services[]
heroImage
seo { title, description, noindex }
```

`slug` is not a schema field: the collection's `glob()` loader generates entry IDs from filenames.

`screenshots`, `timeline` and `relatedServices` were intentionally deferred — there is no real image/timeline data yet, and adding them now would model structure ahead of need. Add them when a real case study is first implemented.

### Screenshot

Potential structure:

```text
src
alt
caption
context
status
```

Optional metadata:

```text
system
lifecycle
screen
```

### TimelineItem

```text
dateOrLabel
title
description
verified
```

Never publish unverified dates.

### SEO

```text
title
description
canonical
ogImage
noindex
```

## Homepage content

Decision pending during scaffold:

- keep homepage editorial copy close to the page when unique;
- move reusable proof/project data into content/config;
- do not create a CMS-like schema for every homepage section unless reuse justifies it.

## Future knowledge content

Do not implement the knowledge-base schema until `/tudastar/` is approved.

Likely future fields:

```text
title
description
publishedAt
updatedAt
author
topics[]
seo
```

## Content collections

Implemented (Task 003):

```text
src/content.config.ts        — collection config (current Astro convention)
src/content/case-studies/    — case study entries
```

The `case-studies` collection uses the `glob()` loader (`astro/loaders`) with a Zod schema imported from `astro/zod`. This is the current official Content Collections pattern and is the convention future collections should follow.

Future:

```text
src/content/articles/
```

Use Astro Content Collections with runtime/schema validation.

## Validation states

For project facts use explicit editorial status when needed:

- `VERIFIED`
- `TO_VERIFY`
- `UNKNOWN`
- `DO_NOT_PUBLISH`

Do not expose validation metadata in production UI unless intentional.

Note: the `CaseStudy.status` schema field (Task 003) is an operational/lifecycle status (e.g. system still active), not this editorial validation state. Keep the two concepts separate if a dedicated validation-state field is added later.

## Development fixtures

Content collections may contain an unmistakably non-public fixture entry (filename prefixed `_dev-`, title/summary stating it is dev-only) to validate the schema/pipeline when no real, verified entries exist yet. Never route or render a dev fixture on a real page, and never use it as a source of ARTIT facts.
