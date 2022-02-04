import React from 'react';
import MovieList from './MovieList';

function Movie(props) {
  const {movies = []} = props
  return (
    <div className="movies">
      {movies.length ? movies.map((movie) => (
        <MovieList key={movie.imdbID} {...movie}/>
      )) : <h4>Nothing found</h4> }
    </div>
  );
}

export default Movie;