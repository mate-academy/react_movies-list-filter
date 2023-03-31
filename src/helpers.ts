export const searchQueryIn = (field: string, query: string) => (
  field.toLowerCase().includes(query.toLowerCase().trim())
);
