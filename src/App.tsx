/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  searchFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  filterFilms(array: Movie[]): Movie[] {
    const { query } = this.state;

    return array.filter(film => (
      film.title.toLowerCase().includes(query.toLowerCase())
      || film.description.toLowerCase().includes(query.toLowerCase())
    ));
  }

  render() {
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
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.searchFilm}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.filterFilms(moviesFromServer)} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
