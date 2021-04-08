import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

export class App extends Component {
  state = {
    query: '',
    visibleMovie: moviesFromServer,
  };

  handleChange = (e) => {
    const newValue = e.target.value.toLowerCase();
    const newVisibleMovie = [...moviesFromServer].filter(movie => (
      movie.title.toLowerCase().includes(newValue)
       || movie.description.toLowerCase().includes(newValue)
    ));

    this.setState({
      query: newValue,
      visibleMovie: newVisibleMovie,
    });
  }

  render() {
    const { visibleMovie, query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <Search
              query={query}
              handleChange={this.handleChange}
            />
          </div>

          <MoviesList movies={visibleMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
