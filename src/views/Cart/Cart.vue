<script setup lang="ts">
import { onMounted } from "vue";
import { useGlobalStore } from "@/store";

const { getLoading } = useGlobalStore();
</script>

<template>
  <div v-if="getLoading" class="loading">
    <v-progress-circular
      :size="60"
      :width="6"
      color="light-blue-darken-3"
      indeterminate
    ></v-progress-circular>
  </div>
  <v-container v-else class="padding-y-page">
    <v-row></v-row>
  </v-container>
</template>
