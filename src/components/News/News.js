import React from 'react';
import { NavLink } from "../../../node_modules/react-router-dom";


export default function News() {
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
                                    <h2>News</h2>
                                </div>
                                <div className="page-header__menu">
                                    <ul className="page-header__menu-list list-unstyled clearfix">
                                        <li>
                                            <NavLink to="/" activeclassname="activecurrenturl">Home</NavLink>
                                        </li>
                                        <li className="active">News</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            {/*Blog One Start*/}
            <section className="blog-one blog-one--blog">
                <div className="container">
                    <div className="row">
                        {/*Start Single Blog One*/}
                        <div
                            className="col-xl-4 col-lg-4 wow fadeInLeft"
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
                            className="col-xl-4 col-lg-4 wow fadeInLeft"
                            data-wow-delay="300ms"
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
                            className="col-xl-4 col-lg-4 wow fadeInLeft"
                            data-wow-delay="600ms"
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
                        {/*Start Single Blog One*/}
                        <div
                            className="col-xl-4 col-lg-4 wow fadeInLeft"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/blog/blog-v1-img4.jpg"
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
                            className="col-xl-4 col-lg-4 wow fadeInLeft"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/blog/blog-v1-img5.jpg"
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
                            className="col-xl-4 col-lg-4 wow fadeInLeft"
                            data-wow-delay="600ms"
                            data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img
                                        className="lazy"
                                        src="images/blog/blog-v1-img6.jpg"
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
        </>
    )
}
