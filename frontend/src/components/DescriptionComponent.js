import React from 'react';
import '../styles/DescriptionComponent.css';

const DescriptionComponent = ({ onDescription }) => {
    return (
        <div className="container">
            <button onClick={onDescription}>Дальше</button>
            <img src={`/images/description_image.jpeg`} alt="Description" class='background'/>
        </div>
    );
};

export default DescriptionComponent;
