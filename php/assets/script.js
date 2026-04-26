'use strict';

// ─── Clock ───────────────────────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const t = new Date().toLocaleTimeString('en-CA', {
    timeZone: 'America/Toronto',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
  });
  el.textContent = t + ' EST';
}
updateClock();
setInterval(updateClock, 1000);

// ─── Nav scroll state ────────────────────────────────────────────────
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ─── Mobile nav toggle ───────────────────────────────────────────────
(function () {
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-mobile');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();
