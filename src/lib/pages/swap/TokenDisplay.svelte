<script>
    // Image
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'

    export let token_name
    export let token_logo
    export let token_symbol

</script>

<button class="token-display panel flex row align-center space-between">
    <div class="flex row align-center">
        <img class="token-logo" src={token_logo} alt={token_name} />
        {token_symbol}
    </div>
    <img class="arrow" src={dropdown_arrow_down} alt={"arrow"}  />
</button>

<style>
    .token-display{
        width: 100%;
        padding: var(--units-05vw) 1.5vw var(--units-045vw) 1vw;
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
        margin-right: 1.4vw;
    }
    .arrow{
        width: var(--units-1_3vw);
    }
    @media (max-width: 480px) {
        .token-display{
            width: 100%;
            padding: 2vw 7vw 2vw 3vw;
            box-shadow: var(--panel-box-shadow-higher);
            font-size: 3.8vw;
            color: white;
            font-weight: 300;
            cursor: pointer;
        }
        .arrow{
            width: 4.5vw;
        }
        .token-logo{
            width: 7vw;
            margin-right: 5vw;
        }
    }
</style>