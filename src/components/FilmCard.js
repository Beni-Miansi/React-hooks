// src/components/FilmCard.js
import React from 'react';

const FilmCard = ({ title, description, posterUrl, rating }) => {
  return (
    <div className="film-card">
      <img src={posterUrl} alt={title} />
      <div className="film-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Rating:</strong> {rating}</p>
      </div>
    </div>
  );
};

export default FilmCard;
