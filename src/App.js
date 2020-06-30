import React, { Component } from 'react';
import moviesFromServer from './api/movies.json';
import { SideBar } from './components/SideBar/SideBar';
import { PageContent } from './components/PageContent/PageContent';
import './App.scss';

export class App extends Component {
  state = {
    query: [...moviesFromServer],
  };

  searchedPhrase = (event) => {
    const phrase = event.target.value.toLowerCase();

    this.setState({
      query: moviesFromServer.filter(movie => (
        movie.description.toLowerCase().includes(phrase)
          || movie.title.toLowerCase().includes(phrase)
      )),
    });
  }

  render() {
    return (
      <div className="page">
        <PageContent
          onChange={this.searchedPhrase}
          movies={this.state.query}
        />
        <SideBar />
      </div>
    );
  }
}
