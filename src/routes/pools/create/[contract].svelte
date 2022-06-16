<script>
    // Components
    import PoolsPageCreate from '$lib/pages/pools/PoolsPageCreate.svelte'

    export let token_info
</script>

<svelte:head>
	<title>Rocketswap Create Liquidity</title>
</svelte:head>


<div class="panel-page">
    <PoolsPageCreate {token_info} />
</div>