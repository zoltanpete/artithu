---
# Case Study 01 — canonical detail-page content for /munkaink/uzemi-rendszer/.
# Every hu value below traces to DOC/06-CASE-STUDY-ARCHITECTURE.md's Case
# Study 01 evidence tables (Task 015/016) — either a direct quote of an
# "Allowed" wording example, or a faithful synthesis of an OWNER_VALIDATED /
# VERIFIED / APPROXIMATE row. No GATED or DO_NOT_PUBLISH claim is restated
# here (no Tardify lineage, no exact unbroken decade claim, no calculated
# active-user count). `whyNotEnough`, `solutionLogic`, `integrations`, and
# `businessResult` are intentionally omitted — DOC/06's own "Proposed content
# architecture" flags this case's evidence for those sections as too thin,
# and "operational coverage" is folded into `startingSituation` rather than
# forced into its own section. Accessible descriptions (`screenshots[].alt`)
# carried both locales from Task 016 already, matching the SystemMap/
# OperatingFitField precedent. `en` on every other field added Task 018 — a
# natural-English adaptation, not a literal translation; every claim was
# checked sentence-by-sentence against this same evidence matrix so nothing
# is strengthened, hedged differently, or dated/counted differently than the
# Hungarian (see TASK/018-english-production-locale.md §28 "Evidence parity").
caseId: case-01
slug: uzemi-rendszer
title:
  hu: "Egy üzemi rendszer, amely egy évtizede teszi a dolgát."
  en: "An operational system that has been doing its job for a decade."
essence:
  hu: "A jó üzleti szoftvert nem kell folyamatosan újratervezni ahhoz, hogy hasznos maradjon."
  en: "Good business software doesn't need constant reinvention to stay useful."
summary:
  hu: "Egy már érett ARTIT-rendszert igazítottunk egy induló vállalkozás működéséhez — és azóta, kisebb finomításokkal, folyamatosan használatban van."
  en: "We adapted an already-mature ARTIT system to a newly-launched business's operations — and it has been in continuous use since, with only minor refinements."
evidenceBadge:
  hu: "Használatban — kb. egy évtizede"
  en: "In use — for about a decade"

screenshots:
  - id: maintenance-scheduling
    image: "../../assets/case-studies/case-01-maintenance-scheduling.png"
    alt:
      hu: "Képernyőkép egy ütemezési nézetről, amely gépcsaládonkénti és tevékenységenkénti karbantartási feladatokat listáz egy táblázatos kezelőfelületen."
      en: "Screenshot of a scheduling view listing maintenance tasks by equipment family and activity type in a tabular interface."
    caption:
      hu: "Karbantartás-ütemezés a napi működésben."
      en: "Maintenance scheduling in daily operation."
  - id: quotation-management
    image: "../../assets/case-studies/case-01-quotation-management.png"
    alt:
      hu: "Képernyőkép egy ajánlatkezelő nézetről, amely egy munkaszámhoz tartozó ajánlat részleteit és az ajánlatkérő adatait mutatja egy listás kezelőfelületen."
      en: "Screenshot of a quotation-management view showing a work item's quotation details and the requesting party in a list-based interface."
    caption:
      hu: "Ajánlatkezelés — visszakereshető ajánlat- és értékesítési előzményekkel."
      en: "Quotation management — with searchable quotation and sales history."

