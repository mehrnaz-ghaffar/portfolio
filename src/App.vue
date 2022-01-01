<template>
  <div id="app">
    <main>
      <!-- Introduction Section -->
      <section class="introduction">
        <div class="introductionContainer">
          <h1 class="introductionText">
            Hi , I'm Mehrnaz
          </h1>
          <h5 class="introductionDetail">Front-end web developer</h5>
          <img 
            src="./assets/images/backgroundog.png" 
            class="background" 
            alt=""
          >
          <img 
            src="./assets/images/laptop.png" 
            class="layer1" 
            alt=""
          >
          <img 
            src="./assets/images/books.png" 
            class="layer2" 
            alt=""
          >
        </div>
        <!-- <div class="introductionText">
          <p>Hi I'm</p>
          
          <h3>text sample</h3>
        </div> -->
      </section>

      <section class="content">
        <!-- menu -->
        <nav 
          class="menu"
          :class="clicked ? 'menuActive' : 'menu'"
        >
          <div class="logoContent">
            <div class="logo">
              <span class="logoName">Menu</span>
              <i
                id="menuIcon" 
                class="fas fa-bars"
                @click="toggleNav()"
              />
            </div>
          </div>
          <ul class="navList">
            <li>
              <a 
                href="#about" 
                class="navLink"
              >
                <i class="fas fa-user" />
                <span class="navText">About</span>
              </a>
              <span class="tooltip">About</span>
            </li>
            <li>
              <a
                href="#mySkills"
                class="navLink"
              >
                <i class="far fa-address-card" />
                <span class="navText">Skills</span>
              </a>
              <span class="tooltip">Skills</span>
            </li>
            <li>
              <a
                href="#languages" 
                class="navLink"
              >
                <i class="fas fa-language" />
                <span class="navText">Languages</span>
              </a>
              <span class="tooltip">Language</span>
            </li>
            <li>
              <a
                href="#experience" 
                class="navLink"
              >
                <i class="fas fa-laptop-code" />
                <span class="navText">Experiences</span>
              </a>
              <span class="tooltip">Experiences</span>
            </li>
            <li>
              <a 
                href="#footer" 
                class="navLink"
              >
                <i class="fas fa-users" />
                <span class="navText">Social Media</span>
              </a>
              <span class="tooltip">Social Media</span>
            </li>
          </ul>
          <div class="darkmodeContent">
            <div class="darkmode">
              <div class="darkmodeIcon">
                <i 
                  v-if="darkMode"
                  class="fas fa-moon" 
                />
                <i 
                  v-else 
                  class="fas fa-sun" 
                />
              </div>
              <div class="switchButton">
                <switchBox 
                  @darkMode="darkMode = !darkMode"
                />
              </div>
            </div>
          </div>
        </nav>

        <!-- About Section -->
        <section
          id="about"
         :class="darkMode ? 'aboutDark' : 'about'"
        >
          <h2>About  Me</h2>
          <divider id="devider" />
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
                  <div class="info">Mehrnaz Ghaffar Tabrizi</div>   
                </li>
                <li>
                  <div class="titles">
                    <b>BIRTHDAY</b>
                  </div>
                  <div class="info">1378/8/18</div> 
                </li>
                <li>
                  <div class="titles">
                    <b>BIRTH PLACE</b>
                  </div>
                  <div class="info">Tehran , Iran </div>
                </li>
                <li>
                  <div class="titles">
                    <b>EMAIL</b>
                  </div>
                  <div class="info">mehrnaz.ghaffar@gmail.com</div>
                </li>
              </ul>
            </div>

            <img
              class="aboutImage"
              src="./assets/images/mehrnaz.png"
              alt=""
            >

            <div
              id="rightDiv"
              class="aboutText"
            >
              <ul>
                <li>
                  <div class="titles">
                    <b>ADDRESS</b>
                  </div>
                  <div class="info">Tehran , Iran</div>   
                </li>
                <li>
                  <div class="titles">
                    <b>PHONE</b>
                  </div>
                  <div class="info">+98912*****15</div> 
                </li>
                <li>
                  <div class="titles">
                    <b>DEGREE</b>
                  </div>
                  <div class="info">Bachlor of computer engineering</div>
                </li>
                <li>
                  <div class="titles">
                    <b>UNIVERSITY</b>
                  </div>
                  <div class="info">Shahrood university of technology</div>
                </li>
              </ul>
            </div>
          </div>
        <!-- <div class="aboutInformation">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolores magnam inventore sit a cum.
            Assumenda alias perferendis eos deserunt illo quia ullam animi odit. In inventore facilis blanditiis animi?
          </p>
        </div>     
        <div class="button">
          <button>download resume</button>
        </div> -->
        </section>

        <!-- skills Section -->
        <section 
          id="mySkills" 
          :class="darkMode ? 'mySkillsDark' : 'mySkills'"
        >
          <h2>My Skills</h2>
          <divider />
          <div class="skillsContainer">
            <div class="column">
              <div class="progressBar">          
                <progressBar 
                  :skillName="skillNameHtml" 
                  :width="widthHtml"
                /> 
                <span>86%</span>
              </div>
              <div class="progressBar">         
                <progressBar 
                  :skillName="skillNameJs"
                  :width="widthJs"
                /> 
                <span>63%</span>
              </div>
              <div class="progressBar">
                <progressBar 
                  :skillName="skillNameGit"
                  :width="widthGit"  
                /> 
                <span>46%</span>
              </div>
              <div class="progressBar">
                <progressBar 
                  :skillName="skillNamePython"
                  :width="widthPython"
                /> 
                <span>48%</span>
              </div>
            </div>
            <div class="column">
              <div class="progressBar">
                <progressBar 
                  :skillName="skillNameCss"
                  :width="widthCss"
                /> 
                <span>78%</span>
              </div>
              <div class="progressBar">
                <progressBar 
                  :skillName="skillNameVue"
                  :width="widthVue"
                /> 
                <span>56%</span>
              </div>
              <div class="progressBar">
                <progressBar 
                  :skillName="skillNameJava"
                  :width="widthJava"
                /> 
                <span>50%</span>
              </div>            
              <div class="progressBar">
                <progressBar 
                  :skillName="skillNamePhotoshop"
                  :width="widthPhotoshop"
                /> 
                <span>35%</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Language Section -->
        <section
          id="languages" 
          class="languages"
        >
          <h2>My Languages</h2>
          <divider />
          <div class="languageContainer">
            <div 
              id="card1" 
              class="card"
            >
              <img 
                src="./assets/images/americaFlag.png" 
                alt=""
              >
              <div class="level">
                <h1>English</h1>
                <p>
                  <span class="skillMeasure">
                    <span> speaking </span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star-half" />
                    </span> 
                  </span>
                  <br>
                  <span class="skillMeasure">
                    <span>listening </span> 
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star-half" />
                    </span>
                  </span>
                  <br>
                  <span class="skillMeasure">
                    <span> reading </span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </span>
                  </span>
                  <br>
                  <span class="skillMeasure">
                    <span>writing</span> 
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </span>
                  </span>
                  <br>
                </p> 
              </div>
            </div>
            <div 
              id="card2" 
              class="card" 
            >
              <img 
                src="./assets/images/indiaFlag.png" 
                alt=""
              >
              <div class="level">
                <h1>Hindi</h1>
                <p>
                  <span class="skillMeasure">
                    <span>speaking</span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </span>
                  </span>
                  <br>
                  <span class="skillMeasure">
                    <span> listening </span> 
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </span>
                  </span>
                  <br>
                  <span 
                    id="skillMeasure" 
                    class="skillMeasure" 
                  >
                    <span>reading </span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </span>
                  </span>  
                  <br>
                  <span 
                    id="skillMeasure" 
                    class="skillMeasure" 
                  >
                    <span>writing</span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </span>
                  </span>  
                  <br>
                </p>
              </div>
            </div>
            <div 
              id="card3" 
              class="card"
            >
              <img 
                src="./assets/images/turkeyFlag.jpg"
                alt=""
              >
              <div class="level">
                <h1>Turkish</h1>
                <p>
                  <span class="skillMeasure">
                    <span>speaking </span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star-half" />
                    </span>
                  </span>
                  <br>
                  <span class="skillMeasure">
                    <span>listening</span>
                    <span>         
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star-half" />
                    </span>
                  </span>
                  <br>
                  <span class="skillMeasure">
                    <span>reading</span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </span>
                  </span>
                  <br>
                  <span class="skillMeasure">
                    <span>writing</span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </span>
                  </span>  
                  <br>
                </p> 
              </div>
            </div>
            <div 
              id="card4" 
              class="card"
            >             
              <img 
                src="./assets/images/franceFlag.png"
                alt=""
              >             
              <div class="level">
                <h1>French</h1>
                <p>
                  <span class="skillMeasure">
                    <span>speaking </span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star-half" />
                    </span>
                  </span>                
                  <br>
                  <span class="skillMeasure">
                    <span>listening</span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star-half" />
                    </span>
                  </span>                   
                  <br>
                  <span class="skillMeasure">
                    <span>reading </span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star-half" />
                    </span>
                  </span>                  
                  <br>
                  <span class="skillMeasure">
                    <span>writing</span>
                    <span>
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </span>
                  </span>                  
                  <br>
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Education & Experience Section -->
        <section
          id="experience" 
          class="experience"
        >
          <h2>education &amp; experiences</h2>
          <divider />
          <div 
            id="experienceStart" 
            class="experienceContainer"
          >
            <div class="centerLine">
              <a 
                href="#experienceStart" 
                class="scrollIcon"
              >
                <i class="fas fa-caret-up" />
              </a>
            </div>
            <div class="row row-1">
              <div class="section">
                <i class="fas fa-university" />
                <div class="details">
                  <span class="timelineTitle">started university</span>
                  <span>date 1</span>
                </div> 
                <p>
                   &nbsp; Starting my studuies as a computer engineering student at Shahrood University of Technology was the start of my coding path . 
                  It was then that I got to know the world of coding and developing that instantly made me fall in love with it . I started learning basics of coding and
                  got to learn about important topics such as Database Design , Data Structures and Data Algorithms .
                </p>    
              </div>
            </div>
            <div class="row row-2">
              <div class="section">
                <i class="fas fa-code" />
                <div class="details">
                  <span class="timelineTitle">HTML &amp; CSS</span>
                  <span>date 2</span>
                </div>
                <p>
                  &nbsp;I got familiar with HTML and CSS through an extra course I took on my first term . Got to know the basics and got familiar with a little Javascript and PHP to use them for a learning project and it was at this stage 
                  that I realised my passion for Web Development and after some more researches decided to choose it as future career.
                </p>
              </div>
            </div>
            <div class="row row-1">
              <div class="section">
                <i class="fab fa-js" />
                <div class="details">
                  <span class="timelineTitle">Javascript</span>
                  <span>date 2</span>
                </div>
                <p>
                  &nbsp;Summer was a good time for me to put my full focus on Javascript without university duties . I started learning the language more using youtube courses
                  and got into errors and struggles with my codes but in the end all of this helped me make a good progress with the language.
                </p>
              </div>
            </div>
            <div class="row row-2">
              <div class="section">
                <i class="fas fa-building" />
                <div class="details">
                  <span class="timelineTitle">Internship</span>
                  <span>date 2</span>
                </div>
                <p>
                  &nbsp; Starting my Internship at Novaday company was a great leap in my path. I got to know and work with more complicated and heavier projects 
                  and learn a lot more things while doing so . My first steps in my internship was reviewing and learning more HTML , CSS and Javascript for which I did a project using only HTML and CSS and another
                  project which was a calculator project using pure Javascript.
                </p>
              </div>
            </div>
            <div class="row row-1">
              <div class="section">
                <i class="fab fa-git-alt" />
                <div class="details">
                  <span class="timelineTitle">Git</span>
                  <span>date 2</span>
                </div>
                <p>
                  &nbsp; I started using git and github through out my internship and university courses . I learned about using it from youtube and started putting my 
                  projects on github which was a great help on managing my code and collabing with others .
                </p>
              </div>
            </div>
            <div class="row row-2">
              <div class="section">
                <i class="fab fa-vuejs" />
                <div class="details">
                  <span class="timelineTitle">Vue.js</span>
                  <span>date 2</span>
                </div>
                <p>
                  &nbsp; Next step was learning a framework and I choose Vue.js , I started learning Vue through youtube courses. To really learn the framework 
                  I did a todo list project using vue and got to know more about Vue , Vue lifecycle , componnents and much more . After that I did a calendar document website
                  for my internship company which was a great help in learning more about Vue and working with a group.
                </p>
              </div>
            </div>
            <div class="row row-1">
              <div class="section">
                <i class="fas fa-window-restore" />
                <div class="details">
                  <span class="timelineTitle">Portfolio</span>
                  <span>date 2</span>
                </div>
                <p>
                  &nbsp; Creating this site as my own portfolio was one of my best learning experiences and a great way to put all my knowledge together and do a lot 
                  of searching learning new things and tricks . One of the things I got to learn during this project was GSAP library and using ScrollTrigger for my animations .
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Social Media Section -->
        <footer 
          id="footer" 
          class="footer"
        >
          <h2>connect with me on </h2>
          <div class="mediaContainer">
            <div class="mediaButton">
              <div class="mediaIcon">
                <a 
                  class="linkIcon" 
                  href="www.linkedin.com/in/mehrnaz-ghaffar-242399219"
                >
                  <i class="fab fa-linkedin" />
                </a>
              </div>
              <a 
                class="linkName" 
                href="www.linkedin.com/in/mehrnaz-ghaffar-242399219"
              >
                <span>linkedin</span>
              </a>
            </div>
            <div class="mediaButton">
              <div class="mediaIcon">
                <a 
                  class="linkIcon" 
                  href="http://www.instagram.com/mehrnaz._.ghr"
                >
                  <i class="fab fa-instagram" />
                </a>
              </div>
              <a 
                class="linkName" 
                href="http://www.instagram.com/mehrnaz._.ghr"
              >
                <span>instagram</span>
              </a>
            </div>
            <div class="mediaButton">
              <div class="mediaIcon">
                <a 
                  class="linkIcon" 
                  href="https://t.me/Mehrnaz_ghr"
                >
                  <i class="fab fa-telegram-plane" />
                </a>  
              </div>
              <a 
                class="linkName" 
                href="https://t.me/Mehrnaz_ghr"
              >
                <span>telegram</span>
               </a> 
            </div>
            <div class="mediaButton">
              <div class="mediaIcon">
                <a 
                  class="linkIcon" 
                  href="https://www.github.com/mehrnaz-ghaffar"
                >
                  <i class="fab fa-github" />
                </a>
              </div>
              <a 
                class="linkName" 
                href="https://www.github.com/mehrnaz-ghaffar"
              >
                <span>github</span>
              </a>
            </div>
          </div>
          <span class="copyRight"> © 2020 Mehrnaz Ghaffar Tabrizi </span>
        </footer>
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
import progressBar from './components/progressBar.vue'
import divider from './components/divider.vue'
import switchBox from './components/switchBox.vue'
  
