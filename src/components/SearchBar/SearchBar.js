import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {term:''};
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);

	}
	handleTermChange(event) {
		this.setState({term: event.target.value});
	}
	handleSearch(event) {
		this.props.searchTmdb(this.state.term);
		event.preventDefault();
	}
	render() {
		return (
		<div className="SearchBar">
		  <div className="SearchBar-fields">
		    <input onChange={this.handleTermChange} placeholder="Movies" />
		  </div>
		  <div className="SearchBar-submit">
		    <button onClick={this.handleSearch}>Find Your Movie!</button>
		  </div>
		</div>
		);
	}
}

export default SearchBar;