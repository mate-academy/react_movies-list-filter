/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { TextStyle } from '../TextStyle';
import './MovieCard.scss';

export const MovieCard = ({ title, description, imgUrl, imdbUrl, searchTerm, isHighlighted }) => (
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
          <p className="title">
            <TextStyle data={title} isHighlighted={isHighlighted} searchTerm={searchTerm} />

          </p>
        </div>
      </div>

      <div className="content">
        <TextStyle data={description} isHighlighted={isHighlighted} searchTerm={searchTerm} />
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
  searchTerm: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
};

MovieCard.defaultProps = {
  description: '',
};
