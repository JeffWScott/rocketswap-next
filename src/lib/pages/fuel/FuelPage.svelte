<script>
    import FuelGaugePanel from '$lib/pages/fuel/FuelGaugePanel.svelte'
    import FuelBenefitsPanel from '$lib/pages/fuel/FuelBenefitsPanel.svelte'

</script>

<h2>VIP Rocket Fuel</h2>

<div>
    <FuelGaugePanel />
    <FuelBenefitsPanel />
</div>

<style>
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    @media (max-width: 480px) {
        div{
            flex-direction: column-reverse;
            justify-content: unset;
        }
    }
</style>