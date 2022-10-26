import React from "react";
import HomeBanner from "../component/homeBanner/HomeBanner";
import FaqSection from "../component/faq/FaqSection";
import MentorPage from "./MentorPage";
import Instructors from "../component/instructors/Instructors";
import Courses from "../component/courses/Courses";
import CoursesTitle from "../component/coursesTitle/CoursesTitle";
import InstructorFeatured from "../component/instructorFeatured/InstructorFeatured";
import BloHeading from "../component/blogHeading/BloHeading";
import BlogCard from "../component/blogCard.js/BlogCard";
import Footer from "../component/footer/Footer";


const HomePage = () => {
  return (
    <div>
      <div className="homeBg">
        <HomeBanner />
      </div>
      <MentorPage />

      <div className="homeBg">
        <CoursesTitle />
        <Courses len={3} />
      </div>

      <div className="">
        <BloHeading />
       <BlogCard len={3}/>
      </div>

      <div className="homeBg">
        <InstructorFeatured />
        <Instructors len={3} />
      </div>

      <FaqSection />

      <Footer/>

    </div>
  );
};

export default HomePage;
