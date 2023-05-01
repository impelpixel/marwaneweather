// Get DOM elements
const weatherForm = document.querySelector('#weatherForm');
const weatherData = document.querySelector('#weatherData');

// Set API key and base URL
const apiKey = 'b4497f690c144bc19a7142831233004';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}`;

// Function to get weather data from API and display it on the website
const getWeatherData = (location) => {
	// Send GET request to API
	fetch(`${apiUrl}&q=${location}`)
		.then((response) => response.json())
		.then((data) => {
			// Update weather data section with API data
			const html = `
				<div class="card">
					<div class="card-title">${data.location.name}, ${data.location.region}, ${data.location.country}</div>
					<div class="card-text">${data.current.condition.text}</div>
					<img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
					<div class="card-text">${data.current.temp_c} &#8451;</div>
				</div>
			`;
			weatherData.innerHTML = html;
		})
		.catch((error) => {
			// Display error message if API request fails
			weatherData.innerHTML = `<div class="card"><div class="card-text">Error: ${error.message}</div></div>`;
		});
};

// Event listener for form submission
weatherForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const location = document.querySelector('#locationInput').value;
	getWeatherData(location);
});
