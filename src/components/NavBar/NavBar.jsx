import React from 'react';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <a
            href="https://pyreneeschrono.fr/evenement/la-marcel-queheille/"
            title="Inscriptions pour la cyclosportive La Marcel Queheille"
            target="blank"
          >
            S'engager
          </a>
        </li>
        <li>
          <a href="#marcel">Qui était Marcel ?</a>
        </li>
        <li>
          <a href="#parcours">Infos pratiques</a>
        </li>
        <li>
          <a href="mailto:vincent.bengochea@yahoo.fr">Nous contacter</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
