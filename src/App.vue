<template>
  <div id="app">


    <navbar></navbar>


    <main>
      <section class="introImage">
        <div class="introText">
          <p>Hi I'm</p>
          <h1>Mehrnaz</h1>
          <h3>text sample</h3>
        </div>
      </section>
      <section class="about">
        <h2>ABOUT ME</h2>

      </section>
    </main>
  </div>
</template>


  
<script>
import navbar from './components/navbar.vue';
export default {
  components: { navbar },
  name: "App"

};
</script>


<style>
body {
  padding: 0;
  margin: 0;
  height: 100%;
  perspective-origin: 0% 50%;
  perspective: 800px;
}

* {
  box-sizing: border-box;
}

/* nav , section{
  transition: transform 150ms ease-out;
} */

/* main{
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  display: flex;
  overflow: hidden;
  background-size: cover;
} */

/* main::after{
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to right , transparent , rgba(33,33,45,.5));
  visibility: hidden;
  opacity: 0;
  transition: opacity 150ms ease-out , visibility 0s 150ms;
}

main.navbarActive{
  border-radius: 0.001px;
  transform: translateX(16em) rotateY(15deg);

}

main.navbarActive::after{
  visibility: visible;
  opacity: 1;
  transition: opacity 150ms ease-out , visibility 0s;
} */


/* main.navbarHover{
  border-radius: 0.001px;
  transform: translateX(1em) rotateY(1deg);
} */




.introImage {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent),
    url(./assets/images/background.png);
  background-size: cover;
  background-position: center;
  /* padding: 0 8%; */
  position: relative;
}

.introText {
  color: #fff;
  position: absolute;
  bottom: 8%;
  /* background-color: blue; */
  padding-left: 300px;
}
</style>
