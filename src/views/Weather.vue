<template>
<transition 
  appear
  @before-enter="beforeEnter"
  @enter="enter"
>
  <p className="meteoInfo">{{cityLSComputed}}</p>
</transition>
  <router-link to="/"><i class="fas fa-home"></i></router-link>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import gsap from 'gsap';
  import { getFromLS } from '../utils/utils';

  export default defineComponent({
    setup() {
      const cityLS = getFromLS('meteo');
      cityLS[0].temp > 18 ? 
      document.body.style.background = 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%)' :
      document.body.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)';

      const cityLSComputed = computed(() => {
        if(cityLS[0].temp > 18 ) return `${cityLS[0].name}, It's ${Math.round(cityLS[0].temp)} °C, Walk your dog !`;
        else return `${cityLS[0].name}, It's ${Math.round(cityLS[0].temp)} °C, Take your coat !`;
      })

      const beforeEnter = (el: any) => {
        el.style.transform = 'translateY(-60px)'
        el.style.opacity = 0
      }
      const enter = (el: any, done: any) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'bounce.out',
          onComplete: done,
        })
      }
      
      return { cityLSComputed, beforeEnter, enter }
    }
  })
</script>
