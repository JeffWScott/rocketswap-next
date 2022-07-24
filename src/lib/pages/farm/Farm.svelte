<script>
    import { slide } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

    // Images
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'

    // Utils
    import { component_key, component_state } from '$lib/js/misc-utils'
    import { format_date } from '$lib/pages/farm/page-utils.js'
    import { handle_open_confirm_stake_add, handle_open_confirm_stake_remove, handle_open_confirm_stake_withdraw } from '$lib/js/event-handlers'

    // Components
    import TokenName from '$lib/misc-components/TokenName.svelte';
    import TokenBaseLogos from '$lib/misc-components/TokenBaseLogos.svelte';
    
    // Stores
    import { farms_open } from '$lib/js/stores/component-state-stores'

    export let farm_info
    export let open

    $: key = component_key(farm_info.staked_token, farm_info.earned_token)

    let component_state_handler = component_state(farms_open)

    function handle_click_stake(){
        handle_open_confirm_stake_add(farm_info)
    }

    function handle_click_remove(){
        handle_open_confirm_stake_remove(farm_info)
    }

    function handle_click_withdraw(){
        handle_open_confirm_stake_withdraw(farm_info)
    }

</script>

<tr>
    <td >
        <div class="flex row align-center">
            <img 
                class="dropdown-arrow"
                class:open={open}
                src="{dropdown_arrow_down}" 
                alt="expand" 
                key={key} 
                on:click={component_state_handler}
            />
            <TokenBaseLogos token={farm_info.staked_token} base={farm_info.earned_token} />
            <TokenName token_info={farm_info.staked_token} show_logo={false} />
        </div>

    </td>
    <td>{farm_info.apr}%</td>
    <td>{farm_info.staked} {farm_info.staked_token.token_symbol}</td>
    <td>{farm_info.earned} {farm_info.earned_token.token_symbol}</td>
    <td>{format_date(farm_info.ends)}</td>

</tr>
{#if open}
    <tr>
        <td 
            class="open" 
            colspan="100" 
            in:slide={{duration: 500, easing: quintOut}}>
        

            <div class="staking-buttons flex">
                <button class="outlined white" on:click={handle_click_withdraw}><div>
                    Withdraw {farm_info.earned_token.token_symbol}
                </div></button>
                <button class="outlined white" on:click={handle_click_remove}><div>
                    Remove Stake
                </div></button>
                <button class="outlined primary white" on:click={handle_click_stake}><div>
                    Stake {farm_info.staked_token.token_symbol}
                </div></button>
            </div>
        </td>
    </tr>
{/if}


<style>
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
    .staking-buttons > button {
        margin-right: var(--units-1vw);
    }
    .staking-buttons > button:last-child {
        margin-right: 0;
    }

    @media (max-width: 480px) {
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