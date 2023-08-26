export function filterMoviesHelper(
  movie: Movie, searchTermParam: string,
): boolean {
  const lowerSearchTerm = searchTermParam.toLowerCase().trim();

  return (
    movie.title.toLowerCase().includes(lowerSearchTerm)
    || movie.description.toLowerCase().includes(lowerSearchTerm)
  );
}
