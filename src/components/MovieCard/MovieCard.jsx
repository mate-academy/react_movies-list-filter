import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';
import Highlighter from 'react-highlight-words';

export const MovieCard = (
  {
    title,
    description,
    imgUrl, imdbUrl,
    searchQuery,
  },
) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={imgUrl}
          alt="Film logo"
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="images/imdb-logo.jpeg"
              alt="imdb"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-8">
            <Highlighter
              highlightClassName="higlightWords"
              searchWords={[searchQuery]}
              textToHighlight={title}
            />
          </p>
        </div>
      </div>

      <div className="content">
        <Highlighter
          highlightClassName="higlightWords"
          searchWords={[searchQuery]}
          textToHighlight={description}
        />
        <br />
        <a href={imdbUrl}>IMDB</a>
      </div>

    </div>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  description: '',
};
