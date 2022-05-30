<script>
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    // Components
    import TokenBaseLogos from '$lib/misc-components/TokenBaseLogos.svelte';
    import TokenName from '$lib/misc-components/TokenName.svelte';
    import FilterSearch from '$lib//misc-components/FilterSearch.svelte';
    import FilterCheckbox from '$lib/misc-components/FilterCheckbox.svelte';
    
    // Images
    import icon_verified_token_help from '$lib/svg/verified_token_help.svg'
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'
    
    // Utils
    import { component_key, component_state } from '$lib/js/misc-utils';

    // Stores
    import { pools_open } from '$lib/js/stores/component-state-stores';

    // Mock Data
    import mock_pools from '$lib/mock_data/mock_pools.js'

    let filter_list = []
    let component_state_handler = component_state(pools_open)

    let mock_pools_filtered = apply_filters("")

    function handle_search(e){
        const search_text = e.detail
        mock_pools_filtered = apply_filters(search_text)
    }

    function apply_filters(search_text){
        let return_list = mock_pools

        if (search_text.length > 0){

            return_list = return_list.filter(f => {
                return f.staked_token.token_name.toLowerCase().includes(search_text.toLowerCase()) ||
                f.staked_token.token_symbol.toLowerCase().includes(search_text.toLowerCase())
            })

        }

        return return_list
    }
</script>

<div class="page-heading flex row align-center">
    <h2>Your Pools</h2>
    <img class="verified_help" src="{icon_verified_token_help}" alt="verified token help"> 
</div>

<div class="buttons">
    <button class="outlined primary white"><div>Add Liquidity</div></button>
    <button class="outlined white"><div>Create Liquidity</div></button>
</div>

<div class="filters flex align-center">
    <FilterCheckbox {filter_list} />
    <FilterSearch on:change={handle_search} />
</div>

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Pool Details</th>
                <th>Liquidity</th>
                <th>Staked Tokens</th>
                <th>Staked TAU</th>
                <th>Liquidity Points</th>
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
                                token_name={mock_pool.staked_token.token_name}
                                token_symbol={mock_pool.staked_token.token_symbol}
                                is_verified={mock_pool.staked_token.verified}
                                show_logo={false}/>
                        </div>

                    </td>
                    <td>{mock_pool.liquidity}</td>
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
                                <button class="outlined white"><div>
                                    Remove
                                </div></button>
                                <button class="outlined primary white"><div>
                                    Adjust
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
    div.filters{
        flex-direction: row;
    }
    .buttons{
        width: 100%;
        margin-bottom: var(--units-3vw);
    }
    .buttons > button:first-child{
        margin-right: var(--units-1vw);
    }

    img.dropdown-arrow{
        margin-right: var(--units-1vw);
        animation: 5s;
        width: var(--units-1_5vw);
    }
    img.dropdown-arrow.open{
        transform: rotateX(180deg);
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