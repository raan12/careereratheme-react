import React from 'react';
import { NavLink } from "../../node_modules/react-router-dom";


export default function Contact() {
    return (
        <>
            {/*Page Header Start*/}
            <section
                className="page-header clearfix"
                style={{
                    backgroundImage: "url(images/backgrounds/page-header-bg.jpg)"
                }} >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-header__wrapper clearfix">
                                <div className="page-header__title">
                                    <h2>Contact</h2>
                                </div>
                                <div className="page-header__menu">
                                    <ul className="page-header__menu-list list-unstyled clearfix">
                                        <li>
                                            <NavLink to="/" activeclassname="activecurrenturl">Home</NavLink>
                                        </li>
                                        <li className="active">Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}

            {/*Start Contact Details One*/}
            <section className="contact-details-one">
                <div className="container">
                    <div className="row">
                        {/*Start Single Contact Details One*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-details-one__single">
                                <div className="contact-details-one__single-icon">
                                    <span className="icon-chat" />
                                </div>
                                <div className="contact-details-one__single-text">
                                    <h4>
                                        <a href="tel:123456789">92 666 888 0000</a>
                                    </h4>
                                    <p>Call Anytime</p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Contact Details One*/}
                        {/*Start Single Contact Details One*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-details-one__single">
                                <div className="contact-details-one__single-icon">
                                    <span className="icon-message-1" />
                                </div>
                                <div className="contact-details-one__single-text">
                                    <h4>
                                        <a href="mailto:info@templatepath.com">info@company.com</a>
                                    </h4>
                                    <p>Send Email</p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Contact Details One*/}
                        {/*Start Single Contact Details One*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-details-one__single">
                                <div className="contact-details-one__single-icon">
                                    <span className="icon-address" />
                                </div>
                                <div className="contact-details-one__single-text">
                                    <h4>88 broklyn street, USA</h4>
                                    <p>Call Anytime</p>
                                </div>
                            </div>
                        </div>
                        {/*End Single Contact Details One*/}
                    </div>
                </div>
            </section>
            {/*End Contact Details One*/}

            {/*Contact Page Start*/}
            <section className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-page__left">
                                <div className="section-title">
                                    <span className="section-title__tagline">Send a Message</span>
                                    <h2 className="section-title__title">
                                        We Always <br />
                                        Ready to Hear <br />
                                        From You
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="contact-page__right">
                                <form action="#"
                                    className="comment-one__form contact-form-validated"
                                    noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Your name" name="name" />
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
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="comment-form__input-box">
                                                <input
                                                    type="text"
                                                    placeholder="Phone number"
                                                    name="phone"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Subject" name="Subject" />
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
                                            <button type="submit" className="thm-btn comment-form__btn">
                                                Submit Comment
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Contact Page End*/}

            {/*Contact Page Google Map Start*/}
            <section className="contact-page-google-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d6603.552070824053!2d-118.7972232!3d34.1520716!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2zQ29zdGNvIFdob2xlc2FsZSA1NzAwIExpbmRlcm8gQ2FueW9uIFJkIFdlc3RsYWtlIFZpbGxhZ2UsIENBIDkxMzYyIOCmruCmvuCmsOCnjeCmleCmv-CmqCDgpq_gp4HgppXgp43gpqTgprDgpr7gprfgp43gpp_gp43gprA!3m2!1d34.1520716!2d-118.79722319999999!5e0!3m2!1sen!2sin!4v1638468774909!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="contact-page-google-map__one lazyload-iframe"/>
            </section>
            {/*Contact Page Google Map End*/}
        </>
    )
}
