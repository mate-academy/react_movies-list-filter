import React from 'react';
import './MovieCard.scss';

interface Props {
  movie: Movie; // Dados de um único filme a ser exibido
}

// Componente que exibe o card individual de um filme
// Utiliza classes do Bulma CSS para estilização (card, media, content)
export const MovieCard: React.FC<Props> = ({ movie }) => {
  // Desestruturação para acesso direto às propriedades do filme
  const { imdbUrl, imgUrl, description, title } = movie;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imgUrl} alt="Film logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="images/imdb-logo.jpeg" alt="imdb" />
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
};
