<script setup lang="ts">

  import { defineAsyncComponent } from 'vue';
  import LoaderApp from './components/LoaderApp.vue';

  const AsyncApp = defineAsyncComponent({
    loader: () => { 
      return new Promise((resolve) => {
        setTimeout(() => resolve( import('./App.vue') ), 10000);  
      });
    }, // get async component
    loadingComponent: LoaderApp
  });

</script>

<template>
  <AsyncApp />
</template>
