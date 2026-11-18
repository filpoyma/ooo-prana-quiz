const SECTIONS = [
  {
    title: "Проектирование",
    questions: [
      {
        text: "В какой программе выполняется проектирование?",
        answer: "AutoCAD 2026",
      },
      {
        text: "Есть ли единые шаблоны чертежей, слои, блоки, стили и правила оформления?",
        answer:
          "Проектная документация типовая, но каждый чертёж разрабатывается вручную в AutoCAD. Единого комплекта шаблонов, слоёв, блоков и правил оформления, которым пользуются все, нет.",
      },
      {
        text: "Какие части проектов являются полностью типовыми, а какие каждый раз разрабатываются индивидуально?",
        answer:
          "Индивидуально разрабатывается план трассы газопровода. Продольный профиль, спецификация и ведомость объёмов работ типовые, но сейчас тоже чертятся и считаются вручную.",
      },
      {
        text: "Используются ли готовые типовые решения и библиотеки узлов?",
        answer:
          "Типовые решения используются: документация в основном повторяется от объекта к объекту. Отдельной библиотеки узлов нет, решения копируют вручную из предыдущих проектов.",
      },
      {
        text: "Как сейчас выполняется проверка проектной документации?",
        answer: "Вручную.",
      },
    ],
  },
  {
    title: "Строительство",
    questions: [
      {
        text: "Каким образом фиксируются фактически использованные материалы?",
        answer:
          "По спецификациям и проектной документации. Исполнитель смотрит наименование материала и подбирает к нему сертификат или паспорт.",
      },
      {
        text: "Где хранятся данные о партиях, сертификатах, испытаниях и выполненных объёмах?",
        answer:
          "На сервере в общих папках. Сертификаты и паспорта подбирают вручную, данные заносят в шаблонную таблицу Excel. Отдельной базы партий и испытаний нет.",
      },
      {
        text: "Используются ли мобильные устройства, фотоотчёты или электронные журналы на строительных объектах?",
        answer:
          "Электронный журнал на объекте не используется. Данные потом собирают вручную на сервере, в общих папках.",
      },
      {
        text: "Как фиксируются изменения между проектными и фактически выполненными решениями?",
        answer:
          "Отдельного журнала отклонений нет. В исполнительную документацию вручную переносят данные из проектной документации и спецификаций.",
      },
      {
        text: "Кто отвечает за передачу фактических данных из строительства в ПТО?",
        answer:
          "С объекта данные передаёт исполнитель. Исполнительную документацию по ним собирают инженеры ПТО.",
      },
    ],
  },
  {
    title: "Сметы",
    questions: [
      {
        text: "Какая версия ГРАНД-Сметы используется?",
        answer: "2026.3 Обновление 1 (версия исполняемого файла 16.3.1)",
      },
      {
        text: "Какие нормативные базы, регионы, индексы и коэффициенты применяются?",
        answer:
          "Сметчик задаёт их вручную в ГРАНД-Смете под конкретный объект. Единый зафиксированный набор в компании не описан.",
      },
      {
        text: "Есть ли внутренний справочник соответствия между видами работ и сметными расценками?",
        answer:
          "Нет. По каждой строке спецификации и ведомости объёмов сметчик сам подбирает расценку в ГРАНД-Смете и задаёт объём.",
      },
      {
        text: "В каких форматах сейчас выдаются спецификации и ведомости объёмов работ?",
        answer: "PDF и Excel",
      },
      {
        text: "Есть ли единые правила наименования материалов и работ?",
        answer:
          "Нет. Наименования в спецификациях и ведомостях читают построчно, чтобы подобрать расценку и сертификат.",
      },
      {
        text: "Какие операции сметчик выполняет вручную чаще всего?",
        answer:
          "Построчно разбирает спецификации и ведомости объёмов, подбирает расценку в ГРАНД-Смете и вносит объём.",
      },
    ],
  },
  {
    title: "Исполнительная документация",
    questions: [
      {
        text: "Какие документы входят в обязательный первый блок исполнительной документации по каждому типу объекта?",
        answer:
          "Сертификаты и паспорта на применённые материалы, акты скрытых работ и акты законченного строительства.",
      },
      {
        text: "В каком виде хранятся сертификаты и паспорта?",
        answer: "PDF, сканы, фотографии, Word или Excel",
      },
      {
        text: "Есть ли единая структура папок и правила наименования файлов?",
        answer:
          "Жёстких правил нет. Файлы лежат на сервере в общих папках, нужный сертификат ищут вручную по наименованию материала.",
      },
      {
        text: "Какие реквизиты должны обязательно совпадать при подборе сертификата?",
        answer: "марка, диаметр, производитель, партия, дата, номер документа",
      },
      {
        text: "Как проверяется срок действия сертификатов и соответствие материала проекту?",
        answer:
          "Вручную: сверяют наименование материала с проектом и открывают сертификат. Срок действия автоматически не проверяется.",
      },
      {
        text: "Какие шаблоны актов, журналов, реестров и описей используются?",
        answer:
          "Шаблоны Excel. В них вручную заносят данные из проекта и спецификаций, затем выгружают акты скрытых работ и акты законченного строительства.",
      },
    ],
  },
  {
    title: "Инфраструктура и безопасность",
    questions: [
      {
        text:
          "Должно ли решение работать только во внутренней сети компании, без передачи документов во внешние облачные сервисы?",
        answer:
          "Да. Вся работа идёт на сервере в общих папках;",
      },
    ],
  },
];

