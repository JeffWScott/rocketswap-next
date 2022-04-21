<script>
    
    import verified_token from '$lib/svg/verified_token.svg'

    // MOCK IMAGES
    import temp_chart from '$lib/mock_images/temp_chart.svg'

    import token_logo_RSWP from '$lib/mock_images/token_logos/RSWP.svg'
    import token_logo_WETH from '$lib/mock_images/token_logos/WETH.svg'
    import token_logo_LUSD from '$lib/mock_images/token_logos/LUSD.svg'

    const mock_token_details = [
        {
            token_name: "Rocketswap",
            token_symbol: "RSWP",
            token_logo: token_logo_RSWP,
            verified: true,
            price: "0.29446243",
            daily_price_change: "-6.04%",
            daily_trade_volume: "82,191,88499",
            liquidity: "7697691.75116"
        },
        {
            token_name: "Wrapped Ethereum",
            token_symbol: "WETH",
            token_logo: token_logo_WETH,
            verified: true,
            price: "24198.63315276",
            daily_price_change: "+4.38",
            daily_trade_volume: "228,911.42455",
            liquidity: "5,273,724.58225"
        },
        {
            token_name: "Lamden USD",
            token_symbol: "LUSD",
            token_logo: token_logo_LUSD,
            verified: true,
            price: "5.56118638",
            daily_price_change: "+1.87",
            daily_trade_volume: "328,739.80419",
            liquidity: "3,296,091.61889"
        }
    ]

    function is_negative(str_value){
        console.log(str_value)
        return str_value.includes("-")
    }
</script>

<div class="top-token">
    <h2>Top Tokens</h2>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price TAU</th>
                <th>24hr %</th>
                <th>Volume (24hrs)</th>
                <th>Liquidity</th>
                <th>Last 7 Days</th>
            </tr>
        </thead>
        <tbody>
            {#each mock_token_details as token_details, index}
                <tr>
                    <td>{index + 1}</td>
                    <td >
                        <div class="cell-token-name flex row align-center">
                            <img src={token_details.token_logo} alt="token logo" class="token-logo" />
                            {token_details.token_name} 
                            <span>{token_details.token_symbol} </span>
                            {#if token_details.verified}
                                <img src={verified_token} alt="verified token" class="verified" />
                            {/if}
                        </div>

                    </td>
                    <td>{token_details.price}</td>
                    <td class:text-red={is_negative(token_details.daily_price_change)} class:text-green={!is_negative(token_details.daily_price_change)}>{token_details.daily_price_change}</td>
                    <td>{token_details.daily_trade_volume}</td>
                    <td>{token_details.liquidity}</td>
                    <td>
                        <img src={temp_chart} alt="last 7 days chart" class="chart"/>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>


<style>
    .top-token{
        padding-top: 2vw;
    }
    img.token-logo{
        width: 2.5vw;
        margin-right: 2vw;
    }
    img.verified{
        width: 1.5vw;
        margin-left: 1vw;
    }
    img.chart{
        width: 6vw;
    }
    .cell-token-name > span{
        color: var(--font-primary-color-dark);
        margin-left: 1vw;
    }
</style>