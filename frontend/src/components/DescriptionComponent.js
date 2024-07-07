import React, { useState } from 'react';
import '../styles/DescriptionComponent.css';

const DescriptionComponent = ({ onDescription }) => {
    return (
    <div class="container">
      <button onClick={onDescription}>Дальше</button>
      <img src={`/images/description_image.jpeg`}/>
    </div>
  );
};

export default DescriptionComponent;
