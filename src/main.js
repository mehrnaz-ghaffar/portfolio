import { TimelineMax } from 'gsap/gsap-core';
import Vue from 'vue'
import App from './App.vue'
import ScrollMagic from 'scrollmagic'
// import { TweenMax, TimelineMax } from "gsap"; 
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')


// header animation , parallax effect
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".layer1" , 3 , { y : -300 } )
  .to(".layer2" , 3 , { y : -200 } , "-=3" )
  .fromTo(".background" , { y : -50 } , { y : 0 , duration : 3 } , "-=3" )
  .to(".content" , 3 , { top : "0%" } , "-=3" )
// .to(".introductionText" , 5 ,{x : 500})

let scene = new ScrollMagic.Scene({
  triggerElement: "main" ,
  duration: "200%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("main")
  .addTo(controller);
console.log(scene.triggerElement)
console.log(timeline)


// about section animation, image circle going to full screen
// let tl = gsap.timeline({
//   scrollTrigger: {
//   trigger: ".aboutImage",
//   start: "top",
//   end: "100%", //bottom
//   markers: true, //delete this
//   scrub: true,
//   pin: true,
//   },
// });
// tl.fromTo(".aboutImage" , { clipPath: "circle(39%)" } , { clipPath: "circle(75%)" , duration: 2 } );
// tl.fromTo("#leftDiv" , { scale: 1 } , { scale: 0 } , { opacity: 0 , duration: 1 } /* , "-=2"*/ );
// tl.fromTo("#rightDiv" , { scale: 1 } , { scale: 0 } , { opacity: 0 , duration: 1 } /* , "-=2"*/ );
