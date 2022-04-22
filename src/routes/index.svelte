<script context="module">
	export const prerender = true;
</script>

<script>
	import HighlightCards from "$lib/pages/home/Highlight_Cards.svelte";
	import TopTokens from "$lib/misc-components/TopTokens.svelte";
	import RecentTrades from "$lib/misc-components/RecentTrades.svelte";
</script>

<svelte:head>
	<title>Rocketswap Home</title>
</svelte:head>

<section class="flex col grow-1">
	<HighlightCards />
	<TopTokens />
	<RecentTrades />
</section>

<style>

</style>
