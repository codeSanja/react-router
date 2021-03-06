import React from 'react';
import { Link } from 'react-router-dom'
import './Card.css';

const Card = ({card}) => (
    <div className={card.animation}>
        <Link to={`/product/${card.id}`}>
            <div className="front">
                <img src="juice.jpg" alt="Avatar" className="card-image"/>
                <div className="container">
                    <h3>{card.title}</h3>
                    <h3><span className="price"> ${card.price}</span></h3>
                    <p>{card.description}</p>
                </div>
            </div>
        </Link>
    </div>
);

export default Card;
