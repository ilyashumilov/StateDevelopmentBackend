import React, { useState } from 'react';
import '../styles/MoneyComponent.css';

const MoneyComponent = ({ counter, incrementCounter, onHealth }) => {
    return (
        <div class="container">
          <button onClick={onHealth}>Дальше</button>
          <img class='countericon' src={`/images/coin_image.png`}/>
          <p class='counter'>{counter}</p>
          <img class='background' src={`/images/background_image.jpeg`}/>
          <img class='coin' src={`/images/money_image.png`} onClick={incrementCounter}/>
        </div>
    );
};

export default MoneyComponent;
