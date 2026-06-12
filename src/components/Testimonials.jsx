import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { TESTIDS } from "@/constants/testIds";
import { Star, Quote } from "lucide-react";

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&w=200&q=75",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&w=200&q=75",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&w=200&q=75",
];

export default function Testimonials() {
  const { raw, t } = useLocale();
  const cards = raw.testimonials.cards || [];

  return (
    <section
      data-testid={TESTIDS.testimonials}
      id="industries"
      className="relative py-20 md:py-28 aw-dark-tint"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold mb-3" style={{ color: "#7DDDA6" }}>
            {t("testimonials.kicker")}
          </div>
          <h2 className="text-3xl md:text-[2.5rem] leading-tight font-bold text-white" style={{ fontFamily: "Outfit" }}>
            {t("testimonials.heading")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.article
              key={c.name}
              data-testid={TESTIDS.testimonialCard(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-7 border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-[color:var(--aw-primary)]/50 transition-colors"
            >
              <Quote className="w-6 h-6 opacity-30 text-white" />
              <div className="mt-3 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4" style={{ color: "var(--aw-primary)", fill: "var(--aw-primary)" }} />
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90">{`“${c.quote}”`}</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={AVATARS[i % AVATARS.length]} alt="" className="w-11 h-11 rounded-full object-cover ring-2 ring-white/10" />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white truncate">{c.name}</div>
                  <div className="text-xs text-white/60 truncate">{c.role} · {c.company}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
