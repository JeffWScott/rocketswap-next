<script>
    // Components
    import TokenDisplay from "$lib/misc-components/TokenDisplay.svelte";
    import InputNumber from "$lib/inputs/InputNumber.svelte";
    import TokenSelect from '$lib/modals/TokenSelect.svelte'
    import ConfirmPoolsCreate from '$lib/modals/confirms/ConfirmPoolsCreate.svelte'

    // Stores
    import { currency_token } from '$lib/js/stores/token-stores'
    import { handle_modal_open } from '$lib/js/event-handlers'

    // Images
    import icon_plus from '$lib/svg/plus.svg'

    // Utils
    import { window_history_set_pools_create_contract } from '$lib/js/page-utils.js'

    export let token_info = null

    let currency_amount = 0
    let token_amount = 0

    $: selected_token = token_info
    $: token_not_selected = !selected_token

    function set_selected_token(e){
        selected_token = e
        window_history_set_pools_create_contract(selected_token.contract_name)
    }

    function handle_click(e){
        handle_modal_open({
            modal: TokenSelect,
            callback: set_selected_token
        })
    }

    function handle_open_confirm_create(e){
        handle_modal_open({
            modal: ConfirmPoolsCreate,
            callback: () => console.log("confirm create"),
            modal_data: {
                token_info: selected_token,
                currency_amount,
                token_amount
            }
        })
    }

    function currency_amount_changed(e){
        currency_amount = e.detail
    }

    function token_amount_changed(e){
        token_amount = e.detail
    }
</script>

<h2>Create Liquidity</h2>

<div class="nav flex row">
    <a href="/pools" class="link-primary">Back</a>
</div>

<div class="panel">
    <p class="heading">Base</p>
    <div class="flex row space-between">
        <div class="token-details flex col">
            <TokenDisplay token_info={$currency_token} position="from"/>
            <p>Price 0.1510419 TAU per LUSD</p>
        </div>
        <div class="flex col">
            <InputNumber on:change={currency_amount_changed}/>
            <p>Balance: 100 LUSD</p>
        </div>
    </div>

    <img src={icon_plus} alt="plus-sign" />

    <p class="heading">Token</p>
    <div class="flex row space-between">
        <div class="token-details flex col">
            <TokenDisplay token_info={selected_token} position="to" on:click={handle_click}/>
            <p>Price 0.1510419 TAU per LUSD</p>
        </div>
        <div class="flex col">
            <InputNumber on:change={token_amount_changed}/>
            <p>Balance: 100 LUSD</p>
        </div>
    </div>

    <div class="details">
        <p>Initial prices and pool share</p>
        <p>2 TAU per NEB</p>
        <p>0.5 NEB per TAU</p>
    </div>

    <button class="outlined primary white" disabled={token_not_selected} on:click={handle_open_confirm_create}> 
        <div >
            {#if token_not_selected}
                No Token Selected
            {:else}
                CREATE SUPPLY
            {/if}  
        </div>
    </button>
</div>

<style>
    h2{
        margin: 0;
    }
    .nav{
        margin: var(--units-05vw) 0 var(--units-1vw);
    }
    .nav > a{
        font-size: var(--units-1vw);
    }
    .nav > a:first-child{
        margin-right: var(--units-1vw);
    }
    .panel{
        padding: var(--units-2vw);
    }
    
    img{
        display: block;
        margin: var(--units-1vw) auto;
    }
    .token-details{
        max-width: var(--units-15vw);
        width: 100%;
        margin-right: var(--units-2vw);
    }
    p{
        color: var(--font-primary-color-dark);
    }
    .heading{
        font-size: var(--units-09vw);
        margin: 0;
    }
    .details{
        width: 100%;
        text-align: center;
        margin-top: var(--units-2vw);
        margin-bottom: var(--units-2vw);
    }
    .details > p {
        margin: var(--units-025vw) auto;
    }
    button{
        width: 100%;
    }

</style>