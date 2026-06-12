import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { TESTIDS } from "@/constants/testIds";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function FAQ({ onOpenDemo }) {
  const { raw, t } = useLocale();
  const items = raw.faq?.items || [];

  return (
    <section
      data-testid={TESTIDS.faq}
      id="faq"
      className="relative py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: heading + trust column */}
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold mb-3" style={{ color: "var(--aw-primary)" }}>
              {t("faq.kicker")}
            </div>
            <h2
              className="text-3xl md:text-[2.5rem] leading-[1.1] font-bold"
              style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}
            >
              {t("faq.heading")}
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              {t("faq.sub")}
            </p>

            {/* Trust micro-card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mt-8 rounded-2xl border border-slate-200 bg-[color:var(--aw-card)] p-5 md:p-6"
            >
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                  style={{ background: "rgba(0,135,68,0.10)" }}
                >
                  <ShieldCheck className="w-5 h-5" style={{ color: "var(--aw-primary)" }} />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-800">
                    {t("faq.badge_title")}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {t("faq.badge_sub")}
                  </div>
                </div>
              </div>
              <button
                data-testid={TESTIDS.faqCta}
                onClick={onOpenDemo}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
                style={{ color: "var(--aw-primary)" }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {t("nav.cta")} →
              </button>
            </motion.div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full divide-y divide-slate-200 border-y border-slate-200">
              {items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  data-testid={TESTIDS.faqItem(i)}
                  className="border-b-0 group"
                >
                  <AccordionTrigger
                    data-testid={TESTIDS.faqTrigger(i)}
                    className="text-left text-base md:text-lg font-semibold py-5 md:py-6 hover:no-underline hover:text-[color:var(--aw-primary)] transition-colors"
                    style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}
                  >
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-[15px] leading-relaxed pb-6 pr-8">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
