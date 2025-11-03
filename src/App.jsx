// src/App.jsx
import React from 'react';
import './App.css';
import MovieGrid from './components/MovieGrid';
import Favorites from './components/Favorites';
export default function App() {
  return (
    <div className="app-container">
      <Favorites />
      <MovieGrid />
    </div>
  );
}