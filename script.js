// Массив с данными для курсов
const courses = [
  {
    id: 1,
    title: "Разработчик сайтов с нуля",
    category: "web",
    icon: "images/Icon program=HTML, Size=64.svg",
    startDate: { day: 23, month: "января" },
    lessons: 30,
    hours: 120,
    price: { group: 55000, individual: 120000 },
    currency: "₽",
    description: "Освойте востребованную профессию с нуля! На курсе изучаются: HTML, CSS, JavaScript, Photoshop, Figma, BEM и адаптивная верстка для любых устройств."
  },
  {
    id: 2,
    title: "Java-разработчик",
    category: "programming",
    icon: "images/Icon program=Java, Size=64.svg",
    startDate: { day: 23, month: "января" },
    lessons: 30,
    hours: 120,
    price: { group: 55000, individual: 120000 },
    currency: "₽",
    description: "Изучите Java: строки, файлы, алгоритмы поиска и сортировки, коллекции, массивы, матрицы и основы ООП."
  },
  {
    id: 3,
    title: "Разработчик на C++",
    category: "programming",
    icon: "images/Icon program=C++, Size=64.svg",
    startDate: { day: 23, month: "января" },
    lessons: 30,
    hours: 120,
    price: { group: 55000, individual: 120000 },
    currency: "₽",
    description: "Освойте C++ для решения сложных задач и укрепите знания алгоритмов, структур данных и стандартной библиотеки. Участвуйте в разработке IT-продуктов."
  },
  {
    id: 4,
    title: "C# разработчик",
    category: "programming",
    icon: "images/Icon program=C, Size=64.svg",
    startDate: { day: 23, month: "января" },
    lessons: 30,
    hours: 120,
    price: { group: 55000, individual: 120000 },
    currency: "₽",
    description: "Освойте C# для создания игр, веб- и Windows-приложений. Изучите ООП и научитесь мыслить, как программист, закрепляя знания на практике."
  },
  {
    id: 5,
    title: "Верстка: HTML, CSS, JS, Bootstrap, SASS и другие",
    category: "web",
    icon: "images/Icon program=CSS, Size=64.svg",
    startDate: { day: 23, month: "января" },
    lessons: 30,
    hours: 120,
    price: { group: 55000, individual: 120000 },
    currency: "₽",
    description: "Освойте профессиональную верстку сайта с нуля, используя современные инструменты."
  },
  {
    id: 6,
    title: "Дизайн сайтов в Figma",
    category: "web",
    icon: "images/Icon program=Figma, Size=64.svg",
    startDate: { day: 23, month: "января" },
    lessons: 30,
    hours: 120,
    price: { group: 55000, individual: 120000 },
    currency: "₽",
    description: "Освойте основы работы с Figma: создание макетов, интерактивных прототипов и графических элементов."
  }
];



// Функция для форматирования цены с валютой
const formatPrice = (amount, currency) => `${amount.toLocaleString()} ${currency}`;

// Экранирующая функция для безопасности
const sanitizeHTML = text => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Функция для создания HTML карточек
const createCourseCard = ({ id, title, startDate, lessons, hours, price, currency, description, icon }) => `
  <div class="course-card" data-id="${id}">
    <div class="gradient-circle"></div>
      <img src="${icon}" alt="${title} icon" class="course-card__icon">
      <div class="course-card__top">
<p class="course-card__start">Старт: ${sanitizeHTML(startDate.day)} ${sanitizeHTML(startDate.month)}</p>
        <div class="course-card__lessons">  
          <p class="course-card__info">${lessons} уроков</p>
          <p class="course-card__info">${hours} академ. часов</p>
        </div>
        <h3 class="course-card__title">${sanitizeHTML(title)}</h3>
        <p class="course-card__description">${sanitizeHTML(description)}</p>
      </div>
      <div>
        <div class="course-card__pricing">
            <div class="course-card__price">В группе <span class="course-card__cost">${formatPrice(price.group, currency)}</span></div>
            <div class="course-card__price">Индивидуально <span class="course-card__cost">${formatPrice(price.individual, currency)}</span></div>
        </div>
        <button class="course-card__button">Подробнее о курсе</button>
      </div>
  </div>
`;

// Функция для отображения карточек на странице
const renderCourses = (filter = 'all') => {
  const programsList = document.getElementById('programsList');
  programsList.innerHTML = courses
  .filter(({ category }) => filter === 'all' || category === filter)
  .map(createCourseCard)
  .join('');
  addHoverEffect();
};

// Функция для переключения активного фильтра и рендеринга карточек
document.querySelectorAll('.programs__filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.programs__filter').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');
    renderCourses(filter);
  });
});

// Инициализация отображения всех курсов
renderCourses();


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

function addHoverEffect () {
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

