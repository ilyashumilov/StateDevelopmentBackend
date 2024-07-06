import React, { useState } from 'react';
//import '../styles/LoginComponent.css'; // Import CSS for styling

const WelcomeComponent = ({ onWelcome }) => {
    return (
    <div>
      <button onClick={onWelcome}>Дальше</button>
      <img src={`/images/welcome_image.jpeg`}/>
    </div>
  );
};

export default WelcomeComponent;
