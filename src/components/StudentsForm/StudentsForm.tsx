import React from 'react';
import Btn from "../UI/Btn/Btn";
import StudentsList from "../StudentsList/StudentsList";
import Input from "../UI/Input/Input";
import cl from "./StudentsForm.module.css"

const StudentsForm = () => {
    return (
        <div>
            <StudentsList/>
            <Input placeholder={"Enter student name"}/>
            <Btn>Add student</Btn>
        </div>
    );
};

export default StudentsForm;