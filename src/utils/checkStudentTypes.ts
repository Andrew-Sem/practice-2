import {student} from "../types/student";

interface error {
    message: string,
    cause?: any
}

const checkStudentTypes = (student: student): error => {
    if (student.id === -1) return {message: "Wrong id", cause: student.id}
    if (student.name === "") return {message: "Wrong name", cause: student.name}
    if (student.surname === "") return {message: "Wrong surname", cause: student.surname}
    if (student.education.course < 1 && student.education.course > 5)
        return {message: "Wrong course", cause: student.education.course}
    return {message: ""}
}

export default checkStudentTypes