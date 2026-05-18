/* =====================================================
   LR Clinic — interactions, i18n, animations
   ===================================================== */

(() => {
  'use strict';

  /* ---------------- TRANSLATIONS ---------------- */
  const dict = {
    ru: {
      'meta.description': 'LR Clinic — стоматология и элайнеры в Астане. Премиальный уход, современные технологии, опытные врачи.',

      'nav.about': 'О клинике',
      'nav.services': 'Услуги',
      'nav.team': 'Команда',
      'nav.faq': 'Вопросы',
      'nav.contact': 'Контакты',
      'nav.cta': 'Записаться',

      'hero.eyebrow': 'Стоматология премиум-класса · Астана',
      'hero.title1': 'LR Clinic',
      'hero.title2': 'Dentistry & Aligners',
      'hero.subtitle': 'Мы улучшаем вашу улыбку и качество жизни.',
      'hero.cta1': 'Записаться на консультацию',
      'hero.cta2': 'Узнать больше',
      'hero.meta1': 'лет опыта',
      'hero.meta2': 'стерильность',
      'hero.meta3': 'профильных врача',
      'hero.badge': 'Запись открыта',
      'hero.scroll': 'Прокрутите вниз',

      'about.eyebrow': 'О клинике',
      'about.title': 'Мы не просто лечим зубы — мы улучшаем качество жизни.',
      'about.p1': 'Наша команда сочетает клиническую экспертизу, современные технологии и высокие стандарты заботы в каждой детали приёма.',
      'about.p2': 'Мы создали LR Clinic для тех, кто ценит точность, спокойствие и долгосрочный результат — где медицинская строгость встречается с тёплым человеческим подходом.',
      'about.v1t': 'Точность',
      'about.v1d': 'Цифровая диагностика и предсказуемые протоколы лечения.',
      'about.v2t': 'Спокойствие',
      'about.v2d': 'Атмосфера, в которой не страшно, не больно, не тревожно.',
      'about.v3t': 'Долговечность',
      'about.v3d': 'Работаем на годы вперёд — с акцентом на профилактику.',

      'services.eyebrow': 'Услуги',
      'services.title': 'Полный спектр стоматологической помощи',
      'services.sub': 'От профилактики до сложной имплантологии — в одном пространстве, под наблюдением профильных специалистов.',
      's.therapy.t': 'Терапия',
      's.therapy.d': 'Лечение дёсен и кариеса любой сложности с использованием микроскопа.',
      's.aesth.t': 'Эстетические реставрации',
      's.aesth.d': 'Композитные реставрации, виниры и люминиры — естественная белизна и форма.',
      's.surg.t': 'Хирургия и имплантология',
      's.surg.d': 'Удаление зубов, имплантация, лечение рецессии дёсен, пластика уздечки.',
      's.endo.t': 'Эндодонтия',
      's.endo.d': 'Лечение каналов, терапия пульпы, сохранение собственного зуба.',
      's.ortho.t': 'Ортопедия',
      's.ortho.d': 'Коронки, виниры, вкладки, мостовидные протезы — индивидуальная работа.',
      's.hyg.t': 'Гигиена и профилактика',
      's.hyg.d': 'Профессиональная чистка, отбеливание — кабинетное, домашнее, лазерное.',

      'team.eyebrow': 'Команда',
      'team.title': 'Врачи, которым доверяют',
      'team.sub': 'Каждый специалист LR Clinic — это многолетняя практика, постоянное обучение и любовь к делу.',
      'team.m1.name': 'Усманова Лаура Роллановна',
      'team.m1.role': 'Главный врач',
      'team.m1.bio': 'Руководит клинической работой и стандартами качества LR Clinic.',
      'team.m2.name': 'Каржас Айжан Аслановна',
      'team.m2.role': 'Хирург · Ортопед · Имплантолог',
      'team.m2.bio': 'Имплантация, протезирование и сложные хирургические случаи.',
      'team.m3.name': 'Тілеуқұл Әмина Талғатқызы',
      'team.m3.role': 'Терапевт · Эндодонтист · Микроскопист · Детский стоматолог',
      'team.m3.bio': 'Лечение под микроскопом и бережная работа с детьми.',

      'trust.eyebrow': 'Доверие и комфорт',
      'trust.title': 'Почему пациенты боятся стоматологов — и как мы это меняем',
      'trust.lede': 'Мы понимаем тревогу пациентов и выстраиваем приём так, чтобы её не было.',
      'trust.f1': 'Страх боли',
      'trust.f2': 'Страх из детства',
      'trust.f3': 'Стоимость лечения',
      'trust.p1t': 'Местная анестезия',
      'trust.p1d': 'Современные препараты — лечение проходит без боли.',
      'trust.p2t': 'Бережные техники',
      'trust.p2d': 'Минимально-инвазивные подходы и работа под микроскопом.',
      'trust.p3t': 'Опытные врачи',
      'trust.p3d': 'Команда, которая объясняет каждый шаг лечения.',
      'trust.msg': 'В LR Clinic мы обеспечиваем спокойствие и комфорт.',

      'edu.eyebrow1': 'Почему важен рентген',
      'edu.title1': 'Снимок — это диагноз, а не формальность',
      'edu.p1': 'Рентген позволяет увидеть кариес между зубами, состояние корней и костной ткани. Без него лечение — это работа вслепую.',
      'edu.eyebrow2': 'Чем опасна отсрочка',
      'edu.title2': 'Что происходит, если откладывать',
      'edu.f1': 'Кариес',
      'edu.f2': 'Поражение нерва',
      'edu.f3': 'Удаление',
      'edu.f4': 'Имплант',
      'edu.p2': 'Чем раньше — тем меньше времени, средств и переживаний.',

      'care.eyebrow': 'Уход за полостью рта',
      'care.title': 'Ваш ежедневный ритуал',
      'care.sub': 'Простая последовательность, которая сохраняет результат лечения на годы.',
      'care.morning': 'Утро',
      'care.m1': 'Мягкая щётка и паста с фтором',
      'care.m2': 'Ирригатор',
      'care.m3': 'Ополаскиватель',
      'care.evening': 'Вечер',
      'care.e1': 'Тщательная чистка',
      'care.e2': 'Зубная нить',
      'care.e3': 'После чистки — не есть',

      'faq.eyebrow': 'Вопросы и ответы',
      'faq.title': 'Часто задаваемые вопросы',
      'faq.q1': 'Почему зуб может болеть после лечения?',
      'faq.a1': 'Это естественная реакция тканей на вмешательство — обычно проходит за 2–5 дней. Если боль усиливается, обязательно свяжитесь с нами.',
      'faq.q2': 'Нужно ли лечить зуб, если он не болит?',
      'faq.a2': 'Да. Кариес и воспаление развиваются без боли месяцами. Раннее лечение — это сохранение зуба и значительно меньшие затраты.',
      'faq.q3': 'В чём разница между кариесом и пульпитом?',
      'faq.a3': 'Кариес — это разрушение твёрдых тканей зуба. Пульпит — воспаление нерва, как правило, следствие нелеченого кариеса.',
      'faq.q4': 'Почему перед лечением делают рентген?',
      'faq.a4': 'Чтобы увидеть скрытые поражения, оценить корни и костную ткань. Без снимка диагноз будет неполным.',

      'family.eyebrow': 'Семейная стоматология',
      'family.title': 'Семьи выбирают LR Clinic',
      'family.p': 'Потому что мы делаем акцент на профилактике — а не только на лечении. Это значит меньше визитов «по боли» и больше уверенности в здоровье ваших близких.',
      'family.cta': 'Записаться семьёй',

      'steril.eyebrow': 'Стерилизация и безопасность',
      'steril.title': 'Безопасность — без компромиссов',
      'steril.t1': 'Протоколы стерилизации',
      'steril.d1': 'Полный цикл обработки в соответствии с международными стандартами.',
      'steril.t2': 'Одноразовые материалы',
      'steril.d2': 'Расходные материалы — индивидуальные, упаковка вскрывается при пациенте.',
      'steril.t3': 'Многоэтапная обработка',
      'steril.d3': 'Дезинфекция, ультразвук, автоклавирование — для каждого инструмента.',

      'footer.tag': 'Мы не просто лечим зубы — мы улучшаем качество жизни.',
      'footer.h1': 'Контакты',
      'footer.h2': 'Соцсети',
      'footer.h3': 'Часы приёма',
      'footer.addr': 'Астана, ул. Аскара Токпанова 8/5',
      'footer.hrs1': 'Пн–Сб: 09:00 — 20:00',
      'footer.hrs2': 'Вс: по записи',
      'footer.rights': 'Все права защищены.',
      'footer.made': 'Astana · Kazakhstan',
    },

    kz: {
      'meta.description': 'LR Clinic — Астанадағы стоматология және элайнерлер. Премиум күтім, заманауи технологиялар, тәжірибелі дәрігерлер.',

      'nav.about': 'Клиника туралы',
      'nav.services': 'Қызметтер',
      'nav.team': 'Команда',
      'nav.faq': 'Сұрақтар',
      'nav.contact': 'Байланыс',
      'nav.cta': 'Жазылу',

      'hero.eyebrow': 'Премиум-класс стоматология · Астана',
      'hero.title1': 'LR Clinic',
      'hero.title2': 'Стоматология және Элайнерлер',
      'hero.subtitle': 'Біз сіздің күлкіңіз бен өмір сапаңызды жақсартамыз.',
      'hero.cta1': 'Кеңеске жазылу',
      'hero.cta2': 'Толығырақ',
      'hero.meta1': 'жыл тәжірибе',
      'hero.meta2': 'стерильділік',
      'hero.meta3': 'мамандандырылған дәрігер',
      'hero.badge': 'Жазылу ашық',
      'hero.scroll': 'Төмен қарай жылжыту',

      'about.eyebrow': 'Клиника туралы',
      'about.title': 'Біз жай ғана тіс емдемейміз — біз өмір сапасын жақсартамыз.',
      'about.p1': 'Біздің команда клиникалық тәжірибені, заманауи технологияларды және күтімнің жоғары стандарттарын әр бөлшекте біріктіреді.',
      'about.p2': 'LR Clinic-ті дәлдікті, тыныштықты және ұзақ мерзімді нәтижені бағалайтындар үшін жасадық — медициналық қаталдық жылы адамдық көзқараспен ұштасады.',
      'about.v1t': 'Дәлдік',
      'about.v1d': 'Цифрлық диагностика және болжамды емдеу хаттамалары.',
      'about.v2t': 'Тыныштық',
      'about.v2d': 'Қорқынышсыз, ауыртпасыз, толқу жоқ атмосфера.',
      'about.v3t': 'Ұзақ мерзімділік',
      'about.v3d': 'Алдын алуға басты назар аударып, жылдар бойы жұмыс істейміз.',

      'services.eyebrow': 'Қызметтер',
      'services.title': 'Стоматологиялық көмектің толық спектрі',
      'services.sub': 'Алдын алудан күрделі имплантологияға дейін — бір кеңістікте, мамандар бақылауында.',
      's.therapy.t': 'Терапия',
      's.therapy.d': 'Кез келген күрделіліктегі қызыл иек пен тіс жегісін микроскоппен емдеу.',
      's.aesth.t': 'Эстетикалық реставрациялар',
      's.aesth.d': 'Композиттік реставрациялар, винирлер және люминирлер — табиғи аппақтық пен пішін.',
      's.surg.t': 'Хирургия және имплантология',
      's.surg.d': 'Тісті жұлу, имплантация, қызыл иек рецессиясын емдеу, ауыз тұтқырлығын түзету.',
      's.endo.t': 'Эндодонтия',
      's.endo.d': 'Тіс түбі арналарын емдеу, пульпа терапиясы, өз тісіңізді сақтау.',
      's.ortho.t': 'Ортопедия',
      's.ortho.d': 'Коронкалар, винирлер, кірмелер, көпір протездер — жеке жұмыс.',
      's.hyg.t': 'Гигиена және алдын алу',
      's.hyg.d': 'Кәсіби тазалау, ағарту — кабинеттік, үйде, лазерлік.',

      'team.eyebrow': 'Команда',
      'team.title': 'Сенім артатын дәрігерлер',
      'team.sub': 'LR Clinic-тің әр маманы — ұзақ жылдық тәжірибе, үздіксіз оқу және ісіне деген сүйіспеншілік.',
      'team.m1.name': 'Усманова Лаура Роллановна',
      'team.m1.role': 'Бас дәрігер',
      'team.m1.bio': 'LR Clinic-тің клиникалық жұмысы мен сапа стандарттарын басқарады.',
      'team.m2.name': 'Қаржас Айжан Аслановна',
      'team.m2.role': 'Хирург · Ортопед · Имплантолог',
      'team.m2.bio': 'Имплантация, протездеу және күрделі хирургиялық жағдайлар.',
      'team.m3.name': 'Тілеуқұл Әмина Талғатқызы',
      'team.m3.role': 'Терапевт · Эндодонтист · Микроскопист · Балалар стоматологы',
      'team.m3.bio': 'Микроскоппен емдеу және балалармен мұқият жұмыс.',

      'trust.eyebrow': 'Сенім және жайлылық',
      'trust.title': 'Пациенттер неге стоматологтан қорқады — біз мұны қалай өзгертеміз',
      'trust.lede': 'Біз пациенттердің мазасыздығын түсінеміз және қабылдауды соны болдырмайтындай етіп құрамыз.',
      'trust.f1': 'Ауырсыну қорқынышы',
      'trust.f2': 'Балалықтан келген қорқыныш',
      'trust.f3': 'Емдеу құны',
      'trust.p1t': 'Жергілікті анестезия',
      'trust.p1d': 'Заманауи препараттар — ем ауырсынусыз өтеді.',
      'trust.p2t': 'Мұқият әдістер',
      'trust.p2d': 'Минималды-инвазивті тәсілдер мен микроскоппен жұмыс.',
      'trust.p3t': 'Тәжірибелі дәрігерлер',
      'trust.p3d': 'Емдеудің әр қадамын түсіндіретін команда.',
      'trust.msg': 'LR Clinic-те біз тыныштық пен жайлылықты қамтамасыз етеміз.',

      'edu.eyebrow1': 'Рентген неге маңызды',
      'edu.title1': 'Сурет — бұл диагноз, формалдылық емес',
      'edu.p1': 'Рентген тістер арасындағы жегіні, тамырлар мен сүйек тінінің жағдайын көруге мүмкіндік береді. Онсыз ем — соқыр жұмыс.',
      'edu.eyebrow2': 'Кейінге қалдыру қаупі',
      'edu.title2': 'Кейінге қалдырсаңыз не болады',
      'edu.f1': 'Тіс жегісі',
      'edu.f2': 'Нервтің зақымдалуы',
      'edu.f3': 'Жұлу',
      'edu.f4': 'Имплант',
      'edu.p2': 'Неғұрлым ерте — соғұрлым уақыт, қаражат пен уайым аз.',

      'care.eyebrow': 'Ауыз қуысын күту',
      'care.title': 'Сіздің күнделікті рәсіміңіз',
      'care.sub': 'Ем нәтижесін жылдар бойы сақтайтын қарапайым ретпен.',
      'care.morning': 'Таң',
      'care.m1': 'Жұмсақ щётка және фторлы паста',
      'care.m2': 'Ирригатор',
      'care.m3': 'Ауыз шаятын құрал',
      'care.evening': 'Кеш',
      'care.e1': 'Мұқият тазалау',
      'care.e2': 'Тіс жібі',
      'care.e3': 'Тазалаудан кейін — тамақ жемеу',

      'faq.eyebrow': 'Сұрақтар мен жауаптар',
      'faq.title': 'Жиі қойылатын сұрақтар',
      'faq.q1': 'Емдеуден кейін тіс неге ауыруы мүмкін?',
      'faq.a1': 'Бұл тіндердің араласуға табиғи реакциясы — әдетте 2–5 күнде өтеді. Ауырсыну күшейсе, бізге міндетті түрде хабарласыңыз.',
      'faq.q2': 'Тіс ауырмаса, оны емдеу керек пе?',
      'faq.a2': 'Иә. Тіс жегісі мен қабыну ауырсынусыз айлар бойы дамиды. Ерте ем — тісті сақтау және әлдеқайда аз шығын.',
      'faq.q3': 'Тіс жегісі мен пульпиттің айырмашылығы неде?',
      'faq.a3': 'Тіс жегісі — тістің қатты тіндерінің бұзылуы. Пульпит — нервтің қабынуы, әдетте емделмеген жегінің салдары.',
      'faq.q4': 'Емдеуден бұрын рентген неге жасалады?',
      'faq.a4': 'Жасырын зақымдарды көру, тамырлар мен сүйек тінін бағалау үшін. Суретсіз диагноз толық болмайды.',

      'family.eyebrow': 'Отбасылық стоматология',
      'family.title': 'Отбасылар LR Clinic-ті таңдайды',
      'family.p': 'Себебі біз тек емдеуге емес, алдын алуға басты назар аударамыз. Бұл «ауырғаннан кейінгі» сапарлардың азаюы және жақындарыңыздың денсаулығына көбірек сенімділік дегенді білдіреді.',
      'family.cta': 'Отбасымен жазылу',

      'steril.eyebrow': 'Стерилизация және қауіпсіздік',
      'steril.title': 'Қауіпсіздік — ымырасыз',
      'steril.t1': 'Стерилизация хаттамалары',
      'steril.d1': 'Халықаралық стандарттарға сәйкес толық өңдеу циклі.',
      'steril.t2': 'Бір реттік материалдар',
      'steril.d2': 'Шығын материалдары — жеке, орамасы пациент алдында ашылады.',
      'steril.t3': 'Көп сатылы өңдеу',
      'steril.d3': 'Дезинфекция, ультрадыбыс, автоклавтау — әр аспап үшін.',

      'footer.tag': 'Біз жай ғана тіс емдемейміз — біз өмір сапасын жақсартамыз.',
      'footer.h1': 'Байланыс',
      'footer.h2': 'Әлеуметтік желілер',
      'footer.h3': 'Қабылдау сағаттары',
      'footer.addr': 'Астана, Асқар Тоқпанов көшесі 8/5',
      'footer.hrs1': 'Дс–Сб: 09:00 — 20:00',
      'footer.hrs2': 'Жс: жазылу бойынша',
      'footer.rights': 'Барлық құқықтар қорғалған.',
      'footer.made': 'Astana · Қазақстан',
    },
  };

  /* ---------------- I18N ---------------- */
  const STORAGE_KEY = 'lr_lang';
  const supported = ['ru', 'kz'];

  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && supported.includes(saved)) return saved;
    const browser = (navigator.language || 'ru').slice(0, 2).toLowerCase();
    if (browser === 'kk' || browser === 'kz') return 'kz';
    return 'ru';
  }

  function applyLang(lang) {
    if (!supported.includes(lang)) lang = 'ru';
    const map = dict[lang];

    document.documentElement.lang = lang === 'kz' ? 'kk' : 'ru';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (map[key] === undefined) return;
      if (el.tagName === 'META') {
        el.setAttribute('content', map[key]);
      } else {
        el.textContent = map[key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(getInitialLang());

  /* ---------------- NAV ---------------- */
  const nav = document.getElementById('nav');
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open) => {
    navLinks.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('is-menu-open', open);
  };

  burger?.addEventListener('click', () => {
    const open = !navLinks.classList.contains('is-open');
    setMenu(open);
  });

  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setMenu(false));
  });

  // Close menu when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && navLinks.classList.contains('is-open')) {
      setMenu(false);
    }
  });

  // Close menu on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
      setMenu(false);
    }
  });

  /* ---------------- REVEAL ON SCROLL ---------------- */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---------------- TRUST BAR FILL ---------------- */
  const bars = document.querySelectorAll('.trust-bar');
  if ('IntersectionObserver' in window) {
    const ioBars = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector('.trust-bar-fill');
          if (fill) {
            const v = fill.getAttribute('data-fill') || '0';
            entry.target.style.setProperty('--w', v + '%');
            entry.target.classList.add('is-in-view');
          }
          ioBars.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(b => ioBars.observe(b));
  } else {
    bars.forEach(b => {
      const fill = b.querySelector('.trust-bar-fill');
      const v = fill?.getAttribute('data-fill') || '0';
      b.style.setProperty('--w', v + '%');
      b.classList.add('is-in-view');
    });
  }

  /* ---------------- FOOTER YEAR ---------------- */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------------- SMOOTH ANCHOR (offset for sticky nav) ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 78;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------------- MOUSE-FOLLOW GLOW (service cards) ---------------- */
  if (!reduce && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.service-card, .steril-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', mx + '%');
        card.style.setProperty('--my', my + '%');
      });
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mx', '50%');
        card.style.setProperty('--my', '50%');
      });
    });
  }

  /* ---------------- HERO PARALLAX (subtle) ---------------- */
  if (!reduce && window.matchMedia('(hover: hover)').matches) {
    const heroCard = document.querySelector('.hero-card');
    const hero = document.querySelector('.hero');
    if (heroCard && hero) {
      let raf = null;
      hero.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          heroCard.style.transform = `translate3d(${x * -10}px, ${y * -10}px, 0) rotate(${x * 0.6}deg)`;
          raf = null;
        });
      });
      hero.addEventListener('mouseleave', () => {
        heroCard.style.transform = '';
      });
    }
  }

  /* ---------------- BUTTON RIPPLE FEEDBACK ---------------- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (reduce) return;
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top  = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
})();
