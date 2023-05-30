<template>
  <div class="relative py-[22px] pl-[51px] flex justify-center border-b-2">
    <router-link to="/">
      <img src="/images/Logo.svg" alt="Logo" class="absolute left-0 md:left-[51px]">
    </router-link>
    <div class="flex space-x-[24px]">
      <router-link to="/" class="text-[14px] leading-[24px] text-light-gray cursor-pointer">Форма</router-link>
      <router-link to="/preview" class="text-[14px] leading-[24px] text-light-gray cursor-pointer">Превью</router-link>
    </div>
  </div>

</template>

<script lang=ts setup>

</script>
