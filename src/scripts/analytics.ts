// Eventos de Google Analytics 4 (guía «GA4 — Implementación v3»).
//
// La web navega sin recargar (ClientRouter de Astro): este módulo se ejecuta
// una sola vez, así que los listeners globales se registran una vez y lo que
// depende de la página se lanza en cada astro:page-load. Por lo mismo, el
// page_view se envía a mano (config con send_page_view: false).

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(name: string, params: Params = {}) {
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
  if (import.meta.env.DEV) console.debug('[GA4]', name, params);
}

// ── Utilidades ──────────────────────────────────────────────────────────

/** Texto visible del enlace, sin el texto oculto para lectores de pantalla. */
function visibleText(link: HTMLElement) {
  const clone = link.cloneNode(true) as HTMLElement;
  clone.querySelectorAll('.sr-only, [aria-hidden="true"]').forEach((n) => n.remove());
  return (clone.textContent ?? '').replace(/\s+/g, ' ').replace(/[→›]/g, '').trim();
}

/** Zona de la página donde está el enlace (para comparar CTAs entre sí). */
function locationOf(el: Element) {
  if (el.closest('header.nav')) return 'header';
  if (el.closest('#navSheet')) return 'menu_mobile';
  if (el.closest('footer')) return 'footer';
  if (el.closest('.cta-final')) return 'cta_final';
  const section = el.closest('section[id], section[class]');
  return section?.id || section?.classList[0] || 'main';
}

function blogSlug() {
  const m = location.pathname.match(/^\/blog\/([^/]+)\/?$/);
  return m ? m[1] : null;
}

// ── Clics (delegación global, un solo listener) ─────────────────────────

const SOCIAL: Record<string, string> = {
  'instagram.com': 'instagram',
  'tiktok.com': 'tiktok',
  'linkedin.com': 'linkedin',
};

document.addEventListener('click', (e) => {
  const link = (e.target as Element | null)?.closest?.('a');
  if (!link || !link.href) return;
  const href = link.href;

  // 3. CTA de Calendly (Key Event) y 6c. CTA dentro de un artículo
  if (href.includes('calendly.com')) {
    const cta_text = visibleText(link);
    track('calendly_cta_click', {
      cta_text,
      cta_location: locationOf(link),
      page_location: location.href,
    });
    const slug = blogSlug();
    if (slug && link.closest('main')) {
      track('blog_cta_click', { article_slug: slug, cta_text });
    }
    return;
  }

  // 8. Email. No se envía la dirección (GA4 no admite datos personales y
  // en Colaboraciones son correos de terceros): solo de quién es.
  if (href.startsWith('mailto:')) {
    const own = href.toLowerCase().includes('@adrianapsicologia.com');
    track('email_click', {
      email_owner: own ? 'adriana' : 'colaboradora',
      link_location: locationOf(link),
      page_location: location.href,
    });
    return;
  }

  // 7. Redes sociales
  for (const [domain, platform] of Object.entries(SOCIAL)) {
    if (href.includes(domain)) {
      track('social_click', {
        platform,
        link_location: locationOf(link),
        page_location: location.href,
      });
      return;
    }
  }

  // 9. Reseñas de Google
  if (href.includes('share.google') || href.includes('g.page')) {
    track('google_reviews_click', { page_location: location.href });
  }
});

// 4. Cita agendada en Calendly (Key Event). Solo mensajes del propio Calendly.
window.addEventListener('message', (e) => {
  if (e.origin !== 'https://calendly.com') return;
  if (e.data?.event === 'calendly.event_scheduled') {
    track('appointment_booked', {
      event_category: 'conversion',
      event_label: 'evaluacion-terapeutica',
      page_location: location.href,
    });
  }
});

// ── Eventos por página ──────────────────────────────────────────────────

let stopScrollDepth: (() => void) | null = null;

/** 6b. Profundidad de lectura en artículos: 50 % y 90 %, una vez cada uno. */
function startScrollDepth(slug: string) {
  const pending = [50, 90];
  const check = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (max <= 0) return;
    const pct = (scrollY / max) * 100;
    while (pending.length && pct >= pending[0]) {
      track('blog_scroll_depth', { depth_pct: pending.shift()!, article_slug: slug });
    }
    if (!pending.length) stop();
  };
  const stop = () => removeEventListener('scroll', check);
  addEventListener('scroll', check, { passive: true });
  return stop;
}

document.addEventListener('astro:page-load', () => {
  stopScrollDepth?.();
  stopScrollDepth = null;

  track('page_view', {
    page_location: location.href,
    page_path: location.pathname + location.search,
    page_title: document.title,
  });

  const path = location.pathname.replace(/\/+$/, '') || '/';

  // 5a. Servicios: pestaña activa al entrar (los cambios de pestaña se
  // envían desde servicios.astro con trackServicesTab).
  if (path === '/servicios') {
    trackServicesTab(new URLSearchParams(location.search).get('tipo') || 'individual');
  }
  // 5b / 5c
  if (path === '/precio') track('price_page_view', { page_location: location.href });
  if (path === '/como-funciona') track('process_page_view', { page_location: location.href });

  // 6a / 6b
  const slug = blogSlug();
  if (slug) {
    track('blog_article_view', { article_slug: slug, page_location: location.href });
    stopScrollDepth = startScrollDepth(slug);
  }
});

export function trackServicesTab(tipo: string) {
  track('services_tab_view', { service_type: tipo, page_location: location.href });
}
