import React from 'react';
import NavBar from '../component/shared/navBar/NavBar';
import HomeBanner from '../component/homeBanner/HomeBanner';
import FaqSection from '../component/faq/FaqSection';
import MentorPage from './MentorPage';


const HomePage = () => {
  return (
    <div >
      <div className="homeBg">
        <NavBar />
        <HomeBanner />
      </div>
      <MentorPage></MentorPage>
      <FaqSection />
    </div>
  );
};

export default HomePage;