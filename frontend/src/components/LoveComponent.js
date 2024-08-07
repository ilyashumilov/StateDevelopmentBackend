import React, { useState } from 'react';
import '../styles/LoveComponent.css';

const LoveComponent = ({ counter, incrementCounter, onLove }) => {
    return (
        <div class="container">
          <button onClick={onLove}>Дальше</button>
          <img class='countericon' src={`/images/coin_image.png`}/>
          <p class='counter'>{counter}</p>
          <img class='background' src={`/images/background_image.jpeg`}/>
          <img class='coin' src={`/images/love_image.png`} onClick={incrementCounter}/>
        </div>
    );
};

export default LoveComponent;
