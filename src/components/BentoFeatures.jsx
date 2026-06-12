import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { TESTIDS } from "@/constants/testIds";
import {
  Brain, Send, Inbox, Search, ShieldCheck, MessageSquare,
  Mail, Linkedin, Sparkles,
} from "lucide-react";

function Tile({ id, span, children, className = "" }) {
  return (
    <motion.div
      data-testid={TESTIDS.bentoTile(id)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-2xl bg-[color:var(--aw-card)] border border-slate-200 overflow-hidden hover:shadow-[0_12px_40px_-12px_rgba(2,44,34,0.18)] hover:border-[color:var(--aw-primary)]/30 transition-all duration-300 ${span} ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Tag({ children }) {
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
      style={{ background: "rgba(0,135,68,0.10)", color: "var(--aw-primary)" }}
    >
      {children}
    </span>
  );
}

export default function BentoFeatures() {
  const { t } = useLocale();

  return (
    <section
      data-testid={TESTIDS.bento}
      id="features"
      className="relative py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold mb-3" style={{ color: "var(--aw-primary)" }}>
            {t("bento.kicker")}
          </div>
          <h2 className="text-3xl md:text-[2.5rem] leading-tight font-bold" style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}>
            {t("bento.heading")}
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">{t("bento.sub")}</p>
        </div>

        {/* Bento Grid - 4 columns, 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[200px]">
          {/* 1. AI Candidate Selection — Large 2x2 */}
          <Tile id="ai-selection" span="md:col-span-2 lg:col-span-2 row-span-2">
            <div className="p-7 md:p-8 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <Tag>{t("bento.tiles.ai.tag")}</Tag>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--aw-primary)", animation: "aw-pulse-dot 1.6s infinite" }} />
                  live
                </span>
              </div>
              <h3 className="mt-4 text-xl md:text-2xl font-semibold leading-tight" style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}>
                {t("bento.tiles.ai.title")}
              </h3>
              <p className="mt-2 text-sm md:text-[15px] text-slate-600 leading-snug max-w-md line-clamp-2">{t("bento.tiles.ai.desc")}</p>

              {/* Ranking visualization */}
              <div className="mt-4 flex-1 min-h-0 flex items-end">
                <div className="w-full rounded-xl bg-white border border-slate-200 p-4 space-y-2.5">
                  {[
                    { name: "Élodie Marchand", role: "Senior Product Designer", score: 94 },
                    { name: "Jonas Brandt",    role: "Lead UI Designer",        score: 87 },
                    { name: "Sanne van Dijk",  role: "UX Researcher",           score: 79 },
                  ].map((c, i) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md inline-flex items-center justify-center text-[10px] font-bold bg-slate-100 text-slate-600">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-slate-800 truncate">{c.name}</div>
                        <div className="text-[10px] text-slate-500 truncate">{c.role}</div>
                      </div>
                      <div className="w-32 hidden sm:block">
                        <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${c.score}%`,
                              background: "linear-gradient(90deg, rgba(0,135,68,0.85), rgba(0,135,68,1))",
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-xs font-bold tabular-nums" style={{ color: "var(--aw-primary)" }}>{c.score}%</div>
                    </div>
                  ))}
                  <div className="pt-2 mt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                    <Brain className="w-3.5 h-3.5" style={{ color: "var(--aw-primary)" }} />
                    AI scored 248 applicants in 4.2s
                  </div>
                </div>
              </div>
            </div>
          </Tile>

          {/* 2. Automated Outreach — Wide 2x1 */}
          <Tile id="outreach" span="md:col-span-2 lg:col-span-2 row-span-1">
            <div className="p-7 h-full flex items-start gap-6">
              <div className="flex-1 min-w-0">
                <Tag>{t("bento.tiles.outreach.tag")}</Tag>
                <h3 className="mt-3 text-lg md:text-xl font-semibold leading-tight" style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}>
                  {t("bento.tiles.outreach.title")}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t("bento.tiles.outreach.desc")}</p>
              </div>
              <div className="hidden sm:flex flex-col gap-2 items-stretch min-w-[180px]">
                <div className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-white border border-slate-200">
                  <MessageSquare className="w-3.5 h-3.5" style={{ color: "#22C55E" }} />
                  <span className="text-[11px] font-semibold text-slate-700 flex-1">WhatsApp</span>
                  <span className="text-[10px] text-slate-400">Day 1</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-white border border-slate-200">
                  <Mail className="w-3.5 h-3.5" style={{ color: "var(--aw-primary)" }} />
                  <span className="text-[11px] font-semibold text-slate-700 flex-1">Email</span>
                  <span className="text-[10px] text-slate-400">Day 3</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-white border border-slate-200">
                  <Linkedin className="w-3.5 h-3.5" style={{ color: "#0A66C2" }} />
                  <span className="text-[11px] font-semibold text-slate-700 flex-1">LinkedIn</span>
                  <span className="text-[10px] text-slate-400">Day 5</span>
                </div>
              </div>
            </div>
          </Tile>

          {/* 3. Unified Workspace — Tall 1x2 */}
          <Tile id="inbox" span="md:col-span-1 lg:col-span-1 row-span-2">
            <div className="p-6 h-full flex flex-col">
              <Tag>{t("bento.tiles.inbox.tag")}</Tag>
              <h3 className="mt-3 text-lg font-semibold leading-tight" style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}>
                {t("bento.tiles.inbox.title")}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t("bento.tiles.inbox.desc")}</p>

              <div className="mt-5 flex-1 min-h-0 rounded-xl bg-white border border-slate-200 p-3 space-y-2.5 overflow-hidden">
                {[
                  { who: "Camille", msg: "Strong portfolio, want to push to onsite.", color: "rgba(0,135,68,0.10)" },
                  { who: "Markus",  msg: "+1 — design systems experience matches.",   color: "rgba(59,130,246,0.10)" },
                  { who: "Sanne",   msg: "Scheduled for Thu 14:00 (CET).",            color: "rgba(245,158,11,0.10)" },
                ].map((m, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-700 shrink-0" style={{ background: m.color }}>
                      {m.who[0]}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-slate-800">{m.who}</div>
                      <div className="text-[11px] text-slate-500 leading-snug">{m.msg}</div>
                    </div>
                  </div>
                ))}
                <div className="pt-2 mt-1 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-500">
                  <Inbox className="w-3 h-3" style={{ color: "var(--aw-primary)" }} />
                  Shared thread · 3 teammates
                </div>
              </div>
            </div>
          </Tile>

          {/* 4. Global Search — Small 1x1 */}
          <Tile id="search" span="md:col-span-1 lg:col-span-1 row-span-1">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <Tag>{t("bento.tiles.search.tag")}</Tag>
                <h3 className="mt-3 text-base font-semibold leading-tight" style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}>
                  {t("bento.tiles.search.title")}
                </h3>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-md bg-white border border-slate-200 px-3 py-2">
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-500 flex-1 truncate">{`"product designer · Berlin"`}</span>
                <span className="text-[9px] font-bold text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">⌘K</span>
              </div>
            </div>
          </Tile>

          {/* 5. GDPR / DPA — Small 1x1 */}
          <Tile id="gdpr" span="md:col-span-1 lg:col-span-1 row-span-1">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <Tag>{t("bento.tiles.gdpr.tag")}</Tag>
                <h3 className="mt-3 text-base font-semibold leading-tight" style={{ fontFamily: "Outfit", color: "var(--aw-heading)" }}>
                  {t("bento.tiles.gdpr.title")}
                </h3>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md" style={{ background: "rgba(0,135,68,0.10)" }}>
                  <ShieldCheck className="w-5 h-5" style={{ color: "var(--aw-primary)" }} />
                </span>
                <div>
                  <div className="text-xs font-semibold text-slate-800">EU-hosted · Audit-ready</div>
                  <div className="text-[10px] text-slate-500">GDPR · DPA · ISO 27001</div>
                </div>
              </div>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}
