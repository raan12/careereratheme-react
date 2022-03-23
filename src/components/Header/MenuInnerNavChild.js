import React, { useState, useEffect,createContext, useContext  } from 'react';
import { NavLink } from "../../../node_modules/react-router-dom";
 
export default function MenuInnerNavChild(props) {
 
    // setOpenMenu
    function setOpenMenu(event){
         event.target.classList.toggle("expanded");
    }

    // check Desktop screen
    const [widthDevice, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isIpad = widthDevice <= 1199;

    return (
        <>

 
            <ul className="main-menu__list">
                <li className="dropdown">
                    <a href="#nolink" onClick={(event) => { if(isIpad){setOpenMenu(event)} }}>Header <button aria-label="dropdown toggler" className="d-inline-block d-xl-none"><i className="fa fa-angle-down"></i></button></a>
                    <ul>
                        <li>
                            <a href="index.html">Home One</a>
                        </li>
                        <li>
                            <a href="index-2.html">Home Two</a>
                        </li>
                        <li className="dropdown">
                            <a href="#nolink" onClick={(event) => { if(isIpad){setOpenMenu(event)} }}>Header Styles
                                <button aria-label="dropdown toggler" className="d-inline-block d-xl-none"><i className="fa fa-angle-down"></i></button>
                            </a>
                            <ul>
                                <li>
                                    <a href="index.html">Header One</a>
                                </li>
                                <li>
                                    <a href="index-2.html">Header Two</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/about" activeclassname="activecurrenturl">About</NavLink>
                </li>
                <li className="dropdown">
                    <a href="#nolink" onClick={(event) => { if(isIpad){setOpenMenu(event)} }}>Courses
                        <button aria-label="dropdown toggler" className="d-inline-block d-xl-none"><i className="fa fa-angle-down"></i></button>
                    </a>
                    <ul>
                        <li>
                            <NavLink to="/courses" activeclassname="activecurrenturl">Courses</NavLink>
                        </li>
                        <li>
                            <NavLink to="/course-details" activeclassname="activecurrenturl">Course Details</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#nolink" onClick={(event) => { if(isIpad){setOpenMenu(event)} }}>Teachers
                        <button aria-label="dropdown toggler" className="d-inline-block d-xl-none"><i className="fa fa-angle-down"></i></button>
                    </a>
                    <ul>
                        <li>
                            <NavLink to="/teachers" activeclassname="activecurrenturl">Teachers</NavLink>
                        </li>
                        <li>
                            <NavLink to="/become-teacher" activeclassname="activecurrenturl">Become Teacher</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#nolink" onClick={(event) => { if(isIpad){setOpenMenu(event)} }}>News
                        <button aria-label="dropdown toggler" className="d-inline-block d-xl-none"><i className="fa fa-angle-down"></i></button>
                    </a>
                    <ul>
                        <li>
                            <NavLink to="/news" activeclassname="activecurrenturl">News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/news-details" activeclassname="activecurrenturl">News Details</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/contact" activeclassname="activecurrenturl">Contact</NavLink>
                </li>
            </ul>
        </>
    )
}


