<script>
    // Components
    import PoolsPageAdd from '$lib/pages/pools/PoolsPageAdd.svelte'

    export let token_info
</script>

<svelte:head>
	<title>Rocketswap Add Liquidity</title>
</svelte:head>


<div class="panel-page">
    <PoolsPageAdd {token_info} />
</div>