import React, { PureComponent } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { SearchForm } from './components/SearchForm';

export class App extends PureComponent {
  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchForm list={moviesFromServer} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
