<template>
  <div id="app">


    <!-- <navbar></navbar> -->


     <nav 
      v-on:click="toggle()"
      @mouseover="hover=true"
      @mouseleave="hover=false"
      v-bind:class="{ navbarActive: opened , navbarHover:hover}"
         
      >
      <h1>MENUE</h1>
      <ul>
        <li>ABOUT</li>
        <li>MY SKILLS</li>
        <li>EXPERIENCE / EDUCATION</li>
        <li>CONTACS</li>
        <li>test</li>
      </ul>
    </nav>

    

    <main
    v-bind:class="{ navbarActiveMenue: opened , navbarHoverMain:hover }"
    >

      <!-- Introduction Section -->
      <section class="introductionImage">
        <div class="introductionText">
          <p>Hi I'm</p>
          <h1>Mehrnaz</h1>
          <h3>text sample</h3>
        </div>
      </section>

      <!-- About Section -->
      <section class="about">
        <h2>About  Me</h2>
        <divider></divider>
        <div class="aboutContainer">
          <div class="aboutText" id="leftDiv" dir="rtl">
            <ul>
              <li>
                <div class="titles"> <b>FULL NAME</b> </div>
                <div>Mehrnaz Ghaffar Tabrizi</div>   
              </li>
              <li>
                <div class="titles"> <b>BIRTHDAY</b> </div>
                <div>1378/8/18</div> 
              </li>
              <li>
                <div class="titles"> <b>BIRTH PLACE</b> </div>
                <div>Tehran , Iran </div>
              </li>
              <li>
                <div class="titles"> <b>my address</b> </div>
                <div>sample text</div>
              </li>
            </ul>

          </div>
          <div class="aboutImage">
            <img src="./assets/images/sample3.jpg" alt="" >
          </div>
          <div class="aboutText" id="rightDiv">
            <ul>
              <li>
                <div class="titles"> <b>ADDRESS</b> </div>
                <div>Tehran , Iran</div>   
              </li>
              <li>
                <div class="titles"> <b>PHONE</b> </div>
                <div>+98912*****15</div> 
              </li>
              <li>
                <div class="titles"> <b>EMAIL</b> </div>
                <div>mehrnaz.ghaffar@gmail.com</div>
              </li>
              <li>
                <div class="titles"> <b>my address</b> </div>
                <div>sample text</div>
              </li>
            </ul>

          </div>
          
          
        </div>
        <div class="aboutInformation">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolores magnam inventore sit a cum.
             Assumenda alias perferendis eos deserunt illo quia ullam animi odit. In inventore facilis blanditiis animi?</p>
        </div>     
        <div class="button">
        <button>download resume</button>
        </div>
      </section>

      <!-- skills Section -->
      <section class="mySkills">
        <h2>My Skills</h2>
        <divider></divider>
        <div class="skillsContainer">
          <div class="column">
            <span>text</span>
            <progressBar class="progressBar"></progressBar> 
            <span>taxt</span>
            <progressBar class="progressBar"></progressBar>
            <span>text</span>
            <progressBar class="progressBar"></progressBar>
            <span>text</span>
            <progressBar class="progressBar"></progressBar>
          </div>
          <div class="column">
            <span>text</span>
            <progressBar class="progressBar"></progressBar>
            <span>text</span> 
            <progressBar class="progressBar"></progressBar>
            <span>text</span>
            <progressBar class="progressBar"></progressBar>
            <span>text</span>
            <progressBar class="progressBar"></progressBar>
          </div>

          
          

        </div>


      </section>


      



    </main>
  </div>
</template>


  
<script>
// import navbar from './components/navbar.vue';
import progressBar from './components/progressBar.vue'
import divider from './components/divider.vue'
export default {
  components: { progressBar,
                divider 
  },
  name: "App",
  data(){
        return{
            opened : false,
            hover: false
        }
    },
    methods: {
      toggle : function(){
        this.opened = !this.opened
        console.log(this.opened)
      },

    },

};

</script>


<style>


/*/////////////////////////////// navbar TEST css ///////////////////////////*/
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

.navbarActive {
  transform: translateX(0);
}

.navbarHover {
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

/*///////////////////////////////////////////// CSS ///////////////////////////////////////////////////*/


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

h2{
  text-align: center;
  margin: 20px 0px 0px 0px;
  font-size:40px;
  font-family: 'Great Vibes', cursive;
}




nav , main{
  transition: transform 150ms ease-out;
}

main{
  z-index: 0;
  /* position: absolute; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  /* display: flex; */
  overflow: hidden;
  background-size: cover;
}

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

.navbarActiveMenue{
  border-radius: 0.001px;
  transform: translateX(16em) rotateY(15deg);

}

.navbarActiveMenue::after{
  visibility: visible;
  opacity: 1;
  transition: opacity 150ms ease-out , visibility 0s;
}


.navbarHoverMain{
  border-radius: 0.001px;
  transform: translateX(1em) rotateY(1deg);
}






/*  ///////////////  Introduction Section  ///////////////// */
.introductionImage {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent),
    url(./assets/images/background.png);
  /* background-attachment: fixed; */
  background-size: cover;
  background-position: center;
  /* padding: 0 8%; */
  position: relative;
}

.introductionText {
  color: #fff;
  position: absolute;
  bottom: 8%;
  /* background-color: blue; */
  padding-left: 230px;
}

@media only screen and (max-width: 1271px){
   .introductionText{
     padding-left: 100px;
   }
}
@media only screen and (max-width: 659px){
  .introductionImage{
    background-position: 70% 0%;
  }
}

/*   /////////////////  About Section ///////////////////  */
.about{
  margin-top: 50px;
}

.aboutContainer{
  margin: 60px 20px 20px 20px;
  display: flex;
  justify-content: center;
}

.aboutText{
  margin-top: 25px;
  /* margin-top: inherit; */
}

.aboutText ul li{
  list-style: none;
  line-height: 3rem;
  font-family: 'Zen Antique', serif;
}

#leftDiv{
 margin-right: -98px ;   
}

#rightDiv{
  margin-left: -100px;
}

.aboutImage img{
  
  clip-path: circle();
}

.aboutInformation p{
  text-align: center;
  margin-top: 50px;
}

.titles{
  margin-bottom: -20px;
}

.button{
  text-align: center;
  margin: 65px;
}

.button button{
  padding: 25px;
  border-radius: 16px;
  font-size: 1em;
  box-shadow: 4px 3px 9px grey;
}


/* /////////////////  Skills Sections  ///////////////// */
.mySkills{
  margin-bottom: 100px;
}

.skillsContainer{
  margin-top: 70px;
  display: flex;
  justify-content: space-evenly;
  column-gap: 10px;

}

.progressBar{
  margin-bottom: 10px;
}

/* .column{
  flex: 50%;
} */

@media screen and (max-width: 1028px) {
  .skillsContainer{
    display: flex;
    flex-direction: column;
    text-align: -webkit-center;
  }
  
}




</style>
