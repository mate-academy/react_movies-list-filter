export const filterMovies = (movies:Movie[], searchQuery:string) => {
  const searchQueryNormilized = searchQuery.toLowerCase().trim();

  return movies.filter(movie => {
    const stringToCheck = `
    ${movie.title.toLowerCase()}
    ${movie.description.toLowerCase()}
    `;

    return stringToCheck.includes(searchQueryNormilized);
  });
};
