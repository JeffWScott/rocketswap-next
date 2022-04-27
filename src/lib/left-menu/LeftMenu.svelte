<script>
    import { page } from '$app/stores';

    import menu_icon_map from '$lib/config/menu-icons.js'
    import menu_items from '$lib/config/menu-items.json'

    $: current_route = $page.url.pathname
</script>

<nav id="left-menu" class="desktop flex col align-center">
    <ul>
        {#each menu_items as menu_item}
            <li class="text-gradient-primary"
                class:text-gradient-primary={current_route.startsWith(menu_item.path)}>
                <img src={menu_icon_map[menu_item.logo]} alt="{menu_item.name}"/>
                {menu_item.name}
            </li>
        {/each}
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

        box-shadow: var(--panel-box-shadow);
        -webkit-box-shadow: var(--panel-box-shadow);
        -moz-box-shadow: var(--panel-box-shadow);
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
</style>