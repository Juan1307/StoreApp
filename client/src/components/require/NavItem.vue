<script setup lang="ts">
  // import { useAttrs } from 'vue';
  // const attrs = useAttrs();

  // import NavItemDrop from './NavItemProp.vue';
</script>

<template>
  <li>
    <a class="py-1 px-3">
      <slot />
    </a>
    <slot name="drop" />
  </li>
</template>
<!-- <style module="navbar_item" lang="postcss">
  .item{

  }
</style> -->