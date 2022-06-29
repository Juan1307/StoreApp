<script setup lang="ts">

  import { defineAsyncComponent } from 'vue';
  import TheLoader from './components/TheLoader.vue';

  const AsyncApp = defineAsyncComponent({
    loader: () => { 
      return new Promise((resolve) => {
        setTimeout(() => resolve( import('./App.vue') ), 2000);  
      });
    }, // get async component
    loadingComponent: TheLoader
  });

</script>

<template>
  <AsyncApp />
</template>
