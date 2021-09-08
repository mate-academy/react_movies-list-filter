import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

type State = {};

export class App extends React.Component<{}, State> {
  state: State = {};

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <Search movies={moviesFromServer} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
