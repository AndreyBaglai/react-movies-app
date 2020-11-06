import React, { useState, useEffect } from 'react';
import Movie from'./components/Movie';

import './App.css';

const API_KEY = 'f29cbeafe556227a999c9277467da814';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH = `https://api.themoviedb.org/3/search?&api_key=${API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(data => {
      console.log(data);
      setMovies(data.results);
    });
  }, [])

  return (
    <div className="container">
      {movies.length ? movies.map(movie => {
        return <Movie key={movie.id} {...movie} />
      }) : ''}
    </div>
  );
}

export default App;
