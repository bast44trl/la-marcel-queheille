import React from 'react';
import { trackRecords } from './trackRecordsData.js';

const TrackRecords = () => {
  return (
    <div className="track-records">
      <div className="track-records-section">
        <h2>Résultats divers</h2>
        <div className="track-records-section-divers">
          {trackRecords.nonProfessional.map((palm, idx) => {
            return (
              <>
                <p key={idx} className="dates">
                  <strong>{palm.year}</strong>
                </p>
                {palm.results.map((res, idx) => {
                  return <p key={idx}>{res}</p>;
                })}
              </>
            );
          })}
        </div>
      </div>
      <div className="div-separation"></div>
      <div className="track-records-section">
        <div className="track-records-tdf">
          <h2>Tour de France</h2>
          <div>
            {trackRecords.tourDeFrance.map((palm, idx) => {
              return (
                <p key={idx}>
                  <strong>{palm.year}</strong>
                  {` : ${palm.results}`}
                </p>
              );
            })}
          </div>
        </div>
        <div className="track-records-vuelta">
          <h2>Tour d'Espagne</h2>
          <div>
            {trackRecords.vuelta.map((palm, idx) => {
              return (
                <p key={idx}>
                  <strong>{palm.year}</strong>
                  {` : ${palm.results}`}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRecords;
