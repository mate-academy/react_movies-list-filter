/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Film = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

type State = {
  query: string;
  films: Film[]
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    films: moviesFromServer,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState(() => ({
      query: value,
      films: moviesFromServer.filter(film => {
        const valueLowerCase = value.toLowerCase();
        const titleLowerCase = film.title.toLowerCase();
        const descriptionLowerCase = film.description.toLowerCase();

        return (titleLowerCase.includes(valueLowerCase)
          || descriptionLowerCase.includes(valueLowerCase));
      }),
    }));
  };

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
                  value={this.state.query}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.films} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
