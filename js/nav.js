// Highlight the active nav link based on the current page
(function () {
  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (link) {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
})();
