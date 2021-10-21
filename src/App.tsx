import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchForm } from './components/SearchForm/SearchForm';

type State = {
  query: string,
  movies: Movie[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    movies: [...moviesFromServer],
  };

  findMovie = () => {
    const { query, movies } = this.state;

    if (query) {
      return movies.filter(movie => {
        return movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
          || movie.description.toLocaleLowerCase().includes(query.toLocaleLowerCase());
      });
    }

    return movies;
  };

  hendleChange = (event: any) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <form className="control">
                <SearchForm query={query} action={this.hendleChange} />
              </form>
            </div>
          </div>

          <MoviesList movies={this.findMovie()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
