import React from 'react';

interface Props {
  onFilter: (query: string) => void;
}

interface State {
  query: string;
}

export class Search extends React.Component<Props, State> {
  state: State = {
    query: '',
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { onFilter } = prevProps;
    const { query } = this.state;

    if (prevState !== this.state) {
      onFilter(query);
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  render() {
    const { query } = this.state;

    return (
      <>
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
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
