/// <reference types="react-scripts" />

type State = {
  query: string;
  movies: Movie[];
};

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}
