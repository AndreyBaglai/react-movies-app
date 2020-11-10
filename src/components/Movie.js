import React from 'react';

import './Movie.css';

const API_IMG = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass = (vote) => {
  if(vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
};

function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img src={poster_path ? API_IMG + poster_path : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80'} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </div>

      <div className="movie-overview">
        <h3>Overview:</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
