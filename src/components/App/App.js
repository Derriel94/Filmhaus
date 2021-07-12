import React from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import SearchBar from '../SearchBar/SearchBar';


function App() {
  return (
  	<div className="App">
  	<h2>FILMHAUS</h2>
  	<SearchBar />
  	<MovieList />
  	</div>
  );
}

export default App;
