import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {
  state = {
    query: '',
  }

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
              value={query}
              onChange={(e) => {
                this.setState({ query: e.target.value });

                this.props.onChange(e.target.value);
              }}
              placeholder="Type search word"
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};
