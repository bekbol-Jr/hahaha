import React from 'react';
import kaktus from "../img/edfghipoyfch.png"
import {BsArrowRight} from "react-icons/bs";

const Hero = () => {
  return (
    <div id='hero'>
      <div className="container">
        <div className="hero">
          <div className='hero-titles'>
            <div className='flex text1'>
              <h1>Cactus</h1>
              <h5>is a cucumber deeply</h5>
            </div>
            <div className='flex text1'>
              <h5>disappointed</h5>
              <h1>in a life</h1>
            </div>
            <p className='des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto culpa ea esse laborum rem sint tenetur, ullam? Aliquid beatae cumque cupiditate ducimus fuga illo labore nostrum quibusdam reprehenderit sapiente!</p>
            <div className='hero-btn'>
              <p>More information</p>
              <div className='circle'><BsArrowRight/></div>
            </div>
          </div>
          <img src={kaktus} alt="" className='kaktus'/>
        </div>
      </div>
    </div>
  );
};

export default Hero;