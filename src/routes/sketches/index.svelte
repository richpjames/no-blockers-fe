<script>
  import ListWrapper from "../../components/ListWrapper.svelte";
  import PageWrapper from "../../components/PageWrapper.svelte";

  const sketches = [{ name: "ball", imagePath: "ball.jpg" }];
</script>

<svelte:head>
  <title>rich james' sketches</title>
</svelte:head>

<div>
  <h1>sketches</h1>

  <p>these are ideas i'm using to improve my css and have fun</p>

  <ListWrapper>
    {#each sketches as { name, imagePath }}
      <hr />
      <li>
        <a href="sketches/ball"><h3>{name}</h3></a>
        <img src={`./sketch_thumbs/${imagePath}`} alt={`${name} thumbnail`} />
      </li>
    {/each}
  </ListWrapper>
</div>

<style>
  img {
    width: min(600px, 95%);
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
  }
  p {
    margin: 0;
    max-width: 56em;
    padding: min(30%, 2rem);
  }
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding-top: min(30%, 2rem);
  }
</style>
