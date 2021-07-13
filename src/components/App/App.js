import React from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import SearchBar from '../SearchBar/SearchBar';

const movie = {
	'imgSrc': '../Movie/tangled.jpg',
	'name': 'Tangled',
	'category': 'Animation',
	'producer': 'Disney',
	'characters': 'Repunzel, Flynn Rider, Pascal, Maximus',
};

const movies = [movie, movie, movie, movie, movie, movie];

function App() {
  return (
  	<div className="App">
  	<h2>FILMHAUS</h2>
  	<SearchBar />
  	<MovieList movies={movies} />
  	</div>
  );
}

export default App;
