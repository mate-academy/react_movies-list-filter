import moviesFromServer from './api/movies.json';

export const showFilms = (query: string) => moviesFromServer.filter(movie => {
  const movieTitleInLowerCase = movie.title.toLowerCase();
  const queryInLowerCase = query.toLowerCase();
  const descriptionInLowerCase = movie.description.toLowerCase();
  const isRightTitle = movieTitleInLowerCase.includes(queryInLowerCase);
  const isRightDescription = descriptionInLowerCase
    .includes(queryInLowerCase);

  return isRightTitle || isRightDescription;
});
