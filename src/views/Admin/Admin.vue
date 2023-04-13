<script setup lang="ts">
import type { Column } from "@/components/Core/CoreTable.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let drawer = ref(true);
let rail = ref(true);

const goToBrandsAdmin = () => {
  router.push({ name: "BrandAdmin" });
};
</script>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        color="light-blue-darken-3"
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
            prepend-icon="mdi-truck-alert"
            title="Orders"
            value="orders"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-store-alert"
            title="Products"
            value="products"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group"
            title="Users"
            value="users"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-alpha-b-box"
            title="Brands"
            value="brands"
            @click="goToBrandsAdmin"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-shape-plus"
            title="Categories"
            value="categories"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
