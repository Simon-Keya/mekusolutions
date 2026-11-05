(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  var root = document.documentElement;
  var targets = document.querySelectorAll(
    'main section, .ph1, .hero > .wrap > div'
  );
  if (!targets.length) return;

  root.classList.add('js-motion');
  targets.forEach(function (el) {
    if (el.closest('footer') || el.hasAttribute('data-no-reveal')) return;
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

  targets.forEach(function (el) {
    if (el.classList.contains('reveal')) observer.observe(el);
  });
})();
