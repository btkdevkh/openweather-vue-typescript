<template>
  <main>
    <SearchCity />
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SearchCity from '../components/SearchCity.vue';

  export default defineComponent({
    name: 'Home',
    components: { SearchCity },
    setup() {
      document.body.style.background = '';
    }
  });
</script>
