// src/components/FilmList.js
import React from 'react';
import FilmCard from './FilmCard';

const FilmList = ({ films }) => {
  return (
    <div className="film-list">
      {films.map((film, index) => (
        <FilmCard 
          key={index} 
          title={film.title} 
          description={film.description} 
          posterUrl={film.posterUrl} 
          rating={film.rating} 
        />
      ))}
    </div>
  );
};

export default FilmList;

