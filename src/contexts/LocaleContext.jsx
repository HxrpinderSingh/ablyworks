import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { translations, SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/data/translations";

const LocaleContext = createContext(null);

const STORAGE_KEY = "ablyworks_locale";

// Country -> locale mapping for IP-based detection
const COUNTRY_TO_LOCALE = {
  FR: "fr",
  BE: "fr", // Belgium - default to French
  DE: "de",
  AT: "de",
  CH: "de",
  NL: "nl",
  PL: "pl",
};

function getBrowserLocale() {
  if (typeof navigator === "undefined") return null;
  const langs = navigator.languages || [navigator.language || navigator.userLanguage];
  for (const raw of langs) {
    if (!raw) continue;
    const code = raw.toLowerCase().split("-")[0];
    if (SUPPORTED_LOCALES.includes(code)) return code;
  }
  return null;
}

async function getGeoLocale() {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);
    const res = await fetch("https://ipapi.co/json/", { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    const country = (data.country_code || data.country || "").toUpperCase();
    return COUNTRY_TO_LOCALE[country] || null;
  } catch {
    return null;
  }
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      // 1. Stored preference
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && SUPPORTED_LOCALES.includes(stored)) {
          if (!cancelled) {
            setLocaleState(stored);
            setReady(true);
          }
          return;
        }
      } catch { /* ignore */ }

      // 2. Browser language
      const browser = getBrowserLocale();
      if (browser) {
        if (!cancelled) {
          setLocaleState(browser);
          setReady(true);
        }
        // Still try geo enhancement quietly in background — but don't override
        return;
      }

      // 3. IP-based geo
      const geo = await getGeoLocale();
      if (!cancelled) {
        setLocaleState(geo || DEFAULT_LOCALE);
        setReady(true);
      }
    };

    init();
    return () => { cancelled = true; };
  }, []);

  const setLocale = useCallback((code) => {
    if (!SUPPORTED_LOCALES.includes(code)) return;
    setLocaleState(code);
    try { localStorage.setItem(STORAGE_KEY, code); } catch { /* ignore */ }
    if (typeof document !== "undefined") {
      document.documentElement.lang = code;
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value = useMemo(() => {
    const t = translations[locale] || translations[DEFAULT_LOCALE];
    const translate = (path) => {
      const parts = path.split(".");
      let cur = t;
      for (const p of parts) {
        if (cur && typeof cur === "object" && p in cur) cur = cur[p];
        else return path;
      }
      return cur;
    };
    return { locale, setLocale, t: translate, raw: t, ready };
  }, [locale, setLocale, ready]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
