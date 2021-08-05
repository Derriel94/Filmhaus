import React from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import SearchBar from '../SearchBar/SearchBar';
import Tmdb from './../../util/Tmdb.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies : [] };
    this.searchTmdb = this.searchTmdb.bind(this);

  }

  searchTmdb(term) {
    Tmdb.searchTmdb(term)
    .then(movies => {
      this.setState({movies: movies})
    })
  }

  render() {
    return (
    	<div className="App">
    	 <h2>FILMHAUS</h2>
    	 <SearchBar searchTmdb={this.searchTmdb} />
    	 <MovieList movies={this.state.movies} />
    	</div>
    );
  }
}

export default App;
