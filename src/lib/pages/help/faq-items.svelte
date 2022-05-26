<script>
    // Components
    import FAQItem from '$lib/pages/help/faq-item.svelte'

    // MISC
    import FAQ from '$lib/pages/help/faq-questions-list.json'

</script>

<div class="panel-container">
    {#each FAQ as faqItem}
        <FAQItem {faqItem} />
    {/each}
</div>

<style>
    .panel-container{
        width: 100%;
        margin-top: var(--units-2vw);
    }
</style>