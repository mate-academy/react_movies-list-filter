import React from 'react';
import { MoviesList } from '../MoviesList';

interface Props {
  movies: Movie[];
}

interface State {
  query: string;
  visibleMovies: Movie[];
}

export class Search extends React.Component<Props, State> {
  state: State = {
    query: '',
    visibleMovies: this.props.movies,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  getVisibleMovies = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await this.handleChange(event);

    const { movies } = this.props;
    const { query } = this.state;

    const visibleMovies = movies
      .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase())
        || movie.description.includes(query.toLowerCase()));

    this.setState({ visibleMovies });
  };

  render() {
    const { query, visibleMovies } = this.state;

    return (
      <>
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={this.getVisibleMovies}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </>
    );
  }
}
