// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import "./coursedescription.css";
// import { useNavigate, useParams } from "react-router-dom";
// import { CourseData } from "../../context/CourseContext";
// import { server } from "../../main";

// const CourseDescription = (user) => { // Fallback value for user
//   const params = useParams();
//   const navigate = useNavigate();

//   const { fetchCourse, course,} = CourseData();

//   useEffect(() => {
//     fetchCourse(params.id);
//   }, [params.id, fetchCourse]);

//   return (
//     <>
//           {course && (
//             <div className="course-description">
//               <div className="course-header">
//                 <img
//                   src={`${server}/${course.image}`}
//                   alt=""
//                   className="course-image"
//                 />
//                 <div className="course-info">
//                   <h2>{course.title}</h2>
//                   <p>Instructor: {course.createdBy}</p>
//                   <p>Duration: {course.duration} weeks</p>
//                 </div>
//               </div>

//               <p>{course.description}</p>

//               <p>Let us get started with the course at ₹{course.price}</p>

//               {user && user.subscription.includes(course._id) ? (
//                 <button
//                   onClick={() => navigate(`/course/study/${course._id}`)}
//                   className="common-btn"
//                 >
//                   Study
//                 </button>
//               ) : (
//                 <button className="common-btn">
//                   Buy Now
//                 </button>
//               )}
//             </div>
//           )}
//         </>
//       )}
// export default CourseDescription;


// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./coursedescription.css"
import { useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";

const CourseDescription=()=>{
  
  const params= useParams();

  const {fetchCourse}=CourseData();

  useEffect(()=>{
    fetchCourse(params.id)
  }, [fetchCourse, params.id]);
  return <div>CourseDescription</div>
};

export default CourseDescription;