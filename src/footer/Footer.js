/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Footer.scss';
import { FaHeadphonesAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { FaCcPaypal, FaCcVisa, FaCcApplePay, FaCcMastercard } from 'react-icons/fa';

function Footer() {
    return (
        <div class="footer pt-5 pb-5 ">
            <div class="container">
                <div class="row mt-5 align-items-center d-flex text-center text-md-start">
                    
                    <div class="col-md-12 col-lg-3">
                        <div class="fw-bold fs-5 mb-3"><img src='https://the7.io/online-courses/wp-content/uploads/sites/70/2020/04/courseslogo-l-manr.svg'></img></div>
                    </div>

                    <div class="col-md-12 col-lg-9 mb-4  d-flex justify-content-end text-md-center">
                        
                        <div class="div col-md-4 col-lg-3 ms-2">
                            <FaHeadphonesAlt />
                            <span className='span ms-2 align-items-center'>010 1050 6405</span>
                        </div>

                        <div class="div col-md-4 col-lg-4 mb-4 ms-2">
                            <AiOutlineMail />
                            <span className='span ms-2 align-items-center'>Eslam.Shoir@gmail.com</span>
                        </div>

                        <div class="icon-social-media col-md-2 col-lg-2 ms-2">
                            <a href='https://www.facebook.com/eslam.shoir/' target='_blank' rel="noreferrer"><FaFacebookF/></a>
                            <a href='https://www.linkedin.com/in/eslam-shoir-497408287/' target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
                            <a href='https://github.com/Eslamshier?tab=repositories' target='_blank' rel="noreferrer"><FiGithub/></a>
                        </div>
                    </div>
                </div>

                <div class="row mt-5  d-flex text-md-start">
                    <div className='col-md-6 col-lg-4 text-md-start '>
                        <ul className='footer-ul'>
                            <li>Contact</li>
                            <li>Terms & conditions</li>
                            <li>404 error page</li>
                            <li>Demo design system</li>
                        </ul>
                    </div>
                    <div className='col-md-6 col-lg-4'>
                        <div className='Payment-methods'>
                            <h5>Payment methods</h5>
                            <div className='Payment-methods-icon d-flex'>
                                <li><FaCcMastercard/></li>
                                <li><FaCcPaypal/></li>
                                <li><FaCcVisa/></li>
                                <li><FaCcApplePay/></li>
                            </div>
                            <p>
                                We care about your safety. We guarantee that <br/> your purchase will run smoothly. 
                            </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4'>
                        <div className='Payment-methods'>
                            <h5>Get our newsletter</h5>
                            <div className='Payment-methods-icon d-flex' id='email'>
                                <input type='email' placeholder='Enter your Email'  required></input>
                                <button type='email'>Sing up</button>
                            </div>
                            <p>
                                Enjoy all the latest stories, tips, news & useful advice! 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row mt-5 Copyright'>
                    © Copyright 2023 Eslam Shoir. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer


