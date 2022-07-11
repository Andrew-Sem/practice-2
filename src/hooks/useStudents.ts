import { useMemo } from "react";
import {student} from "../types/student";

export const useSortedStudents = (students: Array<student>, sort: string) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            //@ts-ignore
            return [...students].sort((a, b) => a[sort].toString().localeCompare(b[sort].toString()));
        }
        return students;
    }, [sort, students]);

    return sortedPosts;
};

export const useStudents = (students:Array<student>, sort: any, query:any) => {
    const sortedStudents = useSortedStudents(students, sort);

    const sortedAndSearchedStudents = useMemo(() => {
        return sortedStudents.filter((student) =>
            student.surname.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, sortedStudents]);

    return sortedAndSearchedStudents;
};