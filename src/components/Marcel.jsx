import React, { useState } from 'react';
import marcelJeune from '../assets/img/photo-ancienne.jpg';
import marcelVieux from '../assets/img/photo-vieux.jpg';
import History from './History';
import MarcelVideo from './MarcelVideo';
import Palmares from './Palmares';

const Marcel = () => {
  const [turnCard, setTurnCard] = useState(false);
  const [turnVideo, setTurnVideo] = useState(false);
  console.log('turnCard : ', turnCard);
  console.log('turnVideo : ', turnVideo);
  return (
    <div className="marcel" id="marcel">
      <div className="marcel-img">
        <img src={turnCard ? marcelVieux : marcelJeune} alt="" />
      </div>
      <div className="marcel-content">
        <h1>Marcel Queheille</h1>
        <div className={`marcel-description`}>
          {turnCard && !turnVideo && <History />}
          {!turnCard && !turnVideo && <Palmares />}
          {turnVideo && <MarcelVideo />}
        </div>
        <div className="buttons">
          <div className="button-video" onClick={() => setTurnVideo(true)}>
            Video
          </div>
          <div
            className="button-palmares"
            onClick={() => {
              setTurnVideo(false);
              setTurnCard(!turnCard);
            }}
          >
            {turnCard ? 'Son palmarès' : 'Son histoire'}
          </div>
          <a href="#homepage" className="button-return">
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default Marcel;
