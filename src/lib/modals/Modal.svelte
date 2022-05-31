<script>
    //Components
    import TokenSelect from '$lib/modals/TokenSelect.svelte';

    // Stores
    import { modal_open_store } from '$lib/js/stores/app-stores'
    import { handle_moble_close } from '$lib/js/event_handlers'

    modal_open_store.subscribe(setup_document_for_modal)

    const modal_map = {
        TokenSelect
    }

    function setup_document_for_modal(open_modal_store_value){
        console.log(typeof(document))
        if (typeof(document) === 'undefined') return
        console.log(open_modal_store_value)
        if(open_modal_store_value){
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        }else{
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }

</script>

<div class="modal-overlay" class:open={$modal_open_store} on:click={handle_moble_close}>
    <div class="modal-wrapper flex">
        {#if $modal_open_store}
            <svelte:component this={modal_map[$modal_open_store]} />
        {/if}
    </div>
</div>

<style>
    .modal-overlay{
        z-index: 100;
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--modal-bg-overlay);
    }
    .modal-overlay.open{
        display: block;
    }
    .modal-wrapper{
        box-sizing: border-box;
        z-index: 101;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>

