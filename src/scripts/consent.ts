// Consentimiento de cookies de analítica (LSSI art. 22.2 y guía de cookies
// de la AEPD). Mientras no haya una decisión guardada, la analítica queda
// desactivada. La decisión se guarda 12 meses; pasado ese tiempo se vuelve
// a preguntar.

export type Consent = 'granted' | 'denied';

const KEY = 'cookie-consent';
const VERSION = 1; // subir si cambian las cookies, para volver a preguntar
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

type Stored = { value: Consent; date: number; version: number };

export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as Stored;
    if (s.version !== VERSION || Date.now() - s.date > MAX_AGE_MS) return null;
    return s.value === 'granted' || s.value === 'denied' ? s.value : null;
  } catch {
    return null;
  }
}

const listeners = new Set<(c: Consent) => void>();

export function onConsentChange(fn: (c: Consent) => void) {
  listeners.add(fn);
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ value, date: Date.now(), version: VERSION }));
  } catch {
    // Sin almacenamiento (modo privado estricto): la decisión vale para esta visita.
  }
  listeners.forEach((fn) => fn(value));
}

/** Borra las cookies de Google Analytics (_ga, _ga_XXXX) de este dominio. */
export function clearAnalyticsCookies() {
  const host = location.hostname;
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (!/^_ga(_|$)|^_gid$|^_gat/.test(name)) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ''}`;
    });
  });
}
