import React, { ChangeEvent } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Movie = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

type State = {
  query:string;
  moviesList:Movie[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    moviesList: moviesFromServer,
  };

  handleChangeEvent = (event:ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const initialMoviesList = moviesFromServer;

    this.setState({
      query: value.toLowerCase(),
    });

    this.setState({
      moviesList: initialMoviesList.filter(
        movie => {
          return (movie.title.toLowerCase().includes(value)
            || movie.description.toLowerCase().includes(value));
        },
      ),
    });
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
                  onChange={this.handleChangeEvent}
                  value={this.state.query}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.moviesList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
