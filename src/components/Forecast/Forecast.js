import React from 'react';
import './Forecast.css';

class Forecast extends React.Component {

	render() {
		console.log(this.props.forecast);
		return (
			<div className="Forecast">
				<div className="Forecast-picture">
					<img src={this.props.forecast.icon} alt={this.props.location}/>
				</div>
				<div className="Forecast-info">
					<h1>{this.props.forecast.location}</h1>
					<h2>{this.props.forecast.temperature}</h2>
					<h2>{this.props.forecast.time}</h2>
				</div>
			</div>
		);
	}

}

export default Forecast;