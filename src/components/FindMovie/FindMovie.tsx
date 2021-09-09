type Props = {
  query: string,
  addQueryValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

export const FindMovie = (props: Props) => {
  const { query, addQueryValue } = props;

  return (
    <div className="box">
      <div className="field">
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <div className="control">
          <input
            type="text"
            id="search-query"
            className="input"
            placeholder="Type search word"
            value={query}
            onChange={addQueryValue}
          />
        </div>
      </div>
    </div>
  );
};
