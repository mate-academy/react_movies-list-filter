import React, { PureComponent } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { FilteredList } from './components/FilteredList';

export class App extends PureComponent {
  render() {
    return (
      <div className="page">
        <div className="page-content">
          <FilteredList list={moviesFromServer} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
