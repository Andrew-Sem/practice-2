import {StudentAction, StudentActionTypes, StudentState} from "../../types/student";


const initialState:StudentState = {
    students: [],
    loading: false,
    error: null
}

export const studentReducer = (state = initialState, action:StudentAction): StudentState => {
    switch (action.type){
        case StudentActionTypes.FETCH_STUDENTS:
            return {loading: true, error: null, students: []}
        case StudentActionTypes.FETCH_STUDENTS_SUCCESS:
            return  {loading: false, error: null, students: action.payload}
        case StudentActionTypes.FETCH_STUDENTS_ERROR:
            return  {loading: false, error: action.payload, students: []}
        case StudentActionTypes.CREATE_STUDENT:
            return  {...state, students: [...state.students, action.payload]}
        default:
            return state
    }
}