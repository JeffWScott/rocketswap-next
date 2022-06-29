<script>
    // Import
    import icon_verified_token from '$lib/svg/verified_token.svg'

    // Utils
    import { handle_modal_close } from '$lib/js/event-handlers'
</script>

<div class="modal-content flex col align-center">
    <h2>Rocketswap Verified Tokens</h2>
    <img class="hero" src={icon_verified_token} alt="verified-tokens"/>
    <div class="text-box">
        <p class="subtext">Rocketswap is a decentralized exchange and can be used to swap any token that has a contract on Lamden.</p>
        <p class="subtext">Tokens with the Verifed by Rocketswap badge can be considered safer than other contracts.</p>
        <p class="subtext">If you are unsure about any token then please ask about it in the Rocketswap Telegram room.</p>
    </div>
    <button class="outlined white" on:click={handle_modal_close}><div>Close</div></button>

</div>