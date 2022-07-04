<script context="module">
    export function load({ error, status }) {
        if (status === 404){
            return {
                status: 302,
                redirect: "/"
            };
        }
        return {
            props: {
                title: `${status}: ${error.message}`
            }
        };
    }
  </script>

<script>
    export let title;
</script>
  
{#if title}
    <h2>{title}</h2>
{/if}