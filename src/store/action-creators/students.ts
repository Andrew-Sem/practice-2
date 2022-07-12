import {Dispatch} from "redux";
import {student, StudentAction, StudentActionTypes} from "../../types/student";
import data from "../../db/students.json"


export const fetchStudents = () => {
    return async (dispatch: Dispatch<StudentAction>) => {
        try{
            dispatch({type: StudentActionTypes.FETCH_STUDENTS})
            setTimeout(() => {
                dispatch({type:StudentActionTypes.FETCH_STUDENTS_SUCCESS, payload: data})
            }, 1000)
        } catch (e) {
            dispatch({
                type: StudentActionTypes.FETCH_STUDENTS_ERROR,
                payload: "Произошла ошибка при загрузке списка студентов"
            })
        }
    }
}

export const createStudent = (student: student) => {
    return (dispatch: Dispatch<StudentAction>) => {
        dispatch({type: StudentActionTypes.CREATE_STUDENT, payload: student})
    }
}

export const deleteStudent = (id: string | number) => {
    return(dispatch: Dispatch<StudentAction>) => {
        dispatch({type: StudentActionTypes.DELETE_STUDENT, payload: id})
    }
}
