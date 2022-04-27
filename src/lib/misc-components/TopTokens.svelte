<script>
    // Images
    import icon_filter_settings from '$lib/svg/filter-settings.svg'
    import icon_search from '$lib/svg/search.svg'

    // Components
    import TokenName from '$lib/misc-components/TokenName.svelte'
    
    //Stores
    import {
        show_low_liquidity_filter,
        show_low_volume_filter,
        show_unverified_filter} from '$lib/js/stores/filter-stores'

    // MOCK IMAGES
    import temp_chart from '$lib/mock_images/temp_chart.svg'

    let top_token_filter_open = false
    let search_text = ""

    const mock_token_details = [
        {
            token_name: "Rocketswap",
            token_symbol: "RSWP",
            verified: true,
            price: "0.29446243",
            daily_price_change: "-6.04%",
            daily_trade_volume: "82,191,88499",
            liquidity: "7697691.75116"
        },
        {
            token_name: "Wrapped Ethereum",
            token_symbol: "WETH",
            verified: true,
            price: "24198.63315276",
            daily_price_change: "+4.38",
            daily_trade_volume: "228,911.42455",
            liquidity: "5,273,724.58225"
        },
        {
            token_name: "Lamden USD",
            token_symbol: "LUSD",
            verified: true,
            price: "5.56118638",
            daily_price_change: "+1.87",
            daily_trade_volume: "328,739.80419",
            liquidity: "3,296,091.61889"
        }
    ]

    let mock_token_details_filtered = apply_filters()

    const is_negative = (str_value) => str_value.includes("-")

    function toggle_top_token_filter(){
        if (top_token_filter_open) top_token_filter_open = false
        else{
            top_token_filter_open = true
        }
    }

    function handle_search(){
        mock_token_details_filtered = apply_filters()
    }

    function apply_filters(){
        let return_list = mock_token_details

        if (search_text.length > 0){

            return_list = return_list.filter(f => {
                return f.token_name.toLowerCase().includes(search_text.toLowerCase()) ||
                f.token_symbol.toLowerCase().includes(search_text.toLowerCase())
            })

        }
        if (show_low_volume_filter){
            null
        }
        if (show_low_liquidity_filter){
            null
        }
        if (show_unverified_filter){
            null
        }

        return return_list
    }
</script>

<div class="top-token">
    <h2>Top Tokens</h2>
    <div class="flex row align-center wrap">
        <div class="multiselect">
            <div class="selectBox" on:click={toggle_top_token_filter}>
                <select class:open={top_token_filter_open}>
                    <option>Filter</option>
                </select>
                <div class="flex flex-align-center overSelect">
                    <img src={icon_filter_settings} alt="filter settings" class="settings-icon"/>
                </div>
                
            </div>
            <div id="checkboxes" class:open={top_token_filter_open}>
                <label class="flex row chk-container align-center" class:checked={$show_low_liquidity_filter} id="chk-showLowLiquidity">
                    <input type="checkbox" bind:checked={$show_low_liquidity_filter} on:change={(e) => show_low_liquidity_filter.set(e.target.checked)}>
                    <span class="chk-checkmark chk-small"></span>
                    Show Low Liquidity
                </label>
                <label class="flex row chk-container align-center" class:checked={$show_low_volume_filter} id="chk-showLowVolume">
                    <input type="checkbox" bind:checked={$show_low_volume_filter} on:change={(e) => show_low_volume_filter.set(e.target.checked)}>
                    <span class="chk-checkmark chk-small"></span>
                    Show Low Volume
                </label>
                <label class="flex row chk-container align-center" class:checked={$show_unverified_filter} id="chk-showNotVerified">
                    <input type="checkbox" bind:checked={$show_unverified_filter} on:change={(e) => show_unverified_filter.set(e.target.checked)}>
                    <span class="chk-checkmark chk-small"></span>
                    Show Unverified Tokens
                </label>
                <button class="outlined white close-button" on:click={toggle_top_token_filter}><div>Close</div></button>
            </div>
        </div>
        <div class="token-search">
            <input class="primary_input" placeholder="Search" on:change={handle_search} bind:value={search_text}>
            <img class="search-icon" src={icon_search} alt="search" />
        </div>
        
    </div>
    <div class="table-wrapper">
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
                {#each mock_token_details_filtered as token_details, index}
                    <tr>
                        <td>{index + 1}</td>
                        <td>
                            <TokenName token_name={token_details.token_name} token_symbol={token_details.token_symbol} is_verified={token_details.verified} />
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
</div>


<style>
    .top-token{
        padding-top: var(--units-2vw);
    }

    img.chart{
        width: 6vw;
    }

    label{
        margin-top: var(--units-05vw);
        margin-bottom: var(--units-05vw);
        padding-left: var(--units-2vw);
    }

    select.open{
        border-radius: var(--units-1vw) var(--units-1vw) 0 0;
    }

    .selectBox {
        position: relative;
    }

    .selectBox:hover > select {
        cursor: pointer;
    }

    .selectBox select {
        width: 100%;
        background: var(--panel-background-color);
        color: var(--font-primary-color);
    }

    .overSelect {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .multiselect {
        z-index: 2;
        position: relative;
        width: 20vw;
        min-width: 175px;
        margin-bottom: var(--units-1vw);
        margin-right: var(--units-1vw);
        font-size: var(--font-size-1_2);
        box-shadow: var(--panel-box-shadow);
    }

    #checkboxes {
        z-index: -1;
        display: none;
        position: absolute;
        background: var(--panel-background-color);
        border-radius: 0 0 var(--units-1vw) var(--units-1vw);
        border-top: 1px;
        width: 100%;
        box-sizing: border-box;
        padding-bottom: var(--units-2vw);
        box-shadow: var(--panel-box-shadow);
    }

    #checkboxes.open{
        display: block;
    }

    #checkboxes label:hover {
        background-color: var(--panel-background-highlight);
    }
    button{
        display: block;
        margin: var(--units-1_5vw) auto 0;
    }
    .settings-icon{
        width: 2.3vw;
        min-width: 17.6797px;
        cursor: pointer;
        margin: 0 var(--units-1_2vw) 0 auto;
    }

    .token-search{
        position: relative;
        margin-bottom: var(--units-1vw);
        min-width: 175px;
    }

    .search-icon{
        cursor: pointer;
        position: absolute;
        width: var(--units-2vw);
        top: 25%;
        right: var(--units-1_4vw);
    }

    input{
        width: 100%;
        font-size: var(--font-size-1_2);
        background: var(--panel-background-color);
        color: var(--font-primary-color);
        padding: var(--units-1_1625vw) var(--units-2vw);
        border: 1px solid var(--panel-background-color);
        border-radius: var(--units-1vw);
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        .multiselect{
            width: 100%;
            margin-right: 0;
        }
        .token-search{
            width: 100%;

        }
        input{
            width: 100%;
        }
    }
</style>