import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  getFilteredMovies = () => {
    const { query } = this.state;
    const queryLowCase = query.toLowerCase();
    const filteredMovies = moviesFromServer
      .filter(movie => {
        const titleLowCase = movie.title.toLowerCase();
        const descriptionLowCase = movie.description.toLowerCase();

        return (
          titleLowCase.includes(queryLowCase) || descriptionLowCase.includes(queryLowCase)
        );
      });

    return filteredMovies;
  };

  render() {
    const filteredMovies = this.getFilteredMovies();

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar handleChange={this.handleChange} />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
