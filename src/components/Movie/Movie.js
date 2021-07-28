import React from 'react';
import './Movie.css';


class Movie extends React.Component {

	render() {
		const { movie } = this.props;
		return(
			<div className="Movie">
				<div className="img-container">
					<img src={movie.imgSrc} alt='Image of tanlged thumbnail' />
						<h2>{movie.name}</h2>
				</div>
				<div className="info-container">
					<p>{movie.category}</p>
					<p>{movie.producer}</p>
					<p>{movie.characters}</p>
				</div>
			</div>
			);
	}
}

export default Movie;