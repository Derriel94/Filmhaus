import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {term:''};
		this.sortByOptions = {
			'Best Match': 'best_match',
			'Hightest Rated': 'rating',
			'Most Reviewed': 'review_count',
		};
	}
	render() {
		return (
		<div className="SearchBar">
		  <div className="SearchBar-fields">
		    <input placeholder="Movies" />
		  </div>
		  <div className="SearchBar-submit">
		    <a href="">Find Your Movie!</a>
		  </div>
		</div>
		);
	}
}

export default SearchBar;