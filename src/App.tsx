import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl:string,
  imdbId: string,
}

type State = {
  movies: Movie[],
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    movies: moviesFromServer,
    query: '',
  };

  textInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;

    this.setState(state => ({
      ...state,
      query,
    }));
  };

  render() {
    const moviesVisible = this.state.movies.filter(movie => (
      movie.title.toLowerCase().includes(this.state.query.toLowerCase())
      || movie.description.toLowerCase().includes(this.state.query.toLowerCase())
    ));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <div className="control">
                <label
                  htmlFor="search-query"
                  className="label"
                >
                  Search movie
                  <input
                    type="text"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    onChange={this.textInputHandler}
                  />
                </label>
              </div>
            </div>
          </div>

          <MoviesList movies={moviesVisible} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
