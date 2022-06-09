import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link className="link" to="/la-marcel-queheille/marcel">
            Marcel
          </Link>
        </li>
        <li>
          <Link className="link" to="/la-marcel-queheille/parcours">
            Parcours
          </Link>
        </li>
        <li>
          <a href="mailto:vincent.bengochea@yahoo.fr">Nous contacter</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
