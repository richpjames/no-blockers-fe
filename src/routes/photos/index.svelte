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
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figcaption {
    padding: 0 5%;
    align-self: flex-start;
  }

  .landscape {
  }
  .portrait {
    width: min(90%, 450px);
  }
</style>
