import React from 'react';
import useCourseList from '../../hooks/useCourseList';

const Instactor = ({instactor}) => {
  console.log(instactor)
   let {instructorPhoto, instructor,  courseName, time } = instactor
  return (
    <div className='col'>
      <div class="card shadow radious border-0" >
        <img src={instructorPhoto} class="card-img-top radious" alt="..." />
        <div class="card-body text-center">
          <div className='d-flex align-items-center gap-2'>
            
            <h2 className='instructorTitle cardText'>{instructor}</h2>
            
          </div>
          <p></p>
          <div className='pt-3'>
            <p className='courseTitle cardText'>{courseName} </p>

            <div className='d-flex justify-content-between align-items-center gap-2 ps-1'>
              <div className='d-flex justify-content-center  gap-2'>
                <p className='cardText'>Students 50</p>
              </div>
              <div className='d-flex justify-content-center  gap-2'>
                <i class="fa-regular fa-clock pt-1 cardText"></i>
                <p className='cardText'>{time}</p>
              </div>
            </div>

          </div>


        </div>
      </div>

    </div>
  );
};

export default Instactor;