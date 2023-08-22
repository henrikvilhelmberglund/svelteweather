export const prerender = false;
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	let debug = true;
	let latitude = url.searchParams.get("latitude");
	let longitude = url.searchParams.get("longitude");
	let city = url.searchParams.get("city");
	let country = url.searchParams.get("country");

	// let latlong = params.latlong;

	if (debug) {
		return {
			currentWeather: {
				latitude: 59.3289,
				longitude: 18.072342,
				generationtime_ms: 0.8358955383300781,
				utc_offset_seconds: 7200,
				timezone: "Europe/Stockholm",
				timezone_abbreviation: "CEST",
				elevation: 24,
				current_weather: {
					temperature: 21.4,
					windspeed: 13.7,
					winddirection: 279,
					weathercode: 3,
					is_day: 1,
					time: 1692716400,
				},
			},
			city: "Stockholm",
			country: "Sweden",
			city,
			country,
		};
	} else {
		let response = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timeformat=unixtime&timezone=auto&format=json`
		);
		let currentWeather = await response.json();
		// console.log(data);

		return {
			currentWeather,
			city,
			country,
		};
	}
}
