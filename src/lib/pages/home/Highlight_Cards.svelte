<script>
    import HighlightCard from '$lib/pages/home/Highlight_Card.svelte'

    const cards = [
        {
            title: "$2.2 Million Trade Volume"
        },
        {
            title: "10.2M Total Trades"
        },
        {
            title: "$1.9 Total Value Locked"
        }
    ]
</script>

<div class="cards flex row space-between">
    {#each cards as card_data}
        <HighlightCard {card_data} />
    {/each}
</div>

<style>
    .cards{
        justify-content: space-between;
        box-sizing: border-box;
    }
</style>