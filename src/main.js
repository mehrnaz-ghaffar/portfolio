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


//--------------- header animation , parallax effect -----------------//
gsap.to(".background" ,{
  scrollTrigger: {
    trigger: ".introduction",
    start: "top",
    scrub: 1,
    // markers:true,
    pinSpacing: false
    
  },
  y :  400 ,
  duration: 3,
  triggerHook: 0,
})

gsap.to(".layer1" ,{
  scrollTrigger: {
    trigger: ".introduction",
    start: "top",
    scrub: 1,
    // markers:true,
    pinSpacing: false
  },
  y : -200 ,
  duration: 3,
  triggerHook: 0,
})

gsap.to(".layer2" ,{
  scrollTrigger: {
    trigger: ".introduction",
    start: "top",
    scrub: 1,
    // markers:true,
    pinSpacing: false
  },
  y : -400,
  duration : 4,
  triggerHook: 0,
})

// gsap.to(".about" ,{
//   scrollTrigger: {
//     trigger: ".introduction",
//     start: "top",
//     scrub: 1,
//     // markers:true, 
//     pinSpacing: false,

//   },
//   top : "0%",
//   duration: 3,
//   triggerHook: 0,
// })




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


//--------- about section animation, image circle going to full screen -----------//
let tl1 = gsap.timeline({
  scrollTrigger: {
  trigger: ".about",
  // duration: 2,
  start: "top ",
  end: "bottom", 
  markers: true, //delete this
  scrub: true,
  pin: true,
  immediateRender: false,
  delay: 0.25
  },
});
tl1.fromTo("#leftDiv", {x:-1000 }  , {x:70 , duration:2} )
   .fromTo("#rightDiv", {x:1000 } , {x:-110 , duration: 2}, "-=2" )
   .fromTo(".aboutImage" , { clipPath: "circle(39%)" } , { clipPath: "circle(75%)" , duration: 3 } )
   .fromTo("#leftDiv" , { scale: 1 } , { scale: 0 , duration: 3 } , "-=3" )
   .fromTo("#rightDiv" , { scale: 1 } , { scale: 0 , duration: 3} , "-=3"  )
  


// let tl = gsap.timeline({
//   scrollTrigger: {
//   trigger: ".about",
//   // duration: 2,
//   start: "top",
//   end: "bottom", //bottom
//   markers: true, //delete this
//   scrub: true,
//   pin: true,
//   immediateRender: false,
//   },
// });
// tl.fromTo(".aboutImage" , { clipPath: "circle(39%)" } , { clipPath: "circle(75%)" , duration: 2 } );
// tl.fromTo("#leftDiv" , { scale: 1 } , { scale: 0 } , { opacity: 0 , duration: 1 } /* , "-=2"*/ );
// tl.fromTo("#rightDiv" , { scale: 1 } , { scale: 0 } , { opacity: 0 , duration: 1 } /* , "-=2"*/ );



//------------- skill section animation ---------------//
let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".mySkills",
    start: "top center",
    end: "bottom",
    ease : "power1.out",
  },
});

tl2.fromTo(".loadingBar" , {opacity: 0} , {opacity:1 })
   .fromTo(".progressBar span" , {opacity: 0} , {opacity:1 })
   .from(".percentage",{ width: 0 , duration: 1.5} )



//----------------- language section anomation ---------------------//

