import React from 'react';
import rightArrow from '../assets/icons/right-arrow.png';

const RouteInfos = ({ start, grandParcours }) => {
  const arrowStyle = {
    height: '2.5rem',
    transform: 'translateY(5px)',
    padding: '0 5px',
    margin: '-10px 0',
  };
  return (
    <div
      className={`parcours-infos ${
        grandParcours ? 'reveal-right' : 'reveal-left'
      }`}
    >
      <p>
        <strong>Inscription :</strong>
      </p>
      <ul className="signin-price">
        <li>
          <span>Jusqu'au 15 Juillet</span>
          <img src={rightArrow} alt="" style={arrowStyle} />
          <span>35 euros</span>
        </li>
        <li>
          <span>Du 16 Juillet au 5 Août 12H</span>
          <img src={rightArrow} alt="" style={arrowStyle} />
          <span>45 euros</span>
        </li>
        <li>
          <span>Sur place</span>
          <img src={rightArrow} alt="" style={arrowStyle} />
          <span>50 euros</span>
        </li>
      </ul>
      <br />
      <p>
        <strong>Accueil de la Cyclo sportive :</strong>
      </p>
      <p>Jai Alai de Mauléon, rue du 8 mai 1945, 64130 Mauléon</p>
      <br />
      <p>
        <strong>Dossards :</strong>
      </p>
      <p>Vendredi 5 Août 2022 : de 15h à 20h</p>
      <p>Samedi 6 Août 2022 de 6h00 à 7h30</p>
      <br />
      <p>
        <strong>Départ :</strong>
      </p>
      <p>Samedi 6 Août : {start}</p>
    </div>
  );
};

export default RouteInfos;
