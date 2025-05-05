import React, { useState } from 'react';

// Define a type for Movie
interface Movie {
  title: string;
  description: string;
}

// Example movies data
const movies: Movie[] = [
  { title: 'Inception', description: 'A dream within a dream.' },
  { title: 'Interstellar', description: 'Exploring space and time.' },
  { title: 'The Dark Knight', description: 'Batman faces his greatest challenge.' },
];

const MoviesList: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <ul>
    {movies.map((movie, index) => (
      <li key={index}>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </li>
    ))}
  </ul>
);

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  // Filter movies based on query (case insensitive)
  const visibleMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Movies List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <MoviesList movies={visibleMovies} />
    </div>
  );
};

export default App;
