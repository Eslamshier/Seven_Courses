/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import './Blog.scss';
import { Container } from 'react-bootstrap';
import Blogdetail from './Blogjson';
import { NavLink } from 'react-router-dom';

function Blog() {
    const [items, setItems] = useState(Blogdetail);

    const fillterItems = (items) =>
    {
        const updateItems = Blogdetail.filter((x) =>
        {
            return x.category === items;
        })
        setItems(updateItems);
    }
    const AllItems = () =>
    {
        setItems(Blogdetail)
    }
    return (
        <div className='blog'>
            <Container>
                <div className='blog-head'>
                    <h1>Blog</h1>
                    <ul>
                        <li>
                            <NavLink onClick={() => AllItems()}>All articles</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => fillterItems("News")}>News</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => fillterItems("Promo")}>Promo</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => fillterItems("Tips & tricks")}>Tips & tricks</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='row'>
                    {
                        items.map((card, id) => {
                            return (
                                <div className='col-md-4' key={id}>
                                    <div className='card-box'>
                                        <div className='box-img'>
                                            <img src={card.Img} loading='lazy'></img>
                                            <div className='overlay'></div>
                                        </div>
                                        <h3>{card.Title}</h3>
                                        <p>{card.category} <span>{card.prag}</span></p>
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

export default Blog;