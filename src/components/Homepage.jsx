import React from 'react';
import affiche from '../assets/img/poster.webp';

const Homepage = () => {
  return (
    <div className="homepage" id="homepage">
      <a href={affiche} target="blank">
        <img src={affiche} alt="Poster of the event" />
      </a>
      <div className="homepage__title">
        <h1>La Marcel Queheille CycloSportive</h1>
      </div>
    </div>
  );
};

export default Homepage;
