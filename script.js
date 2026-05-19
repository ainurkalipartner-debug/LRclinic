/* =====================================================
   LR Clinic — interactions, i18n, animations
   ===================================================== */

(() => {
  'use strict';

  /* ---------------- TRANSLATIONS ---------------- */
  const dict = {
    ru: {
      'meta.description': 'LR Clinic — стоматология и элайнеры в Астане. Премиальный уход, современные технологии, опытные врачи.',

      'nav.about': 'о клинике',
      'nav.services': 'услуги',
      'nav.gallery': 'работы',
      'nav.team': 'команда',
      'nav.reviews': 'отзывы',
      'nav.faq': 'вопросы',
      'nav.careers': 'карьера',
      'nav.contact': 'контакты',
      'nav.cta': 'записаться',
      'nav.mobLabel': 'связаться',

      'hero.eyebrow': 'бережная стоматология · астана',
      'hero.title1': 'забота о вашей улыбке,',
      'hero.title2': 'забота о вас.',
      'hero.subtitle': 'современная стоматология с тёплым человеческим подходом — там, где о вас заботятся, а не просто лечат.',
      'hero.cta1': 'Записаться на консультацию',
      'hero.cta2': 'Узнать больше',
      'hero.meta1': 'лет опыта',
      'hero.meta2': 'стерильность',
      'hero.meta3': 'профильных врача',
      'hero.badge': 'Запись открыта',

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
      's.therapy.t': 'терапия',
      's.therapy.d': 'Лечение дёсен и кариеса любой сложности с использованием микроскопа.',
      's.therapy.t1': 'лечение кариеса',
      's.therapy.t2': 'лечение дёсен',
      's.therapy.t3': 'микроскопическая терапия',
      's.aesth.t': 'эстетические реставрации',
      's.aesth.d': 'Композитные реставрации, виниры и люминиры — естественная белизна и форма.',
      's.aesth.t1': 'композитные реставрации',
      's.aesth.t2': 'виниры',
      's.aesth.t3': 'люминиры',
      's.surg.t': 'хирургия и имплантология',
      's.surg.d': 'Удаление зубов, имплантация, лечение рецессии дёсен, пластика уздечки.',
      's.surg.t1': 'имплантация',
      's.surg.t2': 'удаление зубов',
      's.surg.t3': 'пластика уздечки',
      's.surg.t4': 'лечение рецессии дёсен',
      's.endo.t': 'эндодонтия',
      's.endo.d': 'Лечение каналов, терапия пульпы, сохранение собственного зуба.',
      's.endo.t1': 'лечение каналов',
      's.endo.t2': 'терапия пульпы',
      's.endo.t3': 'сохранение зуба',
      's.ortho.t': 'ортопедия',
      's.ortho.d': 'Коронки, виниры, вкладки, мостовидные протезы — индивидуальная работа.',
      's.ortho.t1': 'коронки',
      's.ortho.t2': 'вкладки',
      's.ortho.t3': 'мостовидные протезы',
      's.hyg.t': 'гигиена и профилактика',
      's.hyg.d': 'Профессиональная чистка, отбеливание — кабинетное, домашнее, лазерное.',
      's.hyg.t1': 'профессиональная чистка',
      's.hyg.t2': 'отбеливание',
      's.hyg.t3': 'фторирование',

      'cta.title': 'консультация по телефону',
      'cta.sub': 'оставьте номер — мы перезвоним и ответим на все вопросы.',
      'cta.fname': 'имя и фамилия',
      'cta.fphone': 'телефон',
      'cta.btn': 'отправить',
      'cta.note': 'нажимая «отправить», вы соглашаетесь с обработкой персональных данных.',
      'cta.success': 'спасибо! мы свяжемся с вами в ближайшее время.',

      'map.eyebrow': 'мы находимся',
      'map.addr': 'астана, ул. аскара токпанова 8/5',
      'map.link': 'построить маршрут →',
      'map.h1': 'часы приёма',
      'map.hrs1': 'пн–пт 10:00–21:00',
      'map.hrs2': 'сб–вс 10:00–16:00',
      'map.h2': 'телефон',

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

      'gallery.eyebrow': 'до — после',
      'gallery.title': 'примеры наших работ',
      'gallery.sub': 'реальные результаты — без ретуши, без фильтров.',
      'gallery.before': 'до',
      'gallery.after': 'после',
      'gallery.v.name': 'виниры',
      'gallery.v.note': 'естественная белизна и форма передних зубов.',
      'gallery.r.name': 'художественная реставрация',
      'gallery.r.note': 'восстановление формы и цвета без потери собственного зуба.',
      'gallery.c.name': 'лечение кариеса',
      'gallery.c.note': 'бережная работа под микроскопом, незаметные пломбы.',
      'gallery.i.name': 'одномоментная имплантация',
      'gallery.i.note': 'удаление и установка импланта в одно посещение.',
      'gallery.cl.name': 'чистка зубов',
      'gallery.cl.note': 'профессиональная гигиена — налёт, камень, потемнение эмали.',
      'gallery.g.name': 'закрытие щели',
      'gallery.g.note': 'художественная реставрация диастемы — без обточки и виниров.',

      'careers.eyebrow': 'присоединяйтесь',
      'careers.title': 'карьера и сотрудничество',
      'careers.sub': 'мы открыты к талантам, обучению и долгосрочному партнёрству.',
      'careers.c1.title': 'отправить резюме',
      'careers.c1.desc': 'вы стоматолог, ассистент или администратор? пришлите резюме — мы рассмотрим и свяжемся в течение нескольких дней.',
      'careers.c1.cta': 'написать в WhatsApp',
      'careers.c2.title': 'программа стажировки',
      'careers.c2.desc': 'для студентов и молодых специалистов — наставничество под руководством главного врача и работа в современной клинике.',
      'careers.c2.cta': 'подать заявку',
      'careers.c3.title': 'сотрудничество',
      'careers.c3.desc': 'партнёрство с поставщиками, лабораториями, обучающими центрами и брендами в сфере стоматологии.',
      'careers.c3.cta': 'обсудить',

      'reviews.eyebrow': 'отзывы пациентов',
      'reviews.title': 'слова, которые мы получаем чаще всего',
      'reviews.sub': 'реальные истории людей, которые доверили нам свои улыбки.',
      'reviews.r1.text': '«Прекрасная клиника! Лаура Роллановна сделала реставрацию переднего зуба — отличить невозможно. Очень внимательное отношение и спокойная атмосфера.»',
      'reviews.r1.name': 'Алина М.',
      'reviews.r1.date': '2GIS · 2025',
      'reviews.r2.text': '«Делала имплантацию у Айжан Аслановны. Всё прошло безболезненно, врач спокойно объясняла каждый шаг. Через 4 месяца поставили коронку — выглядит идеально.»',
      'reviews.r2.name': 'Айгерим К.',
      'reviews.r2.date': '2GIS · 2025',
      'reviews.r3.text': '«Боюсь стоматологов с детства, но здесь чувствую себя спокойно. Амина Талгатқызы работает под микроскопом — очень аккуратно и без боли. Искренне рекомендую.»',
      'reviews.r3.name': 'Дина Р.',
      'reviews.r3.date': '2GIS · 2024',
      'reviews.r4.text': '«Привожу всю семью. Дочка перестала бояться стоматолога. Чисто, уютно, врачи внимательные. Отдельно отмечу стерильность — все упаковки вскрывают при тебе.»',
      'reviews.r4.name': 'Сергей В.',
      'reviews.r4.date': '2GIS · 2024',
      'reviews.r5.text': '«Лечила глубокий кариес. Врач объяснила, что нерв удалять не нужно — сохранили зуб. Прошёл почти год, ничего не беспокоит. Спасибо за профессионализм.»',
      'reviews.r5.name': 'Жанар Н.',
      'reviews.r5.date': '2GIS · 2024',
      'reviews.r6.text': '«Чистка и отбеливание — результат превзошёл ожидания. Девочки на ресепшене очень милые, записаться легко через WhatsApp. Однозначно возвращаемся.»',
      'reviews.r6.name': 'Эльвира А.',
      'reviews.r6.date': '2GIS · 2024',
      'reviews.cta': 'читать все отзывы на 2gis →',

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
      'footer.hrs1': 'Пн–Пт: 10:00 — 21:00',
      'footer.hrs2': 'Сб–Вс: 10:00 — 16:00',
      'footer.rights': 'Все права защищены.',
      'footer.made': 'Astana · Kazakhstan',
    },

    kz: {
      'meta.description': 'LR Clinic — Астанадағы стоматология және элайнерлер. Премиум күтім, заманауи технологиялар, тәжірибелі дәрігерлер.',

      'nav.about': 'клиника туралы',
      'nav.services': 'қызметтер',
      'nav.gallery': 'жұмыстарымыз',
      'nav.team': 'команда',
      'nav.reviews': 'пікірлер',
      'nav.faq': 'сұрақтар',
      'nav.careers': 'карьера',
      'nav.contact': 'байланыс',
      'nav.cta': 'жазылу',
      'nav.mobLabel': 'байланысу',

      'hero.eyebrow': 'күтімді тіс емханасы · астана',
      'hero.title1': 'сіздің күлкіңізге қамқорлық —',
      'hero.title2': 'өзіңізге қамқорлық.',
      'hero.subtitle': 'заманауи стоматология жылы, адами көзқараспен — бұл жерде сізді жай емдемейді, сіз туралы қамқорлық жасайды.',
      'hero.cta1': 'Кеңеске жазылу',
      'hero.cta2': 'Толығырақ',
      'hero.meta1': 'жыл тәжірибе',
      'hero.meta2': 'стерильділік',
      'hero.meta3': 'мамандандырылған дәрігер',
      'hero.badge': 'Жазылу ашық',

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
      's.therapy.t': 'терапия',
      's.therapy.d': 'Кез келген күрделіліктегі қызыл иек пен тіс жегісін микроскоппен емдеу.',
      's.therapy.t1': 'тіс жегісін емдеу',
      's.therapy.t2': 'қызыл иек емдеу',
      's.therapy.t3': 'микроскопиялық терапия',
      's.aesth.t': 'эстетикалық реставрациялар',
      's.aesth.d': 'Композиттік реставрациялар, винирлер және люминирлер — табиғи аппақтық пен пішін.',
      's.aesth.t1': 'композиттік реставрациялар',
      's.aesth.t2': 'винирлер',
      's.aesth.t3': 'люминирлер',
      's.surg.t': 'хирургия және имплантология',
      's.surg.d': 'Тісті жұлу, имплантация, қызыл иек рецессиясын емдеу, ауыз тұтқырлығын түзету.',
      's.surg.t1': 'имплантация',
      's.surg.t2': 'тісті жұлу',
      's.surg.t3': 'тұтқыр пластикасы',
      's.surg.t4': 'қызыл иек рецессиясын емдеу',
      's.endo.t': 'эндодонтия',
      's.endo.d': 'Тіс түбі арналарын емдеу, пульпа терапиясы, өз тісіңізді сақтау.',
      's.endo.t1': 'тіс түбі арналарын емдеу',
      's.endo.t2': 'пульпа терапиясы',
      's.endo.t3': 'тісті сақтау',
      's.ortho.t': 'ортопедия',
      's.ortho.d': 'Коронкалар, винирлер, кірмелер, көпір протездер — жеке жұмыс.',
      's.ortho.t1': 'коронкалар',
      's.ortho.t2': 'кірмелер',
      's.ortho.t3': 'көпір протездер',
      's.hyg.t': 'гигиена және алдын алу',
      's.hyg.d': 'Кәсіби тазалау, ағарту — кабинеттік, үйде, лазерлік.',
      's.hyg.t1': 'кәсіби тазалау',
      's.hyg.t2': 'ағарту',
      's.hyg.t3': 'фторлау',

      'cta.title': 'телефон арқылы кеңес',
      'cta.sub': 'нөміріңізді қалдырыңыз — біз қайта қоңырау шалып, барлық сұрақтарға жауап береміз.',
      'cta.fname': 'аты-жөні',
      'cta.fphone': 'телефон',
      'cta.btn': 'жіберу',
      'cta.note': '«жіберу» түймесін басу арқылы сіз дербес деректерді өңдеуге келісім бересіз.',
      'cta.success': 'рахмет! біз сізбен жақын арада хабарласамыз.',

      'map.eyebrow': 'біз орналасқан жер',
      'map.addr': 'астана, асқар тоқпанов көшесі 8/5',
      'map.link': 'жол бойынша өту →',
      'map.h1': 'қабылдау сағаттары',
      'map.hrs1': 'дс–жм 10:00–21:00',
      'map.hrs2': 'сб–жс 10:00–16:00',
      'map.h2': 'телефон',

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

      'gallery.eyebrow': 'дейін — кейін',
      'gallery.title': 'жұмыстарымыздың үлгілері',
      'gallery.sub': 'нақты нәтижелер — ретушсіз, фильтрсіз.',
      'gallery.before': 'дейін',
      'gallery.after': 'кейін',
      'gallery.v.name': 'винирлер',
      'gallery.v.note': 'алдыңғы тістердің табиғи аппақтығы мен пішіні.',
      'gallery.r.name': 'көркем реставрация',
      'gallery.r.note': 'өз тісіңізді жоғалтпай пішін мен түсті қалпына келтіру.',
      'gallery.c.name': 'тіс жегісін емдеу',
      'gallery.c.note': 'микроскоппен мұқият жұмыс, көзге көрінбейтін пломбалар.',
      'gallery.i.name': 'бір сәттік имплантация',
      'gallery.i.note': 'бір қабылдауда тісті жұлу және имплантты орнату.',
      'gallery.cl.name': 'тістерді тазалау',
      'gallery.cl.note': 'кәсіби гигиена — қақ, тас, эмаль қараюы.',
      'gallery.g.name': 'тістер арасындағы саңылауды жабу',
      'gallery.g.note': 'диастеманы көркем реставрациялау — тісті жонусыз, винирсіз.',

      'careers.eyebrow': 'бізге қосылыңыз',
      'careers.title': 'карьера және серіктестік',
      'careers.sub': 'біз талантты, оқуды және ұзақ мерзімді серіктестікті қолдаймыз.',
      'careers.c1.title': 'түйіндеме жіберу',
      'careers.c1.desc': 'сіз стоматолог, ассистент немесе администраторсыз ба? түйіндемеңізді жіберіңіз — біз қарап, бірнеше күн ішінде хабарласамыз.',
      'careers.c1.cta': 'WhatsApp-қа жазу',
      'careers.c2.title': 'тағылымдама бағдарламасы',
      'careers.c2.desc': 'студенттер мен жас мамандарға — бас дәрігер басшылығымен тәлімгерлік және заманауи клиникада жұмыс.',
      'careers.c2.cta': 'өтінім беру',
      'careers.c3.title': 'серіктестік',
      'careers.c3.desc': 'жеткізушілермен, зертханалармен, оқу орталықтарымен және стоматология саласындағы брендтермен серіктестік.',
      'careers.c3.cta': 'талқылау',

      'reviews.eyebrow': 'пациенттер пікірлері',
      'reviews.title': 'біз ең жиі еститін сөздер',
      'reviews.sub': 'күлкісін бізге сеніп тапсырған адамдардың шынайы әңгімелері.',
      'reviews.r1.text': '«Тамаша клиника! Лаура Роллановна алдыңғы тісімді қалпына келтірді — айырмашылық жоқ. Өте мұқият қарым-қатынас және тыныш атмосфера.»',
      'reviews.r1.name': 'Алина М.',
      'reviews.r1.date': '2GIS · 2025',
      'reviews.r2.text': '«Айжан Аслановнадан имплантация жасадым. Барлығы ауырсынусыз өтті, дәрігер әр қадамды тыныш түсіндірді. 4 айдан кейін коронка қойылды — өте әдемі көрінеді.»',
      'reviews.r2.name': 'Айгерим К.',
      'reviews.r2.date': '2GIS · 2025',
      'reviews.r3.text': '«Балалықтан стоматологтан қорқамын, бірақ мұнда өзімді жайлы сезінемін. Әмина Талғатқызы микроскоппен жұмыс істейді — өте мұқият және ауырсынусыз. Шын жүректен ұсынамын.»',
      'reviews.r3.name': 'Дина Р.',
      'reviews.r3.date': '2GIS · 2024',
      'reviews.r4.text': '«Барлық отбасымды әкелемін. Қызым енді стоматологтан қорықпайды. Таза, жайлы, дәрігерлер мұқият. Стерильділік жеке-дара айта кетейін — барлық қаптамалар сіздің көзіңізше ашылады.»',
      'reviews.r4.name': 'Сергей В.',
      'reviews.r4.date': '2GIS · 2024',
      'reviews.r5.text': '«Терең тіс жегісін емдеттім. Дәрігер нервті алып тастаудың қажеті жоқ деп түсіндірді — тісті сақтап қалдық. Бір жылға жуық уақыт өтті, ешнәрсе мазаламайды. Кәсібилігі үшін рахмет.»',
      'reviews.r5.name': 'Жанар Н.',
      'reviews.r5.date': '2GIS · 2024',
      'reviews.r6.text': '«Тазалау және ағарту — нәтиже күткеннен де асып түсті. Ресепшендегі қыздар өте сүйкімді, WhatsApp арқылы жазылу оңай. Қайта оралатынымыз сөзсіз.»',
      'reviews.r6.name': 'Эльвира А.',
      'reviews.r6.date': '2GIS · 2024',
      'reviews.cta': '2gis-те барлық пікірлерді оқу →',

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
      'footer.hrs1': 'Дс–Жм: 10:00 — 21:00',
      'footer.hrs2': 'Сб–Жс: 10:00 — 16:00',
      'footer.rights': 'Барлық құқықтар қорғалған.',
      'footer.made': 'Astana · Қазақстан',
    },

    en: {
      'meta.description': 'LR Clinic — gentle dentistry and aligners in Astana. Premium care, modern technology, experienced doctors.',

      'nav.about': 'about',
      'nav.services': 'services',
      'nav.gallery': 'work',
      'nav.team': 'team',
      'nav.reviews': 'reviews',
      'nav.faq': 'faq',
      'nav.careers': 'careers',
      'nav.contact': 'contacts',
      'nav.cta': 'book',

      'hero.eyebrow': 'gentle dentistry · astana',
      'hero.title1': 'caring for your smile,',
      'hero.title2': 'caring for you.',
      'hero.subtitle': 'modern dentistry with a warm, human approach — where we look after you, not just treat teeth.',
      'hero.cta1': 'book a consultation',
      'hero.cta2': 'learn more',
      'hero.meta1': 'years of practice',
      'hero.meta2': 'sterility',
      'hero.meta3': 'specialist doctors',
      'hero.badge': 'now accepting',

      'about.eyebrow': 'about the clinic',
      'about.title': "we don't just treat teeth — we improve quality of life.",
      'about.p1': 'our team combines clinical expertise, modern technology, and the highest standards of care in every detail.',
      'about.p2': 'we created LR Clinic for people who value precision, calm, and lasting results — where medical rigor meets a warm human approach.',
      'about.v1t': 'precision',
      'about.v1d': 'digital diagnostics and predictable treatment protocols.',
      'about.v2t': 'calm',
      'about.v2d': 'an atmosphere with no fear, no pain, no anxiety.',
      'about.v3t': 'longevity',
      'about.v3d': 'we work for years ahead — with prevention at the centre.',

      'services.eyebrow': 'services',
      'services.title': 'a full spectrum of dental care',
      'services.sub': 'from prevention to complex implantology — in one space, under the care of specialist doctors.',
      's.therapy.t': 'therapy',
      's.therapy.d': 'treatment of gums and caries of any complexity, performed under a microscope.',
      's.therapy.t1': 'caries treatment',
      's.therapy.t2': 'gum treatment',
      's.therapy.t3': 'microscope therapy',
      's.aesth.t': 'aesthetic restorations',
      's.aesth.d': 'composite restorations, veneers and lumineers — natural whiteness and shape.',
      's.aesth.t1': 'composite restorations',
      's.aesth.t2': 'veneers',
      's.aesth.t3': 'lumineers',
      's.surg.t': 'surgery and implantology',
      's.surg.d': 'extractions, implants, gum recession treatment, frenulum correction.',
      's.surg.t1': 'implantology',
      's.surg.t2': 'tooth extraction',
      's.surg.t3': 'frenulum plasty',
      's.surg.t4': 'gum recession treatment',
      's.endo.t': 'endodontics',
      's.endo.d': 'root canal treatment, pulp therapy, preservation of the natural tooth.',
      's.endo.t1': 'root canal treatment',
      's.endo.t2': 'pulp therapy',
      's.endo.t3': 'tooth preservation',
      's.ortho.t': 'orthopedics',
      's.ortho.d': 'crowns, veneers, inlays, bridges — bespoke craftsmanship.',
      's.ortho.t1': 'crowns',
      's.ortho.t2': 'inlays',
      's.ortho.t3': 'bridges',
      's.hyg.t': 'hygiene and prevention',
      's.hyg.d': 'professional cleaning and whitening — office, home, laser.',
      's.hyg.t1': 'professional cleaning',
      's.hyg.t2': 'whitening',
      's.hyg.t3': 'fluoridation',

      'gallery.eyebrow': 'before — after',
      'gallery.title': 'our work in detail',
      'gallery.sub': 'real results — unretouched, unfiltered.',
      'gallery.before': 'before',
      'gallery.after': 'after',
      'gallery.v.name': 'veneers',
      'gallery.v.note': 'natural whiteness and shape of the front teeth.',
      'gallery.r.name': 'artistic restoration',
      'gallery.r.note': 'restoring shape and colour while preserving the natural tooth.',
      'gallery.c.name': 'caries treatment',
      'gallery.c.note': 'gentle microscope work, invisible fillings.',
      'gallery.i.name': 'immediate implant placement',
      'gallery.i.note': 'extraction and implant placement in a single visit.',
      'gallery.cl.name': 'professional cleaning',
      'gallery.cl.note': 'plaque, calculus, and stained enamel — fully removed.',
      'gallery.g.name': 'closing a diastema',
      'gallery.g.note': 'artistic restoration of a tooth gap — no prep, no veneers.',

      'team.eyebrow': 'team',
      'team.title': 'doctors you can trust',
      'team.sub': 'every specialist at LR Clinic brings years of practice, continuous education, and care for their craft.',
      'team.m1.name': 'Laura Usmanova',
      'team.m1.role': 'chief doctor',
      'team.m1.bio': 'leads clinical work and quality standards at LR Clinic.',
      'team.m2.name': 'Aizhan Karzhas',
      'team.m2.role': 'surgeon · orthopedist · implantologist',
      'team.m2.bio': 'implantology, prosthetics, and complex surgical cases.',
      'team.m3.name': 'Amina Tileukul',
      'team.m3.role': 'therapist · endodontist · microscopist · pediatric dentist',
      'team.m3.bio': 'microscope-based treatment and gentle work with children.',

      'trust.eyebrow': 'trust and comfort',
      'trust.title': 'why patients fear dentists — and how we change that',
      'trust.lede': 'we understand the anxiety patients bring and shape every visit to dissolve it.',
      'trust.f1': 'fear of pain',
      'trust.f2': 'childhood fear',
      'trust.f3': 'cost of treatment',
      'trust.p1t': 'local anesthesia',
      'trust.p1d': 'modern formulations — treatment is genuinely painless.',
      'trust.p2t': 'gentle techniques',
      'trust.p2d': 'minimally invasive approaches and microscope precision.',
      'trust.p3t': 'experienced doctors',
      'trust.p3d': 'a team that explains every step of the treatment.',
      'trust.msg': 'at LR Clinic, calm and comfort are a given.',

      'reviews.eyebrow': 'patient reviews',
      'reviews.title': 'the words we hear most often',
      'reviews.sub': 'real stories from people who trusted us with their smiles.',
      'reviews.r1.text': '"A wonderful clinic. Laura Rollanovna restored a front tooth — you cannot tell. Calm atmosphere, attentive care."',
      'reviews.r1.name': 'Alina M.',
      'reviews.r1.date': '2GIS · 2025',
      'reviews.r2.text': '"Had an implant placed by Aizhan Aslanovna. Painless, every step explained calmly. Four months later — perfect crown."',
      'reviews.r2.name': 'Aigerim K.',
      'reviews.r2.date': '2GIS · 2025',
      'reviews.r3.text': '"I have feared dentists since childhood, but here I am calm. Amina Talgatkyzy works under a microscope — gentle and without pain. Sincerely recommend."',
      'reviews.r3.name': 'Dina R.',
      'reviews.r3.date': '2GIS · 2024',
      'reviews.r4.text': '"I bring the whole family. My daughter is no longer afraid of the dentist. Clean, comfortable, attentive doctors. Sterility is unmistakable — every package opened in front of you."',
      'reviews.r4.name': 'Sergey V.',
      'reviews.r4.date': '2GIS · 2024',
      'reviews.r5.text': '"Treated deep caries. The doctor explained the nerve could be saved — and it was. Almost a year on, no pain at all. Real professionalism."',
      'reviews.r5.name': 'Zhanar N.',
      'reviews.r5.date': '2GIS · 2024',
      'reviews.r6.text': '"Cleaning and whitening — the result exceeded my expectations. The reception staff are lovely, booking via WhatsApp is easy. We will return."',
      'reviews.r6.name': 'Elvira A.',
      'reviews.r6.date': '2GIS · 2024',
      'reviews.cta': 'read all reviews on 2gis →',

      'edu.eyebrow1': 'why x-rays matter',
      'edu.title1': "an x-ray is a diagnosis, not a formality",
      'edu.p1': 'an x-ray reveals caries between teeth and the state of roots and bone. without it, treatment is guesswork.',
      'edu.eyebrow2': 'the cost of delay',
      'edu.title2': 'what happens if you wait',
      'edu.f1': 'caries',
      'edu.f2': 'nerve damage',
      'edu.f3': 'extraction',
      'edu.f4': 'implant',
      'edu.p2': 'the earlier you act, the less time, money, and stress required.',

      'care.eyebrow': 'oral care',
      'care.title': 'your daily ritual',
      'care.sub': 'a simple routine that protects the result of treatment for years.',
      'care.morning': 'morning',
      'care.m1': 'soft brush with fluoride paste',
      'care.m2': 'water flosser',
      'care.m3': 'mouthwash',
      'care.evening': 'evening',
      'care.e1': 'thorough cleaning',
      'care.e2': 'dental floss',
      'care.e3': 'no food after brushing',

      'faq.eyebrow': 'questions and answers',
      'faq.title': 'frequently asked questions',
      'faq.q1': 'why can a tooth hurt after treatment?',
      'faq.a1': 'a natural tissue response — usually settles within 2–5 days. if pain grows, contact us immediately.',
      'faq.q2': 'should a tooth be treated if it does not hurt?',
      'faq.a2': 'yes. caries and inflammation can develop painlessly for months. early treatment saves the tooth and costs less.',
      'faq.q3': 'what is the difference between caries and pulpitis?',
      'faq.a3': 'caries is decay of the hard tissues. pulpitis is inflammation of the nerve — usually a consequence of untreated caries.',
      'faq.q4': 'why do you take an x-ray before treatment?',
      'faq.a4': 'to see hidden damage and assess roots and bone. without an x-ray, the diagnosis is incomplete.',

      'family.eyebrow': 'family dentistry',
      'family.title': 'families choose LR Clinic',
      'family.p': 'because we focus on prevention — not just treatment. fewer emergency visits, more confidence in the health of those you love.',
      'family.cta': 'book for the family',

      'careers.eyebrow': 'join us',
      'careers.title': 'careers and partnership',
      'careers.sub': 'we are open to talent, mentorship, and lasting collaboration.',
      'careers.c1.title': 'submit a resume',
      'careers.c1.desc': 'dentist, assistant, or administrator? send your resume — we review every application and reply within a few days.',
      'careers.c1.cta': 'message us on WhatsApp',
      'careers.c2.title': 'internship program',
      'careers.c2.desc': 'for students and early-career specialists — mentorship under the chief doctor and hands-on work in a modern clinic.',
      'careers.c2.cta': 'apply',
      'careers.c3.title': 'partnership',
      'careers.c3.desc': 'collaboration with suppliers, labs, educational centres, and brands in the dental industry.',
      'careers.c3.cta': 'discuss',

      'steril.eyebrow': 'sterilization and safety',
      'steril.title': 'safety without compromise',
      'steril.t1': 'sterilization protocols',
      'steril.d1': 'a full processing cycle compliant with international standards.',
      'steril.t2': 'single-use materials',
      'steril.d2': 'individually packaged supplies, opened in front of the patient.',
      'steril.t3': 'multi-stage processing',
      'steril.d3': 'disinfection, ultrasonic cleaning, autoclaving — for every instrument.',

      'cta.title': 'consultation by phone',
      'cta.sub': 'leave your number — we will call back and answer every question.',
      'cta.fname': 'full name',
      'cta.fphone': 'phone',
      'cta.btn': 'send',
      'cta.note': 'by clicking "send" you agree to our processing of personal data.',
      'cta.success': 'thank you. we will be in touch shortly.',

      'map.eyebrow': 'find us',
      'map.addr': 'astana, askar tokpanov st. 8/5',
      'map.link': 'get directions →',
      'map.h1': 'hours',
      'map.hrs1': 'mon–fri 10:00–21:00',
      'map.hrs2': 'sat–sun 10:00–16:00',
      'map.h2': 'phone',

      'footer.tag': "we don't just treat teeth — we improve quality of life.",
      'footer.h1': 'contacts',
      'footer.h2': 'social',
      'footer.h3': 'hours',
      'footer.addr': 'astana, askar tokpanov st. 8/5',
      'footer.hrs1': 'mon–fri: 10:00 — 21:00',
      'footer.hrs2': 'sat–sun: 10:00 — 16:00',
      'footer.rights': 'all rights reserved.',
      'footer.made': 'Astana · Kazakhstan',
    },
  };

  /* ---------------- I18N ---------------- */
  const STORAGE_KEY = 'lr_lang';
  const supported = ['ru', 'kz', 'en'];

  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && supported.includes(saved)) return saved;
    const browser = (navigator.language || 'ru').slice(0, 2).toLowerCase();
    if (browser === 'kk' || browser === 'kz') return 'kz';
    if (browser === 'en') return 'en';
    return 'ru';
  }

  function applyLang(lang) {
    if (!supported.includes(lang)) lang = 'ru';
    const map = dict[lang];

    document.documentElement.lang = lang === 'kz' ? 'kk' : (lang === 'en' ? 'en' : 'ru');
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

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

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

  /* ---------------- HERO LOAD-IN (stagger fade + blur lift) ---------------- */
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    if (reduce) {
      heroEl.classList.add('is-loaded');
    } else {
      // Fire on next frame so the initial state is painted before transitions kick in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => heroEl.classList.add('is-loaded'));
      });
    }
  }

  /* ---------------- HERO SHAPE PARALLAX (gentle mouse follow) ---------------- */
  if (!reduce && window.matchMedia('(hover: hover)').matches) {
    const heroShape = document.querySelector('.hero-shape');
    if (heroShape && heroEl) {
      let raf = null;
      heroEl.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const rect = heroEl.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          heroShape.style.translate = `${x * -18}px ${y * -14}px`;
          raf = null;
        });
      });
      heroEl.addEventListener('mouseleave', () => {
        heroShape.style.translate = '';
      });
    }
  }

  /* ---------------- HERO SCROLL PARALLAX (subtle on slogan + lede) ---------------- */
  if (!reduce) {
    const slogan = document.querySelector('.hero-slogan');
    const lede = document.querySelector('.hero-lede');
    if (slogan) {
      let raf = null;
      const onScroll = () => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const y = Math.min(window.scrollY, 500);
          slogan.style.translate = `0 ${y * 0.06}px`;
          if (lede) lede.style.translate = `0 ${y * 0.04}px`;
          raf = null;
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

  /* ---------------- GALLERY CAROUSEL (snap-scroll + arrows + counter) ---------------- */
  const galleryTrack = document.getElementById('galleryTrack');
  const galleryNow = document.getElementById('galleryNow');
  const galleryPrev = document.querySelector('.gallery-arrow[data-dir="prev"]');
  const galleryNext = document.querySelector('.gallery-arrow[data-dir="next"]');

  if (galleryTrack && galleryNow && galleryPrev && galleryNext) {
    const cards = galleryTrack.querySelectorAll('.gallery-card');

    const updateGallery = () => {
      const trackRect = galleryTrack.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      let nearestIdx = 0;
      let minDist = Infinity;
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const cc = r.left + r.width / 2;
        const d = Math.abs(cc - trackCenter);
        if (d < minDist) { minDist = d; nearestIdx = i; }
      });
      galleryNow.textContent = String(nearestIdx + 1).padStart(2, '0');

      const maxScroll = galleryTrack.scrollWidth - galleryTrack.clientWidth;
      galleryPrev.disabled = galleryTrack.scrollLeft <= 2;
      galleryNext.disabled = galleryTrack.scrollLeft >= maxScroll - 2;
    };

    const scrollByCard = (dir) => {
      const card = cards[0];
      if (!card) return;
      const cardWidth = card.getBoundingClientRect().width;
      const gap = 20;
      galleryTrack.scrollBy({ left: (cardWidth + gap) * dir, behavior: reduce ? 'auto' : 'smooth' });
    };

    galleryPrev.addEventListener('click', () => scrollByCard(-1));
    galleryNext.addEventListener('click', () => scrollByCard(1));

    galleryTrack.addEventListener('scroll', () => {
      if (galleryTrack._raf) return;
      galleryTrack._raf = requestAnimationFrame(() => {
        updateGallery();
        galleryTrack._raf = null;
      });
    }, { passive: true });

    // Keyboard nav when track is focused
    galleryTrack.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); scrollByCard(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByCard(-1); }
    });

    window.addEventListener('resize', updateGallery);
    updateGallery();
  }

  /* ---------------- SERVICES ACCORDION (only one open at a time) ---------------- */
  document.querySelectorAll('.service-row').forEach(row => {
    row.addEventListener('toggle', () => {
      if (row.open) {
        document.querySelectorAll('.service-row[open]').forEach(other => {
          if (other !== row) other.open = false;
        });
      }
    });
  });

  /* ---------------- CONSULTATION FORM (no backend → WhatsApp deeplink) ---------------- */
  const ctaForm = document.querySelector('.cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(ctaForm);
      const name = (fd.get('name') || '').toString().trim();
      const phone = (fd.get('phone') || '').toString().trim();
      if (!name || !phone) {
        ctaForm.querySelectorAll('input').forEach(inp => {
          if (!inp.value.trim()) {
            inp.style.borderColor = '#E08585';
            setTimeout(() => { inp.style.borderColor = ''; }, 1600);
          }
        });
        return;
      }
      const msg = encodeURIComponent(
        `Здравствуйте! Меня зовут ${name}. Хочу записаться на консультацию. Мой номер: ${phone}`
      );
      window.open(`https://wa.me/77781703160?text=${msg}`, '_blank', 'noopener');
      ctaForm.classList.add('is-submitted');
    });
  }

  /* ---------------- I18N FOR INPUT PLACEHOLDERS ---------------- */
  // Apply placeholder translations on lang change — extends the existing applyLang
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    // Re-run when language changes by observing lang-btn clicks
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        const key = el.getAttribute('data-i18n-placeholder');
        const map = dict[lang];
        if (map && map[key] !== undefined) el.setAttribute('placeholder', map[key]);
      });
    });
    // Initial application
    const initial = localStorage.getItem(STORAGE_KEY);
    const lang = (initial && supported.includes(initial)) ? initial : 'ru';
    const key = el.getAttribute('data-i18n-placeholder');
    const map = dict[lang];
    if (map && map[key] !== undefined) el.setAttribute('placeholder', map[key]);
  });

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
