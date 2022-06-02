<script>
    // Components
    import TokenName from '$lib/misc-components/TokenName.svelte'

    let active_tab = "0"

    const mock_recent_trades = [
        {
            token_details: {
                token_name: "Rocketswap",
                token_symbol: "RSWP",
                verified: true,
            },
            amount: "148,791.00",
            type: "Buy",
            trade_price: "82,191.88499",
            trade_TAU_value: "7,697,691.75116",
            date: "1/14/2022 2:28:47 PM"
        },
        {
            token_details: {
                token_name: "Wrapped Ethereum",
                token_symbol: "WETH",
                verified: true,
            },
            amount: "2.00",
            type: "Sell",
            trade_price: "228,911.42455",
            trade_TAU_value: "5,273,724.58225",
            date: "1/14/2022, 2:28:47 PM"
        }
    ]

    let mock_recent_trades_filtered = apply_filter()

    function apply_filter(){
        return mock_recent_trades.filter(f => f.type === "Buy")
    }
    
    function change_tab(e){
        if (e.target.getAttribute('tab-id') === active_tab) return

        if (active_tab === "0"){
            active_tab = "1"
            mock_recent_trades_filtered = mock_recent_trades
        }else{
            active_tab = "0"
            mock_recent_trades_filtered = apply_filter()
            
        }
    }
</script>

<div class="recent-trades">

<h2>Recent Trades</h2>

<button tab-id=0 class:primary-color={active_tab === "0"} class="text white" on:click={change_tab}>Your Trades</button>
<button tab-id=1 class:primary-color={active_tab === "1"} class="text white" on:click={change_tab}>All Trades</button>
    <div class="table-wrapper  fancy-scrollbar">
        <table>
            <thead>
                <tr>
                    <th>Token</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Trade Price</th>
                    <th>Trade Value in TAU</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {#each mock_recent_trades_filtered as recent_trade}
                    <tr>
                        <td><TokenName token_info={recent_trade.token_details} /></td>
                        <td>{recent_trade.amount}</td>
                        <td>{recent_trade.type}</td>
                        <td>{recent_trade.trade_price}</td>
                        <td>{recent_trade.trade_TAU_value}</td>
                        <td>{recent_trade.date}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<style>
    h2{
        margin-bottom: var(--units-06vw);
    }
    .recent-trades{
        padding-top: var(--units-2vw);
    }
    button{
        margin-right: var(--units-2vw);
    }
    table{
        margin-top: var(--units-06vw);
    }
    @media (max-width: 480px) {
        table{
            margin-top: 4vw;
        }
    }
</style>

