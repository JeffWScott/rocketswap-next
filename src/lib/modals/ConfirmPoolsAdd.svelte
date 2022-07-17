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
<h2>You will receive</h2>
    <div class="modal-content">
            <div class="highlight flex row center align-center">
                <div class="lp-icon">
                    <LpTokenIcon token_info={$token_info} />
                </div>
                <div>
                    <span>{$token_info.token_symbol} / {$currency_token.token_symbol} Pool Tokens</span>
                    <p>{"4.235 LP"}</p>
                </div>
            </div>
            <div class="deposit-details">
                <p>TAU Depoaited: 13.39089311</p>
                <p>LUCK Deposited: 10.34567932</p>
            </div>
            <div class="details">
                <p>Rates:</p>
                <p>1 {$currency_token.token_symbol} = 12321312.9239823834 {$token_info.token_symbol}</p>
                <p>1 {$token_info.token_symbol} = 0.000091 {$currency_token.currency_symbol}</p>
            </div>
        <div class="buttons flex row space-around">
            <button class="close outlined white"><div on:click={handle_modal_close}>Close</div></button>
            <button class="confirm outlined primary white"><div on:click={handle_modal_callback}>Confirm Remove</div></button>
        </div>
    </div>
{/if}

<style>
    h2{
        text-align: left;
        margin-bottom: var(--units-2vw);
    }

    .modal-content{
        width: min-content;
        margin: 0 auto;
        font-size: var(--units-1_1vw);
    }
    .highlight{
        width: 100%;
        font-weight: 300;
        margin-bottom: var(--units-2vw);
        font-size: var(--units-1_4vw);
    }
    .lp-icon{
        width: var(--units-3vw);
        height: var(--units-3vw);
        margin-right: var(--units-2vw);
    }
    .deposit-details{
        margin-bottom: var(--units-2vw);
        width: 100%;
        text-align: center;
    }
    .details > p {
        margin-right: var(--units-1vw);
    }
    .details{
        width: max-content;
        width: 100%;
        text-align: center;
    }
    p {
        margin: 0;
    }
    .buttons{
        margin-top: var(--units-3vw);
        width: 100%;
    }
    button.confirm{
        min-width: var(--units-15vw);
    }
    button.close{
        min-width: var(--units-10vw);
        margin-right: var(--units-1vw);
    }
    button > div{
        padding-left: 0;
        padding-right: 0;
    }
    @media (max-width: 480px) {
        h2{
            text-align: unset;
        }
        .modal-content{
            margin: 0;
            width: 100%;
            font-size: 5vw;
        }
        span{
            margin-right: var(--units-1vw);
        }

        p {
            margin: 0;
        }
        .buttons{
            flex-direction: column;
            margin-top: 5vh;
        }
        button{
            width: 100%;
        }
        .buttons > button:first-child{
            margin-bottom: 2vh;
        }
        button >div{
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>
