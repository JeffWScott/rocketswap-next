<script>
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    // Components
    import TokenBaseLogos from '$lib/misc-components/TokenBaseLogos.svelte';
    import TokenName from '$lib/misc-components/TokenName.svelte';
    import FilterSearch from '$lib//misc-components/FilterSearch.svelte';
    import FilterCheckbox from '$lib/misc-components/FilterCheckbox.svelte';
    import SetSort from '$lib/misc-components/SetSort.svelte';
    
    // Images
    import icon_verified_token_help from '$lib/svg/verified_token_help.svg'
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'
    
    // Utils
    import { component_key, component_state, key_string_value } from '$lib/js/misc-utils';
    import { handle_goto_pools_add_liquidity, handle_goto_pools_create_liquidity, handle_goto_pools_remove_liquidity } from '$lib/js/event_handlers';

    // Stores
    import { pools_open } from '$lib/js/stores/component-state-stores';
    import { get_sorter } from '$lib/js/stores/sort-stores';

    // Mock Data
    import mock_pools from '$lib/mock_data/mock_pools.js'

    let sort_store = get_sorter({staked_tau: false})

    let filter_list = []
    let search_text = ""
    let component_state_handler = component_state(pools_open)

    let mock_pools_filtered = process_filters()

    sort_store.subscribe(apply_filters)

    function handle_search(e){
        search_text = e.detail
        apply_filters()
    }

    function apply_filters(){
        mock_pools_filtered = process_filters()
    }

    function process_filters(){
        let return_list = mock_pools
        let sort_store_value = $sort_store

        if (search_text.length > 0){

            return_list = return_list.filter(f => {
                return f.staked_token.token_name.toLowerCase().includes(search_text.toLowerCase()) ||
                f.staked_token.token_symbol.toLowerCase().includes(search_text.toLowerCase())
            })

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
    <h2>Your Pools</h2>
    <img class="verified_help" 
         src="{icon_verified_token_help}" 
         alt="verified token help" /> 
</div>

<div class="buttons-filters flex row align-center">
    <div class="buttons">
        <button class="outlined primary white" on:click={handle_goto_pools_add_liquidity}><div>Add Liquidity</div></button>
        <button class="outlined white" on:click={handle_goto_pools_create_liquidity}><div>Create Liquidity</div></button>
    </div>
    <div class="filters flex align-center grow-1">
        <FilterCheckbox {filter_list} />
        <FilterSearch on:change={handle_search} />
    </div>
</div>

<div class="table-wrapper  fancy-scrollbar">
    <table>
        <thead>
            <tr>
                <th>Pool Details <SetSort {sort_store} sort_name={"staked_token.token_name"}/></th>
                <th>Liquidity <SetSort {sort_store} sort_name={"liquidity"}/></th>
                <th>Staked Tokens <SetSort {sort_store} sort_name={"staked"}/></th>
                <th>Staked TAU <SetSort {sort_store} sort_name={"staked_tau"}/></th>
                <th>Liquidity Points <SetSort {sort_store} sort_name={"liquidity_points"}/></th>
            </tr>
        </thead>
        <tbody>
            {#each mock_pools_filtered as mock_pool}
                <tr>
                    <td >
                        <div class="flex row align-center">
                            <img 
                                class="dropdown-arrow"
                                class:open={$pools_open[component_key(mock_pool.staked_token, mock_pool.base_token)]}
                                src="{dropdown_arrow_down}" 
                                alt="expand" 
                                key={component_key(mock_pool.staked_token, mock_pool.base_token)} 
                                on:click={component_state_handler}
                            />
                            <TokenBaseLogos token={mock_pool.staked_token} base={mock_pool.base_token} />
                            <TokenName 
                                token_info={mock_pool.staked_token} show_logo={false} />
                        </div>

                    </td>
                    <td>{mock_pool.liquidity}%</td>
                    <td>{mock_pool.staked}</td>
                    <td>{mock_pool.staked_tau}</td>
                    <td>
                        {mock_pool.liquidity_points}
                        {#if mock_pool.staked_in_farm }
                            <span class="text-primary-color">/ {mock_pool.staked_in_farm} LP in Farms</span> 
                        {/if}
                    </td>

                </tr>
                {#if $pools_open[component_key(mock_pool.staked_token, mock_pool.base_token)]}
                    <tr>
                        <td 
                            class="open" 
                            colspan="100" 
                            in:slide={{duration: 500, easing: quintOut}}>
                            <div class="staking-buttons flex">
                                <button class="outlined white" contract_name="{mock_pools.staked_token.contract_name}" on:click={handle_goto_pools_remove_liquidity}>
                                    <div contract_name="{mock_pools.staked_token ? mock_pools.staked_token.contract_name : null}">
                                        Remove
                                    </div>
                                </button>
                                <button class="outlined primary white" contract_name="{mock_pools.staked_token ? mock_pools.staked_token.contract_name : null}" on:click={handle_goto_pools_add_liquidity}>
                                    <div contract_name="{mock_pools.staked_token.contract_namemock_pools.staked_token ? mock_pools.staked_token.contract_name : null}">
                                        Adjust
                                    </div>
                                </button>
                            </div>
                        </td>
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
</div>

<style>
    div.filters{
        flex-direction: row;
        justify-content: flex-end;
    }
    .buttons{
        margin-bottom: var(--units-1vw);
    }
    .buttons > button:first-child{
        margin-right: var(--units-1vw);
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

    .staking-buttons{
        flex-direction: row;
    }
    .staking-buttons > button:first-child {
            margin-right: var(--units-1vw);
    }

    @media (max-width: 480px) {
        div.filters{
            flex-direction: column;
            width: 100%;
        }
        .buttons-filters{
            width: 100%;
            flex-direction: column;
        }
        .buttons{
            width: 100%;
        }
        .buttons > button {
            width: 100%;
        }
        .buttons > button > div {
            padding-left: 0;
            padding-right: 0;
        }
        .buttons > button:first-child {
            margin-bottom: var(--units-1vw);
        }
        .staking-buttons{
            flex-direction: column;
        }
        .staking-buttons > button{
            width: 75vw;
        }
        .staking-buttons > button:first-child{
            margin-bottom: 3vw;
        }
    }

</style>