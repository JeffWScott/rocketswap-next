<script>
    import SwapPanel from "$lib/pages/swap/SwapPanel.svelte";
    import SwapChart from "$lib/pages/swap/SwapChart.svelte";

    // Mock Data
    import mock_tokens from '$lib/mock_data/mock-tokens'

    console.log(mock_tokens)

    let from = {}
    let to = mock_tokens["LUSD"]

</script>

<div class="flex row space-between wrap">
    <SwapPanel {from} {to}/>
    <SwapChart />
</div>

<style>
    div{
        width: 100%;
    }
</style>
