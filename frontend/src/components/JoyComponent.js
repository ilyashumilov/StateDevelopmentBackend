import React, { useState } from 'react';
import '../styles/JoyComponent.css';

const JoyComponent = ({ counter, incrementCounter, onJoy }) => {
    return (
        <div class="container">
          <button onClick={onJoy}>Дальше</button>
          <img class='countericon' src={`/images/coin_image.png`}/>
          <p class='counter'>{counter}</p>
          <img class='background' src={`/images/background_image.jpeg`}/>
          <img class='coin' src={`/images/joy_image.png`} onClick={incrementCounter}/>
        </div>
    );
};

export default JoyComponent;
