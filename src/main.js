import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')


let tl = gsap.timeline({
  scrollTrigger: {
  trigger: ".test1",
  start: "top",
  end: "120%",
  markers: true,
  scrub: true,
  pin: true,
  },
});
tl.fromTo(".test1" , { opacity:0 } , { opacity:1 });
console.log(tl)