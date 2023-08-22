<script>
	import Footer from "$lib/Footer.svelte";
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
	import LocationRequest from "$lib/components/LocationRequest.svelte";
</script>

<main
	class="dark:bg-primary-950 bg-primary-100 min-w-screen flex min-h-screen flex-col items-center [&>*]:m-4">
	<header>
		<ThemeSwitcher />
		<DarkModeToggle />
	</header>

	<h1 class="text-primary-900 dark:text-primary-100 text-5xl md:p-48 md:pb-0 md:pt-4">
		Svelte Weather
	</h1>
	<LocationRequest />
</main>

<Footer />

<style>
</style>
