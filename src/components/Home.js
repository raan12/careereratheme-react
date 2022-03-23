import React, { useState } from 'react';
import Modal from '../../node_modules/react-bootstrap/Modal';
import Whowillyoulearn from './common/Whowillyoulearn';
import FunfactsZilomMission from './common/FunfactsZilomMission';
import TestimonialsWhatTheySaying from './common/TestimonialsWhatTheySaying';

// Swiper
import Swiper from '../../node_modules/react-id-swiper';
import { Pagination, Navigation, EffectFade, Autoplay } from '../../node_modules/swiper';
import '../../node_modules/swiper/swiper-bundle.css';


export default function Home(props) {

    // configSwMainslider
    const configSwMainslider = {
        modules: [Pagination, Navigation, EffectFade, Autoplay],
        spaceBetween: 30,
        slidesPerView: 1,
        effect: 'fade',
        rebuildOnUpdate: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        }
    }


    // Video Popup
    const [Videoshow, VideosetShow] = useState(false);
    const VideohandleClose = () => VideosetShow(false);
    const VideohandleShow = () => VideosetShow(true);


    return (
        <>

            <section className="main-slider main-slider-two" id="main-slider-pagination">
                <Swiper {...configSwMainslider} className="swiper-container thm-swiper__slider">
                    {/*Start Single Swiper Slide*/}
                    <div className="swiper-slide">
                        <div
                            className="image-layer"
                            style={{ backgroundImage: "url(" + props.imageGlobalpath + 'backgrounds/' + "main-slider-v2-1.jpg" + ")" }}
                        />
                        <div className="image-layer-overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-slider-two__content text-center">
                                        <h2 className="main-slider-two__tagline">
                                            Learn Anything Online
                                        </h2>
                                        <h2 className="main-slider__title">
                                            Online Study is Now <br />
                                            Much Easier
                                        </h2>
                                    </div>
                                    <div className="main-slider-two__button-box text-center">
                                        <a href="#nolink" className="thm-btn">
                                            Discover more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Swiper Slide*/}

                    {/*Start Single Swiper Slide*/}
                    <div className="swiper-slide">
                        <div
                            className="image-layer"
                            style={{ backgroundImage: "url(" + props.imageGlobalpath + 'backgrounds/' + "main-slider-v2-2.jpg" + ")" }}

                        />
                        <div className="image-layer-overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-slider-two__content text-center">
                                        <h2 className="main-slider-two__tagline">
                                            Learn Anything Online
                                        </h2>
                                        <h2 className="main-slider__title">
                                            Online Study is Now <br />
                                            Much Easier
                                        </h2>
                                    </div>
                                    <div className="main-slider-two__button-box text-center">
                                        <a href="#nolink" className="thm-btn">
                                            Discover more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Swiper Slide*/}

                    {/*Start Single Swiper Slide*/}
                    <div className="swiper-slide">
                        <div
                            className="image-layer"
                            style={{ backgroundImage: "url(" + props.imageGlobalpath + 'resources/' + "registration-one-bg.jpg" + ")" }}
                        />
                        <div className="image-layer-overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-slider-two__content text-center">
                                        <h2 className="main-slider-two__tagline">
                                            Learn Anything Online
                                        </h2>
                                        <h2 className="main-slider__title">
                                            Online Study is Now <br />
                                            Much Easier
                                        </h2>
                                    </div>
                                    <div className="main-slider-two__button-box text-center">
                                        <a href="#nolink" className="thm-btn">
                                            Discover more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Swiper Slide*/}
                </Swiper>

            </section>




            {/*Start Categories Two*/}
            <section className="categories-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="categories-two__inner">
                                <div
                                    className="shape1 wow slideInLeft"
                                    data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <img
                                        className="lazy"
                                        src="images/shapes/thm-shape4.png"
                                        alt="true"/>
                                </div>
                                <ul className="categories-two__wrapper list-unstyled">
                                    {/*Start Single Categories Two*/}
                                    <li
                                        className="categories-two__single text-center wow fadeInUp animated animated"
                                        data-wow-delay="00ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="categories-two__single-icon">
                                            <span className="icon-creativity" />
                                            <div className="count">
                                                <h5>30</h5>
                                            </div>
                                            <div
                                                className="overly-bg"
                                                style={{ backgroundImage: "url(" + props.imageGlobalpath + 'resources/' + "categories-v2-overlay-img.png" + ")" }}></div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5>
                                                <a href="#nolink">Art &amp; Design</a>
                                            </h5>
                                            <p>46 hours course time</p>
                                        </div>
                                    </li>
                                    {/*End Single Categories Two*/}
                                    {/*Start Single Categories Two*/}
                                    <li
                                        className="categories-two__single text-center wow fadeInUp animated animated"
                                        data-wow-delay="200ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="categories-two__single-icon">
                                            <span className="icon-needs" />
                                            <div className="count">
                                                <h5>30</h5>
                                            </div>
                                            <div
                                                className="overly-bg"
                                                style={{ backgroundImage: "url(" + props.imageGlobalpath + 'resources/' + "categories-v2-overlay-img.png" + ")" }}></div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5>
                                                <a href="#nolink">Lifestyle</a>
                                            </h5>
                                            <p>46 hours course time</p>
                                        </div>
                                    </li>
                                    {/*End Single Categories Two*/}
                                    {/*Start Single Categories Two*/}
                                    <li
                                        className="categories-two__single text-center wow fadeInUp animated animated"
                                        data-wow-delay="400ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="categories-two__single-icon">
                                            <span className="icon-photo-camera" />
                                            <div className="count">
                                                <h5>30</h5>
                                            </div>
                                            <div
                                                className="overly-bg"
                                                style={{ backgroundImage: "url(" + props.imageGlobalpath + 'resources/' + "categories-v2-overlay-img.png" + ")" }}></div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5>
                                                <a href="#nolink">Photography</a>
                                            </h5>
                                            <p>46 hours course time</p>
                                        </div>
                                    </li>
                                    {/*End Single Categories Two*/}
                                    {/*Start Single Categories Two*/}
                                    <li
                                        className="categories-two__single text-center wow fadeInUp animated animated"
                                        data-wow-delay="600ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="categories-two__single-icon">
                                            <span className="icon-target" />
                                            <div className="count">
                                                <h5>30</h5>
                                            </div>
                                            <div
                                                className="overly-bg"
                                                style={{ backgroundImage: "url(" + props.imageGlobalpath + 'resources/' + "categories-v2-overlay-img.png" + ")" }}></div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5>
                                                <a href="#nolink">Marketing</a>
                                            </h5>
                                            <p>46 hours course time</p>
                                        </div>
                                    </li>
                                    {/*End Single Categories Two*/}
                                    {/*Start Single Categories Two*/}
                                    <li
                                        className="categories-two__single text-center wow fadeInUp animated animated"
                                        data-wow-delay="800ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="categories-two__single-icon">
                                            <span className="icon-desk" />
                                            <div className="count">
                                                <h5>30</h5>
                                            </div>
                                            <div
                                                className="overly-bg"
                                                style={{ backgroundImage: "url(" + props.imageGlobalpath + 'resources/' + "categories-v2-overlay-img.png" + ")" }}></div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5>
                                                <a href="#nolink">Business</a>
                                            </h5>
                                            <p>46 hours course time</p>
                                        </div>
                                    </li>
                                    {/*End Single Categories Two*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Categories Two*/}
            {/*Start Welcome One*/}
            <section className="welcome-one">
                <div className="container">
                    <div className="row">
                        {/*Start Welcome One Left*/}
                        <div className="col-xl-6">
                            <div className="welcome-one__left">
                                <div className="section-title">
                                    <span className="section-title__tagline">
                                        Company Introductions
                                    </span>
                                    <h2 className="section-title__title">
                                        Start Learning with <br />
                                        Zilom Now
                                    </h2>
                                </div>
                                <p className="welcome-one__left-text">
                                    There are many variations of passages of lorem ipsum available but
                                    the majority have suffered alteration in some form by injected
                                    humour or randomised words which don't look.
                                </p>
                                <ul className="welcome-one__left-features-box list-unstyled">
                                    {/*Start Welcome One Left Features Box Single*/}
                                    <li className="welcome-one__left-features-box-single">
                                        <div className="welcome-one__left-features-box-single-icon">
                                            <span className="icon-professor" />
                                        </div>
                                        <div className="welcome-one__left-features-box-single-title">
                                            <h4>
                                                Start learning from <br />
                                                our experts
                                            </h4>
                                        </div>
                                    </li>
                                    {/*End Welcome One Left Features Box Single*/}
                                    {/*Start Welcome One Left Features Box Single*/}
                                    <li className="welcome-one__left-features-box-single">
                                        <div className="welcome-one__left-features-box-single-icon">
                                            <span className="icon-knowledge" />
                                        </div>
                                        <div className="welcome-one__left-features-box-single-title">
                                            <h4>
                                                Enhance your skills <br />
                                                with us now
                                            </h4>
                                        </div>
                                    </li>
                                    {/*End Welcome One Left Features Box Single*/}
                                </ul>
                                <div className="welcome-one__left-btn">
                                    <a href="about.html" className="thm-btn">
                                        view all courses
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*End Welcome One Left*/}
                        {/*Start Welcome One Right*/}
                        <div className="col-xl-6">
                            <div className="welcome-one__right clearfix">
                                <div className="shape1 rotate-me">
                                    <img
                                        className="lazy"
                                        src="images/shapes/thm-shape1.png"
                                        alt="true"/>
                                </div>
                                <div
                                    className="welcome-one__right-img1 wow slideInRight"
                                    data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <div className="welcome-one__right-img1-inner">
                                        <img
                                            className="lazy"
                                            src="images/resources/welcome-v1-img1.jpg" alt="true"/>
                                    </div>
                                </div>
                                <div
                                    className="welcome-one__right-img2 wow zoomIn"
                                    data-wow-delay="100ms"
                                    data-wow-duration="3500ms">
                                    <img
                                        className="lazy"
                                        src="images/resources/welcome-v1-img2.jpg"
                                        alt="true"/>
                                </div>
                            </div>
                        </div>
                        {/*End Welcome One Right*/}
                    </div>
                </div>
            </section>
            {/*End Welcome One*/}
            {/*Courses One Start*/}
            <section className="courses-one">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Checkout New List</span>
                        <h2 className="section-title__title">Explore Courses</h2>
                    </div>
                    <div className="row">
                        {/*Start Single Courses One*/}
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                            data-wow-delay="0ms"
                            data-wow-duration="1000ms">
                            <div className="courses-one__single">
                                <div className="courses-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/resources/courses-v1-img1.jpg"
                                        alt="true"/>
                                    <div className="overlay-text">
                                        <p>Featured</p>
                                    </div>
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            className="lazy"
                                            src="images/resources/courses-v1-overlay-img1.png" alt="true"/>
                                    </div>
                                    <h6 className="courses-one__single-content-name">Kevin Martin</h6>
                                    <h4 className="courses-one__single-content-title">
                                        <a href="course-details.html">Become a React Developer</a>
                                    </h4>
                                    <div className="courses-one__single-content-review-box">
                                        <ul className="list-unstyled">
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                        <div className="rateing-box">
                                            <span>(4)</span>
                                        </div>
                                    </div>
                                    <p className="courses-one__single-content-price">$30.00</p>
                                    <ul className="courses-one__single-content-courses-info list-unstyled">
                                        <li>2 Lessons</li>
                                        <li>10 Hours</li>
                                        <li>Beginner</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Single Courses One*/}
                        {/*Start Single Courses One*/}
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                            data-wow-delay="100ms"
                            data-wow-duration="1000ms">
                            <div className="courses-one__single">
                                <div className="courses-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/resources/courses-v1-img2.jpg"
                                        alt="true"/>
                                    <div className="overlay-text">
                                        <p>free</p>
                                    </div>
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            className="lazy"
                                            src="images/resources/courses-v1-overlay-img2.png" alt="true"/>
                                    </div>
                                    <h6 className="courses-one__single-content-name">
                                        Christine Eve
                                    </h6>
                                    <h4 className="courses-one__single-content-title">
                                        <a href="course-details.html">Become a React Developer</a>
                                    </h4>
                                    <div className="courses-one__single-content-review-box">
                                        <ul className="list-unstyled">
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                        <div className="rateing-box">
                                            <span>(4)</span>
                                        </div>
                                    </div>
                                    <p className="courses-one__single-content-price">$30.00</p>
                                    <ul className="courses-one__single-content-courses-info list-unstyled">
                                        <li>2 Lessons</li>
                                        <li>10 Hours</li>
                                        <li>Beginner</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Single Courses One*/}
                        {/*Start Single Courses One*/}
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                            data-wow-delay="0ms"
                            data-wow-duration="1000ms">
                            <div className="courses-one__single">
                                <div className="courses-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/resources/courses-v1-img3.jpg"
                                        alt="true"/>
                                    <div className="overlay-text">
                                        <p>Featured</p>
                                    </div>
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            className="lazy"
                                            src="images/resources/courses-v1-overlay-img3.png" alt="true"/>
                                    </div>
                                    <h6 className="courses-one__single-content-name">David Cooper</h6>
                                    <h4 className="courses-one__single-content-title">
                                        <a href="course-details.html">Become a React Developer</a>
                                    </h4>
                                    <div className="courses-one__single-content-review-box">
                                        <ul className="list-unstyled">
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                        <div className="rateing-box">
                                            <span>(4)</span>
                                        </div>
                                    </div>
                                    <p className="courses-one__single-content-price">$30.00</p>
                                    <ul className="courses-one__single-content-courses-info list-unstyled">
                                        <li>2 Lessons</li>
                                        <li>10 Hours</li>
                                        <li>Beginner</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Single Courses One*/}
                        {/*Start Single Courses One*/}
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                            data-wow-delay="0ms"
                            data-wow-duration="1000ms">
                            <div className="courses-one__single">
                                <div className="courses-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/resources/courses-v1-img4.jpg"
                                        alt="true"/>
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            className="lazy"
                                            src="images/resources/courses-v1-overlay-img4.png" alt="true"/>
                                    </div>
                                    <h6 className="courses-one__single-content-name">Sarah Albert</h6>
                                    <h4 className="courses-one__single-content-title">
                                        <a href="course-details.html">Become a React Developer</a>
                                    </h4>
                                    <div className="courses-one__single-content-review-box">
                                        <ul className="list-unstyled">
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                        <div className="rateing-box">
                                            <span>(4)</span>
                                        </div>
                                    </div>
                                    <p className="courses-one__single-content-price">$30.00</p>
                                    <ul className="courses-one__single-content-courses-info list-unstyled">
                                        <li>2 Lessons</li>
                                        <li>10 Hours</li>
                                        <li>Beginner</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Single Courses One*/}
                    </div>
                </div>
            </section>
            {/*Courses One End*/}
            {/*Video One Start*/}
            <section className="video-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div
                                className="video-one__box wow fadeInUp"
                                data-wow-delay="0ms"
                                data-wow-duration="1500ms"
                                style={{ backgroundImage: "url(" + props.imageGlobalpath + 'backgrounds/' + "video-v1-bg.jpg" + ")" }}>
                                <div className="video-one__box-title">
                                    <h2>Watch Video</h2>
                                </div>
                                <div
                                    className="icon wow zoomIn"
                                    data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <a className="video-popup"
                                        title="Zilom Video Gallery"
                                        onClick={VideohandleShow}>
                                        <span className="icon-play" />
                                    </a>
                                    <span className="border-animation border-1" />
                                    <span className="border-animation border-2" />
                                    <span className="border-animation border-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal show={Videoshow} onHide={VideohandleClose} className="videoPopup-youtube" aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="p-0">
                    <div className="ratio ratio-16x9">
                        <iframe src={"https://www.youtube.com/embed/HndV87XpkWg" + (VideohandleShow ? '?autoplay=1&amp;mute=1&amp;loop=1&amp;modestbranding=1&amp;showinfo=0&amp;start=50&amp;enablejsapi=1&amp;&amp;widgetid=3' : '')} title="YouTube video" allowfullscreen></iframe>
                    </div>
                </Modal.Body>
            </Modal>
            {/*Video One End*/}

            {/*Counter One Start*/}
            <FunfactsZilomMission />
            {/*Counter One End*/}

            {/*Start Meet Teachers One*/}
            <section className="meet-teachers-one">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Professional People</span>
                        <h2 className="section-title__title">Meet the Teachers</h2>
                    </div>
                    <div className="row">
                        {/*Start Single Meet Teachers One*/}
                        <div className="col-xl-4 col-lg-4">
                            <div
                                className="meet-teachers-one__single wow fadeInUp"
                                data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                <div className="meet-teachers-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/resources/meet-teachers-v1-img1.png"
                                        alt="true"/>
                                </div>
                                <div className="meet-teachers-one__single-content">
                                    <div className="meet-teachers-one__single-middle-content">
                                        <div className="title">
                                            <h4>
                                                <a href="#nolink">David Cooper</a>
                                            </h4>
                                            <p>teacher</p>
                                        </div>
                                        <p className="meet-teachers-one__single-content-text">
                                            There are many varia of passages the free ipsum lorem.
                                        </p>
                                    </div>
                                    <div className="meet-teachers-one__single-bottom-content">
                                        <div className="meet-teachers-one__single-content-courses-box">
                                            <div className="text">
                                                <p>20 Courses</p>
                                            </div>
                                            <div className="social-icon">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <a href="#nolink">
                                                            <i className="fab fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink">
                                                            <i className="fab fa-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Single Meet Teachers One*/}
                        {/*Start Single Meet Teachers One*/}
                        <div className="col-xl-4 col-lg-4">
                            <div
                                className="meet-teachers-one__single wow fadeInUp"
                                data-wow-delay="100ms"
                                data-wow-duration="1500ms">
                                <div className="meet-teachers-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/resources/meet-teachers-v1-img2.png"
                                        alt="true"/>
                                </div>
                                <div className="meet-teachers-one__single-content">
                                    <div className="meet-teachers-one__single-middle-content">
                                        <div className="title">
                                            <h4>
                                                <a href="#nolink">Sarah Albert</a>
                                            </h4>
                                            <p>teacher</p>
                                        </div>
                                        <p className="meet-teachers-one__single-content-text">
                                            There are many varia of passages the free ipsum lorem.
                                        </p>
                                    </div>
                                    <div className="meet-teachers-one__single-bottom-content">
                                        <div className="meet-teachers-one__single-content-courses-box">
                                            <div className="text">
                                                <p>20 Courses</p>
                                            </div>
                                            <div className="social-icon">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <a href="#nolink">
                                                            <i className="fab fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink">
                                                            <i className="fab fa-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Single Meet Teachers One*/}
                        {/*Start Single Meet Teachers One*/}
                        <div className="col-xl-4 col-lg-4">
                            <div
                                className="meet-teachers-one__single wow fadeInUp"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <div className="meet-teachers-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/resources/meet-teachers-v1-img3.png"
                                        alt="true"/>
                                </div>
                                <div className="meet-teachers-one__single-content">
                                    <div className="meet-teachers-one__single-middle-content">
                                        <div className="title">
                                            <h4>
                                                <a href="#nolink">John Smith</a>
                                            </h4>
                                            <p>teacher</p>
                                        </div>
                                        <p className="meet-teachers-one__single-content-text">
                                            There are many varia of passages the free ipsum lorem.
                                        </p>
                                    </div>
                                    <div className="meet-teachers-one__single-bottom-content">
                                        <div className="meet-teachers-one__single-content-courses-box">
                                            <div className="text">
                                                <p>20 Courses</p>
                                            </div>
                                            <div className="social-icon">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <a href="#nolink">
                                                            <i className="fab fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink">
                                                            <i className="fab fa-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#nolink">
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Single Meet Teachers One*/}
                    </div>
                </div>
            </section>
            {/*End Meet Teachers One*/}
            {/*Start Cta One*/}
            <section className="cta-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div
                                className="cta-one__wrapper wow slideInUp"
                                data-wow-delay="100ms"
                                data-wow-duration="1500ms">
                                <div className="shape1">
                                    <img
                                        className="lazy"
                                        src="images/shapes/thm-shape5.png"
                                        alt="true"/>
                                </div>
                                <div className="cta-one__left">
                                    <h2 className="cta-one__left-text">
                                        We’ve Best Teachers in Every Subjects
                                    </h2>
                                </div>
                                <div className="cta-one__right">
                                    <div className="cta-one__right-btn">
                                        <a href="#nolink" className="thm-btn">
                                            Discover more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Cta One*/}

            {/*Start Testimonials Two*/}
            <TestimonialsWhatTheySaying />
            {/*End Testimonials Two*/}

            {/*Start Features Two*/}
            <section className="features-two">
                <div className="container">
                    <div className="row">
                        {/*Start Single Features Two*/}
                        <div
                            className="col-xl-6 wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="features-two__single">
                                <div className="features-two__single-img">
                                    <div className="features-two__single-img-inner">
                                        <img
                                            className="lazy"
                                            src="images/feauters/features-v2-img1.jpg" alt="true"/>
                                    </div>
                                    <div className="features-two__single-overlay">
                                        <h3 className="features-two__single-overlay-title">
                                            <a href="#nolink">Become an Teacher</a>
                                        </h3>
                                        <p className="features-two__single-overlay-text">
                                            Nunc accumsan semper alique <br />
                                            in dolor ipsum dolor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Single Features Two*/}
                        {/*Start Single Features Two*/}
                        <div
                            className="col-xl-6 wow fadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms">
                            <div className="features-two__single">
                                <div className="features-two__single-img">
                                    <div className="features-two__single-img-inner">
                                        <img
                                            className="lazy"
                                            src="images/feauters/features-v2-img2.jpg" alt="true"/>
                                    </div>
                                    <div className="features-two__single-overlay">
                                        <h3 className="features-two__single-overlay-title">
                                            <a href="#nolink">Join our Community</a>
                                        </h3>
                                        <p className="features-two__single-overlay-text">
                                            Nunc accumsan semper alique <br />
                                            in dolor ipsum dolor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Single Features Two*/}
                    </div>
                </div>
            </section>
            {/*End Features Two*/}
            {/*Start Registration Two*/}
            <section className="registration-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="registration-two__wrapper">
                                <div className="shape1 zoom-fade">
                                    <img
                                        className="lazy"
                                        src="images/shapes/thm-shape2.png"
                                        alt="true"/>
                                </div>
                                <div
                                    className="shape2 wow slideInRight"
                                    data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <img
                                        className="lazy"
                                        src="images/shapes/thm-shape3.png"
                                        alt="true"/>
                                </div>
                                <div className="registration-two__left">
                                    <h2 className="registration-two__left-text">
                                        Start Your Education Career <br />
                                        with Zilom
                                    </h2>
                                </div>
                                <div className="registration-two__right">
                                    <div className="registration-two__right-btn">
                                        <a href="#nolink" className="thm-btn">
                                            Discover more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Registration Two*/}
            {/*Blog One Start*/}
            <section className="blog-one blog-one--blog-two">
                <div
                    className="blog-one--blog-two__bg wow slideInDown"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                />
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Directly from the Blog</span>
                        <h2 className="section-title__title">Latest Articles</h2>
                    </div>
                    <div className="row">
                        {/*Start Single Blog One*/}
                        <div
                            className="col-xl-4 col-lg-4 wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/blog/blog-v1-img1.jpg"
                                        alt="true"/>
                                </div>
                                <div className="blog-one__single-content">
                                    <div className="blog-one__single-content-overlay-mata-info">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#nolink">
                                                    <span className="icon-clock" />
                                                    20 June
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#nolink">
                                                    <span className="icon-user" />
                                                    Admin{" "}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#nolink">
                                                    <span className="icon-chat" /> Comments
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2 className="blog-one__single-content-title">
                                        <a href="news-details.html">
                                            Helping Answers Stand out in Discussions
                                        </a>
                                    </h2>
                                    <p className="blog-one__single-content-text">
                                        Lorem ipsum is simply free text on used by copytyping refreshing
                                        the whole area.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Blog One*/}
                        {/*Start Single Blog One*/}
                        <div
                            className="col-xl-4 col-lg-4 wow fadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/blog/blog-v1-img2.jpg"
                                        alt="true"/>
                                </div>
                                <div className="blog-one__single-content">
                                    <div className="blog-one__single-content-overlay-mata-info">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#nolink">
                                                    <span className="icon-clock" />
                                                    20 June
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#nolink">
                                                    <span className="icon-user" />
                                                    Admin{" "}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#nolink">
                                                    <span className="icon-chat" /> Comments
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2 className="blog-one__single-content-title">
                                        <a href="news-details.html">
                                            Helping Answers Stand out in Discussions
                                        </a>
                                    </h2>
                                    <p className="blog-one__single-content-text">
                                        Lorem ipsum is simply free text on used by copytyping refreshing
                                        the whole area.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Blog One*/}
                        {/*Start Single Blog One*/}
                        <div
                            className="col-xl-4 col-lg-4 wow fadeInUp"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/blog/blog-v1-img3.jpg"
                                        alt="true"/>
                                </div>
                                <div className="blog-one__single-content">
                                    <div className="blog-one__single-content-overlay-mata-info">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#nolink">
                                                    <span className="icon-clock" />
                                                    20 June
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#nolink">
                                                    <span className="icon-user" />
                                                    Admin{" "}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#nolink">
                                                    <span className="icon-chat" /> Comments
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2 className="blog-one__single-content-title">
                                        <a href="news-details.html">
                                            Helping Answers Stand out in Discussions
                                        </a>
                                    </h2>
                                    <p className="blog-one__single-content-text">
                                        Lorem ipsum is simply free text on used by copytyping refreshing
                                        the whole area.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Blog One*/}
                    </div>
                </div>
            </section>
            {/*Blog One End*/}


            {/*Whowillyoulearn*/}
            <Whowillyoulearn />
            {/*Whowillyoulearn End*/}


        </>
    )
}
