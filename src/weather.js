const url = 'http://api.weatherstack.com/current';
const keyString = '?access_key=' + Keys.weather_key;
const queryString = '&query=';

const getWeather = async (place) => {
	const endpoint = url+keyString+queryString+place;
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

const displayWeather = async (place) => {
	let weather = await getWeather(place);
	document.getElementById("weatherIcon").src = weather.icon;
	document.getElementById("locationName").innerHTML = weather.location;
	document.getElementById("temperature").innerHTML = weather.temperature;
	document.getElementById("localTime").innerHTML = weather.time;
}
displayWeather('London');
