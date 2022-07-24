<script>
    import { derived } from 'svelte/store';

    // Stores
    import { modal_data_store } from '$lib/js/stores/app-stores'
    import { currency_token } from '$lib/js/stores/token-stores'

    // Utils
    import { handle_modal_close, handle_modal_callback } from '$lib/js/event-handlers'

    const token_info =  derived(modal_data_store, ($modal_data_store) => {
        const { token_info } = $modal_data_store
        return token_info
    })
    const currency_amount =  derived(modal_data_store, ($modal_data_store) => {
        const { currency_amount } = $modal_data_store
        return currency_amount
    })
    const token_amount =  derived(modal_data_store, ($modal_data_store) => {
        const { token_amount } = $modal_data_store
        return token_amount
    })
</script>

{#if $token_info}
    <h2 class="modal-heading">You are creating this pair</h2>
    <div class="modal-content-confirm">
            <div class="modal-highlight-box">
                <div class="flex align-center">
                    <img class="icon" src={$currency_token.token_logo} alt="from token" />
                    {$currency_token.token_symbol}
                </div>
                <div class="flex align-center">
                    <img class="icon" src={$token_info.token_logo} alt="from token" />
                    {$token_info.token_symbol}
                </div>
            </div>
            <div class="deposit-details">
                <p>TAU Depoaited: {$currency_amount}</p>
                <p>{$token_info.token_symbol} Deposited: {$token_amount}</p>
            </div>
            <div class="modal-details">
                <p>Rates:</p>
                <p>1 TAU = 0.5 NEB</p>
                <p>1 NEB = 2 TAU</p>
                <p>Share of Pool: 100%</p>
            </div>
        <div class="modal-buttons">
            <button class="outlined white"><div on:click={handle_modal_close}>Close</div></button>
            <button class="outlined primary white"><div on:click={handle_modal_callback}>Confirm Create Pair</div></button>
        </div>
    </div>
{/if}

<style>

    img.icon{
        width: var(--units-2_5vw);
        margin-right: var(--units-2_5vw);
    }

    .deposit-details{
        margin-bottom: var(--units-2vw);
        width: 100%;
        text-align: center;
    }
    p {
        margin: 0;
    }
    @media (max-width: 480px) {
        img.icon{
            width: 11vw;
        }

        p {
            margin: 0;
        }

    }
</style>
