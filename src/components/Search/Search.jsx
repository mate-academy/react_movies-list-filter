import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  state = {
    search: '',
    filterWithDebounce: debounce(this.props.filter, 500),
  };

  handlerChange = (event) => {
    const { name, value } = event.target;
    const { filterWithDebounce } = this.state;

    this.setState({ [name]: value });
    const callback = ({ title, description }) => (
      title.toLowerCase().includes(value.toLowerCase())
      || description.toLowerCase().includes(value.toLowerCase())
    );

    filterWithDebounce(callback);
  };

  render() {
    const { search } = this.state;

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
              name="search"
              className="input"
              placeholder="Type search word"
              value={search}
              onChange={this.handlerChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  filter: PropTypes.func.isRequired,
};

function debounce(fs, ms) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => fs(...args), ms);
  };
}

export default Search;
