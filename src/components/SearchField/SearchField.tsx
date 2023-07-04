interface Props {
  filterBy(arg1: string) :void;
}

export const SearchField: React.FC<Props> = ({ filterBy }) => {
  return (
    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        onChange={(e) => {
          filterBy(e.target.value);
        }}
      />
    </div>
  );
};
