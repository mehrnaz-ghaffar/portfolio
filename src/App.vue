<template>
  <div id="app">
    <main>
      <!-- menu -->
      <nav 
        class="menu"
        :class="clicked ? 'menuActive' : 'menu'"
        @click="toggle()"
      >
        <div class="logoContent">
          <div class="logo">
            <span class="logoName">Menu</span>
            <i class="fas fa-bars"></i>
          </div>
        </div>
        <ul class="navList">
          <li>
            <a 
              href="#" 
              class="navLink"
            >
              <i class="fas fa-user"></i>
              <span class="navText">about me</span>
            </a>
            <span class="tooltip">about me</span>
          </li>
          <li>
            <a
              href="#"
              class="navLink"
            >
              <i class="far fa-address-card"></i>
              <span class="navText">my skills</span>
            </a>
            <span class="tooltip">my skills</span>
          </li>
          <li>
            <a
              href="#" 
              class="navLink"
            >
              <i class="fas fa-language"></i>
              <span class="navText">my languages</span>
            </a>
            <span class="tooltip">my language</span>
          </li>
          <li>
            <a
              href="#" 
              class="navLink"
            >
              <!-- logo -->
              <span class="navText">text</span>
            </a>
            <span class="tooltip">test</span>
          </li>
          <li>
            <a 
              href="#" 
              class="navLink"
            >
              <!-- logo -->
              <span class="navText">text</span>
            </a>
            <span class="tooltip">test</span>
          </li>
        </ul>
      </nav>

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
        <divider />
        <div class="aboutContainer">
          <div
            id="leftDiv"
            class="aboutText"
            dir="rtl"
          >
            <ul>
              <!-- <dl>
                <dt>full name</dt> <dd>mehrnaz ghaffar</dd>
              </dl> -->
              <li>
                <div class="titles">
                  <b>FULL NAME</b>
                </div>
                <div>Mehrnaz Ghaffar Tabrizi</div>   
              </li>
              <li>
                <div class="titles">
                  <b>BIRTHDAY</b>
                </div>
                <div>1378/8/18</div> 
              </li>
              <li>
                <div class="titles">
                  <b>BIRTH PLACE</b>
                </div>
                <div>Tehran , Iran </div>
              </li>
              <li>
                <div class="titles">
                  <b>my address</b>
                </div>
                <div>sample text</div>
              </li>
            </ul>
          </div>
          <div class="aboutImage">
            <img
              src="./assets/images/sample3.jpg"
              alt=""
            >
          </div>
          <div
            id="rightDiv"
            class="aboutText"
          >
            <ul>
              <li>
                <div class="titles">
                  <b>ADDRESS</b>
                </div>
                <div>Tehran , Iran</div>   
              </li>
              <li>
                <div class="titles">
                  <b>PHONE</b>
                </div>
                <div>+98912*****15</div> 
              </li>
              <li>
                <div class="titles">
                  <b>EMAIL</b>
                </div>
                <div>mehrnaz.ghaffar@gmail.com</div>
              </li>
              <li>
                <div class="titles">
                  <b>my address</b>
                </div>
                <div>sample text</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="aboutInformation">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolores magnam inventore sit a cum.
            Assumenda alias perferendis eos deserunt illo quia ullam animi odit. In inventore facilis blanditiis animi?
          </p>
        </div>     
        <div class="button">
          <button>download resume</button>
        </div>
      </section>

      <!-- skills Section -->
      <section class="mySkills">
        <h2>My Skills</h2>
        <divider />
        <div class="skillsContainer">
          <div class="column">
            <div class="progressBar">
              <span>HTML</span>
              <progressBar /> 
            </div>
            <div class="progressBar">
              <span>Javascript</span>
              <progressBar /> 
            </div>
            <div class="progressBar">
              <span>Git</span>
              <progressBar /> 
            </div>
            <div class="progressBar">
              <span>text</span>
              <progressBar /> 
            </div>
          </div>
          <div class="column">
            <div class="progressBar">
              <span>CSS</span>
              <progressBar /> 
            </div>
            <div class="progressBar">
              <span>Vue.js</span>
              <progressBar /> 
            </div>
            <div class="progressBar">
              <span>text</span>
              <progressBar /> 
            </div>
            <div class="progressBar">
              <span>text</span>
              <progressBar /> 
            </div>
          </div>
        </div>
      </section>

      <!-- Language Section -->
      <section class="languages">
        <h2>My Languages</h2>
        <divider />
        <div class="languageContainer">
          <div class="card">
            <div class="countryFlag">
              <img 
                src="./assets/images/images.jpg" 
                alt=""
              >
            </div>
            <div class="level">
              <h1>English</h1>
              <p>
                speaking 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star-half" />
                <br>
                listening 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star-half" />
                <br>
                reading 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <br>
                writing
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <br>
              </p> 
            </div>
          </div>
          <div class="card">
            <div class="countryFlag">
              <img 
                src="./assets/images/images.jpg" 
                alt=""
              >
            </div>
            <div class="level">
              <h1>name2</h1>
              <p>
                speaking 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star-half" />
                <br>
                listening 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star-half" />
                <br>
                reading 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <br>
                writing
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <br>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="countryFlag">
              <img 
                src="./assets/images/images.jpg"
                alt=""
              >
            </div>
            <div class="level">
              <h1>name3</h1>
              <p>
                speaking 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star-half" />
                <br>
                listening 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star-half" />
                <br>
                reading 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <br>
                writing
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <br>
              </p> 
            </div>
          </div>
          <div class="card">
            <div class="countryFlag">
              <img 
                src="./assets/images/images.jpg"
                alt=""
              >
            </div>
            <div class="level">
              <h1>name4</h1>
              <p>
                speaking 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star-half" />
                <br>
                listening 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star-half" />
                <br>
                reading 
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <br>
                writing
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <br>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    <!-- on load animated text -->
    <div class="preIntroduction">
      <div class="preIntroductionText">
        <h1 class="hide">
          <span class="text">Creating innovation</span>
        </h1>
        <h1 class="hide">
          <span class="text">For everyday</span>
        </h1>
        <h1 class="hide">
          <span class="text">People.</span>
        </h1>
      </div>
    </div>
    <!-- on load animated slider -->
    <div class="slider" />
  </div>
