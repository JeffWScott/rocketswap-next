<script>
    import { writable, get } from 'svelte/store';

    // Components
    import TokenName from '$lib/misc-components/TokenName.svelte'
    import TokenLogo from '$lib/misc-components/TokenLogo.svelte'
    import FilterSearch from '$lib/misc-components/FilterSearch.svelte';
    import FilterCheckbox from '$lib/misc-components/FilterCheckbox.svelte';
    import SetSort from '$lib/misc-components/SetSort.svelte';

    // Stores
    import { get_sorter } from '$lib/js/stores/sort-stores.js';
    import { get_filter_value } from '$lib/js/stores/filter-stores.js';

    // MOCK DATA
    import temp_chart from '$lib/mock_images/temp_chart.svg'
    import mock_token_details from '$lib/mock_data/token_info.json'

    let sort_store = get_sorter({daily_price_change: false})
    let search_text = ""

    sort_store.subscribe(apply_filters)

    $: mock_token_details_filtered = process_filters()

    const filter_list = [
        'Show Low Liquidity',
        'Show Low Volume',
        'Show Unverified Tokens'
    ]

    const is_negative = (value) => value < 0

    function handle_search(e){
        search_text = e.detail
        apply_filters()
    }

    function apply_filters(){
        mock_token_details_filtered = process_filters()
    }

    function process_filters(){
        let sort_store_value = $sort_store
        let return_list = mock_token_details.filter(f => !f.base_token)

        if (search_text.length > 0){
            return_list = return_list.filter(f => {
                return f.token_name.toLowerCase().includes(search_text.toLowerCase()) ||
                f.token_symbol.toLowerCase().includes(search_text.toLowerCase())
            })
        }
  

        if (!get_filter_value("Show Unverified Tokens")){
            return_list = return_list.filter(f => f.verified)
        }
        if (!get_filter_value("Show Low Liquidity")){
            return_list = return_list.filter(f => f.liquidity > 1000)
        }
        if (!get_filter_value("Show Low Volume")){
            return_list = return_list.filter(f => f.daily_trade_volume > 500)
        }

        if (Object.keys(sort_store_value).length > 0){
            let sort_name = Object.keys(sort_store_value)[0]
            let sort_value = sort_store_value[sort_name]
            
            if (sort_value){
                return_list.sort((a, b) => a[sort_name] > b[sort_name] ? 1 : -1)
            }else{
                return_list.sort((a, b) => a[sort_name] < b[sort_name] ? 1 : -1)
            }
        }

        return return_list
    }
</script>

<div class="top-token">
    <h2>Top Tokens</h2>
    <div class="flex row align-center wrap">
        <FilterCheckbox {filter_list} on:changed={apply_filters}/>
        <FilterSearch on:change={handle_search} />
    </div>
    <div class="table-wrapper fancy-scrollbar">
        <table>
            <thead>
                <tr>
                    <th class="sticky">#</th>
                    <th class="sticky logo-row"></th>
                    <th>Name <SetSort {sort_store} sort_name={"token_name"} /></th>
                    <th>Price TAU <SetSort {sort_store} sort_name={"price"} /></th>
                    <th>24hr % <SetSort {sort_store} sort_name={"daily_price_change"} /></th>
                    <th>Volume (24hrs) <SetSort {sort_store} sort_name={"daily_trade_volume"} /></th>
                    <th>Liquidity <SetSort {sort_store} sort_name={"liquidity"} /></th>
                    <th>Last 7 Days </th>
                </tr>
            </thead>
            <tbody>
                {#if mock_token_details_filtered.length > 0}
                    {#each mock_token_details_filtered as token_details, index}
                        <tr>
                            <td class="sticky">{index + 1}</td>
                            <td class="sticky logo-row">
                                <TokenLogo token_info={token_details} />
                            </td>
                            <td>
                                <TokenName token_info={token_details} show_logo={false}/>
                            </td>
                            <td>{token_details.price}</td>
                            <td class:text-red={is_negative(token_details.daily_price_change)} class:text-green={!is_negative(token_details.daily_price_change)}>{token_details.daily_price_change}%</td>
                            <td>{token_details.daily_trade_volume}</td>
                            <td>{token_details.liquidity}</td>
                            <td>
                                <img src={temp_chart} alt="last 7 days chart" class="chart"/>
                            </td>
                        </tr>
                    {/each}
                {:else}
                        <tr class="no-results">
                            <td></td>
                            <td>
                                <p>No tokens match filter criteria</p>
                            </td>
                        </tr>
                {/if}
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
        .sticky{
            position: sticky;
            left: 0;
            z-index: 2;
            background-color: var(--panel-background-color);
            padding-right: 5px;
        }
        .logo-row{
            left: 43px;
            z-index: 1;
        }
    }
</style>