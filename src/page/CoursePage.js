import React from 'react';
import CourseCard from '../component/courseCard/CourseCard';
import Loading from '../component/shared/loading/Loading';
import NavBar from '../component/shared/navBar/NavBar';
import useCourseList from '../hooks/useCourseList';
const CoursePage = () => {

  const [courseList, loading] = useCourseList();
  if (loading) {
    return <Loading />;
  }
  console.log(courseList);

  return (

    <div >
      <NavBar />
      <div className='container py-5'>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {
            // courseList.map((course, index) => <CourseCard key={index} course={course} />)
          }
        </div>

      </div>

    </div>
  );
};

export default CoursePage;