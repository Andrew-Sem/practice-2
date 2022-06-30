import React from 'react';
import './App.css';
import StudentsForm from "./components/StudentsForm/StudentsForm";

const App = () => {
  return (
    <div className={"app"}>
        <div className={"container"}>
            <StudentsForm/>
        </div>
    </div>
  );
}

export default App;
