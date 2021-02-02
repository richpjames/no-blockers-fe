<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav {segment} />

<main>
  {#if segment === "sketches"}
    <slot />
  {:else}
    <div class="wrapper">
      <slot />
    </div>
  {/if}
</main>

<style>
  main {
    position: relative;
    max-width: 100vw;
    background-color: white;
    padding-top: min(30%,0.5rem);
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrapper {
    max-width: 100vw;
    padding: min(30%,0.5rem);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
