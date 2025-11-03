// src/components/Favorites.jsx
import React, { useState } from 'react';
export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  // TODO: add logic to add/remove favorites
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? <p>No favorites yet</p> : <ul>{favorites.map(f => <li key={f.id}>{f.title}</li>)}</ul>}
    </div>
  );
}