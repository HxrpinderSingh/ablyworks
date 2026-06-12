import React, { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { LOCALE_META, SUPPORTED_LOCALES } from "@/data/translations";
import { TESTIDS } from "@/constants/testIds";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar({ onOpenDemo }) {
  const { t, locale, setLocale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: TESTIDS.navLinkFeatures, label: t("nav.features"), href: "#features" },
    { id: TESTIDS.navLinkIndustries, label: t("nav.industries"), href: "#industries" },
    { id: TESTIDS.navLinkPricing, label: t("nav.pricing"), href: "#pricing" },
    { id: TESTIDS.navLinkBlog, label: t("nav.blog"), href: "#blog" },
  ];

  return (
    <header
      data-testid={TESTIDS.nav}
      className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          data-testid={TESTIDS.brand}
          href="#top"
          className="flex items-center gap-2 group"
        >
          <span className="relative inline-flex items-center">
            <span className="text-[1.35rem] font-bold tracking-tight" style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}>
              AblyWorks
            </span>
            <span
              aria-hidden="true"
              className="ml-1 inline-block w-2 h-2 rounded-full"
              style={{ background: "var(--aw-primary)", boxShadow: "0 0 0 3px rgba(0,135,68,0.18)" }}
            />
          </span>
        </a>

        {/* Center links — desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.id}
              data-testid={l.id}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[color:var(--aw-primary)] transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                data-testid={TESTIDS.langSwitcher}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:text-[color:var(--aw-primary)] hover:bg-slate-50 rounded-md transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-semibold tracking-wide">{LOCALE_META[locale].flag}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              {SUPPORTED_LOCALES.map((code) => (
                <DropdownMenuItem
                  key={code}
                  data-testid={TESTIDS.langOption(code)}
                  onSelect={() => setLocale(code)}
                  className={`cursor-pointer flex items-center justify-between ${locale === code ? "font-semibold text-[color:var(--aw-primary)]" : ""}`}
                >
                  <span>{LOCALE_META[code].label}</span>
                  <span className="text-xs text-slate-500 tracking-widest">{LOCALE_META[code].flag}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Primary CTA */}
          <Button
            data-testid={TESTIDS.navCtaPrimary}
            onClick={onOpenDemo}
            className="hidden sm:inline-flex rounded-lg px-4 h-9 font-semibold text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            style={{ background: "var(--aw-primary)" }}
          >
            {t("nav.cta")}
          </Button>

          {/* Mobile toggle */}
          <button
            data-testid={TESTIDS.mobileMenuToggle}
            className="lg:hidden inline-flex p-2 rounded-md hover:bg-slate-100 text-slate-700"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200/70 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.id}
                data-testid={`${l.id}-mobile`}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 mt-2">
              {SUPPORTED_LOCALES.map((code) => (
                <button
                  key={code}
                  data-testid={`${TESTIDS.langOption(code)}-mobile`}
                  onClick={() => { setLocale(code); }}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wider rounded-md border ${
                    locale === code
                      ? "bg-[color:var(--aw-primary)] text-white border-[color:var(--aw-primary)]"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {LOCALE_META[code].flag}
                </button>
              ))}
            </div>
            <Button
              data-testid={`${TESTIDS.navCtaPrimary}-mobile`}
              onClick={() => { setMobileOpen(false); onOpenDemo(); }}
              className="mt-2 rounded-lg w-full font-semibold text-white"
              style={{ background: "var(--aw-primary)" }}
            >
              {t("nav.cta")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
