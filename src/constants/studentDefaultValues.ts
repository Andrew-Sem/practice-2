export const names = [
    "Andrew",
    "Ivan",
    "Yakov",
    "Yuri",
    "Alexander",
    "Anatoliy",
    "Bogdan",
    "Victor",
    "Vasiliy",
    "Vladislav",
    "Vsevolod",
    "Apollon",
    "Grigoriy",
    "Artem",
    "Nikita",
    "Stepan",
    "Gleb",
    "Alexey",
    "Denis",
    "Dmitry",
    "Kirill"
]

export const surnames = [
    "Smirnov",
    "Ivanov",
    "Kuznetsov",
    "Sokolov",
    "Popov",
    "Lebedev",
    "Kozlov",
    "Novikov",
    "Morozov",
    "Petrov",
    "Volkov",
    "Zaytsev",
    "Pavlov",
    "Semenov",
    "Golubev",
    "Vinogradov",
    "Bogdanov",
    "Fedorov",
    "Mickhailov",
    "Tarasov"
]

export const patronymics = [
    "Andreevich",
    "Ivanovich",
    "Yakovich",
    "Yurievich",
    "Alexandrovich",
    "Anatolievich",
    "Bogdanovich",
    "Victorovich",
    "Vasilievich",
    "Vladislavovich",
    "Vsevolodovich",
    "Apollonovich",
    "Grigorievich",
    "Artemovich",
    "Nikitovich",
    "Stepanovich",
    "Glebovich",
    "Alexeevich",
    "Denisovich",
    "Dmitrievich",
    "Kirillovich"
]

export const faculties = [
    "FEE",
    "FAM",
    "FE"
]

export const specialities = {
    FEE: [
        "Software engineering",
        "Economics",
        "Chemical technology"
    ],
    FAM: [
        "Metallurgy",
        "Construction",
        "Standardization"
    ],
    FE: [
        "Management",
        "Metallurgy",
        "Construction",
    ]
}

export const cities = [
    "Volzhskiy",
    "Volgograd"
]

export const studentDefaultValue = {
    id: -1,
    name: "",
    surname: "",
    patronymic: "",
    birthdayYear: -1,
    education: {
        avgMarks: -1,
        isSatisfactory: false,
        faculty: "",
        speciality: "",
        course: -1,
        school: -1
    },
    email: "",
    city: "",
    phone: ""
}
