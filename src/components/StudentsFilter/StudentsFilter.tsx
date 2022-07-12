import React, {FC} from "react";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

interface StudentsFilterProps{
    filter: any,
    setFilter: any
}

const StudentsFilter:FC<StudentsFilterProps> = ({ filter, setFilter }) => {
    return (
        <div className="post-filter">
            <Input
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                placeholder="Search.."
            />
            <Select
                value={filter.sort}
                onChange={(selectedSort: any) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                defaultValue="Sort"
                options={[
                    { value: "surname", name: "By surname" },
                    { value: "name", name: "By first name" },
                    { value: "city", name: "By city" },
                    { value: "faculty", name: "By faculty" },
                    { value: "speciality", name: "By speciality" },
                    { value: "course", name: "By course" },
                    { value: "avgMarks", name: "By avg marks" },
                ]}
            />
        </div>
    );
};

export default StudentsFilter;