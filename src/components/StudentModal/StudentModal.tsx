import React, {FC} from 'react';
import Modal from "../UI/Modal/Modal";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Btn from "../UI/Btn/Btn";
import {useActions} from "../../hooks/useActions";
import cl from "./StudentModal.module.css"
import Input from "../UI/Input/Input";

interface StudentModalProps {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    id: string | number
}

const StudentModal: FC<StudentModalProps> = ({visible, setVisible, id}) => {
    const {students} = useTypedSelector(state => state.student)
    const {deleteStudent} = useActions()
    const student = students.find(student => student.id === id)
    const deleteCurrentStudent = () => {
        deleteStudent(id)
        setVisible(false)
    }
    if (!student) {
        return (
            <Modal visible={visible} setVisible={() => setVisible(!visible)}>
                <h1>Ошибка: id студента на найдено</h1>
            </Modal>
        )
    }
    return (
        <Modal visible={visible} setVisible={() => setVisible(!visible)}>
            <div className={cl.student_modal}>
                <div className={cl.data}>

                    <Input value={student.name} label={"Name:"}/>
                    <Input value={student.surname} label={"Surname:"}/>
                    {student.patronymic
                        ? <Input value={student.patronymic} label={"Patronymic:"}/>
                        : <Input value={""} placeholder={"Undefined"} label={"Patronymic:"}/>
                    }
                    <Input value={student.birthdayYear} label={"Birthday year:"}/>
                    <Input value={String(student.isSatisfactory)} label={"Is satisfactory:"}/>
                    <Input value={student.avgMarks} label={"Avg marks:"}/>
                    <Input value={student.faculty} label={"Faculty:"}/>
                    <Input value={student.speciality} label={"Speciality:"}/>
                    <Input value={student.course} label={"Course:"}/>
                    {student.school
                        ? <Input value={student.school} label={"School:"}/>
                        : <Input value={""} placeholder={"Undefined"} label={"School:"}/>
                    }
                    <Input value={student.year} label={"Year:"}/>
                    <Input value={student.city} label={"City:"}/>
                    <Input value={student.email} label={"Email:"}/>
                    {student.phone
                        ? <Input value={student.phone} label={"Phone:"}/>
                        : <Input value={""} placeholder={"Undefined"} label={"Phone:"}/>
                    }
                </div>
                <Btn onClick={deleteCurrentStudent} type={"danger"}>Delete student</Btn>
            </div>
        </Modal>

    );
};

export default StudentModal;