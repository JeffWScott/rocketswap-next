<script>
    import { createEventDispatcher } from 'svelte';

    // Components
    import FilterCheckboxCheck from './FilterCheckboxCheck.svelte';

    // Images
    import icon_filter_settings from '$lib/svg/filter-settings.svg'

    // Stores
    import { get_filters } from '$lib/js/stores/filter-stores'

    export let filter_list = []

    const dispatch = createEventDispatcher()

    let filters = get_filters(filter_list)

    let open = false

    function toggle_open(){
        if (open) open = false
        else open = true
    }

    function handle_changed (e) {
        dispatch('changed', e.detail)
    }

</script>

<div class="multiselect">
    <div class="selectBox" on:click={toggle_open}>
        <select class:open={open}>
            <option>Filter</option>
        </select>
        <div class="flex flex-align-center overSelect">
            <img src={icon_filter_settings} alt="filter settings" class="settings-icon"/>
        </div>
    </div>
    <div id="checkboxes" class:open={open}>
        {#each filters as filter, index}
            <FilterCheckboxCheck filter_name={filter_list[index]} {filter} on:changed={handle_changed}/>
        {/each}
        <button class="outlined white close-button" on:click={toggle_open}><div>Close</div></button>
    </div>
</div>

<style>
    select.open{
        border-radius: var(--units-05vw) var(--units-05vw) 0 0;
    }

    .selectBox {
        position: relative;
    }

    .selectBox:hover > select {
        cursor: pointer;
    }

    .selectBox select {
        width: 100%;
        background: var(--panel-background-color);
        color: var(--font-primary-color);
        font-size: var(--units-1_2vw);
    }

    .overSelect {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .multiselect {
        z-index: 3;
        position: relative;
        width: var(--units-19vw);
        min-width: var(--units-19vw);
        margin-bottom: var(--units-1vw);
        margin-right: var(--units-1vw);
        box-shadow: var(--panel-box-shadow);
    }

    #checkboxes {
        z-index: -1;
        display: none;
        position: absolute;
        background: var(--panel-background-color);
        border-radius: 0 0 var(--units-05vw) var(--units-05vw);
        border-top: 1px;
        width: 100%;
        box-sizing: border-box;
        padding-bottom: var(--units-2vw);
        box-shadow: var(--panel-box-shadow);
    }

    #checkboxes.open{
        display: block;
    }

    button{
        display: block;
        margin: var(--units-1_5vw) auto 0;
    }
    .settings-icon{
        width: var(--units-2_5vw);
        min-width: 17.6797px;
        cursor: pointer;
        margin: 0 var(--units-1_2vw) 0 auto;
    }

    @media (max-width: 480px) {
        .multiselect{
            width: 100%;
            min-width: unset;
            margin-right: 0;
        }

    }
</style>