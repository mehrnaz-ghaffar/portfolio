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
  start: "top ",
  end: "bottom", 
  scrub: 0.5,
  pin: true,
  immediateRender: false,
  delay: 1
  },
});
tl1.fromTo("#leftDiv", {x:-1000 }  , {x:240 , duration:3} )
   .fromTo("#rightDiv", {x:1000 } , {x:-280 , duration: 3}, "-=3" )
   .fromTo(".aboutImage" , { clipPath: "circle(25%)" } , { clipPath: "circle(75%)" , duration: 3 } )
   .fromTo("#leftDiv" , { scale: 1 } , { scale: 0 , duration: 3 } , "-=3" )
   .fromTo("#rightDiv" , { scale: 1 } , { scale: 0 , duration: 3} , "-=3"  )
   .fromTo("#devider" , { opacity: 1 } , { opacity: 0 , duration: 2 } , "-=3" )
  //  .fromTo(".about h2" , { scale: 1 } , { scale: 0 , duration: 3 } , "-=3" )  

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



//------------- skill section animation , bars appearing and percentages easing in ---------------//
let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".mySkills",
    start: "top center",
    end: "bottom",
    ease : "power1.out",
  },
});

tl2.fromTo(".loadingBar" , {opacity: 0} , {opacity:1 , duration: 1.5})
   .fromTo(".progressBar span" , {opacity: 0} , {opacity:1 , duration: 1.5 })
   .from(".percentage",{ width: 0 , duration: 1.5} );



//----------------- language section animation ---------------------//
let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger: ".languages",
    start: "top",
    end: "bottom",
    pin: true,
    // scrub: true
   
  },
});

tl3.fromTo("#card1", { opacity: 0} , {opacity: 1 , duration: 0.1})
   .fromTo("#card2", { opacity: 0} , {opacity: 1 , duration: 0.1})
   .fromTo("#card3", { opacity: 0} , {opacity: 1 , duration: 0.1})
   .fromTo("#card4", { opacity: 0} , {opacity: 1 , duration: 0.1})
   .from("#card1" , { top: -900 , duration: 1.7})
   .from("#card2" , { top: 900 , duration: 1.7})
   .from("#card3" , { top: -900 , duration: 1.7})
   .from("#card4" , { top: 900 , duration: 1.7})


//---------------- experiance section animation -------------------//
let tl4 = gsap.timeline({
  scrollTrigger:{
    trigger: ".experience",
    start: "top",
    end: "bottom",
  },
});

tl4.fromTo(".row" , {opacity: 0} , {opacity: 1 , duration: 2})

//---------------- socisl media section animation -------------------//
let tl5 = gsap.timeline({
  scrollTrigger:{
    trigger: ".footer",
    start: "top 85%",
    end: "bottom",
    // toggleActions: 'play none reverse none'
  },
});

tl5.fromTo(".mediaButton" , {opacity: 0} , {opacity: 1 , duration: 3})
   .to(".mediaButton" , { rotation: 360 , duration: 1.3 })
   .fromTo(".copyRight" , {opacity: 0} , {opacity: 1 , duration: 3} , "-=3" )
  