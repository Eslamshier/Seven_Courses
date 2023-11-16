/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from 'react';
import { motion} from 'framer-motion';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import imgOne from '../../assets/images/courses-4.jpg';
import imgtwo from '../../assets/images/courses-1.webp';
import imgThree from '../../assets/images/courses-3.jpg';
import imgFour from '../../assets/images/courses-5.webp';
import { TbMessage2Code } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';
import { CiYoutube } from 'react-icons/ci';
import { CgNotes } from 'react-icons/cg';
import { BsBook } from 'react-icons/bs';
import './Home.scss';
// import Courses json data
import Coursesdetail from './homeCourses';
// import tistemonials json data
import Tistemonialsdetail, { partnersdetail } from './tistemontalsJson';
// import instructors json data
import { instructorsdetail } from './tistemontalsJson';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
// import Video
import video from '../../assets/images/Atoms - 13232.mp4';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Aos from 'aos';



function Home() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='home'>
            {/* Start Header */}
            <div className='home-pag'>
                <Container>
                    <div className='row home-header'>
                        <div className='col-md-7'>
                            <h4 >Educational Online Project</h4>
                            <h1>Learn anytime & anywhere with Seven Ecourses</h1>
                            <p>Join our online educational project today & master new <br /> skills quickly & easily. Boost your career!</p>
                            <div className='home-botton'>
                                <NavLink to='/' className='button-left'>Browse courses</NavLink>
                                <NavLink to='/about' className='button-right'>Browse courses  <BsArrowRight className='arrow-right' /></NavLink>
                            </div>
                        </div>
                        <div className='col-md-5 position-relative '>
                            <motion.img className='img-one position-absolute' src={imgOne}
                                variants={{
                                    hedden: { x: "40rem", opacity: 0 },
                                    visible: { x: 0, opacity: 1 },
                                }}
                                initial="hedden"
                                animate="visible"
                                transition={{ duration: 1, type: "easily", delay: 0.75 }}
                            ></motion.img>
                            <motion.img className='img-two position-absolute' src={imgtwo}
                                initial={{ x: "25rem", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1.25, type: "easily", delay: 1 }}
                            ></motion.img>
                            <motion.img className='img-three position-absolute' src={imgThree}
                                initial={{ x: "20rem", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .75, type: "easily", delay: 0.50 }}
                            ></motion.img>
                            <motion.img className='img-four position-absolute' src={imgFour}
                                initial={{ x: "60rem", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1.25, type: "easily", delay: 1 }}
                            ></motion.img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='header-info col-md-2.5 d-flex justify-content-between'>
                            <div className='elmentor'>
                                <TbMessage2Code className='icon' />
                                <h5>Online support 24/7</h5>
                            </div>
                            <div className='elmentor'>
                                <FiUsers className='icon' />
                                <h5>Experienced instructors</h5>
                            </div>
                            <div className='elmentor'>
                                <CiYoutube className='icon' />
                                <h5>Easy to use interface</h5>
                            </div>
                            <div className='elmentor'>
                                <CgNotes className='icon' />
                                <h5>Digital certificates</h5>
                            </div>
                            <div className='elmentor'>
                                <BsBook className='icon' />
                                <h5>Free online library</h5>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* end Header */}

            {/* Start Courses */}
            <div className='home-grid'>
                <Container>
                    <h4  data-aos="fade-up">Hot topics. Awesome instructors.</h4>
                    <h1  data-aos="fade-up">Check out our new online courses</h1>
                    <row className='row'>
                            
                        {
                            Coursesdetail.map((card) => {
                                return (
                                    <div className='col-md-4' data-aos="fade-up">
                                        <div className='box-courses' key={card.id}>
                                            <div className='box-image'>
                                                <img src={card.Img} loading='lazy'></img>
                                                <span>{card.icon}</span>
                                            </div>
                                            <h2>{card.Title} </h2>
                                            <span className='spanprice'>
                                                <span className='spanSale'>{card.PriceDelete}</span>
                                                {card.Price}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </row>
                    <div className='botton'> <NavLink className='li-link' to='/courses'>Browse all courses <BsArrowRight /> </NavLink></div>
                </Container>
            </div>
            {/* End Courses */}

            {/* Start Testimonials */}
            <div className='Testimonials'  >
                <Container>
                
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={2}
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
                                slidesPerView: 1,
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            1336: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {
                            Tistemonialsdetail.map(user => {
                                return (
                                    
                                    <SwiperSlide >
                                        <div className='card-tes'  data-aos="fade-up">
                                            <div className='box-img'>
                                                <img src={user.Img} loading='lazy'></img>
                                                <div className='box-titel'>
                                                    <h3>{user.name}</h3>
                                                    <h5>{user.position}</h5>
                                                </div>
                                            </div>
                                            <p>{user.pragraph}</p>
                                        </div>
                                    </SwiperSlide>
                                    
                                )
                            })
                        }
                    </Swiper>
                    
                </Container>
            </div>
            {/* End Testimonials */}

            {/* Start Section Video */}
            <div className='section-video'>
                <Container>
                    <div className='row d-flex '>
                        <div className='col-md-5'>
                            <div className='titel-vid' data-aos="fade-right">
                                <h4>Start learning today!</h4>
                                <p>Watch our video guide - learn <br /> how to start your online <br /> education today.</p>
                                <NavLink to='/contact'>Feel free to contact our support <BsArrowRight /> </NavLink>
                            </div>
                        </div>
                        <div className='col-md-7' data-aos="fade-left">
                            <video controls autoPlay loop width="755" height="425" poster={imgOne}>
                                <source src={video} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </Container>
            </div>
            {/* End Section Video */}

            {/* start section instructors */}
            <div className='instructors'>
                <Container>
                    <div className='row'>
                        <h2 data-aos="fade-right">Meet our instructors</h2>
                        <div className='title-instructors'>
                            <p data-aos="fade-right">
                                Educators from best world's universities, top <br /> business coaches & advisors.
                            </p>
                            <span>
                                <NavLink to='/instructors'>Join our team <AiOutlineUserAdd /></NavLink>
                            </span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12' data-aos="fade-up">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={0}
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
                                    instructorsdetail.map(user => {
                                        return (
                                    
                                            <SwiperSlide >
                                                <div className='card-instructors' key={user.id}>
                                                    <img src={user.Img} loading='lazy' style={{ width: '160px', height: '160px' }}></img>
                                                    <h4>{user.name}</h4>
                                                    <p>{user.position}</p>
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

export default Home;