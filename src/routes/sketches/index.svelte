<script>
  const sketches = [{ name: "ball", imagePath: "ball.jpg" }];
</script>

<div class="sketches-wrapper">
  <h1>sketches</h1>
  
  <p>these are ideas i'm using to improve my css and have fun</p>

  <section>
    <ul>
      {#each sketches as { name, imagePath }}
      <hr/>
        <li>
          <a href="sketches/ball"><h3>{name}</h3></a>
          <img src={`./sketch_thumbs/${imagePath}`} alt={`${name} thumbnail`} />
        </li>
      {/each}
    </ul>
  </section>
</div>

<style>
  .sketches-wrapper {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items:center;
    /* text-align: center; */
  }
  img {
    width: min(600px, 95%);
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;

  }
  p{
    margin:0;
  }

</style>
