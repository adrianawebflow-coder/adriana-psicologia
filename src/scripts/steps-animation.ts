// Animación de entrada de las listas de pasos (.steps-anim): ver
// src/styles/steps-animation.css para el marcado y los estados.
const STAGGER = 520; // ms entre pasos; igual que --step-gap en el CSS

function setup(wrap: HTMLElement) {
  const path = wrap.querySelector<SVGPathElement>('.steps-path path');
  if (!path) return;

  // Trazado que une los números: baja por la columna del número, cruza en
  // horizontal por el hueco entre pasos (sin pisar el texto) y baja hasta
  // el siguiente. Si los números están alineados, es una recta.
  function draw() {
    const box = wrap.getBoundingClientRect();
    const steps = Array.from(wrap.querySelectorAll<HTMLElement>('.step'));
    const pts = steps.map((step) => {
      const n = step.querySelector('.step-num')!.getBoundingClientRect();
      const body = step.querySelector('.step-body')!.getBoundingClientRect();
      return {
        x: n.left - box.left + n.width / 2,
        y: n.top - box.top + n.height / 2,
        top: step.getBoundingClientRect().top - box.top,
        bottom: Math.max(n.bottom, body.bottom) - box.top,
      };
    });
    if (pts.length < 2) return 0;
    const R = 16;
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      if (Math.abs(a.x - b.x) < 1) { d += ` V ${b.y}`; continue; }
      const midY = (a.bottom + b.top) / 2;
      const dir = Math.sign(b.x - a.x);
      d += ` V ${midY - R} Q ${a.x} ${midY} ${a.x + dir * R} ${midY}`;
      d += ` H ${b.x - dir * R} Q ${b.x} ${midY} ${b.x} ${midY + R} V ${b.y}`;
    }
    path!.setAttribute('d', d);
    const len = path!.getTotalLength();
    path!.style.transition = 'none';
    path!.style.strokeDasharray = String(len);
    path!.style.strokeDashoffset = wrap.classList.contains('is-in') ? '0' : String(len);
    return pts.length;
  }

  const count = draw();
  new ResizeObserver(() => draw()).observe(wrap);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function play() {
    wrap.classList.add('is-in');
    void path!.getBoundingClientRect();
    path!.style.transition = reduced ? 'none' : `stroke-dashoffset ${(count - 1) * STAGGER}ms cubic-bezier(0.37, 0, 0.63, 1) 150ms`;
    path!.style.strokeDashoffset = '0';
  }

  if (reduced) { play(); return; }
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      io.disconnect();
      play();
    }
  }, { threshold: 0.25 });
  io.observe(wrap);
}

export function initStepsAnimation() {
  document.querySelectorAll<HTMLElement>('.steps-anim').forEach(setup);
}
