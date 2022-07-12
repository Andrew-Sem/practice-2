import React, {FC} from 'react';
import {student} from "../../types/student";
import cl from "./StudentCard.module.css"
import studentModal from "../StudentModal/StudentModal";

interface StudentCardProps {
    student: student,
    index: any,
    setVisible: (arg0: boolean) => void,
    setCurrentStudentId: (arg0: string | number) => void
}

const StudentCard: FC<StudentCardProps> = ({student, index, setVisible, setCurrentStudentId}) => {
    const openStudentModal = (id: string | number) => {
        setVisible(true)
        setCurrentStudentId(id)
    }
    return (
        <div className={cl.row} onClick={() => {
            openStudentModal(student.id)
        }}>
            <span className={cl.index_block}>{index + 1}</span>
            <span className={cl.name_block}>{student.surname} {student.name} {student.patronymic}</span>
            <span className={cl.city_block}>{student.city}</span>
            <span className={cl.faculty_block}>{student.faculty}</span>
            <span className={cl.speciality_block}>{student.speciality}</span>
            <span className={cl.course_block}>{student.course}</span>
            <span className={cl.avgMarks_block}>{student.avgMarks}</span>
        </div>
    );
};

export default StudentCard;