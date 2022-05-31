<script>
    // Image
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'

    // Stores
    import { handle_moble_open } from '$lib/js/event_handlers'

    export let token_name
    export let token_logo
    export let token_symbol

    function handle_click(){
        handle_moble_open("TokenSelect")
    }
</script>

<button class="token-display panel flex row align-center space-between" on:click={handle_click}>
    <div class="flex row align-center">
        <img class="token-logo" src={token_logo} alt={token_name} />
        {token_symbol}
    </div>
    <img class="arrow" src={dropdown_arrow_down} alt={"arrow"}  />
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