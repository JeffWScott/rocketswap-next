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
</script>

{#if $token_info}
    <h2  class="modal-heading">You will receive</h2>
    <div class="modal-content-confirm">
            <div class="modal-highlight-box">
                <div class="flex row align-center">
                    <img class="icon" src={$currency_token.token_logo} alt="from token" />
                    <div class="flex col">
                        <p>{$currency_token.token_symbol}</p>
                        <p>{"1.0"}</p>
                    </div>
                </div>
                <div class="flex row align-center">
                    <img class="icon" src={$token_info.token_logo} alt="from token" />
                    <div class="flex col">
                        <p>{$token_info.token_symbol}</p>
                        <p>{"98009812.98765142"}</p>
                    </div>
                </div>
            </div>
            <p class="modal-message">** You are required to leave 1 LP behind</p>
            <div class="modal-details">
                <p>Pool Tokens Burnede: 1.345 LP</p>
                <p>Share Change: 10.5% => 8.3%</p>
            </div>
        <div class="modal-buttons">
            <button class="outlined white"><div on:click={handle_modal_close}>Close</div></button>
            <button class="outlined primary white"><div on:click={handle_modal_callback}>Confirm Remove</div></button>
        </div>
    </div>
{/if}

<style>
    div > p:not(.modal-message) {
        margin: 0;
    }
    img.icon{
        width: var(--units-2_5vw);
        margin-right: var(--units-2_5vw);
    }

    @media (max-width: 480px) {
        img.icon{
            width: 11vw;
        }
    }
</style>
