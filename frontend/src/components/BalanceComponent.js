import React, { useState } from 'react';
import '../styles/BalanceComponent.css';

const BalanceComponent = ({ counter, incrementCounter, onBalance }) => {
    return (
        <div class="container">
          <button onClick={onBalance}>Дальше</button>
          <img class='countericon' src={`/images/coin_image.png`}/>
          <p class='counter'>{counter}</p>
          <img class='background' src={`/images/background_image.jpeg`}/>
          <img class='coin' src={`/images/balance_image.png`} onClick={incrementCounter}/>
        </div>
    );
};

export default BalanceComponent;
