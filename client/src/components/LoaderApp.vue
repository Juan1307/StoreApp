<script setup lang="ts">

  import { setLocalTheme } from './../extend/BaseExt.ts'; 
  setLocalTheme(); // no params check theme

</script>
<template>
  <main class="vov fade-in slow h-screen w-full flex">
    <section class="m-auto flex-center flex-col space-y-5">
      <div class="flex items-center space-x-2">
        <picture>
          <img class="w-20" src="./../assets/logo.png" alt="logoapp" />
        </picture>
        <h1 class="font-sati text-5xl">agri</h1>
      </div>

      <span class="text-primary loader-circle l-base">
        <span />
      </span>
    </section>
  </main>
</template>
