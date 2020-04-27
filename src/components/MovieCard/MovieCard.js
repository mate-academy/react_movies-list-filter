import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export const MovieCard = (
  { title, description, imgUrl, imdbUrl, highlightedText },
) => {
  const highlightText = (text) => {
    if (!highlightedText) {
      return text;
    }

    const parts = text.split(new RegExp(`(${highlightedText})`, 'gi'));

    return parts.map((part, i) => (
      <Fragment key={`${part + i}`}>
        {part.toLowerCase() === highlightedText.toLowerCase()
          ? <span className="highlighted-text">{part}</span>
          : part}
      </Fragment>
    ));
  };

  return (
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
              {highlightText(title)}
            </p>
          </div>
        </div>

        <div className="content">
          {highlightText(description)}
          <br />
          <a href={imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  highlightedText: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  description: '',
};
