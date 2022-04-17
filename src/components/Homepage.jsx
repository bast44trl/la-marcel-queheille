import React from 'react';
import affiche from '../assets/img/affiche.jpg';

const Homepage = () => {
  return (
    <div className="homepage">
      <img src={affiche} alt="" />
      <div className="homepage__title-actions">
        <h1>La Marcel Queheille CycloSportive</h1>
        <div className="homepage-actions">
          <a
            className="button"
            href="https://pyreneeschrono.fr/evenement/la-marcel-queheille/"
            title="Inscriptions pour la cyclosportive La Marcel Queheille"
            target="blank"
          >
            <span>S'engager</span>
          </a>
          <a className="button" href="#marcel">
            <span>Qui était Marcel ?</span>
          </a>
          <div className="button">
            <span>Infos pratiques</span>
          </div>
          <div className="button">
            <span>Nous contacter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
