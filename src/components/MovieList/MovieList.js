import React from 'react';
import Movie from '../Movie/Movie.js';
import './MovieList.css';

class MovieList extends React.Component {
	render() {
		return (
		<div className="MovieList">
			<Movie />
			<Movie />
			<Movie />
		</div>
		);
	}
	
}

export default MovieList;