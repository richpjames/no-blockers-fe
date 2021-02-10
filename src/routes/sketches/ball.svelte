<script>
  let colour1 = `--pink`;
  let colour2 = "--cyan";
  let colour3 = "--deep-cyan";
  let colour4 = "--orange";
  let colour5 = "--peach";

  const colours = [colour1, colour2, colour3, colour4, colour5];
  let layers = ["1", "2", "3", "5", "4", "6", "7"];

  $: layer1 = `background-color: var(${colours[0]});`;
  $: layer2 = `background-color: var(${colours[1]});`;
  $: layer3 = `background-color: var(${colours[2]});`;
  $: layer4 = `background-color: var(${colours[3]});`;
  $: layer5 = `background-color: var(${colours[4]});`;

  let y;

  $: lastCircleYPos = 0;
  $: circleFriendlyY = 0;
  $: bottomLayerColour = true;

  $: circleTransform = `transform: translateY(${y * 1.6}px);`;
  
  const onClick = (e) => {
    circleFriendlyY = Math.floor(y / 100);
    if (circleFriendlyY !== lastCircleYPos) {
      colours = { ...colours.pop(), ...colours.slice(0, colours.length - 1) };
    } else if (circleFriendlyY > lastCircleYPos) {
      lastCircleYPos = circleFriendlyY;
      const keepMeToo = colours.pop();
      colours.unshift(keepMeToo);
    }
    console.log(e.SCROLL_PAGE_DOWN);

    if (e.SCROLL_PAGE_DOWN > 3000) {
      console.log(e.SCROLL_PAGE_DOWN);
      bottomLayerColour = false;

      circleTransform = "";
    }
    layer1 = `background-color: var(${colours[0]});`;
    layer2 = `background-color: var(${colours[1]});`;
    layer3 = `background-color: var(${colours[2]});`;
    layer4 = `background-color: var(${colours[3]});`;
    layer5 = `background-color: var(${colours[4]});`;
  };
</script>

<svelte:window bind:scrollY={y} on:scroll={onClick} />

<svelte:head>
  <title>sketches: ball</title>
</svelte:head>

<h2>ball</h2>

<p>this is my first go at triggering changes to css using scroll</p>

<div class="container">
  {#each layers as layer, i}
    <div class="layer-one" style="margin-top: {i === 0 ? '5rem' : '0'}">
      <div class="part-one" style={`${layer1};`} />
      <div
        class="part-two"
        style="margin-left: {y / 20 + 9 / (i + 1)}%; {layer1};"
      />
    </div>
    <div class="layer">
      <div class="part-one" style={`${layer2};`} />
      <div
        class="part-two"
        style="margin-left: {y / 20 + 8 / (i + 1)}%; {layer2};"
      />
    </div>
    <div class="layer">
      <div class="part-one " style={`${layer3};`} />
      <div
        class="part-two "
        style="margin-left: {y / 20 + 7 / (i + 1)}%; {layer3};"
      />
    </div>
    <div class="layer">
      <div class="part-one" style={`${layer4};`} />
      <div
        class="part-two "
        style="margin-left: {y / 20 + 6 / (i + 1)}%; {layer4};"
      />
    </div>
    <div class="layer">
      <div class="part-one" style={`${layer5};`} />
      <div
        class="part-two "
        style="margin-left: {y / 20 + 6 / (i + 1)}%; {layer5};"
      />
    </div>
  {/each}
  <div class="circle" style={circleTransform} />
  <div class="layer {bottomLayerColour ? 'dark-brown' : ''}" />
</div>

<style>
  .container {
    width: 100%;
    max-height: 100rem;
    padding-top: var(--medium-component-spacing);
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
  .dark-brown {
    background-color: #83270b;
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
  .layer {
    height: 3.5rem;
    display: flex;
    width: 100%;
  }
</style>
