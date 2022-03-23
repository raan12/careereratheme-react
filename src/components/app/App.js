import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "../../../node_modules/react-router-dom";
import Home from '../Home';
import About from '../About';
import Pageerror from '../Pageerror';
import Header from './../Header/Header';
import Footer from './../Footer';
import Contact from '../Contact';
import News from '../News/News';
import NewsDetails from '../News/NewsDetails';
import Teachers from '../Teachers/Teachers';
import BecomeTeacher from '../Teachers/BecomeTeacher';
import Courses from '../Courses/Courses';
import CourseDetails from '../Courses/CourseDetails';
 

function App(props) {

  // setpreloaderstate
  const [preloaderstate, setpreloaderstate] = useState(false)
  useEffect(() => {
    setpreloaderstate(true);
    setTimeout(() => {
      document.querySelector('.preloader').style.display = "none";
    }, 1000);
  }, [preloaderstate]);

  // scrollTopHtml
  function scrollTopHtml() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector('.scroll-to-top');
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

  return (
    <>
      <div className={"preloader " + (preloaderstate ? 'dnone-preloader' : '')}>
        <img className="preloader__image lazy" width="60" src={props.imageGlobalpath + "loader.png"} alt="true" />
      </div>

      <div className="page-wrapper w-100 float-start">
        <Router>
        <Header imageGlobalpath={props.imageGlobalpath} />
          <Routes>
            <Route path="/courses" element={<Courses />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/become-teacher" element={<BecomeTeacher />} />
            <Route path="/news" element={<News />} />
            <Route path="/news-details" element={<NewsDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About imageGlobalpath={props.imageGlobalpath} />} />
            <Route path="/" element={<Home imageGlobalpath={props.imageGlobalpath} />} />
            <Route path="*" element={<Pageerror imageGlobalpath={props.imageGlobalpath} />} />
          </Routes>
          <Footer imageGlobalpath={props.imageGlobalpath} />
        </Router>
      </div>

      <a href="javscript:void(0)" onClick={scrollTopHtml} className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>

    </>
  );
}

export default App;

