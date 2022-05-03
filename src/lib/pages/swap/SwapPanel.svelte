<script>
    // Componets
    import TokenDisplay from '$lib/pages/swap/TokenDisplay.svelte'
    import SwapDetails from '$lib/pages/swap/SwapDetails.svelte';
    import InputNumber from '$lib/inputs/InputNumber.svelte';

    // Images
    import icon_change_arrows from '$lib/svg/change-arrows.svg'

    export let from
    export let to
</script>

<div class="swap-panel">
    <h2>Swap</h2>
    <div class="panel flex col space-between">
        From 
        <div class="flex row space-between">
            <div class="token-info-box">
                <TokenDisplay 
                    token_name={from.token_name}
                    token_logo={from.token_logo} 
                    token_symbol={from.token_symbol}
                />
                <span>Price 0.1510419 TAU per LUSD</span>
            </div>
            <div class="input-box flex col">
                <InputNumber />
                <span class="balance">Balance: 100 TAU</span>
            </div>

        </div>
        <img class="swap-arrow" src={icon_change_arrows} alt="change tokens">
        To 
        <div class="flex row space-between">
            <div class="token-info-box">
                <TokenDisplay 
                    token_name={to.token_name}
                    token_logo={to.token_logo} 
                    token_symbol={to.token_symbol} 
                />
                <span>Price 0.1510419 LUSD per TAU</span>
            </div>
            <div class="input-box flex col">
                <InputNumber />
                <span class="balance flex row space-between">
                    Balance: 100 LUSD
                    <a href="/pools" >Add Liquidity</a>
                </span>
            </div>

        </div>
        <SwapDetails />
        <button class="outlined primary white"> 
            <div>
                CONNECT WALLET
            </div>
        </button>

    </div>
</div>

<style>
    .swap-panel{
        width: 49%;
    }
    div.panel{
        color: var(--font-primary-color-dark);
        height: var(--units-34vw);
        padding: var(--units-1vw) var(--units-1_5vw) var(--units-2vw);
        box-sizing: border-box;
    }
    img{
        align-self: center;
        width: var(--units-2_5vw);
    }
    span{
        color: var(--font-primary-color-dark);
    }
    a{
        color: var(--primary-color);
        text-decoration: underline;
    }
    .token-info-box{
        width: 40%;
    }
    .token-info-box > span{
        display: block;
        margin-top: var(--units-08vw);
    }
    .input-box{
        width: 55%;
    }
    .input-box > span.balance{
        margin-top: var(--units-08vw);
    }
    .swap-arrow{
        margin: var(--units-1_5vw) 0 var(--units-1vw);
    }
    button{
        margin-top: var(--units-1vw);
    }

    @media (max-width: 480px) {
        .swap-panel{
            width: 100%;
            font-size: 2.5vw;
        }
        div.panel{
            height: unset;
            color: var(--font-primary-color-dark);
            padding: 4vw 4vw 6vw;
        }
        .token-info-box{
            width: 55%;
        }
        .token-info-box > span{
            margin-top: 3vw;
        }
        .input-box{
            width: 40%;
        }
        .input-box > span.balance{
            flex-direction: column;
            margin-top: 3vw;
        }
        .swap-arrow{
            margin: var(--units-1_5vw) 0 var(--units-1vw) 28vw;
            width: 8vw;
        }
        button{
            margin-top: 4vw;
        }
    }
</style>