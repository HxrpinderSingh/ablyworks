import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { Sparkles, Brain, CalendarCheck, MessageCircle, ArrowRight } from "lucide-react";

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&w=120&q=70",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&w=120&q=70",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&w=120&q=70",
];

function CandidateCard({ name, role, score, avatar, delay = 0, stageColor = "var(--aw-primary)" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="rounded-lg bg-white border border-slate-200 p-3 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-2.5">
        <img src={avatar} alt="" className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200" />
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold text-slate-800 truncate">{name}</div>
          <div className="text-[10px] text-slate-500 truncate">{role}</div>
        </div>
        <div
          className="text-[10px] font-bold px-1.5 py-0.5 rounded"
          style={{ background: "rgba(0,135,68,0.10)", color: stageColor }}
        >
          {score}%
        </div>
      </div>
    </motion.div>
  );
}

export default function DashboardMockup() {
  const { t } = useLocale();
  const stages = [
    { key: "new", label: t("hero.dash.stage_new"), count: 248 },
    { key: "screen", label: t("hero.dash.stage_screening"), count: 86 },
    { key: "interview", label: t("hero.dash.stage_interview"), count: 14 },
    { key: "offer", label: t("hero.dash.stage_offer"), count: 3 },
  ];

  return (
    <div
      data-testid="hero-dashboard-mockup"
      className="relative w-full"
    >
      {/* Floating accent ring */}
      <div
        aria-hidden
        className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-50 blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(0,135,68,0.30), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(2,44,34,0.20), transparent 70%)" }}
      />

      <div className="relative rounded-2xl bg-white border border-slate-200 shadow-[0_24px_60px_-20px_rgba(2,44,34,0.25)] overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <div className="text-[11px] text-slate-500 font-medium truncate">{t("hero.dash.title")}</div>
          <div className="w-12" />
        </div>

        {/* Body */}
        <div className="p-4 md:p-5">
          {/* AI ranking indicator */}
          <div className="flex items-center gap-2 mb-3 text-xs text-slate-700">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md" style={{ background: "rgba(0,135,68,0.10)" }}>
              <Brain className="w-3.5 h-3.5" style={{ color: "var(--aw-primary)" }} />
            </span>
            <span className="font-semibold text-slate-800">{t("hero.dash.ai_running")}</span>
            <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--aw-primary)", animation: "aw-pulse-dot 1.6s infinite" }} />
              live
            </span>
          </div>

          {/* Pipeline */}
          <div className="grid grid-cols-4 gap-2.5">
            {stages.map((s, idx) => (
              <div key={s.key} className="min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 truncate">{s.label}</div>
                  <div className="text-[10px] font-semibold text-slate-400">{s.count}</div>
                </div>
                <div className="space-y-2 min-h-[96px]">
                  {idx === 0 && (
                    <>
                      <CandidateCard name="Élodie M." role="Product Designer" score={94} avatar={AVATARS[0]} delay={0.1} />
                      <CandidateCard name="Jonas B."  role="Senior Designer"   score={87} avatar={AVATARS[1]} delay={0.25} />
                    </>
                  )}
                  {idx === 1 && (
                    <CandidateCard name="Sanne v.D." role="UX Lead" score={91} avatar={AVATARS[2]} delay={0.4} />
                  )}
                  {idx === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55, duration: 0.5 }}
                      className="rounded-lg p-2.5 border"
                      style={{ background: "rgba(0,135,68,0.06)", borderColor: "rgba(0,135,68,0.25)" }}
                    >
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold" style={{ color: "var(--aw-primary)" }}>
                        <CalendarCheck className="w-3 h-3" />
                        <span>{t("hero.dash.scheduled")}</span>
                      </div>
                      <div className="text-[10px] text-slate-600 mt-1">Camille L. · Thu 14:00</div>
                    </motion.div>
                  )}
                  {idx === 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                      className="rounded-lg p-2.5 bg-slate-900 text-white"
                    >
                      <div className="flex items-center gap-1.5 text-[10px] font-bold">
                        <Sparkles className="w-3 h-3" style={{ color: "#FBBF24" }} />
                        <span>Top {t("hero.dash.match")} · 96%</span>
                      </div>
                      <div className="text-[10px] text-slate-300 mt-1">Aleksandra K.</div>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Outreach activity bar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2.5"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-7 h-7 rounded-md inline-flex items-center justify-center" style={{ background: "rgba(0,135,68,0.10)" }}>
                <MessageCircle className="w-3.5 h-3.5" style={{ color: "var(--aw-primary)" }} />
              </span>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-slate-800 truncate">{t("hero.dash.outreach")}</div>
                <div className="text-[10px] text-slate-500">2 min ago · 24 candidates</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 text-[10px] font-semibold" style={{ color: "var(--aw-primary)" }}>
              <ArrowRight className="w-3 h-3" />
              <span>Auto</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
