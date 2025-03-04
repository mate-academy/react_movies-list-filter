import { Movie } from '../Types/Movie';

export function getFilteredMovies(query: string, moviesList: Movie[]) {
  const searchQuery = query.toLowerCase().trim();

  return moviesList.filter(movie => {
    const allContent = (movie.title + movie.description).toLowerCase();

    if (allContent.includes(searchQuery)) {
      return true;
    }

    return false;
  });
}
