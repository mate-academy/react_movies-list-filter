import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchFiled } from './components/SearchField/SearchField';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    serchFiledValue: '',
  };

  changeSerchFiledValue = (value) => {
    this.setState(prevState => ({
      serchFiledValue: value,
    }));
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchFiled changeQuery={this.changeSerchFiledValue} />

          <MoviesList
            movies={moviesFromServer}
            query={this.state.serchFiledValue}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
