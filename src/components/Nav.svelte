<script>
  import { fly } from "svelte/transition";

  export let segment;
  const links = ["sketches", "blog", "about"];
</script>

<nav>
  <ul>
    {#each links as link}
      <li role="navigation" aria-label={link}> 
        <a aria-current={segment === link ? "page" : undefined} href={link}>
          {link}
        </a>
        {#if segment === link}
          <div transition:fly class="highlight-block" />
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    font-weight: 600;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    display: block;
    font-size: 1.2rem;
    padding: 1em 0.5em;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
    opacity: 0.9;
  }

  .highlight-block {
    position: relative;
  }
  .highlight-block::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 15px;
    background-color: deepskyblue;
    display: block;
  }
</style>
