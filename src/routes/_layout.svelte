<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 100vw;
		padding: 2rem 0;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.wrapper {
		max-width: 56em;
		padding: 2em;
	}
</style>

<Nav {segment}/>

<main>
	{#if segment === "sketches"}
		<slot></slot>
	{:else}
		<div class="wrapper">
			<slot></slot>
		</div>
	{/if}
</main>