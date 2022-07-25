<script>
    import { createEventDispatcher } from 'svelte'

    export let value = null
    export let max_callback = null

    const dispatch = createEventDispatcher()

    function handle_change(e){
        dispatch_value(parseFloat(e.target.value))
    }
    function handle_click_max(){
        if (!max_callback) return
        const max_value = max_callback()
        value = max_value
        dispatch_value(max_value)
        
    }

    function dispatch_value(new_value){
        dispatch('change', new_value)
    }
</script>

<div >
    <input class="number-input"  placeholder="0" value={value} on:change={handle_change} />
    <button class="text" on:click={handle_click_max}>max</button>
</div>

<style>
    div{
        position: relative;
        width: 100%;
    }
    input{
        width: 100%;
    }
    button{
        color: var(--primary-color);
        font-size: var(--units-09vw);
        font-weight: 200;
        position: absolute;
        top: 50%;
        transform: translate(-150%, -50%)
    }
</style>
