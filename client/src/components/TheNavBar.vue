<script setup lang="ts">
  import { ref, useCssModule } from 'vue';

  import BaseIcon from './base/BaseIcon.vue';
  import NavItem from './require/NavItem.vue';
  import StcTheme from './static/StcTheme.vue';

  const arrayRoutes = [
    { path:'/products', text:'Productos', icon:'table' },
    { path:'/howwork', text:'¿ Como funciona ?', icon:'help-circle' },
    { path:'/companies', text:'Empresas', icon:'home' }
  ];

  const currentModule = useCssModule('navbar'); // set module
  const currentIndex = ref(0);

  const stateClassActive = (st: number, idx: number) => st === idx && currentModule.nav_item_active;
  function pathCurrentRoute(path: string, index: number) {
    currentIndex.value = index;
  }

</script>

<template>
  <nav :class="`${navbar.nav_bar} navbar border rounded`">
    <div class="navbar-start">
      <!-- logo navbar -->
      <a class="normal-case text-xl">Acry</a>
    </div>
    <div class="navbar-center">
      <ul class="menu menu-horizontal p-0 space-x-3">
        <!-- Navbar Items  -->
        <nav-item v-for="({text, path, icon}, index) of arrayRoutes" :key="index" 
                  :class="stateClassActive(currentIndex, index)" 
                  @click.prevent="pathCurrentRoute(path, index)">
          <base-icon :icon="icon" />
          <span v-text="text" />
        </nav-item>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="mr-2">
        <button class="btn btn-sm btn-primary">
          Iniciar Sesion
        </button>
      </div>
      <StcTheme />
      <!-- <a class="btn btn-sm">Get started</a> -->
    </div>
  </nav>
</template>

<style module="navbar" lang="postcss">
  .nav_bar{
    @apply py-2 px-3 min-h-[3rem];
  }

  .nav_item_active{
    @apply rounded-lg bg-primary text-primary-content;
  }
</style>