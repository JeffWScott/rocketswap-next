<script>
    import swap_chart from '$lib/mock_images/swap_chart.svg'
</script>

<div class="flex col swap-chart">
    <h2>Price Chart</h2>
    <div class="panel flex col grow-1 space-between">
        <p class="date-range">November 1 - December 15</p>
        <img src={swap_chart} alt="swap chart" />
        <div class="text-primary-color-dark">
            <p class="token-name">Lamden TAU</p>
            <p class="token-price">$0.144</p>
        </div>

    </div>
</div>

<style>
    p{
        margin: 0;
    }
    .swap-chart{
        width: 49%;
    }
    div.panel{
        padding: var(--units-1vw) var(--units-1_5vw) var(--units-2vw);
    }
    img{
        width: 90%;
        align-self: center;
        margin-top: 2.5vw;
    }
    p.date-range{
        text-align: right;
        color: var(--primary-color);
        text-decoration: underline;
        font-size: var(--units-1_2vw);
    }
    p.token-name{
        font-size: var(--units-1_1vw);
        font-weight: 300;
    }
    p.token-price{
        font-size: var(--units-1_3vw);
        font-weight: 600;
    }

    @media (max-width: 480px) {
        .swap-chart{
            width: 100%;
        }
    }
</style>