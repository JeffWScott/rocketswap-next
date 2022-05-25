<script>
	import logo_rocket from '$lib/svg/logo-rocket.svg';
	import logo_rocketswap from '$lib/svg/logo-rocketswap.svg';
	import logo_twitter from '$lib/svg/logo-twitter.svg';
	import logo_medium from '$lib/svg/logo-medium.svg';
	import logo_telegram from '$lib/svg/logo-telegram.svg';
	import menu_burger from '$lib/header/menu-burger.svg';

	// Utils
	import { toggle_menu } from '$lib/mobile-menu/menu-functions'

</script>

<header class="flex">
	<div class="corner left flex row">
		<a href="https://rocketswap.exchange/" class="desktop max-content">
			<img src={logo_rocket} alt="Rocketswap" class="rocketship-icon" />
		</a>
		<div class="desktop flex row max-content">
			<div class="ml-1 rocketswap">
				<a href="https://rocketswap.exchange/">
					<img src={logo_rocketswap} alt="Rocketswap" />
				</a>
				TAU: $0.066 | RSWP: $0.016
			</div>

			<span class="inline-flex align-center ml-1 weight-300">
				Powered by <a href="https://www.lamden.io" class="link-primary">Lamden</a>
			</span>
		</div>
		<div class="mobile flex col grow">
			<a href="https://rocketswap.exchange/" class="rocketswap">
				<img src={logo_rocketswap} alt="Rocketswap" />
			</a>
			<span class="inline-flex align-center ml-1 weight-300">
				Powered by <a href="https://www.lamden.io" class="link-primary  ml-1 mr-1em">Lamden</a>
				TAU: $0.066 | RSWP: $0.016
			</span>
		</div>
	</div>

	<div class="corner right flex row align-center mobile">
		<img src={menu_burger} alt="menu" on:click={toggle_menu}/>
	</div>
	<div class="desktop corner right flex row align-center ">
		<a href="https://twitter.com/RSwapOfficial" class="ml-1">
			<img src={logo_telegram} alt="Telegram" />
		</a>
		<a href="https://twitter.com/RSwapOfficial" class="ml-1">
			<img class="logo_medium" src={logo_medium} alt="Medium" />
		</a>
		<a href="https://twitter.com/RSwapOfficial" class="ml-1">
			<img src={logo_twitter} alt="Twitter" />
		</a>
	</div>
</header>

<style>
	header {
		position: fixed;
		box-sizing: border-box;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 100;
		display: flex;
		justify-content: space-between;
		background-color: var(--panel-background-color);
		padding: var(--units-1_2vw) var(--units-2vw) var(--units-1_2vw) var(--units-6vw);
		height: var(--units-5vw);
		min-height: 38.5px;

        box-shadow: var(--panel-box-shadow-high);
        -webkit-box-shadow: var(--panel-box-shadow-high);
        -moz-box-shadow: var(--panel-box-shadow-high);
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.corner.right{
		width: var(--units-9vw);
	}

	.corner.left{
		width: 40vw;
	}

	.corner img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	a.max-content{
		width: max-content;
	}
	
	a.link-primary{
		width: unset;
		font-weight: 200;
	}

	.rocketswap{
		line-height: 0.8;
		padding: var(--units-015vw);
	}

	img.logo_medium{
		height: 136%;
	}
	
	@media (max-width: 768px) {
        header{
			font-size: var(--units-1vw);
        }
		.corner.left{
			width: 307.594px;
		}
    }

	@media (max-width: 480px) {
        header{
			padding: 7vw 5vw;
			height: unset;
        }
		
		.corner a{
			width: unset;
			height: unset;
		}
		.corner.right{
			width: 13vw;
		}
		.rocketswap{
			width: 50vw;
		}
		.corner img{
			height: unset;
		}
		.corner.left{
			width: 100%;
			font-size: var(--units-1vw);
		}
		.mobile .rocketswap{
			width: 55vw;
		}
    }
</style>
