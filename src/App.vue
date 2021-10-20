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

import $ from 'jquery'
export default {
  name: "App",
  data(){
    return {
      
    };
  },
  methods: {
    $function(){
      var nav = $('nav'),
          menue = $('nav h1'),
          main = $('main'),
          open = false;
          // hover = false;

      menue.on("click", function(){
        open = !open? true : false ;
        nav.toggleClass('navbarActive');
        main.toggleClass('navbarActive');
        nav.removeClass('navbarHover');
        main.removeClass('navbarHover');
        console.log(open)

      })
    }
    
  },
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

nav {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 16em;
  background-color: cornsilk;
  transform: translateX(-16em);
}

nav.navbarActive {
  transform: translateX(0);
}

nav.navbarHover {
  transform: translateX(-15em);
}

nav h1 {
  z-index: 100;
  display: block;
  position: absolute;
  top: 0;
  right: -65px;
  height: 60px;
  width: 65px;
  line-height: 60px;
  font-size: 0.8rem;
  /* letter-spacing: 1px; */
  color: blue;
  text-transform: uppercase;
  text-align: center;
  background-color: coral;
  cursor: pointer;
}

nav h1:hover {
  color: white;
  background-color: violet;
}

nav ul {
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  padding: 0 1em;
  width: 100%;
  height: 60px;
  color: aqua;
  line-height: 60px;
  background-color: gray;
  transition: all 0.5s ease-in;
}

/* nav li:nth-of-type(2n){
  background-color: hotpink;
} */

nav li:hover {
  background: orangered;
  color: white;
}

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

main::after{
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
}


main.navbarHover{
  border-radius: 0.001px;
  transform: translateX(1em) rotateY(1deg);
}




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
