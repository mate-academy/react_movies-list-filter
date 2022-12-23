export function filterMovie(
  list: Movie[],
  query: string,
): Movie[] {
  const filteredList = list.filter(movie => {
    const check = (field: Movie[keyof Movie]) : boolean => {
      return field
        .toLowerCase()
        .includes(query.trim().toLowerCase());
    };

    const condition1 = check(movie.title);

    const condition2 = check(movie.description);

    return condition1 || condition2;
  });

  return filteredList;
}
