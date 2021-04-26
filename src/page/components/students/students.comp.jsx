import React from 'react';
import './student.style.css';

const Students = (props) => {
    return(
        <div className="student-container">
            {props.student.name}

            {props.student.grade <= 3 
            ? <span className="student-grade-item">{props.student.grade}</span> 
            : <span>{props.student.grade}</span>}

            {props.gender === 1
            ?<span className="student-gender-image">Male</span>
            :<span className="student-gender-image">Female</span>}
        </div>
    );
}

export default Students;