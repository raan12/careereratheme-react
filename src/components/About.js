
import React from 'react';
import { NavLink } from "../../node_modules/react-router-dom";
import Whowillyoulearn from './common/Whowillyoulearn';
import FunfactsZilomMission from './common/FunfactsZilomMission';
import TestimonialsWhatTheySaying from './common/TestimonialsWhatTheySaying';

export default function Users() {

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
                                    <h2>About</h2>
                                </div>
                                <div className="page-header__menu">
                                    <ul className="page-header__menu-list list-unstyled clearfix">
                                        <li>
                                            <NavLink to="/" activeclassname="activecurrenturl">Home</NavLink>
                                        </li>
                                        <li className="active">about</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            {/*About Two Start*/}
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="about-two__single-img">
                                <img
                                    className="lazy"
                                    src="images/about/about-v2-img2.jpg"
                                    alt="true" />
                            </div>
                        </div>
                        <div
                            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms">
                            <div className="about-two__single-img">
                                <img
                                    className="lazy"
                                    src="images/about/about-v2-img1.jpg"
                                    alt="true" />
                            </div>
                        </div>
                    </div>
                    <div className="about-two__bottom-content">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                <div className="about-two__title-box">
                                    <div className="section-title">
                                        <span className="section-title__tagline">About Company</span>
                                        <h2 className="section-title__title">
                                            The Best Global <br />
                                            Experts
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="about-two__text-box">
                                    <p className="about-two__text-box-text">
                                        There are many variations of passages of lorem ipsum available,
                                        but the majority have suffered alteration in some form, by
                                        injected humour words which don't look even slightly believable.
                                        Lorem Ipsn gravida nibh vel velit auctor aliquetn auci elit
                                        cons.
                                    </p>
                                    <div className="about-two__text-box-btn">
                                        <a href="about.html" className="thm-btn">
                                            view all courses
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Two End*/}

            {/*Whowillyoulearn*/}
            <Whowillyoulearn />
            {/*Whowillyoulearn End*/}


            {/*Start Testimonials Two*/}
            <TestimonialsWhatTheySaying />
            {/*End Testimonials Two*/}

            {/*Counter One Start*/}
            <FunfactsZilomMission />
            {/*Counter One End*/}

            {/*Start Meet Teachers One*/}
            <section className="meet-teachers-one">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Skilled &amp; Qualified</span>
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
                                        src="images/resources/meet-teachers-v1-img4.png"
                                        alt="true"/>
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
                                        src="images/resources/meet-teachers-v1-img5.png"
                                        alt="true"/>
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
                                        src="images/resources/meet-teachers-v1-img6.png"
                                        alt="true"/>
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
            {/*Start Newsletter One*/}
            <section className="newsletter-one">
                <div className="container">
                    <div className="row">
                        {/*Start Newsletter One Left*/}
                        <div className="col-xl-6 col-lg-6">
                            <div className="newsletter-one__left">
                                <div className="section-title">
                                    <h2 className="section-title__title">
                                        Subscribe to Our <br />
                                        Newsletter to Get Daily <br />
                                        Content!
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/*End Newsletter One Left*/}
                        {/*Start Newsletter One Right*/}
                        <div className="col-xl-6 col-lg-6">
                            <div className="newsletter-one__right">
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
                                <div
                                    className="newsletter-form wow slideInDown"
                                    data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <form action="#">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Enter your email"
                                        />
                                        <button type="submit">
                                            <span className="icon-paper-plane" />
                                        </button>
                                    </form>
                                    <div className="newsletter-one__right-checkbox">
                                        <input
                                            type="checkbox"
                                            name="agree "
                                            id="agree"
                                            defaultChecked
                                        />
                                        <label htmlFor="agree">
                                            <span />I agree to all terms and policies of the company
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Newsletter One Right*/}
                    </div>
                </div>
            </section>
            {/*End Newsletter One*/}
        </>
    )
}
