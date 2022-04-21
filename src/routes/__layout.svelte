<script>
	import Header from '$lib/header/Header.svelte';
	import LeftMenu from '$lib/left-menu/LeftMenu.svelte';

	import '../css/app.css';
	import '../css/flex.css';
	import '../css/layout.css';
</script>

<Header />
<LeftMenu />

<main>
	<slot />
</main>

<style>
	main {
		padding: 9vw 5vw 0 10vw;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
