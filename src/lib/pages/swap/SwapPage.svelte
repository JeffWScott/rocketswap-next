<script>
    // Components
    import SwapPanel from "$lib/pages/swap/SwapPanel.svelte";
    import SwapChart from "$lib/pages/swap/SwapChart.svelte";
    import RecentTrades from "$lib/misc-components/RecentTrades.svelte";

    // Mock Data
    import mock_tokens from '$lib/mock_data/mock-tokens'

    let from = mock_tokens["TAU"]
    let to = mock_tokens["LUSD"]

</script>

<div class="flex row space-between wrap">
    <SwapPanel {from} {to}/>
    <SwapChart />
</div>
<RecentTrades />

<style>
    div{
        width: 100%;
    }
    @media (max-width: 480px) {
        div{
            flex-direction: column;
        }
    }
</style>
