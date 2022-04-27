<script>
    // Icons
    import icon_connect_wallet from '$lib/svg/menu/icon-connect-wallet.svg'

    // Utils
    import { close_menu } from '$lib/mobile-menu/menu-functions'

</script>

<li>
    <button class="flex align-center" on:click={close_menu}>
        <img src={icon_connect_wallet} alt="Connect Wallet" />
        Connect Wallet
    </button>
</li>

<style>
    button{
        box-sizing: border-box;
        flex-direction: column;
        overflow-wrap: normal;
        cursor: pointer;

        color: var(--font-primary-color);
        padding: var(--units-08vw) 0;
        margin: var(--units-03vw) 0;
        font-size: var(--units-08vw);
        font-weight: 200;
        
        background-color: var(--panel-background-color);
        width: 100%;
    }

    button img{
        width: 38%;
        margin-bottom: var(--units-03vw);
    }

    button:hover{
        background-color: var(--panel-background-highlight);
    }

    @media (max-width: 480px) {
        button{
            flex-direction: row;
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
    }
</style>