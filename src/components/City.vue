<template>
  <div class="city-item">
    <div v-for="weather in city.weather" :key="weather.id">
      <img 
        v-if="weather.description === 'couvert'" 
        src="../assets/img/rainny.png" 
        alt="weather image"
      >
      <img 
        v-if="weather.description === 'peu nuageux'" 
        src="../assets/img/sunny.png" 
        alt="weather image"
      >
      <img 
        v-if="weather.description === 'partiellement nuageux'" 
        src="../assets/img/cloudyless.png" 
        alt="weather image"
      >
    </div>
    <h4>{{ city.name }}</h4>
    <div>{{ city.main.temp }} °C</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: ['city']
  })
</script>

<style>
  .city-item {
    flex: 1;
    padding: 25px;
    background-color: rgb(0,0,0,.5);
    border-radius: 5px;
  }
  .city-item img {
    height: 100px;
    object-fit: cover;
  }
</style>
