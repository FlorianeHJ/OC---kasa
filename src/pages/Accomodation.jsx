import React from 'react';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import Header from '../components/Header';
import data from "../data/appartements.json";

const Accomodation = () => {


    return (
        <div className='container'>
            <Header />

            <div className="content">
                <div className='galery'></div>
                <div className="description-container">
                    <div className="description-top"></div>
                    <div className="description-middle"></div>
                    <div className="description-bottom">
                        <Collapse title="Descritpion" details={<p>{data.description}</p> }/>
                    </div>
                </div>
            </div>

            <Footer />
            
        </div>
    );
};

export default Accomodation;