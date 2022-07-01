import React from 'react';
import cl from "./StudentsListHat.module.css"
import cardCl from "../StudentCard/StudentCard.module.css"

const StudentsListHat = () => {
    enum studentsListHat {
        number= "№",
        name= "Name",
        city= "City",
        faculty= "Faculty",
        speciality= "Speciality",
        course= "Course",
        avgMarks= "AvgMarks"
    }
    return (
        <div className={cl.hat}>
            <span className={[cardCl.index_block, cl.hat_item].join(" ")}>{studentsListHat.number}</span>
            <span className={[cardCl.name_block, cl.hat_item].join(" ")}>{studentsListHat.name}</span>
            <span className={[cardCl.city_block, cl.hat_item].join(" ")}>{studentsListHat.city}</span>
            <span className={[cardCl.faculty_block, cl.hat_item].join(" ")}>{studentsListHat.faculty}</span>
            <span className={[cardCl.speciality_block, cl.hat_item].join(" ")}>{studentsListHat.speciality}</span>
            <span className={[cardCl.course_block, cl.hat_item].join(" ")}>{studentsListHat.course}</span>
            <span className={[cardCl.avgMarks_block, cl.hat_item].join(" ")}>{studentsListHat.avgMarks}</span>

        </div>
    );
};

export default StudentsListHat;