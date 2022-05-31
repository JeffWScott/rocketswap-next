<script>
    // Components
    import SwapPage from '$lib/pages/swap/SwapPage.svelte'

    export let token_info

    console.log({token_info})
</script>

<svelte:head>
	<title>Rocketswap {token_info.token_symbol}</title>
</svelte:head>

<SwapPage {token_info}/>