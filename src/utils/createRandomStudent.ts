import {student} from "../types/student";
import {cities, faculties, names, patronymics, specialities, surnames} from "../constants/studentDefaultValues";


const createRandomStudent = (): student => {
    const year = Math.round(Math.random() * 5) + 2017
    const student: student = {
        id: Math.random(),
        name: names[~~(Math.random() * names.length)],
        surname: surnames[~~(Math.random() * surnames.length)],
        patronymic: patronymics[~~(Math.random() * patronymics.length)],
        birthdayYear: Math.floor(Math.random() * 6) + 2000,
        education: {
            avgMarks: Math.floor(Math.random() * 60) + 40,
            isSatisfactory: false, // declare later
            faculty: faculties[~~(Math.random() * faculties.length)],
            speciality: "", // declare later
            course: Math.ceil(Math.random() * 5),
            school: Math.ceil(Math.random() * 40),
            year: year.toString() + "/" + (year+1).toString()
        },
        email: "", // declare later
        city: cities[~~(Math.random() * cities.length)],
        phone: (Math.pow(10, 10) * Math.random()).toString()
    }
    console.log(student.education.year);
    if (student.education.avgMarks > 60) student.education.isSatisfactory = true
    switch (student.education.faculty) {
        case "FEE":
            student.education.speciality = specialities.FEE[~~(Math.random() * specialities.FEE.length)]
            break
        case "FAM":
            student.education.speciality = specialities.FAM[~~(Math.random() * specialities.FAM.length)]
            break
        case "FE":
            student.education.speciality = specialities.FE[~~(Math.random() * specialities.FE.length)]
            break
        default:
            console.log({message: "error in speciality", faculty: student.education.faculty})
    }
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for (let i = 0; i < 15; i++)
        string += chars[Math.floor(Math.random() * chars.length)];
    student.email = string + '@gmail.com'
    return student
}

export default createRandomStudent