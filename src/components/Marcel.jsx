import React, { useState } from 'react';
import marcel from '../assets/img/photo-ancienne.jpg';

const Marcel = () => {
  const [turnCard, setTurnCard] = useState(false);
  return (
    <div className="marcel" id="marcel">
      <img src={marcel} alt="" />
      <div className="marcel__title-description">
        <h1>Marcel Queheille</h1>
        <div className={`marcel-description`}>
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
            <div className={`palmares`}>
              <>
                <div className="palmares-section">
                  <h2>Résultats divers</h2>
                  <div className="palmares-section-divers">
                    <p>
                      <strong>1953-1955</strong>
                    </p>
                    <p>18 victoires en amateur</p>
                    <p>
                      <strong>1956</strong>
                    </p>
                    <p>G.P. Martini à Pau</p>
                    <p>Ronde des Champions à Tarbes</p>
                    <p>3e étape du Marché de la Volaille</p>
                    <p>2e de la Route de France</p>
                    <p>2e de la Ronde des Espoirs à Mauléon</p>
                    <p>3e du Tour de Dordogne</p>
                    <p>
                      <strong>1957</strong>
                    </p>
                    <p>2e du Circuit d'Aquitaine</p>
                    <p>
                      <strong>1959</strong>
                    </p>
                    <p>3e étape du Critérium du Dauphiné libéré</p>
                    <p>9e étape du Tour de France</p>
                    <p>2e du Tour de l'Aude</p>
                    <p>
                      <strong>1960</strong>
                    </p>
                    <p>2e de la Polymultipliée</p>
                    <p>2e du Grand Prix du Midi libre</p>
                    <p>
                      <strong>1962</strong>
                    </p>
                    <p>4e étape du Circuit d'Aquitaine</p>
                  </div>
                </div>
                <div className="palmares-section">
                  <div className="palmares-section-tours">
                    <h2>Tour de France</h2>
                    <div>
                      <p>
                        <strong>1957</strong> : 30e
                      </p>
                      <p>
                        <strong>1959</strong> : 26e,
                        <br /> vainqueur de la 9e étape
                      </p>
                      <p>
                        <strong>1960</strong> : 50e
                      </p>
                      <p>
                        <strong>1961</strong> : 21e
                      </p>
                    </div>
                    <h2>Tour d'Espagne</h2>
                    <div>
                      <p>
                        <strong>1961</strong> : 26e
                      </p>
                      <p>
                        <strong>1962</strong> : hors délais (2e étape)
                      </p>
                      <p>
                        <strong>1963</strong> : non-partant (9e étape)
                      </p>
                    </div>
                  </div>
                </div>
              </>
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
