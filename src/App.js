import React, { PureComponent } from 'react';
import './App.scss';
import { Search } from './components/Search/Search';

export class App extends PureComponent {
  render() {
    return (
      <div className="page">
        <Search />

        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
