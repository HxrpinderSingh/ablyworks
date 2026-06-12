import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { TESTIDS } from "@/constants/testIds";
import { Button } from "@/components/ui/button";
import DashboardMockup from "@/components/DashboardMockup";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero({ onOpenDemo }) {
  const { t, raw } = useLocale();
  const keywords = raw.seo.hero_keywords || [];

  return (
    <section
      data-testid={TESTIDS.hero}
      id="top"
      className="relative overflow-hidden"
    >
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 aw-grid-bg pointer-events-none" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[520px] pointer-events-none opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(800px 360px at 20% 0%, rgba(0,135,68,0.08), transparent 70%), radial-gradient(700px 360px at 80% 0%, rgba(2,44,34,0.06), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide"
              style={{
                borderColor: "rgba(0,135,68,0.25)",
                color: "var(--aw-primary)",
                background: "rgba(0,135,68,0.06)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t("hero.eyebrow")}
            </motion.div>

            {/* Headline */}
            <motion.h1
              data-testid={TESTIDS.heroHeadline}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-5 text-[2.5rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] font-bold tracking-tight"
              style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}
            >
              {t("hero.title_lead")}{" "}
              <span className="relative inline-block">
                <span style={{ color: "var(--aw-primary)" }}>{t("hero.title_accent")}</span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute left-0 -bottom-2 w-full h-3"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 C 80 2, 160 2, 298 7"
                    fill="none"
                    stroke="var(--aw-primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              data-testid={TESTIDS.heroSubheadline}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center"
            >
              <Button
                data-testid={TESTIDS.heroCtaPrimary}
                onClick={onOpenDemo}
                className="rounded-lg h-12 px-6 text-base font-semibold text-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                style={{ background: "var(--aw-primary)" }}
              >
                {t("hero.cta_primary")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <a
                data-testid={TESTIDS.heroCtaSecondary}
                href="#features"
                className="inline-flex items-center justify-center h-12 px-5 rounded-lg border border-slate-300 text-slate-800 font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                {t("hero.cta_secondary")}
              </a>
            </motion.div>

            {/* SEO keyword pills + proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <div className="flex flex-wrap gap-2">
                {keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700"
                  >
                    {kw}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm text-slate-600">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&w=80&q=70",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&w=80&q=70",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&w=80&q=70",
                  ].map((src, i) => (
                    <img key={i} src={src} className="w-7 h-7 rounded-full ring-2 ring-white object-cover" alt="" />
                  ))}
                </div>
                <span className="text-slate-700 font-medium">{t("hero.proof")}</span>
              </div>
            </motion.div>
          </div>

          {/* Right column - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
