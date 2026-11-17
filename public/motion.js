(function () {
  // Close the mobile menu after choosing a link.
  var mm = document.querySelector('header .mm');
  if (mm) mm.addEventListener('click', function (e) { if (e.target.closest('a')) mm.removeAttribute('open'); });
})();
