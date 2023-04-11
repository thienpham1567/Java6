<script setup lang="ts">
import { ref } from "vue";

let drawer = ref(true);
const items = ref([
  { title: "Order", icon: "mdi-home-city" },
]);
let rail = ref(true);
</script>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="Admin"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Orders"
            value="home"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>

      </v-main>
    </v-layout>
  </v-card>
</template>
