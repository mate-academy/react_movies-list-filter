import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Filter } from './components/Filter';

export class App extends Component {
  state = {
    query: '',
  };

  onChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  filterMoviesList = () => (
    [...moviesFromServer].filter(
      movie => (
        movie.title.toLocaleLowerCase()
          .includes(this.state.query.toLocaleLowerCase())
        || movie.description.toLocaleLowerCase()
          .includes(this.state.query.toLocaleLowerCase())
      ),
    )
  )

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <Filter
              onChange={this.onChange}
              query={this.state.query}
            />
          </div>

          <MoviesList movies={this.filterMoviesList()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
