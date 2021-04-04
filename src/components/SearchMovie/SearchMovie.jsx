import React from 'react';
import PropTypes from 'prop-types';

export class SearchMovie extends React.Component {
  state = {
    moviename: '',
  };

  render() {
    const { moviename } = this.state;
    const { handleChange } = this.props;

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
              name="movieName"
              value={moviename}
              onChange={(event) => {
                this.setState({ moviename: event.target.value });
                handleChange(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchMovie.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
