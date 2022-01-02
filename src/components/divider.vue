<template>
  <div class="container">
    <div class="line" :class="{'lineDark': darkMode}">
      <div class="diamond" :class="{'diamondDark': darkMode}"/>
    </div>
    <hr>
  </div>
</template>

<script>


export default {
  name: "Divider",
  props: ['darkMode'],
}
</script>

<style scoped>
.container {
  padding: 20px 400px 20px 400px;
}

.line , .lineDark {
  width: 100%;
  height: 45px;
  position: relative;
}

.line::after,
.line::before {
  content: "";
  position: absolute;
  margin: auto;
  height: 2px;
  background: #000;
  width: 45%;
  top: 45%;
}

.lineDark::after,
.lineDark::before {
  content: "";
  position: absolute;
  margin: auto;
  height: 2px;
  background: #320064;
  width: 45%;
  top: 45%;
}

.line::after {
  left: 0;
}

.line::before {
  right: 0;
}

.diamond {
  height: 40px;
  width: 40px;
  border: 2px solid #000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: rotate(45deg);
}

.diamondDark{
  background: #320064;
}

hr{
  opacity: 0;
}

@media (max-width: 1280px) {
  .diamond {
    height: 20px;
    width: 20px;
  }

  .line {
    height: 25px;
  }
}

@media (max-width: 1161px) {
  .container {
    padding: 20px 200px 20px 200px;
  }
  
}

@media (max-width: 976px) {

  .diamond {
    height: 17px;
    width: 17px;
  }
  
}

@media (max-width: 604px) {
  .container {
    padding: 20px 100px 20px 100px;
  }
  
  .diamond {
    height: 10px;
    width: 10px;
  }
}


@media (max-width: 296px){
  .line{
    visibility: hidden;
  }

  .diamond{
     visibility: hidden;
  }

  hr{
    opacity: 1;
    border-top: 3px solid rgb(0, 0, 0);
  }

  .container {
    padding: 20px 50px 20px 50px;
  }

}

</style>
