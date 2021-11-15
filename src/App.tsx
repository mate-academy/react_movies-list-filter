import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

type Movie = {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({ query: value.toLowerCase() });
  };

  getVisibleMovies(movies: Movie[]): Movie[] {
    const { query } = this.state;

    if (query) {
      return movies.filter(movie => (
        movie.description.toLowerCase().includes(query)
        || movie.title.toLowerCase().includes(query)
      ))
    } else {
      return moviesFromServer;
    }
  }

  render() {
    const { query } = this.state;

    const visibleMovies = this.getVisibleMovies(moviesFromServer);

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
                    name="query"
                    value={query}
                    onChange={this.handleChange}
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                  />
                </label>
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovies}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
