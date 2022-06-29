<script setup lang="ts">
  import { defineProps } from 'vue';
  import feather from 'feather-icons';

  interface featherConfigType {
    size: number,
    class?: string,
    'stroke-width'?: number
  }

  interface featherBaseType {
    icon: string
    config?: featherConfigType
  }

  const defaultConfig = { size: 20, 'stroke-width': 1 };
  
  const { icon, config } = defineProps<featherBaseType>();
  
  const currentIcon = feather.icons[icon];
  const checkCurrentConfig = (con: featherConfigType) => {
    const { size } = con;
    const currentSize = { width: size, height: size };
    delete con.size;
    
    return { ...con, ...currentSize };
  };

  const currentConfig = checkCurrentConfig({ ...defaultConfig, ...config });
  const currentSvg = currentIcon.toSvg(currentConfig);

</script>

<template>
  <span v-html="currentSvg" />  
</template>