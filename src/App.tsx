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

type Props = {};

interface State {
  films: Movie[],
  visibleFilms: Movie[] | [],
  filterBy: string,
}

export class App extends React.Component<Props, State> {
  state: State = {
    films: moviesFromServer,
    visibleFilms: moviesFromServer,
    filterBy: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    this.setState(state => ({
      visibleFilms: state.films.filter(
        movie => movie.title.toLowerCase().includes(target.value.toLowerCase()),
      ),
      filterBy: target.value,
    }));
  };

  render() {
    const { visibleFilms, filterBy } = this.state;

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
                  value={filterBy}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>

          <MoviesList movies={visibleFilms} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
