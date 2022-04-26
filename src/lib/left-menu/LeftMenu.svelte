<script>
    import icon_house from './icon-house.svg'
    import icon_swap from './icon-swap.svg'
    import icon_fuel from './icon-fuel.svg'
    import icon_pool from './icon-pool.svg'
    import icon_farm from './icon-farm.svg'
    import icon_help from './icon-help.svg'
    import icon_connect_wallet from './icon-connect-wallet.svg'
</script>

<nav id="left-menu" class="flex col align-center">
    <ul>
        <li class="text-gradient-primary">
            <img src={icon_house} alt="Home"/>
            Home
        </li>
        <li>
            <img src={icon_swap} alt="Home"/>
            Swap
        </li>
        <li>
            <img src={icon_fuel} alt="Home"/>
            Fuel
        </li>
        <li>
            <img src={icon_pool} alt="Home"/>
            Pool
        </li>
        <li>
            <img src={icon_farm} alt="Home"/>
            Farm
        </li>
        <li>
            <img src={icon_help} alt="Home"/>
            Help
        </li>
        <li>
            <img src={icon_connect_wallet} alt="Home"/>
            Connect Wallet
        </li>
    </ul>
    
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 5.2vw;
        min-width: 40px;

        height: 100vh;
        background-color: var(--panel-background-color);
        padding: 7vw 0vw 0vw;

        box-shadow: -1px 3px 26px 15px rgba(0,0,0,0.31);
        -webkit-box-shadow: -1px 3px 26px 15px rgba(0,0,0,0.31);
        -moz-box-shadow: -1px 3px 26px 15px rgba(0,0,0,0.31);
    }

    ul{
        width: 100%;
        box-sizing: border-box;
        padding: 0;
    }

    ul:first-child{
        margin-top: 0;
    }

    li{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--primary-gradient);
        margin: 2vw 0;
        overflow-wrap: normal;
    }

    li img{
        width: 32%;
        margin-bottom: 0.3vw;
    }

    @media (max-width: 768px) {
        nav{
            padding-top:  53.76px;
            font-size: var(--font-size-fixed-768);
            font-size: var(--units-09vw);
        }
        li img{
            margin-bottom: 2.307px;
        }
        li {
            margin: 15.38px 0;
        }
    }

    @media (max-width: 480px) {
        nav{
            display: none;
        }
    }
</style>