// src/components/MovieGrid.jsx
import React from 'react';
import MovieCard from './MovieCard';
const sampleMovies = [ /* {id, title, poster} */ ];
export default function MovieGrid() {
  return (
    <div className="movie-grid">
      {sampleMovies.map(m => <MovieCard key={m.id} movie={m} />)}
    </div>
  );
}