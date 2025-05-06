import React from 'react';
import CharacterImage from '../../assets/hero.png'; // Шлях до зображення
import './Character.css';

function Character() {
  return (
    <div className="character-container">
      <img src={CharacterImage} alt="Персонаж" className="character-image" />
    </div>
  );
}

export default Character;