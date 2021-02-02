const cities = document.querySelector('#cities');
const button = document.querySelector('#button');
const keyword = document.querySelector('#keyword');
const test = document.querySelector('#test');
const body = document.querySelector('body');

const searchCity = (city) => {
	const url =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ce64129da731d692308f766613a1037`;
	
	fetch(url)
	.then(response => response.json())
	.then((data) => {  
		data.main.temp = Math.round(data.main.temp - 273.15);
		console.log(data.main.temp);
		test.insertAdjacentHTML('beforeEnd',`
		<p>la température de ${data.name} est de ${data.main.temp}</p>`);
		if (data.main.temp > 23){
			body.insertAdjacentHTML('beforeEnd', `<img src="jarjar.jpg">`);
		}

    })
    .catch((error) => {                 // afficher une erreur
        console.log(`Voici mon erreur ${error}`);
    });
}; 

cities.addEventListener('keypress',  (event) => {
	
	
	if (event.keyCode === 13) {	

   		 test.innerHTML = '';
		
		console.log(cities.value);
		searchCity(cities.value);
	};
	
});

// const searchAlgoliaPlaces = (event) => {fetch("https://places-dsn.algolia.net/1/places/query", {method: "POST",body: JSON.stringify({ query: event.currentTarget.value })}).then(response => response.json()).then((data) => {console.log(data.hits); // Look at local_names.default
// });};const input = document.querySelector("#search");input.addEventListener("keyup", searchAlgoliaPlaces);