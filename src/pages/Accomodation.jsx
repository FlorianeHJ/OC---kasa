import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import emptyStars from "../assets/empty-star.png";
import fullStars from "../assets/full-star.png";
import Collapse from '../components/Collapse';

import data from "../data/appartements.json";
import Slideshow from '../components/Slideshow';

const Accomodation = () => {
    const { id } = useParams();
    const apartment = data.find(apartment => apartment.id === id);

    const generateStars = (rating) => {
        const stars = []
        for (let i = 0; i < 5; i++ ) {
            console.log(i, rating);
            if (i < rating) {
                
                stars.push(<span key={i}><img src={fullStars} alt="Etoile couleur saumon" /></span>)
            } else {
                stars.push(<span key={i}><img src={emptyStars} alt="Etoile grisée" /></span>)
            }
        }
        return stars;
    }

    if (!apartment) {
       return <Navigate to="*" />
    }


    return (

            <>
            < Slideshow <img src={data.pictures} alt="slidshow de l'appartement" /> />
                <div className="accomodation-container">
                    <div className='accomodation-container-top'>
                        <div className='accomodation-left'>
                            <div className='accomodation-names'>
                                <h2>{apartment.title}</h2>
                                <h3>{apartment.location}</h3>
                            </div>
                        <div className='tags'>
                            <ul>{apartment.tags.map((tags, index) => (<li key={index}>{tags}</li>))}</ul>
                    </div>

                        </div>

                        <div className='accomodation-right'>
                        <div className='host'>
                            <h4>{apartment.host.name}</h4>
                            <img src={apartment.host.picture} alt="Propriétaire/hôte du logement" /></div>

                            <div className='rating'>
                                {generateStars(parseInt(apartment.rating))}
                            </div>
                        </div>
                    </div>

                    <div className="accomodation-container-bottom">
                        <div className="accomodation-collapse">
                            <Collapse title="Descritpion" details={<p>{apartment.description}</p> } />
                            <Collapse title="Equipements" details={<ul>{apartment.equipments.map((equipments, index) => (<li key={index}>{equipments}</li>)) }</ul>} />
                        </div>
                    </div>

                </div>

            </>

    );
};

export default Accomodation;