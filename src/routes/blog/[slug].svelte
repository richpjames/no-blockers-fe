<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>rj blog: {post.title}</title>
  <!--  Include canonical links to your blog -->
  <!--   <link rel="canonical" href="" /> -->

  <!-- Validate your twitter card with https://cards-dev.twitter.com/validator  -->
  <!-- Update content properties with your URL   -->
  <!-- 	<meta property="og:url" content=""} /> -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={post.title} />
  <meta name="Description" content={post.excerpt} />
  <meta property="og:description" content={post.excerpt} />

  <!--  Link to your preferred image  -->
  <!-- 	<meta property="og:image" content="" /> -->

  <meta name="twitter:card" content="summary_large_image" />

  <!--  Link to your Domain  -->
  <!-- 	<meta name="twitter:domain" value="" /> -->

  <!--  Link to your Twitter Account  -->
  <!-- 	<meta name="twitter:creator" value="" /> -->

  <meta name="twitter:title" value={post.title} />
  <meta name="twitter:description" content={post.excerpt} />

  <!--  Link to your preferred image to be displayed on Twitter (832x520px) -->
  <!-- 	<meta name="twitter:image" content="" /> -->

  <meta name="twitter:label1" value="Published on" />
  <meta
    name="twitter:data1"
    value={new Date(post.printDate).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}
  />
  <meta name="twitter:label2" value="Reading Time" />
  <meta name="twitter:data2" value={post.printReadingTime} />
</svelte:head>
<article>
  {@html post.html}
</article>

<style>
  article {
    width: min(90%, 50em);
    margin-bottom: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  article :global(h2) {
    text-align: center;
    padding-bottom: 2.5rem;
  }

  article :global(h3) {
    text-align: center;
    padding-top: 2rem;
	padding-bottom: 1.85rem;
	margin: 0;
  }
  article :global(p) {
    padding-bottom: 1rem;
    padding-top: .85rem;
  }
  article :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  article :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  article :global(ul) {
    line-height: 1.5;
  }

  article :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>
