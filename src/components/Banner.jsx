import React from 'react';

const Banner = ({title, className}) => {
    return (
        <div>
            <div className={`banner ${className}`}>
                {title && <h3>{title}</h3>}
                             
            </div>
        </div>
    );
};

export default Banner;