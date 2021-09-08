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
    this.setState({
      query: event.target.value,
    });
  };

  filterMovies = () => {
    const query = this.state.query.toLowerCase();

    return moviesFromServer.filter(
      movie => {
        const { title, description } = movie;

        return title.toLowerCase().includes(query)
          || description.toLowerCase().includes(query);
      },
    );
  };

  render() {
    const visibleMovies = this.filterMovies();

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar query={this.state.query} queryChange={this.handleChange} />
          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
