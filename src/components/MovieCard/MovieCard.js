import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export class MovieCard extends React.PureComponent {
  render() {
    const { title, description, imgUrl, imdbUrl } = this.props.movieCard;
    const { searchString } = this.props;
    const redactedString = searchString.toLowerCase();
    const foundInTitle
      = title.toLowerCase().indexOf(redactedString);
    const foundInDescription
      = description.toLowerCase().indexOf(redactedString);

    if (foundInTitle >= 0 || foundInDescription >= 0) {
      return (
        <>
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
        </>
      );
    }

    return <></>;
  }
}

MovieCard.propTypes = {
  movieCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
  }),

  searchString: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  movieCard: {
    description: '',
  },
};
