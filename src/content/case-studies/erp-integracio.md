---
# Case Study 02 — canonical detail-page content for /munkaink/erp-integracio/.
# Every hu value below traces to DOC/06-CASE-STUDY-ARCHITECTURE.md's Case
# Study 02 evidence tables (Task 015/016). ERP vendor names (Oracle/
# Tandofer/Apollo/EcoLine), raw connection details, an exact ERP-replacement
# count, and customer identity are all GATED/DO_NOT_PUBLISH and do not appear
# anywhere below — the integration story is told at the same caveated,
# no-vendor-names level as DOC/06's own "Allowed" example. `industry` is
# unstated (DOC/06 explicitly un-confirms the old HVAC tag for this case) and
# is not asserted here. Accessible descriptions carried both locales from
# Task 016 already; `en` on every other field added Task 018 — same
# claim-by-claim evidence-parity discipline as `uzemi-rendszer.md` (see that
# file's own header comment), and the same absence of any ERP vendor name,
# raw connection detail, exact ERP-replacement count, or customer identity.
caseId: case-02
slug: erp-integracio
title:
  hu: "A rendszer, amely több ERP-t is túlélt."
  en: "The system that outlasted several ERP generations."
essence:
  hu: "A környező rendszerek cserélődtek — az üzleti működési réteg megmaradt."
  en: "The surrounding systems changed — the business operating layer remained."
summary:
  hu: "Egy kifejezetten erre a vállalatra épített rendszer, amely évtizedeken át együtt fejlődött a cég igényeivel, és közben több háttérrendszer-generációt is túlélt."
  en: "A system built specifically for this company, which evolved alongside its needs for decades — and outlasted several backend-system generations along the way."
evidenceBadge:
  hu: "Használatban — története 2002-ig visszakövethető"
  en: "In use — history traceable to 2002"

screenshots:
  - id: plan-vs-actual
    image: "../../assets/case-studies/case-02-plan-vs-actual.png"
    alt:
      hu: "Képernyőkép egy munkaszámokhoz tartozó terv–tény pénzügyi kimutatásról, amely árbevétel, anyagköltség, bérköltség, alvállalkozói költség és fedezeti mutatók oszlopait tartalmazza egy táblázatos nézetben."
      en: "Screenshot of a plan-versus-actual financial table for work items, showing columns for revenue, material cost, labor cost, subcontractor cost, and margin figures in a tabular view."
    caption:
      hu: "Terv–tény összevetés munkaszámonként."
      en: "Plan-versus-actual comparison, per work item."
  - id: cost-summary
    image: "../../assets/case-studies/case-02-cost-summary.png"
    alt:
      hu: "Képernyőkép egy vállalkozási és szállítási költségösszesítőről, amely beszállítói tételeket és azok költségeit sorolja fel egy táblázatos kezelőfelületen."
      en: "Screenshot of a contracting and delivery cost summary listing vendor line items and their costs in a tabular interface."
    caption:
      hu: "Beszállítói és szállítási költségek összesítése — a rendszer az ERP felé irányuló pénzügyi és beszerzési adatokat is megjeleníti."
      en: "Vendor and delivery cost summary — the system also surfaces the financial and procurement data flowing toward the ERP."

