<script>
    import { derived } from 'svelte/store';

    // Components
    import LpTokenIcon from '$lib/misc-components/LpTokenIcon.svelte';

    // Stores
    import { modal_data_store } from '$lib/js/stores/app-stores'
    import { currency_token } from '$lib/js/stores/token-stores'

    // Utils
    import { handle_modal_close, handle_modal_callback } from '$lib/js/event-handlers'

    const token_info =  derived(modal_data_store, ($modal_data_store) => {
        const { token_info } = $modal_data_store
        return token_info
    })
</script>

{#if $token_info}
    <h2 class="modal-heading">You will receive</h2>
    <div class="modal-content-confirm">
            <div class="modal-highlight-box flex row center align-center">
                <div class="lp-icon">
                    <LpTokenIcon token_info={$token_info} />
                </div>
                <div class="lp-details">
                    <span>{$token_info.token_symbol} / {$currency_token.token_symbol} Pool Tokens</span>
                    <p>{"4.235 LP"}</p>
                </div>
            </div>
            <div class="modal-details">
                <p>TAU Deposited: 13.39089311</p>
                <p>LUCK Deposited: 10.34567932</p>
            </div>
            <div class="modal-details">
                <p>Rates:</p>
                <p>1 {$currency_token.token_symbol} = 12321312.9239823834 {$token_info.token_symbol}</p>
                <p>1 {$token_info.token_symbol} = 0.000091 {$currency_token.token_symbol}</p>
            </div>
        <div class="modal-buttons">
            <button class="outlined white"><div on:click={handle_modal_close}>Close</div></button>
            <button class="outlined primary white"><div on:click={handle_modal_callback}>Confirm Remove</div></button>
        </div>
    </div>
{/if}

<style>
    .lp-details > p {
        margin: 0;
    }
    .lp-icon{
        width: var(--units-3vw);
        height: var(--units-3vw);
        margin-right: var(--units-2vw);
    }
    .modal-details{
        margin: var(--units-1vw) 0;
    }

    @media (max-width: 480px) {
        .lp-icon{
            width: var(--units-4vw);
            height: var(--units-4vw);
            margin-right: var(--units-2vw);
        }

    }
</style>
