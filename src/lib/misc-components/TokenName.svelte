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
    <span class="name">{token_name} </span>
    <span class="symbol">{token_symbol} </span>
    {#if is_verified}
        <img src={verified_token} alt="verified token" class="verified" />
    {/if}
</div>

<style>
    img.token-logo{
        width: var(--units-2_5vw);
        margin-right: var(--units-2vw);
    }
    img.verified{
        width: var(--units-1_5vw);
        margin-left: var(--units-1vw);
    }
    span.name{
        white-space: nowrap;
    }
    span.symbol{
        color: var(--font-primary-color-dark);
        margin-left: var(--units-1vw);

    }
    @media (max-width: 480px) {
        img.token-logo{
            width: 8vw;
            margin-right: 6vw;
        }
        img.verified{
            width: 4vw;
        }
    }
</style>