</template>


  
<script>
// import navbar from './components/navbar.vue';
import gsap from 'gsap';
import progressBar from './components/progressBar.vue'
import divider from './components/divider.vue'

  

export default {
  name: "App",

  components: { progressBar,
                divider 
  },
  data(){
        return{
          clicked : false,
          menu : document.querySelector(".menu"),
          btn : document.querySelector("#btn"),
            
        }
    },
  mounted(){
    const timeline = gsap.timeline({defaults :{ ease : "power1.out" }});
    timeline.to(".text", {y:"0%" , duration: 1, stagger: 0.25});
    timeline.to(".slider" , {y:"-100%", duration: 1.5 , delay: 0.5});
    timeline.to(".preIntroduction" , {y:"-100%", duration: 1}, "-=1");
    timeline.fromTo("nav" , { opacity:0 }, { opacity:1 , duration: 1 });
    timeline.fromTo(".introductionText" , { opacity:0 }, { opacity:1 , duration: 1 }, "-=1");

  },
    methods: {
      toggle : function(){
        this.clicked = !this.clicked
        console.log(this.clicked)
      },

    },

};

</script>


<style>



/* //////////////// on load animation /////////////////// */

.preIntroduction{
  background: black;
  position: fixed;
  top : 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center;  */
  justify-content: center;
}

.preIntroductionText{
  color: rgb(241, 243, 245);
  font-size: 3rem;
  margin-top: 80px;
}

.slider{
  background-color: rgb(83, 91, 95);
  position: fixed;
  top : 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
}

