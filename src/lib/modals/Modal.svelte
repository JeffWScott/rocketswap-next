<script>
    import { fly } from 'svelte/transition';

    // Images
    import close_x from '$lib/svg/close-x.svg'

    // Stores
    import { modal_open_store } from '$lib/js/stores/app-stores'
    import { handle_modal_close } from '$lib/js/event-handlers'

    modal_open_store.subscribe(setup_document_for_modal)

    function setup_document_for_modal(open_modal_store_value){

        if (typeof(document) === 'undefined') return

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

<div class="modal-overlay" class:open={$modal_open_store} on:click={handle_modal_close}>
    <div class="modal-wrapper flex">
        {#if $modal_open_store}
            <div class="modal flex col" 
                 on:click|stopPropagation={()=>null} 
                 in:fly="{{ y: -50, duration: 500 }}">

                <button class="icon close" on:click={handle_modal_close}>
                    <img src={close_x} alt="close" />
                </button>
                
                <svelte:component this={$modal_open_store} />
            </div>
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
        flex-direction: column;
        height: 100%;
        padding-top: 10vmin;
        padding-bottom: 20vmin;
    }
    .modal{
        position: relative;
        z-index: 102;
        box-sizing: border-box;
        padding: var(--units-3vw);
        width: 55vw;

        background-color: var(--panel-background-color);
        border-radius: var(--units-07vw);
        overflow: hidden; 
        filter: drop-shadow(0 var(--units-1vw) var(--units-3vw) rgba(0, 0, 0, 0.4));
    }
    .modal > button{
        position: absolute;
        top: var(--units-3vw);
        right: var(--units-3vw);
    }
    .modal > button > img{
        width: var(--units-1_9vw);
    }
    

    @media (max-width: 480px) {
       .modal{
           flex-grow: 1;
            transform: unset;
            width: 90vw;
            height: unset;
            padding: 4vw;
        }
        .modal-wrapper{
            padding-top: 3vh;
            padding-bottom: 10vh;
        }
        .modal > button{
            position: absolute;
            top: 4vw;
            right: 4vw;
        }
    }


</style>

