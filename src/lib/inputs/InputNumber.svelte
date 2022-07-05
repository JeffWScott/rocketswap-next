<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    function handle_change(e){
        dispatch('change', e.target.value)
    }
</script>

<div >
    <input class="number-input"  placeholder="0" on:change={handle_change}/>
    <button class="text">max</button>
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
