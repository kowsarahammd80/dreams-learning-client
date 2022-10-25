import React from 'react';
import './Instactor.css'


const Instactor = ({instactor}) => {
  console.log(instactor)
   let {instructorPhoto, instructor,  courseName,} = instactor

  return (
   
  <div class="col">
    <div class="card cardText h-75">
      <img src={instructorPhoto} class="card-img-top img-fluid h-50" alt="..." />
      <div class="card-body cardText text-center">
        <h5 class="card-title fw-bold">{instructor}</h5>
        <p class="card-text ">{courseName}</p>
        <p > <i class="fa-solid fa-solid1 fa-user-group"></i> 50 Studens</p>
      </div>
    </div>
  </div>
 
  
  
  );
};

export default Instactor;