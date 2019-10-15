import Keys from './api_key.js'

const getWeather = {
	async fetchWeather(place) {
		let endpoint = 'http://api.weatherstack.com/current?access_key=' + Keys.weather_key + '&query=' + place + '&units=f'

		try {
			let response = await fetch(endpoint);
			if (response.ok){
				let data = await response.json();
				return {
					location: data.location.name,
					time: data.location.localtime,
					temperature: data.current.temperature,
					icon: data.current.weather_icons[0],
				};
			} else {
				throw new Error('Request failed!');
			}
		}catch(error){
			console.log(error);
		}
	}
};

export default getWeather