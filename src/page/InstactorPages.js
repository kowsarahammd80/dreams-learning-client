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
    <div className='container py-5'>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
         {
          Instactors.map((instactor, index) => <Instactor instactor={instactor} key={index}></Instactor>)
         }
      </div>

    </div>

  </div>
  );
};

export default InstactorPages;