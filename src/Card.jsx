import React from 'react';
import './Card.css';

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <div className="front" onClick={handleClick}>{flipped ? card.number : "?"}</div>
      </div>
    </div>
  );
};

export default Card;
