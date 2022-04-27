<script>
    // Icons
    import icon_connect_wallet from '$lib/svg/menu/icon-connect-wallet.svg'

    // Utils
    import { close_menu } from '$lib/mobile-menu/menu-functions'

</script>

<li>
    <button class="flex row align-center" on:click={close_menu}>
        <img src={icon_connect_wallet} alt="Connect Wallet" />
        Connect Wallet
    </button>
</li>

<style>
    button{
        display: flex;
        color: var(--primary-gradient);
        background-color: var(--panel-background-color);
        font-size: 4vw;
    }
    button{
        padding: 1.5vh 2.5vw;
        width: 100%;
    }
    button:hover{
        text-decoration: underline;
        background-color: var(--panel-background-highlight);
    }
    button > img{
        margin-right: 5vw;
        width: 8.5vw;
    }
</style>