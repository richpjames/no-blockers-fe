<script>
  let layer1Padding = "5rem"


</script>
<div class="container">
  <div class="circle"></div>  
  <div class="layer-one">
    <div class="part-one cyan"></div>
    <div class="pad"></div>
    <div class="part-two cyan"></div>
</div>
  <div class="layer-two">    
    <div class="part-one brown"></div>
    <div class="pad"></div>
    <div class="part-two brown l2p2"></div>
  </div>
  <div class="layer-three"></div>
  <div class="layer-four"></div>
  <div class="layer-five"></div>
</div>

<style>
 .container {
  width: 100%;
  height: 20rem;
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
.pad{
  width: 10rem;
}
.pad-small{
  width: 5rem;
}
.layer-one {
  height: 3.5rem;
  margin-top: 5rem;
  display: flex;
  width: 100%;
}
.part-one {
  width: 45%;
  border-top-right-radius: 5rem;
  }
.part-two {
  width: 45%;
  border-top-left-radius: 5rem;
  margin-left: auto;
}
.layer-two {
  height: 3.5rem;
  display: flex;
  width: 100%;
}

.layer-three {
  width: 100%;
  height: 3.5rem;
  background-color: #ff9505;
}
.layer-four {
  width: 100%;
  height: 3.5rem;
  background-color: #00a6a6;
}
.layer-five {
  width: 100%;
  height: 3.5rem;
  background-color: deepskyblue;
}
</style>
