<script>
    // Mock imports
    import token_logo_RSWP from '$lib/mock_images/token_logos/RSWP.svg'
    import token_logo_WETH from '$lib/mock_images/token_logos/WETH.svg'
    import token_logo_LUSD from '$lib/mock_images/token_logos/LUSD.svg'
    import token_logo_JEFF from '$lib/mock_images/token_logos/JEFF.svg'
    import token_logo_TAU from '$lib/mock_images/token_logos/TAU.svg'
    import token_logo_NEB from '$lib/mock_images/token_logos/NEB.svg'

    export let token_info

    const logo_map = {
        'RSWP': token_logo_RSWP,
        'WETH': token_logo_WETH,
        'LUSD': token_logo_LUSD,
        'JEFF': token_logo_JEFF,
        'TAU': token_logo_TAU,
        'NEB': token_logo_NEB
    }
</script>

<div>
    <img src={logo_map[token_info.token_symbol]} alt="token logo" class="token-logo" />
</div>

<style>
    img.token-logo{
        width: var(--units-2_5vw);
    }
    @media (max-width: 480px) {
        img.token-logo{
            width: 8vw;
        }
    }
</style>