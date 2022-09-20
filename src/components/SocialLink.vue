<script setup lang="ts">
import { ref } from 'vue';
import { SocialLink } from '../data';

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}

defineExpose({
  isOpen,
})
defineProps<{ socialLink: SocialLink }>()
</script>

<template>
  <div class="mb-4">
    <div class="bg-white rounded-xl relative border hover:border-cyan-500 h-[62px] flex flex-wrap items-center"
      :class="socialLink.subLinks?.length && isOpen ? 'rounded-b-none hover:border-white': ''">
      <div class="w-full">
        <a v-if="socialLink.link" :href="socialLink.link">
          <div class="flex text-black justify-center hover:text-cyan-500">
            <p class="absolute left-0 ml-5">
              <i :class="socialLink.icon"></i>
            </p>
            <p>{{socialLink.title}}</p>
          </div>
        </a>
        <div v-else v-on:click="toggle">
          <div class="flex text-black justify-center hover:text-cyan-500">
            <p class="absolute left-0 ml-5">
              <i :class="socialLink.icon"></i>
            </p>
            <p class="absolute right-0 mr-5">
              <i :class="isOpen ? 'fas fa-angle-up' : 'fas fa-angle-down'"></i>
            </p>
            <p>{{socialLink.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="socialLink.subLinks?.length && isOpen" class="p-4 border border-white border-t-none rounded-xl"
      :class="isOpen ? 'rounded-t-none' : ''">
      <iframe v-for="subLink in socialLink.subLinks" :src="subLink" class="w-full h-[350px] mt-2"></iframe>
    </div>
  </div>
</template>

<script>
</script>
