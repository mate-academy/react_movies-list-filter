import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  visibleMovies: Movie[];
  inputFilter: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    visibleMovies: [...moviesFromServer],
    inputFilter: '',
  };

  search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      inputFilter: value,
      visibleMovies: this.filterMovie(moviesFromServer, value),
    });
  };

  filterMovie = (movies: Movie[], value: string) => {
    return movies
      .filter(item => (item.title.toLowerCase()
        .includes(value.toLowerCase()))
          || item.description.toLowerCase()
            .includes(value.toLowerCase()));
  };

  render() {
    const { visibleMovies, inputFilter } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <div className="control">
                <label htmlFor="search-query" className="label">
                  Search movie
                  <input
                    type="text"
                    id="search-query"
                    name="inputFilter"
                    className="input"
                    placeholder="Type search word"
                    value={inputFilter}
                    onChange={this.search}
                  />
                </label>

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
