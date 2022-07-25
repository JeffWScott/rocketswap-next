<script>
    import { derived } from 'svelte/store';

    // Stores
    import { modal_data_store } from '$lib/js/stores/app-stores'

    // Utils
    import { handle_modal_close, handle_modal_callback } from '$lib/js/event-handlers'

    // Components
    import InputNumber from '$lib/inputs/InputNumber.svelte';

    $: withdraw_amount = $farm_info.earned

    const staking_token =  derived(modal_data_store, ($modal_data_store) => {
        const { farm_info } = $modal_data_store
        const { staked_token } = farm_info
        return staked_token
    })

    const earned_token =  derived(modal_data_store, ($modal_data_store) => {
        const { farm_info } = $modal_data_store
        const { earned_token } = farm_info
        return earned_token
    })

    const farm_info =  derived(modal_data_store, ($modal_data_store) => {
        const { farm_info } = $modal_data_store

        return farm_info
    })

    function handle_input_change(e){
        withdraw_amount = e.detail
    }
</script>

{#if $staking_token && $earned_token && $farm_info}
    <h2 class="modal-heading">Confirm Withdraw Stake</h2>
    <div class="modal-content-confirm">
            <div class="modal-highlight-box">
                <div class="flex align-center">
                    <img class="icon" src={$earned_token.token_logo} alt="from token" />
                    {$earned_token.token_symbol}
                </div>
                <InputNumber on:change={handle_input_change} value={withdraw_amount}/>
            </div>
            <div class="modal-details">
                <p>{$earned_token.token_symbol} Earned: {$farm_info.earned}</p>
                <p>Get: {withdraw_amount} {$earned_token.token_symbol}</p>
            </div>
        <div class="modal-buttons">
            <button class="outlined white"><div on:click={handle_modal_close}>Close</div></button>
            <button class="outlined primary white"><div on:click={handle_modal_callback}>Withdraw {$earned_token.token_symbol}</div></button>
        </div>
    </div>
{/if}

<style>
    img.icon{
        width: var(--units-2_5vw);
        margin-right: var(--units-1vw);
    }
    @media (max-width: 480px) {
        .modal-content-confirm{
            margin: 0;
            width: 100%;
            font-size: 5vw;
        }
        img.icon{
            width: 11vw;
        }
    }
</style>
