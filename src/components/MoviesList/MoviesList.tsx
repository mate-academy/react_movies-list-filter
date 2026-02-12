import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[]; // Lista de filmes já filtrada recebida do componente pai (App)
}

// Componente responsável por renderizar a grade de filmes
// Itera sobre o array recebido e delega cada item ao MovieCard
export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
