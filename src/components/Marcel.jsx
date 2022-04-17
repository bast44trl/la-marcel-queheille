import React, { useState } from 'react';
import marcel from '../assets/img/photo-ancienne.jpg';

const Marcel = () => {
  const [turnCard, setTurnCard] = useState(true);
  return (
    <div className="marcel" id="marcel">
      <img src={marcel} alt="" />
      <div className="marcel__title-description">
        <h1>Marcel Queheille</h1>
        <div className={`marcel-description turn-card`}>
          {turnCard ? (
            <>
              <p>
                Marcel Queheille, né le 16 mars 1930 à Sauguis, et mort le 17
                juillet 2021 à Oloron-Sainte-Marie, était un coureur cycliste
                français.
              </p>
              <p>
                Il a participé à plusieurs Tour de France dans les années 1950
                et au début des années 1960. Il remporta notamment l'étape
                Bordeaux-Bayonne en 1959 et passa en tête au sommet du col du
                Tourmalet lors de l'édition de 1961.
              </p>
              <p>
                Autre performance, et non des moindres, entre 80 et 90 ans, il
                gravissait encore plus de 70 cols pyrénéens annuellement.
              </p>
            </>
          ) : (
            <div className="palmares">
              <div>
                <h2>Résultats divers</h2>
                <ul>
                  <li>1953-1955 : 18 victoires en amateur</li>
                  <li>
                    1956 :<li>G.P. Martini à Pau</li>
                    <li>Ronde des Champions à Tarbes</li>
                    <li>3e étape du Marché de la Volaille</li>
                    <li>2e de la Route de France</li>
                    <li>2e de la Ronde des Espoirs à Mauléon</li>
                    <li>3e du Tour de Dordogne</li>
                    <ul>
                      1957 :<li>2e du Circuit d'Aquitaine</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Tour de France</h2>
                <ul>
                  <li></li>
                </ul>
              </div>
              <div>
                <h2>Tour d'Espagne</h2>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="button" onClick={() => setTurnCard(!turnCard)}>
          {turnCard ? 'Son palmarès' : 'Son histoire'}
        </div>
      </div>
    </div>
  );
};

export default Marcel;
