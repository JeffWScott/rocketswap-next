<script>
    export let token
    export let base

    $: token_logo = token.token_logo
    $: base_logo = base.token_logo

</script>

<div class="flex row align-center space-between">
    <img src={token_logo} alt="token" />
    <img src={base_logo} alt="base" />
</div>

<style>
    div{
        width: var(--units-4_5vw);
        margin-right: var(--units-2vw);
    }
    img{
        max-width: var(--units-2vw);
    }
</style>