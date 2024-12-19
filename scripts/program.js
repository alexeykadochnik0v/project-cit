// Данные о программе обучения 

const programData = [
  {
    title: "Блок 1",
    description: "Эффективное использование инструментов разработки",
    content: ""
  },
  {
    title: "Блок 2",
    description: "Создание интерактивных элементов с помощью JavaScript+Jquery+Paralax",
    content: `
      <p>Язык гипертекстовой разметки HTML при помощи тегов и других элементов передаёт информацию о том, как построен текст и как он должен выводиться на экран. Язык каскадных таблиц CSS позволяет оформить веб-страницу, задав необходимые цвета, шрифты и другие элементы стиля.</p>
      <p>Вы изучите основы языка разметки HTML, способы применения CSS и основы построения сайтов. Вы сможете сами создавать страницы, проектировать навигационное меню и другие элементы сайта. Научитесь грамотно размещать изображения и текстовые блоки на странице. Сможете самостоятельно работать со стилями в CSS, использовать информеры, фреймы. А также получите практические советы, как выбрать хостинг и техподдержку сайта.</p>
    `
  },
  {
    title: "Блок 3",
    description: "Создание интерактивных элементов с помощью JavaScript+Jquery+Paralax",
    content: ""
  },
  {
    title: "Блок 4",
    description: "Создание интерактивных элементов с помощью JavaScript+Jquery+Paralax",
    content: ""
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const programContainer = document.querySelector(".program__blocks");

  // Генерация блоков
  programData.forEach((block, index) => {
    const blockElement = document.createElement("div");
    blockElement.className = "program__block";

    blockElement.innerHTML = `
      <div class="program__header">
        <div class="program__text">
          <h3 class="program__block-title">${block.title}</h3>
          <p class="program__block-description">${block.description}</p>
          <div class="program__content">${block.content}</div>
        </div>
        <button class="program__toggle" aria-expanded="false" data-index="${index}"></button>
      </div>
    `;

    programContainer.appendChild(blockElement);
  });

  // Логика открытия и закрытия блоков
  const blocks = document.querySelectorAll(".program__block");

  blocks.forEach((block) => {
    const toggle = block.querySelector(".program__toggle");
    const content = block.querySelector(".program__content");

    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        // Закрыть текущий блок
        block.classList.remove("program__block_open");
        toggle.setAttribute("aria-expanded", "false");
        content.style.maxHeight = null; // Сбрасываем высоту
      } else {
        // Открыть текущий блок
        block.classList.add("program__block_open");
        toggle.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px"; // Устанавливаем высоту по контенту
      }
    });
  });
});


// Данные о вопросах и ответах
const faqData = [
  {
    question: "Я новичок и никогда не создавал сайты. Подойдет ли мне этот курс?",
    answer:
      "Да, курс подходит для новичков. В процессе обучения мы пройдем все основы — от HTML и CSS до JavaScript. Вы освоите создание сайтов с нуля, и в конце курса у вас уже будет портфолио с готовыми проектами.",
  },
  {
    question: "Сколько времени занимает прохождение курса и какой формат обучения?",
    answer: "",
  },
  {
    question: "Что я получу по завершении курса?",
    answer: "",
  },
  {
    question: "Что входит в программу курса?",
    answer: "",
  },
  {
    question: "Могу ли я оплатить курс в рассрочку?",
    answer: "",
  },
  {
    question: "Сколько проектов я смогу создать во время курса?",
    answer: "",
  },
  {
    question: "Кто преподает курс и какую квалификацию имеют преподаватели?",
    answer: "",
  },
  {
    question: "Есть ли поддержка после завершения курса?",
    answer: "",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq__blocks");

  // Генерация вопросов и ответов
  faqData.forEach((item, index) => {
    const blockElement = document.createElement("div");
    blockElement.className = "faq__block";

    blockElement.innerHTML = `
      <div class="faq__header">
        <h3 class="faq__question" data-index="${index}">${item.question}</h3>
        <button class="faq__toggle" aria-expanded="false" data-index="${index}"></button>
      </div>
      <div class="faq__content">
        <p>${item.answer}</p>
      </div>
    `;

    faqContainer.appendChild(blockElement);
  });

  // Логика открытия и закрытия вопросов
  const blocks = document.querySelectorAll(".faq__block");

  blocks.forEach((block) => {
    const toggle = block.querySelector(".faq__toggle");
    const question = block.querySelector(".faq__question");
    const content = block.querySelector(".faq__content");

    const toggleContent = () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        block.classList.remove("faq__block_open");
        toggle.setAttribute("aria-expanded", "false");
        content.style.maxHeight = null; // Сбрасываем высоту
      } else {
        block.classList.add("faq__block_open");
        toggle.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px"; // Устанавливаем высоту по контенту
      }
    };

    toggle.addEventListener("click", toggleContent);
    question.addEventListener("click", toggleContent);
  });
});
