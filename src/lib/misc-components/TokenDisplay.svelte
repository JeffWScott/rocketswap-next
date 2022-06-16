<script>
    // Image
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'

    // Stores
    import { handle_modal_open } from '$lib/js/event_handlers'

    // Utils
    import { set_from_token_callback, set_to_token_callback } from '$lib/pages/swap/swap-page-utils.js'

    export let token_info
    export let position

    $: is_currency_token = token_info && token_info.contract_name === "currency" 

    function handle_click(e){
        if (is_currency_token) return

        handle_modal_open({
            modal_name: "TokenSelect",
            callback: position === "from" ? set_from_token_callback : set_to_token_callback
        })
    }
</script>

<button class="token-display panel flex row align-center space-between" class:no-token={!token_info} on:click={handle_click}>
        <div class="flex row align-center" >
            {#if !token_info}
                Select Token
            {:else}
                <img class="token-logo" src={token_info.token_logo} alt={token_info.token_name} />
                {token_info.token_symbol}
            {/if}
        </div>
        {#if !is_currency_token}
            <img class="arrow" src={dropdown_arrow_down} alt={"arrow"}  />
        {/if}

</button>

<style>
    .token-display{
        width: 100%;
        padding: var(--units-04vw) var(--units-1_5vw) var(--units-04vw) var(--units-1vw);
        box-shadow: var(--panel-box-shadow-higher);
        font-size: var(--units-1_2vw);
        color: var(--font-primary);
        font-weight: 200;
        cursor: pointer;
        border-radius: var(--units-06vw);
    }
    .token-display.no-token{
        padding: var(--units-06vw) var(--units-1_5vw) var(--units-06vw) var(--units-1vw);
        color: var(--font-primary-color);
    }
    .token-display:hover{
        background-color: var(--panel-background-highlight);
    }
    .token-logo{
        width: var(--units-2_2vw);
        margin-right: var(--units-1_4vw);
    }
    .arrow{
        width: var(--units-1_3vw);
    }
    @media (max-width: 480px) {
        .token-display{
            width: 100%;
            box-shadow: var(--panel-box-shadow-higher);
            color: white;
            font-weight: 300;
            cursor: pointer;
        }
    }
</style>