import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchPanel } from './components/SearchPanel/SearchPanel';

export class App extends Component {
  state = {
    visibleMovies: moviesFromServer,
  }

  saveSearchResults = (movies) => {
    this.setState({
      visibleMovies: movies,
    });
  }

  render() {
    const { visibleMovies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchPanel
              inputData={moviesFromServer}
              saveSearch={this.saveSearchResults}
            />
          </div>

          <MoviesList
            movies={visibleMovies}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
