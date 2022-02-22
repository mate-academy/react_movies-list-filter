import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  onChangeFunction = (value: string): void => {
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;
    const visibleMovies = [...moviesFromServer].filter(({ title, description }) => (
      title.toLowerCase().includes(query.toLocaleLowerCase().trim())
      || description.toLowerCase().includes(query.toLocaleLowerCase())
    ));

    return (
      <div className="page">
        <div className="page-content">
          <Search value={this.state.query} onChange={this.onChangeFunction} />

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
