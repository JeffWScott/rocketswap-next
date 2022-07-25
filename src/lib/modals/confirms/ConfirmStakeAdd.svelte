<script>
    import { derived } from 'svelte/store';

    // Stores
    import { modal_data_store } from '$lib/js/stores/app-stores'

    // Utils
    import { handle_modal_close, handle_modal_callback } from '$lib/js/event-handlers'

    // Components
    import InputNumber from '$lib/inputs/InputNumber.svelte';

    let stake_amount = 0

    const staking_token =  derived(modal_data_store, ($modal_data_store) => {
        const { farm_info } = $modal_data_store
        const { staked_token } = farm_info
        return staked_token
    })

    const earned_token =  derived(modal_data_store, ($modal_data_store) => {
        const { farm_info } = $modal_data_store
        const { earned_token } = farm_info
        return earned_token
    })

    const farm_info =  derived(modal_data_store, ($modal_data_store) => {
        const { farm_info } = $modal_data_store
        return farm_info
    })

    function handle_input_change(e){
        stake_amount = e.detail
    }
</script>

{#if $staking_token && $earned_token && $farm_info}
    <h2 class="modal-heading">Confirm Staking</h2>
    <div class="modal-content-confirm">
            <div class="modal-highlight-box">
                <div class="flex align-center">
                    <img class="icon" src={$staking_token.token_logo} alt="from token" />
                    <span>Stake {$staking_token.token_symbol} </span>
                </div>
                <div class="flex align-center">
                    <img class="icon" src={$earned_token.token_logo} alt="from token" />
                    To Earn {$earned_token.token_symbol}
                </div>
            </div>

            <div class="modal-highlight-box">
                <div class="input-box flex col">
                    <InputNumber on:change={handle_input_change}/>
                    <span>Balance: 100 LUSD</span>
                </div>
            </div>

            <div class="modal-details">
                <p>APR: {$farm_info.apr}%</p>
            </div>
        <div class="modal-buttons">
            <button class="outlined white" on:click={handle_modal_close}><div >Close</div></button>
            <button class="outlined primary white" on:click={handle_modal_callback}><div>Stake {$staking_token.token_symbol}</div></button>
        </div>
    </div>
{/if}

<style>
    img.icon{
        width: var(--units-2_5vw);
        margin-right: var(--units-2_5vw);
    }
    .input-box{
        width: 100%;
        margin: 0 auto;
    }
    .input-box > span{
        margin: var(--units-08vw) 0 0;
        color: var(--font-primary-color-dark);
        font-size: var(--units-08vw);
    }
    @media (max-width: 480px) {
        .modal-content-confirm{
            margin: 0;
            width: 100%;
            font-size: 5vw;
        }
        .input-box{
            width: 75vw;
        }
        span{
            margin-right: var(--units-1vw);
        }
        img.icon{
            width: 11vw;
        }
    }
</style>