export default {
  name: "App",
  components: { progressBar,
                divider ,
                switchBox
  },
  data(){
        return{
          clicked : false,
          skillNameHtml :"HTML",
          widthHtml: 330,
          skillNameJs :"Javascript",
          widthJs: 265,
          skillNameCss :"CSS",
          widthCss: 300,
          skillNameVue :"Vue.js",
          widthVue: 240,
          skillNameGit :"Git",
          widthGit: 180,
          skillNameJava :"Java",
          widthJava: 210,
          skillNamePython: "Python",
          widthPython: 190,
          skillNamePhotoshop : "Photoshop",
          widthPhotoshop: 160,
          darkMode: false,
        }
    },
  mounted(){
    const timeline = gsap.timeline({defaults :{ ease : "power1.out" }});
    timeline.to(".text", {y:"0%" , duration: 1, stagger: 0.25});
    timeline.to(".slider" , {y:"-100%", duration: 1.5 , delay: 0.5});
    timeline.to(".preIntroduction" , {y:"-100%", duration: 1}, "-=1");
    timeline.fromTo("nav" , { opacity:0 }, { opacity:1 , duration: 1 });
    timeline.fromTo(".introductionText" , { opacity:0 }, { opacity:1 , duration: 1 }, "-=1");
    
    // timeline.fromTo(".card", { opacity:0 } , { opacity:1 , duration:2} );

  },
    methods: {
      toggleNav : function(){
        this.clicked = !this.clicked
      },

      

    },
}
</script>


