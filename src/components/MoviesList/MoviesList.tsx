import React from 'react';

type Movie = {
  title: string;
  description: string;
};

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </li>
      ))}
    </ul>
  );
};
