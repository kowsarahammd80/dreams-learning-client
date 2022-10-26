import React from 'react';
import NavBar from '../component/shared/navBar/NavBar';
import HomeBanner from '../component/homeBanner/HomeBanner';
import FaqSection from '../component/faq/FaqSection';
import MentorPage from './MentorPage';
import Couses from '../component/courses/Couses';
import Instactor from '../component/instactor/Instactor';


const HomePage = () => {
  return (
    <div >
      <div className="homeBg">
        <NavBar />
        <HomeBanner />
      </div>
      <MentorPage></MentorPage>
      <Couses len={3} />
      <Instactor len={3} />
      <FaqSection />
    </div>
  );
};

export default HomePage;