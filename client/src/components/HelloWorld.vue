<script setup lang="ts">
  import { ref } from 'vue';

  interface HelloProps {
    firstName: string,
    lastName: string,
    currentAge: number,
    isWorking?: boolean
  }
  
  const { user } = defineProps<{ user: HelloProps }>();
  const { firstName, lastName, currentAge, 
          isWorking = 'null is check' } = user;
  
  const emits = defineEmits<{ (e:'childConnect', payload: object) : void }>();

  // flow data
  const count = ref(0);
  const incrementCount = () => count.value++;

</script>

<template>
  <h1>{{ firstName }}</h1>
  <h2>{{ lastName }}</h2>
  <h3>{{ currentAge }}</h3>

  <p class="text-primary"> {{ isWorking }} </p>
  <button class="btn" type="button" place="asdas" @click="incrementCount">
    count is: {{ count }}
  </button>
  
  <button class="btn btn-sm btn-secondary" type="button" 
          @click="emits('childConnect', { name:'new object' })">
    emit event
  </button>
</template>