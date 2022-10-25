import React from 'react';
import NavBar from '../component/shared/navBar/NavBar';
import HomeBanner from '../component/homeBanner/HomeBanner';
import FaqSection from '../component/faq/FaqSection';


const HomePage = () => {
  return (
    <div >
      <div className="homeBg">
        <NavBar />
        <HomeBanner />
      </div>

      <FaqSection />
    </div>
  );
};

export default HomePage;