import React from 'react';

type Props = {
  query: string;
  changeQuery: (value: string) => void;
};

export const SearchField: React.FC<Props> = (props) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.changeQuery(event.target.value);
  };

  return (
    <div className="box">
      <div className="field">
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <div className="control">
          <input
            name="filmFilter"
            type="text"
            id="search-query"
            className="input"
            value={props.query}
            onChange={changeHandler}
            placeholder="Type search word"
          />
        </div>
      </div>
    </div>
  );
};
