export const checkMovie = (
  movieInfo: string,
  searchQuery: string,
): boolean => {
  return movieInfo.toLowerCase()
    .includes(searchQuery.toLowerCase().trim());
};
