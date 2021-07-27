import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MoviesList } from './components/MoviesList';
import SearchMovie from './components/InputControl/InputControl';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      query: target.value,
    })
  }


  render() {
    const filteredMovie =  moviesFromServer
      .filter(movie => (
        movie.description.toLowerCase().includes(this.state.query.toLowerCase())
        || movie.title.toLowerCase().includes(this.state.query.toLowerCase())
      ))

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <SearchMovie query={this.state.query} eventHandler={this.handleChange}/>
            </div>
          </div>
          <MoviesList movies={filteredMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
