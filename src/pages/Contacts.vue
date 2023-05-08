<template>
   <transition appear @before-enter="beforeEnter" @enter="enter">
    <q-page class="flex">
      <div class="q-pa-lg">
        <h2>Contacts</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod necessitatibus enim temporibus aliquam fugit dolore ut ducimus sit, rem vel quasi modi nihil nemo magnam reiciendis minima obcaecati molestiae harum?</p>
      </div>
    </q-page>
  </transition>
</template>

<script>
import { defineComponent } from 'vue'
import gsap from "gsap";

export default defineComponent({
  name: 'contacts',
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