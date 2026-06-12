import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { TESTIDS } from "@/constants/testIds";
import { COMPETITORS } from "@/data/competitors";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoForm from "@/components/DemoForm";
import CompareMatrix from "@/components/CompareMatrix";
import CompetitorCard from "@/components/CompetitorCard";

export default function Compare() {
  const { t } = useLocale();
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <div data-testid={TESTIDS.compare} className="min-h-screen bg-white">
      <Navbar onOpenDemo={openDemo} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 aw-grid-bg pointer-events-none" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 h-[420px] pointer-events-none opacity-70"
          aria-hidden
          style={{
            background:
              "radial-gradient(800px 360px at 20% 0%, rgba(0,135,68,0.08), transparent 70%), radial-gradient(700px 360px at 80% 0%, rgba(2,44,34,0.06), transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12">
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
            {t("compare.kicker")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight max-w-4xl"
            style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}
          >
            {t("compare.heading")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl"
          >
            {t("compare.sub")}
          </motion.p>

          {/* Anchor chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {COMPETITORS.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-[color:var(--aw-primary)]/10 hover:text-[color:var(--aw-primary)] transition-colors"
              >
                AblyWorks {t("compare.vs")} {c.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MATRIX */}
      <section className="relative pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <CompareMatrix />
        </div>
      </section>

      {/* PER-COMPETITOR DEEP-DIVES */}
      <section className="relative aw-soft-green py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16 md:space-y-24">
          {COMPETITORS.map((c) => (
            <CompetitorCard key={c.slug} competitor={c} onOpenDemo={openDemo} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2
            className="text-3xl md:text-[2.5rem] leading-tight font-bold"
            style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}
          >
            {t("compare.final_cta_title")}
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {t("compare.final_cta_body")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              data-testid={TESTIDS.compareCtaPrimary}
              onClick={openDemo}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg text-base font-semibold text-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
              style={{ background: "var(--aw-primary)" }}
            >
              {t("compare.cta_primary")}
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#workable"
              className="inline-flex items-center justify-center h-12 px-5 rounded-lg border border-slate-300 text-slate-800 font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              {t("compare.cta_secondary")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <DemoForm open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