<style>


main{
  position: relative !important;
}

.data-scrollmagic-pin-spacer{
  padding-top: 0 !important;
} 

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
  color: rgba(193, 158, 240, 0.856);
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

.content{
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  background: #fff;
}

body {
  padding: 0;
  margin: 0;
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
  top: 90px;
  height: 530px;
  width: 78px;
  background: rgba(91, 62, 129, 0.438);
  padding: 6px 14px;
  transition: all 0.5s ease;
  border-radius: 0px 10px 10px 0px;
  z-index: 1;
}

/* .darkModemenu{
  position: fixed;
  left: 0;
  top: 90px;
  height: 530px;
  width: 78px;
  background: rgb(46, 33, 40);
  padding: 6px 14px;
  transition: all 0.5s ease;
  border-radius: 0px 10px 10px 0px;
} */

.menu.menuActive{
  width: 175px;
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

.menu .logoContent .logoName{
  opacity: 0;
  pointer-events: none;
}

.menu.menuActive .logoContent .logoName{
  opacity: 1;
  pointer-events: none;
  transition: all 0.8s ease;
}

.menu #menuIcon{
  position: absolute;
  color: #fff;
  left: 50%;
  top: 6px;
  font-size: 20px;
  height: 50px;
  width: 20px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
  cursor: pointer;
}

