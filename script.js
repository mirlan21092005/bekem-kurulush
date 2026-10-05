/* ===== script.js: интерактивность сайта ===== */
document.addEventListener('DOMContentLoaded', () => {

  // 1. Текущий год в футере
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // 2. Тень у шапки при прокрутке
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10));

  // 3. Закрытие бургер-меню после клика по ссылке (мобильные)
  const menu = document.getElementById('mainNav');
  document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => {
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }));

  // 4. Фильтр проектов на странице «Наши работы»
  const buttons = document.querySelectorAll('[data-filter]');
  buttons.forEach(btn => btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    buttons.forEach(b => { b.classList.toggle('btn-primary', b === btn); b.classList.toggle('btn-outline-primary', b !== btn); });
    document.querySelectorAll('.work-item').forEach(i => i.classList.toggle('d-none', f !== 'all' && i.dataset.cat !== f));
  }));

  // 5. Валидация формы обратной связи (страница «Контакты»)
  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = form.checkValidity();            // проверка по атрибутам required/pattern/minlength
    form.classList.add('was-validated');        // Bootstrap подсвечивает ошибки
    if (ok) {
      document.getElementById('formOk').classList.remove('d-none');
      form.reset(); form.classList.remove('was-validated');
      // Здесь можно добавить отправку данных на сервер (fetch)
    }
  });
});
