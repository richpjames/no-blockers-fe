<script>
  import { fly } from "svelte/transition";

  export let segment;
  const links = ["sketches", "blog", "photos", "about"];
</script>

<nav>
  <ul>
    {#each links as link}
      <li
        role="navigation"
        aria-current={segment === link ? "page" : undefined}
        aria-label={link}
      >
        <a href={link}>
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
    font-weight: var(--font-weight-heavy);
  }

  li {
    display: block;
    font-size: var(--font-title-x-small);
    padding-top: var(--x-small-text-spacing);
    padding-right: var(--x-small-text-spacing);
    padding-bottom: var(--x-small-text-spacing);
    padding-left: var(--x-small-text-spacing);
    opacity: var(--medium-opacity);
  }


  ul {
    display: flex;
  }
  @media screen and (max-width: 400px) {
    li {
      font-size: var(--font-title-small);
      padding: var(--x-small-text-spacing);
    }


  ul {
    display: flex;
    justify-content: center;
  }
  }



  a {
    text-decoration: none;
    color: inherit;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
    opacity: 1;
  }

  .highlight-block {
    position: relative;
  }
  .highlight-block::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 15px;
    background-color: var(--main-contrast);
    display: block;
  }
</style>