.menu.menuActive #menuIcon{
  left: 85%;
  cursor: pointer;
}

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

.menu ul li i, .menu .darkmodeIcon{
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
  transition: all 0.8s ease;
}

.darkmodeContent{
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
}

.darkmode{
  position: relative;
  padding: 10px 6px;
  height: 60px;
  display: flex;
  justify-content: space-around;
}

/* .darkmodeIcon */
.menu .darkmodeIcon{
  font-size: 19px;
}

.menu .switchButton{
  opacity: 0;
  display: none;
}

.menu.menuActive .switchButton{
  opacity: 1;
  display: flex;
  margin: 13px;
  /* transition: all 0.8s ease; */
}


/*  ///////////////  Introduction Section  ///////////////// */
.introduction{
  height: 100vh;
}

.introduction img{
  width: 100%;
  position: absolute;
  height: 100vh;      /*///////////////////////////////////*/
  object-fit: cover;
  z-index: -1;
}

.introductionText{
  position: absolute;
  color: rgba(246, 238, 255, 0.966);
  top: 27%;
  left: 28%;
  transform: translate(-50% , -20%);
  font-size: 5rem;
}

.introductionDetail{
  position: absolute;
  color: rgba(246, 238, 255, 0.966);
  top: 37%;
  left: 30%;
  transform: translate(-50% , -20%);
  font-size: 3rem;
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
  padding: 50px 0 10% 0;
  background: #fff;
  height: 120vh;
}

