import React from 'react';
import Course from '../course/course.comp';
import Students from '../students/students.comp';
import './course-table.style.css';


const CourseTable = () => {
    return(
        <div className="course-table-container">
            <Course courseName="Programing 1"/>
            <Students student= {{name: "Sebastian", grade: 4.5, gender: 1}}/>
            <Students student= {{name: "Alexander", grade: 5, gender: 1}}/>
            <Students student= {{name: "Laura", grade: 4, gender: 0}}/>
            <Students student= {{name: "Andrea", grade: 3, gender: 0}}/>
            <Students student= {{name: "Daniel", grade: 2.5, gender: 1}}/>
            <Students student= {{name: "Tatiana", grade: 2.5, gender: 0}}/>
            <Students student= {{name: "Jose", grade: 3.5, gender: 1}}/>
            <Students student= {{name: "Jaime", grade: 4.1, gender: 1}}/>
            <Students student= {{name: "Maicol", grade: 3.8, gender: 1}}/>
            <Students student= {{name: "Maricarmen", grade: 0, gender: 0}}/>

            <Course courseName="Programing 2"/>
            <Students student= {{name: "Mariana", grade: 4.3, gender: 0}}/>
            <Students student= {{name: "Alejandro", grade: 4.5, gender: 1}}/>
            <Students student= {{name: "Arturo", grade: 3.2, gender: 1}}/>
            <Students student= {{name: "Maria", grade: 1.2, gender: 0}}/>
            <Students student= {{name: "Natalia", grade: 2.7, gender: 0}}/>
            <Students student= {{name: "Ana", grade: 4.3, gender: 0}}/>
            <Students student= {{name: "Pablo", grade: 3.5, gender: 1}}/>
            <Students student= {{name: "Daniela", grade: 4.2, gender: 0}}/>
            <Students student= {{name: "Dayana", grade: 4.2, gender: 0}}/>
            <Students student= {{name: "Natalia", grade: 5, gender: 0}}/>

            <Course courseName="Programing 3"/>
            <Students student= {{name: "Pepito", grade: 1, gender: 1}}/>
            <Students student= {{name: "Sandra", grade: 5, gender: 0}}/>
            <Students student= {{name: "Liliana", grade: 4.2, gender: 0}}/>
            <Students student= {{name: "Carlos", grade: 3.7, gender: 1}}/>
            <Students student= {{name: "Jorge", grade: 2, gender: 1}}/>
            <Students student= {{name: "Lilith", grade: 4.3, gender: 0}}/>
            <Students student= {{name: "Claudia", grade: 2.8, gender: 0}}/>
            <Students student= {{name: "Alison", grade: 4.6, gender: 0}}/>
            <Students student= {{name: "Aldemar", grade: 0, gender: 1}}/>
            <Students student= {{name: "Migel", grade: 5, gender: 1}}/>
        </div>
    );
}

export default CourseTable;