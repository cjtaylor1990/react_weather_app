import React from 'react';
import getWeather from '../../utils/GetWeather';
import SearchBar from '../SearchBar/SearchBar.js';
import Forecast from '../Forecast/Forecast.js';

class App extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			forecasts:{},
		};

		this.getWeather = this.getWeather.bind(this);
	}

	async setStateAsync(state) {
		return new Promise((resolve) => {
			this.setState(state,resolve)
		});
	}

	async getWeather(place){
		let forecasts = await getWeather.fetchWeather(place);
		await this.setStateAsync({forecasts:forecasts});
		console.log(this.state.forecasts);
	}

	render() {
		return (
			<div className="App">
				<Forecast forecast={this.state.forecasts}/>
				<SearchBar getWeather={this.getWeather}/>
			</div>
		);
	}

}

export default App