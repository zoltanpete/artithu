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

Expected:

```text
src/content/case-studies/
```

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
