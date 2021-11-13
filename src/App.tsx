import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type State = {
  search:Movie[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    search: moviesFromServer,
  };

  search = (value:string) => {
    const newMovies = moviesFromServer.filter(item => (
      item.title.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
    ));

    this.setState({ search: newMovies });
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie

                <div className="control">
                  <input
                    onChange={(e) => {
                      this.search(e.currentTarget.value.trim());
                    }}
                    type="text"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={this.state.search} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
