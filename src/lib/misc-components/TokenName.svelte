<script>
    import verified_token from '$lib/svg/verified_token.svg'

    // Mock imports
    import token_logo_RSWP from '$lib/mock_images/token_logos/RSWP.svg'
    import token_logo_WETH from '$lib/mock_images/token_logos/WETH.svg'
    import token_logo_LUSD from '$lib/mock_images/token_logos/LUSD.svg'

    export let token_name
    export let token_symbol
    export let is_verified

    const logo_map = {
        'RSWP': token_logo_RSWP,
        'WETH': token_logo_WETH,
        'LUSD': token_logo_LUSD
    }
</script>

<div class="flex row align-center">
    <img src={logo_map[token_symbol]} alt="token logo" class="token-logo" />
    {token_name} 
    <span>{token_symbol} </span>
    {#if is_verified}
        <img src={verified_token} alt="verified token" class="verified" />
    {/if}
</div>

<style>
    img.token-logo{
        width: 2.5vw;
        margin-right: 2vw;
    }
    img.verified{
        width: 1.5vw;
        margin-left: 1vw;
    }
    span{
        color: var(--font-primary-color-dark);
        margin-left: 1vw;
    }
</style>