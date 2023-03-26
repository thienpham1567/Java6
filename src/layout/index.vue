<script setup lang="ts">
import ZSHeader from "@/components/Layout/ZSHeader.vue";

</script>

<template>
  <v-app>
    <ZSHeader />
    <main>
      <router-view />
    </main>
    <footer></footer>
  </v-app>
</template>
