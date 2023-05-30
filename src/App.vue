<template>
  <div class="w-full h-full" >
   <app-header/>
    <router-view/>
    <app-footer />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>