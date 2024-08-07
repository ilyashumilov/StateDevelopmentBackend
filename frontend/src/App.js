import React, { useState, useEffect } from 'react';
import WelcomeComponent from './components/WelcomeComponent';
import DescriptionComponent from './components/DescriptionComponent';
import HealthComponent from './components/HealthComponent';
import MoneyComponent from './components/MoneyComponent';
import JoyComponent from './components/JoyComponent';
import BalanceComponent from './components/BalanceComponent';
import LoveComponent from './components/LoveComponent';


const tele = window.Telegram.WebApp;


const App = () => {

  useEffect(() => {
    tele.ready();
  });

  const [currentState, setCurrentState] = useState('Welcome');
  const [counter, setCounter] = useState(0); // Step 1: Add a counter state variable

  const handleWelcome = () => {
    setCurrentState('Description');
  };

  const handleDescription = () => {
    setCurrentState('HealthState');
  };

  const onHealth = () => {
    setCurrentState('MoneyState');
  };

  const onMoney = () => {
    setCurrentState('JoyState');
    console.log('Current State:', 'JoyState')
  };

  const onJoy = () => {
    setCurrentState('BalanceState');
  };

  const onBalance = () => {
    setCurrentState('LoveState');
  };

  const onLove = () => {
    setCurrentState('LastState');
  };

  const incrementCounter = () => {
    setCounter(counter + 1); // Step 2: Create a function to increment the counter
  };

  return (
    <div>
      {currentState === 'Welcome' && <WelcomeComponent onWelcome={handleWelcome}/>}
      {currentState === 'Description' && <DescriptionComponent onDescription={handleDescription}/>}
      {currentState === 'HealthState' && <HealthComponent counter={counter} incrementCounter={incrementCounter} onHealth={onHealth}/>}
      {currentState === 'MoneyState' && <MoneyComponent counter={counter} incrementCounter={incrementCounter} onMoney={onMoney}/>}
      {currentState === 'JoyState' && <JoyComponent counter={counter} incrementCounter={incrementCounter} onJoy={onJoy}/>}
      {currentState === 'BalanceState' && <BalanceComponent counter={counter} incrementCounter={incrementCounter} onBalance={onBalance}/>}
      {currentState === 'LoveState' && <LoveComponent counter={counter} incrementCounter={incrementCounter} onLove={onLove}/>}
    </div>  );
};

export default App;
