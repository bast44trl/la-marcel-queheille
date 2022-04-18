import React, { useState } from 'react';
import arrivee from '../assets/img/flamme-arrivee.jpg';

const Parcours = () => {
  const [grandParcours, setGrandParcours] = useState(true);
  const [petitParcours, setPetitParcours] = useState(false);
  const [horaires, setHoraires] = useState(false);

  const handleParcours = (e) => {
    if (e.includes('Grand')) {
      setGrandParcours(true);
      setPetitParcours(false);
      setHoraires(false);
    }
    if (e.includes('Petit')) {
      setPetitParcours(true);
      setGrandParcours(false);
      setHoraires(false);
    }
    if (e.includes('Horaires')) {
      setHoraires(true);
      setGrandParcours(false);
      setPetitParcours(false);
    }
  };
  return (
    <div className="parcours" id="parcours">
      <nav>
        <ul>
          <li
            className={grandParcours ? 'active' : ''}
            onClick={(e) => handleParcours(e.target.innerHTML)}
          >
            Grand parcours
          </li>
          <li className="li-separation"></li>
          <li
            className={petitParcours ? 'active' : ''}
            onClick={(e) => handleParcours(e.target.innerHTML)}
          >
            Petit parcours
          </li>
          <li className="li-separation"></li>
          <li
            className={horaires ? 'active' : ''}
            onClick={(e) => handleParcours(e.target.innerHTML)}
          >
            Horaires
          </li>
        </ul>
      </nav>
      <>
        {grandParcours && (
          <div className="parcours-content">
            <img src={arrivee} alt="" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d93102.8918454389!2d-0.8240166045209566!3d43.178745288506875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e1!4m5!1s0xd56e0e9e082c813%3A0x59612cdaa45fd3f2!2sMaul%C3%A9on-Licharre%2C%2064130!3m2!1d43.220130999999995!2d-0.8895!4m5!1s0xd57aaacee6c8db9%3A0x406651748139610!2sOloron-Sainte-Marie!3m2!1d43.194413!2d-0.6052919999999999!4m5!1s0xd571c0957cc8fd1%3A0x70ccfff571e75487!2sMontory!3m2!1d43.097257!2d-0.819006!4m5!1s0xd56e0e9e082c813%3A0x59612cdaa45fd3f2!2sMaul%C3%A9on-Licharre!3m2!1d43.220130999999995!2d-0.8895!5e0!3m2!1sfr!2sfr!4v1650270951107!5m2!1sfr!2sfr"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen={''}
              loading="lazy"
              title="grand-parcours"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
        {petitParcours && (
          <div className="parcours-content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m36!1m12!1m3!1d37745.168163851056!2d-0.8720273311026804!3d43.19781483881689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m21!3e1!4m5!1s0xd56e0e9e082c813%3A0x59612cdaa45fd3f2!2sMaul%C3%A9on-Licharre%2C%2064130!3m2!1d43.220130999999995!2d-0.8895!4m3!3m2!1d43.225271899999996!2d-0.8357401!4m3!3m2!1d43.189164999999996!2d-0.8815609999999999!4m5!1s0xd56e0e9e082c813%3A0x59612cdaa45fd3f2!2sMaul%C3%A9on-Licharre%2C%2064130!3m2!1d43.220130999999995!2d-0.8895!5e0!3m2!1sfr!2sfr!4v1650287796840!5m2!1sfr!2sfr"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen={''}
              title="petitParcours"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <img src={arrivee} alt="" />
          </div>
        )}
        {horaires && (
          <div className="horaires-content">
            <p>Dossards : 7h Place de la Mairie</p>
            <p>Départ Grand parcours : 8h Place de la Mairie</p>
            <p>Départ Petit Parcours : 9h Place de la Mairie</p>
          </div>
        )}
      </>
    </div>
  );
};

export default Parcours;
