// Competitor comparison data. Kept in English — competitor names & feature claims
// are universal. UI chrome (headings, CTAs) is localized via translations.js.

// Verdict values: "yes" | "partial" | "no"
// Each row caption is a short label rendered in all locales (we localize via i18n keys
// at render time inside CompareMatrix.jsx using the keys below).

export const COMPARE_FEATURES = [
  { key: "ai_match",      i18n: "compare.features.ai_match" },
  { key: "outreach",      i18n: "compare.features.outreach" },
  { key: "eu_hosting",    i18n: "compare.features.eu_hosting" },
  { key: "dpa",           i18n: "compare.features.dpa" },
  { key: "pricing",       i18n: "compare.features.pricing" },
  { key: "ai_privacy",    i18n: "compare.features.ai_privacy" },
  { key: "multilang",     i18n: "compare.features.multilang" },
  { key: "speed",         i18n: "compare.features.speed" },
  { key: "migration",     i18n: "compare.features.migration" },
];

// Each competitor object:
// - slug:   anchor id
// - name:   public product name
// - tag:    one-line positioning (EN)
// - bestFor:array of strings (EN) "best for X"
// - weak:   array of strings (EN) "where AblyWorks wins"
// - pricing:short EN string
// - tldr:   3-bullet TL;DR (EN)
// - matrix: per-feature verdict map. Values "yes" | "partial" | "no".
export const COMPETITORS = [
  {
    slug: "workable",
    name: "Workable",
    tag: "Mature SMB ATS with broad job-board distribution",
    bestFor: ["Small teams that just need a clean ATS", "Distributing roles to 200+ job boards"],
    weak: [
      "AI matching is keyword-leaning — no explainable embedding scores",
      "Outreach is mostly email; WhatsApp & multi-channel sequences not native",
      "GDPR controls are bolt-on rather than EU-native by design",
    ],
    pricing: "From ~$129–$149 / month (transparent, public).",
    tldr: [
      "Workable wins on job-board reach and price transparency.",
      "AblyWorks wins on AI depth, WhatsApp outreach, and EU-native compliance.",
      "Most teams switch when they outgrow basic screening and need real automation.",
    ],
    matrix: {
      ai_match:  "partial",
      outreach:  "partial",
      eu_hosting:"partial",
      dpa:       "yes",
      pricing:   "yes",
      ai_privacy:"partial",
      multilang: "partial",
      speed:     "partial",
      migration: "no",
    },
  },
  {
    slug: "greenhouse",
    name: "Greenhouse",
    tag: "Enterprise-grade structured hiring & reporting",
    bestFor: ["500+ employee enterprises", "Structured interview scorecards & deep BI reporting"],
    weak: [
      "Opaque enterprise pricing — usually 6-figure annual contracts",
      "US-centric by default; EU data residency requires custom setup",
      "AI features are recent add-ons rather than core to the matching engine",
    ],
    pricing: "Custom quote only · typically enterprise-tier.",
    tldr: [
      "Greenhouse is unmatched for structured enterprise hiring workflows.",
      "AblyWorks wins for fast-moving European teams that want AI-native matching, native GDPR/EU hosting, and transparent pricing.",
      "Common switch: scale-ups that don't need a 6-figure ATS bill yet.",
    ],
    matrix: {
      ai_match:  "partial",
      outreach:  "partial",
      eu_hosting:"partial",
      dpa:       "yes",
      pricing:   "no",
      ai_privacy:"partial",
      multilang: "partial",
      speed:     "partial",
      migration: "no",
    },
  },
  {
    slug: "bullhorn",
    name: "Bullhorn",
    tag: "Agency-centric ATS + CRM with placement workflows",
    bestFor: ["Staffing agencies juggling candidates & client placements", "Heavy back-office billing/timesheet integration"],
    weak: [
      "Interface feels dated — recruiters frequently complain of slow workflows",
      "Heavy implementation cost (consultants & add-ons) on top of seat pricing",
      "AI features are limited & non-explainable; multichannel outreach is bolt-on",
    ],
    pricing: "Custom quote · ~$99/user/mo+ plus setup & add-ons.",
    tldr: [
      "Bullhorn is the deepest agency-side feature set on the market.",
      "AblyWorks wins on speed, AI matching, transparent pricing, and EU-native compliance — without heavy implementation lift.",
      "Common switch: agencies tired of slow UX and surprise add-on bills.",
    ],
    matrix: {
      ai_match:  "no",
      outreach:  "partial",
      eu_hosting:"partial",
      dpa:       "yes",
      pricing:   "no",
      ai_privacy:"partial",
      multilang: "partial",
      speed:     "no",
      migration: "no",
    },
  },
  {
    slug: "recruitee",
    name: "Recruitee",
    tag: "Dutch ATS with collaborative hiring & EU compliance",
    bestFor: ["Mid-market European teams that need collaborative hiring", "Clear EU/GDPR positioning out of the box"],
    weak: [
      "AI matching is shallow — no explainable scoring or candidate enrichment",
      "Outreach automation is email-only; no native WhatsApp or LinkedIn sequencing",
      "Pricing climbs quickly above the Launch plan (€199/mo) once you need scale",
    ],
    pricing: "From €199/mo (Launch) · €349/mo (Scale) · custom Lead.",
    tldr: [
      "Recruitee shares our EU-first DNA but skews ATS-only.",
      "AblyWorks goes further with explainable AI matching, multichannel outreach, and a unified recruitment CRM in the same workspace.",
      "Most teams switch when manual outreach becomes the bottleneck.",
    ],
    matrix: {
      ai_match:  "no",
      outreach:  "no",
      eu_hosting:"yes",
      dpa:       "yes",
      pricing:   "partial",
      ai_privacy:"yes",
      multilang: "partial",
      speed:     "partial",
      migration: "no",
    },
  },
  {
    slug: "teamtailor",
    name: "Teamtailor",
    tag: "Branding-heavy ATS with career-site builder",
    bestFor: ["Employer-brand-led teams that prioritize career sites", "Mid-sized scale-ups with strong brand investment"],
    weak: [
      "Pricing is opaque — buyer reports range from ~$229 to $6,000+/month",
      "AI matching & sourcing are lighter than the marketing suggests",
      "Outreach automation lacks WhatsApp/LinkedIn multichannel depth",
    ],
    pricing: "Quote-based · reported avg ~$16,500/yr.",
    tldr: [
      "Teamtailor wins on career-site polish and employer branding.",
      "AblyWorks wins on AI depth, multichannel outreach automation, and price transparency.",
      "Common switch: teams that need recruiting velocity, not just a beautiful site.",
    ],
    matrix: {
      ai_match:  "partial",
      outreach:  "partial",
      eu_hosting:"yes",
      dpa:       "yes",
      pricing:   "no",
      ai_privacy:"partial",
      multilang: "yes",
      speed:     "partial",
      migration: "no",
    },
  },
  {
    slug: "personio",
    name: "Personio",
    tag: "German HRIS suite with a recruiting module",
    bestFor: ["European companies that want HRIS + basic ATS in one", "Strong general HR compliance in DACH"],
    weak: [
      "Recruiting is a module, not the core product — AI matching depth is limited",
      "Multichannel outreach (WhatsApp + LinkedIn) is not a first-class feature",
      "Recruiting agency workflows (placement, candidate sharing) aren't supported",
    ],
    pricing: "Modular per-employee · core HR €2.88–€5/employee/mo + recruiting add-on.",
    tldr: [
      "Personio is the right choice if you want an all-in-one HRIS+ATS suite.",
      "AblyWorks is the right choice if recruiting is a strategic function — not an HR module.",
      "Common switch: agencies & in-house recruiting teams that need depth, not breadth.",
    ],
    matrix: {
      ai_match:  "no",
      outreach:  "no",
      eu_hosting:"yes",
      dpa:       "yes",
      pricing:   "partial",
      ai_privacy:"yes",
      multilang: "yes",
      speed:     "partial",
      migration: "no",
    },
  },
];

// AblyWorks always renders all green.
export const ABLYWORKS_VERDICTS = COMPARE_FEATURES.reduce((acc, f) => {
  acc[f.key] = "yes";
  return acc;
}, {});
