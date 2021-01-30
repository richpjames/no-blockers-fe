<script >
  import { fade } from 'svelte/transition';

  let y
  let layers = ["1", "2", "3", "5", "4", "6", "7"]
</script>

<svelte:window bind:scrollY={y}/>

<svelte:head>
	<title>Ball</title>
</svelte:head>

<div class="container" transition:fade>
  <div class="circle" style="transform: translateY({y * 2}px);"></div>
  {#each layers as layer, i}
  <div class="layer-one" style={`margin-top: ${i === 0 ? "5rem" : "0"}`}>
    <div class="part-one cyan"></div>
    <div class="part-two cyan" style="margin-left: {y / 20 + 9 / (i + 1)}%"></div>
  </div>
  <div class="layer">    
    <div class="part-one brown"></div>
    <div class="part-two brown" style="margin-left: {y / 20 + 8 / (i + 1)}%"></div>
  </div>
  <div class="layer">    
    <div class="part-one peach"></div>
    <div class="part-two peach" style="margin-left: {y / 20 + 7 / (i + 1)}%"></div>
  </div>
  <div class="layer">    
    <div class="part-one greyn"></div>
    <div class="part-two greyn" style="margin-left: {y / 20  + 6 / (i + 1)}%"></div>
  </div>
  <div class="layer">    
    <div class="part-one deepskyblue"></div>
    <div class="part-two deepskyblue" style="margin-left: {y / 20 + 6 / (i + 1)}%"></div>
  </div>
  {/each}
  bingo
</div>

<style>

 .container {
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.circle {
  height: 10rem;
  width: 10rem;
  border-radius: 100%;
  background-color: deeppink;
  margin-bottom: 10rem;
  position: absolute;
}
.cyan {
    background-color: #00ffcd;
}
.brown {
    background-color: #ec4e20;
}
.peach{
  background-color: #ff9505;
}
.greyn{
  background-color: #00a6a6;
}

.deepskyblue{
  background-color: deepskyblue;
}
.layer-one {
  height: 3.5rem;
  display: flex;
  width: 100%;
}
.part-one {
  width: 100%;
  border-top-right-radius: 5rem;
  }
.part-two {
  width: 100%;
  border-top-left-radius: 5rem;
  margin-left: auto;
}
.layer{
  height: 3.5rem;
  display: flex;
  width: 100%;
}


</style>
