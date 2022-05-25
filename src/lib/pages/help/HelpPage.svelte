<script>
    // Components
    import FAQList from '$lib/pages/help/faq-items.svelte'
    import GuideItems from '$lib/pages/help/guide-items.svelte'

</script>

<style>
    .page-container{
        margin: 0 auto;
        width: 100%;
        max-width: 65vw;
    }
    @media (max-width: 480px) {
        .page-container{
            max-width: 86vw;
        }
    }
</style>

<div class="page-container">
    <h2>Help</h2>
    <GuideItems />
    <FAQList />
</div>


