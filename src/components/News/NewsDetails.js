import React from 'react';
import { NavLink } from "../../../node_modules/react-router-dom";


export default function NewsDetails() {
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
            {/*News Details Start*/}
            <section className="news-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="news-details__left">
                                <div className="blog-one__single style2">
                                    <div className="blog-one__single-img">
                                        <img
                                            className="lazy"
                                            src="images/blog/news-details-img1.jpg" alt="true"/>
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
                                            Helping Answers Stand out in Discussions
                                        </h2>
                                    </div>
                                </div>
                                <div className="news-details__text1">
                                    <p>
                                        Tliq is notm hendr erit a augue insu image pellen tes que id
                                        erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing ullam blandit hendrerit faucibus suspendisse. There
                                        are many variations of passages of Lorem Ipsum available, but
                                        the majority have suffered alteration in some form, by injected
                                        humour, or randomised words which don't look even slightly
                                        believable. If you are going to use a passage of Lorem Ipsum,
                                        you need to be sure there isn't anything embarrassing hidden in
                                        the middle of text.{" "}
                                    </p>
                                </div>
                                <div className="news-details__text2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was
                                        popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of
                                        Lorem Ipsum ley of type and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                                <div className="news-details__text3">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was
                                        popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including version.
                                    </p>
                                </div>
                                {/*Start News Details Bottom */}
                                <div className="news-details__bottom">
                                    <p className="news-details__tags">
                                        <span>Tags</span>
                                        <a href="#nolink">Education</a>
                                        <a href="#nolink">Courses</a>
                                    </p>
                                    <div className="news-details__social-list">
                                        <a href="#nolink">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#nolink" className="clr-fb">
                                            <i className="fab fa-facebook" />
                                        </a>
                                        <a href="#nolink" className="clr-dri">
                                            <i className="fab fa-dribbble" />
                                        </a>
                                        <a href="#nolink" className="clr-ins">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                                {/*End News Details Bottom */}
                                {/*Start Author One */}
                                <div className="author-one">
                                    <div className="author-one__image">
                                        <img
                                            className="lazy"
                                            src="images/blog/news-details-author.jpg" alt="true"/>
                                    </div>
                                    <div className="author-one__content">
                                        <h3>Kevin Martin</h3>
                                        <p>
                                            Cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs
                                            condmentum lightly believable. If you are going to use a of
                                            you need to be sure there.
                                        </p>
                                    </div>
                                </div>
                                {/*End Author One */}
                                {/*Start Comment One */}
                                <div className="comment-one">
                                    <h3 className="comment-one__title">2 Comments</h3>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img
                                                className="lazy"
                                                src="images/blog/comment-img1.png" alt="true" />
                                        </div>
                                        <div className="comment-one__content">
                                            <div className="comment-one__content-top">
                                                <div className="comment-one__content-text">
                                                    <h3>
                                                        David Marks<span>3 hours ago</span>
                                                    </h3>
                                                </div>
                                                <div className="comment-one__content-btn">
                                                    <a href="#nolink" className="thm-btn">
                                                        Reply
                                                    </a>
                                                </div>
                                            </div>
                                            <p>
                                                Cursus massa at urnaaculis estie. Sed aliquamellus vitae
                                                ultrs <br />
                                                condmentum lightly believable. If you are going to use a of{" "}
                                                <br /> you need to be sure there.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img
                                                className="lazy"
                                                src="images/blog/comment-img2.png" alt="true" />
                                        </div>
                                        <div className="comment-one__content">
                                            <div className="comment-one__content-top">
                                                <div className="comment-one__content-text">
                                                    <h3>
                                                        David Marks<span>3 hours ago</span>
                                                    </h3>
                                                </div>
                                                <div className="comment-one__content-btn">
                                                    <a href="#nolink" className="thm-btn">
                                                        Reply
                                                    </a>
                                                </div>
                                            </div>
                                            <p>
                                                Cursus massa at urnaaculis estie. Sed aliquamellus vitae
                                                ultrs <br />
                                                condmentum lightly believable. If you are going to use a of{" "}
                                                <br />
                                                you need to be sure there.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*End Comment One */}
                                {/*Start Comment Form */}
                                <div className="comment-form">
                                    <h3 className="comment-form__title">Leave a Comment</h3>
                                    <form
                                        action="https://layerdrops.com/zilom/inc/sendemail.php"
                                        className="comment-one__form contact-form-validated"
                                        noValidate="novalidate"
                                    >
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Your name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
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
                                            <div className="col-xl-12">
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
                                {/*End Comment Form */}
                            </div>
                        </div>
                        {/*Start Sidebar*/}
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">
                                <div
                                    className="sidebar__single sidebar__search wow fadeInUp animated animated animated"
                                    data-wow-delay="0.1s"
                                    data-wow-duration="1200m">
                                    <form action="#" className="sidebar__search-form">
                                        <input type="search" placeholder="Search" />
                                        <button type="submit">
                                            <i className="fa fa-search" aria-hidden="true" />
                                        </button>
                                    </form>
                                </div>
                                <div
                                    className="sidebar__single sidebar__post wow fadeInUp animated"
                                    data-wow-delay="0.1s">
                                    <h3 className="sidebar__title">Recent Posts</h3>
                                    <ul className="sidebar__post-list list-unstyled">
                                        <li>
                                            <div className="sidebar__post-image">
                                                <img
                                                    className="lazy"
                                                    src="images/blog/recent-posts-img1.png" alt="true"/>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <p>
                                                            <a href="#nolink">
                                                                <i className="far fa-user-circle" />
                                                                Admin
                                                            </a>
                                                        </p>
                                                        <h3>
                                                            <a href="news-details.html">
                                                                Learn how access to new courses
                                                            </a>
                                                        </h3>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__post-image">
                                                <img
                                                    className="lazy"
                                                    src="images/blog/recent-posts-img2.png" alt="true"/>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <p>
                                                            <a href="#nolink">
                                                                <i className="far fa-user-circle" />
                                                                Admin
                                                            </a>
                                                        </p>
                                                        <h3>
                                                            <a href="news-details.html">
                                                                Learn how access to new courses
                                                            </a>
                                                        </h3>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__post-image">
                                                <img
                                                    className="lazy"
                                                    src="images/blog/recent-posts-img3.png" alt="true"/>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <p>
                                                            <a href="#nolink">
                                                                <i className="far fa-user-circle" />
                                                                Admin
                                                            </a>
                                                        </p>
                                                        <h3>
                                                            <a href="news-details.html">
                                                                Learn how access to new courses
                                                            </a>
                                                        </h3>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="sidebar__single sidebar__category wow fadeInUp animated"
                                    data-wow-delay="0.3s">
                                    <h3 className="sidebar__title">All Categories</h3>
                                    <ul className="sidebar__category-list list-unstyled">
                                        <li>
                                            <a href="#nolink">
                                                <i className="far fa-arrow-alt-circle-right" />
                                                Programing
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a href="#nolink">
                                                <i className="far fa-arrow-alt-circle-right" />
                                                Teaching &amp; Academics
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#nolink">
                                                <i className="far fa-arrow-alt-circle-right" />
                                                Health &amp; Fitness
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#nolink">
                                                <i className="far fa-arrow-alt-circle-right" />
                                                Business
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#nolink">
                                                <i className="far fa-arrow-alt-circle-right" />
                                                Art &amp; Design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#nolink">
                                                <i className="far fa-arrow-alt-circle-right" />
                                                Education
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="sidebar__single sidebar__tags wow fadeInUp animated"
                                    data-wow-delay="0.5s">
                                    <h3 className="sidebar__title">Tags</h3>
                                    <ul className="sidebar__tags-list list-unstyled">
                                        <li>
                                            <a href="#nolink">Education</a>
                                        </li>
                                        <li>
                                            <a href="#nolink">Programing</a>
                                        </li>
                                        <li>
                                            <a href="#nolink">Courses</a>
                                        </li>
                                        <li>
                                            <a href="#nolink">Academics</a>
                                        </li>
                                        <li>
                                            <a href="#nolink">Art</a>
                                        </li>
                                        <li>
                                            <a href="#nolink">Teachings</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Sidebar*/}
                    </div>
                </div>
            </section>
            {/*News Details End*/}
        </>
    )
}