.aboutDark{
  padding: 50px 0 10% 0;
  background: rgba(18, 1, 22, 0.589);
}

.aboutContainer{
  margin: 60px 20px 20px 70px;
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
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
 /* position: absolute;
 left: 26%; */
 padding-left: 60px;
}

/* #rightDiv{
  position: absolute;
  right: 24%;
} */

.aboutImage{ 
  width: 900px;
  height: 680px;
  clip-path: circle(39%);
  position: relative;
  right: 20px;
  bottom: 140px;
  z-index: 1;
}

.aboutInformation p{
  text-align: center;
  margin-top: 50px;
}

.titles{
  margin-bottom: -20px;
}

.info{
  color: rgb(56, 54, 54);
}

/* .button{
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
}*/

@media screen and (max-width: 1365px) {
  .about{
    width: 400px;
  }
}

@media screen and (max-width: 670px) {
  .about{
    width: 200px;
  }

  ul li div{
    font-size: 10px;
  }

  .aboutImage{
    height: 200px;
  }
}

/* /////////////////  Skills Sections  ///////////////// */
.mySkills{
  padding-bottom: 100px;
  background: #fff;
  padding-top: 2px;
}

.mySkillsDark{
  padding-bottom: 100px;
  background: rgba(18, 1, 22, 0.589);
  padding-top: 2px;
}


.skillsContainer{
  margin-top: 70px;
  display: flex;
  justify-content: space-evenly;

}


.progressBar{
  display: flex;
  margin-bottom: 20px;
}

.progressBar span {
  margin-left: 10px;
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

.skillMeasure{
  display: flex;
  justify-content: space-evenly;
  block-size: 7px;
}

#skillMeasure{
  margin-right: 20px;
}

/*  ///////////////  Languages Section  ///////////////// */
.languages{
  padding: 100px 0 100px 0;
  background: #fff;
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
  background: rgba(246, 238, 255, 0.952);
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease-in-out;
  border-radius: 10px;
}

.card:hover{
  height: 420px;
}

/* .countryFlag{
  position: relative;
  width: 260px;
  height: 260px;
  top: -60px;
  left: 20px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
} */

.card img{
  /* max-width: 100%; */
  border-radius: 10px;
  height: 170px;
}

#card1{
  width: 290px;
}
/* 
#card1 img{
  height: 170px;

} */

