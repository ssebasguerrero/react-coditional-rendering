import React from 'react';
import CourseTable from '../course-table/course-table.comp';
import './base-table.style.css';

const BaseTable = (props) => {
    return(
        <div className="base-table-container">
            <span className="title-item">Name</span>
            <span className="title-item">Grade</span>
            <span className="title-item">Gender</span>
            <CourseTable/>
        </div>
    );
}

export default BaseTable;