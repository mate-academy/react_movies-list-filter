import React from 'react';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import './App.scss';

type State = {
  query: string;
  movies: Movie[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    movies: [...moviesFromServer as Movie[]],
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: e.target.value,
    });
  };

  getVisibleMovies = () => {
    const { query, movies } = this.state;

    let visibleMovies = movies;

    if (query) {
      const lowerQuery = query.toLowerCase();

      visibleMovies = movies
        .filter(movie => movie.title.toLowerCase().includes(lowerQuery)
        || movie.description.toLowerCase().includes(lowerQuery));
    }

    return visibleMovies;
  };

  render() {
    const { query } = this.state;
    const visibleMovies = this.getVisibleMovies();

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <Search query={query} action={this.handleChange} />
          </div>

          { visibleMovies.length !== 0 && (
            <MoviesList movies={visibleMovies} />
          )}
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
