<script>
    import { derived } from 'svelte/store';

    // Stores
    import { modal_data_store } from '$lib/js/stores/app-stores'

    // Utils
    import { handle_modal_close, handle_modal_callback } from '$lib/js/event-handlers'

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
</script>

{#if $staking_token && $earned_token && $farm_info}
    <h2 class="modal-heading">Confirm Remove Stake</h2>
    <div class="modal-content-confirm">
            <div class="modal-highlight-box">
                <div class="flex align-center">
                    <img class="icon" src={$staking_token.token_logo} alt="from token" />
                    <span> {$staking_token.token_symbol} {$farm_info.staked}</span>
                </div>
                <div class="flex align-center">
                    <img class="icon" src={$earned_token.token_logo} alt="from token" />
                    <span>{$earned_token.token_symbol} {$farm_info.earned} </span>
                </div>
            </div>
            <p class="modal-message">** This will remove your entire stake as well as all earned {$earned_token.token_symbol}. To remove only {$earned_token.token_symbol} use the WITHDRAW button.</p>
        <div class="modal-buttons">
            <button class="outlined white"><div on:click={handle_modal_close}>Close</div></button>
            <button class="outlined primary white"><div on:click={handle_modal_callback}>Remove Stake</div></button>
        </div>
    </div>
{/if}

<style>
    img.icon{
        width: var(--units-2_5vw);
        margin-right: var(--units-2_5vw);
    }
    @media (max-width: 480px) {
        .modal-content-confirm{
            margin: 0;
            width: 100%;
            font-size: 5vw;
        }
        span{
            margin-right: var(--units-1vw);
        }
        img.icon{
            width: 11vw;
        }
    }
</style>
