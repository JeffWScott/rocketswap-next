<script>
    // Stores
    import { currency_token } from '$lib/js/stores/token-stores'

    export let token_info


</script>

<div class="wrapper">
    <div class="currency">
        <img src={$currency_token.token_logo} alt="currency token" />
    </div>
    <div class="token">
        <img src={token_info.token_logo} alt="currency token" />
    </div>
</div>

<style>
    .wrapper{
        position: relative;
        width: inherit;
        height: inherit;
        overflow: hidden;
        border-radius: 100vw;
        background-color: #aeaeae4f;
        border: var(--units-01vw) solid var(--pure-white);
    }
    .currency{
        position: absolute;
        top: 0;
        left: 50%;
        border-left: var(--units-005vw) solid var(--pure-white);
    }
    .token{
        border-right: var(--units-005vw) solid var(--pure-white);
    }
    .currency > img{
        transform: translateX(-50%);
    }
    .currency, .token{
        width: 50%;
        overflow: hidden;
    }
    img{
        width: 200%;
    }
</style>