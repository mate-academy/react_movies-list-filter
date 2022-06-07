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

  const descriptionParts = (query.length > 0)
    ? description
      .toLocaleLowerCase()
      .split(query.toLocaleLowerCase())
    : [description];

  const titleParts = (query.length > 0)
    ? title
      .toLocaleLowerCase()
      .split(query.toLocaleLowerCase())
    : [title];

  const commonDescParts = descriptionParts
    .reduce((prevs: string[], current, index) => {
      const start = prevs.join('').length;
      const end = start + current.length;
      const offset = query.length * index;

      const part = description.slice(start + offset, end + offset);

      return [...prevs, part];
    }, []);

  const highlightedDescParts = descriptionParts
    .reduce((prevs: string[], _, index) => {
      const start = commonDescParts
        .slice(0, index + 1).join('').length;
      const end = start + query.length;
      const offset = query.length * index;

      const part = description.slice(start + offset, end + offset);

      return [...prevs, part];
    }, []);

  const commonTitleParts = titleParts
    .reduce((prevs: string[], current, index) => {
      const start = prevs.join('').length;
      const end = start + current.length;
      const offset = query.length * index;

      const part = title.slice(start + offset, end + offset);

      return [...prevs, part];
    }, []);

  const highlightedTitleParts = titleParts
    .reduce((prevs: string[], _, index) => {
      const start = commonTitleParts
        .slice(0, index + 1).join('').length;
      const end = start + query.length;
      const offset = query.length * index;

      const part = title.slice(start + offset, end + offset);

      return [...prevs, part];
    }, []);

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
              {
                commonTitleParts.map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <React.Fragment key={`${commonTitleParts[index]}${index}`}>
                    {commonTitleParts[index]}
                    {
                      (index < highlightedTitleParts.length)
                      && (
                        <span className="card__highlighted">
                          {highlightedTitleParts[index]}
                        </span>
                      )
                    }
                  </React.Fragment>
                ))
              }
            </p>
          </div>
        </div>

        <div className="content">
          {
            commonDescParts.map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={`${commonDescParts[index]}${index}`}>
                {commonDescParts[index]}
                {
                  (index < highlightedDescParts.length)
                  && (
                    <span className="card__highlighted">
                      {highlightedDescParts[index]}
                    </span>
                  )
                }
              </React.Fragment>
            ))
          }
          <br />
          <a href={imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
  );
};