sections:
  hero:
    eyebrow:
      hu: "Rendszerintegráció és automatizáció"
      en: "Systems integration and automation"
    statement:
      hu: "A rendszer nem azért maradt hasznos évtizedeken át, mert változatlan maradt — hanem mert a mögötte lévő üzleti működési réteg minden háttérrendszer-cserét túlélt."
      en: "The system didn't stay useful for decades because it stayed unchanged — it stayed useful because the business operating layer behind it survived every backend-system change."
  startingSituation:
    headline:
      hu: "Egy cégre szabott rendszer, amely a vállalat igényeivel együtt fejlődött"
      en: "A system built for one company, evolving alongside its needs"
    body:
      hu: "A rendszert kifejezetten ehhez a — mintegy 100–150 főt foglalkoztató — vállalathoz fejlesztették, fejlesztése körülbelül 2002-ben kezdődött, és az elmúlt körülbelül tíz évben viszonylag stabil, nagyobb újrafejlesztés nélküli időszakot élt meg. A rendszer ma is teljes körű, aktív használatban van, és munkaszám-kezelést, státuszkövetést, fizetési és számlázási mérföldköveket, jelentéskészítést, projektköltség-tervezést, terv–tény összevetést, partnerkezelést, mini CRM-et, valamint szerviz-, tervezési, gyártási és szállítási feladatokat és naplózást fog át."
      en: "The system was built specifically for this company — which employs roughly 100–150 people — with development beginning around 2002; over roughly the last ten years it has gone through a relatively stable period without major redevelopment. The system is still in full, active use today, and covers work-number management, status tracking, payment and invoicing milestones, reporting, project-cost planning, plan-versus-actual comparison, partner management, a mini CRM, and service, design, manufacturing, and delivery tasks and logging."
  practice:
    headline:
      hu: "Projektek terv–tény összevetése a napi működésben"
      en: "Plan-versus-actual project comparison in daily operation"
    body:
      hu: "A rendszer az ERP-ben tárolt adatokkal veti össze a projektek tervezett és tényleges költségeit — ez adja az üzemeltetési kontroll napi alapját."
      en: "The system compares projects' planned and actual costs against data held in the ERP — this is the daily basis of operational control."
    screenshotId: plan-vs-actual
  integrations:
    headline:
      hu: "Több háttérrendszer-generáció, egy megmaradó működési réteg"
      en: "Several backend-system generations, one operating layer that remained"
    body:
      hu: "A rendszer élete során a tulajdonos elmondása szerint körülbelül két-három alkalommal cserélődött a mögöttes háttérrendszer-környezet. A rendszer több, egymást követő háttérrendszer-generáció idején is megőrizte a szerepét, miközben a mögöttes ERP-környezetek cserélődtek — közvetlen adatbázis-kapcsolatokon, célzottan kialakított interfészeken és dedikált jogosultságokon keresztül, munkaszámok, pénzügyi adatok, partneradatok, valamint készlet- és szállítási információk irányába."
      en: "Over the system's lifetime, according to the owner, the underlying backend-system environment changed roughly two to three times. The system kept its role through several successive backend-system generations while the underlying ERP environments changed — through direct database connections, purpose-built interfaces, and dedicated permissions, feeding work numbers, financial data, partner data, and inventory and shipping information."
    screenshotId: cost-summary
  businessResult:
    headline:
      hu: "A vállalat üzemeltetési munkafelülete"
      en: "The company's operational work surface"
    body:
      hu: "A rendszer a vállalat üzemeltetési munkafelületeként működött: a vezetők itt találták meg az áttekintéshez szükséges információt, a munkatársak itt találták meg a napi munkájukhoz szükségeset, és fontos vállalati folyamatok épültek köré. Nem szó szerint minden zajlott a rendszerben — a szerepe központi volt, nem teljes körű —, de a rendszer azért élte túl a környező rendszerváltásokat, mert az általa megtestesített üzleti folyamat fontos és jó minőségű volt."
      en: "The system functioned as the company's operational work surface: managers found the overview information they needed there, staff found what they needed for daily work there, and important company processes were built around it. Not literally everything ran through the system — its role was central, not total — but the system outlasted the surrounding system changes because the business process it embodied was important and high quality."
  longTerm:
    headline:
      hu: "Történet, amely 2002-ig visszakövethető"
      en: "A history traceable to 2002"
    body:
      hu: "A rendszer története a Classic ASP-korszakból származó archivált adatbázisokig, illetve egy 2003-as, a »tervtár« funkcióhoz készült felhasználói útmutatóig vezethető vissza — a rendszer története tehát 2002-ig visszakövethető. Az architektúra azóta Classic ASP-ről ASP.NET Web Formsra fejlődött, miközben az általa kiszolgált üzleti folyamat és működési modell folyamatosan hasznos és üzemelő maradt."
      en: "The system's history traces back to archived databases from the Classic ASP era, and to a 2003 user guide written for the »tervtár« (plan-archive) function — so the system's history is traceable to 2002. The architecture has since evolved from Classic ASP to ASP.NET Web Forms, while the business process and operating model it served remained continuously useful and operational."
  learned:
    headline:
      hu: "Amit ez mutat az ARTIT működéséről"
      en: "What this shows about how ARTIT works"
    body:
      hu: "Az integráció és a hosszú távú gondozás ugyanolyan fontos, mint az induló fejlesztés — a környező rendszerek generációi cserélődhetnek, miközben a valódi üzleti működési réteg megmarad és hasznos marad."
      en: "Integration and long-term stewardship matter just as much as the initial build — the generations of surrounding systems can change while the real business operating layer remains, and stays useful."

directionLink:
  label:
    hu: "Rendszerintegráció és automatizáció →"
    en: "Systems integration and automation →"
  href: /egyedi-fejlesztes/#systems-integration

finalCta:
  headline:
    hu: "Hasonló a helyzete?"
    en: "Facing something similar?"
  copy:
    hu: "Ha a rendszerei külön-külön már megvannak, csak éppen nem kommunikálnak egymással, érdemes átbeszélni, hol keletkezik a súrlódás."
    en: "If your systems already exist on their own, but simply don't talk to each other, it's worth discussing where the friction is coming from."
  cta:
    label:
      hu: "Beszéljük át a problémát →"
      en: "Let's talk about your problem →"
    href: /kapcsolat/

seo:
  title:
    hu: "ARTIT — A rendszer, amely több ERP-t is túlélt"
    en: "ARTIT — The system that outlasted several ERP generations"
  description:
    hu: "Esettanulmány: egy cégre szabott rendszer, amelynek története 2002-ig vezethető vissza, és amely több háttérrendszer-generációt is túlélt."
    en: "Case study: a system built for one company, with a history traceable to 2002, that outlasted several backend-system generations."
---

Esettanulmány 02 — a teljes narratíva a `sections` mezőkben él (frontmatter), a fájltest nem kerül renderelésre.
