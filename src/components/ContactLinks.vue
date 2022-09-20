<script setup lang="ts">
import { Icon } from '../data';

defineProps<{ icons: Icon[] }>()
</script>

<template>
  <ul class="socials-row flex flex-wrap justify-center text-xl mt-4 mb-20 themed--socials-style-default">
    <li v-for="icon in icons"
      class="w-[45px] h-[45px] flex justify-center items-center rounded-full text-black bg-white m-2">
      <i :class="icon.class"></i>
    </li>
  </ul>
</template>
