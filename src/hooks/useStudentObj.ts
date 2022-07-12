import {useState} from "react";
import {studentDefaultValue} from "../constants/studentDefaultValues";

export const useStudentObj = () => {
    const [student, setStudent] = useState(studentDefaultValue)
    const setStudentToDefault = () => {
        setStudent(studentDefaultValue)
    }
    return [student, setStudent]
}