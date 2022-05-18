<script>
    export let filter
    export let filter_name

    function handle_change(e){
        console.log(e.target.checked)
        filter.set(e.target.checked)
    }
</script>

<label class="flex row chk-container align-center" class:checked={$filter} id={filter_name}>
    <input type="checkbox" bind:checked={$filter} on:change={handle_change}>
    <span class="chk-checkmark chk-small"></span>
    {filter_name}
</label>

<style>
    label{
        margin-top: var(--units-05vw);
        margin-bottom: var(--units-05vw);
        padding-left: var(--units-2vw);
    }

    label:hover {
        background-color: var(--panel-background-highlight);
    }
</style>