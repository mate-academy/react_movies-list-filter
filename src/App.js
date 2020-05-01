import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    text: '',
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  render() {
    const { text } = this.state;
    const i = 'i';
    const regesp = new RegExp(text, i);

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  value={this.state.text}
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList
            movies={
              [...moviesFromServer].filter((item) => {
                const result = item.title.split('');

                result.length -= (result.length - text.length);

                return result.join('').match(regesp);
              })}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
