<script>
    // Componets
    import TokenDisplay from '$lib/pages/swap/TokenDisplay.svelte'
    import SwapDetails from '$lib/pages/swap/SwapDetails.svelte';
    import InputNumber from '$lib/inputs/InputNumber.svelte';

    //Stores
    import { swap_from, swap_to, swap_token_spots, swap_type, token_to_swap } from '$lib/js/stores/swap-stores'
    import { wallet_connected } from '$lib/js/stores/user-stores';

    // Services
    import { connect_wallet } from '$lib/js/services/wallet.service';

    // Images
    import icon_change_arrows from '$lib/svg/change-arrows.svg'
</script>

<div class="swap-panel">
    <h2>Swap</h2>
    <div class="panel flex col space-between">
        From 
        <div class="flex row space-between">
            <div class="token-info-box">
                <TokenDisplay token_info={$swap_from} position="from" />
                <span>Price 0.1510419 TAU per LUSD</span>
            </div>
            <div class="input-box flex col">
                <InputNumber />
                <span class="balance">Balance: 100 TAU</span>
            </div>

        </div>

        <div class="swap-arrow flex justify-center">
            <button class="icon" on:click={swap_token_spots}>
                <img src={icon_change_arrows} alt="change tokens">
            </button>
        </div>
        
        To 
        <div class="flex row space-between">
            <div class="token-info-box">
                <TokenDisplay token_info={$swap_to} position="to" />
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
        
        {#if $wallet_connected}
            <button class="connect outlined primary white"> 
                <div>
                    {`${$swap_type} ${$token_to_swap.token_symbol}`.toUpperCase()}
                </div>
            </button>
        {:else}
            <button class="connect outlined primary white" on:click={connect_wallet}> 
                <div>
                    CONNECT WALLET
                </div>
            </button>
        {/if}

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
        margin-top: var(--units-1vw);
    }
    button{
        margin-top: var(--units-1vw);
    }
    button.icon{
        margin: 0 auto;
        padding: var(--units-1vw) var(--units-1_4vw);
        border-radius: 100%;
    }
    button.icon:hover{
        background-color: var(--panel-background-highlight);
        
    }
    button.connect{
        width: 50%;
        margin: var(--units-1vw) auto 0;
    }
    button.connect > div{
        padding-left: var(--units-1vw);
        padding-right: var(--units-1vw);
    }

    @media (max-width: 480px) {
        .swap-panel{
            width: 100%;
        }
        div.panel{
            height: unset;
            color: var(--font-primary-color-dark);
        }
        .token-info-box{
            width: 55%;
        }
        .input-box{
            width: 40%;
        }
        .input-box > span.balance{
            flex-direction: column;
        }
        .swap-arrow{
            margin: var(--units-1_5vw) 0 var(--units-1vw) 28vw;
        }
        button.connect{
            width: 100%;
        }
    }
</style>