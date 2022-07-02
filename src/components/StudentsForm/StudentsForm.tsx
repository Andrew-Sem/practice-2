import React, {useState} from 'react';
import Btn from "../UI/Btn/Btn";
import StudentsList from "../StudentsList/StudentsList";
import Input from "../UI/Input/Input";
import cl from "./StudentsForm.module.css"
import {student} from "../../types/student";
import {useActions} from "../../hooks/useActions";
import checkStudentTypes from "../../utils/checkStudentTypes";
import createRandomStudent from "../../utils/createRandomStudent";
import {studentDefaultValue} from "../../constants/studentDefaultValues";

const StudentsForm = () => {
    const {createStudent} = useActions()
    const [studentName, setStudentName] = useState("")
    const [studentSurname, setStudentSurname] = useState("")
    const [studentPatronymic, setStudentPatronymic] = useState("")
    const [studentCourse, setStudentCourse] = useState(0)
    const [numOfRandomStudents, setNumOfRandomStudents] = useState(0)

    const addNewStudent = (student: student | undefined) => {
        if (student) {
            const error = checkStudentTypes(student)
            if (error.message !== "") return console.error(error)
            createStudent(student)
        } else {
            const student = studentDefaultValue
            const error = checkStudentTypes(student)
            if (error.message !== "") return console.error(error)
            createStudent(student)
        }
    }

    const addALotOfNewRandomStudents = (num: number) => {
        if (num < 1) return {message: "num must be > 0", num: num}
        for (let i = 0; i < num; i++) {
            const student = createRandomStudent()
            const error = checkStudentTypes(student)
            if (error.message !== "") return console.error(error)
            createStudent(student)
        }
    }

    return (
        <div className={"container"}>
            <div className={cl.form}>
                <StudentsList/>
                <div className={cl.modal}>
                    <Input
                        placeholder={"Enter student name"}
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        label={"Name"}
                    />
                    <Input
                        placeholder={"Enter student surname"}
                        value={studentSurname}
                        onChange={(e) => setStudentSurname(e.target.value)}
                        label={"Surname"}
                    />
                    <Input
                        placeholder={"Enter student patronymic"}
                        value={studentPatronymic}
                        onChange={(e) => setStudentPatronymic(e.target.value)}
                        label={"Patronymic"}
                    />
                    <Input
                        placeholder={"Enter student course"}
                        value={studentCourse}
                        onChange={(e) => setStudentCourse(e.target.value)}
                        type={"number"}
                        label={"Course"}
                    />
                </div>
                <Btn onClick={addNewStudent}>Add student</Btn>
                <span>Here you can create a lot of students</span>
                <Input
                    placeholder={"Enter num"}
                    value={numOfRandomStudents}
                    onChange={(e) => setNumOfRandomStudents(e.target.value)}
                />
                <Btn onClick={() => addALotOfNewRandomStudents(numOfRandomStudents)}>Add students</Btn>
            </div>
        </div>
    );
};

export default StudentsForm;