<script>
    // Images
    import IconArrowDown from '$lib/svg/arrow-down.svg'

    // Stores
    import { swap_to, swap_from } from '$lib/js/stores/swap-stores'

    // Utils
    import { handle_modal_close, handle_modal_callback } from '$lib/js/event-handlers'
</script>

<div class="modal-content-confirm">
        <h2 class="modal-heading">Confirm Swap</h2>
        <div class="modal-highlight-box flex col">
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
        <p class="modal-message">** Output is estimated. You will receive at least 1255284.17456343 LDOGE or the transaction will revert.</p>
        <div class="modal-details ">
            <p><span>Price:</span> 1287326.38985001 LDOGE per TAU</p>
            <p><span>Price Impacted:</span> 0%</p>
            <p><span>Fee:</span> 6436.66325832 LDOGE</p>
            <p><span>Minimum Recieved:</span> 1255284.17456343 LDOGE</p>
        </div>
    <div class="modal-buttons">
        <button class="outlined white"><div on:click={handle_modal_close}>Close</div></button>
        <button class="outlined primary white"><div on:click={handle_modal_callback}>Confirm Swap</div></button>
    </div>
</div>


<style>
    img.icon{
        width: var(--units-5vw);
        margin-right: var(--units-2vw);
    }
    .arrow{
        width: var(--units-1_1vw);
        margin: 0 var(--units-1_9vw) var(--units-1vw);
    }
    span{
        margin-right: var(--units-1vw);
    }
    .modal-details{
        width: fit-content;
        text-align: left;
        margin: 0 auto var(--units-2vw);
    }
    p > span{
        color: var(--font-primary-color-dark);
    }
    @media (max-width: 480px) {
        .modal-content-confirm{
            margin: 0;
            width: 100%;
        }
        .modal-highlight-box {
            margin-bottom: 0;
        }
        .modal-highlight-box > div {
            margin-bottom: 0;
        }
        img.icon{
            width: 11vw;
        }
        .arrow{
            width: 4vw;
            margin: 2vh 4vw ;
        }
        span{
            margin-right: var(--units-1vw);
        }
        p > span{
            color: var(--font-primary-color-dark);
        }
        .modal-details{
            font-size: var(--units-1_1vw);
            margin-bottom: 0;
        }
        .modal-message{
            font-size: var(--units-1_1vw);
        }
    }
</style>

