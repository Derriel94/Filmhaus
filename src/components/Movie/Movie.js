import React from 'react';
import './Movie.css';

const movie = {
	'imgSrc': '../Movie/tangled.jpg',
	'name': 'Tangled',
	'category': 'Animation',
	'producer': 'Disney',
	'characters': 'Repunzel, Flynn Rider, Pascal, Maximus',
};

class Movie extends React.Component {
	render() {
		return(
			<div className="Movie">
				<div className="img-contatiner">
					<img src={movie.imgSrc} />
						<h2>{movie.name}</h2>
				</div>
				<div className="info-containter">
					<p>{movie.category}</p>
					<p>{movie.producer}</p>
					<p>{movie.characters}</p>
				</div>
			</div>
			);
	}
}

export default Movie;