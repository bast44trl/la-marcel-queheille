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
            className={grandParcours ? 'active' : ''}
            onClick={(e) => handleParcours(e.target.innerHTML)}
          >
            La Marcel Queheille
          </li>
          <li className="li-separation"></li>
          <li
            className={petitParcours ? 'active' : ''}
            onClick={(e) => handleParcours(e.target.innerHTML)}
          >
            La cyclotouriste
          </li>
        </ul>
      </nav>
      <div className="parcours-content">
        {grandParcours && (
          <div className="parcours-content-img">
            <RouteInfos start="8h30" />
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
            {/* <iframe
              title="grandParcours"
              loading="lazy"
              src="https://www.openrunner.com/route/9189539/embed/fr/3656775a7631767a33666a6a684b53486e3247504f2b466f4953434c714c306835487a565a575166735a673d3a3a99cfe15b7cd0c143e8f92fbba6c9f4e5"
              height="500px"
              width="700px"
              allowFullScreen="allowfullscreen"
              data-mce-fragment="1"
            ></iframe> */}
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
            <RouteInfos start="8h35" />
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
