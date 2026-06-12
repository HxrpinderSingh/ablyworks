import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { TESTIDS } from "@/constants/testIds";
import { Check, X, Minus } from "lucide-react";

export default function ComparisonMatrix() {
  const { t } = useLocale();

  const rows = [
    { key: "ai",         label: t("matrix.rows.ai"),         legacy: "partial" },
    { key: "automation", label: t("matrix.rows.automation"), legacy: "none" },
    { key: "gdpr",       label: t("matrix.rows.gdpr"),       legacy: "partial" },
    { key: "ux",         label: t("matrix.rows.ux"),         legacy: "slow" },
    { key: "whatsapp",   label: t("matrix.rows.whatsapp"),   legacy: "none" },
    { key: "pricing",    label: t("matrix.rows.pricing"),    legacy: "partial" },
  ];

  const renderLegacy = (kind) => {
    const labels = t("matrix.legacy_labels");
    if (kind === "none") {
      return (
        <span className="inline-flex items-center gap-1.5 text-slate-500">
          <X className="w-4 h-4" />
          <span className="text-sm">{labels.none}</span>
        </span>
      );
    }
    if (kind === "partial") {
      return (
        <span className="inline-flex items-center gap-1.5 text-amber-600">
          <Minus className="w-4 h-4" />
          <span className="text-sm">{labels.partial}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-slate-500">
        <X className="w-4 h-4" />
        <span className="text-sm">{labels.slow}</span>
      </span>
    );
  };

  return (
    <section
      data-testid={TESTIDS.comparison}
      id="pricing"
      className="py-20 md:py-28 aw-soft-green"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-10">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold mb-3" style={{ color: "var(--aw-primary)" }}>
            {t("matrix.kicker")}
          </div>
          <h2 className="text-3xl md:text-[2.5rem] leading-tight font-bold" style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}>
            {t("matrix.heading")}
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">{t("matrix.sub")}</p>
        </div>

        {/* Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-[0_18px_50px_-25px_rgba(2,44,34,0.15)]"
        >
          {/* Header */}
          <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200">
            <div className="col-span-6 md:col-span-6 px-5 md:px-7 py-4 text-xs uppercase tracking-wider font-bold text-slate-500">
              {/* spacer */}
            </div>
            <div
              className="col-span-3 md:col-span-3 px-3 md:px-6 py-4 text-center text-sm md:text-base font-bold relative"
              style={{ background: "rgba(0,135,68,0.05)" }}
            >
              <span style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}>{t("matrix.col_us")}</span>
              <span
                className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white shadow-sm"
                style={{ background: "var(--aw-primary)" }}
              >
                Recommended
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 px-3 md:px-6 py-4 text-center text-sm md:text-base font-semibold text-slate-500">
              {t("matrix.col_legacy")}
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.key}
              data-testid={TESTIDS.comparisonRow(row.key)}
              className={`grid grid-cols-12 items-center ${i !== rows.length - 1 ? "border-b border-slate-100" : ""}`}
            >
              <div className="col-span-6 md:col-span-6 px-5 md:px-7 py-4 md:py-5">
                <div className="text-sm md:text-base font-semibold text-slate-800">{row.label}</div>
              </div>
              <div
                className="col-span-3 md:col-span-3 px-3 md:px-6 py-4 md:py-5 text-center"
                style={{ background: "rgba(0,135,68,0.04)" }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={{ background: "rgba(0,135,68,0.12)" }}>
                  <Check className="w-4 h-4" style={{ color: "var(--aw-primary)" }} strokeWidth={3} />
                </span>
              </div>
              <div className="col-span-3 md:col-span-3 px-3 md:px-6 py-4 md:py-5 text-center">
                {renderLegacy(row.legacy)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
