import moviesFromServer from './api/movies.json';

export const getMoviesByQuery = (
  query: string,
) => moviesFromServer.filter(movie => {
  const {
    title,
    description,
  } = movie;

  const isRightTitle = title.toLowerCase().includes(query);
  const isRightDescription = description.toLowerCase().includes(query);

  return isRightTitle || isRightDescription;
});
