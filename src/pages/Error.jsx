import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error = () => {
  return (
    <div  >
      <Header />
      <div className="error">
      <h1 >404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="linkError">Retourner vers la page d'accueil</Link></div>
      <Footer />
    </div>
  );
};

export default Error;
