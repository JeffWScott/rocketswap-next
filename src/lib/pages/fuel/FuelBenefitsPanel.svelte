<script>

</script>

<div class="panel flex col center">
    <h2>Exclusive VIP Benefits</h2>

    <div class="benefit-item">
        <span>25%</span>
        discount on Rocketswap fees when paying in RSWP. You still have to pay network fees.
    </div>

    <div class="benefit-item">
        <span>Plus</span>
        additional discount on fees depending on how much RSWP is in your Fuel Tank.
    </div>

    <div class="switch">
         Pay all fee's in RSWP
        <label>
            <input type="checkbox" checked />
            <span class="slider round"></span>
          </label>
    </div>


    <button class="outlined white"><div>Buy RSWP</div></button>
</div>


<style>
    div.panel{
        width: 49%;
        padding: var(--units-3vw) var(--units-3vw) var(--units-5vw);
        box-sizing: border-box;
    }

    .switch{
        margin: var(--units-1vw) 0;
    }

    div.benefit-item{
        display: inline-flex;
        align-items: center;
        font-size: var(--units-1_1vw);
        font-weight: 300;
        margin-bottom: var(--units-1vw);
    }

    div.benefit-item > span{
        font-size: var(--units-4_5vw);
        font-weight: 700;
        margin-right: var(--units-1vw);
    }

    button{
        margin-top: var(--units-1vw);
    }

    @media (max-width: 480px) {
        div.panel{
            width: 100%;
            margin-bottom: var(--units-2vw);
        }

        div.benefit-item{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>