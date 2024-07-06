import React, { useState } from 'react';
//import '../styles/LoginComponent.css'; // Import CSS for styling

const DescriptionComponent = ({ onDescription }) => {
    return (
    <div>
      <button onClick={onDescription}>Дальше</button>
      <img src={`/images/description_image.jpeg`}/>
    </div>
  );
};

export default DescriptionComponent;
