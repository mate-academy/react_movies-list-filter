import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    moviesShowed: moviesFromServer,
  };

  filterList = () => {
    this.setState({
      moviesShowed: moviesFromServer.filter((movie) => {
        const query = this.state.query.toLowerCase();

        return movie.title.toLowerCase().includes(query)
          || movie.description.toLowerCase().includes(query);
      }),
    });
  }

  handleQuery = (value) => {
    this.setState({
      query: value,
    });

    this.filterList();
  }

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <Search query={query} handleQuery={this.handleQuery} />
          <MoviesList movies={this.state.moviesShowed} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
