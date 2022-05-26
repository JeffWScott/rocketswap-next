<script>
    // Components
    import TokenName from '$lib/misc-components/TokenName.svelte'
    import FilterSearch from '$lib/misc-components/FilterSearch.svelte';
    import FilterCheckbox from '$lib/misc-components/FilterCheckbox.svelte';
    
    //Stores
    import {
        show_low_liquidity_filter,
        show_low_volume_filter,
        show_unverified_filter} from '$lib/js/stores/filter-stores'

    // MOCK DATA
    import temp_chart from '$lib/mock_images/temp_chart.svg'
    import mock_token_details from '$lib/mock_data/token_info.json'

    let mock_token_details_filtered = apply_filters()

    const filter_list = [
        'Show Low Liquidity',
        'Show Low Volume',
        'Show Unverified Tokens'
    ]

    const is_negative = (str_value) => str_value.includes("-")

    function handle_search(e){
        const search_text = e.detail
        mock_token_details_filtered = apply_filters(search_text)
    }

    function apply_filters(search_text = ""){
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
        <FilterCheckbox {filter_list} />
        <FilterSearch on:change={handle_search} />
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

    @media (max-width: 480px) {
        img.chart{
            width: 15vw;
        }
    }
</style>