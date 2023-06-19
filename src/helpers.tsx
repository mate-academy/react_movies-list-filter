export const filterMovies = (movies: Movie[], searchQuery: string) => {
  const searchQueryNormilized = searchQuery.toLowerCase().trim();

  return movies.filter(movie => {
    const titleNormilized = movie.title.toLowerCase();
    const descriptionNormilized = movie.description.toLowerCase();

    const stringToCheck = `
    ${titleNormilized}
    ${descriptionNormilized}
    `;

    return stringToCheck.includes(searchQueryNormilized);
  });
};
