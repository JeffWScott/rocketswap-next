<script>
    // Components
    import FuelGauge from "$lib/pages/fuel/FuelGauge.svelte";
    import InputNumber from '$lib/inputs/InputNumber.svelte';

    // Utils
    import { handle_open_confirm_fuel_add, handle_open_confirm_fuel_remove } from '$lib/js/event-handlers'
    
    // Stores
    import { exchange_tokens_staked } from '$lib/js/stores/user-stores'

    let fuel_amount = 0

    function handle_click_add(){
        handle_open_confirm_fuel_add(fuel_amount)
    }

    function handle_click_remove(){
        handle_open_confirm_fuel_remove(fuel_amount)
    }

    function handle_input_change(e){
        fuel_amount = e.detail
    }

    function set_max_value(){
        return $exchange_tokens_staked
    }
</script>

<div class="panel flex col align-center">
    <div class="container">
        <FuelGauge />
        <div class="controls">
            <p class="discount-amount">Current Trade Fee Discount: 10%</p>
            <p class="amount-staked text-primary-color-dark">1361 RSWP Staked</p>
            <InputNumber on:change={handle_input_change} max_callback={set_max_value}/>
            <div class="flex row space-between buttons">
                <button class="outlined primary white" on:click={handle_click_add} disabled={!fuel_amount}><div>Add Fuel</div></button>
                <button class="outlined white" on:click={handle_click_remove} disabled={!fuel_amount}><div>Remove Fuel</div></button>
            </div>
            <span class="text-primary-color-dark">Minimum Stake is 1361 RSWP</span>
        </div>
    </div>
</div>


<style>
    div.panel{
        width: 49%;

        padding: var(--units-2_5vw) 0;
        box-sizing: border-box;
    }
    div.container{
        width: var(--units-22vw);
        margin: 0 auto;
    }
    div.controls{
        padding: var(--units-1vw) var(--units-1vw);
        text-align: center;
    }
    .buttons{
        width: 100%;
        margin: var(--units-1_2vw) 0;
    }
    button{
        width: var(--units-9vw);
    }
    button > div{
        padding-left: 0;
        padding-right: 0;
    }
    p{
        font-size: var(--units-1_2vw);
        margin: 0;
    }
    p.discount-amount{
        margin-top: var(--units-1vw);
    }
    p.amount-staked{
        margin-bottom: var(--units-1vw);
    }
    span{
        font-size: var(--units-09vw);
    }

    @media (max-width: 480px) {
        div.panel{
            width: 100%;
        }
        div.container{
            width: 100%;
        }
        div.controls{
            text-align: center;
        }
        p{
            margin: 0;
        }
        button{
           width: 49%;
        }
    }
    
</style>