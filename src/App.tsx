import React from 'react';
import './App.scss';

import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';

import moviesFromServer from './api/movies.json';

type State = {
  query: string;
  movies: Movie[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    movies: moviesFromServer,
  };

  getQuery = (query: string) => {
    this.setState({ query });
  };

  changeVisibleMovies = () => {
    const { query, movies } = this.state;
    let visibleMovies = [...movies];

    // eslint-disable-next-line
    console.log(query)

    if (query) {
      const lowerQuery = query.toLowerCase();

      visibleMovies = visibleMovies.filter(movie => (
        movie.description.toLowerCase().includes(lowerQuery)
        || movie.title.toLowerCase().includes(lowerQuery)
      ));
    }

    return visibleMovies;
  };

  render() {
    const visibleMovies = this.changeVisibleMovies();

    return (
      <div className="page">
        <div className="page-content">
          <Search callback={this.getQuery} />

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
