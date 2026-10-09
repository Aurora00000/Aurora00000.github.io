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
