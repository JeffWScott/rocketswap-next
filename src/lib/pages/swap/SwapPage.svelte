<script>
    // Components
    import SwapPanel from "$lib/pages/swap/SwapPanel.svelte";
    import SwapChart from "$lib/pages/swap/SwapChart.svelte";
    import RecentTrades from "$lib/misc-components/RecentTrades.svelte";

</script>

<div class="flex row space-between wrap">
    <SwapPanel />
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