const QUESTIONS = SECTIONS.flatMap((section) =>
  section.questions.map((question) => ({
    section: section.title,
    text: question.text,
    answer: question.answer || "",
  })),
);

const STORAGE_KEY = "survey-proektirovanie-v4";

function defaultAnswers() {
  return QUESTIONS.map((question) => question.answer);
}

const state = {
  screen: "start",
  index: 0,
  editing: false,
  answers: defaultAnswers(),
  resumed: false,
  resumeScreen: "question",
  error: "",
  savedName: "",
};

const app = document.querySelector("#app");

function loadDraft() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (!Array.isArray(data.answers) || data.answers.length !== QUESTIONS.length) return;
    state.answers = data.answers.map((item, index) =>
      typeof item === "string" ? item : QUESTIONS[index].answer,
    );
    state.resumed = true;
    state.resumeScreen = data.screen === "review" ? "review" : "question";
    if (Number.isInteger(data.index)) {
      state.index = Math.min(Math.max(data.index, 0), QUESTIONS.length - 1);
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function persist() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      answers: state.answers,
      index: state.index,
      screen: state.screen === "review" || state.screen === "saved" ? "review" : "question",
      updatedAt: new Date().toISOString(),
    }),
  );
  state.resumed = true;
}

function hasDraft() {
  return state.resumed;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[char];
  });
}

function render() {
  if (state.screen === "start") {
    app.innerHTML = renderStart();
  } else if (state.screen === "question") {
    app.innerHTML = renderQuestion();
    const field = document.querySelector("#answer");
    field.focus();
    field.setSelectionRange(field.value.length, field.value.length);
  } else if (state.screen === "review") {
    app.innerHTML = renderReview();
  } else {
    app.innerHTML = renderSaved();
  }
  bind();
}

function renderStart() {
  const sections = SECTIONS.map(
    (section) =>
      `<li><b>${escapeHtml(section.title)}</b><span>${section.questions.length} вопр.</span></li>`,
  ).join("");
  const continueLabel = hasDraft() ? "Продолжить" : "Начать";
  const restart = hasDraft()
    ? `<button class="ghost" type="button" data-action="restart">Начать заново</button>`
    : "";

  return `
    <section class="card">
      <h1>Вопросы по процессам компании</h1>
      <p class="lead">23 вопроса в пяти разделах. Где ответ уже известен, он подставлен в поле — его можно поправить, очистить или пропустить. В конце ответы сохранятся файлом на компьютер.</p>
      <ul class="sections">${sections}</ul>
      <div class="actions actions-end">
        ${restart}
        <button class="primary" type="button" data-action="begin">${continueLabel}</button>
      </div>
    </section>
  `;
}

function renderQuestion() {
  const item = QUESTIONS[state.index];
  const width = Math.round(((state.index + 1) / QUESTIONS.length) * 100);
  const nextLabel = state.editing || state.index === QUESTIONS.length - 1 ? "К ответам" : "Далее";

  return `
    <section class="card">
      <div class="progress">
        <div class="progress-meta">
          <span>${escapeHtml(item.section)}</span>
          <span>${state.index + 1} из ${QUESTIONS.length}</span>
        </div>
        <div class="track"><i style="width:${width}%"></i></div>
      </div>
      <h2 class="question">${escapeHtml(item.text)}</h2>
      <label class="visually-hidden" for="answer">Ответ</label>
      <textarea id="answer" name="answer" placeholder="Можно пропустить">${escapeHtml(state.answers[state.index])}</textarea>
      <p class="error" id="error">${escapeHtml(state.error)}</p>
      <div class="actions">
        <button class="ghost" type="button" data-action="back">${state.index === 0 && !state.editing ? "К началу" : "Назад"}</button>
        <button class="primary" type="button" data-action="next">${nextLabel}</button>
      </div>
    </section>
  `;
}

