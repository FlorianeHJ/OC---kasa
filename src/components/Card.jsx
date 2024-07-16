import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({id, title, cover}) => {
    return (
        <Link to={`/logement/${id}`} className='card'>
            <img src={cover} alt={title} className='card-image'/>
            <div className='card-title-container'>
            <h3 className='card-title'>{title}</h3></div>
        </Link>
    );
};

export default Card;