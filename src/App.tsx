import React from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  searchMovies = () => {
    const { query } = this.state;

    const movies: Movie[] = [...moviesFromServer].filter(movie => (
      movie.title.toLowerCase().includes(query) || movie.description.toLowerCase().includes(query)
    ));

    return movies;
  };

  render() {
    const foundFilms = this.searchMovies();

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar handleChange={this.handleChange} />
          <MoviesList movies={foundFilms} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
