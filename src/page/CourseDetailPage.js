import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import CourseDetail from "../component/courseDetail/CourseDetail";

const CourseDetailPage = () => {
  const [course, setCourse] = useState([]);
  const [singleCourse,setSingleCourse] =useState([]);
  useEffect(() => {
    fetch("/courseList.json")
      .then((result) => result.json())
      .then((data) => setCourse(data));
  }, []);

  const { id } = useParams();

  let courses = {};
  if (singleCourse.length===0  && course[id] ) {
    courses = {
    id:id,
      courseImage: course[id].courseImage,
      courseName: course[id].courseName,
      courseDetail: course[id].courseDetail,
      pdf: course[id].pdf,
      instructor: course[id].instructor,
      instructorPhoto: course[id].instructorPhoto,
      lesson: course[id].lesson,
      time: course[id].time,
      rating: course[id].rating,
    };
    setSingleCourse(courses);
  }

  return (
    <div className="row gx-0">
      <div className="col-0 col-lg-2 sideBar order-2 order-lg-1">
      <div className=" h5 sideLink">
          <NavLink
            to="/course"
            className="nav-link d-flex  align-items-center gap-2 fw-bold "
            aria-current="page"
          >
            <i className="fa-solid fa-book"></i>
            Course
          </NavLink>
        </div>
        <div className=" h5 sideLink">
          <NavLink
            to="/instructor"
            className="nav-link d-flex  align-items-center gap-2 fw-bold "
            aria-current="page"
          >
            <i className="fa-solid fa-person-chalkboard"></i>
            Instructors
          </NavLink>
        </div>

        <div className=" h5 sideLink">
          <NavLink
            to="/faq"
            className="nav-link d-flex  align-items-center gap-2 fw-bold "
            aria-current="page"
          >
            <i className="fa-solid fa-circle-question"></i>
            FAQ
          </NavLink>
        </div>

        <div className="h5 sideLink">
          <NavLink
            to="/about"
            className="nav-link d-flex align-items-center gap-2 fw-bold "
            aria-current="page"
          >
            <i className="fa-solid fa-address-card"></i>
            About Us
          </NavLink>
        </div>
      </div>

      <div className="col-12 col-lg-10  order-1 order-lg-2">
        <CourseDetail  course={singleCourse}/>
      </div>
    </div>
  );
};

export default CourseDetailPage;
