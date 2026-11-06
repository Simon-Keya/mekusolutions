(function () {
  // Mark the current page in the header navigation.
  var path = location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('header nav a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.setAttribute('aria-current', 'page');
  });
  // Close the mobile menu after choosing a link.
  var mm = document.querySelector('header .mm');
  if (mm) mm.addEventListener('click', function (e) { if (e.target.closest('a')) mm.removeAttribute('open'); });
})();
