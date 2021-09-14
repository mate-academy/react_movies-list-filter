import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';
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

  getFilteredMovies = () => {
    const { movies, query } = this.state;
    const lowercaseQuery = query.toLowerCase();
    const filteredMovies = movies.filter(movie => {
      const { title, description } = movie;

      const conditions = [
        title.toLowerCase().includes(lowercaseQuery),
        description.toLowerCase().includes(lowercaseQuery),
      ];

      return conditions.some(Boolean);
    });

    return filteredMovies;
  };

  changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const filteredMovies = this.getFilteredMovies();

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar onChangeCallback={this.changeHandler} />

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
