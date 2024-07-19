import React from 'react';
import { useParams } from 'react-router-dom';
import emptyStars from "../assets/empty-star.png";
import fullStars from "../assets/full-star.png";
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
            console.log(i, rating);
            if (i < rating) {
                
                stars.push(<span key={i}><img src={fullStars} alt="Etoile couleur saumon" /></span>)
            } else {
                stars.push(<span key={i}><img src={emptyStars} alt="Etoile grisée" /></span>)
            }
        }
        return stars;
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
                        <div className='top-left'>
                        <h2>{apartment.title}</h2>
                        <h3>{apartment.location}</h3></div>
                       
                        <div className='top-right-host'>
                            <h4>{apartment.host.name}</h4>
                            <img src={apartment.host.picture} alt="Propriétaire/hôte du logement" />
                        </div>
                    </div>
                    <div className="description-middle">
                        <div className='tags'>
                       <ul>{apartment.tags.map((tags, index) => (<li key={index}>{tags}</li>))}</ul></div>
                        <div className='rating'>
    {generateStars(parseInt(apartment.rating))}
</div>
                    </div>
                    <div className="description-bottom">
                        <Collapse title="Descritpion" details={<p>{apartment.description}</p> } />
                        <Collapse title="Equipements" details={<ul>{apartment.equipments.map((equipments, index) => (<li key={index}>{equipments}</li>)) }</ul>} />
                    </div>
                </div>
            </div>

            <Footer />
            
        </div>
    );
};

export default Accomodation;