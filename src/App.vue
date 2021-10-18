<template>
  <div id="app">

    <nav class="navbarActive">
        <h1>MENUE</h1>
        <ul>
          <li>ABOUT</li>
          <li>MY SKILLS</li>
          <li>EXPERIENCE / EDUCATION</li>
          <li>CONTACS</li>
          <li>test</li> 
        </ul>
      </nav>

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

body{
  padding: 0;
  margin: 0;
  height: 100%;
  perspective-origin: 0% 50%;
  perspective: 800px;
}

*{
  box-sizing: border-box;
}

/* nav , section{
  transition: transform 150ms ease-out;
} */

nav{
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 16em;
  background-color: cornsilk;
  transform: translateX(-16em);
}

nav.navbarActive{
  transform: translateX(0);
}

nav.navbarHover{
  transform: translateX(-15em);
}


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
