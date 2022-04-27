<script>
	import Header from '$lib/header/Header.svelte';
	import LeftMenu from '$lib/left-menu/LeftMenu.svelte';
	import MobileMenu from '$lib/mobile-menu/MobileMenu.svelte';

	import '../css/app.css';
	import '../css/flex.css';
	import '../css/layout.css';
	import '../css/styled-defaults.css';

	// Stores
	import { menu_open } from '$lib/js/stores/app-stores'

</script>

<Header />
<LeftMenu />
<MobileMenu />



<main>
	<slot />
</main>
<!--
<svelte:window on:resize={close_menu} />
-->
<style>
	main {
		padding: 10vh 5vw 15vw 10vw;
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
			padding: 36vw 5vw 15vw;
		}
    }
</style>
