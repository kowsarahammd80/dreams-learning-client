import React from 'react';
import "./HomeBanner.css";
import bannerImage from '../../resource/banner.png';

const HomeBanner = () => {
  return (
    <div className='container py-2 py-lg-1'>
      <div className='row align-items-center justify-content-center gy-5 gy-lg-0'>

        <div className='col-12 col-lg-6'>
          <p className='headerTag'>The Leader in Online Learning</p>
          <h2 className='headingTitle'>Engaging & Accessible Online Courses For All</h2>
          <p className='headerTag'>Own your future learning new skills online</p>
        </div>

        <div className='col-12 col-lg-6'>
          <img src={bannerImage} alt="bannerImage" className='img-fluid ZoomIn' />
        </div>

      </div>


    </div>
  );
};

export default HomeBanner;