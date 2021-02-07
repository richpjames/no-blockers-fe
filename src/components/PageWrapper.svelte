<script>
</script>

<div>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: min(var(--page-min-width), var(--page-max-width));
  }
</style>
