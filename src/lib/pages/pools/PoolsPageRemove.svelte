<script>
    // Stores
    import { currency_token } from '$lib/js/stores/token-stores'

    export let token_info

    let input_percent = 25

    function handle_input_change(e){
        console.log(e)
    }
    function change_input_percent(e){
        input_percent = e.target.getAttribute('percent')
    }
</script>

<h2>Remove Liquidity</h2>
<div class="nav flex row">
    <a href="/pools" class="link-primary">Back</a>
    <a href="/pools/add" class="link-primary">Add Liquidity</a>
</div>
<div class="panel">
    <p class="title">Amount</p>
    <p class="percent-number">{input_percent}%</p>
    <input 
        type="range"
        bind:value={input_percent}
        on:input={handle_input_change}
    />
    <div class=" flex row space-around amount-buttons">
        <button class="outlined white"><div percent=25 on:click={change_input_percent}>25%</div></button>
        <button class="outlined white"><div percent=50 on:click={change_input_percent}>50%</div></button>
        <button class="outlined white"><div percent=75 on:click={change_input_percent}>75%</div></button>
        <button class="outlined white"><div percent=100 on:click={change_input_percent}>MAX</div></button>
    </div>

    <div class="token-display flex row align-center">
        <div class="token-logo">
            <img src={$currency_token.token_logo} alt="tau_logo" />
        </div>
        <div class="token-symbol">
            {$currency_token.token_symbol}
        </div>
        <div class="token-amount">
            0
        </div>
    </div>

    <div class="token-display flex row align-center">
        <div class="token-logo">
            <img src={token_info.token_logo} alt="tau_logo" />
        </div>
        <div class="token-symbol">
            {token_info.token_symbol}
        </div>
        <div class="token-amount">
            0
        </div>
    </div>

    <div class="price-details">
        <p>Price</p>
        <p>1 WP = 24.98245078 TAU</p>
        <p>1 TAU = 0.04002809 LUSD</p>
    </div>

    <button class="remove outlined primary white"> 
        <div>
            REMOVE SUPPLY
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
        min-width: var(--units-37vw);
    }
    
    p.title{
        color: var(--font-primary-color-dark);
        margin: 0;
    }
    .percent-number{
        font-size: var(--units-4_7vw);
        font-weight: 600;
        margin: 0;
    }
    .amount-buttons{
        margin-bottom: var(--units-2vw);
    }
    .amount-buttons > button{
        width: fit-content;
    }
    .amount-buttons > button > div{
        padding-left: var(--units-2vw);
        padding-right: var(--units-2vw);
    }
    .token-display{
        margin: var(--units-08vw) 0;
        font-weight: 400;
    }
    .token-logo{
        width: 40%;
        text-align: end;
        margin-right: var(--units-2vw);
    }
    .token-symbol{
        width: 15%;
        font-size: var(--units-1_1vw);
    }
    .token-amount{
        font-size: var(--units-1_5vw);
    }
    .price-details{
        width: 100%;
        color: var(--font-primary-color-dark);
    }
    .price-details > p{
        text-align: center;
        margin: 0;
    }
    button.remove{
        width: 100%;
        margin-top: var(--units-2vw);
        margin-bottom: var(--units-1vw);
    }


    input[type="range"]{
        -webkit-appearance: none;  /* Override default CSS styles */
        appearance: none;
        border: none;
        border-radius: var(--units-1vw);
        outline: none;

        width: 100%; 
        height: var(--units-08vw); 
        background: var(--primary-gradient);
        margin: var(--units-05vw) 0 var(--units-3vw);
    }

    input[type="range"]:hover{
        filter: brightness(110%);
    }

    input[type="range"]::-webkit-slider-thumb {
        position: relative;
        -webkit-appearance: none;
        appearance: none;
        border-radius: 99px;
        width: var(--units-2_5vw);
        height: var(--units-2_5vw);
        background: white;
        border: var(--units-025vw) solid var(--primary-color);

        cursor: pointer;
    }

    input[type="range"]:hover::-webkit-slider-thumb {
        filter: brightness(110%);
    }

    input[type="range"]:active::-webkit-slider-thumb {
        width: var(--units-2vw);
        height: var(--units-2vw);
        filter: brightness(120%);
    }

</style>