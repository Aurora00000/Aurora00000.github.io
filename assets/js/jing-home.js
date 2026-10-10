(function () {
  function setLanguage(language) {
    var selected = language === 'zh' ? 'zh' : 'en';
    document.body.classList.remove('lang-en', 'lang-zh');
    document.body.classList.add('lang-' + selected);
    document.documentElement.lang = selected === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('.lang-tab').forEach(function (button) {
      var isActive = button.getAttribute('data-lang') === selected;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    try {
      window.localStorage.setItem('jing-home-language', selected);
    } catch (error) {
      // Language switching still works when local storage is unavailable.
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var savedLanguage = 'en';
    try {
      savedLanguage = window.localStorage.getItem('jing-home-language') || 'en';
    } catch (error) {
      savedLanguage = 'en';
    }
    setLanguage(savedLanguage);

    document.querySelectorAll('.lang-tab').forEach(function (button) {
      button.addEventListener('click', function () {
        setLanguage(button.getAttribute('data-lang'));
      });
    });

    document.querySelectorAll('.publication-browser').forEach(function (browser) {
      var cards = Array.prototype.slice.call(browser.querySelectorAll('.publication-card'));
      var buttons = browser.querySelectorAll('.publication-filter');

      function matches(card, filter) {
        if (filter === 'all') return true;
        if (filter === 'first') return card.dataset.firstAuthor === 'true';
        if (filter === 'cofirst') return card.dataset.cofirst === 'true';
        return card.dataset.topic === filter;
      }

      buttons.forEach(function (button) {
        var filter = button.dataset.filter;
        var count = cards.filter(function (card) { return matches(card, filter); }).length;
        var countLabel = button.querySelector('.publication-filter-count');
        if (countLabel) countLabel.textContent = count;

        button.addEventListener('click', function () {
          buttons.forEach(function (item) {
            var active = item === button;
            item.classList.toggle('is-active', active);
            item.setAttribute('aria-pressed', active ? 'true' : 'false');
          });

          cards.forEach(function (card) { card.hidden = !matches(card, filter); });
          browser.querySelectorAll('.publication-group').forEach(function (group) {
            group.hidden = !group.querySelector('.publication-card:not([hidden])');
          });
        });
      });
    });

    var backToTop = document.querySelector('.home-back-top');
    if (!backToTop) return;

    function updateBackToTop() {
      backToTop.classList.toggle('visible', window.scrollY > 520);
    }

    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
})();
