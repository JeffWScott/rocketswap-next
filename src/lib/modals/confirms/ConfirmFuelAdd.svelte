<script>
    import { derived } from 'svelte/store';

    // Stores
    import { modal_data_store } from '$lib/js/stores/app-stores'
    import { exchange_tokens_staked } from '$lib/js/stores/user-stores'

    // Utils
    import { handle_modal_close, handle_modal_callback } from '$lib/js/event-handlers'

    const fuel_amount =  derived(modal_data_store, ($modal_data_store) => {
        const { fuel_amount } = $modal_data_store
        return fuel_amount
    })

</script>

{#if $fuel_amount}
    <h2 class="modal-heading">Confirm Fill Fuel Tank</h2>
    <div class="modal-content-confirm">
            <div class="modal-highlight-box">
                <div class="flex align-center">
                    From 0% to 1%
                </div>
            </div>
            <div class="modal-details">
                <p>Current Fuel Amount: {$exchange_tokens_staked} RSWP</p>
                <p>Adding {$fuel_amount} </p>
                <p>New Fuel Amount:  {$fuel_amount + $exchange_tokens_staked}</p>
            </div>
        <div class="modal-buttons">
            <button class="outlined white"><div on:click={handle_modal_close}>Close</div></button>
            <button class="outlined primary white"><div on:click={handle_modal_callback}>Add RSWP</div></button>
        </div>
    </div>
{/if}

<style>
    p {
        margin: 0;
    }
</style>
