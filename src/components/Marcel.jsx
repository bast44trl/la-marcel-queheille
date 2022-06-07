import React, { useState } from 'react';
import marcelYoung from '../assets/img/pic_marcel_young.jpg';
import marcelOld from '../assets/img/pic_marcel_old.jpg';
import History from './History';
import MarcelVideo from './MarcelVideo';
import TrackRecords from './TrackRecords';

const Marcel = () => {
  const [turnCard, setTurnCard] = useState(false);
  const [turnVideo, setTurnVideo] = useState(false);
  return (
    <div className="marcel" id="marcel">
      <div className="marcel-img">
        <img src={turnCard ? marcelOld : marcelYoung} alt="" />
      </div>
      <div className="marcel-content">
        <h1>Marcel</h1>
        <div className={`${turnVideo && 'video-bg'} marcel-description`}>
          {turnCard && !turnVideo && <History />}
          {!turnCard && !turnVideo && <TrackRecords />}
          {turnVideo && <MarcelVideo />}
        </div>
        <div className="buttons">
          <div className="button-video" onClick={() => setTurnVideo(true)}>
            Video
          </div>
          <div
            className="button-track-records"
            onClick={() => {
              setTurnVideo(false);
              setTurnCard(!turnCard);
            }}
          >
            {turnCard ? 'Son palmarès' : 'Son histoire'}
          </div>
        </div>
      </div>
      <a href="#homepage" className="button-return">
        Accueil
      </a>
    </div>
  );
};

export default Marcel;
