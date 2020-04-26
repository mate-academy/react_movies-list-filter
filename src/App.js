import React, { Component } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';

import { PageContent } from './components/PageContent/PageContent';

export class App extends Component {
  state = {};

  render() {
    return (
      <div className="page">
        <PageContent movies={moviesFromServer} />
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
