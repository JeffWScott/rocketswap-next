<script>
    import token_logos from "$lib/mock_data/token_logos";

    export let token
    export let base

    $: token_logo = token.token_logo
    $: base_logo = base.token_logo

</script>

<div class="flex row align-center">
    <img src={token_logo} alt="token" />
    <img src={base_logo} alt="base" />
</div>

<style>
    div > img:last-child{
        margin-left: var(--units-05vw);
    }
</style>