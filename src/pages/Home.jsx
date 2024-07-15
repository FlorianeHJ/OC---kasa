import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data/appartements.json";


const Home = () => {



  return (
    <div className="container">
      <Header />

      <div className="content">
      <div className="home-banner">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="container-cards">
        {data.map(card => (<Card key={card.id} title={card.title} cover={card.cover} />))}
        
      </div>
</div>
      <Footer />
    </div>
  );
};

export default Home;
