import React, { useState } from 'react';
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

const Slideshow = ( {images}) => {

const [currentIndex, setCurrentIndex ] = useState(0)

const handlePrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
};

const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
};

    return (
        <>
            <div className="slideshow">
                <button onClick={handlePrevious}>{arrowLeft}</button>
                <img src={images[currentIndex]} alt="Slideshow" />
                <button onClick={handleNext}>{arrowRight}</button>
            </div>
        </>
    );
};

export default Slideshow;