sections:
  hero:
    eyebrow:
      hu: "Egyedi üzleti alkalmazás"
      en: "Custom business application"
    statement:
      hu: "Egy jól illeszkedő rendszer nem azért marad hasznos egy évtizeden át, mert újra és újra újraépítik — hanem mert eleve jól illeszkedett a működéshez."
      en: "A well-fitting system doesn't stay useful for a decade because it keeps getting rebuilt — it stays useful because it fit the operation well from the start."
  startingSituation:
    headline:
      hu: "Egy induló vállalkozás, és egy már érett rendszer"
      en: "A new business, and an already-mature system"
    body:
      hu: "A vállalkozás a nulláról indult, és a rendszer bevezetése körülbelül egy hónappal a működés kezdete után történt — nem egyedi fejlesztésről van szó, hanem egy már érett, kipróbált ARTIT-rendszer igazításáról az ügyfél működéséhez. A rendszer azóta munkaszám-kezelést, szerződéskezelést, karbantartás-ütemezést, ajánlatkezelést, karbantartási szerződések kezelését, hibabejelentést, munkalapokat, a kész munkák számlázás előtti előkészítését, jóváhagyást és partnernyilvántartást fog át."
      en: "The business started from zero, and the system was introduced about a month after operations began — this wasn't a custom build from scratch, but the adaptation of an already-mature, proven ARTIT system to the client's operations. Since then, the system has covered work-number management, contract management, maintenance scheduling, quotation management, maintenance-contract management, fault reporting, work orders, preparing completed work for invoicing, approval, and partner records."
  practice:
    headline:
      hu: "Karbantartás-ütemezés a napi működésben"
      en: "Maintenance scheduling in daily operation"
    body:
      hu: "A bevezetés után elsősorban kisebb finomításokra volt szükség, nagyobb funkcionális újrafejlesztésre nem — a rendszer illeszkedett a működéshez, nem fordítva."
      en: "After rollout, what was mainly needed was minor refinement, not major functional redevelopment — the system fit the operation, not the other way around."
    screenshotId: maintenance-scheduling
  concreteExample:
    headline:
      hu: "Ajánlatkezelés — mielőtt és miután"
      en: "Quotation management — before and after"
    before:
      hu: "Korábban az ajánlatok követése nehézkes, áttekinthetetlen volt."
      en: "Previously, tracking quotations was difficult and hard to follow."
    after:
      hu: "Ma a kollégák egy közös rendszert használnak: az ügyfelekhez és cégekhez tartozó ajánlat- és értékesítési előzmények visszakereshetők, és nyomon követhető, mit ajánlottak, és hogyan alakult egy adott lehetőség."
      en: "Today, colleagues use one shared system: quotation and sales history tied to customers and companies is searchable, and it's possible to track what was quoted and how a given opportunity developed."
    screenshotId: quotation-management
  longTerm:
    headline:
      hu: "Egy évtizede — dokumentált nyomokkal"
      en: "A decade — with documented traces"
    body:
      hu: "A rendszer 2017-es használatát rendszeradatok igazolják, és azóta — a tulajdonos elmondása szerint — folyamatosan, körülbelül egy évtizede használatban van, más rendszer bevonása nélkül ezekre a funkciókra."
      en: "System records confirm the system's use in 2017, and since then — according to the owner — it has been in continuous use for about a decade, with no other system involved for these functions."
  learned:
    headline:
      hu: "Amit ez mutat az ARTIT működéséről"
      en: "What this shows about how ARTIT works"
    body:
      hu: "A jó üzleti szoftvert nem kell folyamatosan újratervezni ahhoz, hogy hasznos maradjon — elég, ha jól illeszkedik a működéshez, és hosszú távon karban van tartva. Ugyanez a szemlélet áll az ARTIT munkájának középpontjában is: a működés megértése megelőzi a technológiai döntést."
      en: "Good business software doesn't need constant reinvention to stay useful — it just needs to fit the operation well and be maintained over the long term. The same approach is at the center of ARTIT's own work: understanding the operation comes before the technology decision."

directionLink:
  label:
    hu: "Egyedi üzleti alkalmazások →"
    en: "Custom business applications →"
  href: /egyedi-fejlesztes/#custom-applications

finalCta:
  headline:
    hu: "Ismerős a helyzet?"
    en: "Sound familiar?"
  copy:
    hu: "Nem kell kész specifikációval érkeznie. Elég, ha elmondja, hogyan működik most a folyamat, és mit szeretne jobban csinálni."
    en: "You don't need to arrive with a finished specification. It's enough to describe how the process works today and what you'd like to do better."
  cta:
    label:
      hu: "Beszéljük át a problémát →"
      en: "Let's talk about your problem →"
    href: /kapcsolat/

seo:
  title:
    hu: "ARTIT — Egy üzemi rendszer, amely egy évtizede teszi a dolgát"
    en: "ARTIT — An operational system that has been doing its job for a decade"
  description:
    hu: "Esettanulmány: egy meglévő ARTIT-rendszer igazítása egy induló vállalkozás működéséhez, és tíz év után is aktív használatban."
    en: "Case study: an existing ARTIT system adapted to a newly-launched business's operations, still in active use after ten years."
---

Esettanulmány 01 — a teljes narratíva a `sections` mezőkben él (frontmatter), a fájltest nem kerül renderelésre.
