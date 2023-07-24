/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Ваше любимое болото в мире Жаб",
        ["Амазонка", "Подмосковье", "Лужа", "Зыбучий песок", "В лесу"],
        [
            "this.score.taldarim++",
            "this.score.protoss++",
            "this.score.zerg++",
            "this.score.terran++",
            "this.score.primal++"
        ]
    ],
    [
        "Я бы квакнул…",
        ["В болоте", "В озере", "В море"],
        [
            "this.score.protoss++; this.score.terran--",
            "this.score.primal++; this.score.protoss--; this.score.terran--",
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "С кем вы поговорите на любимом болоте?",
        ["С Цаплей", "С кувшинкой", "С крокодилом"],
        [
            "this.score.protoss--",
            "this.score.protoss--",
            "this.score.protoss++"
        ]
    ],

    [
        "Перед вами хорошо укреплённый шалаш из водорослей",
        ["Я залезу внутрь и дам потомство", "Обживусь и позову жаб на тусу", "Поплыву дальше в поисках шалаша из кувшинок"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "Ты любишь жаб/лягушек?",
        ["Да!"],
        [
            "this.score.terran++"
        ]
    ],
    [
        "На вас напали цапли",
        ["Надо бежать", "Нужно снарядить себя броней из водорослей и дать отпор", "Подружусь с обидчикам и предложу немного букашек"],
        [
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg-=2", 
            "this.score.terran++; this.score.protoss--; this.score.zerg-=2"
        ]
    ],
    [
        "Король жаб приказывает вам подчинить соседнее болото",
        ["Должен подчиниться", "Пока не будет личной просьбы - не пойду", "Его воля на меня не действует"],
        [
            "this.score.zerg++; this.score.protoss--", 
            "this.score.primal++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "Перед вами высшая Жаба Старейшина",
        ["Уснуть", "Выразить почтение", "Попросить букашек", "Спросить как дела"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--", 
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--", 
            "this.score.terran++; this.score.protoss--; this.score.zerg--"
        ]
    ],
    [
        "Вы заметили крокодила",
        ["Дать бой", "Трусливо квакнуть"],
        [
            "this.score.terran++", 
            "this.score.terran--"
        ]
    ],
    [
        "На вас движется стая букашек",
        ["Много еды, можно собрать", "Позволить им лететь дальше", "Испугаться и убежать"],
        [
            "this.score.primal++; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "Вы видите стрекозу удачи",
        ["Попытаюсь поймать", "Моё тело не выдержит такую мощь", "Пропустить дальше"],
        [
            "this.score.primal++; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "Вы сильно устали сегодня",
        ["Я не знаю усталости, пойду на тусу с другими жабами", "Молча отдохну на кувшинке", "Поем и усну"],
        [
            "this.score.terran++; this.score.zerg--", 
            "this.score.zerg++; this.score.terran--", 
            "this.score.taldarim++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Перед вами карта болота",
        ["Вызвать жаб на поход", "Выкинуть её", "Отдам другой жабе"],
        [
            "this.score.taldarim++; this.score.zerg--", 
            "this.score.protoss++; this.score.zerg--", 
            "this.score.zerg++; this.score.protoss--"
        ]
    ],
    [
        "Цапля и крокодил",
        ["Самые опасные враги", "Легкая мишень", "Мой страх", "Меня боятся"],
        [
            "this.score.protoss--", 
            "this.score.protoss-=2", 
            "this.score.protoss++", 
            "this.score.protoss-=3"
        ]
    ],
    [
        "В этих местах много жаб",
        ["Захватить и стать сильнейшой", "Подружиться"],
        [
            "this.score.taldarim++; this.score.terran--", 
            "this.score.terran++"
        ]
    ],
    [
        "Букашки закончились",
        ["Отправлюсь в столовую", "Отправлюсь грабить", "Пойду в казино"],
        [
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.terran++; this.score.protoss--; this.score.zerg--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Вы жаба",
        ["Отшельник", "Громила", "Клоун"],
        [
            "this.score.terran--", 
            "this.score.terran--", 
            "this.score.terran++"
        ]
    ],
    [
        "Болото - ",
        ["Мой дом", "Тюрьма", "Возможности", "Опасность"],
        [
            "this.score.protoss--", 
            "this.score.protoss--", 
            "this.score.protoss++", 
            "this.score.protoss--"
        ]
    ],
    [
        "Дождь на болоте",
        ["Сяду на кувшинку пока не закончится", "Буду громко квакать", "Спрячусь под воду"],
        [
            "this.score.terran++; this.score.zerg--; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "В болоте завелись змеи",
        ["Сменю болото", "Останусь посмотреть что будет дальше"],
        [
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "Жаба...",
        ["Лучший друг человека", "Холодна"],
        [
            "this.score.protoss--", 
            "this.score.protoss++"
        ]
    ],
    [
        "Как вы прыгаете?",
        ["Редко и метко", "Часто и красиво", "предпочитаю плавать"],
        [
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--", 
            "this.score.primal++; this.score.protoss--; this.score.terran--"
        ]
    ],
    [
        "Вы скрафтили броню из клюва цапли",
        ["Стану лидером", "Брошу вызов всем цаплям", "Покину болото"],
        [
            "this.score.terran++", 
            "this.score.terran+=2", 
            "this.score.terran--"
        ]
    ],
    [
        "Вы самая крутая жаба на болоте",
        ["Помочь другим жабам стать лучше", "наконец-то отдохну", "Открою курс по жабожизни"],
        [
            "this.score.terran++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--", 
            "this.score.taldarim++; this.score.zerg--"
        ]
    ],
    [
        "Чем вас привлекают жабы?",
        ["Я их ненавижу", "Загадкой", "Разнообразием"],
        [
            "this.score.protoss++; this.score.terran--; this.score.zerg-=2", 
            "this.score.terran++; this.score.protoss--; this.score.zerg-=2", 
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--"
        ]
    ]
];
/* Данные для экранов резултата для каждой расы */
const results = {
    'zerg': {
        name: "Летающая лягушка",
        description: "Вы свободная лягушка, ваша стая захватила множество миров и теперь рой стал ещё сильней. Королева лягушек довольна вами, продолжайте и дальше служить ей.",
        quote1: "-Понятие совершенства растяжимо. Можно стремиться, невозможно достичь. Совершенство, как цель, лишено смысла.",
        quote2: "-Смерть не имеет значения, важна только букашка.",
        author: "(Владислав Дёмин)",
        points: "100"
    },
    'primal': {
        name: "Бразильская Рогатка",
        description: "Всё что вас интересует – это сон, чем его больше тем лучше для вас. Вы эволюционируете, адаптируетесь и подстраиваетесь под окружающую среду. Нет таких проблем, которые вы не решите. Благодаря постоянному сну вы можете в любой момент измениться. Сон это ваш образ жизни. Так много поз для сна. Сотни видов. И с каждым годом всё больше. Нужно все попробовать.",
        quote1: "-Мне нужен сон. Сон это жизнь. Я жить без него не могу.",
        quote2: "",
        author: "(Владислав Дёмин)",
        points: "120"
    },
    'terran': {
        name: "Бело-розовая квакша",
        description: "Вас не интересуют проблемы лягушек и жаб, вечная вражда и опустошение миров. Вы - квакша. Простые земноводные радости украшают вашу жизнь. Общение с друзьями, поход в бар с хорошей музыкой, отдых на природе. Что еще нужно квакше.",
        quote1: "-Не связывайтесь с лягушками и жабами",
        quote2: "",
        author: "(Владислав Дёмин)",
        points: "90"
    },
    'infested': {
        name: "Ужасный листолаз",
        description: "Судя по всему вас заразили змеи, теперь вы служите им. Но это не мешает вам мечтать о мести змеям.",
        quote1: "-Зараженные всегда поднимаются вновь.",
        quote2: "-Когда плевок достгнет цели, от вас ничего не останется.",
        author: "(Владислав Дёмин)",
        points: "160"
    },
    'protoss': {
        name: "Тигровая лягушка",
        description: "Вы горды и безупречны. Честь ведёт вас сквозь пучину неприятностей. Все земноводные стремятся быть похожими на вас.",
        quote1: "-Сила в единстве.",
        quote2: "",
        author: "(Владислав Дёмин)",
        points: "80"
    },
    'taldarim': {
        name: "Вьетнамская веслоногая бородавчатая лягушка",
        description: "Трусливая жаба. Иногда в случае большой опасности вы скручиваетесь в плотный комок, притворяясь для врага мертвой.",
        quote1: "-Я красивый, а не воин.",
        quote2: "-Готовлю Фо-Бо?",
        author: "(Владислав Дёмин)",
        points: "140"
    },
    'hybrid': {
        name: "Голубой древолаз",
        description: "Чистота формы и чистота в целом присутствует в вашем организме. Вы одно из немногих существ, которых стремились к соввершенству. Но за вашей красотой кроется ядовитый плевок, способный убить обезьяну за 40 секунд",
        quote1: "-Я сама неотвратимость!",
        quote2: "",
        author: "(Владислав Дёмин)",
        points: "200"
    }
}