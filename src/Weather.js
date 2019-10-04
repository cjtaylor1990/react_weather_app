import React from 'react';
import getWeather from './utils/GetWeather'

class Weather extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			weather:{},
		};

		this.getWeather = this.getWeather.bind(this);
	}

	async setStateAsync(state) {
		return new Promise((resolve) => {
			this.setState(state,resolve)
		});
	}

	async getWeather(){
		let place = "New York";
		let weather = await getWeather.fetchWeather(place);
		await this.setStateAsync({weather:weather});
		console.log(this.state.weather);
	}

	render() {
		return (
			<button onClick={this.getWeather}>
				Click Me
			</button>
		);
	}

}

export default Weather