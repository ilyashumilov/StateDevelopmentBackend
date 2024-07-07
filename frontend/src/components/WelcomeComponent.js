import React, { useState } from 'react';
import '../styles/WelcomeComponent.css';

const WelcomeComponent = ({ onWelcome }) => {
    return (
    <div class="container">
      <button onClick={onWelcome}>Дальше</button>
      <img src={`/images/welcome_image.jpeg`}/>
    </div>
  );
};

export default WelcomeComponent;
