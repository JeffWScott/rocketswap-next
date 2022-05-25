<script>
    import { fade } from 'svelte/transition';

    // Icons
    import icon_plus_circle from '$lib/pages/help/plus-circle.svg'
    import icon_minus_circle from '$lib/pages/help/minus-circle.svg'

    export let faqItem

    let showAnswer = false

    function toggleAnswer(){
        if (!showAnswer) showAnswer = true
        else showAnswer = false
    }

</script>

<style>
    .container{
        padding: var(--units-1vw);
        margin-bottom: var(--units-1vw);
    }
    p{
        margin: 0;
        width: 100%;
        font-size: var(--units-1_2vw);
    }
    button{
        width: var(--units-2_5vw);
    }
    button > img {
        width: 100%;
    }

    @media (max-width: 480px) {
        .container{
            padding: var(--units-1_5vw);
            margin-bottom: var(--units-1_5vw);
        }
        button{
            width: var(--units-4vw);
            height: var(--units-4vw);
        }
        p{
            font-size: var(--units-2vw); 
        }
    }
</style>

<div class="panel container flex col">
    <div class="flex row align-center">
        <p>{faqItem.q}</p>
        <button class="icon" on:click={toggleAnswer}>
            {#if showAnswer}
                <img src="{icon_minus_circle}" alt="plus-circle"/>
            {:else}
                <img src="{icon_plus_circle}" alt="minus-circle"/>
            {/if}
        </button>
    </div>

    {#if showAnswer}
        <div in:fade="{{delay: 0, duration: 500}}">
            <p class="text-primary-color-dark">{faqItem.a}</p>
        </div>
    {/if}
</div>