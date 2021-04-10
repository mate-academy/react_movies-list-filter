import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchMovie } from './components/SearchMovie';

export class App extends Component {
  state = {
    query: '',
    visibleMovies: [...moviesFromServer],
  }

  showSearchedMovies = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const newVisibleMovies = [...moviesFromServer].filter(
      movie => (movie.title.toLowerCase().includes(inputValue)
      || movie.description.toLowerCase().includes(inputValue)
      ),
    );

    this.setState({
      query: inputValue,
      visibleMovies: newVisibleMovies,
    });
  }

  render() {
    const { query, visibleMovies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie
            query={query}
            showSearchedMovies={this.showSearchedMovies}
          />
          {/* <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  value={query}
                  onChange={
                    this.showSearchedMovies
                  }
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                />
              </div>
            </div>
          </div> */}

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
