import React, { useState } from 'react';
import WelcomeComponent from './components/WelcomeComponent';
import DescriptionComponent from './components/DescriptionComponent';

const App = () => {
  const [currentState, setCurrentState] = useState('Welcome');

  const handleWelcome = () => {
    setCurrentState('Description');
  };

  const handleDescription = () => {
    setCurrentState('HealthState');
  };

  return (
    <div>
      {currentState === 'Welcome' && <WelcomeComponent onWelcome={handleWelcome}/>}
      {currentState === 'Description' && <DescriptionComponent onDescription={handleDescription}/>}
    </div>
  );
};

export default App;
