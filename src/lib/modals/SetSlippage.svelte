<script>
    // Components
    import FilterSearch from '$lib/misc-components/FilterSearch.svelte';

    // Utils
    import { handle_modal_close } from '$lib/js/event_handlers'

    // Stores
    import { slippage_percent_store } from '$lib/js/stores/app-stores'

    let slippage_percent = $slippage_percent_store

    function handle_set_slippage(){
        slippage_percent_store.set(slippage_percent)
        handle_modal_close()
    }

    function handle_slippage_input(e){
        console.log(e)
        slippage_percent = e.detail
    }

    function handle_slippage_set(e){
        console.log(e)
        slippage_percent = e.target.getAttribute("percent")
    }
    
</script>

<div class="modal-content flex col align-center">
    <h2>Slippage Tolerance</h2>
    <div class="text-box">
        <p class="subtext">
            Since the swap will ultimately take place in the smart contract there could be changes in the price after your transaction is submitted.
        </p>
        <ul>
            <li>
                Setting a low slippage tolerance will cause the transactoin to fail if the price moves unfavorabley in the wrong direction.
            </li>
            <li>
                Set a high slippage tolerance if you're willing to accept large unfavorable price movements.
            </li>
        </ul>
    </div>
    <div class="slippage-inputs flex row align-center">
        <button class="outlined white" percent="{0.1}" on:click={handle_slippage_set}><div percent="{0.1}">0.1%</div></button>
        <button class="outlined white" percent="{0.4}" on:click={handle_slippage_set}><div percent="{0.4}">0.5%</div></button>
        <button class="outlined white" percent="{1}" on:click={handle_slippage_set}><div percent="{1}" >1%</div></button>
        <div class="search"><FilterSearch outlined placeholder="%" on:change={handle_slippage_input} /></div>
        
    </div>
    <div class="buttons">
        <button class="outlined white" on:click={handle_modal_close}><div>Close</div></button>
        <button class="outlined primary white" on:click={handle_set_slippage}><div>Accept {slippage_percent}%</div></button>
    </div>
    

</div>

<style>
    .slippage-inputs > button{
        margin-bottom: var(--units-1vw);
        
    }
    .slippage-inputs > * {
        margin-left: var(--units-1vw);
        margin-right: var(--units-1vw);
        width: var(--units-6vw);
    }

    .slippage-inputs > button > div{
        padding-left: 0;
        padding-right: 0;
    }
    .buttons > button:first-child{
        margin-right: var(--units-1vw);
    }
</style>