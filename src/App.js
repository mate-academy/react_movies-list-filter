import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export class App extends React.Component {
  state = {
    query: '',
    search: moviesFromServer,
  };

  filterMovies = (event) => {
    this.setState({
      query: event.target.value,
    });

    this.setState(state => ({
      search: moviesFromServer
        .filter(movie => movie.title.toLowerCase()
          .includes(state.query.toLowerCase())
          || movie.description.toLowerCase()
            .includes(state.query.toLowerCase())),
    }));
  }

  render() {
    const { query, search } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <Search query={query} filterMovies={this.filterMovies} />
          <MoviesList movies={search} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
