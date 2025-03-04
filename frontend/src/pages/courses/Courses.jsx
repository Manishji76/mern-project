// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./courses.css";
import { CourseData } from '../../context/CourseContext';
import CourseCard from '../../componets/coursecard/Coursecard';

const Courses = () => {
    const {courses} = CourseData();

    console.log(courses);
  return (
    <div className="courses">
      <h2>Avialabe Courses</h2>

      <div className="course-container">
      {courses && courses.length > 0 ? (
          courses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No Courses Yet!</p>
        )}
      </div>
    </div>
  )
}

export default Courses