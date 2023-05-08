<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
  <q-page class="flex">
    <div class="q-pa-lg">
      <h2>Help</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus id similique, corrupti est voluptatum laborum unde dolorum dicta cupiditate qui provident praesentium! Deserunt quia numquam fuga id ducimus nemo.</p>
    </div>
  </q-page>
</transition>
</template>

<script>
import { defineComponent } from 'vue'
import gsap from "gsap";


export default defineComponent({
  name: 'help',
  methods: {
    beforeEnter(el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(-100px)";
    },
    enter(el) {
      gsap.to(el, {
        duration: 1,
        y: 2,
        opacity: 1,
      })
      
    }
  },
})
</script>
<style lang="scss">
  body {
    color: $dark;
  }
</style>