import React from "react";
import Card from "../components/Card";

import data from "../data/appartements.json";


const Home = () => {



  return (
    
      

      <>
      <div className="home-banner">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="container-cards">
        {data.map(card => (<Card key={card.id} id={card.id} title={card.title} cover={card.cover} />))}
        
      </div>
</>
      
   
  );
};

export default Home;
