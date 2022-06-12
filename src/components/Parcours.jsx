import React, { useState } from 'react';
import smallRace from '../assets/img/smallRace.webp';
import bigRace from '../assets/img/bigRace.webp';
import RouteInfos from './RouteInfos';
import { Link } from 'react-router-dom';

const Parcours = () => {
  const [grandParcours, setGrandParcours] = useState(true);
  const [petitParcours, setPetitParcours] = useState(false);

  const handleParcours = (e) => {
    if (e.includes('Marcel')) {
      setGrandParcours(true);
      setPetitParcours(false);
    }
    if (e.includes('cyclotouriste')) {
      setPetitParcours(true);
      setGrandParcours(false);
    }
  };
  return (
    <div className="parcours" id="parcours">
      <nav>
        <ul>
          <li
            className={`li-grand-parcours ${grandParcours ? 'active' : ''}`}
            onClick={(e) => handleParcours(e.target.innerHTML)}
          >
            La Marcel Queheille
          </li>
          <li className="li-separation"></li>
          <li
            className={`li-petit-parcours ${petitParcours ? 'active' : ''}`}
            onClick={(e) => handleParcours(e.target.innerHTML)}
          >
            La cyclotouriste
          </li>
        </ul>
      </nav>
      <div className="parcours-content">
        {grandParcours && (
          <div className="parcours-content-img">
            <RouteInfos start="8h30" grandParcours={grandParcours} />
            <a
              href="https://www.openrunner.com/route-details/9189539"
              target="blank"
              about="Voir les détails du parcours sur OpenRunner"
            >
              <div className="map-layout">
                <p>Voir les détails du parcours</p>
              </div>
              <img src={bigRace} alt="big race route" />
            </a>
          </div>
        )}
        {petitParcours && (
          <div className="parcours-content-img">
            <a
              href="https://www.openrunner.com/route-details/12998676"
              target="blank"
              about="Voir les détails du parcours sur OpenRunner"
            >
              <div className="map-layout">
                <p>Voir les détails du parcours</p>
              </div>
              <img src={smallRace} alt="small race route" />
            </a>
            <RouteInfos start="8h35" grandParcours={grandParcours} />
          </div>
        )}
      </div>
      <Link className="parcours-button-return" to="/">
        Accueil
      </Link>
    </div>
  );
};

export default Parcours;
