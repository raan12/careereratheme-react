import React from 'react';
// Swiper
import Swiper from '../../../node_modules/react-id-swiper';
import '../../../node_modules/swiper/swiper-bundle.css';

export default function Whowillyoulearn() {

    // configWhoWilllearn
    const configWhoWilllearn = {
        spaceBetween: 100,
        slidesPerView: 5,
        autoplay: { "delay": 5000 },
        breakpoints: {
            0: {
                spaceBetween: 30,
                slidesPerView: 2
            },
            375: {
                spaceBetween: 30,
                slidesPerView: 2
            },
            575: {
                spaceBetween: 30,
                slidesPerView: 3
            },
            767: {
                spaceBetween: 50,
                slidesPerView: 4
            },
            991: {
                spaceBetween: 50,
                slidesPerView: 5
            },
            1199: {
                spaceBetween: 100,
                slidesPerView: 5
            }
        }
    }

    return (
        <section className="company-logos-one company-logos-one--two">
            <div className="container">
                <div className="company-logos-one__title text-center">
                    <h6>Who Will You Learn With?</h6>
                </div>
                <div className="position-relative">
                    <Swiper {...configWhoWilllearn} className="thm-swiper__slider swiper-container">
                        <div><img alt="true" className="lazy" src="images/resources/Company-Logos-v1-logo1.png"/></div>
                        <div><img alt="true" className="lazy" src="images/resources/Company-Logos-v1-logo1.png"/></div>
                        <div><img alt="true" className="lazy" src="images/resources/Company-Logos-v1-logo1.png"/></div>
                        <div><img alt="true" className="lazy" src="images/resources/Company-Logos-v1-logo1.png"/></div>
                        <div><img alt="true" className="lazy" src="images/resources/Company-Logos-v1-logo1.png"/></div>
                        <div><img alt="true" className="lazy" src="images/resources/Company-Logos-v1-logo1.png"/></div>
                        <div><img alt="true" className="lazy" src="images/resources/Company-Logos-v1-logo1.png"/></div>
                        <div><img alt="true" className="lazy" src="images/resources/Company-Logos-v1-logo1.png"/></div>
                        <div><img alt="true" className="lazy" src="images/resources/Company-Logos-v1-logo1.png"/></div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
