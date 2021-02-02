<script>
  import PageTitle from "../../components/PageTitle.svelte";

  import { photos, imageUrl } from "./photos.json";
</script>

<PageTitle>photos</PageTitle>

{#each photos as { path, alt, orientation, location }}
  <figure>
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
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .landscape {
  }
  .portrait {
    width: min(90%, 500px);
  }
</style>
