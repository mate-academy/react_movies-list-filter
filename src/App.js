import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField/SearchField';
import { MoviesList } from './components/MoviesList/MoviesList';

export class App extends React.Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  searchMovie = () => {
    const searchQuery = this.state.query.toLocaleLowerCase().trim();
    const filteredMovies = this.state.movies
      .filter(movie => movie.title.toLocaleLowerCase().includes(searchQuery)
        || movie.description.toLocaleLowerCase().includes(searchQuery));

    return filteredMovies;
  }

  target = (e) => {
    this.setState({ query: e });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchField query={this.state.query} target={this.target} />
          </div>
          <MoviesList movies={this.searchMovie()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
