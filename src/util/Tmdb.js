const api_Key = '2f888a847163d12cdc088ce3c7e9dfe3';

const Tmdb = {
	searchTmdb(term){
		return fetch(`https://corsanywhere.herokuapp.com/https://api.themoviedb.org/3/movie/0?api_key=2f888a847163d12cdc088ce3c7e9dfe3&language=en-US`, {
			headers: {
				Authorization: `Bearer ${api_Key}`,
			},
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (jsonResponse.movies) {
				return jsonResponse.movies.map(movie => ({
					id: movie.id

				}));
			}
		});
	}
};

export default Tmdb;