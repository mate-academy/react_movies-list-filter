import React from 'react';
import PropTypes from 'prop-types';

export class SearchMovie extends React.Component {
  state = {
    query: '',
  }

  render() {
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
              name="query"
              value={this.state.query}
              onChange={(event) => {
                const { name, value } = event.target;

                this.setState({ [name]: value });

                this.props.handleChange(value);
              }}
              className="input"
              placeholder="Type search word"
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
