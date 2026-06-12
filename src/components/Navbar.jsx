import React, { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { LOCALE_META, SUPPORTED_LOCALES } from "@/data/translations";
import { TESTIDS } from "@/constants/testIds";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar({ onOpenDemo }) {
  const { t, locale, setLocale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: TESTIDS.navLinkFeatures, label: t("nav.features"), href: "/#features" },
    { id: TESTIDS.navLinkIndustries, label: t("nav.industries"), href: "/#industries" },
    { id: TESTIDS.navLinkPricing, label: t("nav.pricing"), href: "/#pricing" },
    { id: TESTIDS.navLinkCompare, label: t("nav.compare"), href: "/compare" },
    { id: TESTIDS.navLinkBlog, label: t("nav.blog"), href: "/#blog" },
  ];

  return (
    <header
      data-testid={TESTIDS.nav}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div
        className="
          mx-auto
          max-w-6xl
          h-16
          px-6
          flex
          items-center
          justify-between

          rounded-full

          border
          border-white/20

          bg-white/60
          backdrop-blur-2xl

          shadow-[0_8px_32px_rgba(0,0,0,0.08)]

          supports-[backdrop-filter]:bg-white/50
        "
      >
        {/* Brand */}
        <a
          data-testid={TESTIDS.brand}
          href="#top"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Company Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Center links — desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.id}
              data-testid={l.id}
              href={l.href}
              className="
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700

                rounded-full

                hover:bg-white/70
                hover:text-[color:var(--aw-primary)]

                transition-all
              "
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
            className="
              hidden
              sm:inline-flex

              rounded-full

              px-5
              h-10

              font-semibold
              text-white

              shadow-lg

              hover:scale-105
              transition-all
            "
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
