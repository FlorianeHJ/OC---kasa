import React from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import Header from '../components/Header';
import data from "../data/appartements.json";

const Accomodation = () => {
    const { id } = useParams();
    const apartment = data.find(apartment => apartment.id === id);

    const generateStars = (rating) => {
        const stars = []
        for (let i = 0; i < 5; i++ ) {
            if (i < rating) {
                stars.push(<span key={i} className='fullStars'></span>)
            } else {
                stars.push(<span key={i} className='emptyStars'></span>)
            }
        }
    }


    return (
        <div className='container'>
            <Header />

            <div className="content">
                <div className='galery'>
                <img src={apartment.cover} alt={apartment.title} />
                </div>
                <div className="description-container">
                    <div className="description-top">
                        <h1>{apartment.title}</h1>
                        <h3>{apartment.location}</h3>
                        <div className='host'>
                            <h4>{apartment.host.name}</h4>
                            <img src={apartment.host.picture} alt="Propriétaire/hôte du logement" />
                        </div>
                    </div>
                    <div className="description-middle">
                        <div className='tags'>
                       <ul>{apartment.tags.map((tags, index) => (<li key={index}>{tags}</li>))}</ul></div>
<div className='rattings'>
    {generateStars(apartment.ratings)}
</div>
                    </div>
                    <div className="description-bottom">
                        <Collapse title="Descritpion" details={<p>{apartment.description}</p> }/>
                    </div>
                </div>
            </div>

            <Footer />
            
        </div>
    );
};

export default Accomodation;