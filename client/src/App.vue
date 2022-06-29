<script setup lang="ts">
  import { ref } from 'vue';

  import TheNavBar from './components/TheNavBar.vue';

  const state = ref(0);

</script>

<template>
  <main :class="app.container">
    <TheNavBar />

    <h1>I am here</h1>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sit neque rem, laudantium, dolorem blanditiis cum commodi amet officiis ullam dicta veniam tempora placeat vero soluta asperiores similique deleniti ab.</div>
    <div class="text-base-content text-2xl">Hola </div>
    <div class="text-2xl">Hola </div>

    <button class="btn btn-sm btn-outline btn-secondary" @click.prevent="state++">
      increment {{ state }}
    </button>

    <button class="btn btn-sm btn-outline">
      outlined
    </button>
  </main>
</template>

<style module="app" lang="postcss">
  .container{
    @apply px-[4%] py-[1.5%];
  }
</style>