import React from "react";
import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { TESTIDS } from "@/constants/testIds";
import { COMPARE_FEATURES, COMPETITORS, ABLYWORKS_VERDICTS } from "@/data/competitors";

function Verdict({ value, labels }) {
  if (value === "yes") {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={{ background: "rgba(0,135,68,0.12)" }} title={labels.yes}>
        <Check className="w-4 h-4" style={{ color: "var(--aw-primary)" }} strokeWidth={3} />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50" title={labels.partial}>
        <Minus className="w-4 h-4 text-amber-600" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100" title={labels.no}>
      <X className="w-4 h-4 text-slate-400" />
    </span>
  );
}

export default function CompareMatrix() {
  const { t, raw } = useLocale();
  const labels = raw.compare?.verdict || { yes: "Yes", partial: "Partial", no: "No" };

  return (
    <motion.div
      data-testid={TESTIDS.compareMatrix}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_-25px_rgba(2,44,34,0.15)] overflow-x-auto"
    >
      <table className="min-w-[920px] w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left px-5 py-4 w-[26%] text-xs uppercase tracking-wider font-bold text-slate-500">
              {/* spacer */}
            </th>
            <th
              className="px-3 py-4 text-center font-bold relative"
              style={{ background: "rgba(0,135,68,0.06)", fontFamily: "Outfit", color: "var(--aw-heading)" }}
            >
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--aw-primary)" }} />
                {t("compare.matrix_us")}
              </div>
              <span
                className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white shadow-sm whitespace-nowrap"
                style={{ background: "var(--aw-primary)" }}
              >
                Us
              </span>
            </th>
            {COMPETITORS.map((c) => (
              <th key={c.slug} className="px-3 py-4 text-center font-semibold text-slate-600">
                {c.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARE_FEATURES.map((feat, i) => (
            <tr
              key={feat.key}
              data-testid={TESTIDS.compareMatrixRow(feat.key)}
              className={i !== COMPARE_FEATURES.length - 1 ? "border-b border-slate-100" : ""}
            >
              <td className="px-5 py-4 text-slate-800 font-semibold align-middle">
                {t(feat.i18n)}
              </td>
              <td className="px-3 py-4 text-center" style={{ background: "rgba(0,135,68,0.04)" }}>
                <Verdict value={ABLYWORKS_VERDICTS[feat.key]} labels={labels} />
              </td>
              {COMPETITORS.map((c) => (
                <td key={c.slug} className="px-3 py-4 text-center align-middle">
                  <Verdict value={c.matrix[feat.key]} labels={labels} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
