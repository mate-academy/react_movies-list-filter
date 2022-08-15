import React, { useCallback } from 'react';
import './MovieCard.scss';

function hightlight(filter: string, text: string) {
  if (!filter) {
    return text;
  }

  const regexp = new RegExp(filter, 'ig');
  const matchValue = text.match(regexp);

  if (matchValue) {
    return text.split(regexp).map((symbol, index, array) => {
      if (index < array.length - 1) {
        const matchSymbol = matchValue.shift();

        return (
          <>
            {symbol}
            <span className="hightlight">{matchSymbol}</span>
          </>
        );
      }

      return symbol;
    });
  }

  return text;
}

interface Props {
  movie: Movie;
  filter: string;
}

export const MovieCard: React.FC<Props> = (props) => {
  const {
    imdbUrl, imgUrl, description, title,
  } = props.movie;

  const light = useCallback((text: string) => {
    return hightlight(props.filter, text);
  }, [props.filter]);

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
            <p className="title is-8">{light(title)}</p>
          </div>
        </div>

        <div className="content">
          {light(description)}
          <br />
          <a href={imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
  );
};
