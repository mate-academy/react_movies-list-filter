import React, { Component } from 'react';
import './App.scss';
import { SearchMovie } from './components/SearchMovie';

export class App extends Component {
  state = {};

  render() {
    return (
      <div className="page">
        <div className="page-content">

          <SearchMovie />

        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
