import React, { useState } from 'react';

const Collapse = ({title, details}) => {

const [isCollapse, setIsCollapse] = useState(true)

const toggleCollapse = () => {
    setIsCollapse(!isCollapse)
}

    return (
        <div >
            <div onClick={toggleCollapse} className='collapse'>
            <h3 className='collapse-title'>{title}</h3>
            <span className='collapse-icon'>{isCollapse ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}</span>
            </div>
            {!isCollapse && (
            <div className='collapse-detail'>{details}</div>
        )}
        </div>
        
    );
};

export default Collapse;