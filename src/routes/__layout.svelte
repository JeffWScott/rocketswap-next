<script>
	import '../css/app.css';
	import '../css/flex.css';
	import '../css/layout.css';
	import '../css/styled-defaults.css';

	// Components
	import Header from '$lib/header/Header.svelte';
	import LeftMenu from '$lib/left-menu/LeftMenu.svelte';
	import MobileMenu from '$lib/mobile-menu/MobileMenu.svelte';
	import Modal from '$lib/modals/Modal.svelte';

	// Stores
	import { wallet_connected } from '$lib/js/stores/user-stores';

</script>

<Header />
<LeftMenu />
<MobileMenu />
<Modal />

<main class:connected={$wallet_connected}>
	<slot />
</main>
<!--
<svelte:window on:resize={close_menu} />
-->
<style>
	main {
		padding: 7vmax 5vw 15vw 10vw;
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
			padding: 20vh 5vw 15vw;
		}
		main.connected{
			padding: 27vh 5vw 15vw;
		}
    }
</style>