.hide{
  background: black;
  overflow: hidden;
}

.hide span {
  display: inline-block;
  transform: translateY(100%);
}

/*///////////////////////////////////////////// General Styles ///////////////////////////////////////////////////*/


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
  text-shadow: 1px 4px 5px rgb(199 192 193);
}

/*////////////////// menu /////////////////*/
.menu{
  position: fixed;
  left: 0;
  top: 42px;
  height: 530px;
  width: 78px;
  background: rgb(224, 147, 190);
  padding: 6px 14px;
  transition: all 0.5s ease;
  border-radius: 0px 10px 10px 0px;
}

.menu.menuActive{
  width: 240px;
}

.menu .logoContent .logoName{
  opacity: 0;
  pointer-events: none;
}

.menu.menuActive .logoContent .logoName{
  opacity: 0;
  pointer-events: none;
}

.menu .logoContent .logo{
  color: #fff;
  height: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  /* opacity: 0;
  pointer-events: none; */
}

/* .menu.menuActive .logoContent .logo{
  opacity: 1;
  pointer-events: none;
} */

.menu ul {
  margin-top: 20px;
  padding-inline-start: initial;
}

.menu ul li{
  list-style: none;
  margin: 0 5px;
  position: relative;
  height: 50px;
  width: 100%;
  line-height: 50px;
}

.menu ul li .tooltip{
  position: absolute;
  left: 122px;
  top: 0;
  transform: translate(-50% , -50%);
  border-radius: 6px;
  height: 35px;
  width: 122px;
  background: rgb(121, 88, 88);
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;

}

.menu.menuActive ul li .tooltip{
  display: none;
}

.menu ul li:hover .tooltip{
  top: 50%;
  transition: all 0.5s ease;
  opacity: 1;
}

.menu ul li a{
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  white-space: nowrap;
}

.menu ul li a:hover{
  background: coral;
  color: cornflowerblue;
}

.menu ul li i{
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}

.menu .navText{
  opacity: 0;
  pointer-events: none;
}

.menu.menuActive .navText{
  opacity: 1;
  pointer-events: auto;
}

/*  ///////////////  Introduction Section  ///////////////// */
.introductionImage {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent),
    url(./assets/images/background.png);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  /* padding: 0 8%; */
  /* position: relative; */
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
  margin: 60px 20px 20px 70px;
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
  cursor: pointer;
  transition: transform .2s;
}

.button button:hover{
   background-color: rgb(235, 198, 206);
   transform: scale(1.1);
}


/* /////////////////  Skills Sections  ///////////////// */
.mySkills{
  margin-bottom: 100px;
}

.skillsContainer{
  margin-top: 70px;
  display: flex;
  justify-content: space-evenly;

}

/* .column{
  flex: 50%;
} */

.progressBar{
  display: flex;
  margin-bottom: 20px;
}

.progressBar span {
  margin-right: 10px;
  font-size: 20px;
  display: inline;
  width: 80px;
}

@media screen and (max-width: 1028px) {
  .skillsContainer{
    display: flex;
    flex-direction: column;
    text-align: -webkit-center;
    align-items: center;
  }
  
}

/*  ///////////////  Languages Section  ///////////////// */
.languages{
  margin: 100px 0 100px 0;
}

.languageContainer{
  position: relative;
  /* width: 1100px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 60px 30px 30px 30px;
}

.card{
  position: relative;
  max-width: 300px;
  height: 210px;
  background: rgba(160, 153, 153, 0);
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;

}

.card:hover{
  height: 420px;
}

.countryFlag{
  position: relative;
  width: 260px;
  height: 260px;
  top: -60px;
  left: 20px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.countryFlag img{
  max-width: 100%;
  border-radius: 4px;
}

.card .level{
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #000;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.card:hover .level{
  visibility: visible;
  opacity: 1;
  margin-top: -40px;
  transition-delay: 0.2s;
}

.level p i{
  color: coral;
}
</style>
