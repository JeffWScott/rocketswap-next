<script>
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    // Components
    import TokenName from '$lib/misc-components/TokenName.svelte';
    import TokenBaseLogos from '$lib/misc-components/TokenBaseLogos.svelte';
    import FilterSearch from '$lib/misc-components/FilterSearch.svelte';
    import FilterCheckbox from '$lib/misc-components/FilterCheckbox.svelte';
    import FilterCheckboxCheck from '$lib/misc-components/FilterCheckboxCheck.svelte';
    import InputNumber from '$lib/inputs/InputNumber.svelte';
    import SetSort from '$lib/misc-components/SetSort.svelte';

    // Images
    import icon_verified_token_help from '$lib/svg/verified_token_help.svg'
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'

    // Utils
    import { component_key, component_state, key_string_value } from '$lib/js/misc-utils';
    import { format_date } from '$lib/pages/farm/page-utils.js'

    // Stores
    import { get_filter, get_filter_value } from '$lib/js/stores/filter-stores'
    import { get_sorter } from '$lib/js/stores/sort-stores';
    import { farms_open } from '$lib/js/stores/component-state-stores';

    // Mock Data
    import mock_farms from '$lib/mock_data/mock_farms.js'

    let sort_store = get_sorter({apy: false})

    let search_text = ""

    let mock_farms_filtered = process_filters()
    let component_state_handler = component_state(farms_open)

    sort_store.subscribe(apply_filters)

    function handle_search(e){
        search_text = e.detail
        apply_filters()
    }

    function apply_filters(){
        mock_farms_filtered = process_filters()
    }

    function process_filters(){
        console.log("running process_filters")
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

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Farm Details <SetSort {sort_store} sort_name={"staked_token.token_name"}/></th>
                <th>APY <SetSort {sort_store} sort_name={"apy"}/></th>
                <th>Staked Tokens <SetSort {sort_store} sort_name={"staked"}/></th>
                <th>Earned <SetSort {sort_store} sort_name={"earned"}/></th>
                <th>Accruing Ends <SetSort {sort_store} sort_name={"ends"}/></th>
            </tr>
        </thead>
        <tbody>
            {#each mock_farms_filtered as farm}
                <tr>
                    <td >
                        <div class="flex row align-center">
                            <img 
                                class="dropdown-arrow"
                                class:open={$farms_open[component_key(farm.staked_token, farm.earned_token)]}
                                src="{dropdown_arrow_down}" 
                                alt="expand" 
                                key={component_key(farm.staked_token, farm.earned_token)} 
                                on:click={component_state_handler}
                            />
                            <TokenBaseLogos token={farm.staked_token} base={farm.earned_token} />
                            <TokenName token_info={farm.staked_token} show_logo={false} />
                        </div>

                    </td>
                    <td>{farm.apy}%</td>
                    <td>{farm.staked} {farm.staked_token.token_symbol}</td>
                    <td>{farm.earned} {farm.earned_token.token_symbol}</td>
                    <td>{format_date(farm.ends)}</td>

                </tr>
                {#if $farms_open[component_key(farm.staked_token, farm.earned_token)]}
                    <tr>
                        <td 
                            class="open" 
                            colspan="100" 
                            in:slide={{duration: 500, easing: quintOut}}>
                            
                            <div class="input-box flex col">
                                <InputNumber />
                                <span>Balance: 100 LUSD</span>
                            </div>

                            <div class="staking-buttons flex">
                                <button class="outlined white"><div>
                                    Withdraw {farm.earned_token.token_symbol}
                                </div></button>
                                <button class="outlined white"><div>
                                    Remove Stake
                                </div></button>
                                <button class="outlined primary white"><div>
                                    Stake
                                </div></button>
                            </div>
                        </td>
                    </tr>
                {/if}
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

    td{
        border-top: var(--units-01vw) solid var(--table-divider-color);
        padding-top: var(--units-1_5vw);
        padding-bottom: var(--units-1_5vw);
    }

    td.open{
        border-top: unset;
    }

    .input-box{
        width: var(--units-17_2vw);
    }
    .input-box > span{
        margin: var(--units-08vw) 0;
        color: var(--font-primary-color-dark);
        font-size: var(--units-08vw);
    }

    .staking-buttons{
        flex-direction: row;
    }
    .staking-buttons > button {
        margin-right: var(--units-1vw);
    }
    .staking-buttons > button:last-child {
        margin-right: 0;
    }

    @media (max-width: 480px) {
        div.filters{
            align-items: unset;
            justify-content: start;
            flex-direction: column;
        }
        .input-box{
            width: 75vw;
        }
        .staking-buttons{
            flex-direction: column;
        }
        .staking-buttons > button{
            width: 75vw;
        }
        .staking-buttons > button{
            margin-bottom: 3vw;
        }
    }
</style>