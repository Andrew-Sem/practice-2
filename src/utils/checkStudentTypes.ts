import {student} from "../types/student";
import {faculties, specialities} from "../constants/studentDefaultValues";

interface error {
    message: string,
    cause?: any
}

const checkStudentTypes = (student: student): error => {
    if (student.id === -1) return {message: "Wrong id", cause: student.id}
    if (student.name === "") return {message: "Wrong name", cause: student.name}
    if (student.surname === "") return {message: "Wrong surname", cause: student.surname}
    if (student.birthdayYear > 2006 || student.birthdayYear < 1990)
        return {message: "Wrong birthday year", cause: student.birthdayYear}
    if (student.education.avgMarks < 61 && student.education.isSatisfactory === true)
        return {
            message: "Wrong isSatisfactory or avgMark", cause: {
                isSatisfactory: student.education.isSatisfactory,
                avgMark: student.education.avgMarks
            }
        }
    const contains = (arr: Array<string>, elem: string) => {
        return arr.indexOf(elem) != -1;
    }
    switch (student.education.faculty) {
        case "FEE":
            if (!contains(specialities.FEE, student.education.speciality))
                return {
                    message: "Wrong faculty or speciality", cause: {
                        faculty: student.education.course,
                        speciality: student.education.speciality
                    }
                }
            break;
        case "FAM":
            if (!contains(specialities.FAM, student.education.speciality))
                return {
                    message: "Wrong faculty or speciality", cause: {
                        faculty: student.education.course,
                        speciality: student.education.speciality
                    }
                }
            break;
        case "FE" :
            if (!contains(specialities.FE, student.education.speciality))
                return {
                    message: "Wrong faculty or speciality", cause: {
                        faculty: student.education.course,
                        speciality: student.education.speciality
                    }
                }
            break;
        default:
            return  {message: `Faculty not exist, try: ${faculties.join(", ")}`, cause: student.education.faculty}
    }
    if (student.education.course < 1 || student.education.course > 5)
        return {message: "Wrong course", cause: student.education.course}
    return {message: ""}
}

export default checkStudentTypes