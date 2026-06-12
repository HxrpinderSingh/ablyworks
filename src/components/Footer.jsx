import React from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { TESTIDS } from "@/constants/testIds";
import { ShieldCheck, Cookie, Lock, FileText } from "lucide-react";

export default function Footer() {
  const { t, raw, locale } = useLocale();
  const links = raw.footer.links;
  const cols = raw.footer.cols;
  const year = new Date().getFullYear();

  const columns = [
    { title: cols.product,     items: [links.ats, links.crm, links.outreach, links.ai] },
    { title: cols.navigation,  items: [links.features, links.pricing, links.blog, links.contact] },
    { title: cols.industries,  items: [links.startups, links.agencies, links.scaleups, links.enterprise] },
    { title: cols.platform,    items: [links.integrations, links.api, links.security, links.status] },
  ];

  return (
    <footer data-testid={TESTIDS.footer} className="bg-[color:var(--aw-dark)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "Outfit" }}>
                AblyWorks
              </span>
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--aw-primary)", boxShadow: "0 0 0 3px rgba(0,135,68,0.25)" }}
              />
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>

            {/* Compliance badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1.5 rounded-md border border-white/15 text-white/85">
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#7DDDA6" }} />
                {t("footer.compliance.gdpr")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1.5 rounded-md border border-white/15 text-white/85">
                <FileText className="w-3.5 h-3.5" style={{ color: "#7DDDA6" }} />
                {t("footer.compliance.dpa")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1.5 rounded-md border border-white/15 text-white/85">
                <Lock className="w-3.5 h-3.5" style={{ color: "#7DDDA6" }} />
                {t("footer.compliance.iso")}
              </span>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col, i) => (
            <div key={i}>
              <div className="text-xs uppercase tracking-wider font-bold text-white/50 mb-4">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/75 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-white/60">
            © {year} AblyWorks. {t("footer.rights")}
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <a href="#" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white">
              <Cookie className="w-3.5 h-3.5" /> {t("footer.compliance.cookies")}
            </a>
            <a href="#" className="text-white/70 hover:text-white">{t("footer.compliance.privacy")}</a>
            <a href="#" className="text-white/70 hover:text-white">{t("footer.compliance.terms")}</a>
            <span className="text-white/40 uppercase tracking-widest text-[10px]">{locale.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
