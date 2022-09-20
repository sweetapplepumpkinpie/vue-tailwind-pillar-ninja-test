<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SocialLink from './components/SocialLink.vue'
import AppFooter from './components/AppFooter.vue'
import ContactLinks from './components/ContactLinks.vue'
import { socialLinks, icons } from './data';

</script>
<template>
  <div
    class="bg-no-repeat fixed -z-10 w-screen left-0 top-0 bg-[center_top] bg-cover h-screen bg-[url('https://athlane-file-management-prod.s3.amazonaws.com/8bdd754c-2d5a-4fce-8ddf-e65c3c9f2376?_reload=1f27b5f0-3887-11ed-b207-8935e31d7637')]">
  </div>
  <div class="flex justify-center">
    <div class="fixed z-20 max-w-screen-sm w-full py-3 flex justify-end">
      <button
        class="rounded-full shadow-md override-default h-10 w-10 bg-white text-gray-600 transition-shadow transition-colors duration-300 hover:shadow-lg hover:text-gray-900">
        <i class="fa fa-external-link"></i>
      </button>
    </div>
    <div class="max-w-screen-sm w-full pt-6 relative z-10">
      <div class="text-white relative flex flex-col items-center justify-center mb-6">
        <div class="w-[98px]">
          <img alt="ninja" class="w-full rounded-full"
            src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_300,h_300/user-image/page/1a8afd21-5e4c-41e3-a84e-390a2f4fba69?_reload=1f360dd0-3887-11ed-b207-8935e31d7637" />
        </div>
        <h1 class="mt-4 font-bold">Ninja</h1>
        <p class="text-[0.825rem] font-[300] mmt-1 leading-[1.5rem]"> I love video games 👾 </p>
      </div>
      <social-link v-for="(socialLink, index) in socialLinks" :socialLink="socialLink"
        :class="index === 0 ? 'animate-pulse-scale' : ''"></social-link>
      <contact-links :icons="icons"></contact-links>
      <div class="relative z-10">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

