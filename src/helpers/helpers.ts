export const checkIncludes = (stringFromMovie:string, fQuery: string) => {
  return stringFromMovie.toLowerCase().includes(
    fQuery.toLowerCase().trim(),
  );
};
