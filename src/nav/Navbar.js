/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './Navbar.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { LuShoppingBasket } from 'react-icons/lu';


function Navba() {
    const [fix, setFix] = useState(false);
    function setScroll() {
        if (window.scrollY >= 250) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setScroll);
    return (
        <Navbar expand="lg" className={fix ? 'navbar fixed' : 'navbar'}>
            <Container>
                <Navbar.Brand className='iconn' >
                    <NavLink to="/">
                        <img src='https://the7.io/online-courses/wp-content/uploads/sites/70/2020/04/courseslogo-d-manr.svg'></img>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav className="ul ms-auto">
                        <NavLink className='li-link' aria-current="page" to="/" >Home</NavLink>
                        <NavLink className='li-link' aria-current="page" to="/about" >About us</NavLink>
                        <NavLink className='li-link' aria-current="page" to="/courses" >Courses</NavLink>
                        <NavLink className='li-link' aria-current="page" to="/instructors" >Instructors</NavLink>
                        <NavLink className='li-link' aria-current="page" to="/blog" >Blog</NavLink>
                        <NavLink className='li-link' aria-current="page" to="/contact" >Contact</NavLink>
                    </Nav>
                    <div className='box-icon'>
                        <li className='li-icon'><BsSearch /></li>
                        <li className='li-icon'><AiOutlineUser /></li>
                        <li className='li-icon'><LuShoppingBasket /></li>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navba;