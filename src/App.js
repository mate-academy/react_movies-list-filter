import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchPanel } from './components/SearchPanel/SearchPanel';

export class App extends Component {
  state = {
    query: '',
    filteredMovies: [],
  };

  componentDidMount() {
    this.setState({ filteredMovies: moviesFromServer });
  }

  searchHandler = (e) => {
    const { value } = e.target;

    this.setState({ query: value });

    const filteredMoviess = [...moviesFromServer]
      .filter(el => el.title.toUpperCase().search(value.toUpperCase()) !== -1
        || el.description.toUpperCase().search(value.toUpperCase()) !== -1);

    this.setState(state => ({ filteredMovies: filteredMoviess }));
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchPanel
            query={this.state.query}
            handler={this.searchHandler}
          />
          <MoviesList movies={this.state.filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
