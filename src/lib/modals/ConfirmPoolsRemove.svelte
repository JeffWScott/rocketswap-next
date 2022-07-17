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
<h2>You will receive</h2>
    <div class="modal-content">
            <div class="highlight">
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
            <p class="message">** You are required to leave 1 LP behind</p>
            <div class="details">
                <p>Pool Tokens Burnede: 1.345 LP</p>
                <p>Share Change: 10.5% => 8.3%</p>
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
    img.icon{
        width: var(--units-2_5vw);
        margin-right: var(--units-2_5vw);
    }
    .highlight{
        font-weight: 300;
        padding-right: var(--units-8vw);
        margin: 0 auto;
        width: min-content;
    }
    .highlight > div {
        margin-bottom: var(--units-2vw);

    }
    .message{
        margin: var(--units-2vw);
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
        img.icon{
            width: 11vw;
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
