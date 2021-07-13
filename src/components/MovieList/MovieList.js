import React from 'react';
import Movie from '../Movie/Movie.js';
import './MovieList.css';

class MovieList extends React.Component {
	render() {
		return (
		<div className="MovieList">
			{this.props.movies.map(movie => {
					return <Movie movie={movie} />;
			})}
		</div>
		);
	}
	
}

export default MovieList;