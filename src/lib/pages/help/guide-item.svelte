<script>
    export let guideItem

</script>

<style>
    a{
        justify-content: space-evenly;
        width: 31%;
        padding: var(--units-1_5vw) var(--units-1vw);
        text-align: center;
    }
    a > img{
        width: var(--units-4_5vw);
    }
    a > p{
        margin: var(--units-07vw) 0;
        font-size: var(--units-1_1vw);
    }

    @media (max-width: 480px) {
        a > img{
            width: var(--units-6vw);
        }
        a > p{
            font-size: var(--units-2vw); 
        }
    }
</style>

<a href={guideItem.link} rel="noopener noreferrer" target="_blank" class="panel flex col align-center">
    <img src="{guideItem.icon}" alt="{guideItem.title}" />
    <p>{guideItem.title}</p>
</a>