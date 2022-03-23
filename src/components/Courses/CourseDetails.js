import React from 'react';
import { NavLink } from "../../../node_modules/react-router-dom";


export default function CourseDetails() {
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
                                    <h2>Course Details</h2>
                                </div>
                                <div className="page-header__menu">
                                    <ul className="page-header__menu-list list-unstyled clearfix">
                                        <li>
                                            <NavLink to="/" activeclassname="activecurrenturl">Home</NavLink>
                                        </li>
                                        <li className="active">Course Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            {/*Start Course Details*/}
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        {/*Start Course Details Content*/}
                        <div className="col-xl-8 col-lg-8">
                            <div className="course-details__content">
                                {/*Start Single Courses One*/}
                                <div
                                    className="courses-one__single style2 wow fadeInLeft"
                                    data-wow-delay="0ms"
                                    data-wow-duration="1000ms">
                                    <div className="courses-one__single-img">
                                        <img
                                            className="lazy"
                                            src="images/resources/course-details-img1.jpg" alt="true"/>
                                        <div className="overlay-text">
                                            <p>Featured</p>
                                        </div>
                                    </div>
                                    <div className="courses-one__single-content">
                                        <div className="courses-one__single-content-overlay-img">
                                            <img
                                                className="lazy"
                                                src="images/resources/course-details-overlay-img.png" alt="true" />
                                        </div>
                                        <h6 className="courses-one__single-content-name">
                                            Kevin Martin <span>Recently Updated 20 June, 2021</span>
                                        </h6>
                                        <h4 className="courses-one__single-content-title">
                                            Become a React Developer
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
                                        <div className="course-details__content-text1">
                                            <p>
                                                Aelltes port lacus quis enim var sed efficitur turpis gilla
                                                sed sit Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry’s
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a
                                                type specimen book. It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged.
                                            </p>
                                        </div>
                                        <div className="course-details__content-text2">
                                            <p>
                                                It was popularised in the 1960s with the release of Letraset
                                                sheets containing Lorem Ipsum passages, and more recently
                                                with desktop publishing software like Aldus PageMaker
                                                including versions of lorem ipsum amet finibus eros. Lorem
                                                Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy
                                                text ever since the 1500s, when an unknown printer took a
                                                galley of type and scrambled it to make a type specimen
                                                book. It has survived not only five centuries, but also the
                                                leap into electronic typesetting.
                                            </p>
                                        </div>
                                        <div className="course-details__content-list">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-confirmation" />
                                                    </div>
                                                    <div className="text">
                                                        <p>It has survived not only five centuries</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-confirmation" />
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            Lorem Ipsum is simply dummy text of the new design
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-confirmation" />
                                                    </div>
                                                    <div className="text">
                                                        <p>Printng and type setting ipsum</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-confirmation" />
                                                    </div>
                                                    <div className="text">
                                                        <p>Take a look at our round up of the best shows</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*End Single Courses One*/}
                                {/*Start Course Details Curriculum*/}
                                <div className="course-details__curriculum">
                                    <h2 className="course-details__curriculum-title">Curriculum</h2>
                                    {/*Start Single Course Details Curriculum*/}
                                    <div className="course-details__curriculum-single">
                                        <h3 className="course-details__curriculum-single-title">
                                            Starting Beginners Level Course
                                        </h3>
                                        <p className="course-details__curriculum-single-text">
                                            Aelltes port lacus quis enim var sed efficitur turpis gilla
                                            sed sit Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry’s
                                            standard dummy text ever since.
                                        </p>
                                        <ul className="course-details__curriculum-list list-unstyled">
                                            <li>
                                                <div className="course-details__curriculum-list-left">
                                                    <div className="course-details__curriculum-list-left-icon">
                                                        <i className="fa fa-play" aria-hidden="true" />
                                                    </div>
                                                    <a
                                                        href="#nolink"
                                                        className="course-details__curriculum-list-left-title"
                                                    >
                                                        Introduction to Editing
                                                    </a>
                                                    <span>Preview</span>
                                                </div>
                                                <div className="course-details__curriculum-list-right">
                                                    <p>16 minutes</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="course-details__curriculum-list-left">
                                                    <div className="course-details__curriculum-list-left-icon">
                                                        <i className="fa fa-play" aria-hidden="true" />
                                                    </div>
                                                    <a
                                                        href="#nolink"
                                                        className="course-details__curriculum-list-left-title"
                                                    >
                                                        Overview of Editing
                                                    </a>
                                                    <span>Preview</span>
                                                </div>
                                                <div className="course-details__curriculum-list-right">
                                                    <p>10 minutes</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="course-details__curriculum-list-left">
                                                    <div className="course-details__curriculum-list-left-icon">
                                                        <i className="fa fa-folder" aria-hidden="true" />
                                                    </div>
                                                    <a
                                                        href="#nolink"
                                                        className="course-details__curriculum-list-left-title"
                                                    >
                                                        Basic Editing Technology
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="course-details__curriculum-list-left">
                                                    <div className="course-details__curriculum-list-left-icon style2">
                                                        <i className="fa fa-comment" aria-hidden="true" />
                                                    </div>
                                                    <a
                                                        href="#nolink"
                                                        className="course-details__curriculum-list-left-title"
                                                    >
                                                        Quiz
                                                    </a>
                                                </div>
                                                <div className="course-details__curriculum-list-right">
                                                    <p>6 questions</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*End Single Course Details Curriculum*/}
                                    {/*Start Single Course Details Curriculum*/}
                                    <div className="course-details__curriculum-single mar-buttom0">
                                        <h3 className="course-details__curriculum-single-title">
                                            Intermediate Level Course
                                        </h3>
                                        <p className="course-details__curriculum-single-text">
                                            Aelltes port lacus quis enim var sed efficitur turpis gilla
                                            sed sit Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry’s
                                            standard dummy text ever since.
                                        </p>
                                        <ul className="course-details__curriculum-list style2 list-unstyled">
                                            <li>
                                                <div className="course-details__curriculum-list-left">
                                                    <div className="course-details__curriculum-list-left-icon">
                                                        <i className="fa fa-play" aria-hidden="true" />
                                                    </div>
                                                    <a
                                                        href="#nolink"
                                                        className="course-details__curriculum-list-left-title"
                                                    >
                                                        Introduction to Editing
                                                    </a>
                                                    <span>Preview</span>
                                                </div>
                                                <div className="course-details__curriculum-list-right">
                                                    <p>16 minutes</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="course-details__curriculum-list-left">
                                                    <div className="course-details__curriculum-list-left-icon">
                                                        <i className="fa fa-folder" aria-hidden="true" />
                                                    </div>
                                                    <a
                                                        href="#nolink"
                                                        className="course-details__curriculum-list-left-title"
                                                    >
                                                        Introduction to Editing
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="course-details__curriculum-list-left">
                                                    <div className="course-details__curriculum-list-left-icon style2">
                                                        <i className="fa fa-comment" aria-hidden="true" />
                                                    </div>
                                                    <a
                                                        href="#nolink"
                                                        className="course-details__curriculum-list-left-title"
                                                    >
                                                        Quiz
                                                    </a>
                                                </div>
                                                <div className="course-details__curriculum-list-right">
                                                    <p>6 questions</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*End Single Course Details Curriculum*/}
                                </div>
                                {/*End Course Details Curriculum*/}
                                {/*Start Course Details Reviews*/}
                                <div className="course-details__reviews">
                                    <h3 className="course-details__reviews-title">Reviews</h3>
                                    <div className="course-details__progress-review">
                                        <div className="row">
                                            <div className="col-xl-7 col-lg-7 col-md-7">
                                                <div className="course-details__progress clearfix">
                                                    <div className="course-details__progress-item">
                                                        <p className="course-details__progress-text">
                                                            Excellent
                                                        </p>
                                                        <div className="course-details__progress-bar">
                                                            <span style={{ width: "90%" }} />
                                                        </div>
                                                        <p className="course-details__progress-count">2</p>
                                                    </div>
                                                    <div className="course-details__progress-item">
                                                        <p className="course-details__progress-text">
                                                            Very Good
                                                        </p>
                                                        <div className="course-details__progress-bar">
                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                        <p className="course-details__progress-count">1</p>
                                                    </div>
                                                    <div className="course-details__progress-item">
                                                        <p className="course-details__progress-text">Average</p>
                                                        <div className="course-details__progress-bar">
                                                            <span style={{ width: "70%" }} />
                                                        </div>
                                                        <p className="course-details__progress-count">1</p>
                                                    </div>
                                                    <div className="course-details__progress-item">
                                                        <p className="course-details__progress-text">Poor</p>
                                                        <div className="course-details__progress-bar">
                                                            <span style={{ width: "0%" }} className="no-bubble" />
                                                        </div>
                                                        <p className="course-details__progress-count">0</p>
                                                    </div>
                                                    <div className="course-details__progress-item">
                                                        <p className="course-details__progress-text">
                                                            Terrible
                                                        </p>
                                                        <div className="course-details__progress-bar">
                                                            <span style={{ width: "0%" }} className="no-bubble" />
                                                        </div>
                                                        <p className="course-details__progress-count">0</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-5 col-md-5">
                                                <div className="course-details__review-box">
                                                    <h2 className="course-details__review-count">4.6</h2>
                                                    <div className="course-details__review-stars">
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                    </div>
                                                    <p className="course-details__review-text">30 reviews</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Start Course Details Comment*/}
                                    <div className="course-details__comment">
                                        <div className="course-details__comment-single">
                                            <div className="course-details__comment-img">
                                                <img
                                                    className="lazy"
                                                    src="images/resources/course-details-comment-img1.png" alt="true"/>
                                            </div>
                                            <div className="course-details__comment-text">
                                                <div className="course-details__comment-text-top">
                                                    <h3 className="course-details__comment-text-name">
                                                        David Marks
                                                    </h3>
                                                    <p>3 hours ago</p>
                                                    <div className="course-details__comment-review-stars">
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                    </div>
                                                </div>
                                                <p className="course-details__comment-text-bottom">
                                                    Cursus massa at urnaaculis estie. Sed aliquamellus vitae
                                                    ultrs condmentum lightly believable. If you are going to
                                                    use a of you need to be sure there.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="course-details__comment-single">
                                            <div className="course-details__comment-img">
                                                <img
                                                    className="lazy"
                                                    src="images/resources/course-details-comment-img2.png" alt="true"/>
                                            </div>
                                            <div className="course-details__comment-text">
                                                <div className="course-details__comment-text-top">
                                                    <h3 className="course-details__comment-text-name">
                                                        Christine Eve
                                                    </h3>
                                                    <p>3 hours ago</p>
                                                    <div className="course-details__comment-review-stars">
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                        <i className="fas fa-star" />
                                                        {/* /.fas fa-star */}
                                                    </div>
                                                </div>
                                                <p className="course-details__comment-text-bottom">
                                                    Cursus massa at urnaaculis estie. Sed aliquamellus vitae
                                                    ultrs condmentum lightly believable. If you are going to
                                                    use a of you need to be sure there.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Course Details Comment*/}
                                    <div className="course-details__add-review">
                                        <h2 className="course-details__add-review-title">
                                            Add a Review
                                        </h2>
                                        <p className="course-details__add-review-text">
                                            Rate this Course?
                                            <a href="#nolink" className="fas fa-star active pd-left" />
                                            <a href="#nolink" className="fas fa-star active" />
                                            <a href="#nolink" className="fas fa-star active" />
                                            <a href="#nolink" className="fas fa-star" />
                                            <a href="#nolink" className="fas fa-star" />
                                        </p>
                                        <div className="course-details__add-review-form">
                                            <form
                                                action="https://layerdrops.com/zilom/assets/inc/sendemail.php"
                                                className="comment-one__form contact-form-validated"
                                                noValidate="novalidate"
                                            >
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6">
                                                        <div className="comment-form__input-box">
                                                            <input
                                                                type="text"
                                                                placeholder="Your name"
                                                                name="name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6">
                                                        <div className="comment-form__input-box">
                                                            <input
                                                                type="email"
                                                                placeholder="Email address"
                                                                name="email"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12">
                                                        <div className="comment-form__input-box">
                                                            <textarea
                                                                name="message"
                                                                placeholder="Write message"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="thm-btn comment-form__btn"
                                                        >
                                                            Submit review
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/*End Course Details Reviews*/}
                            </div>
                        </div>
                        {/*End Course Details Content*/}
                        {/*Start Course Details Sidebar*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="course-details__sidebar">
                                <div
                                    className="course-details__price wow fadeInUp animated"
                                    data-wow-delay="0.1s">
                                    <h2 className="course-details__price-amount">
                                        $30.00
                                        <span>
                                            <del>$60.00</del>
                                        </span>
                                    </h2>
                                    <div className="course-details__price-btn">
                                        <a href="about.html" className="thm-btn">
                                            Buy this course
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="course-details__sidebar-meta wow fadeInUp animated"
                                    data-wow-delay="0.3s">
                                    <ul className="course-details__sidebar-meta-list list-unstyled">
                                        <li className="course-details__sidebar-meta-list-item">
                                            <div className="icon">
                                                <a href="#nolink">
                                                    <i className="far fa-clock" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <a href="#nolink">
                                                        Durations:<span>10 hours</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="course-details__sidebar-meta-list-item">
                                            <div className="icon">
                                                <a href="#nolink">
                                                    <i className="far fa-folder-open" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <a href="#nolink">
                                                        Lectures:<span>6</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="course-details__sidebar-meta-list-item">
                                            <div className="icon">
                                                <a href="#nolink">
                                                    <i className="far fa-user-circle" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <a href="#nolink">
                                                        Students:<span> Max 6</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="course-details__sidebar-meta-list-item">
                                            <div className="icon">
                                                <a href="#nolink">
                                                    <i className="fas fa-play" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <a href="#nolink">
                                                        Video:<span>8 hours</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="course-details__sidebar-meta-list-item">
                                            <div className="icon">
                                                <a href="#nolink">
                                                    <i className="far fa-flag" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <a href="#nolink">
                                                        Skill Level:<span>Advanced</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="course-details__sidebar-meta-list-item">
                                            <div className="icon">
                                                <a href="#nolink">
                                                    <i className="far fa-bell" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <a href="#nolink">
                                                        Language:<span>English</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="course-details__new-courses wow fadeInUp animated"
                                    data-wow-delay="0.5s">
                                    <h3 className="course-details__new-courses-title">New Courses</h3>
                                    <ul className="course-details__new-courses-list list-unstyled">
                                        <li className="course-details__new-courses-list-item">
                                            <div className="course-details__new-courses-list-item-img">
                                                <img
                                                    className="lazy"
                                                    src="images/resources/course-details-sidebar-img1.png" alt="true"/>
                                            </div>
                                            <div className="course-details__new-courses-list-item-content">
                                                <h4 className="course-details__new-courses-list-item-content-title">
                                                    <a href="#nolink">
                                                        React – The Complete <br />
                                                        Instruction
                                                    </a>
                                                </h4>
                                                <div className="course-details__new-courses-rateing-box">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <div className="course-details__new-courses-rateing-count">
                                                        <span>(4)</span>
                                                    </div>
                                                </div>
                                                <p className="course-details__new-courses-price">$30.00</p>
                                            </div>
                                        </li>
                                        <li className="course-details__new-courses-list-item">
                                            <div className="course-details__new-courses-list-item-img">
                                                <img
                                                    className="lazy"
                                                    src="images/resources/course-details-sidebar-img2.png" alt="true"/>
                                            </div>
                                            <div className="course-details__new-courses-list-item-content">
                                                <h4 className="course-details__new-courses-list-item-content-title">
                                                    <a href="#nolink">
                                                        React – The Complete <br />
                                                        Instruction
                                                    </a>
                                                </h4>
                                                <div className="course-details__new-courses-rateing-box">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <div className="course-details__new-courses-rateing-count">
                                                        <span>(4)</span>
                                                    </div>
                                                </div>
                                                <p className="course-details__new-courses-price">$30.00</p>
                                            </div>
                                        </li>
                                        <li className="course-details__new-courses-list-item">
                                            <div className="course-details__new-courses-list-item-img">
                                                <img
                                                    className="lazy"
                                                    src="images/resources/course-details-sidebar-img3.png" alt="true"/>
                                            </div>
                                            <div className="course-details__new-courses-list-item-content">
                                                <h4 className="course-details__new-courses-list-item-content-title">
                                                    <a href="#nolink">
                                                        React – The Complete <br />
                                                        Instruction
                                                    </a>
                                                </h4>
                                                <div className="course-details__new-courses-rateing-box">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <div className="course-details__new-courses-rateing-count">
                                                        <span>(4)</span>
                                                    </div>
                                                </div>
                                                <p className="course-details__new-courses-price">$30.00</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Course Details Sidebar*/}
                    </div>
                </div>
            </section>
            {/*End Course Details*/}
        </>
    )
}
