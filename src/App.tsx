import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  searchMovies = () => {
    const query = this.state.query.toLowerCase();

    const searchMovies = moviesFromServer
      .filter(({ title, description }) => (
        title.toLowerCase().includes(query)
        || description.toLowerCase().includes(query)
      ));

    return searchMovies;
  };

  render() {
    const searchMovies: Movie[] = this.searchMovies();

    return (
      <div className="page">
        <div className="page-content">
          <FindMovie
            query={this.state.query}
            handleChange={this.handleChange}
          />

          <div className="show-search">
            {!searchMovies.length ? (
              'No results found'
            ) : (
              <MoviesList movies={searchMovies} />
            )}
          </div>
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
