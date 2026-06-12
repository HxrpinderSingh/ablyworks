export const HOME = {
  emergentLink: "emergent-link",
};

export const TESTIDS = {
  // Navbar
  nav: "main-nav",
  brand: "brand-logo",
  navLinkFeatures: "nav-link-features",
  navLinkIndustries: "nav-link-industries",
  navLinkPricing: "nav-link-pricing",
  navLinkBlog: "nav-link-blog",
  navCtaPrimary: "nav-cta-demo",
  langSwitcher: "lang-switcher",
  langOption: (code) => `lang-option-${code}`,
  mobileMenuToggle: "mobile-menu-toggle",

  // Hero
  hero: "hero-section",
  heroHeadline: "hero-headline",
  heroSubheadline: "hero-subheadline",
  heroCtaPrimary: "hero-cta-primary",
  heroCtaSecondary: "hero-cta-secondary",
  heroDashboard: "hero-dashboard-mockup",

  // Bento
  bento: "bento-features",
  bentoTile: (key) => `bento-tile-${key}`,

  // Comparison
  comparison: "comparison-matrix",
  comparisonRow: (key) => `comparison-row-${key}`,

  // Compare page
  compare: "compare-page",
  compareMatrix: "compare-matrix",
  compareMatrixRow: (key) => `compare-matrix-row-${key}`,
  compareCard: (slug) => `compare-card-${slug}`,
  compareCardCta: (slug) => `compare-card-cta-${slug}`,
  compareCtaPrimary: "compare-cta-primary",
  navLinkCompare: "nav-link-compare",

  // Testimonials
  testimonials: "testimonials-section",
  testimonialCard: (i) => `testimonial-card-${i}`,

  // FAQ
  faq: "faq-section",
  faqItem: (i) => `faq-item-${i}`,
  faqTrigger: (i) => `faq-trigger-${i}`,
  faqCta: "faq-cta",

  // Demo form
  demoForm: "demo-form",
  demoName: "demo-form-name",
  demoEmail: "demo-form-email",
  demoCompany: "demo-form-company",
  demoTeamSize: "demo-form-team-size",
  demoMessage: "demo-form-message",
  demoSubmit: "demo-form-submit",
  demoDialogTrigger: "demo-dialog-trigger",

  // Footer
  footer: "site-footer",
};
