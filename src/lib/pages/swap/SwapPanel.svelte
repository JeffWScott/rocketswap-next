<script>
    // Componets
    import TokenDisplay from '$lib/pages/swap/TokenDisplay.svelte'

    // Images
    import icon_change_arrows from '$lib/svg/change-arrows.svg'

    export let from
    export let to
</script>

<div class="swap-panel">
    <h2>Swap</h2>
    <div class="panel flex col">
        From 
        <div class="flex row align-center space-between">
            <div class="token-display">
                <TokenDisplay 
                    token_name={from.token_name}
                    token_logo={from.token_logo} 
                    token_symbol={from.token_symbol}
                />
                <span>Price 0.1510419 TAU per LUSD</span>
            </div>
            <div class="flex col">
                <input class="number_input" />
                <span>Balance: 100 TAU</span>
            </div>

        </div>
        <img src={icon_change_arrows} alt="change tokens">
        To 
        <div class="flex row align-center space-between">
            <div class="token-display">
                <TokenDisplay 
                    token_name={to.token_name}
                    token_logo={to.token_logo} 
                    token_symbol={to.token_symbol} 
                />
                <span>Price 0.1510419 LUSD per TAU</span>
            </div>
            <div class="flex col">
                <input class="number_input" />
                <span class="flex row space-between">
                    Balance: 100 LUSD
                    <a href="/pools" >Add Liquidity</a>
                </span>
                
            </div>
        </div>
    </div>
</div>

<style>
    .swap-panel{
        width: 49%;
    }
    div.panel{
        height: var(--units-34vw);
        padding: var(--units-1_1vw);
    }
    img{
        align-self: center;
        width: var(--units-2_5vw);
    }
    input{
        margin-bottom: var(--units-08vw);
    }
    span{
        color: var(--font-primary-color-dark);
    }
    a{
        color: var(--primary-color);
        text-decoration: underline;
    }
</style>