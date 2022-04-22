<script>
    import TokenName from '$lib/misc-components/TokenName.svelte'

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

</script>

<div class="recent-trades">

<h2>Recent Trades</h2>

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
        {#each mock_recent_trades as recent_trade}
            <tr>
                <td><TokenName token_name={recent_trade.token_details.token_name} token_symbol={recent_trade.token_details.token_symbol} is_verified={recent_trade.token_details.verified} /></td>
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

<style>
    .recent-trades{
        padding-top: 2vw;
    }
</style>

