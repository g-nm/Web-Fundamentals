const params = new URLSearchParams(location.search);
const lat = params.get('lat');
const lon = params.get('lon');
const goback = document.querySelector('.goback');
const weatherIcon = document.querySelector('img.weather__icon');
const weatherLocation = document.querySelector('.weather__location');
const weatherCardIcon = document.querySelector('.weather__card-weather img');
const weatherinfotext = document.querySelector(
	'.weather__card-weather .weather__info-text'
);
const humidityinfotext = document.querySelector(
	'.weather__card-humidity .weather__info-text'
);
const visibilityinfotext = document.querySelector(
	'.weather__card-visibility .weather__info-text'
);
const windinfotext = document.querySelector(
	'.weather__card-wind .weather__info-text'
);
const temperatureinfotext = document.querySelector(
	'.weather__card-temperature .weather__info-text'
);

const requestWeatherWithCoordinates = async () => {
	const result = await fetch(
		'https://serverlessapi.georgenmwaniki.workers.dev',
		{
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query: { lat, lon } }),
			method: 'POST',
		}
	);
	const data = await result.json();
	return data;
};
const setDocumentElements = (data) => {
	const { weather, name, main, wind, visibility } = data;
	const state = JSON.parse(localStorage.getItem('state'));
	const country = JSON.parse(localStorage.getItem('country'));

	const { icon, description } = weather[0];
	const { temp, humidity } = main;
	weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
	weatherIcon.alt = description;
	weatherCardIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
	weatherCardIcon.alt = description;
	weatherLocation.innerText = `${name},${state},${country}`;
	weatherinfotext.innerText = description;
	temperatureinfotext.innerHTML = `${temp} &#x2103;`;
	humidityinfotext.innerText = `${humidity}%`;
	windinfotext.innerText = `${wind.speed} m/s`;
	visibilityinfotext.innerText = `${visibility / 1000} km`;
};
goback.addEventListener('click', (e) => {
	const { origin } = location;

	if (history.length) {
		history.back();
		return;
	}

	location.assign(`${origin}/index.html`);
});

addEventListener('load', async (e) => {
	const data = await requestWeatherWithCoordinates();
	setDocumentElements(data);
});
