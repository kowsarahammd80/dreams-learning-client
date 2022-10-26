import React from 'react';
import './Instactor.css'


const Instactor = ({instactor}) => {
  console.log(instactor)
   let {instructorPhoto, instructor,  courseName,} = instactor

  return (
   
    <div className="col">
     <div className="card">
       <img src={instructorPhoto} className="card-img-top imges" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{instructor}</h5>
          <p className="card-text">{courseName}</p>
          <p className=''><i class="fa-solid fa-user-group fa-solid1 me-2"></i> 50 Students</p>
        </div>
    </div>
  </div>
  
  
  );
};

export default Instactor;