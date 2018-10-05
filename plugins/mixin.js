import Vue from 'vue'

Vue.mixin({
  transition: {
    duration: '1000',
    enterActiveClass: 'animated bounceIn',
    leaveActiveClass: 'animated bounceOut'
  }
})
