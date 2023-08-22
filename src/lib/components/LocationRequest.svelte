<script>
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	// Create a writable store to manage input delay
	const inputTimeout = writable(null);

	let inputValue = "";
	let locationURL;
	let locations = [];

	// Function to handle input changes
	function handleInput(event) {
		inputValue = event.target.value;

		// Clear previous timeout, if any
		if ($inputTimeout) {
			clearTimeout($inputTimeout);
		}

		// Set a new timeout to send request after 200ms of input inactivity
		$inputTimeout = setTimeout(() => {
			sendRequest();
		}, 300);
	}

	// Simulate sending a request
	async function sendRequest() {
		if (!inputValue) return;
		console.log("Sending request with input:", inputValue);
		locationURL = `https://geocoding-api.open-meteo.com/v1/search?name=${inputValue}`;

		const response = await fetch(locationURL);
		let result = await response.json();
		locations = result.results;
	}
</script>

<input
	class="w-[600px] rounded-full p-4 text-xl"
	type="text"
	on:input={handleInput}
	placeholder="Enter a city name" />

{#each locations as { name, country, latitude, longitude }}
	<article class="flex w-[600px] pl-4">
		<a href="/details?city={name}&country={country}&latitude={latitude}&longitude={longitude}">
			<h2 class="text-2xl font-bold">{name}</h2>
			<h4 class="">{country}</h4>
		</a>
	</article>
{/each}

<style>
	/* Add your styles here */
</style>
