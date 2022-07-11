import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import Loader from "../UI/Loader/Loader";
import StudentCard from "../StudentCard/StudentCard";
import cl from "./StudentsList.module.css"

const StudentsList: FC = () => {
    const {error, loading, students} = useTypedSelector(state => state.student)
    const {fetchStudents} = useActions()

    useEffect(() => {
        fetchStudents()
    }, [])

    if (loading)
        return <Loader/>
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={"container"}>
            <div className={cl.list}>
                {students.map(student =>
                    <StudentCard
                        key={student.id}
                        student={student}
                        index={students.indexOf(student)}/>
                )}
            </div>
        </div>
    );
};

export default StudentsList;