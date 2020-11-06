import React from 'react';

import './Movie.css';

const API_IMG = 'https://image.tmdb.org/t/p/w1280';

function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img src={API_IMG + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}

export default Movie;