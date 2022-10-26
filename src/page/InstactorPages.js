import React from 'react';
import Instactor from '../component/instactor/Instactor';
import Instractors from '../component/instractor/Instractors';
import Loading from '../component/shared/loading/Loading';
import NavBar from '../component/shared/navBar/NavBar';
import useCourseList from '../hooks/useCourseList';

const InstactorPages = () => {
  


  return (
    <div >
      <NavBar/>
      
       <div className='text-center pb-3 mx-auto'>
        <h2>Featured Instructor</h2>
          <p>social-cultural systems of designated behaviors and practices, morals, worldviews, texts, sanctified places, prophecies, ethics, or organizations</p>
       </div>

       <Instractors/>

    

  </div>
  );
};

export default InstactorPages;