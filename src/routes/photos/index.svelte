<script>
  import { photos, imageUrl } from "./photos.json";
</script>

<section>
  {#each photos as { path, alt, orientation, location }}
    <figure
      class={`container-${
        orientation === "portrait" ? "portrait" : "landscape"
      }`}
    >
      <img
        src={`${imageUrl}/${path}`}
        {alt}
        class={orientation === "portrait" ? "portrait" : "landscape"}
      />
      <figcaption>{location}</figcaption>
    </figure>
  {/each}
</section>

<style>
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section:nth-last-child(1){
    padding-bottom: 15rem;
  }
  .landscape {
  }
  .portrait {
    width: min(var(--page-min-width), 450px);
  }
</style>
