<template>
  <div class="cities">
    <City 
      v-for="city in cities" 
      :key="city.id"
      :city="city"
    />
  </div>
</template>

<script lang="ts">
  import City from './City.vue'
  import getCity from '@/composables/getCity'
  import { defineComponent, ref, onMounted } from 'vue'

  export default defineComponent({
    components: { City },
    setup () {
      const foundCityParis = ref(null)
      const foundCityPhnomPenh = ref(null)
      const foundCityBucarest = ref(null)
      const cities = ref<any[]>([])
      const { error, load } = getCity();    

      onMounted(async() => {
        foundCityPhnomPenh.value = await load('phnom penh');
        foundCityParis.value = await load('paris');
        foundCityBucarest.value = await load('bucarest');
        cities.value = [foundCityPhnomPenh.value, foundCityParis.value, foundCityBucarest.value]
      })   

      return { error, cities }
    }
  })
</script>

<style>
  .cities {
    color: #fff;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;
    gap: 5px;
    flex-wrap: wrap;
  }
</style>
