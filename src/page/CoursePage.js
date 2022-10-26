import React from 'react';
import CourseCard from '../component/courseCard/CourseCard';
import Couses from '../component/courses/Couses';
import Loading from '../component/shared/loading/Loading';
import NavBar from '../component/shared/navBar/NavBar';
import useCourseList from '../hooks/useCourseList';
const CoursePage = () => {



  return (

    <div >
       
      <NavBar />
        
     

      <Couses/>

    </div>
  );
};

export default CoursePage;