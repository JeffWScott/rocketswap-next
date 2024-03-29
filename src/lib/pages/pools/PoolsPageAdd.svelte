<script>
    // Components
    import TokenDisplay from "$lib/misc-components/TokenDisplay.svelte";
    import InputNumber from "$lib/inputs/InputNumber.svelte";
    import ConfirmPoolsAdd from '$lib/modals/confirms/ConfirmPoolsAdd.svelte'
    import TokenSelect from '$lib/modals/TokenSelect.svelte'

    // Stores
    import { currency_token } from '$lib/js/stores/token-stores'

    // Images
    import icon_plus from '$lib/svg/plus.svg'

    // Utils
    import { window_history_set_pools_add_contract } from '$lib/js/page-utils.js'
    import { handle_modal_open } from '$lib/js/event-handlers'

    export let token_info = null

    $: selected_token = token_info
    $: selected_token_contract_name = selected_token ? selected_token.contract_name : ""

    function set_selected_token(e){
        selected_token = e
        window_history_set_pools_add_contract(selected_token.contract_name)
    }

    function handle_click(e){
        handle_modal_open({
            modal: TokenSelect,
            callback: set_selected_token
        })
    }
    function handle_open_confirm_add(){
        handle_modal_open({
            modal: ConfirmPoolsAdd,
            callback: () => console.log("confirm add"),
            modal_data: {
                token_info: selected_token
            }
        })
    }
</script>

<h2>Add Liquidity</h2>
<div class="nav flex row">
    <a href="/pools" class="link-primary">Back</a>
    <a href="{`/pools/remove/${selected_token_contract_name}`}" class="link-primary" class:disabled={!selected_token}>Remove Liquidity</a>
</div>
<div class="panel">
    <p class="heading">Base</p>
    <div class="flex row space-between">
        <div class="token-details flex col">
            <TokenDisplay token_info={$currency_token} position="from"/>
            <p>Price 0.1510419 TAU per LUSD</p>
        </div>
        <div class="flex col">
            <InputNumber />
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
            <InputNumber />
            <p>Balance: 100 LUSD</p>
        </div>
    </div>

    <div class="details">
        <p>Current prices and pool share: 0%</p>
        <p>0.01193155: TAU per NEB</p>
        <p>83.81137068: NEB per TAU</p>
        <p>0%: New share</p>
    </div>

    <button class="outlined primary white" on:click={handle_open_confirm_add}> 
        <div>
            ADD SUPPLY
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