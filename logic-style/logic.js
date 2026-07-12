document.addEventListener('DOMContentLoaded', () => {

  /*  Mobile nav toggle  */
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  /*  FAQ accordion  */
  document.querySelectorAll('.faq-item .faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /*  AR / EN language toggle */
  const langBtn = document.querySelector('.lang-btn');
  const i18nEls = document.querySelectorAll('[data-en]');
  let currentLang = 'ar';

  function applyLang(lang) {
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    i18nEls.forEach(el => {
      if (!el.dataset.ar) el.dataset.ar = el.textContent; 
      el.textContent = lang === 'ar' ? el.dataset.ar : el.dataset.en;
    });
    if (langBtn) langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLang(currentLang);
    });
  }

  currentLang = 'en';
  applyLang('en');

  /*  Active nav link based on current page  */
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

});
