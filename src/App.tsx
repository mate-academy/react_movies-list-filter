import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  getVisibleMovies = (): Movie[] => {
    const { query } = this.state;

    const queryInLoweCase = query.toLowerCase();

    const visibleMovies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(queryInLoweCase)
      || movie.description.toLowerCase().includes(queryInLoweCase)
    ));

    return visibleMovies;
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={this.changeHandle}
                />
              </label>
            </div>
          </div>

          <MoviesList movies={this.getVisibleMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
