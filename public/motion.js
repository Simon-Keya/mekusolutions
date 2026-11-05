(function () {
  var root = document.documentElement;
  root.classList.add('js-motion');

  var path = location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('header nav a.dl').forEach(function (a) {
    var h = a.getAttribute('href');
    if (h === path) a.setAttribute('aria-current', 'page');
  });

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    'main section, .ph1, .hero > .wrap > div, .trace, .card, .person, .service-row, .process-step, .path, .shot, form'
  );

  targets.forEach(function (el) {
    if (el.closest('footer')) return;
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (el) { observer.observe(el); });
})();
