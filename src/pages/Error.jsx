import React from "react";
import { Link } from 'react-router-dom';


const Error = () => {
  return (
   
      
      <>
      <div className="error">
      <h1 >404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="linkError">Retourner vers la page d'accueil</Link></div></>
      
    
  );
};

export default Error;
