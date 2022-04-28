<script>
    import temp_chart from '$lib/mock_images/temp_chart.svg'
    export let card_data;
</script>

<div class="highlight panel flex col align-center">
    <img src="{temp_chart}" alt="temp_chart" />
    <h3>{card_data.title}</h3>
</div>

<style>
    .highlight{
        z-index: 0;
        text-align: center;
        box-sizing: border-box;
        width: 32%;
        padding: var(--units-1vw);
        box-shadow: var(--panel-box-shadow-shallow);
    }
    img{
        margin-top: var(--units-2vw);
        width: 70%;
    }
    h3{
        margin: 0;
    }

    @media (max-width: 480px) {
        .highlight{
            width: 100%;
            margin-bottom: var(--units-2vw);
        }
    }
</style>