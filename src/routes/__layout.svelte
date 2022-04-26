<script>
	import Header from '$lib/header/Header.svelte';
	import LeftMenu from '$lib/left-menu/LeftMenu.svelte';

	import '../css/app.css';
	import '../css/flex.css';
	import '../css/layout.css';
	import '../css/styled-defaults.css';
</script>

<Header />
<LeftMenu />

<main>
	<slot />
</main>

<style>
	main {
		padding: 9vw 5vw 15vw 10vw;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (max-width: 768px) {
		main {
			padding: 10vw 3vw 15vw 10vw;
		}
	}

	@media (max-width: 480px) {
		main {
			padding: 55px 10vw 15vw;
		}
    }
</style>
