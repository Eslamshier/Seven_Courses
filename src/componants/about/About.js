/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from 'react'
import './About.scss';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineExclamation} from 'react-icons/ai';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import { aboutExperience } from './Aboutjson';
import {partnersdetail} from '../home/tistemontalsJson';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import Aos from 'aos';

function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className='about'>
            {/* Start about Stor */}
            <div className='about-stor'>
                <Container>
                    <div className='col-lg-12 col-md-12'>
                        <h1 data-aos="fade-right">About our project</h1>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6' data-aos="fade-right">
                            <h4>Our story</h4>
                            <h1>Amattis nulla - ambco mattis nulla<br /> lorem ege dolor amet.</h1>
                            <p className='p-one'>
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere<br />
                                cubilia commodo tellus rhoncus congue. Etiam vitae felis eget lacus<br />
                                interdum feugiat. Suspendisse aliquam, vulputate magna.
                            </p>
                            <p className='p-two'>
                                Etiam vitae felis eget lacus interdum feugiat. Suspendisse aliquam odio<br />
                                ante, sit amet vulputate magna malesuada idraesent dapibus ultricies<br />
                                odio porta bibendum lorem. Ut consectetur, nunc vitae dictum rutrum.
                            </p>
                            <p className='p-three'>
                                Vivamus varius risus quam. Nam non odio quis est dignissim sodales<br />
                                sagittis interdum nibh, id pulvinar purus!
                            </p>
                            <div className='link-left'>
                                <NavLink to='/contact'>Contact us now <BsArrowRight /></NavLink>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='info-box'>
                                <div className='box-img-one'>
                                    <img data-aos="fade-left"
                                        src='https://the7.io/online-courses/wp-content/uploads/sites/70/elementor/thumbs/oc-011-pzctnfnslk8rjet8pky89qfxd7jccteke0k5ydb2o0.jpg' loading='lazy'
                                    ></img>
                                </div>
                                <div className='box-img-two'>
                                    <img data-aos="fade-right"
                                        src='https://the7.io/online-courses/wp-content/uploads/sites/70/2020/04/oc-014-1200x800.jpg'
                                        loading='lazy'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* End about Stor */}

            {/* Start about experience */}
            <div className='about-experience'>
                <Container>
                    <h4 data-aos="fade-right">Get unique learning experience <AiOutlineExclamation /></h4>
                    <h1 data-aos="fade-right">With our online courses you have access to <br /> unique educational tools.</h1>
                    <div className='row'>
                        {
                            aboutExperience.map(user => {
                                return (
                                    <div className='col-md-4' data-aos="fade-up">
                                        <div className='box-content'>
                                            <div>
                                                {user.icon}
                                            </div>
                                            <div className='box-right'>
                                                <h4>{user.title}</h4>
                                                <p>{user.pragraphe}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
            {/* end about experience */}

            {/* start section instructors */}
            <div className='partners'>
                <Container>
                    <div className='row '>
                        <h2 data-aos="fade-right">Our partners</h2>
                        <div className='title-partners'>
                            <p data-aos="fade-right">
                                Amattis nulla glavrida ege ulla ambco mattis<br /> nulla lorem ege dolor.
                            </p>
                            <span>
                                <NavLink to='/contact'>Become our partner<BsArrowRight /></NavLink>
                            </span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12' data-aos="fade-up">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={10}
                                slidesPerView={5}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                breakpoints={{
                                    // when window width is >= 320px
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 480px
                                    480: {
                                        slidesPerView: 2,
                                    },
                                    // when window width is >= 640px
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                    },
                                    1336: {
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                {
                                    partnersdetail.map(user => {
                                        return (
                                            <SwiperSlide >
                                                <div className='card-partners' key={user.id}>
                                                    <img src={user.Img} loading='lazy'></img>
                                                    <p>{user.name}</p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </Container>
            </div>
            {/* End section instructors */}
        </div>
    );
}

export default About;