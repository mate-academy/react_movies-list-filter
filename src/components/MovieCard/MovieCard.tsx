import React from 'react';
import './MovieCard.scss';

interface Props {
  movie: Movie;
  query: string;
}

export const MovieCard: React.FC<Props> = ({ movie, query }) => {
  const {
    imdbUrl, imgUrl, description, title,
  } = movie;
  const lowerCaseQuery = query.toLowerCase();
  const filterConditions = title.toLowerCase().includes(lowerCaseQuery)
  || description.toLowerCase().includes(lowerCaseQuery);

  if (
    (query.length > 0 && filterConditions)
    || query.length === 0) {
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
              <p className="title is-8">{title}</p>
            </div>
          </div>

          <div className="content">
            {description}
            <br />
            <a href={imdbUrl}>IMDB</a>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
