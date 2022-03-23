import React from 'react';
import { Link,NavLink } from "../../node_modules/react-router-dom";

const Footer = props => {

     // scrollTopHtml
  function scrollTopHtml() {
    window.scrollTo(0, 0);
  }

    return (
        <>

            <footer className="footer-one w-100 float-start">
                <div className="footer-one__bg"
                    style={{ backgroundImage: "url(" + props.imageGlobalpath + 'backgrounds/' + "footer-v1-bg.jpg" + ")" }}></div>
                {/* /.footer-one__bg */}
                <div className="footer-one__top">
                    <div className="container">
                        <div className="row">
                            {/*Start Footer Widget Column*/}
                            <div
                                className="col-xl-2 col-lg-4 col-md-4 wow animated fadeInUp"
                                data-wow-delay="0.1s">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__about-logo">
                                        <Link to="/">
                                            <img
                                                className="lazy"
                                                src={props.imageGlobalpath + 'resources/' + "footer-logo.png"}
                                                alt="no-mg"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Footer Widget Column*/}
                            {/*Start Footer Widget Column*/}
                            <div
                                className="col-xl-2 col-lg-4 col-md-4 wow animated fadeInUp"
                                data-wow-delay="0.3s">
                                <div className="footer-widget__column footer-widget__courses">
                                    <h3 className="footer-widget__title">Courses</h3>
                                    <ul className="footer-widget__courses-list list-unstyled">
                                        <li>
                                            <a href="#nolink">UI/UX Design</a>
                                        </li>
                                        <li>
                                            <a href="#nolink">WordPress Development</a>
                                        </li>
                                        <li>
                                            <a href="#nolink">Business Strategy</a>
                                        </li>
                                        <li>
                                            <a href="#nolink">Software Development</a>
                                        </li>
                                        <li>
                                            <a href="#nolink">Business English</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End Footer Widget Column*/}
                            {/*Start Footer Widget Column*/}
                            <div
                                className="col-xl-2 col-lg-4 col-md-4 wow animated fadeInUp"
                                data-wow-delay="0.5s">
                                <div className="footer-widget__column footer-widget__links">
                                    <h3 className="footer-widget__title">Links</h3>
                                    <ul className="footer-widget__links-list list-unstyled">
                                        <li onClick={scrollTopHtml}>
                                            <NavLink to="/about" activeclassname="activecurrenturl">About Us</NavLink>
                                        </li>
                                        <li onClick={scrollTopHtml}>
                                            <a href="#nolink">Overview</a>
                                        </li>
                                        <li onClick={scrollTopHtml}>
                                            <NavLink to="/teachers" activeclassname="activecurrenturl">Teachers</NavLink>
                                        </li>
                                        <li onClick={scrollTopHtml}>
                                            <a href="#nolink">Join Us</a>
                                        </li>
                                        <li onClick={scrollTopHtml}>
                                            <NavLink to="/news" activeclassname="activecurrenturl">Our News</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End Footer Widget Column*/}
                            {/*Start Footer Widget Column*/}
                            <div
                                className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                                data-wow-delay="0.7s">
                                <div className="footer-widget__column footer-widget__contact">
                                    <h3 className="footer-widget__title">Contact</h3>
                                    <p className="text">88 broklyn street, New York USA</p>
                                    <p>
                                        <a href="mailto:info@templatepath.com">needhelp@company.com</a>
                                    </p>
                                    <p className="phone">
                                        <a href="tel:123456789">92 888 666 0000</a>
                                    </p>
                                </div>
                            </div>
                            {/*End Footer Widget Column*/}
                            {/*Start Footer Widget Column*/}
                            <div
                                className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                                data-wow-delay="0.9s">
                                <div className="footer-widget__column footer-widget__social-links">
                                    <ul className="footer-widget__social-links-list list-unstyled clearfix">
                                        <li>
                                            <a href="#nolink">
                                                <i className="fab fa-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#nolink">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#nolink">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#nolink">
                                                <i className="fab fa-dribbble" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End Footer Widget Column*/}
                        </div>
                    </div>
                </div>
                {/*Start Footer One Bottom*/}
                <div className="footer-one__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-one__bottom-inner">
                                    <div className="footer-one__bottom-text text-center">
                                        <p>© Copyright 2021 by Layerdrops.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;








