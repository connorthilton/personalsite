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

// Copy-to-clipboard buttons (anything with a data-copy attribute)
(function () {
  document.querySelectorAll('[data-copy]').forEach(function (el) {
    el.addEventListener('click', function () {
      const value = el.getAttribute('data-copy');
      const original = el.dataset.label || el.textContent;
      el.dataset.label = original;

      function flash() {
        el.textContent = 'Copied!';
        setTimeout(function () { el.textContent = original; }, 1500);
      }

      function fallback() {
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        flash();
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(flash).catch(fallback);
      } else {
        fallback();
      }
    });
  });
})();
