import React from 'react';

const Card = ({title, cover}) => {
    return (
        <div className='card'>
            <img src={cover} alt={title} className='card-image'/>
            <div className='card-title-container'>
            <h3 className='card-title'>{title}</h3></div>
        </div>
    );
};

export default Card;