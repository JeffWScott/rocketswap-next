<script>
    // Components
    import PoolsPageRemove from '$lib/pages/pools/PoolsPageRemove.svelte'

    export let token_info
</script>

<svelte:head>
	<title>Rocketswap Add Liquidity</title>
</svelte:head>


<div class="panel-page">
    <PoolsPageRemove {token_info} />
</div>