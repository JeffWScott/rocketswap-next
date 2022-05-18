<script>
    import { createEventDispatcher } from 'svelte'

    // Images
    import icon_search from '$lib/svg/search.svg'

    const dispatchEvent = createEventDispatcher()

    function dispatch(e){
        dispatchEvent('change', e.target.value)
    }

</script>

<div class="token-search">
    <input class="primary_input" placeholder="Search" on:change={dispatch}>
    <img class="search-icon" src={icon_search} alt="search" />
</div>

<style>
    input{
        width: 100%;
        font-size: var(--font-size-1_2);
        background: var(--panel-background-color);
        color: var(--font-primary-color);
        padding: var(--units-072vw) var(--units-1_5vw);
        border: 1px solid var(--panel-background-color);
        border-radius: var(--units-05vw);
        box-sizing: border-box;
    }

    input::-webkit-input-placeholder {
        opacity: 0.8;
        color: var(--font-primary-color-dar);
    }
    input::-moz-placeholder {
        opacity: 0.8;
        color: var(--font-primary-color-dar);
    }
    input::-ms-input-placeholder {
        opacity: 0.8;
        color: var(--font-primary-color-dar);
    }

    .token-search{
        z-index: 2;
        position: relative;
        margin-bottom: var(--units-1vw);
        min-width: 175px;
    }

    .search-icon{
        cursor: pointer;
        position: absolute;
        width: var(--units-2vw);
        top: 50%;
        right: var(--units-1_4vw);
        transform: translateY(-50%);
    }

    @media (max-width: 480px) {
        .token-search{
            width: 100%;
        }
        input{
            width: 100%;
        }
    }
</style>