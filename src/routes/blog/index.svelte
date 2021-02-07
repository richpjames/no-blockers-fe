<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
  import ListWrapper from "../../components/ListWrapper.svelte";
</script>

<script>
  import PageWrapper from "../../components/PageWrapper.svelte";

  export let posts;
</script>

<svelte:head>
  <title>rich james' blog</title>
</svelte:head>

<PageWrapper>
  <h2>blog</h2>

  <ListWrapper>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li>
        <a rel="prefetch" href="blog/{post.slug}"><h3>{post.title}</h3></a>
        <p>{post.excerpt}</p>
      </li>
    {/each}
  </ListWrapper>
</PageWrapper>

<style>
  h3 {
    color: var(--main-text-colour);
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: var(--x-small-component-spacing);
  }
  p {
    text-justify: inter-word;
    text-align: justify;
  }
</style>
