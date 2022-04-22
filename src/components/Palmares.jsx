import React from 'react';

const Palmares = () => {
  return (
    <div className="palmares">
      <div className="palmares-section">
        <h2>Résultats divers</h2>
        <div className="palmares-section-divers">
          <p className="dates">
            <strong>1953-1955</strong>
          </p>
          <p>18 victoires en amateur</p>
          <p className="dates">
            <strong>1956</strong>
          </p>
          <p>G.P. Martini à Pau</p>
          <p>Ronde des Champions à Tarbes</p>
          <p>3e étape du Marché de la Volaille</p>
          <p>2e de la Route de France</p>
          <p>2e de la Ronde des Espoirs à Mauléon</p>
          <p>3e du Tour de Dordogne</p>
          <p className="dates">
            <strong>1957</strong>
          </p>
          <p>2e du Circuit d'Aquitaine</p>
          <p className="dates">
            <strong>1959</strong>
          </p>
          <p>3e étape du Critérium du Dauphiné libéré</p>
          <p>9e étape du Tour de France</p>
          <p>2e du Tour de l'Aude</p>
          <p className="dates">
            <strong>1960</strong>
          </p>
          <p>2e de la Polymultipliée</p>
          <p>2e du Grand Prix du Midi libre</p>
          <p className="dates">
            <strong>1962</strong>
          </p>
          <p>4e étape du Circuit d'Aquitaine</p>
        </div>
      </div>
      <div className="div-separation"></div>
      <div className="palmares-section">
        <div className="palmares-tdf">
          <h2>Tour de France</h2>
          <div>
            <p>
              <strong>1957</strong> : 30e
            </p>
            <p>
              <strong>1959</strong> : 26e, vainqueur de la 9e étape
            </p>
            <p>
              <strong>1960</strong> : 50e
            </p>
            <p>
              <strong>1961</strong> : 21e
            </p>
          </div>
        </div>
        <div className="palmares-vuelta">
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
    </div>
  );
};

export default Palmares;
