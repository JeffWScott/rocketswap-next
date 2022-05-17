<script>
    // Components
    import TokenBaseLogos from '$lib/pages/pools/TokenBaseLogos.svelte';
    import TokenName from '$lib/misc-components/TokenName.svelte';

    // Images
    import icon_verified_token_help from '$lib/svg/verified_token_help.svg'
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'
    
    // Mock Data
    import mock_pools from '$lib/mock_data/mock_pools.js'

    $: open_pools = {}

    function open_pool(e){
        const key = e.target.getAttribute('pool_key')

        if (open_pools[key]){
            open_pools[key] = false
        }else{
            open_pools[key] = true
        }
    }

    const pool_key = (staked_token, base_token) => `${staked_token.token_symbol}:${base_token.token_symbol}` 
</script>

<div class="flex row align-center">
    <h2>Your Pools</h2>
    <img class="verified_help" src="{icon_verified_token_help}" alt="verified token help"> 
    <button class="outlined primary white skinny"><div>Add Liquidity</div></button>
    <button class="outlined white skinny"><div>Create Liquidity</div></button>
</div>

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Pool</th>
                <th>Liquidity</th>
                <th>Staked Tokens</th>
                <th>Staked TAU</th>
                <th>Liquidity Points</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each mock_pools as mock_pool}
                <tr>
                    <td><TokenBaseLogos token={mock_pool.staked_token} base={mock_pool.base_token} /></td>
                    <td><TokenName 
                        token_name={mock_pool.staked_token.token_name}
                        token_symbol={mock_pool.staked_token.token_symbol}
                        is_verified={mock_pool.staked_token.verified}
                        show_logo={false}/>
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
                        <td colspan="100">
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
        padding: var(--units-1vw) 0;
    }
    div.buttons > button:last-child{
        margin-left: var(--units-2vw);
    }

</style>