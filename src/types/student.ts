export interface student {
    id: number | string;
    name: string;
    surname: string;
    patronymic?: string;
    birthdayYear: number;
    isSatisfactory: boolean;
    avgMarks: number;
    faculty: string;
    speciality: string;
    course: number;
    school?: number;
    year: string;
    email: string;
    city: string;
    phone?: string;
}

export interface StudentState {
    students: student[];
    loading: boolean;
    error: null | string
}

export enum StudentActionTypes {
    FETCH_STUDENTS = 'FETCH_STUDENTS',
    FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS',
    FETCH_STUDENTS_ERROR = "FETCH_STUDENTS_ERROR",
    CREATE_STUDENT = 'CREATE_STUDENT',
    DELETE_STUDENT = 'DELETE_STUDENT',
    CHANGE_STUDENT = 'CHANGE_STUDENT'
}

interface FetchStudentsAction {
    type: StudentActionTypes.FETCH_STUDENTS
}

interface FetchStudentsSuccessAction {
    type: StudentActionTypes.FETCH_STUDENTS_SUCCESS;
    payload: student[]
}

interface FetchUsersErrorAction {
    type: StudentActionTypes.FETCH_STUDENTS_ERROR;
    payload: string
}

interface CreateStudent {
    type: StudentActionTypes.CREATE_STUDENT;
    payload: student
}

interface DeleteStudent {
    type: StudentActionTypes.DELETE_STUDENT
    payload: number | string
}

interface ChangeStudent {
    type: StudentActionTypes.CHANGE_STUDENT
    payload: student
}

export type StudentAction = FetchStudentsAction
    | FetchStudentsSuccessAction
    | FetchUsersErrorAction
    | CreateStudent
    | DeleteStudent
| ChangeStudent