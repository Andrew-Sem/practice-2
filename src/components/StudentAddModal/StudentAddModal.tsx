import React, {FC, useState} from 'react';
import Input from "../UI/Input/Input";
import Btn from "../UI/Btn/Btn";
import Modal from "../UI/Modal/Modal";
import {useActions} from "../../hooks/useActions";
import checkStudentTypes from "../../utils/checkStudentTypes";
import {student} from "../../types/student";
import cl from "./StudentAddModal.module.css"

interface StudentAddModalProps {
    visible: boolean;

    setVisible(arg0: boolean): any
}

const StudentAddModal: FC<StudentAddModalProps> = ({visible, setVisible}) => {
        const {createStudent} = useActions()
        const [studentName, setStudentName] = useState("")
        const [studentSurname, setStudentSurname] = useState("")
        const [studentPatronymic, setStudentPatronymic] = useState("")
        const [studentBirthdayYear, setStudentBirthdayYear] = useState(0)
        const [studentAvgMarks, setStudentAvgMarks] = useState(0)
        const [studentFaculty, setStudentFaculty] = useState("")
        const [studentSpeciality, setStudentSpeciality] = useState("")
        const [studentCourse, setStudentCourse] = useState(0)
        const [studentSchool, setStudentSchool] = useState(0)
        const [studentEmail, setStudentEmail] = useState("")
        const [studentCity, setStudentCity] = useState("")
        const [studentPhone, setStudentPhone] = useState("")

        const addNewStudent = () => {
            const student: student = {
                id: Math.random(),
                name: studentName,
                surname: studentSurname,
                patronymic: studentPatronymic,
                birthdayYear: studentBirthdayYear,
                avgMarks: studentAvgMarks,
                isSatisfactory: studentAvgMarks > 60 ? true : false,
                faculty: studentFaculty,
                speciality: studentSpeciality,
                course: studentCourse,
                school: studentSchool,
                year: "2022/2023",
                email: studentEmail,
                city: studentCity,
                phone: studentPhone
            }
            const error = checkStudentTypes(student)
            if (error.message !== "") return console.error(error)
            createStudent(student)
            setVisible(visible)
            setStudentName("")
            setStudentSurname("")
            setStudentPatronymic("")
            setStudentBirthdayYear(0)
            setStudentAvgMarks(0)
            setStudentFaculty("")
            setStudentSpeciality("")
            setStudentCourse(0)
            setStudentSchool(0)
            setStudentEmail("")
            setStudentCity("")
            setStudentPhone("")
        }

        return (
            <div className={"container"}>
                <Modal visible={visible} setVisible={() => setVisible(!visible)}>
                    <div className={cl.student_modal}>
                        <Input
                            placeholder={"Enter student name"}
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            label={"Name *"}
                        />
                        <Input
                            placeholder={"Enter surname"}
                            value={studentSurname}
                            onChange={(e) => setStudentSurname(e.target.value)}
                            label={"Surname *"}
                        />
                        <Input
                            placeholder={"Enter patronymic"}
                            value={studentPatronymic}
                            onChange={(e) => setStudentPatronymic(e.target.value)}
                            label={"Patronymic"}
                        />
                        <Input
                            placeholder={"Enter birthday year"}
                            value={studentBirthdayYear}
                            onChange={(e) => setStudentBirthdayYear(e.target.value)}
                            type={"number"}
                            label={"Birthday year *"}
                        />
                        <Input
                            placeholder={"Enter avg marks"}
                            value={studentAvgMarks}
                            onChange={(e) => setStudentAvgMarks(e.target.value)}
                            type={"number"}
                            label={"Avg marks *"}
                        />
                        <Input
                            placeholder={"Enter faculty"}
                            value={studentFaculty}
                            onChange={(e) => setStudentFaculty(e.target.value)}
                            label={"Faculty *"}
                        />
                        <Input
                            placeholder={"Enter speciality"}
                            value={studentSpeciality}
                            onChange={(e) => setStudentSpeciality(e.target.value)}
                            label={"Speciality *"}
                        />
                        <Input
                            placeholder={"Enter course"}
                            value={studentCourse}
                            onChange={(e) => setStudentCourse(e.target.value)}
                            type={"number"}
                            label={"Course *"}
                        />
                        <Input
                            placeholder={"Enter school"}
                            value={studentSchool}
                            onChange={(e) => setStudentSchool(e.target.value)}
                            type={"number"}
                            label={"School"}
                        />
                        <Input
                            placeholder={"Enter email"}
                            value={studentEmail}
                            onChange={(e) => setStudentEmail(e.target.value)}
                            label={"Email *"}
                        />
                        <Input
                            placeholder={"Enter city"}
                            value={studentCity}
                            onChange={(e) => setStudentCity(e.target.value)}
                            label={"City *"}
                        />
                        <Input
                            placeholder={"Enter phone"}
                            value={studentPhone}
                            onChange={(e) => setStudentPhone(e.target.value)}
                            label={"Phone"}
                            type={"phone"}
                        />
                    </div>
                    <div className={cl.btns}>
                        <Btn type={"safe"} onClick={addNewStudent}>Add</Btn>
                    </div>
                </Modal>
            </div>
        )
    }
;

export default StudentAddModal;