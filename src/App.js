import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';

import './App.css';

const API_KEY = 'f29cbeafe556227a999c9277467da814';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const submitHandler = (e) => {
   e.preventDefault();

   if(searchText) {
    fetch(SEARCH_URL + searchText)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });

    setSearchText('');
   }
  };
 
  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <div className="container">
       <header>
         <form onSubmit={submitHandler}>
           <input type="search" className="search" placeholder="Search..." onChange={handleOnChange} value={searchText}/>
         </form>
        </header>
      <div className="movie-container">
        {movies.length
           > 0 && movies.map((movie) => {
              return <Movie key={movie.id} {...movie} />;
            })}
      </div>
    </div>
  );
}

export default App;
