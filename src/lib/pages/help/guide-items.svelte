<script>
	// Components
	import GuideItem from '$lib/pages/help/guide-item.svelte'

	// Icons
	import Code from '$lib/pages/help/code.svg'
	import Fees from '$lib/pages/help/fees.svg'
	import PlusCircle from '$lib/pages/help/plus-circle.svg'

	const guideItems = [
		{
			icon: PlusCircle,
			title: "Creating Tokens",
			link: "https://rocketswap.exchange/docs/#/token"
		},
		{
			icon: Code,
			title: "Developer Resources",
			link: "https://rocketswap.exchange/docs/#/developer_docs"
		},
		{
			icon: Fees,
			title: "Fees & Discounts",
			link: "https://rocketswap.exchange/docs/#/fee_discount"
		}
	]

</script>

<style>
	div{
		flex-direction: row;
		justify-content: space-between;
        width: 100%;
	}

	@media (max-width: 480px) {
        div{
			flex-direction: column;
		}
	}

</style>

<div class="flex">
	{#each guideItems as guideItem}
		<GuideItem {guideItem} />
	{/each}
</div>
