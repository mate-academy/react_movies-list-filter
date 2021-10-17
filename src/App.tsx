import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBox } from './SearchBox';

type State = {
  query: string
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  changeQuery = (event: string) => {
    this.setState({ query: event });
  };

  render() {
    const { query } = this.state;
    const cloneMovies = moviesFromServer.filter(movie => {
      const { title, description } = movie;

      return title.toLowerCase().includes(query.toLowerCase())
      || description.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <div className="page">
        <div className="page-content">
          <SearchBox query={this.state.query} changeQuery={this.changeQuery} />
          <MoviesList movies={cloneMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
