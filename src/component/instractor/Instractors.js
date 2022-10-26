import React from 'react';
import useCourseList from '../../hooks/useCourseList';
import Instactor from '../instactor/Instactor';
import Loading from '../shared/loading/Loading';

const Instractors = ({ len }) => {
  const [Instactors, loading] = useCourseList();
  if (loading) {
    return <Loading />;
  }
  let length = 0;
  !len ? length = Instactors.length : length = len;
  return (
    <div className='container mb-4'>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 gx-4">
        {
          Instactors.slice(0, length).map((instactor, index) => <Instactor instactor={instactor} key={index}></Instactor>)
        }
      </div>
    </div>
  );
};

export default Instractors;