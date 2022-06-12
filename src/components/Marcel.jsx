import React, { useState } from 'react';
import marcelYoung from '../assets/img/pic_marcel_young.webp';
import marcelOld from '../assets/img/pic_marcel_old.webp';
import History from './History';
import MarcelVideo from './MarcelVideo';
import TrackRecords from './TrackRecords';
import { Link } from 'react-router-dom';

const Marcel = () => {
  const [turnCard, setTurnCard] = useState(true);
  const [turnVideo, setTurnVideo] = useState(false);
  return (
    <div className="marcel" id="marcel">
      <div className="marcel-img">
        <img src={turnCard ? marcelOld : marcelYoung} alt="" />
      </div>
      <div className="marcel-content">
        {!turnVideo && (
          <h1>{!turnCard ? 'Marcel, son palmarès' : 'Marcel, son histoire'}</h1>
        )}
        {turnVideo && <h1>Marcel et ses petits-fils</h1>}
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
      <Link className="button-return" to="/">
        Accueil
      </Link>
    </div>
  );
};

export default Marcel;
