<script>
    // Images
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'

    export let sort_store
    export let sort_name

    $: flip = $sort_store[sort_name] || false

    function handle_click(){
        const { [sort_name]: sort_value } = $sort_store

        if (!sort_value) sort_store.set({[sort_name]: true})
        else sort_store.set({[sort_name]: false})
    }
    
</script>

<button class="icon" on:click={handle_click}>
    <img src={dropdown_arrow_down} alt="sort-arrow" class="sort-arrow" class:flip={flip} />
</button>

<style>
    button{
        padding: var(--units-05vw);
        z-index: 100;
    }
    img{
        height: min-content;
    }
</style>