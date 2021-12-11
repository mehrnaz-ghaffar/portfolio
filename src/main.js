import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')


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
console.log(tl)
