<script>
    // Components
    import SwapPage from '$lib/pages/swap/SwapPage.svelte'

    //Stores
    import { swap_from, swap_to } from '$lib/js/stores/swap-stores'

    // Mock Data
    import mock_tokens from '$lib/mock_data/mock_tokens';
    
    export let token_info

    swap_to.set(token_info)

    const mock_token_list = Object.keys(mock_tokens).map(m => mock_tokens[m])
    swap_from.set(mock_token_list.find(f => f.contract_name === 'currency'))

</script>

<svelte:head>
	<title>Rocketswap {token_info.token_symbol}</title>
</svelte:head>

<SwapPage {token_info}/>