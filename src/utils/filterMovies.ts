import Movie from '../types/Movie';

function filterMovies(movies: Array<Movie>, query: string) {
  return movies.filter(movie => {
    const queryLower = query.toLowerCase();
    const hasInTitle = movie.title.toLowerCase().includes(queryLower);
    const hasInDesc = movie.description.toLowerCase().includes(queryLower);

    return hasInTitle || hasInDesc;
  });
}

export default filterMovies;
