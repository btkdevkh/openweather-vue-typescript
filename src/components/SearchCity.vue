<template>
  <div class="container">
    <Cities />
    <form @submit.prevent="onSubmit">
      <div>
        <input
          placeholder="Search your city..."
          v-model="city"
          name="city"
        />
      </div>
      <div>
        <button type="submit">Search</button>
      </div>
      <transition name="switch" mode="out-in">
        <transition-group tag="div" name="pop" appear>
          <p v-if="err" class="error">{{err}}</p>
          <p v-if="error" class="error">{{error}}</p>
        </transition-group>
      </transition>
    </form>
  </div>
</template>

<script lang="ts">
  import Cities from './Cities.vue';
  import { defineComponent, ref } from 'vue';
  import router from '../router';
  import getCity from '../composables/getCity';
  import { saveToLS } from '../utils/utils';

  export default defineComponent({
    components: { Cities },
    setup() {
      const city = ref<string>("");
      const err = ref<string>("");
      const { error, load } = getCity();       

      const onSubmit = async () => {
        if(!city.value) {
          err.value = "Please enter the city";
          setTimeout(() => err.value = "", 3000)
          return;
        }
        
        const foundCity = await load(city.value);

        const gotCity = {
          name: foundCity.name,
          temp: foundCity.main.temp
        }
        
        saveToLS("meteo", gotCity);
        
        router.push("/meteo");
      }

      return { city, err, error, onSubmit };
    }
  })
</script>
