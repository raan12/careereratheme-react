import React, { useState, useEffect,Fragment, useContext } from 'react';
import { Link, useLocation, BrowserRouter as Router, Route, Routes } from "../../../node_modules/react-router-dom";
import MenuInnerNavChild from './MenuInnerNavChild'; 
 
export default function Header(props) {


    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const stickY_header = document.querySelector('.stricked-menu');
        const scrollTop = window.scrollY;
        scrollTop >= 144 ? stickY_header.classList.add('stricky-fixed') : stickY_header.classList.remove('stricky-fixed');
    };

    // mobilenavTogg
    const [onOpenNavtoggler, setOpenNavtoggler] = useState(false)
    function mobilenavTogg() {
        setOpenNavtoggler((onOpenNavtoggler) => !onOpenNavtoggler);
    }

    // mobilenavTogg close
    let filterItem = document.querySelectorAll(".main-menu__list li:not(.dropdown) a");
    filterItem.forEach((item) => {
        item.addEventListener('click', function (e) {
            setOpenNavtoggler(false);
        });
    });

    // onOpenNavSearch
    const [onOpenNavSearch, setonOpenNavSearch] = useState(false);
    function searchToggler() {
        setonOpenNavSearch((onOpenNavSearch) => !onOpenNavSearch);
    }

    // page url get
    const location = useLocation();

    // dynemic page title change
    const [statetitle, settitle] = useState(document.title);
    if (location.pathname == "/") {
        document.title = statetitle;
    }
    if (location.pathname != "/") {
        document.title = location.pathname.replace("/", "").replace("-", " ").replace(/\b(\w)/g, s => s.toUpperCase()) + ' by Careerera'
    }
    useEffect(() => {
        settitle('Leading Online Certification Training Course Provider | Careerera');
    }, []);

 


    return (
        <>


            <header className={"main-header clearfix " + (location.pathname === "/" ? 'main-header--two' : 'main-header--one')}>
                <div className="main-header--two__top clearfix">
                    <div className="container">
                        <div className="main-header--two__top-inner clearfix">
                            <div className="main-header--two__top-left">

                                <ul className="main-header--two__top-contact-info list-unstyled">
                                    <li className="main-header--two__top-contact-info-single">
                                        <div className="icon">
                                            <span className="icon-chat" />
                                        </div>
                                        <div className="text">
                                            <p>
                                                <a href="tel:123456789">92 888 000 2222</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="main-header--two__top-contact-info-single">
                                        <div className="icon">
                                            <span className="icon-message-1" />
                                        </div>
                                        <div className="text">
                                            <p>
                                                <a href="mailto:info@templatepath.com">
                                                    needhelp@company.com
                                                </a>
                                            </p>
                                        </div>
                                    </li>
                                  
                                </ul>
                            </div>
                            <div className="main-header--two__top-right clearfix">
                                <div className="main-header--two__top-right-login-register">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#nolink">Login</a>
                                        </li>
                                        <li>
                                            <a href="#nolink">Register</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="main-header--two__top-right-social-link">
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
                                                <i className="fab fa-pinterest-p" />
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
                <div className="main-header-two__bottom">
                    <div className="container">
                        <div className="main-header-two__bottom-inner clearfix">
                            <nav className="main-menu main-menu--1">
                                <div className="main-menu__inner">
                                    <div className="left">
                                        <div className="logo-box1">
                                            <Link to="/">
                                                {location.pathname === "/" ?
                                                    <img src={props.imageGlobalpath + 'resources/' + "logo-2.png"} alt="true" /> :
                                                    <img src={props.imageGlobalpath + 'resources/' + "logo-1.png"} alt="true" />}

                                            </Link>
                                        </div>
                                    </div>
                                    <a href="#nolink" className="mobile-nav__toggler" onClick={mobilenavTogg}>
                                        <i className="fa fa-bars" />
                                    </a>
                                    <div className="middle">
                                       <MenuInnerNavChild />
                                    </div>
                                    <div className="right">
                                        <div className="main-menu__right">
                                            <div className="main-menu__right-cart-search">
                                                <div className="main-menu__right-cart-box">
                                                    <a href="#nolink">
                                                        <span className="icon-shopping-cart" />
                                                    </a>
                                                </div>
                                                <div className="main-menu__right-search-box">
                                                    <a href="#nolink" className="thm-btn search-toggler" onClick={searchToggler}>
                                                        Search
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className={"stricky-header stricked-menu main-menu" + (location.pathname === "/" ? ' stricky-header--two' : '')}>
                <div className="sticky-header__content">
                    <div className="main-menu__inner">
                        <div className="left">
                            <div className="logo-box1">
                                <Link to="/">
                                    {location.pathname === "/" ?
                                        <img src={props.imageGlobalpath + 'resources/' + "logo-2.png"} alt="true" /> :
                                        <img src={props.imageGlobalpath + 'resources/' + "logo-1.png"} alt="true" />}
                                </Link>
                            </div>
                        </div>
                        <a href="#nolink" className="mobile-nav__toggler" onClick={mobilenavTogg}>
                            <i className="fa fa-bars" />
                        </a>
                        <div className="middle">
                            <MenuInnerNavChild />
                        </div>
                        <div className="right">
                            <div className="main-menu__right">
                                <div className="main-menu__right-cart-search">
                                    <div className="main-menu__right-cart-box">
                                        <a href="#nolink">
                                            <span className="icon-shopping-cart" />
                                        </a>
                                    </div>
                                    <div className="main-menu__right-search-box">
                                        <a href="#nolink" className="thm-btn search-toggler" onClick={searchToggler}>
                                            Search
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile-nav__wrapper */}
            <div className={"mobile-nav__wrapper" + (onOpenNavtoggler ? " expanded" : "")}>
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={mobilenavTogg}></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={mobilenavTogg}><i className="fa fa-times"></i></span>

                    <div className="logo-box" onClick={mobilenavTogg}>
                        <Link to="/">
                            <img src={props.imageGlobalpath + 'resources/' + "logo-2.png"} alt="true" />
                        </Link>
                    </div>
                    <div className="mobile-nav__container">
                        <MenuInnerNavChild imageGlobalpath={props.imageGlobalpath} />
                    </div>
                    <ul className="mobile-nav__contact list-unstyled" onClick={mobilenavTogg}>
                        <li>
                            <i className="icon-phone-call"></i>
                            <a href="mailto:needhelp@packageName__.com">needhelp@zilom.com</a>
                        </li>
                        <li>
                            <i className="icon-letter"></i>
                            <a href="tel:666-888-0000">666 888 0000</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__top" onClick={mobilenavTogg}>
                        <div className="mobile-nav__social">
                            <a href="#nolink" className="fab fa-twitter"></a>
                            <a href="#nolink" className="fab fa-facebook-square"></a>
                            <a href="#nolink" className="fab fa-pinterest-p"></a>
                            <a href="#nolink" className="fab fa-instagram"></a>
                        </div>
                    </div>
                </div>
            </div>



            {/* search-popup */}
            <div className={"search-popup" + (onOpenNavSearch ? " active" : "")}>
                <div className="search-popup__overlay search-toggler" onClick={searchToggler}></div>
                <div className="search-popup__content">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn2">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
            </div>




        </>
    )
}

