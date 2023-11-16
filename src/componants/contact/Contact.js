import React from 'react';
import './Contact.scss';
import { Container } from 'react-bootstrap';
import Contactdetail from './contactdetails';

function Contact() {
    return (
        <div className='contact'>
            <Container>
                <div className='row'>
                    <h1>Get in touch!</h1>
                    {
                        Contactdetail.map(user => {
                            return (
                                <div className='col-md-4 articl'>
                                    <h3 className='title'>{user.Title}</h3>
                                    <div className='box'>
                                        <p className='icon'>
                                            {user.iconOne}
                                        </p>
                                        <p className='number'>
                                            {user.number}
                                        </p>
                                        <p className='p'>
                                            {user.dete}
                                        </p>
                                    </div>
                                    <div className='box'>
                                        <p className='icon'>
                                            {user.iconTwo}
                                        </p>
                                        <p className='number'>
                                            {user.Email}
                                        </p>
                                        <p className='p'>
                                            {user.prag}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default Contact;