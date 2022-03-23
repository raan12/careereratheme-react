import React, { useEffect } from 'react';
import { NavLink } from "../../../node_modules/react-router-dom";

export default function Courses() {



    const filterCourses = (e, value) => {
        // button
        document.querySelectorAll('.project-filter li').forEach(function (el) {
            el.classList.remove("active");
            e.target.classList.add("active");
        });
        // filterItem
        Array.prototype.forEach.call(document.getElementsByClassName(value), function (element) {
            let filterItem = document.querySelectorAll(".filter-layout .col-xl-3:not(." + value + ")");
            filterItem.forEach((item) => { item.style.display = "none" });
            element.style.display = "block";
        });
    }

    return (
        <>
            {/*Page Header Start*/}
            <section
                className="page-header clearfix"
                style={{
                    backgroundImage: "url(images/backgrounds/page-header-bg.jpg)"
                }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-header__wrapper clearfix">
                                <div className="page-header__title">
                                    <h2>Courses</h2>
                                </div>
                                <div className="page-header__menu">
                                    <ul className="page-header__menu-list list-unstyled clearfix">
                                        <li>
                                            <NavLink to="/" activeclassname="activecurrenturl">Home</NavLink>
                                        </li>
                                        <li className="active">Courses</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            {/*Courses One Start*/}
            <section className="courses-one courses-one--courses">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Checkout New List</span>
                        <h2 className="section-title__title">Explore Courses</h2>
                    </div>
                    <div className="row">
                        {/*Start case-studies-one Top*/}
                        <div className="courses-one--courses__top">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="courses-one--courses__menu-box">
                                    <ul className="project-filter clearfix post-filter has-dynamic-filters-counter list-unstyled">
                                        <li onClick={(e) => { filterCourses(e, "filter-item") }} className="active">
                                            All
                                        </li>
                                        <li onClick={(e) => { filterCourses(e, "featured") }}>
                                            Featured
                                        </li>
                                        <li onClick={(e) => { filterCourses(e, "business") }}>
                                            Business
                                        </li>
                                        <li onClick={(e) => { filterCourses(e, "photography") }}>
                                            Photography
                                        </li>
                                        <li onClick={(e) => { filterCourses(e, "development") }}>
                                            Development
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End case-studies-one Top*/}
                    </div>
                    <div className="row filter-layout masonary-layout">
                        {/*Start Single Courses One*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item business">
                            <div
                                className="courses-one__single wow fadeInLeft"
                                data-wow-delay="0ms"
                                data-wow-duration="1000ms">
                                <div className="courses-one__single-img">
                                    <img src="images/resources/courses-v1-img1.jpg" alt="true" />
                                    <div className="overlay-text">
                                        <p>Featured</p>
                                    </div>
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            src="images/resources/courses-v1-overlay-img1.png" alt="true" />
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
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item featured">
                            <div
                                className="courses-one__single wow fadeInLeft"
                                data-wow-delay="100ms"
                                data-wow-duration="1000ms">
                                <div className="courses-one__single-img">
                                    <img src="images/resources/courses-v1-img2.jpg" alt="true" />
                                    <div className="overlay-text">
                                        <p>free</p>
                                    </div>
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            src="images/resources/courses-v1-overlay-img2.png" alt="true" />
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
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item development">
                            <div
                                className="courses-one__single wow fadeInRight"
                                data-wow-delay="0ms"
                                data-wow-duration="1000ms">
                                <div className="courses-one__single-img">
                                    <img src="images/resources/courses-v1-img3.jpg" alt="true" />
                                    <div className="overlay-text">
                                        <p>Featured</p>
                                    </div>
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            src="images/resources/courses-v1-overlay-img3.png" alt="true" />
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
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item development">
                            <div
                                className="courses-one__single wow fadeInRight"
                                data-wow-delay="100ms"
                                data-wow-duration="1000ms">
                                <div className="courses-one__single-img">
                                    <img src="images/resources/courses-v1-img4.jpg" alt="true" />
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            src="images/resources/courses-v1-overlay-img4.png" alt="true" />
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
                        {/*Start Single Courses One*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item featured">
                            <div
                                className="courses-one__single wow fadeInLeft"
                                data-wow-delay="0ms"
                                data-wow-duration="1000ms">
                                <div className="courses-one__single-img">
                                    <img src="images/resources/courses-v1-img5.jpg" alt="true" />
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            src="images/resources/courses-v1-overlay-img5.png" alt="true" />
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
                        {/*Start Single Courses One*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item photography">
                            <div
                                className="courses-one__single wow fadeInLeft"
                                data-wow-delay="100ms"
                                data-wow-duration="1000ms">
                                <div className="courses-one__single-img">
                                    <img src="images/resources/courses-v1-img6.jpg" alt="true" />
                                    <div className="overlay-text">
                                        <p>Featured</p>
                                    </div>
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            src="images/resources/courses-v1-overlay-img6.png" alt="true" />
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
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item development">
                            <div
                                className="courses-one__single wow fadeInRight"
                                data-wow-delay="0ms"
                                data-wow-duration="1000ms">
                                <div className="courses-one__single-img">
                                    <img src="images/resources/courses-v1-img7.jpg" alt="true" />
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            src="images/resources/courses-v1-overlay-img7.png" alt="true" />
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
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item featured">
                            <div
                                className="courses-one__single wow fadeInRight"
                                data-wow-delay="100ms"
                                data-wow-duration="1000ms">
                                <div className="courses-one__single-img">
                                    <img src="images/resources/courses-v1-img8.jpg" alt="true" />
                                    <div className="overlay-text">
                                        <p>free</p>
                                    </div>
                                </div>
                                <div className="courses-one__single-content">
                                    <div className="courses-one__single-content-overlay-img">
                                        <img
                                            src="images/resources/courses-v1-overlay-img8.png" alt="true" />
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
                    </div>
                </div>
            </section>
            {/*Courses One End*/}
        </>
    )
}
