import { Movie } from '../../type/Movie';

export function searchMovie(movieStorage: Movie[], query: string) {
  const showMovie = movieStorage.filter(movie => {
    let { title, description } = movie;

    const queryCopy = query.toLowerCase();

    title = title.toLowerCase();
    description = description.toLowerCase();

    if (query.length > 0) {
      return title.includes(queryCopy) || description.includes(query);
    }

    return movie;
  });

  return showMovie;
}
