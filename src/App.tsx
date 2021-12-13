import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type State = {
  moviesList: Movie[]
  searchParam: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    moviesList: moviesFromServer,
    searchParam: '',
  };

  render() {
    const { moviesList, searchParam } = this.state;

    let visibleMovies = moviesList;

    if (searchParam.length > 0) {
      visibleMovies = moviesList.filter(movie => {
        const { title, description } = movie;

        return title.toLowerCase().includes(searchParam.toLowerCase())
          || description.toLowerCase().includes(searchParam.toLowerCase());
      });
    }

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
                  value={this.state.searchParam}
                  onChange={(event) => {
                    this.setState({ searchParam: event.target.value });
                  }}
                />
              </label>
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