function renderReview() {
  const items = QUESTIONS.map((item, index) => {
    const answer = state.answers[index].trim();
    return `
      <button class="review-item" type="button" data-edit="${index}">
        <small>${escapeHtml(item.section)} · ${index + 1}</small>
        <strong>${escapeHtml(item.text)}</strong>
        <p${answer ? "" : ' class="empty"'}>${escapeHtml(answer || "Без ответа")}</p>
      </button>
    `;
  }).join("");

  return `
    <section class="card">
      <h1>Ответы</h1>
      <p class="lead">Проверьте текст. Нажмите на ответ, чтобы изменить его. Сохранение скачает файл Markdown.</p>
      <div class="review-list">${items}</div>
      <p class="error" id="error">${escapeHtml(state.error)}</p>
      <div class="actions">
        <button class="ghost" type="button" data-action="back-last">К последнему вопросу</button>
        <button class="primary" type="button" data-action="save">Сохранить ответы</button>
      </div>
    </section>
  `;
}

function renderSaved() {
  return `
    <section class="card">
      <h1 class="done-title">Ответы сохранены</h1>
      <p class="lead">Файл «${escapeHtml(state.savedName)}» записан на компьютер. Черновик в браузере тоже остаётся, его можно открыть и скачать снова.</p>
      <div class="actions actions-end">
        <button class="ghost" type="button" data-action="review">Изменить ответы</button>
        <button class="primary" type="button" data-action="save">Скачать ещё раз</button>
      </div>
    </section>
  `;
}

function bind() {
  const answer = document.querySelector("#answer");
  if (answer) {
    answer.addEventListener("input", () => {
      state.answers[state.index] = answer.value;
      state.error = "";
      const error = document.querySelector("#error");
      if (error) error.textContent = "";
      persist();
    });
  }

  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action));
  });

  app.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      state.index = Number(button.dataset.edit);
      state.editing = true;
      state.screen = "question";
      state.error = "";
      render();
    });
  });
}

function commitAnswer() {
  const field = document.querySelector("#answer");
  if (!field) return true;
  state.answers[state.index] = field.value;
  persist();
  state.error = "";
  return true;
}

function handleAction(action) {
  if (action === "restart") {
    state.answers = defaultAnswers();
    state.index = 0;
    state.editing = false;
    state.error = "";
    state.resumeScreen = "question";
    state.screen = "question";
    persist();
    render();
    return;
  }

  if (action === "begin") {
    state.editing = false;
    state.error = "";
    if (!state.resumed) state.index = 0;
    state.screen = state.resumeScreen === "review" ? "review" : "question";
    persist();
    render();
    return;
  }

  if (action === "back") {
    const field = document.querySelector("#answer");
    if (field) {
      state.answers[state.index] = field.value;
      persist();
    }
    state.error = "";
    if (state.editing) {
      state.editing = false;
      state.screen = "review";
    } else if (state.index === 0) {
      state.screen = "start";
    } else {
      state.index -= 1;
    }
    render();
    return;
  }

  if (action === "next") {
    if (!commitAnswer()) return;
    if (state.editing || state.index === QUESTIONS.length - 1) {
      state.editing = false;
      state.screen = "review";
      persist();
      render();
      return;
    }
    state.index += 1;
    render();
    return;
  }

  if (action === "back-last") {
    state.index = QUESTIONS.length - 1;
    state.editing = false;
    state.screen = "question";
    state.error = "";
    render();
    return;
  }

  if (action === "review") {
    state.screen = "review";
    state.error = "";
    render();
    return;
  }

  if (action === "save") {
    saveAnswers();
  }
}

function buildMarkdown() {
  const stamp = new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date());
  const parts = [`# Ответы`, ``, `Дата: ${stamp}`, ``];

  let currentSection = "";
  QUESTIONS.forEach((question, index) => {
    if (question.section !== currentSection) {
      currentSection = question.section;
      parts.push(`## ${currentSection}`, ``);
    }
    parts.push(`### ${question.text}`, ``, state.answers[index].trim(), ``);
  });

  return parts.join("\n");
}

function suggestedName() {
  const now = new Date();
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
  return `Ответы-${date}.md`;
}

function downloadFile(filename, contents) {
  const blob = new Blob([contents], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function saveAnswers() {
  const filename = suggestedName();
  downloadFile(filename, buildMarkdown());
  state.savedName = filename;
  state.screen = "saved";
  state.error = "";
  render();
}

const hiddenLabelStyle = document.createElement("style");
hiddenLabelStyle.textContent = `.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}`;
document.head.append(hiddenLabelStyle);

loadDraft();
render();
