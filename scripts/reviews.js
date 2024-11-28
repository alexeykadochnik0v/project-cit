const reviewsData = [
  {
    avatar: "images/avatar1.png",
    name: "Светлана Гричишина",
    info: "Прошла курсы по веб-разработке",
    text: [
      "Стремилась создавать не шаблонные сайты, а профессиональные с технологиями разработки HTML, CSS и JavaScript. Пройдя обучение у Александра Дарбиняна, я с нуля за два месяца создала два сайта: для своих услуг и сайт для компании люкс на производство и поставка железобетонных изделий.",
      "Мне понравилось то, что Александр был всегда на связи, отвечал на вопросы, помогал мне.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores nobis provident nostrum.",
    ],
    video: "images/slider-photo-1.jpg",
  },
  {
    avatar: "/images/avatar2.svg",
    name: "Иван Иванов",
    info: "Владелец бизнеса",
    text: [
      "Обучение помогло мне понять основы HTML и CSS, благодаря чему я смог создать сайт для своей компании с нуля. Большое спасибо за терпение и советы!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores nobis provident nostrum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores nobis provident nostrum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores nobis provident nostrum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores nobis provident nostrum.",
    ],
    video: "images/slider-photo-2.png",
  },
  {
    avatar: "images/avatar1.png",
    name: "Светлана Гричишина",
    info: "Прошла курсы по веб-разработке",
    text: [
      "Стремилась создавать не шаблонные сайты, а профессиональные с технологиями разработки HTML, CSS и JavaScript. Пройдя обучение у Александра Дарбиняна, я с нуля за два месяца создала два сайта: для своих услуг и сайт для компании люкс на производство и поставка железобетонных изделий.",
      "Мне понравилось то, что Александр был всегда на связи, отвечал на вопросы, помогал мне.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores nobis provident nostrum.",
    ],
    video: "images/slider-photo-1.jpg",
  },
  {
    avatar: "/images/avatar2.svg",
    name: "Иван Иванов",
    info: "Владелец бизнеса",
    text: [
      "Обучение помогло мне понять основы HTML и CSS, благодаря чему я смог создать сайт для своей компании с нуля. Большое спасибо за терпение и советы!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores nobis provident nostrum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores nobis provident nostrum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores nobis provident nostrum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores nobis provident nostrum.",
    ],
    video: "images/slider-photo-2.png",
  },
];

const reviewsSlider = document.querySelector(".reviews__slider");

reviewsData.forEach(review => {
  const reviewHTML = `
    <div class="reviews__item">
      <div class="reviews__content">
        <div class="reviews__header">
          <img src="${sanitizeHTML(review.avatar)}" alt="${sanitizeHTML(review.name)}" class="reviews__avatar" />
          <div>
            <h3 class="reviews__name">${sanitizeHTML(review.name)}</h3>
            <p class="reviews__info">${sanitizeHTML(review.info)}</p>
          </div>
        </div>
        <blockquote class="reviews__text">
          <div class="reviews__content-wrapper">
            ${review.text.map(paragraph => `<p>${sanitizeHTML(paragraph)}</p>`).join("")}
          </div>
        </blockquote>
        <a href="#" class="reviews__link">Открыть благодарственное письмо <img src="images/link-24.svg" alt="link" /></a>
      </div>
      <div class="reviews__video">
        <button class="reviews__play">
          <img src="images/play.svg" alt="Play video" />
        </button>
        <img src="${sanitizeHTML(review.video)}" alt="slider photo">
      </div>
    </div>
  `;
  reviewsSlider.insertAdjacentHTML("beforeend", reviewHTML);
});

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".reviews__arrow--prev");
  const nextButton = document.querySelector(".reviews__arrow--next");
  const slider = document.querySelector(".reviews__slider");
  const items = Array.from(document.querySelectorAll(".reviews__item"));
  const visibleCount = 2; // Количество видимых отзывов
  const gap = 24; // Отступ между отзывами
  const itemWidth = items[0].getBoundingClientRect().width + gap; // Ширина отзыва + отступ
  let currentIndex = 0;

  const updateSlider = () => {
    const offset = -currentIndex * itemWidth; // Смещение
    slider.style.transform = `translateX(${offset}px)`;
    slider.style.transition = "transform 0.5s ease"; // Плавное перемещение
  };

  nextButton.addEventListener("click", () => {
    if (currentIndex < items.length - visibleCount) {
      currentIndex++;
      updateSlider();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  // Инициализация
  updateSlider();
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".portfolio__slides");
  const slides = document.querySelectorAll(".portfolio__slide");
  const prevButton = document.querySelector(".portfolio__arrow--prev");
  const nextButton = document.querySelector(".portfolio__arrow--next");

  let currentSlide = 0;
  const totalSlides = slides.length;

  let startX = 0;
  let endX = 0;
  let isDragging = false;

  // Устанавливаем положение слайдов
  const setSlidePosition = () => {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  // Переход к следующему слайду
  const showNextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides; // Цикличный переход
    setSlidePosition();
  };

  // Переход к предыдущему слайду
  const showPrevSlide = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Цикличный переход
    setSlidePosition();
  };

  // Добавляем обработчики событий на кнопки
  nextButton.addEventListener("click", showNextSlide);
  prevButton.addEventListener("click", showPrevSlide);

  // Добавляем обработчики событий для свайпа
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    endX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    if (!isDragging) return;
    const threshold = 50; // Минимальное расстояние для распознавания свайпа
    const diffX = startX - endX;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Свайп влево - следующий слайд
        showNextSlide();
      } else {
        // Свайп вправо - предыдущий слайд
        showPrevSlide();
      }
    }

    // Сброс переменных
    isDragging = false;
    startX = 0;
    endX = 0;
  });

  // Устанавливаем начальное положение
  setSlidePosition();
});

