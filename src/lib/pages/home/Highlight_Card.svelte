<script>
    import temp_chart from '$lib/mock_images/temp_chart.svg'
    export let card_data;
</script>

<div class="highlight flex col align-center">
    <img src="{temp_chart}" alt="temp_chart" />
    <h2>{card_data.title}</h2>
</div>

<style>
    .highlight{
        min-width: 25vw;
        border-radius: 1vw;
        background-color: var(--panel-background-color);
        padding: 1vw;
    }
    img{
        margin-top: 2vw;
        width: 70%;
    }
    h2{
        margin: 0;
    }
</style>