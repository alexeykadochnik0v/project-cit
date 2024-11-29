document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".footer__accordion-header");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const content = accordion.nextElementSibling; // Контент под кнопкой
      const icon = accordion.querySelector(".footer__accordion-icon");

      // Закрываем все остальные аккордеоны
      document.querySelectorAll(".footer__accordion-content").forEach((item) => {
        if (item !== content) {
          item.classList.remove("open");
          item.style.maxHeight = null;
        }
      });

      // Переключаем текущий аккордеон
      if (content.classList.contains("open")) {
        content.classList.remove("open");
        content.style.maxHeight = null; // Скрываем
        icon.textContent = "+"; // Меняем значок на "+"
      } else {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px"; // Открываем
        icon.textContent = "−"; // Меняем значок на "−"
      }
    });
  });
});
