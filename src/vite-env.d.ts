/// <reference types="vite/client" />

// Tipo global que representa um filme do catálogo (src/api/movies.json)
// Declarado globalmente para evitar importações repetidas nos componentes
interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string; // Identificador único usado como key na renderização de listas
}
