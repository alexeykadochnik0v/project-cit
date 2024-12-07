// Получаем все кнопки фильтров
const filterButtons = document.querySelectorAll('.programs__filter');

// Добавляем событие для каждого фильтра
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Удаляем класс 'active' у всех кнопок
    filterButtons.forEach(btn => btn.classList.remove('programs__filter_active'));

    // Добавляем класс 'active' к нажатой кнопке
    button.classList.add('programs__filter_active');

    // Выполняем фильтрацию курсов
    const filter = button.getAttribute('data-filter');
    renderCourses(filter);
  });
});


// Маска для поля ввода 
document.addEventListener("DOMContentLoaded", function () {
  const phoneInputs = document.querySelectorAll(".phone-number");

  phoneInputs.forEach((phoneInput) => {
    IMask(phoneInput, {
      mask: '+7 (000) 000-00-00', // Маска для российского номера телефона
      lazy: false, // Маска всегда отображается
      placeholderChar: '_', // Символ заполнителя
      overwrite: true, // Включает режим замены символов
    });
  });
});

function addHoverEffect() {
  const cards = document.querySelectorAll(".course-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Позиция курсора относительно карточки
      const y = e.clientY - rect.top;

      // Создаём "огонёк"
      const flame = document.createElement("div");
      flame.classList.add("flame");
      flame.style.left = `${x}px`;
      flame.style.top = `${y}px`;

      // Добавляем "огонёк" в карточку
      card.appendChild(flame);

      // Удаляем "огонёк" после завершения анимации
      flame.addEventListener("animationend", () => {
        flame.remove();
      });
    });
  });
};

addHoverEffect();

// ПОказать скрыть контент отзыва
document.addEventListener("DOMContentLoaded", () => {
  const reviewLinks = document.querySelectorAll(".reviews__link");

  reviewLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Отменяем стандартное поведение ссылки

      const blockquote = link.previousElementSibling; // Находим соседний элемент reviews__text
      const isExpanded = blockquote.classList.toggle("expanded"); // Переключаем класс expanded

      if (isExpanded) {
        // Вычисляем и устанавливаем высоту для плавного раскрытия
        blockquote.style.height = `${blockquote.scrollHeight}px`;
        setTimeout(() => {
          blockquote.style.height = "auto"; // Устанавливаем auto после анимации для адаптивности
        }, 500); // Время совпадает с transition в CSS
      } else {
        // Для сворачивания вычисляем текущую высоту
        blockquote.style.height = `${blockquote.scrollHeight}px`;
        requestAnimationFrame(() => {
          blockquote.style.height = "160px"; // Высота в свернутом состоянии
        });
      }

      // Обновляем текст ссылки
      link.innerHTML = isExpanded
        ? 'Скрыть благодарственное письмо <img src="images/link-24.svg" alt="link" />'
        : 'Открыть благодарственное письмо <img src="images/link-24.svg" alt="link" />';
    });
  });
});


// Экранирующая функция для безопасности
const sanitizeHTML = text => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};


document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");

  // Открытие/закрытие меню
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav--active");
    burger.classList.toggle("burger--active");
  });

  // Закрытие меню при клике вне области меню
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !burger.contains(event.target)) {
      nav.classList.remove("nav--active");
      burger.classList.remove("burger--active");
    }
  });
});


/// Footer accordion 

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



/// Подключаем header, footer к страницам

async function loadComponent(containerId, url) {
  const container = document.getElementById(containerId);
  if (container) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const content = await response.text();
        container.innerHTML = content;
      } else {
        console.error(`Error loading ${url}: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Fetch error for ${url}: ${error}`);
    }
  }
}

// Загрузка header и footer
loadComponent('header', '../header.html');
loadComponent('footer', '../footer.html');


