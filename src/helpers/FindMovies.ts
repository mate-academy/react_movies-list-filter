import { Movies } from '../types/Movies';

export function findMovies(movies: Movies[], input: string) {
  if (!input.trim()) {
    return movies;
  }

  return movies.filter(
    ({ title, description }) => {
      const regex = new RegExp(input.trim(), 'ig');

      return (
        title.match(regex)
        || description.match(regex)
      );
    },
  );
}
