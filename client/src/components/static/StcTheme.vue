<script setup lang="ts">
  import { ref, computed } from 'vue';

  import BaseIcon from '@components/base/BaseIcon.vue';
  import { setLocalTheme, storageMethods } from '@extend/BaseExt';

  const { getLocalItem } = storageMethods;
  const initialState = getLocalItem('theme') === 'dark'; 

  const currentTheme = ref(initialState);

  const classTheme = computed(() => {
    const value = currentTheme.value;
    return {
      sun: value ? 'translate-y-8' : 'translate-y-0',
      moon: !value ? '-translate-y-8' : 'translate-y-0'
    }
  });

  const localConfig = { size: 15, 'stroke-width' : 2 }; // for icon feather

  function changueTheme(st: boolean) {
    currentTheme.value = !st;
    const nameTheme = st ? 'dark' : 'light';
    setLocalTheme(nameTheme);
  }

</script>

<template>
  <button class="px-2 btn btn-sm btn-outline overflow-hidden" 
          @click.prevent="changueTheme(currentTheme)"> 
    <div class="flex flex-col -space-y-4">
      <base-icon icon="sun" :class="`${theme.transition} ${classTheme.sun}`" :config="localConfig" />
      <base-icon icon="moon" :class="`${theme.transition} ${classTheme.moon}`" :config="localConfig" />
    </div>
  </button>
</template>

<style module="theme" lang="postcss">
  .transition {
    @apply transition-transform ease-in;
  }
</style>