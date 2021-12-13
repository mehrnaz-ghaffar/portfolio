import { TimelineMax } from 'gsap/gsap-core';
import Vue from 'vue'
import App from './App.vue'

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
  .to(".background" , 3 , { y : 50 } , "-=3" )
// .to(".introductionText" , 5 ,{x : 500})

let scene = new ScrollMagic.Scene({
  triggerElement: ".introduction" ,
  duration: "100%",
  triggerHook: 0.5,
})
  .setTween(timeline)
  .setPin(".introduction")
  .addTo(controller);
console.log(scene)


// about section animation, image circle going to full screen
let tl = gsap.timeline({
  scrollTrigger: {
  trigger: ".aboutImage",
  start: "top",
  end: "100%", //bottom
  markers: true, //delete this
  scrub: true,
  pin: true,
  },
});
tl.fromTo(".aboutImage" , { clipPath: "circle(39%)" } , { clipPath: "circle(75%)" , duration: 2 } );
tl.fromTo("#leftDiv" , { scale: 1 } , { scale: 0 } , { opacity: 0 , duration: 1 } /* , "-=2"*/ );
tl.fromTo("#rightDiv" , { scale: 1 } , { scale: 0 } , { opacity: 0 , duration: 1 } /* , "-=2"*/ );
