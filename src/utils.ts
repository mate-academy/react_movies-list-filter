export const getVisibleMovies = (movies: Movie[], query: string) => {
  const regex = new RegExp(query.trim(), 'i');

  return movies.filter((movie: Movie) => (
    regex.test(movie.title) || regex.test(movie.description)
  ));
};
