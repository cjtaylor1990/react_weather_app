import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {location: ""}
		this.handleSearch = this.handleSearch.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
	}

	handleLocationChange(event) {
		this.setState({location: event.target.value});
	}

	handleSearch(event) {
		this.props.getWeather(this.state.location);
		event.preventDefault();
	}

	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar-field">
					<input placeholder="Where would you like the forecast of?" onChange={this.handleLocationChange}/>
				</div>
				<div className="SearchBar-submit" onClick={this.handleSearch}>
					Get Forecast
				</div>
			</div>
		);
	}

}

export default SearchBar