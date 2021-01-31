<script>
  import { onMount } from "svelte";
  import { goto } from '@sapper/app';
  onMount(() => goto('./blog'))
</script>

<svelte:head>
  <title>no blockers</title>
</svelte:head>
