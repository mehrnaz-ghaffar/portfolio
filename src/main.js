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


// // header animation , parallax effect
gsap.to(".background" ,{
  scrollTrigger: {
    trigger: ".introduction",
    start: "top",
    scrub: 1,
    markers:true,
    pinSpacing: false
    
  },
  y :  -100 ,
  duration: 3
})

gsap.to(".layer1" ,{
  scrollTrigger: {
    trigger: ".introduction",
    start: "top",
    scrub: 1,
    markers:true,
    pinSpacing: false
  },
  y : -300 ,
  duration: 3
})

gsap.to(".layer2" ,{
  scrollTrigger: {
    trigger: ".introduction",
    start: "top",
    scrub: 1,
    markers:true,
    pinSpacing: false
  },
  y : -600,
  duration : 4,
})

gsap.to(".content" ,{
  scrollTrigger: {
    trigger: ".introduction",
    start: "top",

    scrub: 1,
    markers:true, 
    pinSpacing: false
  },
  top : "0%",
  duration: 3
})
// let controller = new ScrollMagic.Controller();
// let timeline = new TimelineMax();

// timeline
//   .to(".layer1" , 3 , { y : -300 } )
//   .to(".layer2" , 3 , { y : -200 } , "-=3" )
//   .fromTo(".background" , { y : -50 } , { y : 0 , duration : 3 } , "-=3" )
//   .to(".content" , 3 , { top : "0%" } , "-=3" )
//   // .to(".introductionText" , 3 ,{x : 900} , "-=3" )

// let scene = new ScrollMagic.Scene({
//   triggerElement: "main" ,
//   duration: "200%",
//   triggerHook: 0,
// })
//   .setTween(timeline)
//   .setPin(".introduction",{
//     pushFollowers: false
//   })
//   .addTo(controller);
// console.log(scene.triggerElement)
// console.log(timeline)


// about section animation, image circle going to full screen
let tl = gsap.timeline({
  scrollTrigger: {
  trigger: ".aboutImage",
  duration: 100,
  start: "top",
  end: "bottom", //bottom
  markers: true, //delete this
  scrub: true,
  pin: true,
  },
});
tl.fromTo(".aboutImage" , { clipPath: "circle(39%)" } , { clipPath: "circle(75%)" , duration: 2 } );
tl.fromTo("#leftDiv" , { scale: 1 } , { scale: 0 } , { opacity: 0 , duration: 1 } /* , "-=2"*/ );
tl.fromTo("#rightDiv" , { scale: 1 } , { scale: 0 } , { opacity: 0 , duration: 1 } /* , "-=2"*/ );
