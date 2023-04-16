<script setup lang="ts">
import { ref } from "vue";

const tab = ref("table");
</script>
<template>
  <v-card height="800">
    <v-tabs v-model="tab" bg-color="light-blue-darken-3">
      <v-tab value="table">Table</v-tab>
      <v-tab value="chart">Chart</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="table">Table</v-window-item>
        <v-window-item value="chart">Chart</v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
