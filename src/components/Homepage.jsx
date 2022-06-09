import React from 'react';

import NavBar from './NavBar';
import affiche from '../assets/img/poster.webp';

const Homepage = () => {
  return (
    <div className="homepage" id="homepage">
      <NavBar />
      <img src={affiche} alt="Poster of the event" />
      <div className="homepage__title">
        <h1>La Marcel Queheille CycloSportive</h1>
      </div>
    </div>
  );
};

export default Homepage;
