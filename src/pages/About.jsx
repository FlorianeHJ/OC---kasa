import React from "react";

import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";


const About = () => {

   const details1 = <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>

   const details2 = <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>

   const details3 = <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>

   const details4 = <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers domestique pour nos hôtes.</p>

  return (
    <div>
      <Header />
      <div className="img-container">
      </div>
<div>
<Collapse title="Fiabilité" details={details1} />
<Collapse title="Respect" details={details2} />
<Collapse title="Service" details={details3} />
<Collapse title="Securité" details={details4} />

</div>
     
      <Footer />
    </div>
  );
};

export default About;
