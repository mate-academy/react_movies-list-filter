function normalizeText(text) {
  return text
    .split(' ')
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

export function filterMoviesByQuery(movies, query) {
  return movies.filter(({ title, description }) => {
    const normalizeTitle = normalizeText(title);
    const normalizeDescription = normalizeText(description);
    const normalizeSearchQuery = normalizeText(query);

    const foundQuetyInTitle = normalizeTitle.includes(normalizeSearchQuery);
    const foundQuetyInDescription = normalizeDescription
      .includes(normalizeSearchQuery);

    return foundQuetyInTitle || foundQuetyInDescription;
  });
}
