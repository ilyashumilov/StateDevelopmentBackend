import React, { useState } from 'react';
import '../styles/HealthComponent.css';

const HealthComponent = ({ counter, incrementCounter, onHealth }) => {
    return (
        <div class="container">
          <button onClick={onHealth}>Дальше</button>
          <img class='countericon' src={`/images/coin_image.png`}/>
          <p class='counter'>{counter}</p>
          <img class='background' src={`/images/background_image.jpeg`}/>
          <img class='coin' src={`/images/health_image.png`} onClick={incrementCounter}/>
        </div>
    );
};

export default HealthComponent;
