import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
}

interface State {
  visibleMovies: Movie[];
  query: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    visibleMovies: moviesFromServer,
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    this.setState({
      visibleMovies: moviesFromServer.filter(
        movie => movie.description.toLowerCase().includes(target.value.toLowerCase())
          || movie.title.toLowerCase().includes(target.value.toLowerCase()),
      ),
      query: target.value,
    });
  };

  render() {
    const { visibleMovies, query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <div className="control">
                <label htmlFor="search-query" className="label">
                  Search movie
                  <input
                    onChange={this.handleChange}
                    value={query}
                    type="text"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
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
