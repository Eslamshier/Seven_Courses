/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Instructors.scss';
import { Container } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { instructorsdetail } from '../home/tistemontalsJson';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function Instructors() {
    return (
        <div className='Instruc'>
            <div className='Instructor'>
                <Container>
                    <div className='row'>
                        <h1>Our instructors</h1>
                        {
                            instructorsdetail.map((card, id) => {
                                return (
                                    <div className='col-md-3' key={id}>
                                        <div className='card-box'>
                                            <div className='box-img'>
                                                <img src={card.Img} loading='lazy'></img>
                                                <div className='overlay'></div>
                                            </div>
                                            <h3>{card.name}</h3>
                                            <p>{card.position}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
            <div className='Instructor-botton'>
                <Container>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='our-team'>
                                    <h4>Join our team</h4>
                                    <h1>Become an instructor & share your <br /> experience!</h1>
                                    <span>
                                        <NavLink to='/contact'>Join our team <HiOutlineArrowRight/> </NavLink>
                                    </span>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='our-team'>
                                <Accordion defaultActiveKey='0'>
                                    <Accordion.Item eventKey='0' className='item'>
                                        <Accordion.Header>Who can become an instructor?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='1' className='item'>
                                        <Accordion.Header>What lorem amet nulla?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='2' className='item'>
                                        <Accordion.Header>How nulla glavrida dolor amet?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='3' className='item'>
                                        <Accordion.Header>Ut elit tellus luctus nec?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                </div>
                            </div>
                        </div>
                </Container>
            </div>
        </div>
    );
}

export default Instructors;