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
  <h1>blog</h1>

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
  
  h1{
    margin: 0;
    padding-bottom: 2rem;
  }
  h3 {
    color: #333;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 5rem 0;
  }
  p {
    margin: 0;
    text-justify: inter-word;
    text-align: justify;
  }
</style>
