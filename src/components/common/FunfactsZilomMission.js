import React from 'react';
import {useLocation } from "react-router-dom";

export default function FunfactsZilomMission() {

    // page url get
    const location = useLocation();

    return (
        <>
            <section
                className={"counter-one jarallax" + (location.pathname === "/" ? "" : " counter-one--about")}
                data-jarallax
                data-speed="0.2"
                data-imgposition="50% 0%"
                style={{
                    backgroundImage: "url(images/backgrounds/Counters-v1-bg.jpg)"
                }}>
                <div className="container">
                    <div className="row">
                        {/*Start Counter One Left*/}
                        <div className="col-xl-5 col-lg-5">
                            <div className="counter-one__left">
                                <div className="section-title">
                                    <span className="section-title__tagline">Fun Facts</span>
                                    <h2 className="section-title__title">
                                        Zilom Mission is to <br />
                                        Polish your skill
                                    </h2>
                                </div>
                                <p className="counter-one__left-text">
                                    There are many variations of passages of lore ipsum available but
                                    the majority have suffered.
                                </p>
                            </div>
                        </div>
                        {/*End Counter One Left*/}
                        {/*Start Counter One Right*/}
                        <div className="col-xl-7 col-lg-7">
                            <div className="counter-one__right">
                                <ul className="counter-one__right-box list-unstyled">
                                    {/*Start Counter One Right Single*/}
                                    <li
                                        className="counter-one__right-single wow slideInUp animated"
                                        data-wow-delay="0.1s"
                                        data-wow-duration="1500ms">
                                        <div className="counter-one__right-single-icon">
                                            <span className="icon-teacher" />
                                        </div>
                                        <h3 className="odometer">
                                            6800
                                        </h3>
                                        <p className="counter-one__right-text">Pro Teachers</p>
                                    </li>
                                    {/*End Counter One Right Single*/}
                                    {/*Start Counter One Right Single*/}
                                    <li
                                        className="counter-one__right-single wow slideInUp animated"
                                        data-wow-delay="0.3s"
                                        data-wow-duration="1500ms">
                                        <div className="counter-one__right-single-icon">
                                            <span className="icon-online-course" />
                                        </div>
                                        <h3 className="odometer">
                                            9800
                                        </h3>
                                        <p className="counter-one__right-text">Skill Courses</p>
                                    </li>
                                    {/*End Counter One Right Single*/}
                                    {/*Start Counter One Right Single*/}
                                    <li
                                        className="counter-one__right-single wow slideInUp animated"
                                        data-wow-delay="0.5s"
                                        data-wow-duration="1500ms">
                                        <div className="counter-one__right-single-icon">
                                            <span className="icon-student" />
                                        </div>
                                        <h3 className="odometer">
                                            7700
                                        </h3>
                                        <p className="counter-one__right-text">Students Enrolled</p>
                                    </li>
                                    {/*End Counter One Right Single*/}
                                </ul>
                            </div>
                        </div>
                        {/*End Counter One Right*/}
                    </div>
                </div>
            </section>
        </>
    )
}
