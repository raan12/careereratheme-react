import React from 'react';
import { NavLink } from "../../../node_modules/react-router-dom";

export default function BecomeTeacher() {
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
                                    <h2>Become a Teacher</h2>
                                </div>
                                <div className="page-header__menu">
                                    <ul className="page-header__menu-list list-unstyled clearfix">
                                        <li>
                                            <NavLink to="/" activeclassname="activecurrenturl">Home</NavLink>
                                        </li>
                                        <li className="active">Become a Teacher</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            {/*Start Teaching One*/}
            <section className="teaching-one">
                <div className="container">
                    <div className="row">
                        {/*Start Teaching One Apply Form*/}
                        <div className="col-xl-6 col-lg-5">
                            <div className="teaching-one__apply-form">
                                <div className="title-box">
                                    <h4>Apply for Teaching</h4>
                                </div>
                                <div className="form-box">
                                    <form
                                        method="post"
                                        action="https://layerdrops.com/zilom/index.html"
                                    >
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea placeholder="Comment" defaultValue={""} />
                                        </div>
                                        <button
                                            className="registration-one__right-form-btn"
                                            type="submit"
                                            name="submit-form"
                                        >
                                            <span className="thm-btn">apply for it</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/*End Teaching One Apply Form*/}
                        {/*Start Teaching One Content*/}
                        <div className="col-xl-6 col-lg-7">
                            <div className="teaching-one__content">
                                <h2 className="teaching-one__content-title">Teaching Benefits</h2>
                                <p className="teaching-one__content-text1">
                                    Lorem Ipsum is simply dummy text of the printing and type
                                    industry. Lorem Ipsum has been the standard dummy text ever since
                                    the when an unknown was popularised. It has survived not only five
                                    centuries, but also the leap into electronic.
                                </p>
                                <div className="teaching-one__content-img">
                                    <img
                                        className="lazy"
                                        src="images/resources/teaching-one-img1.jpg" alt="true"/>
                                </div>
                                <p className="teaching-one__content-text2">
                                    Lorem Ipsum has been the standard dummy text ever since the when
                                    an unknown was popularised. It has survived not only five
                                    centuries but also the leap into electronic.
                                </p>
                            </div>
                        </div>
                        {/*End Teaching One Content*/}
                    </div>
                </div>
            </section>
            {/*End Teaching One*/}
            {/*Start Meet Teachers One*/}
            <section className="meet-teachers-one meet-teachers-one--teachers">
                <div className="container">
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
                                        src="images/resources/meet-teachers-v1-img4.png" alt="true"/>
                                </div>
                                <div className="meet-teachers-one__single-content">
                                    <div className="meet-teachers-one__single-middle-content">
                                        <div className="title">
                                            <h4>
                                                <a href="#nolink">Jessica Brown</a>
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
                                        src="images/resources/meet-teachers-v1-img5.png" alt="true"/>
                                </div>
                                <div className="meet-teachers-one__single-content">
                                    <div className="meet-teachers-one__single-middle-content">
                                        <div className="title">
                                            <h4>
                                                <a href="#nolink">Mike Hardson</a>
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
                                        src="images/resources/meet-teachers-v1-img6.png" alt="true"/>
                                </div>
                                <div className="meet-teachers-one__single-content">
                                    <div className="meet-teachers-one__single-middle-content">
                                        <div className="title">
                                            <h4>
                                                <a href="#nolink">Christine Eve</a>
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
            {/*Start Registration Two*/}
            <section className="registration-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="registration-two__wrapper">
                                <div className="shape1 zoom-fade">
                                    <img
                                        className="lazy"
                                        src="images/shapes/thm-shape2.png" alt="true"/>
                                </div>
                                <div
                                    className="shape2 wow slideInRight"
                                    data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <img
                                        className="lazy"
                                        src="images/shapes/thm-shape3.png" alt="true"/>
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
        </>
    )
}
