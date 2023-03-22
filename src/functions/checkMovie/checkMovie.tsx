export const checkMovie = (
  movieInfo: string,
  searchQuery: string,
) => {
  return movieInfo.toLowerCase()
    .includes(searchQuery.toLowerCase().trim());
};
