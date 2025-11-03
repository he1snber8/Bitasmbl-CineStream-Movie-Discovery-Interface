// src/components/MovieCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
export default function MovieCard({ movie }) {
  return (
    <motion.div
      className="movie-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={movie.poster} alt={movie.title} />
    </motion.div>
  );
}