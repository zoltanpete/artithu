## Font provenance (Task 004B)

Both families are distributed under the SIL Open Font License 1.1 (`WORK-SANS-OFL.txt`, `SPACE-MONO-OFL.txt` in this directory — copied verbatim from the upstream `google/fonts` repository).

### Work Sans (variable)

- Designer: Wei Huang
- Upstream: `google/fonts` `ofl/worksans` (gstatic build `v24`)
- Files fetched 2026-08-16 from `https://fonts.gstatic.com/s/worksans/v24/...` (the same binaries `fonts.googleapis.com` serves)
- `work-sans-variable-latin.woff2` — Basic Latin subset (ASCII + Latin-1 accented characters: á, é, í, ó, ö, ú, ü, …), weight axis 100–900
- `work-sans-variable-latin-ext.woff2` — Latin Extended-A subset (Hungarian double-acute characters: Ő, ő, Ű, ű, and related Central European glyphs), same weight axis

### Space Mono (static, Regular only)

- Designer: Colophon Foundry
- Upstream: `google/fonts` `ofl/spacemono` (gstatic build `v17`)
- Files fetched 2026-08-16 from `https://fonts.gstatic.com/s/spacemono/v17/...`
- `space-mono-400-latin.woff2` / `space-mono-400-latin-ext.woff2` — same latin / latin-ext split, weight 400 only

### Why two files per family

Google's own subsetting splits Basic Latin and Latin Extended-A into separate files so a browser only downloads what a page actually needs. Hungarian text needs both (ASCII/Latin-1 from `latin`, Ő/ő/Ű/ű from `latin-ext`), so both are vendored and loaded via `unicode-range` in `src/styles/fonts.css` — this mirrors Google's own delivery strategy while removing the runtime request to `fonts.googleapis.com`/`fonts.gstatic.com`.

### Why no Bold Space Mono

Task 004B scope only calls for Space Mono in restrained metadata labels, which do not require a bold cut. Add `space-mono-700-*.woff2` from the same upstream source only if a real design need appears later.
