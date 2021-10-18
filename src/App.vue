<template>
  <div id="app">
    <section class="introImage">
      <div class="introText">
        <p>Hi I'm</p>
        <h1>Mehrnaz</h1>
        <h3>text sample</h3>
      </div>
      
    </section>
  </div>

</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
.introImage{
  width: 100%;
  height: 100vh;
  background-image: linear-gradient( rgba(0,0,0,0.3), transparent) , url(./assets/images/background.png);
  background-size: cover;
  background-position: center;
  /* padding: 0 8%; */
  position: relative;

}

.introText{
  color: #fff;
  position: absolute;
  bottom: 8%;
  /* background-color: blue; */
  padding-left: 300px;
}

</style>
