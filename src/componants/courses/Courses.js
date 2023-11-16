/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './Courses.scss';
import Coursesdata from './Coursesjson';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Courses() {
    const [items, setItems] = useState(Coursesdata);

    const fillterItems = (items) =>
    {
        const updateItems = Coursesdata.filter((x) =>
        {
            return x.category === items;
        })
        setItems(updateItems);
    }
    const AllItems = () =>
    {
        setItems(Coursesdata)
    }
    return (
        <div className='courses'>
            <Container>
                <div className='blog-head'>
                    <h1>Premium courses</h1>
                    <ul>
                        <li>
                            <NavLink onClick={() => AllItems()}>All categories</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => fillterItems("Business")}>Business</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => fillterItems("Copywriting")}>Copywriting</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => fillterItems("Design")}>Design</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => fillterItems("Programming")}>Programming</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => fillterItems("Social media")}>Social media</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='row'>
                    {
                        items.map((card, id) => {
                            return (
                                <div className='col-md-4'>
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
                </div>
            </Container>
        </div>
    );
}

export default Courses;