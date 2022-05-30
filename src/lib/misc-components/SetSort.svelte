<script>
    // Images
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'

    export let sort_store
    export let sort_name

    $: flip = !sort_store ? false : $sort_store[sort_name] === undefined ? false : $sort_store[sort_name]

    function handle_click(e){
        console.log({e, sort_store: $sort_store, sort_name, flip})
        sort_store.set({[sort_name]: true})
    }
    
</script>

<button class="icon">
    <img class="sort-arrow" src={dropdown_arrow_down} alt="sort-arrow" flip={flip} on:click={handle_click}/>
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