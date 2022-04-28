<script>
    // Image
    import dropdown_arrow_down from '$lib/svg/dropdown-arrow-down.svg'

    export let token_name
    export let token_logo
    export let token_symbol

</script>

<div class="flex row space-between">
    <img src={token_logo} alt={token_name} />
    {token_symbol}
    <img src={dropdown_arrow_down} alt={"arrow"} class="arrow" />
</div>

<style></style>