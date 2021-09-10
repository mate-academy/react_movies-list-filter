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

  addQueryValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  searchMovie = () => {
    const query = this.state.query.toLowerCase();

    const searchMovie = moviesFromServer
      .filter(({ title, description }) => (
        title.toLowerCase().includes(query)
        || description.toLowerCase().includes(query)
      ));

    return searchMovie;
  };

  render() {
    const searchMovie: Movie[] = this.searchMovie();

    return (
      <div className="page">
        <div className="page-content">
          <FindMovie
            query={this.state.query}
            addQueryValue={this.addQueryValue}
          />

          <div className="show-search">
            {!searchMovie.length && 'No results found'}
            <MoviesList movies={searchMovie} />
          </div>
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
