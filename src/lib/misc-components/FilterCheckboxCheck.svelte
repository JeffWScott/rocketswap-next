<script>
    export let filter
    export let filter_name
    export let single = false

    function handle_change(e){
        filter.set(e.target.checked)
    }
</script>

<label class="flex row chk-container align-center" class:checked={$filter} {single} id={filter_name}>
    <input type="checkbox" bind:checked={$filter} on:change={handle_change}>
    <span class="chk-checkmark chk-small"></span>
    {filter_name}
</label>

<style>
    label{
        margin-top: var(--units-05vw);
        margin-bottom: var(--units-05vw);
        padding-left: var(--units-2vw);
        font-size: var(--units-1_1vw);
    }

    label[single="true"]{
        margin: 0 var(--units-1vw) var(--units-1vw) 0;
        padding-left: 0;
    }

    label:hover {
        background-color: var(--panel-background-highlight);
    }

</style>