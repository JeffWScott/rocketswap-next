<script>
    import { createEventDispatcher } from 'svelte';

    // Component
    import FilterSearch from '$lib/misc-components/FilterSearch.svelte';

    // Stores
    import { user_balances } from '$lib/js/stores/user-stores'
    import { get_filter } from '../js/stores/filter-stores';
    import { modal_callback } from '$lib/js/stores/app-stores'

    // Utils
    import { handle_modal_close } from '$lib/js/event_handlers' 

    // Mock Data
    import mock_tokens from "$lib/mock_data/mock_tokens";

    let show_unverified_tokens_store = get_filter("Token Select Show Unverified")
    let search_text = ""
    let mock_tokens_list = process_filters()

    show_unverified_tokens_store.subscribe(apply_filters)

    function handle_search(e){
        search_text = e.detail
        apply_filters()
    }

    function apply_filters(){
        mock_tokens_list = process_filters()
    }

    function process_filters(){
        let return_list = Object.keys(mock_tokens).map(m => mock_tokens[m]).filter(f => f.contract_name !== "currency")

        if (!$show_unverified_tokens_store) {
            return_list = return_list.filter(f => f.verified)
        }

        if (search_text.length > 0){
            return_list = return_list.filter(f => {
                console.table(f)
                return f.token_name.toLowerCase().includes(search_text.toLowerCase()) ||
                f.token_symbol.toLowerCase().includes(search_text.toLowerCase()) ||
                f.contract_name.toLowerCase().includes(search_text.toLowerCase())
            })
        }

        return [...return_list, ...return_list] 
    }

    function handle_select_token(e){
        const contract_name = e.target.getAttribute("contract_name")
        const token = Object.keys(mock_tokens).map(m => mock_tokens[m]).find(f => f.contract_name === contract_name)

        $modal_callback(token)
        handle_modal_close()

    }

</script>

<div class="modal-content flex col align-center">
    <h2>Select Token</h2>
    <div class="switch">
        Show Unverified Tokens
        <label>
            <input type="checkbox" bind:checked={$show_unverified_tokens_store}/>
            <span class="slider round"></span>
            </label>
    </div>
    <div class="filters">
        <FilterSearch placeholder="Search for Token" outlined on:change={handle_search}/>
    </div>
    <div class="token-list grow-1 fancy-scrollbar">
        {#each mock_tokens_list as token}
                <button class="void token flex row align-center" on:click={handle_select_token} contract_name="{token.contract_name}">
                    <span class="token-details" on:click={handle_select_token} contract_name="{token.contract_name}" >
                        <img src={token.token_logo} alt="{token.token_symbol}" />
                        {token.token_name}
                    </span>
                    {$user_balances[token.contract_name] ? $user_balances[token.contract_name] : 0}
                </button>
        {/each}
        {#if mock_tokens_list.length === 0}
                <p>No tokens match search criteria.</p>
        {/if}
    </div>
</div>



<style>
    h2{
        align-self: flex-start;
    }
    .switch{
        margin-bottom: var(--units-2vw);
    }

    .token-list{
        width: 70%;
        box-sizing: border-box;
        font-size: var(--units-1_2vw);
        font-weight: 300;
        overflow-y: auto;
        padding-right: var(--units-05vw);
    }
    .token-list > p{
        text-align: center;
    }
    .token-list > button {
        font-size: inherit;

    }
    .token-list > button > span {
        margin-right: 2vw;
    }
    .filters{
        width: 66%;
    }

    .token{
        width: 100%;
    }
    .token-details{
        display: inline-flex;
        flex-grow: 1;
        align-items: center;
        text-align: left;
        word-break: break-word;
    }
    .token-details > img {
        margin-right: var(--units-2vw);
        width: var(--units-2vw);
    }

    @media (max-width: 480px) {
        .token-list{
            width: 100%;
        }
        .filters{
            width: 92%;
        }
    }
</style>