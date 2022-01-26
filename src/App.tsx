import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
  movies: Movie[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    movies: moviesFromServer,
  };

  search = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  filteredMovies = () => {
    const copyMovies = [...this.state.movies];
    const query = this.state.query.toLowerCase();

    return copyMovies.filter(movie => (
      movie.title.toLowerCase().includes(query)
      || movie.description.toLowerCase().includes(query)
    ));
  };

  render() {
    const visibleMovies = this.filteredMovies();

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={this.search}
                />
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
