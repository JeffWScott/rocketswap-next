<script>
    // Components
    import FilterSearch from '$lib/misc-components/FilterSearch.svelte'
    import FilterCheckboxCheck from '$lib/misc-components/FilterCheckboxCheck.svelte'
    import SetSort from '$lib/misc-components/SetSort.svelte'
    import Farm from '$lib/pages/farm/Farm.svelte'

    // Images
    import icon_verified_token_help from '$lib/svg/verified_token_help.svg'

    // Utils
    import { component_key, key_string_value } from '$lib/js/misc-utils'

    // Stores
    import { get_filter, get_filter_value } from '$lib/js/stores/filter-stores'
    import { get_sorter } from '$lib/js/stores/sort-stores'
    import { farms_open } from '$lib/js/stores/component-state-stores'

    // Mock Data
    import mock_farms from '$lib/mock_data/mock_farms.js'

    let sort_store = get_sorter({apr: false})

    let search_text = ""

    let mock_farms_filtered = process_filters()

    sort_store.subscribe(apply_filters)

    function handle_search(e){
        search_text = e.detail
        apply_filters()
    }

    function apply_filters(){
        mock_farms_filtered = process_filters()
    }

    function process_filters(){
        let return_list = mock_farms
        let sort_store_value = $sort_store

        if (search_text.length > 0){
            return_list = return_list.filter(f => {
                return f.staked_token.token_name.toLowerCase().includes(search_text.toLowerCase()) ||
                f.staked_token.token_symbol.toLowerCase().includes(search_text.toLowerCase()) ||
                f.earned_token.token_name.toLowerCase().includes(search_text.toLowerCase()) ||
                f.earned_token.token_symbol.toLowerCase().includes(search_text.toLowerCase())
            })

        }

        if (get_filter_value("Staked by me")){
            return_list = return_list.filter(f => f.staked > 0 || f.earned > 0)
        }
        if (!get_filter_value("Show closed")){
            return_list = return_list.filter(f => f.ends >= new Date().getTime() )
        }

        if (Object.keys(sort_store_value).length > 0){
            let sort_name = Object.keys(sort_store_value)[0]
            let sort_value = sort_store_value[sort_name]

            if (sort_value){
                return_list.sort((a, b) => key_string_value(a, sort_name) > key_string_value(b, sort_name) ? 1 : -1)
            }else{
                return_list.sort((a, b) => key_string_value(a, sort_name) < key_string_value(b, sort_name) ? 1 : -1)
            }
        }

        return return_list
    }

</script>

<div class="page-heading flex row align-center">
    <h2>Farm</h2>
    <img class="verified_help" src="{icon_verified_token_help}" alt="verified token help"> 
</div>

<div class="filters">
    <FilterCheckboxCheck filter={get_filter("Staked by me")} filter_name={"Staked by me"} single on:changed={apply_filters} />
    <FilterCheckboxCheck filter={get_filter("Show closed")} filter_name={"Show closed"} single on:changed={apply_filters} /> 
    <FilterSearch on:change={handle_search} />
</div>

<div class="table-wrapper  fancy-scrollbar">
    <table>
        <thead>
            <tr>
                <th>Farm Details <SetSort {sort_store} sort_name={"staked_token.token_name"}/></th>
                <th>APR <SetSort {sort_store} sort_name={"apr"}/></th>
                <th>Staked Tokens <SetSort {sort_store} sort_name={"staked"}/></th>
                <th>Earned <SetSort {sort_store} sort_name={"earned"}/></th>
                <th>Accruing Ends <SetSort {sort_store} sort_name={"ends"}/></th>
            </tr>
        </thead>
        <tbody>
            {#each mock_farms_filtered as farm_info}
                <Farm {farm_info} open={$farms_open[component_key(farm_info.staked_token, farm_info.earned_token)]}/>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .filters{
        display: inline-flex;
        align-items: center;
        justify-content: end;
        width: 100%;
    }

    table{
        padding-bottom: unset;
    }
    table, th {
        border-bottom: unset;
    }

    @media (max-width: 480px) {
        div.filters{
            align-items: unset;
            justify-content: start;
            flex-direction: column;
        }
    }
</style>