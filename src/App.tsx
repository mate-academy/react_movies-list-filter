import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchInput } from './components/SearchInput/SearchInput';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  onChangeHandler = (value: string) => {
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;
    const filteredList = moviesFromServer
      .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase())
        || movie.description.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className="page">
        <div className="page-content">
          <SearchInput query={query} onChanged={this.onChangeHandler} />

          <MoviesList movies={filteredList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
