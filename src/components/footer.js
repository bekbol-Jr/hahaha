import React from 'react';
import kaktus from "../img/edfghipoyfch.png"

const Footer = () => {
  return (
    <div id='footer'>
      <div className="container">
        <div className="footer">
          <img src={kaktus} alt=""/>
          <p>All rights reserved</p>
          <a href="tel:+704247027">+704247027</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;