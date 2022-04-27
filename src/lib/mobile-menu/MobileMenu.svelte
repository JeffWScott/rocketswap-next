<script>
    import { page, navigating } from '$app/stores';

    import menu_icon_map from '$lib/config/menu-icons.js'
    import menu_items from '$lib/config/menu-items.json'

    import logo_twitter from '$lib/svg/logo-twitter.svg';
	import logo_medium from '$lib/svg/logo-medium.svg';
	import logo_telegram from '$lib/svg/logo-telegram.svg';

    // Store
	import { menu_open } from '$lib/js/stores/app-stores'

    // Utils
    import { close_menu } from '$lib/mobile-menu/menu-functions'

    $: current_route = $page.url.pathname

    navigating.subscribe(close_menu)

</script>

<div class="mobile">
    <div class:open={$menu_open} class="menu">
        <ul>
            {#each menu_items as menu_item}
                <li class:text-gradient-primary={current_route == menu_item.path}
                >
                    <a href="{menu_item.path}" class="flex row align-center" >
                        <img src={menu_icon_map[menu_item.logo]} alt="{menu_item.name}"/>
                        {menu_item.name}
                    </a>
                </li>
            {/each}
        </ul>
        <div class="socials flex align-center space-between">
            <a href="https://twitter.com/RSwapOfficial" >
                <img src={logo_telegram} alt="Telegram" />
            </a>
            <a href="https://twitter.com/RSwapOfficial">
                <img class="logo_medium" src={logo_medium} alt="Medium" />
            </a>
            <a href="https://twitter.com/RSwapOfficial">
                <img src={logo_twitter} alt="Twitter" />
            </a>
        </div>
    </div>
</div>
<style>
    .open.menu{
        display: block;
    }
    .menu{
        display: none;
        z-index: 9;
        background-color: var(--panel-background-color);
        padding: 27vw 5vw 0;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        touch-action: none;
    }
    .socials{
        padding: 3vh 20vw;
        box-sizing: border-box;
    }
    .socials > a > img{
        width: 12vw;
    }
    .socials > a > img.logo_medium{
        width: 14vw;
    }
    ul{
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        font-size: 4vw;
        font-weight: 600;
    }

    ul:first-child{
        margin-top: 0;
    }

    li{
        display: flex;
        color: var(--primary-gradient);
        margin: 3vh 0;
    }
    li > a > img{
        margin-right: 5vw;
        width: 8.5vw;
    }
</style>