import React from 'react';

type Props = {
  movies: Movie[];
  handleMoviesChange: (newMovies: Movie[]) => void;
};

type State = {
  query: string;
};

export class SearchBox extends React.Component<Props, State> {
  state: State = {
    query: '',
  };

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });

    const newMovies = this.props.movies.filter(({ title, description }) => {
      const queryNomalized = this.state.query.toLowerCase();

      return title.toLowerCase().includes(queryNomalized)
      || description.toLowerCase().includes(queryNomalized);
    });

    this.props.handleMoviesChange(newMovies);
  };

  render() {
    const { query } = this.state;

    return (
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
              onChange={this.handleSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}
