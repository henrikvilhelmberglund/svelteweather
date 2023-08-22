<script>
	export let data;
</script>

<main class="flex max-w-[900px] flex-col items-start px-48 pt-32">
	<h1 class="text-3xl font-bold">{data.city}</h1>
	<h2 class="text-2xl font-bold text-gray-600">{data.country}</h2>
	<div class="pt-8">
		<p>Current local date and time</p>
		<p>time here</p>
	</div>
</main>

{JSON.stringify(data)}

<style>
</style>