.card .level{
  position: relative;
  margin-top: -140px;
  padding: 0px 15px;
  text-align: center;
  color: #000;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.card:hover .level{
  visibility: visible;
  opacity: 1;
  margin-top: 24px;
  transition-delay: 0.2s;
}

.level p i{
  color: coral;
}

/*  ///////////////  experience Section  ///////////////// */
.experience{
  background: rgba(193, 158, 240, 0.247);
  height: 203vh;  
  padding-top: 2px;
}

.experienceContainer{
  position: relative;
  max-width: 1080px;
  margin: 58px auto;
  padding: 0 20px;
}

.centerLine{
  position: absolute;
  width: 4px;
  height: 100%;
  background: #fff;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
}

.experienceContainer .row{
  display: flex;
}

.experienceContainer .row-1{
  justify-content: flex-start;
}

.experienceContainer .row-2{
  justify-content: flex-end;
}

.row .section{
  background: #fff;
  border-radius: 5px;
  width: calc(50% - 40px);
  padding: 20px;
  position: relative;
}

.row .section i,
.centerLine .scrollIcon{
  position: absolute;
  background: #fff; /* #f2f2f2 */
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: rgba(68, 44, 100, 0.726); /* #ff7979 */
  font-size: 17px;
  /* box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05); */

}

.centerLine .scrollIcon{
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
}

.row-1 .section i{
  top: 13px;
  right: -60px;
}

.row-2 .section i{
  top: 13px;
  left: -60px;
}

.experienceContainer .row .section::before{
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  top: 28px;
  /* z-index: -1; */  /*/////////////////  !!!!!!!!!!!!!!!!!!!!!!!!!  //////////////////////*/
  background: #fff;
  transform: rotate(45deg);
}

.row-1 .section::before{
  right: -7px;
}

.row-2 .section::before{
  left: -7px;
}

.details{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.timelineTitle{
  font-size: 22px;
  font-weight: 600;
}

.section p{
  margin: 10px 0 17px 0;
}

@media(max-width: 790px){
  .experienceContainer .centerLine{
    left: 40px;
  }

  .experienceContainer .row{
    margin: 30px 0 3px 60px;
  }

  .experienceContainer .row .section{
    width: 100%;
  }

  .row-1 .section::before{
    left: -7px;
  }

  .row-1 .section i{
    left: -60px;
  }
}

@media(max-width: 440px){
  .experienceContainer .centerLine ,
  .row .section::before ,
  .row .section i{
    display: none;
  }

  .experienceContainer .row{
    margin: 10px 0;
  }
}

/*  ///////////////  Social Media Section  ///////////////// */
.mediaContainer{
  margin-top: 70px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
}

.mediaContainer .mediaButton{
  /* display: inline-block; */
  height: 60px;
  width: 60px;
  margin: 0 5px;
  float: left;
  background: rgba(213, 200, 230, 0.836);
  overflow: hidden;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
}

.mediaContainer .mediaButton:hover{
  width: 200px;
}

.mediaContainer .mediaButton .mediaIcon{
  display: inline-block;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  box-sizing: border-box;
  line-height: 60px;
  text-align: center;
  transition: all 0.3s ease-out;
}

.mediaContainer .mediaButton:nth-child(1):hover .mediaIcon{
  background: #2867B2;
}

.mediaContainer .mediaButton:nth-child(2):hover .mediaIcon{
  background: #E1306C;
}

.mediaContainer .mediaButton:nth-child(3):hover .mediaIcon{
  background: #0088CC;
}

.mediaContainer .mediaButton:nth-child(4):hover .mediaIcon{
  background: #333;
}

.mediaContainer .mediaButton .mediaIcon i{
  line-height: 60px;
  font-size: 25px;
  transition: all 0.3s ease-out;
}

.mediaContainer .mediaButton:hover .mediaIcon i{
  color: #fff;
}

.mediaContainer .mediaButton span{
  font-size: 20px;
  font-weight: 500;
  line-height: 60px;
  margin-left: 10px;
  transition: all 0.3s ease-out;
}

.mediaContainer .mediaButton:nth-child(1) span{
  color: #2867B2;
}

.mediaContainer .mediaButton:nth-child(2) span{
  color: #E1306C;
}

.mediaContainer .mediaButton:nth-child(3) span{
  color: #0088CC;
}

.mediaContainer .mediaButton:nth-child(4) span{
  color: #333;
}

.linkName{
  text-decoration: none;
}

.linkIcon{
  color: #000;
}

.copyRight{
  display: flex;
  justify-content: center;
}


</style>
