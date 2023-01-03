export function filterMovie(
  list: Movie[],
  query: string,
): Movie[] {
  const check = (field: Movie[keyof Movie]): boolean => {
    const redactedQuery = query.toLowerCase()
      .split(' ')
      .filter(Boolean)
      .join(' ');

    return field
      .toLowerCase()
      .includes(redactedQuery);
  };

  const filteredList = list.filter(movie => {
    const condition1 = check(movie.title);

    const condition2 = check(movie.description);

    return condition1 || condition2;
  });

  return filteredList;
}
