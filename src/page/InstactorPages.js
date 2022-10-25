import React from 'react';
import Instactor from '../component/instactor/Instactor';
import Loading from '../component/shared/loading/Loading';
import NavBar from '../component/shared/navBar/NavBar';
import useCourseList from '../hooks/useCourseList';

const InstactorPages = () => {
  const [Instactors, loading] = useCourseList();
  if (loading) {
    return <Loading />;
  }
  console.log(Instactors);

  return (
    <div >
      <NavBar/>
      
       <div className='text-center pb-3'>
        <h2>Featured Instructor</h2>
          <p>social-cultural systems of designated behaviors and practices, morals, worldviews, texts, sanctified places, prophecies, ethics, or organizations</p>
       </div>

    <div className='container'>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-0">
         {
          Instactors.map((instactor, index) => <Instactor instactor={instactor} key={index}></Instactor>)
         }
      </div>

    </div>

  </div>
  );
};

export default InstactorPages;