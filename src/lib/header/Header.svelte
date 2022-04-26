<script>
	import { page } from '$app/stores';
	import logo_rocket from '$lib/svg/logo-rocket.svg';
	import logo_rocketswap from '$lib/svg/logo-rocketswap.svg';
	import logo_twitter from '$lib/svg/logo-twitter.svg';
	import logo_medium from '$lib/svg/logo-medium.svg';
	import logo_telegram from '$lib/svg/logo-telegram.svg';
</script>

<header class="flex">
	<div class="corner left flex row">
		<a href="https://rocketswap.exchange/" class="max-content">
			<img src={logo_rocket} alt="Rocketswap" class="rocketship-icon" />
		</a>
		<div class="flex row max-content">
			<div class="ml-1 rocketswap">
				<a href="https://rocketswap.exchange/">
					<img src={logo_rocketswap} alt="Rocketswap" />
				</a>
				TAU: $0.066 | RSWP: $0.016
			</div>

			<span class="inline-flex align-center ml-1 weight-300">
				Powered by <a href="www.lamden.io" class="link-primary">Lamden</a>
			</span>
			
		</div>

	</div>

	<div class="corner right flex row align-center">
		<!-- TODO put something else here? github link? -->
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

		box-shadow: -1px 3px 26px 15px rgba(0,0,0,0.31);
		-webkit-box-shadow: -1px 3px 26px 15px rgba(0,0,0,0.31);
		-moz-box-shadow: -1px 3px 26px 15px rgba(0,0,0,0.31);
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
			font-size: var(--font-size-fixed-768);
        }
		.corner.left{
			width: 307.594px;
		}
    }
</style>
