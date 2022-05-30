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

    // Images
    import icon_verified_token_help from '$lib/svg/verified_token_help.svg'
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'

    // Utils
    import { component_key, component_state } from '$lib/js/misc-utils';

    // Stores
    import { get_filter } from '$lib/js/stores/filter-stores'
    import { farms_open } from '$lib/js/stores/component-state-stores';

    // Mock Data
    import mock_farms from '$lib/mock_data/mock_farms.js'

    let mock_farms_filtered = mock_farms
    let component_state_handler = component_state(farms_open)

</script>

<div class="page-heading flex row align-center">
    <h2>Farm</h2>
    <img class="verified_help" src="{icon_verified_token_help}" alt="verified token help"> 
</div>

<div class="filters">
    <FilterCheckboxCheck filter={get_filter("Staked by me")} filter_name={"Staked by me"}/>
    <FilterCheckboxCheck filter={get_filter("Show closed")} filter_name={"Show closed"}/>
    <FilterCheckbox />
    <FilterSearch />
</div>

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Farm Details</th>
                <th>APY</th>
                <th>Staked Tokens</th>
                <th>Earned TAU</th>
                <th>Accruing Ends</th>
            </tr>
        </thead>
        <tbody>
            {#each mock_farms_filtered as farm}
                <tr>
                    <td >
                        <div class="flex row align-center">
                            <img 
                                class="dropdown-arrow"
                                class:open={$farms_open[component_key(farm.staked_token, farm.base_token)]}
                                src="{dropdown_arrow_down}" 
                                alt="expand" 
                                key={component_key(farm.staked_token, farm.base_token)} 
                                on:click={component_state_handler}
                            />
                            <TokenBaseLogos token={farm.staked_token} base={farm.base_token} />
                            <TokenName 
                                token_name={farm.staked_token.token_name}
                                token_symbol={farm.staked_token.token_symbol}
                                is_verified={farm.staked_token.verified}
                                show_logo={false}/>
                        </div>

                    </td>
                    <td>{farm.apy}</td>
                    <td>{farm.staked}</td>
                    <td>{farm.earned_tau}</td>
                    <td>{farm.ends}</td>

                </tr>
                {#if $farms_open[component_key(farm.staked_token, farm.base_token)]}
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
                                    Withdraw Earned
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
</style>