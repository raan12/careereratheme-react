import React from 'react';
import { useLocation } from "../../../node_modules/react-router-dom";

// owl carousel
import OwlCarousel from '../../../node_modules/react-owl-carousel2';
import '../../../node_modules/react-owl-carousel2/src/owl.carousel.css';
import '../../../node_modules/react-owl-carousel2/src/owl.theme.default.css';

export default function TestimonialsWhatTheySaying() {
    
    // page url get
    const location = useLocation();


    // whatTheysayingOptions
    const whatTheysayingOptions = {
        loop: !0,
        margin: 30,
        nav: false,
        smartSpeed: 500,
        autoplay: true,
        dots: true,
        autoplayTimeout: 1e4,
        navText: ['<span className="icon-right-arrow left"></span>', '<span className="icon-right-arrow"></span>'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            740: {
                items: 2
            },
            940: {
                items: location.pathname === "/" ? 3 : 2
            }
        }
    };


    return (
        <>
            <section className="testimonials-two">
                <div className="testimonials-two__pattern">
                    <img
                        className="lazy"
                        src="images/pattern/testimonials-two-left-pattern.png"
                        alt="no-image"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        {/*Start Testimonials Two Left*/}
                        <div className="col-xl-4 col-12">
                            <div className="testimonials-two__left">
                                <div className="testimonials-two__left-bg" />
                                <div className="section-title">
                                    <span className="section-title__tagline">Our Testimonials</span>
                                    <h2 className="section-title__title">
                                        What They’re <br />
                                        Saying?
                                    </h2>
                                </div>
                                <p className="testimonials-two__left-text">
                                    There are many variations of passages of lore ipsum available but
                                    the majority have suffered.
                                </p>
                            </div>
                        </div>
                        {/*End Testimonials Two Left*/}

                        {/*Start Testimonials Two Right*/}
                        <div className={"col-12"+ (location.pathname === "/" ? " col-xl-12" : " col-xl-8")}>
                            <div className="testimonials-two__right">
                                <OwlCarousel className="testimonials-two__carousel owl-carousel owl-theme owl-dot-type1 style2" options={whatTheysayingOptions}>
                                    <div className="item">
                                        {/*Start Single Testimonials One */}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__single-inner">
                                                <h4 className="testimonials-one__single-title">
                                                    Amazing Courses
                                                </h4>
                                                <p className="testimonials-one__single-text">
                                                    Lorem ipsum is simply free text dolor sit amet, consectetur
                                                    notted adipisicing elit sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                                <div className="testimonials-one__single-client-info">
                                                    <div className="testimonials-one__single-client-info-img">
                                                        <img
                                                            className="lazy"
                                                            src="images/testimonial/testimonials-v1-client-info-img1.png"
                                                            alt="true"/>
                                                    </div>
                                                    <div className="testimonials-one__single-client-info-text">
                                                        <h5>Kevin Martin</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Testimonials One */}
                                    </div>
                                    {/* /.item */}
                                    <div className="item">
                                        {/*Start Single Testimonials One */}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__single-inner">
                                                <h4 className="testimonials-one__single-title">
                                                    Amazing Courses
                                                </h4>
                                                <p className="testimonials-one__single-text">
                                                    Lorem ipsum is simply free text dolor sit amet, consectetur
                                                    notted adipisicing elit sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                                <div className="testimonials-one__single-client-info">
                                                    <div className="testimonials-one__single-client-info-img">
                                                        <img
                                                            className="lazy"
                                                            src="images/testimonial/testimonials-v1-client-info-img2.png"
                                                            alt="true"/>
                                                    </div>
                                                    <div className="testimonials-one__single-client-info-text">
                                                        <h5>Christine Eve</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Testimonials One */}
                                    </div>
                                    {/* /.item */}
                                    <div className="item">
                                        {/*Start Single Testimonials One */}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__single-inner">
                                                <h4 className="testimonials-one__single-title">
                                                    Christine Eve
                                                </h4>
                                                <p className="testimonials-one__single-text">
                                                    Lorem ipsum is simply free text dolor sit amet, consectetur
                                                    notted adipisicing elit sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                                <div className="testimonials-one__single-client-info">
                                                    <div className="testimonials-one__single-client-info-img">
                                                        <img
                                                            className="lazy"
                                                            src="images/testimonial/testimonials-v1-client-info-img3.png"
                                                            alt="true"/>
                                                    </div>
                                                    <div className="testimonials-one__single-client-info-text">
                                                        <h5>David Cooper</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Testimonials One */}
                                    </div>
                                    {/* /.item */}
                                    <div className="item">
                                        {/*Start Single Testimonials One */}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__single-inner">
                                                <h4 className="testimonials-one__single-title">
                                                    Amazing Courses
                                                </h4>
                                                <p className="testimonials-one__single-text">
                                                    Lorem ipsum is simply free text dolor sit amet, consectetur
                                                    notted adipisicing elit sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                                <div className="testimonials-one__single-client-info">
                                                    <div className="testimonials-one__single-client-info-img">
                                                        <img
                                                            className="lazy"
                                                            src="images/testimonial/testimonials-v1-client-info-img1.png"
                                                            alt="true"/>
                                                    </div>
                                                    <div className="testimonials-one__single-client-info-text">
                                                        <h5>Kevin Martin</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Testimonials One */}
                                    </div>
                                    {/* /.item */}
                                    <div className="item">
                                        {/*Start Single Testimonials One */}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__single-inner">
                                                <h4 className="testimonials-one__single-title">
                                                    Amazing Courses
                                                </h4>
                                                <p className="testimonials-one__single-text">
                                                    Lorem ipsum is simply free text dolor sit amet, consectetur
                                                    notted adipisicing elit sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                                <div className="testimonials-one__single-client-info">
                                                    <div className="testimonials-one__single-client-info-img">
                                                        <img
                                                            className="lazy"
                                                            src="images/testimonial/testimonials-v1-client-info-img2.png"
                                                            alt="true"/>
                                                    </div>
                                                    <div className="testimonials-one__single-client-info-text">
                                                        <h5>Christine Eve</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Testimonials One */}
                                    </div>
                                    {/* /.item */}
                                    <div className="item">
                                        {/*Start Single Testimonials One */}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__single-inner">
                                                <h4 className="testimonials-one__single-title">
                                                    Amazing Courses
                                                </h4>
                                                <p className="testimonials-one__single-text">
                                                    Lorem ipsum is simply free text dolor sit amet, consectetur
                                                    notted adipisicing elit sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                                <div className="testimonials-one__single-client-info">
                                                    <div className="testimonials-one__single-client-info-img">
                                                        <img
                                                            className="lazy"
                                                            src="images/testimonial/testimonials-v1-client-info-img3.png"
                                                            alt="true"/>
                                                    </div>
                                                    <div className="testimonials-one__single-client-info-text">
                                                        <h5>David Cooper</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Testimonials One */}
                                    </div>
                                    {/* /.item */}
                                    <div className="item">
                                        {/*Start Single Testimonials One */}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__single-inner">
                                                <h4 className="testimonials-one__single-title">
                                                    Amazing Courses
                                                </h4>
                                                <p className="testimonials-one__single-text">
                                                    Lorem ipsum is simply free text dolor sit amet, consectetur
                                                    notted adipisicing elit sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                                <div className="testimonials-one__single-client-info">
                                                    <div className="testimonials-one__single-client-info-img">
                                                        <img
                                                            className="lazy"
                                                            src="images/testimonial/testimonials-v1-client-info-img1.png"
                                                            alt="true"/>
                                                    </div>
                                                    <div className="testimonials-one__single-client-info-text">
                                                        <h5>Kevin Martin</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Testimonials One */}
                                    </div>
                                    {/* /.item */}
                                    <div className="item">
                                        {/*Start Single Testimonials One */}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__single-inner">
                                                <h4 className="testimonials-one__single-title">
                                                    Amazing Courses
                                                </h4>
                                                <p className="testimonials-one__single-text">
                                                    Lorem ipsum is simply free text dolor sit amet, consectetur
                                                    notted adipisicing elit sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                                <div className="testimonials-one__single-client-info">
                                                    <div className="testimonials-one__single-client-info-img">
                                                        <img
                                                            className="lazy"
                                                            src="images/testimonial/testimonials-v1-client-info-img2.png"
                                                            alt="true"/>
                                                    </div>
                                                    <div className="testimonials-one__single-client-info-text">
                                                        <h5>Christine Eve</h5>
                                                        <p>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Testimonials One */}
                                    </div>
                                    {/* /.item */}
                                </OwlCarousel>
                            </div>
                        </div>
                        {/*End Testimonials Two Right*/}
                    </div>
                </div>
            </section>
        </>
    )
}
