<script>
    // Images
    import IconArrowDown from '$lib/svg/arrow-down.svg'

    // Stores
    import { swap_to, swap_from } from '$lib/js/stores/swap-stores'

    // Utils
    import { handle_modal_close, handle_modal_callback } from '$lib/js/event-handlers'
</script>

<style>
    h2{
        text-align: center;
    }

    .modal-content{
        width: min-content;
        margin: 0 auto;
    }
    img.icon{
        width: var(--units-5vw);
        margin-right: var(--units-2vw);
    }
    .arrow{
        width: var(--units-1_3vw);
        margin: var(--units-1vw) var(--units-1_9vw) ;
    }
    .highlight{
        font-size: var(--units-1_5vw);
        font-weight: 500;
    }
    span{
        margin-right: var(--units-1vw);
    }
    .details{
        font-size: var(--units-1_2vw);
        width: max-content;
    }
    .details > p {
        margin: 0;
    }
    p.subtitle{
        margin: var(--units-1vw) 0 var(--units-2vw);
    }
    p > span{
        color: var(--font-primary-color-dark);
    }
    .buttons{
        margin-top: var(--units-3vw);
    }
    button{
        min-width: var(--units-11vw)
    }
    button >div{
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
        }
        img.icon{
            width: 11vw;
        }
        .arrow{
            width: 4vw;
            margin: 2vh 4vw ;
        }
        .highlight{
            font-size: 5vw;
            font-weight: 500;
        }
        span{
            margin-right: var(--units-1vw);
        }
        .details{
            font-size: 3vw;
            width: max-content;
        }
        .details > p {
            margin: 0;
        }
        p.subtitle{
            font-size: 3vw;
            margin: 2vh 0 4vh;
        }
        p > span{
            color: var(--font-primary-color-dark);
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

<div class="modal-content">
        <h2>Confirm Swap</h2>
        <div class="highlight flex col">
            <div class="flex align-center">
                <img class="icon" src={$swap_from.token_logo} alt="from token" />
                <span>1.00000008</span>
                {$swap_from.token_symbol}
            </div>
            <img class="arrow" src={IconArrowDown} alt="down-arrow" />
            <div class="flex align-center">
                <img class="icon" src={$swap_to.token_logo} alt="from token" />
                <span>19.42179102</span>
                {$swap_to.token_symbol}
            </div>
        </div>
        <p class="subtitle">** Output is estimated. You will receive at least 1255284.17456343 LDOGE or the transaction will revert.</p>
        <div class="details">
            <p><span>Price:</span> 1287326.38985001 LDOGE per TAU</p>
            <p><span>Price Impacted:</span> 0%</p>
            <p><span>Fee:</span> 6436.66325832 LDOGE</p>
            <p><span>Minimum Recieved:</span> 1255284.17456343 LDOGE</p>
        </div>
    <div class="buttons flex row space-around">
        <button class="outlined white"><div on:click={handle_modal_close}>Close</div></button>
        <button class="outlined primary white"><div on:click={handle_modal_callback}>Confirm Swap</div></button>
    </div>
</div>

