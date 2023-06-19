export const filteredMovies = (movies: Movie[], searchQuery: string) => {
  const searchedQuery = searchQuery.trim().toLowerCase();

  return movies.filter(movie => {
    const checkString = `
    ${movie.title.toLowerCase()}
    ${movie.description.toLowerCase()}
  `;

    return checkString.includes(searchedQuery);
  });
};
