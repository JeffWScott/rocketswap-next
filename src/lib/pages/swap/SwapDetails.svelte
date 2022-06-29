<script>
    // Stores
    import { slippage_percent_store } from '$lib/js/stores/app-stores'
    // Utils
    import { handle_show_set_slippage } from '$lib/js/event-handlers'
</script>

<div class="swap-details">
    <p>Maximum Price Impact (slippage): 0%</p>
    <p>Fee 0 LUSD</p>
    <p>Pay fee with <a href="/fuel" class="link-primary" >RSWP</a> </p>
    <p>Slippage Tolerance {$slippage_percent_store}% <button class="text" on:click={handle_show_set_slippage}>change</button></p>
    <p>Guaranteed Minimum 0 LUSD</p>
</div>

<style>
    .swap-details{
        text-align: center;
        margin-top: var(--units-2vw);
        color: var(--font-primary-color-dark)
    }
    p{
        margin: 0;
    }
    button.text{
        font-size: var(--units-08vw);
        color: var(--primary-color);
        padding-left: var(--units-02vw);
        line-height: 1;
    }
    .link-primary{
        font-size: var(--units-08vw);
        font-weight: 500;
    }

</style>