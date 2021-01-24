<script>
  export let segment;
</script>

<style>
  nav {
    align-items: flex-end;
    display: flex;
    flex: 1;
    font-family: Work Sans, sans-serif;
    font-weight: 700;
    justify-content: flex-end;
    letter-spacing: -2px;
    font-size: 1.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 5px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: '';
    position: absolute;
    transition: transform .3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #AAA;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: var(--main);
  }
</style>

<nav>
  <a class='{segment === "about" ? "selected" : ""}' href='about'>about</a>
  <a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
</nav>
