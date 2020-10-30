import React from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends React.Component {
  handleChange = (event) => {
    this.props.filterByQuery(event);
  }

  render() {
    const { enteredText } = this.props;

    return (
      <div className="field">
        <label htmlFor="enteredText" className="label">
          Search movie
        </label>
        <div className="control">
          <input
            type="text"
            id="enteredText"
            className="input"
            placeholder="Type search word"
            name="enteredText"
            value={enteredText}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  filterByQuery: PropTypes.func.isRequired,
  enteredText: PropTypes.string.isRequired,
};
