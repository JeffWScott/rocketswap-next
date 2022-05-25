<script>
    // Components
    import FuelGauge from "$lib/pages/fuel/FuelGauge.svelte";
    import InputNumber from '$lib/inputs/InputNumber.svelte';
</script>

<div class="panel flex col align-center">
    <div class="container">
        <FuelGauge />
        <div class="controls">
            <p class="discount-amount">Current Trade Fee Discount: 10%</p>
            <p class="amount-staked text-primary-color-dark">1361 RSWP Staked</p>
            <InputNumber />
            <div class="flex row space-between buttons">
                <button class="outlined primary white"><div>Add Fuel</div></button>
                <button class="outlined white"><div>Remove Fuel</div></button>
            </div>
            <span class="text-primary-color-dark">Minimum Stake is 1361 RSWP</span>
        </div>
    </div>
</div>


<style>
    div.panel{
        width: 49%;

        padding: var(--units-2_5vw) 0;
        box-sizing: border-box;
    }
    div.container{
        width: var(--units-22vw);
        margin: 0 auto;
    }
    div.controls{
        padding: var(--units-1vw) var(--units-1vw);
        text-align: center;
    }
    .buttons{
        width: 100%;
        margin: var(--units-1_2vw) 0;
    }
    button{
        width: var(--units-9vw);
    }
    button > div{
        padding-left: 0;
        padding-right: 0;
    }
    p{
        font-size: var(--units-1_2vw);
        margin: 0;
    }
    p.discount-amount{
        margin-top: var(--units-1vw);
    }
    p.amount-staked{
        margin-bottom: var(--units-1vw);
    }
    span{
        font-size: var(--units-09vw);
    }

    @media (max-width: 480px) {
        div.panel{
            width: 100%;
        }
        div.container{
            width: 100%;
        }
        div.controls{
            padding: var(--units-2vw) var(--units-4vw);
            text-align: center;
        }
        p{
            font-size: var(--units-2_2vw);
            margin: 0;
        }
        .buttons{
            margin: var(--units-3vw) 0;
        }
        button{
           width: 49%;
        }
        span{
            font-size: var(--units-2vw);
        }
    }
    
</style>