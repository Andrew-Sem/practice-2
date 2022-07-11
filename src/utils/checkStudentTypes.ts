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
    if (student.avgMarks < 61 && student.isSatisfactory === true)
        return {
            message: "Wrong isSatisfactory or avgMark", cause: {
                isSatisfactory: student.isSatisfactory,
                avgMark: student.avgMarks
            }
        }
    const contains = (arr: Array<string>, elem: string) => {
        return arr.indexOf(elem) != -1;
    }
    switch (student.faculty) {
        case "FEE":
            if (!contains(specialities.FEE, student.speciality))
                return {
                    message: "Wrong faculty or speciality", cause: {
                        faculty: student.course,
                        speciality: student.speciality
                    }
                }
            break;
        case "FAM":
            if (!contains(specialities.FAM, student.speciality))
                return {
                    message: "Wrong faculty or speciality", cause: {
                        faculty: student.course,
                        speciality: student.speciality
                    }
                }
            break;
        case "FE" :
            if (!contains(specialities.FE, student.speciality))
                return {
                    message: "Wrong faculty or speciality", cause: {
                        faculty: student.course,
                        speciality: student.speciality
                    }
                }
            break;
        default:
            return  {message: `Faculty not exist, try: ${faculties.join(", ")}`, cause: student.faculty}
    }
    if (student.course < 1 || student.course > 5)
        return {message: "Wrong course", cause: student.course}
    return {message: ""}
}

export default checkStudentTypes