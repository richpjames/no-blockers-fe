<script>
  import { photos, imageUrl } from "./photos.json";
</script>

<h1>photos</h1>

{#each photos as { path, alt, orientation, location }}
  <figure
    class={`container-${orientation === "portrait" ? "portrait" : "landscape"}`}
  >
    <img
      src={`${imageUrl}/${path}`}
      {alt}
      class={orientation === "portrait" ? "portrait" : "landscape"}
    />
    <figcaption>{location}</figcaption>
  </figure>
{/each}

<style>
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .landscape {
  }
  .portrait {
    width: min(var(--page-min-width), 450px);
  }
</style>
