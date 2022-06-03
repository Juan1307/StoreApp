<script setup lang="ts">
  // import { reactive, toRefs } from 'vue';
  import HelloWorld from './components/HelloWorld.vue'

  const currentUser = {
    firstName: 'Juanito',
    lastName: 'Prroee',
    currentAge: 23
  };

  const handleChildEvent = (payload) => {
    console.log(payload);
  };

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button class="btn btn-primary btn-sm font-sati">Hello daisyui</button>
  <HelloWorld :user="currentUser" @child-connect="handleChildEvent" />
</template>
