export const checkTextIncludes = (text: string, query: string): boolean => {
  return text.toLocaleLowerCase().includes(query.toLocaleLowerCase());
};
