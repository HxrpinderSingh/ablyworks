import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { TESTIDS } from "@/constants/testIds";

export default function CompetitorCard({ competitor, onOpenDemo }) {
  const { t } = useLocale();
  const c = competitor;

  return (
    <motion.section
      data-testid={TESTIDS.compareCard(c.slug)}
      id={c.slug}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55 }}
      className="scroll-mt-24"
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: brand + tldr */}
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold mb-3 text-slate-500">
            AblyWorks <span className="text-slate-300 mx-1.5">·</span> {t("compare.vs")} <span className="text-slate-300 mx-1.5">·</span> {c.name}
          </div>
          <h3
            className="text-2xl md:text-3xl leading-tight font-bold"
            style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}
          >
            {c.name}
          </h3>
          <p className="mt-2 text-slate-600 text-[15px] leading-relaxed">{c.tag}</p>

          {/* TL;DR */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-[color:var(--aw-card)] p-5">
            <div className="text-[10px] uppercase tracking-[0.18em] font-bold mb-2" style={{ color: "var(--aw-primary)" }}>
              {t("compare.tldr_label")}
            </div>
            <ul className="space-y-2">
              {c.tldr.map((line, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-slate-700 leading-relaxed">
                  <Sparkles className="w-3.5 h-3.5 mt-1 shrink-0" style={{ color: "var(--aw-primary)" }} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-2">{t("compare.pricing_label")}</div>
            <div className="text-sm text-slate-700">{c.pricing}</div>
          </div>
        </div>

        {/* Right: best for / where we win */}
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-3">
                {t("compare.best_for")} {c.name}
              </div>
              <ul className="space-y-2.5">
                {c.bestFor.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "rgba(0,135,68,0.30)", background: "rgba(0,135,68,0.04)" }}
            >
              <div className="text-[11px] uppercase tracking-wider font-bold mb-3" style={{ color: "var(--aw-primary)" }}>
                {t("compare.where_we_win")}
              </div>
              <ul className="space-y-2.5">
                {c.weak.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                    <Check
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "var(--aw-primary)" }}
                      strokeWidth={3}
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Migration callout */}
          <div className="mt-5 rounded-2xl aw-dark-tint p-6 md:p-7 text-white flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1 min-w-0">
              <div
                className="text-[10px] uppercase tracking-[0.18em] font-bold mb-2"
                style={{ color: "#7DDDA6" }}
              >
                {t("compare.migration_label")}
              </div>
              <h4
                className="text-lg md:text-xl font-semibold leading-tight text-white"
                style={{ fontFamily: "Outfit" }}
              >
                {t("compare.migration_title").replace("{NAME}", c.name)}
              </h4>
              <p className="mt-2 text-sm text-white/75 leading-relaxed max-w-xl">
                {t("compare.migration_body")}
              </p>
            </div>
            <button
              data-testid={TESTIDS.compareCardCta(c.slug)}
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-5 h-11 rounded-lg font-semibold text-white shadow-sm hover:-translate-y-0.5 transition-all shrink-0"
              style={{ background: "var(--aw-primary)" }}
            >
              {t("compare.migration_cta")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
