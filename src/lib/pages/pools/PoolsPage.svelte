<script>
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    // Components
    import TokenBaseLogos from '$lib/pages/pools/TokenBaseLogos.svelte';
    import TokenName from '$lib/misc-components/TokenName.svelte';
    import FilterSearch from '$lib//misc-components/FilterSearch.svelte';
    import FilterCheckbox from '$lib/misc-components/FilterCheckbox.svelte';
    

    // Images
    import icon_verified_token_help from '$lib/svg/verified_token_help.svg'
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'
    
    // Mock Data
    import mock_pools from '$lib/mock_data/mock_pools.js'

    $: open_pools = {}

    let filter_list = []

    let mock_pools_filtered = apply_filters("")
    

    function open_pool(e){
        const key = e.target.getAttribute('pool_key')

        if (open_pools[key]){
            open_pools[key] = false
        }else{
            open_pools[key] = true
        }
    }

    function toggle_pools_filter(){
        if (pools_filter_open) pools_filter_open = false
        else{
            pools_filter_open = true
        }
    }

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

    const pool_key = (staked_token, base_token) => `${staked_token.token_symbol}:${base_token.token_symbol}` 
</script>

<div class="heading flex row align-center">
    <h2>Your Pools</h2>
    <img class="verified_help" src="{icon_verified_token_help}" alt="verified token help"> 
    <button class="outlined primary white skinny"><div>Add Liquidity</div></button>
    <button class="outlined white skinny"><div>Create Liquidity</div></button>
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
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each mock_pools_filtered as mock_pool}
                <tr>
                    <td >
                        <div class="flex row align-center">
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
                    <td>
                        <img 
                            class="dropdown-arrow"
                            class:open={open_pools[pool_key(mock_pool.staked_token, mock_pool.base_token)]}
                            src="{dropdown_arrow_down}" 
                            alt="expand" 
                            pool_key={pool_key(mock_pool.staked_token, mock_pool.base_token)} 
                            on:click={open_pool}/>
                    </td>
                </tr>
                {#if open_pools[pool_key(mock_pool.staked_token, mock_pool.base_token)]}
                    <tr>
                        <td 
                            class="open" 
                            colspan="100" 
                            in:slide={{duration: 500, easing: quintOut}}>
                            <div class="buttons flex row align-center justify-center">
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
    .heading{
        margin-bottom: var(--units-1vw);
    }
    button.skinny{
        margin-left: var(--units-1vw);
    }
    img.verified_help{
        margin-left: var(--units-1vw);
    }
    img.dropdown-arrow{
        margin-right: var(--units-1vw);
        animation: 5s;
    }
    img.dropdown-arrow.open{
        transform: rotateX(180deg);
    }
    div.buttons{
        width: fit-content;
        margin: 0 auto;
        padding: 0 0 var(--units-1vw) ;
    }
    div.buttons > button:last-child{
        margin-left: var(--units-2vw);
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

    @media (max-width: 480px) {
        div.filters{
            flex-direction: column;
        }
    }

</style>