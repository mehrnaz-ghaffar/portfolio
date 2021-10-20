<template>
    <div>
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

    </div>
</template>

<script>
export default {
    name: 'navbar',
}
</script>

<style>


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


</style>