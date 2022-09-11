import React, { BaseSyntheticEvent } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function lowerIncluder(state1: string, state2: string): boolean {
  return state1.toLowerCase().includes(state2.toLowerCase());
}

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

export class App extends React.Component {
  state = {
    query: '',
  };

  setValue = (input: BaseSyntheticEvent) => {
    this.setState({ query: input.target.value });
  };

  filterMovies = (list: Movie[]) => {
    const { query } = this.state;
    const filteredList = [...list];

    return filteredList.filter(({ title, description }) => (
      lowerIncluder(title, query)
      || lowerIncluder(description, query)
    ));
  };

  render() {
    const visibleMovies = this.filterMovies(moviesFromServer);

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.setValue}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovies} />
        </div>

        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
