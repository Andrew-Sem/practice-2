import React, {FC} from 'react';
import {student} from "../../types/student";
import cl from "./StudentCard.module.css"

interface StudentCardProps{
    student: student,
    index: any
}

const StudentCard:FC<StudentCardProps> = ({student, index}) => {
    return (
        <div className={cl.row}>
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