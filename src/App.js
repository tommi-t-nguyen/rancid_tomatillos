import React, { Component } from 'react';
import './App.css';
import Movies from './Components/Movies/Movies.js';
import MovieDetail from './Components/MovieDetail/MovieDetail.js';
import { fetchAllMovies } from './apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      view:'home'
    }
  }
  componentDidMount(){
    fetchAllMovies()
    .then(data => this.setState({movies: data.movies}))
  }

  switchView = (views) => {
    this.setState({view:views})
  }

  render() {
    if (this.state.view === 'home') {
      return (
        <main className="App">
          <h1>Rotten Tomatillos</h1>
          <Movies movies={this.state.movies} switchView={this.switchView}/>
        </main>
      )
    }

    if (this.state.view === 'movie') {
      return (
        <main className="App">
          <MovieDetail />
          <button onClick={() => this.switchView('home')}>clickme</button>
        </main>
      )
    }
  }
}


export default App;
