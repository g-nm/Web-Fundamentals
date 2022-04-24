const goback = document.querySelector('.goback');
const requestLocationData = async (queryLocation) => {
	const result = await fetch(
		'https://serverlessapi.georgenmwaniki.workers.dev',
		{
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query: queryLocation }),
			method: 'POST',
		}
	);
	const data = await result.json();
	return data;
};

const createLocationElements = (locationresponses) => {
	const { origin } = location;
	const url = new URL('weather.html', origin);
	url.searchParams.append('lat', null);
	url.searchParams.append('lon', null);
	const results = document.querySelector('.results');
	const resultdetails = document.createElement('div');
	resultdetails.innerText = 'No results found';
	const locationelements = locationresponses.map(
		({ lat, lon, name, state, country }) => {
			const linktolocation = document.createElement('a');
			const locationdetails = document.createElement('span');
			const arrow = document.createElement('img');
			linktolocation.classList.add('result');
			url.searchParams.set('lat', lat);
			url.searchParams.set('lon', lon);
			linktolocation.href = url.href;
			locationdetails.innerText = `${name}, ${state}, ${country}`;
			linktolocation.addEventListener('click', (e) => {
				localStorage.setItem('name', JSON.stringify(name));
				localStorage.setItem('state', JSON.stringify(state));
				localStorage.setItem('country', JSON.stringify(country));
			});
			arrow.src = 'assets/Arrow 4.svg';
			arrow.alt = 'Arrow pointing right';
			linktolocation.append(...[locationdetails, arrow]);
			return linktolocation;
		}
	);
	if (!locationelements.length) {
		results.append(...[resultdetails]);
		return;
	}

	results.append(...locationelements);
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
	const { href } = window.location;

	const url = new URL(href);
	const queryLocation =
		url.searchParams.get('queryLocation') ||
		JSON.parse(localStorage.getItem('queryLocation'));
	if (!queryLocation) {
		location.assign('index.html');
		return;
	}
	localStorage.setItem('queryLocation', JSON.stringify(queryLocation));

	const data = await requestLocationData(queryLocation);
	createLocationElements(data);
});
