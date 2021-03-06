import React from 'react';
import './Forecast.css';

class Forecast extends React.Component {

	render() {
		return (
			<div className="Forecast">
				<div className="Forecast-title">
					<h1> My Weather App </h1>
				</div>
				<div className="Forecast-body">
					<div className="Forecast-picture">
						<img src={this.props.forecast.icon} alt={this.props.location}/>
					</div>
					<div className="Forecast-info">
						<p>{this.props.forecast.location}</p>
						<p>{this.props.forecast.temperature}</p>
						<p>{this.props.forecast.time}</p>
					</div>
				</div>
			</div>
		);
	}

}

export default Forecast;