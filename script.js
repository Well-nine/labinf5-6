document.addEventListener('DOMContentLoaded', () => {
  // 1. Мобильное меню
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Эффект тени у шапки при прокрутке
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(111, 78, 55, 0.15)';
    } else {
      header.style.boxShadow = '0 2px 12px rgba(111, 78, 55, 0.08)';
    }
  });

  // 3. Интерактивность меню (имитация добавления в заказ)
  const menuCards = document.querySelectorAll('.menu-card');
  menuCards.forEach(card => {
    card.addEventListener('click', () => {
      const itemName = card.querySelector('h3').textContent;
      showToast(`🐾 "${itemName}" добавлен в ваш виртуальный заказ!`);
    });
  });

  // Функция показа уведомления
  function showToast(message) {
    // Удаляем старое уведомление, если есть
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>☕</span> ${message}`;
    document.body.appendChild(toast);

    // Анимация появления
    setTimeout(() => toast.classList.add('show'), 10);

    // Автоматическое скрытие через 3 секунды
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }
});
