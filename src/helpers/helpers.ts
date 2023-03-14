export const findMovies = (content: string, searchText: string) => {
  return content.toLowerCase().includes(searchText.toLowerCase().trim());
};
