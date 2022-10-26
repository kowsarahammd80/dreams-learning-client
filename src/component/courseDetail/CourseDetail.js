import React from "react";
import './CourseDetail.css';

const CourseDetail = ({ course }) => {
    const { courseImage, courseName, courseDetail,pdf,instructor, instructorPhoto, lesson, time, rating } = course;

    const showRating = (rating) => {
      const showRating = [];
      let i = 0;
      for (i = 0; i < parseInt(rating); i++) {
        showRating.push('star')
      }
      return showRating;
    }
  return (
    <div className="row gx-0 px-0">

      <div className="col-12 col-lg-10 p-5 order-2 order-lg-1">
        <div className="">
          <img src={courseImage} className="detailImage" alt="..." />
        </div>
        <div className="py-5">
            <h1>{courseName}</h1> <div className='d-flex align-item-center gap-3'>
              <div>
                {
                  showRating(rating).map((item, index) => <i key={index} className="fa-solid fa-star golden"></i>)
                }
              </div>
              <p className='cardText cardText2'>{rating}</p>
            </div>
            <p className="courseDetail ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam earum vitae alias tenetur ut neque voluptatum, recusandae similique quod consequuntur cupiditate maiores assumenda nobis accusantium aspernatur dignissimos incidunt. Suscipit vero dolorum odio iusto rerum iure esse, unde laborum, ullam illum assumenda consequuntur, officiis similique ipsum nisi facilis sed aut.</p>
        </div>


      </div>
      <div className="col-12 col-lg-1 py-5 px-0 order-1 order-lg-2">

      <a download=""  href={pdf} type="button" class="btn download btn-lg rounded-pill">Download</a>

      </div>

    </div>
  );
};

export default CourseDetail;
